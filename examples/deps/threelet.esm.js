var Threelet;
Threelet = (() => {
  var e = {
      509: (e, t, n) => {
        "use strict";
        n.d(t, { default: () => D });
        n(666);
        const r = THREE;
        class o {
          static createButton(e, t) {
            t &&
              console.error(
                'THREE.VRButton: The "options" parameter has been removed. Please set the reference space type via renderer.xr.setReferenceSpaceType() instead.'
              );
            const n = document.createElement("button");
            function r() {
              (n.style.display = ""),
                (n.style.cursor = "auto"),
                (n.style.left = "calc(50% - 75px)"),
                (n.style.width = "150px"),
                (n.onmouseenter = null),
                (n.onmouseleave = null),
                (n.onclick = null),
                (n.textContent = "VR NOT SUPPORTED");
            }
            function o(e) {
              (e.style.position = "absolute"),
                (e.style.bottom = "20px"),
                (e.style.padding = "12px 6px"),
                (e.style.border = "1px solid #fff"),
                (e.style.borderRadius = "4px"),
                (e.style.background = "rgba(0,0,0,0.1)"),
                (e.style.color = "#fff"),
                (e.style.font = "normal 13px sans-serif"),
                (e.style.textAlign = "center"),
                (e.style.opacity = "0.5"),
                (e.style.outline = "none"),
                (e.style.zIndex = "999");
            }
            if ("xr" in navigator)
              return (
                (n.id = "VRButton"),
                (n.style.display = "none"),
                o(n),
                navigator.xr
                  .isSessionSupported("immersive-vr")
                  .then(function (t) {
                    t
                      ? (function () {
                          let t = null;
                          async function r(r) {
                            r.addEventListener("end", o),
                              await e.xr.setSession(r),
                              (n.textContent = "EXIT VR"),
                              (t = r);
                          }
                          function o() {
                            t.removeEventListener("end", o),
                              (n.textContent = "ENTER VR"),
                              (t = null);
                          }
                          (n.style.display = ""),
                            (n.style.cursor = "pointer"),
                            (n.style.left = "calc(50% - 50px)"),
                            (n.style.width = "100px"),
                            (n.textContent = "ENTER VR"),
                            (n.onmouseenter = function () {
                              n.style.opacity = "1.0";
                            }),
                            (n.onmouseleave = function () {
                              n.style.opacity = "0.5";
                            }),
                            (n.onclick = function () {
                              if (null === t) {
                                const e = {
                                  optionalFeatures: [
                                    "local-floor",
                                    "bounded-floor",
                                    "hand-tracking",
                                  ],
                                };
                                navigator.xr
                                  .requestSession("immersive-vr", e)
                                  .then(r);
                              } else t.end();
                            });
                        })()
                      : r();
                  }),
                n
              );
            {
              const e = document.createElement("a");
              return (
                !1 === window.isSecureContext
                  ? ((e.href = document.location.href.replace(
                      /^http:/,
                      "https:"
                    )),
                    (e.innerHTML = "WEBXR NEEDS HTTPS"))
                  : ((e.href = "https://immersiveweb.dev/"),
                    (e.innerHTML = "WEBXR NOT AVAILABLE")),
                (e.style.left = "calc(50% - 90px)"),
                (e.style.width = "180px"),
                (e.style.textDecoration = "none"),
                o(e),
                e
              );
            }
          }
        }
        class i {
          static createButton(e, t = {}) {
            const n = document.createElement("button");
            function r() {
              (n.style.display = ""),
                (n.style.cursor = "auto"),
                (n.style.left = "calc(50% - 75px)"),
                (n.style.width = "150px"),
                (n.onmouseenter = null),
                (n.onmouseleave = null),
                (n.onclick = null),
                (n.textContent = "AR NOT SUPPORTED");
            }
            function o(e) {
              (e.style.position = "absolute"),
                (e.style.bottom = "20px"),
                (e.style.padding = "12px 6px"),
                (e.style.border = "1px solid #fff"),
                (e.style.borderRadius = "4px"),
                (e.style.background = "rgba(0,0,0,0.1)"),
                (e.style.color = "#fff"),
                (e.style.font = "normal 13px sans-serif"),
                (e.style.textAlign = "center"),
                (e.style.opacity = "0.5"),
                (e.style.outline = "none"),
                (e.style.zIndex = "999");
            }
            if ("xr" in navigator)
              return (
                (n.id = "ARButton"),
                (n.style.display = "none"),
                o(n),
                navigator.xr
                  .isSessionSupported("immersive-ar")
                  .then(function (o) {
                    o
                      ? (function () {
                          if (void 0 === t.domOverlay) {
                            var r = document.createElement("div");
                            (r.style.display = "none"),
                              document.body.appendChild(r);
                            var o = document.createElementNS(
                              "http://www.w3.org/2000/svg",
                              "svg"
                            );
                            o.setAttribute("width", 38),
                              o.setAttribute("height", 38),
                              (o.style.position = "absolute"),
                              (o.style.right = "20px"),
                              (o.style.top = "20px"),
                              o.addEventListener("click", function () {
                                a.end();
                              }),
                              r.appendChild(o);
                            var i = document.createElementNS(
                              "http://www.w3.org/2000/svg",
                              "path"
                            );
                            i.setAttribute(
                              "d",
                              "M 12,12 L 28,28 M 28,12 12,28"
                            ),
                              i.setAttribute("stroke", "#fff"),
                              i.setAttribute("stroke-width", 2),
                              o.appendChild(i),
                              (t.optionalFeatures = ["dom-overlay"]),
                              (t.domOverlay = { root: r });
                          }
                          let a = null;
                          async function s(r) {
                            r.addEventListener("end", c),
                              e.xr.setReferenceSpaceType("local"),
                              await e.xr.setSession(r),
                              (n.textContent = "STOP AR"),
                              (t.domOverlay.root.style.display = ""),
                              (a = r);
                          }
                          function c() {
                            a.removeEventListener("end", c),
                              (n.textContent = "START AR"),
                              (t.domOverlay.root.style.display = "none"),
                              (a = null);
                          }
                          (n.style.display = ""),
                            (n.style.cursor = "pointer"),
                            (n.style.left = "calc(50% - 50px)"),
                            (n.style.width = "100px"),
                            (n.textContent = "START AR"),
                            (n.onmouseenter = function () {
                              n.style.opacity = "1.0";
                            }),
                            (n.onmouseleave = function () {
                              n.style.opacity = "0.5";
                            }),
                            (n.onclick = function () {
                              null === a
                                ? navigator.xr
                                    .requestSession("immersive-ar", t)
                                    .then(s)
                                : a.end();
                            });
                        })()
                      : r();
                  })
                  .catch(r),
                n
              );
            {
              const e = document.createElement("a");
              return (
                !1 === window.isSecureContext
                  ? ((e.href = document.location.href.replace(
                      /^http:/,
                      "https:"
                    )),
                    (e.innerHTML = "WEBXR NEEDS HTTPS"))
                  : ((e.href = "https://immersiveweb.dev/"),
                    (e.innerHTML = "WEBXR NOT AVAILABLE")),
                (e.style.left = "calc(50% - 90px)"),
                (e.style.width = "180px"),
                (e.style.textDecoration = "none"),
                o(e),
                e
              );
            }
          }
        }
        function a(e, t) {
          if (e) {
            if ("string" == typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? s(e, t)
                : void 0
            );
          }
        }
        function s(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function c(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        const l = (function () {
          function e(t, n) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.controllerArmLength = 0.25),
              (this.controllerLineLength = 5),
              (this.tempMatrix = new r.Matrix4()),
              (this.intersected = []),
              (this.raycaster = new r.Raycaster()),
              (this.raycaster.camera = n),
              (this.group = new r.Group()),
              (this.controllers = this._createControllers(t)),
              (this.controllersState = {
                touchpads: [],
                triggers: [],
                poses: [],
                ids: [],
              }),
              (this._eventListeners = {}),
              this._initInputListenersXR();
          }
          var t, n, o;
          return (
            (t = e),
            (o = [
              {
                key: "_findGamepad",
                value: function (e) {
                  for (
                    var t = navigator.getGamepads && navigator.getGamepads(),
                      n = 0,
                      r = 0,
                      o = t.length;
                    n < o;
                    n++
                  ) {
                    var i = t[n];
                    if (
                      i &&
                      ("Daydream Controller" === i.id ||
                        "Gear VR Controller" === i.id ||
                        "Oculus Go Controller" === i.id ||
                        "OpenVR Gamepad" === i.id ||
                        i.id.startsWith("Oculus Touch") ||
                        i.id.startsWith("HTC Vive Focus") ||
                        i.id.startsWith("Spatial Controller"))
                    ) {
                      if (r === e) return i;
                      r++;
                    }
                  }
                },
              },
            ]),
            (n = [
              {
                key: "getInteractiveGroup",
                value: function () {
                  return this.group;
                },
              },
              {
                key: "getControllers",
                value: function () {
                  return this.controllers;
                },
              },
              {
                key: "getControllersState",
                value: function () {
                  return this.controllersState;
                },
              },
              {
                key: "toggleTriggerPressVisibility",
                value: function (e, t) {
                  this.controllers[e].getObjectByName("trigger-press").visible =
                    t;
                },
              },
              {
                key: "toggleTouchpadPointVisibility",
                value: function (e, t, n) {
                  var r = this.controllers[e].getObjectByName(
                    "touchpad-".concat(t)
                  );
                  (r.visible = n), !1 === n && (r.position.z = 99999);
                },
              },
              {
                key: "updateTouchpadPoint",
                value: function (e, t) {
                  var n = this.controllersState.touchpads[e];
                  this.controllers[e]
                    .getObjectByName("touchpad-".concat(t))
                    .position.set(
                      0.025 * n.axes0,
                      0.0125,
                      0.025 * n.axes1 - this.controllerArmLength - 0.025
                    );
                },
              },
              {
                key: "_createControllers",
                value: function (e) {
                  var t = new r.LineSegments(
                    new r.EdgesGeometry(
                      new r.BoxBufferGeometry(0.05, 0.025, 0.1)
                    ),
                    new r.LineBasicMaterial({ color: 13421772 })
                  );
                  t.position.set(0, 0, -this.controllerArmLength);
                  var n = new r.Line(
                    new r.BufferGeometry().setFromPoints([
                      new r.Vector3(0, 0, 0),
                      new r.Vector3(0, 0, -1),
                    ]),
                    new r.LineBasicMaterial({ color: 13421772 })
                  );
                  n.position.set(0, 0, -this.controllerArmLength),
                    (n.name = "controller-line"),
                    (n.scale.z =
                      this.controllerLineLength - this.controllerArmLength);
                  var o = new r.LineLoop(
                    new r.CircleGeometry(0.0125, 64),
                    new r.LineBasicMaterial({ color: 13421772 })
                  );
                  o.position.set(0, 0, -this.controllerArmLength - 0.05);
                  var i = new r.Mesh(
                    new r.CircleGeometry(0.0125, 64),
                    new r.MeshBasicMaterial({ color: 52428 })
                  );
                  i.position.set(0, 0, -this.controllerArmLength - 0.05),
                    (i.material.side = r.DoubleSide),
                    (i.visible = !1),
                    (i.name = "trigger-press");
                  var a = new r.LineLoop(
                    new r.CircleGeometry(0.025, 64),
                    new r.LineBasicMaterial({ color: 13421772 })
                  );
                  a.position.set(0, 0.0125, -this.controllerArmLength - 0.025),
                    (a.rotation.x = Math.PI / 2);
                  var s = new r.LineLoop(
                    new r.CircleGeometry(0.005, 64),
                    new r.LineBasicMaterial({ color: 52428 })
                  );
                  s.position.set(0, 0.0125, -this.controllerArmLength - 0.025),
                    (s.rotation.x = Math.PI / 2),
                    (s.visible = !1),
                    (s.name = "touchpad-touch");
                  var c = new r.Mesh(
                    new r.CircleGeometry(0.005, 64),
                    new r.MeshBasicMaterial({ color: 52428 })
                  );
                  c.position.set(0, 0.0125, -this.controllerArmLength - 0.025),
                    (c.rotation.x = Math.PI / 2),
                    (c.material.side = r.DoubleSide),
                    (c.visible = !1),
                    (c.name = "touchpad-press");
                  var l = [0, 1].map(function (r) {
                    return e
                      .getController(r)
                      .add(t.clone())
                      .add(n.clone())
                      .add(o.clone())
                      .add(i.clone())
                      .add(a.clone())
                      .add(s.clone())
                      .add(c.clone());
                  });
                  return l;
                },
              },
              {
                key: "_addSelectListener",
                value: function (e, t) {
                  var n = this;
                  this.controllers.forEach(function (r) {
                    r.addEventListener(e, t.bind(n));
                  });
                },
              },
              {
                key: "enableDragInteractiveGroup",
                value: function () {
                  this._addSelectListener(
                    "selectstart",
                    this.onSelectStartDrag
                  ),
                    this._addSelectListener("selectend", this.onSelectEndDrag);
                },
              },
              {
                key: "onSelectStartDrag",
                value: function (e) {
                  var t = e.target,
                    n = this.getIntersections(t, !1);
                  if ((n.length, n.length > 0)) {
                    var r = n[0];
                    this.tempMatrix.getInverse(t.matrixWorld);
                    var o = r.object;
                    o.matrix.premultiply(this.tempMatrix),
                      o.matrix.decompose(o.position, o.quaternion, o.scale),
                      o.material.emissive && (o.material.emissive.b = 1),
                      t.add(o),
                      (t.userData.selected = o);
                  }
                },
              },
              {
                key: "onSelectEndDrag",
                value: function (e) {
                  var t = e.target;
                  if (void 0 !== t.userData.selected) {
                    var n = t.userData.selected;
                    n.matrix.premultiply(t.matrixWorld),
                      n.matrix.decompose(n.position, n.quaternion, n.scale),
                      n.material.emissive && (n.material.emissive.b = 0),
                      this.group.add(n),
                      (t.userData.selected = void 0);
                  }
                },
              },
              {
                key: "getIntersections",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  return this.raycastFromController(e, this.group.children, t);
                },
              },
              {
                key: "raycastFromController",
                value: function (e, t) {
                  var n =
                    !(arguments.length > 2 && void 0 !== arguments[2]) ||
                    arguments[2];
                  return (
                    this.tempMatrix.identity().extractRotation(e.matrixWorld),
                    this.raycaster.ray.origin.setFromMatrixPosition(
                      e.matrixWorld
                    ),
                    this.raycaster.ray.direction
                      .set(0, 0, -1)
                      .applyMatrix4(this.tempMatrix),
                    this.raycaster.intersectObjects(t, n)
                  );
                },
              },
              {
                key: "updateControllers",
                value: function () {
                  for (
                    var t = this.controllersState, n = 0;
                    n < this.controllers.length;
                    n++
                  ) {
                    this.controllers[n];
                    var r = e._findGamepad(n);
                    if (void 0 === r || void 0 === r.pose || null === r.pose)
                      return (
                        (t.triggers[n] = void 0),
                        (t.touchpads[n] = void 0),
                        (t.poses[n] = void 0),
                        void (t.ids[n] = void 0)
                      );
                    var o = "Daydream Controller" === r.id ? 0 : 1;
                    (t.poses[n] = r.pose), (t.ids[n] = r.id);
                    var i = r.buttons[0].touched,
                      a = r.buttons[0].pressed,
                      s = r.axes[0],
                      c = r.axes[1];
                    void 0 === t.touchpads[n] &&
                      (t.touchpads[n] = {
                        touched: !1,
                        pressed: !1,
                        axes0: 0,
                        axes1: 0,
                      });
                    var l = t.touchpads[n];
                    if (l.touched !== i) {
                      var u =
                        !0 === i
                          ? this._eventListeners["vr-touchpad-touch-start"]
                          : this._eventListeners["vr-touchpad-touch-end"];
                      u && u(n, s, c);
                    }
                    if (l.pressed !== a) {
                      var h =
                        !0 === a
                          ? this._eventListeners["vr-touchpad-press-start"]
                          : this._eventListeners["vr-touchpad-press-end"];
                      h && h(n, s, c);
                    }
                    (l.touched = i),
                      (l.pressed = a),
                      (l.axes0 = s),
                      (l.axes1 = c);
                    var d = r.buttons[o].pressed;
                    if (
                      (void 0 === t.triggers[n] && (t.triggers[n] = !1),
                      t.triggers[n] !== d)
                    ) {
                      t.triggers[n] = d;
                      var f =
                        !0 === t.triggers[n]
                          ? this._eventListeners["vr-trigger-press-start"]
                          : this._eventListeners["vr-trigger-press-end"];
                      f && f(n);
                    }
                  }
                },
              },
              {
                key: "_initInputListenersXR",
                value: function () {
                  var e = this,
                    t = function (t) {
                      return function (n) {
                        var r = e._eventListeners[t];
                        if (r)
                          for (
                            var o = n.target.uuid, i = 0, a = [0, 1];
                            i < a.length;
                            i++
                          ) {
                            var s = a[i],
                              c = e.controllers[s];
                            c && c.uuid === o && r(s);
                          }
                      };
                    };
                  this._addSelectListener(
                    "selectstart",
                    t("xr-trigger-press-start")
                  ),
                    this._addSelectListener(
                      "selectend",
                      t("xr-trigger-press-end")
                    );
                },
              },
              {
                key: "intersectObjects",
                value: function () {
                  this._cleanIntersected();
                  var e,
                    t = (function (e, t) {
                      var n;
                      if (
                        "undefined" == typeof Symbol ||
                        null == e[Symbol.iterator]
                      ) {
                        if (
                          Array.isArray(e) ||
                          (n = a(e)) ||
                          (t && e && "number" == typeof e.length)
                        ) {
                          n && (e = n);
                          var r = 0,
                            o = function () {};
                          return {
                            s: o,
                            n: function () {
                              return r >= e.length
                                ? { done: !0 }
                                : { done: !1, value: e[r++] };
                            },
                            e: function (e) {
                              throw e;
                            },
                            f: o,
                          };
                        }
                        throw new TypeError(
                          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      }
                      var i,
                        s = !0,
                        c = !1;
                      return {
                        s: function () {
                          n = e[Symbol.iterator]();
                        },
                        n: function () {
                          var e = n.next();
                          return (s = e.done), e;
                        },
                        e: function (e) {
                          (c = !0), (i = e);
                        },
                        f: function () {
                          try {
                            s || null == n.return || n.return();
                          } finally {
                            if (c) throw i;
                          }
                        },
                      };
                    })(this.controllers);
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var n = e.value;
                      n && this._intersectObjects(n);
                    }
                  } catch (e) {
                    t.e(e);
                  } finally {
                    t.f();
                  }
                },
              },
              {
                key: "_intersectObjects",
                value: function (e) {
                  if (void 0 === e.userData.selected) {
                    var t = this.getIntersections(e),
                      n = e.getObjectByName("controller-line");
                    if (t.length > 0) {
                      var r = t[0],
                        o = r.object;
                      o.material.emissive && (o.material.emissive.r = 1),
                        this.intersected.push(o),
                        (n.scale.z = r.distance - this.controllerArmLength);
                    } else
                      n.scale.z =
                        this.controllerLineLength - this.controllerArmLength;
                  }
                },
              },
              {
                key: "_cleanIntersected",
                value: function () {
                  for (; this.intersected.length; ) {
                    var e = this.intersected.pop();
                    e.material.emissive && (e.material.emissive.r = 0);
                  }
                },
              },
            ]) && c(t.prototype, n),
            o && c(t, o),
            e
          );
        })();
        function u(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        const h = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._classSky = t),
              (this._effectController = {
                turbidity: 10,
                rayleigh: 3,
                mieCoefficient: 0.005,
                mieDirectionalG: 0.7,
                inclination: 0.49,
                azimuth: 0.25,
              }),
              (this._updateUniforms = null);
          }
          var t, n, o;
          return (
            (t = e),
            (n = [
              {
                key: "init",
                value: function () {
                  var e = this,
                    t = new this._classSky();
                  t.scale.setScalar(45e4);
                  var n = new r.Vector3();
                  return (
                    (this._updateUniforms = function () {
                      var r = e._effectController,
                        o = t.material.uniforms;
                      (o.turbidity.value = r.turbidity),
                        (o.rayleigh.value = r.rayleigh),
                        (o.mieCoefficient.value = r.mieCoefficient),
                        (o.mieDirectionalG.value = r.mieDirectionalG);
                      var i = Math.PI * (r.inclination - 0.5),
                        a = 2 * Math.PI * (r.azimuth - 0.5);
                      (n.x = Math.cos(a)),
                        (n.y = Math.sin(a) * Math.sin(i)),
                        (n.z = Math.sin(a) * Math.cos(i)),
                        o.sunPosition.value.copy(n);
                    }),
                    this._updateUniforms(),
                    t
                  );
                },
              },
              {
                key: "updateUniforms",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  if (!this._updateUniforms)
                    throw "updateUniforms(): error; init() must be called first";
                  Object.assign(this._effectController, e),
                    this._updateUniforms();
                },
              },
            ]) && u(t.prototype, n),
            o && u(t, o),
            e
          );
        })();
        function d(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              if (
                "undefined" == typeof Symbol ||
                !(Symbol.iterator in Object(e))
              )
                return;
              var n = [],
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(r = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                (o = !0), (i = e);
              } finally {
                try {
                  r || null == s.return || s.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            })(e, t) ||
            m(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function f(e, t, n) {
          return (f = p()
            ? Reflect.construct
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var o = new (Function.bind.apply(e, r))();
                return n && v(o, n.prototype), o;
              }).apply(null, arguments);
        }
        function p() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        function v(e, t) {
          return (v =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function y(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return g(e);
            })(e) ||
            (function (e) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e);
            })(e) ||
            m(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function m(e, t) {
          if (e) {
            if ("string" == typeof e) return g(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? g(e, t)
                : void 0
            );
          }
        }
        function g(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function w(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function b(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function x(e, t, n) {
          return t && b(e.prototype, t), n && b(e, n), e;
        }
        var _ = (function () {
            function e() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              w(this, e);
              var n = { mute: !0 },
                r = Object.assign({}, n, t);
              (this._mute = r.mute),
                (this.times = []),
                (this.splits = []),
                (this.arg0s = []),
                (this._last = performance.now() / 1e3);
            }
            return (
              x(e, [
                {
                  key: "log",
                  value: function () {
                    var e,
                      t = performance.now() / 1e3,
                      n = t - this._last;
                    this.times.push(t), this.splits.push(n);
                    for (
                      var r = arguments.length, o = new Array(r), i = 0;
                      i < r;
                      i++
                    )
                      o[i] = arguments[i];
                    (this.arg0s.push(o[0]), (this._last = t), this._mute) ||
                      (e = console).info.apply(
                        e,
                        [
                          "==== "
                            .concat(t.toFixed(3), " +")
                            .concat(n.toFixed(3), " ===="),
                        ].concat(o)
                      );
                  },
                },
                {
                  key: "grep",
                  value: function (e) {
                    var t = this,
                      n = this.arg0s.reduce(function (t, n, r) {
                        return "string" != typeof n
                          ? (console.info("grep(): warning: not a string"), t)
                          : (n.includes(e) && t.push(r), t);
                      }, []);
                    return {
                      times: n.map(function (e) {
                        return t.times[e];
                      }),
                      splits: n.map(function (e) {
                        return t.splits[e];
                      }),
                      arg0s: n.map(function (e) {
                        return t.arg0s[e];
                      }),
                    };
                  },
                },
              ]),
              e
            );
          })(),
          k = (function () {
            function e() {
              w(this, e);
            }
            return (
              x(e, null, [
                {
                  key: "createLineBox",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 13421772;
                    return new r.LineSegments(
                      new r.EdgesGeometry(f(r.BoxBufferGeometry, y(e))),
                      new r.LineBasicMaterial({ color: t })
                    );
                  },
                },
                {
                  key: "createTestHemisphereLight",
                  value: function () {
                    return new r.HemisphereLight(8421504, 6316128);
                  },
                },
                {
                  key: "createTestDirectionalLight",
                  value: function () {
                    var e = new r.DirectionalLight(16777215);
                    return (
                      e.position.set(0, 6, 0),
                      (e.castShadow = !0),
                      (e.shadow.camera.top = 2),
                      (e.shadow.camera.bottom = -2),
                      (e.shadow.camera.right = 2),
                      (e.shadow.camera.left = -2),
                      e.shadow.mapSize.set(4096, 4096),
                      e
                    );
                  },
                },
                {
                  key: "createTestObjects",
                  value: function () {
                    for (
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [0, 1, -2],
                        t = [],
                        n = [
                          new r.BoxBufferGeometry(0.2, 0.2, 0.2),
                          new r.ConeBufferGeometry(0.2, 0.2, 64),
                          new r.CylinderBufferGeometry(0.2, 0.2, 0.2, 64),
                          new r.IcosahedronBufferGeometry(0.2, 3),
                          new r.TorusBufferGeometry(0.2, 0.04, 64, 32),
                        ],
                        o = 0,
                        i = n;
                      o < i.length;
                      o++
                    ) {
                      var a = i[o],
                        s = new r.Mesh(
                          a,
                          new r.MeshStandardMaterial({
                            color: 16777215 * Math.random(),
                            roughness: 0.7,
                            metalness: 0,
                          })
                        );
                      s.position.set(
                        2 * Math.random() - 1 + e[0],
                        2 * Math.random() - 1 + e[1],
                        2 * Math.random() - 1 + e[2]
                      ),
                        (s.rotation.x = 2 * Math.random() * Math.PI),
                        (s.rotation.y = 2 * Math.random() * Math.PI),
                        (s.rotation.z = 2 * Math.random() * Math.PI),
                        s.scale.setScalar(Math.random() + 0.5),
                        (s.castShadow = !0),
                        (s.receiveShadow = !0),
                        t.push(s);
                    }
                    return t;
                  },
                },
                {
                  key: "createTestCube",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [0.4, 0.1, 0.4],
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 16711935,
                      n =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      o = new r.Mesh(
                        f(r.BoxGeometry, y(e)),
                        new r.MeshBasicMaterial({ color: t, wireframe: n })
                      );
                    return o.position.set(0, 0.5, -1.5), o;
                  },
                },
                {
                  key: "loadGLTF",
                  value: function (t, n, r) {
                    var o =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : null,
                      i = new t().setPath(n),
                      a = function (e) {
                        var t = e.scene;
                        return t.traverse(function (e) {}), [t, e];
                      };
                    return e.fetchModelData(i, r, a, o);
                  },
                },
                {
                  key: "loadCollada",
                  value: function (t, n) {
                    var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      o = new t(),
                      i = function (e) {
                        var t = e.scene;
                        return (
                          t.traverse(function (e) {
                            e.isSkinnedMesh && (e.frustumCulled = !1);
                          }),
                          [t, e]
                        );
                      };
                    return e.fetchModelData(o, n, i, r);
                  },
                },
                {
                  key: "loadFBX",
                  value: function (t, n) {
                    var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      o = new t(),
                      i = function (e) {
                        return (
                          e.traverse(function (e) {
                            e.isMesh &&
                              ((e.castShadow = !0), (e.receiveShadow = !0));
                          }),
                          [e, e]
                        );
                      };
                    return e.fetchModelData(o, n, i, r);
                  },
                },
                {
                  key: "fetchModelData",
                  value: function (t, n, r) {
                    var o =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : null,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : null,
                      a = function (n, o, i) {
                        var a =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : null;
                        t.load(
                          n,
                          function (t) {
                            return o(e._resolveAnimations.apply(e, y(r(t))));
                          },
                          a,
                          i
                        );
                      };
                    return e._cbOrPromise(a, n, o, i);
                  },
                },
                {
                  key: "_resolveAnimations",
                  value: function (e, t) {
                    var n = t.animations,
                      o = null,
                      i = [];
                    if (n && n.length) {
                      o = new r.AnimationMixer(e);
                      var a,
                        s = (function (e, t) {
                          var n;
                          if (
                            "undefined" == typeof Symbol ||
                            null == e[Symbol.iterator]
                          ) {
                            if (
                              Array.isArray(e) ||
                              (n = m(e)) ||
                              (t && e && "number" == typeof e.length)
                            ) {
                              n && (e = n);
                              var r = 0,
                                o = function () {};
                              return {
                                s: o,
                                n: function () {
                                  return r >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[r++] };
                                },
                                e: function (e) {
                                  throw e;
                                },
                                f: o,
                              };
                            }
                            throw new TypeError(
                              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          }
                          var i,
                            a = !0,
                            s = !1;
                          return {
                            s: function () {
                              n = e[Symbol.iterator]();
                            },
                            n: function () {
                              var e = n.next();
                              return (a = e.done), e;
                            },
                            e: function (e) {
                              (s = !0), (i = e);
                            },
                            f: function () {
                              try {
                                a || null == n.return || n.return();
                              } finally {
                                if (s) throw i;
                              }
                            },
                          };
                        })(n);
                      try {
                        for (s.s(); !(a = s.n()).done; ) {
                          var c = a.value;
                          i.push(o.clipAction(c).play());
                        }
                      } catch (e) {
                        s.e(e);
                      } finally {
                        s.f();
                      }
                    }
                    return { object: e, mixer: o, actions: i, raw: t };
                  },
                },
                {
                  key: "createDataFlipY",
                  value: function (e, t) {
                    for (
                      var n = d(t, 3),
                        r = n[0],
                        o = n[1],
                        i = n[2],
                        a = new Uint8Array(e.length),
                        s = 0;
                      s < o;
                      s++
                    )
                      for (var c = 0; c < r * i; c += i)
                        for (var l = 0; l < i; l++)
                          a[(o - 1 - s) * r * i + c + l] = e[s * r * i + c + l];
                    return a;
                  },
                },
                {
                  key: "_cbOrPromise",
                  value: function (e, t, n, r) {
                    return n
                      ? e(t, n, r)
                      : new Promise(function (n, r) {
                          return e(t, n, r);
                        });
                  },
                },
                {
                  key: "createCanvasFromImage",
                  value: function (t) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      o = function (e, t, n) {
                        var r = new Image();
                        (r.onload = function () {
                          var e = document.createElement("canvas");
                          (e.width = r.width),
                            (e.height = r.height),
                            e
                              .getContext("2d")
                              .drawImage(r, 0, 0, r.width, r.height),
                            t(e);
                        }),
                          (r.onerror = function (e) {
                            return n ? n(e) : null;
                          }),
                          (r.src = e);
                      };
                    return e._cbOrPromise(o, t, n, r);
                  },
                },
                {
                  key: "createCanvasFromText",
                  value: function (e, t, n) {
                    var r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : {},
                      o = {
                        bg: "#fff",
                        tbg: "#fff",
                        tfg: "#000",
                        fontSize: "13px",
                        fontFamily: "monospace",
                        offset: [25, 35],
                      },
                      i = Object.assign({}, o, r),
                      a = document.createElement("canvas");
                    (a.width = t), (a.height = n);
                    var s = a.getContext("2d");
                    (s.textAlign = "left"),
                      (s.textBaseline = "middle"),
                      (e = e
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/&quot;/, '"'));
                    var c = s.measureText(e).width + 16;
                    return (
                      (s.font = ""
                        .concat(i.fontSize, " ")
                        .concat(i.fontFamily)),
                      (s.fillStyle = i.bg),
                      s.fillRect(0, 0, a.width, a.height),
                      (s.fillStyle = i.tbg),
                      s.fillRect(0, 0, c, 45),
                      (s.fillStyle = i.tfg),
                      s.fillText.apply(s, [e].concat(y(i.offset))),
                      a
                    );
                  },
                },
                {
                  key: "createCanvasPlane",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 1,
                      o =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 1,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 1,
                      a = new r.PlaneGeometry(t, n, o, i),
                      s = new r.MeshBasicMaterial({
                        map: new r.Texture(e),
                        side: r.DoubleSide,
                      });
                    return (s.map.needsUpdate = !0), new r.Mesh(a, s);
                  },
                },
                {
                  key: "createCanvasSprite",
                  value: function (t) {
                    var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 512;
                    return e._createSprite(
                      [t.width, t.height],
                      new r.Texture(t),
                      n
                    );
                  },
                },
                {
                  key: "createDataSprite",
                  value: function (t, n) {
                    var o =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 512;
                    return e._createSprite(
                      n,
                      new r.DataTexture(t, n[0], n[1], r.RGBAFormat),
                      o
                    );
                  },
                },
                {
                  key: "_createSprite",
                  value: function (e, t, n) {
                    var o = new r.SpriteMaterial({ map: t, color: 16777215 });
                    o.map.needsUpdate = !0;
                    var i = new r.Sprite(o);
                    return i.scale.set(e[0] / n, e[1] / n, 1), i;
                  },
                },
                {
                  key: "pixelsToMesh",
                  value: function (e) {
                    for (
                      var t = [],
                        n = [],
                        r = 0,
                        o = e.shape[1] - 1,
                        i = 0,
                        a = 0;
                      a < e.data.length;
                      a += 4
                    ) {
                      var s = [
                          e.data[a],
                          e.data[a + 1],
                          e.data[a + 2],
                          e.data[a + 3],
                        ],
                        c = s[0],
                        l = s[1],
                        u = s[2],
                        h = s[3];
                      n.push(c, l, u, h, c, l, u, h, c, l, u, h),
                        (i = ((c + l + u) / 765) * 0.01),
                        t.push(
                          r / 1e3,
                          o / 1e3,
                          i,
                          r / 1e3 + 0.001,
                          o / 1e3,
                          i,
                          r / 1e3,
                          o / 1e3 + 0.001,
                          i
                        ),
                        ++r === e.shape[0] && ((r = 0), o--);
                    }
                    return this.vertsToMesh(t, n);
                  },
                },
                {
                  key: "vertsToMesh",
                  value: function (e, t) {
                    var n = new r.Uint8BufferAttribute(t, 4);
                    n.normalized = !0;
                    var o = new r.BufferGeometry();
                    o.setAttribute(
                      "position",
                      new r.Float32BufferAttribute(e, 3)
                    ),
                      o.setAttribute("color", n);
                    var i = { time: { value: 1 } },
                      a = new r.RawShaderMaterial({
                        uniforms: i,
                        vertexShader:
                          "\n            precision mediump float;\n            precision mediump int;\n            uniform mat4 modelViewMatrix; // optional\n            uniform mat4 projectionMatrix; // optional\n            attribute vec3 position;\n            attribute vec4 color;\n            varying vec3 vPosition;\n            varying vec4 vColor;\n            void main()\t{\n                vPosition = position;\n                vColor = color;\n                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n            }\n        ",
                        fragmentShader:
                          "\n            precision mediump float;\n            precision mediump int;\n            uniform float time;\n            varying vec3 vPosition;\n            varying vec4 vColor;\n            void main()\t{\n                vec4 color = vec4( vColor );\n                //color.r += sin( vPosition.x * 10.0 + time ) * 0.5;\n                gl_FragColor = color;\n            }\n        ",
                        side: r.DoubleSide,
                        transparent: !0,
                      });
                    return { mesh: new r.Mesh(o, a), uniforms: i };
                  },
                },
                {
                  key: "createBufferGeometryMesh",
                  value: function (e, t) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 1,
                      r = this.vertsToMesh(e, t).mesh;
                    return r.geometry.scale(n, n, n), r;
                  },
                },
                {
                  key: "downloadDataURL",
                  value: function (e, t) {
                    var n = document.createElement("a");
                    (n.href = e),
                      (n.download = t),
                      (n.style.display = "none"),
                      document.body.appendChild(n),
                      n.click(),
                      n.remove();
                  },
                },
                {
                  key: "formatDate",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "YYYY-MM-DD-hh.mm.ss";
                    return (t = (t = (t = (t = (t = (t = t.replace(
                      /YYYY/g,
                      e.getFullYear()
                    )).replace(
                      /MM/g,
                      ("0" + (e.getMonth() + 1)).slice(-2)
                    )).replace(/DD/g, ("0" + e.getDate()).slice(-2))).replace(
                      /hh/g,
                      ("0" + e.getHours()).slice(-2)
                    )).replace(
                      /mm/g,
                      ("0" + e.getMinutes()).slice(-2)
                    )).replace(/ss/g, ("0" + e.getSeconds()).slice(-2)));
                  },
                },
                {
                  key: "capture",
                  value: function (e) {
                    var t = this,
                      n = "jpg",
                      r = e.toDataURL("image/jpeg", 0.8),
                      o = document.createElement("div"),
                      i = document.createElement("div"),
                      a = document.createElement("img");
                    a.src = r;
                    var s = document.createElement("input");
                    (s.style.width = "320px"),
                      (s.style["margin-left"] = "8px"),
                      (s.type = "text"),
                      (s.value = "capture-".concat(
                        this.formatDate(new Date())
                      ));
                    var c = document.createElement("span");
                    c.textContent = ".".concat(n);
                    var l = document.createElement("button");
                    (l.textContent = "Save As"),
                      (l.onclick = function () {
                        t.downloadDataURL(r, "".concat(s.value, ".").concat(n));
                      }),
                      o.appendChild(i),
                      i.appendChild(l),
                      i.appendChild(s),
                      i.appendChild(c),
                      i.appendChild(document.createElement("hr")),
                      o.appendChild(a);
                    var u = window.open();
                    try {
                      u.document.body.appendChild(o);
                    } catch (e) {
                      u.document.body.innerHTML = o.outerHTML;
                    }
                  },
                },
                {
                  key: "createLogger",
                  value: function (e) {
                    return new _(e);
                  },
                },
              ]),
              e
            );
          })();
        k.Logger = _;
        const L = k;
        function S(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return M(e);
            })(e) ||
            (function (e) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e);
            })(e) ||
            T(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function C(e, t, n, r, o, i, a) {
          try {
            var s = e[i](a),
              c = s.value;
          } catch (e) {
            return void n(e);
          }
          s.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function E(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              if (
                "undefined" == typeof Symbol ||
                !(Symbol.iterator in Object(e))
              )
                return;
              var n = [],
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(r = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                (o = !0), (i = e);
              } finally {
                try {
                  r || null == s.return || s.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            })(e, t) ||
            T(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function T(e, t) {
          if (e) {
            if ("string" == typeof e) return M(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? M(e, t)
                : void 0
            );
          }
        }
        function M(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function A(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        var I = "1.1.1",
          R = (function () {
            function e(t) {
              var n = this;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.version = I),
                console.info(
                  "Threelet ".concat(I, " with THREE r").concat(r.REVISION)
                );
              var o = Object.assign(
                  {},
                  {
                    canvas: null,
                    width: 480,
                    height: 320,
                    optScene: null,
                    optAxes: !0,
                    optCameraPosition: [0, 1, 2],
                    optVR: !1,
                    optAR: !1,
                    optVRAppendButtonTo: null,
                    optARAppendButtonTo: null,
                    optXR: !1,
                  },
                  t
                ),
                i = function (e, t) {
                  Object.assign(e.style, {
                    width:
                      "string" == typeof t.width
                        ? t.width
                        : "".concat(t.width, "px"),
                    height:
                      "string" == typeof t.height
                        ? t.height
                        : "".concat(t.height, "px"),
                  });
                };
              this.domElement = null;
              var a = o.canvas;
              if (a) void 0 !== t.width && void 0 !== t.height && i(a, t);
              else {
                i((a = document.createElement("canvas")), o);
                var s = document.createElement("div");
                Object.assign(s.style, {
                  display: "inline-block",
                  position: "relative",
                }),
                  s.appendChild(a),
                  (this.domElement = s);
              }
              this.canvas = a;
              var c = E(e._initBasics(a, o), 3);
              (this.scene = c[0]),
                (this.camera = c[1]),
                (this.renderer = c[2]),
                this.resizeCanvas(!0),
                (this.render = function () {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  n._stats && n._stats.update(),
                    e || n.resizeCanvas(),
                    n.renderer.render(n.scene, n.camera);
                }),
                (this._eventListeners = {}),
                (this._eventListenerNames = [
                  "mouse-down",
                  "mouse-down-left",
                  "mouse-down-middle",
                  "mouse-down-right",
                  "mouse-move",
                  "mouse-up",
                  "mouse-click",
                  "mouse-click-left",
                  "mouse-click-middle",
                  "mouse-click-right",
                  "mouse-drag-end",
                  "pointer-down",
                  "pointer-down-left",
                  "pointer-down-middle",
                  "pointer-down-right",
                  "pointer-move",
                  "pointer-up",
                  "pointer-click",
                  "pointer-click-left",
                  "pointer-click-middle",
                  "pointer-click-right",
                  "pointer-drag-end",
                  "touch-start",
                  "touch-move",
                  "touch-end",
                  "touch-click",
                  "touch-drag-end",
                  "xr-touchpad-touch-start",
                  "xr-touchpad-touch-end",
                  "xr-touchpad-press-start",
                  "xr-touchpad-press-end",
                  "xr-trigger-press-start",
                  "xr-trigger-press-end",
                ]),
                this._initCursorListeners(this.renderer.domElement, "mouse"),
                this._initCursorListeners(this.renderer.domElement, "pointer"),
                this._initTouchListeners(this.renderer.domElement),
                (this._raycaster = new r.Raycaster()),
                (this.clock = new r.Clock()),
                (this.timeLast = this.clock.getElapsedTime()),
                (this.iid = null),
                (this.update = null),
                (this.modTable = {
                  "mod-controls": this._setupControls,
                  "mod-stats": this._setupStats,
                  "mod-sky": this._setupSky,
                }),
                (this._controls = null),
                (this._stats = null),
                (this.skyHelper = null),
                (this._fpsDesktopLast = 0),
                (this._vrcHelper = new l(this.renderer.xr, this.camera)),
                (this._vrButton = null),
                (this._arButton = null),
                this.setupWebXR(o),
                this.onCreate(t);
            }
            var t, n, a, s, c;
            return (
              (t = e),
              (n = [
                {
                  key: "onCreate",
                  value: function (e) {
                    this.render();
                  },
                },
                { key: "onUpdate", value: function (e, t) {} },
                { key: "onDestroy", value: function () {} },
                {
                  key: "setup",
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    if (e in this.modTable)
                      return this.modTable[e].bind(this)(t, n);
                    console.warn("setup(): unsupported module title:", e);
                  },
                },
                {
                  key: "_setupControls",
                  value: function (e, t) {
                    return (
                      (this._controls = new e(
                        this.camera,
                        this.renderer.domElement
                      )),
                      this._controls.addEventListener(
                        "change",
                        this.render.bind(null, !1)
                      ),
                      this._controls
                    );
                  },
                },
                {
                  key: "_setupStats",
                  value: function (e, t) {
                    var n = {
                        panelType: 0,
                        appendTo: this.domElement
                          ? this.domElement
                          : document.body,
                      },
                      r = Object.assign({}, n, t),
                      o = (this._stats = new e());
                    return (
                      o.showPanel(r.panelType),
                      r.appendTo !== document.body &&
                        (o.dom.style.position = "absolute"),
                      r.appendTo.appendChild(o.dom),
                      this._stats
                    );
                  },
                },
                {
                  key: "getSkyHelper",
                  value: function () {
                    return this.skyHelper;
                  },
                },
                {
                  key: "_setupSky",
                  value: function (e, t) {
                    this.skyHelper = new h(e);
                    var n = this.skyHelper.init();
                    return (
                      this.scene.add(n),
                      this.skyHelper.updateUniforms({
                        turbidity: 5.2,
                        rayleigh: 0.01,
                        mieCoefficient: 0.002,
                        mieDirectionalG: 0.9,
                        inclination: 0.1,
                        azimuth: 0.3,
                      }),
                      n
                    );
                  },
                },
                {
                  key: "setupVRControlHelperTest",
                  value: function () {
                    this.scene.add(L.createTestHemisphereLight()),
                      this.scene.add(L.createTestDirectionalLight()),
                      this.enableInteractiveGroup("drag");
                    var e = this.getInteractiveGroup();
                    L.createTestObjects([0, 0, 0]).forEach(function (t) {
                      return e.add(t);
                    }),
                      this.scene.add(e);
                  },
                },
                {
                  key: "getVRControlHelper",
                  value: function () {
                    return (
                      console.warn(
                        "@@ getVRControlHelper(): i am deprecated!!"
                      ),
                      this._vrcHelper
                    );
                  },
                },
                {
                  key: "getInteractiveGroup",
                  value: function () {
                    return this._vrcHelper.getInteractiveGroup();
                  },
                },
                {
                  key: "enableInteractiveGroup",
                  value: function (e) {
                    "drag" === e
                      ? this._vrcHelper.enableDragInteractiveGroup()
                      : console.warn("@@ unsupported interactive mode:", e);
                  },
                },
                {
                  key: "getControllersState",
                  value: function () {
                    return this._vrcHelper.getControllersState();
                  },
                },
                {
                  key: "displayControllerEvent",
                  value: function (e, t, n) {
                    "xr-trigger-press" === t
                      ? this._vrcHelper.toggleTriggerPressVisibility(e, n)
                      : "xr-touchpad-touch" === t
                      ? this._vrcHelper.toggleTouchpadPointVisibility(
                          e,
                          "touch",
                          n
                        )
                      : "xr-touchpad-press" === t
                      ? this._vrcHelper.toggleTouchpadPointVisibility(
                          e,
                          "press",
                          n
                        )
                      : console.warn("@@ unsupported what:", t);
                  },
                },
                {
                  key: "updateControllerTouchpad",
                  value: function (e, t) {
                    "xr-touchpad-touch" === t
                      ? this._vrcHelper.updateTouchpadPoint(e, "touch")
                      : "xr-touchpad-press" === t
                      ? this._vrcHelper.updateTouchpadPoint(e, "press")
                      : console.warn("@@ unsupported what:", t);
                  },
                },
                {
                  key: "setupWebXR",
                  value: function (t) {
                    var n = this,
                      r = t.optVR,
                      a = t.optAR,
                      s = t.optXR,
                      c = t.optVRAppendButtonTo,
                      l = t.optARAppendButtonTo,
                      u = e._getXRButtonStyler();
                    if (r || s) {
                      var h = a || s;
                      this._vrButton = this._setupXRButton(o, c, u("vr", h));
                    }
                    if (a || s) {
                      var d = r || s;
                      this._arButton = this._setupXRButton(i, l, u("ar", d));
                    }
                    (r || a || s) &&
                      e._isXrSupported() &&
                      ((this.renderer.xr.enabled = !0),
                      this._vrcHelper.getControllers().forEach(function (e) {
                        return n.scene.add(e);
                      }));
                  },
                },
                {
                  key: "_setupXRButton",
                  value:
                    ((s = regeneratorRuntime.mark(function t(n, r) {
                      var i,
                        a,
                        s,
                        c,
                        l = this,
                        u = arguments;
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((i =
                                    u.length > 2 && void 0 !== u[2]
                                      ? u[2]
                                      : null),
                                  (a = e._createXRButton(
                                    n,
                                    this.renderer,
                                    function () {
                                      l.enterXR(function () {});
                                    }
                                  )),
                                  (s = this.domElement
                                    ? this.domElement
                                    : document.body),
                                  (r || s).appendChild(a),
                                  !i)
                                ) {
                                  t.next = 17;
                                  break;
                                }
                                return (
                                  (t.prev = 6),
                                  (c = "immersive-".concat(
                                    n === o ? "vr" : "ar"
                                  )),
                                  (t.next = 10),
                                  navigator.xr.isSessionSupported(c)
                                );
                              case 10:
                                t.sent, (t.next = 16);
                                break;
                              case 13:
                                (t.prev = 13), (t.t0 = t.catch(6)), t.t0;
                              case 16:
                                setTimeout(function () {
                                  i(a);
                                }, 1);
                              case 17:
                                return t.abrupt("return", a);
                              case 18:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[6, 13]]
                      );
                    })),
                    (c = function () {
                      var e = this,
                        t = arguments;
                      return new Promise(function (n, r) {
                        var o = s.apply(e, t);
                        function i(e) {
                          C(o, n, r, i, a, "next", e);
                        }
                        function a(e) {
                          C(o, n, r, i, a, "throw", e);
                        }
                        i(void 0);
                      });
                    }),
                    function (e, t) {
                      return c.apply(this, arguments);
                    }),
                },
                {
                  key: "enterXR",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      n = 30,
                      r = 400,
                      o = 0,
                      i = function i() {
                        setTimeout(function () {
                          o++,
                            e.renderer.xr.isPresenting
                              ? ("@@ transition to vr loop!! (tryCount: ".concat(
                                  o,
                                  ")"
                                ),
                                e.updateLoop(-1))
                              : ("@@ vr not ready after: "
                                  .concat(o * r, " ms (tryCount: ")
                                  .concat(o, ")"),
                                o < n
                                  ? i()
                                  : t &&
                                    (console.error("@@ enter vr failed!!"),
                                    t()));
                        }, r);
                      };
                    this.updateLoop(0), i(n, r);
                  },
                },
                {
                  key: "updateMechanics",
                  value: function () {
                    var e = this.clock.getElapsedTime(),
                      t = e - this.timeLast;
                    (this.timeLast = e),
                      (this.update ? this.update : this.onUpdate.bind(this))(
                        e,
                        t
                      );
                  },
                },
                {
                  key: "updateLoop",
                  value: function (e) {
                    var t = this;
                    null !== this.iid && clearInterval(this.iid),
                      0 !== e &&
                        (e < 0
                          ? this.renderer.setAnimationLoop(function () {
                              if (!t.renderer.xr.isPresenting)
                                return (
                                  t.renderer.setAnimationLoop(null),
                                  t.render(),
                                  t.updateLoop(t._fpsDesktopLast)
                                );
                              t.render(!0),
                                t.updateMechanics(),
                                t._vrcHelper.intersectObjects();
                            })
                          : ((this._fpsDesktopLast = e),
                            (this.iid = setInterval(function () {
                              t.render(), t.updateMechanics();
                            }, 1e3 / e))));
                  },
                },
                {
                  key: "resizeCanvas",
                  value: function () {
                    var t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    e._resizeCanvasToDisplaySize(
                      this.canvas,
                      this.renderer,
                      this.camera,
                      t
                    );
                  },
                },
                {
                  key: "setEventListener",
                  value: function (e, t) {
                    this.on(e, t);
                  },
                },
                {
                  key: "on",
                  value: function (e, t) {
                    this._eventListenerNames.includes(e)
                      ? ("mouse-down" === e && (e = "mouse-down-left"),
                        "mouse-click" === e && (e = "mouse-click-left"),
                        "pointer-down" === e && (e = "pointer-down-left"),
                        "pointer-click" === e && (e = "pointer-click-left"),
                        ((e.startsWith("xr-")
                          ? this._vrcHelper._eventListeners
                          : this._eventListeners)[e] = t))
                      : (console.error("@@ on(): unsupported eventName:", e),
                        e.startsWith("vr-") &&
                          console.info(
                            "".concat(e, " is deprecated; use 'xr-' instead")
                          ));
                  },
                },
                {
                  key: "_callIfDefined",
                  value: function (e, t) {
                    var n = this._eventListeners[e];
                    n && n.apply(void 0, S(t));
                  },
                },
                {
                  key: "_initCursorListeners",
                  value: function (t, n) {
                    var r = this,
                      o = !1;
                    t.addEventListener(
                      "".concat(n, "down"),
                      function (i) {
                        o = !1;
                        var a = e.getInputCoords(i, t);
                        0 === i.button
                          ? r._callIfDefined("".concat(n, "-down-left"), a)
                          : 1 === i.button
                          ? r._callIfDefined("".concat(n, "-down-middle"), a)
                          : 2 === i.button &&
                            r._callIfDefined("".concat(n, "-down-right"), a);
                      },
                      !1
                    ),
                      t.addEventListener(
                        "".concat(n, "move"),
                        function (i) {
                          o = !0;
                          var a = e.getInputCoords(i, t);
                          r._callIfDefined("".concat(n, "-move"), a);
                        },
                        !1
                      ),
                      t.addEventListener(
                        "".concat(n, "up"),
                        function (i) {
                          var a = e.getInputCoords(i, t);
                          r._callIfDefined("".concat(n, "-up"), a),
                            o
                              ? r._callIfDefined("".concat(n, "-drag-end"), a)
                              : ("".concat(n, "up: click"),
                                0 === i.button
                                  ? r._callIfDefined(
                                      "".concat(n, "-click-left"),
                                      a
                                    )
                                  : 1 === i.button
                                  ? r._callIfDefined(
                                      "".concat(n, "-click-middle"),
                                      a
                                    )
                                  : 2 === i.button &&
                                    r._callIfDefined(
                                      "".concat(n, "-click-right"),
                                      a
                                    ));
                        },
                        !1
                      );
                  },
                },
                {
                  key: "_initTouchListeners",
                  value: function (t) {
                    var n = this,
                      r = !1;
                    t.addEventListener(
                      "touchstart",
                      function (o) {
                        r = !1;
                        var i = e.getInputCoords(o, t);
                        n._callIfDefined("touch-start", i);
                      },
                      !1
                    ),
                      t.addEventListener(
                        "touchmove",
                        function (o) {
                          r = !0;
                          var i = e.getInputCoords(o, t);
                          n._callIfDefined("touch-move", i);
                        },
                        !1
                      ),
                      t.addEventListener(
                        "touchend",
                        function (o) {
                          var i = e.getInputCoords(o, t);
                          n._callIfDefined("touch-end", i),
                            r
                              ? n._callIfDefined("touch-drag-end", i)
                              : n._callIfDefined("touch-click", i);
                        },
                        !1
                      );
                  },
                },
                {
                  key: "setupMouseInterface",
                  value: function (e) {
                    this._setupInputInterface("mouse", e);
                  },
                },
                {
                  key: "setupPointerInterface",
                  value: function (e) {
                    this._setupInputInterface("pointer", e);
                  },
                },
                {
                  key: "setupTouchInterface",
                  value: function (e) {
                    this._setupInputInterface("touch", e);
                  },
                },
                {
                  key: "_setupInputInterface",
                  value: function (e, t) {
                    var n = t.onClick,
                      r = t.onDrag,
                      o = t.onDragStart,
                      i = t.onDragEnd,
                      a = !1,
                      s = ""
                        .concat(e, "-")
                        .concat("touch" === e ? "start" : "down");
                    this.on(s, function (e, t) {
                      (a = !0), o && o(e, t);
                    }),
                      this.on("".concat(e, "-move"), function (e, t) {
                        r && a && r(e, t);
                      }),
                      this.on("".concat(e, "-drag-end"), function (e, t) {
                        (a = !1), i && i(e, t);
                      }),
                      this.on("".concat(e, "-click"), function (e, t) {
                        (a = !1), n && n(e, t), i && i(e, t);
                      });
                  },
                },
                {
                  key: "_raycast",
                  value: function (e, t, n) {
                    var r = this._raycaster.intersectObjects(e, t);
                    if (n) {
                      for (var o = 0; o < r.length; o++)
                        if (r[o].face !== n) return r[o];
                      return null;
                    }
                    return r.length > 0 ? r[0] : null;
                  },
                },
                {
                  key: "_raycastFromMouse",
                  value: function (e, t, n, o, i, a) {
                    var s =
                        arguments.length > 6 &&
                        void 0 !== arguments[6] &&
                        arguments[6],
                      c = new r.Vector2((e / n) * 2 - 1, (-t / o) * 2 + 1);
                    return (
                      this._raycaster.setFromCamera(c, i),
                      this._raycast(a, s, null)
                    );
                  },
                },
                {
                  key: "raycast",
                  value: function (e, t, n) {
                    var r =
                        arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3],
                      o =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : null;
                    return (
                      this._raycaster.set(e, t),
                      (this._raycaster.camera = this.camera),
                      this._raycast(n, r, o)
                    );
                  },
                },
                {
                  key: "raycastFromMouse",
                  value: function (e, t, n) {
                    var r =
                        arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3],
                      o = this.canvas,
                      i = o.clientWidth,
                      a = o.clientHeight;
                    return this._raycastFromMouse(
                      e,
                      t,
                      i,
                      a,
                      this.camera,
                      n,
                      r
                    );
                  },
                },
                {
                  key: "raycastFromController",
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    return this._vrcHelper.raycastFromController(
                      this._vrcHelper.getControllers()[e],
                      t,
                      n
                    );
                  },
                },
                {
                  key: "capture",
                  value: function () {
                    this.render(), L.capture(this.renderer.domElement);
                  },
                },
                {
                  key: "dispose",
                  value: function () {
                    this.onDestroy(),
                      this.updateLoop(0),
                      (this.update = null),
                      this._controls &&
                        (this._controls.dispose(), (this._controls = null)),
                      this._stats && this._stats.dom.remove(),
                      this._vrButton && this._vrButton.remove(),
                      this._arButton && this._arButton.remove(),
                      this.renderer.dispose(),
                      (this.renderer = null),
                      e.freeScene(this.scene),
                      (this.scene = null),
                      (this.camera = null);
                  },
                },
                {
                  key: "clearScene",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      n = { needAxes: !1 },
                      r = Object.assign({}, n, t);
                    if (
                      this.scene &&
                      (this.renderer.dispose(),
                      e.freeScene(this.scene),
                      r.needAxes)
                    ) {
                      var o = e.createAxes(),
                        i = o.walls,
                        a = o.axes;
                      this.scene.add(i, a);
                    }
                  },
                },
              ]),
              (a = [
                {
                  key: "isVrSupported",
                  value: function () {
                    return this._isXrSupported();
                  },
                },
                {
                  key: "_isXrSupported",
                  value: function () {
                    return "xr" in navigator;
                  },
                },
                {
                  key: "_createXRButton",
                  value: function (t, n, r) {
                    var o = t.createButton(n);
                    return (
                      e._isXrSupported() &&
                        o.addEventListener("click", function (e) {
                          o.textContent,
                            ("ENTER VR" !== o.textContent &&
                              "START AR" !== o.textContent) ||
                              r();
                        }),
                      o
                    );
                  },
                },
                {
                  key: "_getXRButtonStyler",
                  value: function () {
                    return function (e, t) {
                      return function (n) {
                        var r = "calc(50% + 0px)";
                        if (t) {
                          var o = n.getBoundingClientRect();
                          r =
                            "vr" === e
                              ? "- ".concat(o.width + 5, "px")
                              : "+ 4px";
                        }
                        Object.assign(n.style, {
                          top: n.style.bottom,
                          bottom: "",
                          left: "calc(50% ".concat(r, ")"),
                        });
                      };
                    };
                  },
                },
                {
                  key: "_initBasics",
                  value: function (e, t) {
                    var n,
                      o = new r.PerspectiveCamera(
                        75,
                        e.width / e.height,
                        0.001,
                        1e3
                      );
                    (n = o.position).set.apply(n, S(t.optCameraPosition)),
                      o.up.set(0, 1, 0);
                    var i = new r.WebGLRenderer({ canvas: e });
                    i.setPixelRatio(window.devicePixelRatio);
                    var a = t.optScene ? t.optScene : new r.Scene();
                    if (t.optAxes) {
                      var s = this.createAxes(),
                        c = s.walls,
                        l = s.axes;
                      a.add(c, l);
                    }
                    return [a, o, i];
                  },
                },
                {
                  key: "createAxes",
                  value: function () {
                    var e = L.createLineBox([1, 1, 1], 13421772);
                    e.position.set(0, 0, 0), (e.name = "walls");
                    var t = new r.AxesHelper(1);
                    return (t.name = "axes"), { walls: e, axes: t };
                  },
                },
                {
                  key: "_resizeCanvasToDisplaySize",
                  value: function (e, t, n) {
                    var r =
                        arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3],
                      o = e.clientWidth,
                      i = e.clientHeight;
                    (r || e.width != o || e.height != i) &&
                      (t.setSize(o, i, !1),
                      (n.aspect = o / i),
                      n.updateProjectionMatrix());
                  },
                },
                {
                  key: "getInputCoords",
                  value: function (e, t) {
                    var n, r;
                    if ("touchend" === e.type) {
                      var o = [
                        e.changedTouches[0].clientX,
                        e.changedTouches[0].clientY,
                      ];
                      (n = o[0]), (r = o[1]);
                    } else if (
                      "touchstart" === e.type ||
                      "touchmove" === e.type
                    ) {
                      var i = [e.touches[0].clientX, e.touches[0].clientY];
                      (n = i[0]), (r = i[1]);
                    } else {
                      var a = [e.clientX, e.clientY];
                      (n = a[0]), (r = a[1]);
                    }
                    var s = t.getBoundingClientRect();
                    return [n - s.left, r - s.top];
                  },
                },
                {
                  key: "freeScene",
                  value: function (e) {
                    this.freeChildObjects(e, e.children);
                  },
                },
                {
                  key: "freeChildObjects",
                  value: function (e, t) {
                    for (; t.length > 0; ) {
                      var n = t[0];
                      this.freeChildObjects(n, n.children),
                        n.name,
                        "@@ freeing obj ".concat(n.uuid, " of ").concat(e.uuid),
                        e.remove(n),
                        this.disposeObject(n),
                        (n = null);
                    }
                  },
                },
                {
                  key: "disposeObject",
                  value: function (e) {
                    e.geometry && e.geometry.dispose(),
                      e.material && this.disposeMaterial(e.material),
                      e.texture && e.texture.dispose();
                  },
                },
                {
                  key: "disposeMaterial",
                  value: function (e) {
                    e.map &&
                      "function" == typeof e.map.dispose &&
                      e.map.dispose(),
                      e && "function" == typeof e.dispose && e.dispose();
                  },
                },
              ]),
              n && A(t.prototype, n),
              a && A(t, a),
              e
            );
          })();
        R.Utils = L;
        const D = R;
      },
      666: (e) => {
        var t = (function (e) {
          "use strict";
          var t,
            n = Object.prototype,
            r = n.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function c(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            c({}, "");
          } catch (e) {
            c = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function l(e, t, n, r) {
            var o = t && t.prototype instanceof y ? t : y,
              i = Object.create(o.prototype),
              a = new T(r || []);
            return (
              (i._invoke = (function (e, t, n) {
                var r = h;
                return function (o, i) {
                  if (r === f) throw new Error("Generator is already running");
                  if (r === p) {
                    if ("throw" === o) throw i;
                    return A();
                  }
                  for (n.method = o, n.arg = i; ; ) {
                    var a = n.delegate;
                    if (a) {
                      var s = S(a, n);
                      if (s) {
                        if (s === v) continue;
                        return s;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === h) throw ((r = p), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = f;
                    var c = u(e, t, n);
                    if ("normal" === c.type) {
                      if (((r = n.done ? p : d), c.arg === v)) continue;
                      return { value: c.arg, done: n.done };
                    }
                    "throw" === c.type &&
                      ((r = p), (n.method = "throw"), (n.arg = c.arg));
                  }
                };
              })(e, n, a)),
              i
            );
          }
          function u(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = l;
          var h = "suspendedStart",
            d = "suspendedYield",
            f = "executing",
            p = "completed",
            v = {};
          function y() {}
          function m() {}
          function g() {}
          var w = {};
          w[i] = function () {
            return this;
          };
          var b = Object.getPrototypeOf,
            x = b && b(b(M([])));
          x && x !== n && r.call(x, i) && (w = x);
          var _ = (g.prototype = y.prototype = Object.create(w));
          function k(e) {
            ["next", "throw", "return"].forEach(function (t) {
              c(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function L(e, t) {
            function n(o, i, a, s) {
              var c = u(e[o], e, i);
              if ("throw" !== c.type) {
                var l = c.arg,
                  h = l.value;
                return h && "object" == typeof h && r.call(h, "__await")
                  ? t.resolve(h.__await).then(
                      function (e) {
                        n("next", e, a, s);
                      },
                      function (e) {
                        n("throw", e, a, s);
                      }
                    )
                  : t.resolve(h).then(
                      function (e) {
                        (l.value = e), a(l);
                      },
                      function (e) {
                        return n("throw", e, a, s);
                      }
                    );
              }
              s(c.arg);
            }
            var o;
            this._invoke = function (e, r) {
              function i() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            };
          }
          function S(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
              if (((n.delegate = null), "throw" === n.method)) {
                if (
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = t),
                  S(e, n),
                  "throw" === n.method)
                )
                  return v;
                (n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return v;
            }
            var o = u(r, e.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), v
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[e.resultName] = i.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                  (n.delegate = null),
                  v)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                v);
          }
          function C(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function E(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function T(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(C, this),
              this.reset(!0);
          }
          function M(e) {
            if (e) {
              var n = e[i];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  a = function n() {
                    for (; ++o < e.length; )
                      if (r.call(e, o))
                        return (n.value = e[o]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (a.next = a);
              }
            }
            return { next: A };
          }
          function A() {
            return { value: t, done: !0 };
          }
          return (
            (m.prototype = _.constructor = g),
            (g.constructor = m),
            (m.displayName = c(g, s, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === m || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, g)
                  : ((e.__proto__ = g), c(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            k(L.prototype),
            (L.prototype[a] = function () {
              return this;
            }),
            (e.AsyncIterator = L),
            (e.async = function (t, n, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new L(l(t, n, r, o), i);
              return e.isGeneratorFunction(n)
                ? a
                : a.next().then(function (e) {
                    return e.done ? e.value : a.next();
                  });
            }),
            k(_),
            c(_, s, "Generator"),
            (_[i] = function () {
              return this;
            }),
            (_.toString = function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return (
                t.reverse(),
                function n() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in e) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (e.values = M),
            (T.prototype = {
              constructor: T,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(E),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function o(r, o) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (n.next = r),
                    o && ((n.method = "next"), (n.arg = t)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    s = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var c = r.call(a, "catchLoc"),
                      l = r.call(a, "finallyLoc");
                    if (c && l) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (c) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var o = this.tryEntries[n];
                  if (
                    o.tryLoc <= this.prev &&
                    r.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                    : this.complete(a)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  v
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), E(n), v;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      E(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, n, r) {
                return (
                  (this.delegate = {
                    iterator: M(e),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = t),
                  v
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (e) {
          Function("r", "regeneratorRuntime = r")(t);
        }
      },
    },
    t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  return (
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    n(509)
  );
})().default;
export default Threelet;
