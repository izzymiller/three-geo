import Meta from "es-pack-js/src/meta";

import * as THREE from "three";
import tilebelt from "@mapbox/tilebelt";
import Laser from "three-laser-pointer/src";

import * as turfHelpers from "@turf/helpers";
import turfDestination from "@turf/destination";
import turfTransformTranslate from "@turf/transform-translate";
import turfTransformRotate from "@turf/transform-rotate";
import turfBbox from "@turf/bbox";
import turfCenter from "@turf/center";
import turfDistance from "@turf/distance";
import turfBboxPolygon from "@turf/bbox-polygon";
import turfCircle from "@turf/circle";

class Utils {
  static createLine(arr, opts = { color: 0xff0000, maxPoints: 256 }) {
    const laser = new Laser(opts);
    laser.updatePoints(arr);
    return laser;
  }
  static bboxToWireframe(wsen, proj, opts = {}) {
    const defaults = {
      offsetZ: 0.0,
      color: 0x00cccc,
      height: 0.001,
    };
    const actual = Object.assign({}, defaults, opts);

    const [w, s, e, n] = wsen; // of bbox
    // console.log('wsen:', wsen);
    const offset = proj([(s + n) / 2, (w + e) / 2]); // lat, lng -> x, y
    // console.log('offset:', offset);

    const [pw, pn] = proj([n, w]);
    const [pe, ps] = proj([s, e]);
    // console.log('pw, pn, pe, ps:', pw, pn, pe, ps);
    // const sides = [0.05, 0.05]; // show the mid point
    const sides = [pe - pw, pn - ps];

    const dzBounds = actual.height;
    const ls = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxBufferGeometry(...sides, dzBounds)),
      new THREE.LineBasicMaterial({ color: actual.color })
    );
    ls.position.set(...offset, -dzBounds / 2 + actual.offsetZ);
    ls.name = `bbox-${window.performance.now()}`;
    return {
      obj: ls,
      offset: [...offset, actual.offsetZ],
      size: [...sides, actual.height],
    };
  }
  static tileToBbox(tile) {
    return tilebelt.tileToBBOX(tile);
  }

  // REMOVING in favour of the WIP `Elevation` API
  static _resolveTri(x, y, meshes, scale, shiftZ) {
    const isect = new Laser().raycast(
      new THREE.Vector3(x, y, 12000), // ray origin
      new THREE.Vector3(0, 0, -1), // ray direction
      meshes
    );
    // console.log('isect:', isect);
    if (!isect) return null;

    // console.log('isect:', isect);
    // console.log('isect.point.z:', isect.point.z);
    // console.log('isect.faceIndex:', isect.faceIndex);
    // https://stackoverflow.com/questions/41540313/three-buffergeometry-accessing-face-indices-and-face-normals
    const faceIndex = isect.faceIndex;
    const indexArr = isect.object.geometry.index.array;
    const attrPos = isect.object.geometry.attributes.position;
    const tri = [0, 1, 2].map((i) =>
      new THREE.Vector3()
        .fromBufferAttribute(attrPos, indexArr[3 * faceIndex + i])
        .multiplyScalar(scale)
        // z's of tri is relative to the isect point
        .add(new THREE.Vector3(0, 0, shiftZ ? shiftZ : -isect.point.z))
    );
    // console.log('isect tri (z-shifted):', tri);
    return {
      // return new objects to remain pure
      faceIndex: isect.faceIndex,
      isectPoint: isect.point.clone(),
      tri: tri,
      normal: isect.face.normal.clone(),
    };
  }

  // `@turf` dependent methods
  static createTurfPoint(ll) {
    return turfHelpers.point([ll[1], ll[0]]);
  }

  static betterSquare(center, radius) {
    const cross = Math.sqrt(2 * radius ** 2);
    const coordinates = [];
    console.log(cross);

    for (let i = 0; i < 4; i++) {
      coordinates.push(
        turfDestination(center, cross, (i * -360) / 4 + 45, {}).geometry
          .coordinates
      );
    }
    coordinates.push(coordinates[0]);

    return coordinates; // todo generate this polygon. turf? or just leave as coords?
  }

  static polygonToBbox(coords, bufferRadius) {
    const line = turfHelpers.lineString(coords); // Coords to turf linestring
    console.log("generated a nice line", line);
    const polyBbox = turfBboxPolygon(turfBbox(line)); // Generate a not-necessarily-square bounding box
    console.log("generated a nice polybbox", polyBbox);

    const centerPoint = turfCenter(polyBbox); // Get center of the bbox
    console.log("got the centerpoint", centerPoint);
    const xLength = turfDistance(
      turfHelpers.point(polyBbox.geometry.coordinates[0][0]),
      turfHelpers.point(polyBbox.geometry.coordinates[0][2])
    ); //distance in km
    const yLength = turfDistance(
      turfHelpers.point(polyBbox.geometry.coordinates[0][3]),
      turfHelpers.point(polyBbox.geometry.coordinates[0][1])
    ); //distance in km
    console.log(xLength, yLength);
    const radius = Math.max(xLength, yLength) / 2 + bufferRadius; // Get max radius of polygon from that center point.
    // var distance = turf.distance(from, to, options);

    // const squareBbox = this.betterSquare(centerPoint, radius)
    const squareBbox = turfBbox(
      turfBboxPolygon(turfBbox(turfCircle(centerPoint, radius, { steps: 64 })))
    );

    console.log(squareBbox);
    return squareBbox;
  }

  static originRadiusToBbox(origin, radius) {
    const [w, n] = turfDestination(this.createTurfPoint(origin), radius, -45, {
      units: "kilometers",
    }).geometry.coordinates;
    const [e, s] = turfDestination(this.createTurfPoint(origin), radius, 135, {
      units: "kilometers",
    }).geometry.coordinates;
    return [w, s, e, n];
  }
  static translateTurfObject(
    turfObj,
    dx,
    dy,
    dz,
    unitsPerMeter,
    mutate = true
  ) {
    const vec = new THREE.Vector2(dx, dy).divideScalar(unitsPerMeter);
    const theta = 90.0 - (vec.angle() * 180.0) / Math.PI;
    return turfTransformTranslate(turfObj, vec.length(), theta, {
      units: "meters",
      zTranslation: dz / unitsPerMeter,
      mutate: mutate, // "significant performance increase if true" per doc
    });
  }
  static rotateTurfObject(turfObj, deg, pivotLatlng, mutate = true) {
    return turfTransformRotate(turfObj, deg, {
      pivot: [pivotLatlng[1], pivotLatlng[0]],
      mutate: mutate,
    });
  }
}

Utils.Meta = Meta;

export default Utils;
