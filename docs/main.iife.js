var ChatbotifySDK = (function (Je, f, ho) {
  "use strict";
  function po(A) {
    const e = Object.create(null, {
      [Symbol.toStringTag]: { value: "Module" },
    });
    if (A) {
      for (const t in A)
        if (t !== "default") {
          const n = Object.getOwnPropertyDescriptor(A, t);
          Object.defineProperty(
            e,
            t,
            n.get ? n : { enumerable: !0, get: () => A[t] }
          );
        }
    }
    return (e.default = A), Object.freeze(e);
  }
  const AA = po(f);
  var Vt = { exports: {} },
    ue = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var mo = f,
    yo = Symbol.for("react.element"),
    Bo = Symbol.for("react.fragment"),
    Eo = Object.prototype.hasOwnProperty,
    Po =
      mo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Do = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xt(A, e, t) {
    var n,
      r = {},
      o = null,
      s = null;
    t !== void 0 && (o = "" + t),
      e.key !== void 0 && (o = "" + e.key),
      e.ref !== void 0 && (s = e.ref);
    for (n in e) Eo.call(e, n) && !Do.hasOwnProperty(n) && (r[n] = e[n]);
    if (A && A.defaultProps)
      for (n in ((e = A.defaultProps), e)) r[n] === void 0 && (r[n] = e[n]);
    return {
      $$typeof: yo,
      type: A,
      key: o,
      ref: s,
      props: r,
      _owner: Po.current,
    };
  }
  (ue.Fragment = Bo), (ue.jsx = Xt), (ue.jsxs = Xt), (Vt.exports = ue);
  var c = Vt.exports,
    Ze = {},
    Kt = ho;
  (Ze.createRoot = Kt.createRoot), (Ze.hydrateRoot = Kt.hydrateRoot);
  var UA = {},
    VA = {};
  /**
   * @license React
   * react-dom-server-legacy.browser.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Jt = f;
  function j(A) {
    for (
      var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + A,
        t = 1;
      t < arguments.length;
      t++
    )
      e += "&args[]=" + encodeURIComponent(arguments[t]);
    return (
      "Minified React error #" +
      A +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var dA = Object.prototype.hasOwnProperty,
    Co =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Zt = {},
    qt = {};
  function $t(A) {
    return dA.call(qt, A)
      ? !0
      : dA.call(Zt, A)
      ? !1
      : Co.test(A)
      ? (qt[A] = !0)
      : ((Zt[A] = !0), !1);
  }
  function uA(A, e, t, n, r, o, s) {
    (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
      (this.attributeName = n),
      (this.attributeNamespace = r),
      (this.mustUseProperty = t),
      (this.propertyName = A),
      (this.type = e),
      (this.sanitizeURL = o),
      (this.removeEmptyString = s);
  }
  var sA = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (A) {
      sA[A] = new uA(A, 0, !1, A, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (A) {
      var e = A[0];
      sA[e] = new uA(e, 1, !1, A[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      A
    ) {
      sA[A] = new uA(A, 2, !1, A.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (A) {
      sA[A] = new uA(A, 2, !1, A, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (A) {
        sA[A] = new uA(A, 3, !1, A.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (A) {
      sA[A] = new uA(A, 3, !0, A, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (A) {
      sA[A] = new uA(A, 4, !1, A, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (A) {
      sA[A] = new uA(A, 6, !1, A, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (A) {
      sA[A] = new uA(A, 5, !1, A.toLowerCase(), null, !1, !1);
    });
  var qe = /[\-:]([a-z])/g;
  function $e(A) {
    return A[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (A) {
      var e = A.replace(qe, $e);
      sA[e] = new uA(e, 1, !1, A, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (A) {
        var e = A.replace(qe, $e);
        sA[e] = new uA(e, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (A) {
      var e = A.replace(qe, $e);
      sA[e] = new uA(
        e,
        1,
        !1,
        A,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (A) {
      sA[A] = new uA(A, 1, !1, A.toLowerCase(), null, !1, !1);
    }),
    (sA.xlinkHref = new uA(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (A) {
      sA[A] = new uA(A, 1, !1, A.toLowerCase(), null, !0, !0);
    });
  var ce = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    bo = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ce).forEach(function (A) {
    bo.forEach(function (e) {
      (e = e + A.charAt(0).toUpperCase() + A.substring(1)), (ce[e] = ce[A]);
    });
  });
  var So = /["'&<>]/;
  function cA(A) {
    if (typeof A == "boolean" || typeof A == "number") return "" + A;
    A = "" + A;
    var e = So.exec(A);
    if (e) {
      var t = "",
        n,
        r = 0;
      for (n = e.index; n < A.length; n++) {
        switch (A.charCodeAt(n)) {
          case 34:
            e = "&quot;";
            break;
          case 38:
            e = "&amp;";
            break;
          case 39:
            e = "&#x27;";
            break;
          case 60:
            e = "&lt;";
            break;
          case 62:
            e = "&gt;";
            break;
          default:
            continue;
        }
        r !== n && (t += A.substring(r, n)), (r = n + 1), (t += e);
      }
      A = r !== n ? t + A.substring(r, n) : t;
    }
    return A;
  }
  var Qo = /([A-Z])/g,
    xo = /^ms-/,
    At = Array.isArray;
  function kA(A, e) {
    return { insertionMode: A, selectedValue: e };
  }
  function ko(A, e, t) {
    switch (e) {
      case "select":
        return kA(1, t.value != null ? t.value : t.defaultValue);
      case "svg":
        return kA(2, null);
      case "math":
        return kA(3, null);
      case "foreignObject":
        return kA(1, null);
      case "table":
        return kA(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return kA(5, null);
      case "colgroup":
        return kA(7, null);
      case "tr":
        return kA(6, null);
    }
    return 4 <= A.insertionMode || A.insertionMode === 0 ? kA(1, null) : A;
  }
  var An = new Map();
  function en(A, e, t) {
    if (typeof t != "object") throw Error(j(62));
    e = !0;
    for (var n in t)
      if (dA.call(t, n)) {
        var r = t[n];
        if (r != null && typeof r != "boolean" && r !== "") {
          if (n.indexOf("--") === 0) {
            var o = cA(n);
            r = cA(("" + r).trim());
          } else {
            o = n;
            var s = An.get(o);
            s !== void 0 ||
              ((s = cA(o.replace(Qo, "-$1").toLowerCase().replace(xo, "-ms-"))),
              An.set(o, s)),
              (o = s),
              (r =
                typeof r == "number"
                  ? r === 0 || dA.call(ce, n)
                    ? "" + r
                    : r + "px"
                  : cA(("" + r).trim()));
          }
          e
            ? ((e = !1), A.push(' style="', o, ":", r))
            : A.push(";", o, ":", r);
        }
      }
    e || A.push('"');
  }
  function gA(A, e, t, n) {
    switch (t) {
      case "style":
        en(A, e, n);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")
    ) {
      if (((e = sA.hasOwnProperty(t) ? sA[t] : null), e !== null)) {
        switch (typeof n) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!e.acceptsBooleans) return;
        }
        switch (((t = e.attributeName), e.type)) {
          case 3:
            n && A.push(" ", t, '=""');
            break;
          case 4:
            n === !0
              ? A.push(" ", t, '=""')
              : n !== !1 && A.push(" ", t, '="', cA(n), '"');
            break;
          case 5:
            isNaN(n) || A.push(" ", t, '="', cA(n), '"');
            break;
          case 6:
            !isNaN(n) && 1 <= n && A.push(" ", t, '="', cA(n), '"');
            break;
          default:
            e.sanitizeURL && (n = "" + n), A.push(" ", t, '="', cA(n), '"');
        }
      } else if ($t(t)) {
        switch (typeof n) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (
              ((e = t.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-")
            )
              return;
        }
        A.push(" ", t, '="', cA(n), '"');
      }
    }
  }
  function fe(A, e, t) {
    if (e != null) {
      if (t != null) throw Error(j(60));
      if (typeof e != "object" || !("__html" in e)) throw Error(j(61));
      (e = e.__html), e != null && A.push("" + e);
    }
  }
  function To(A) {
    var e = "";
    return (
      Jt.Children.forEach(A, function (t) {
        t != null && (e += t);
      }),
      e
    );
  }
  function et(A, e, t, n) {
    A.push(DA(t));
    var r = (t = null),
      o;
    for (o in e)
      if (dA.call(e, o)) {
        var s = e[o];
        if (s != null)
          switch (o) {
            case "children":
              t = s;
              break;
            case "dangerouslySetInnerHTML":
              r = s;
              break;
            default:
              gA(A, n, o, s);
          }
      }
    return (
      A.push(">"), fe(A, r, t), typeof t == "string" ? (A.push(cA(t)), null) : t
    );
  }
  var Io = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    tn = new Map();
  function DA(A) {
    var e = tn.get(A);
    if (e === void 0) {
      if (!Io.test(A)) throw Error(j(65, A));
      (e = "<" + A), tn.set(A, e);
    }
    return e;
  }
  function Mo(A, e, t, n, r) {
    switch (e) {
      case "select":
        A.push(DA("select"));
        var o = null,
          s = null;
        for (u in t)
          if (dA.call(t, u)) {
            var l = t[u];
            if (l != null)
              switch (u) {
                case "children":
                  o = l;
                  break;
                case "dangerouslySetInnerHTML":
                  s = l;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  gA(A, n, u, l);
              }
          }
        return A.push(">"), fe(A, s, o), o;
      case "option":
        (s = r.selectedValue), A.push(DA("option"));
        var a = (l = null),
          i = null,
          u = null;
        for (o in t)
          if (dA.call(t, o)) {
            var d = t[o];
            if (d != null)
              switch (o) {
                case "children":
                  l = d;
                  break;
                case "selected":
                  i = d;
                  break;
                case "dangerouslySetInnerHTML":
                  u = d;
                  break;
                case "value":
                  a = d;
                default:
                  gA(A, n, o, d);
              }
          }
        if (s != null)
          if (((t = a !== null ? "" + a : To(l)), At(s))) {
            for (n = 0; n < s.length; n++)
              if ("" + s[n] === t) {
                A.push(' selected=""');
                break;
              }
          } else "" + s === t && A.push(' selected=""');
        else i && A.push(' selected=""');
        return A.push(">"), fe(A, u, l), l;
      case "textarea":
        A.push(DA("textarea")), (u = s = o = null);
        for (l in t)
          if (dA.call(t, l) && ((a = t[l]), a != null))
            switch (l) {
              case "children":
                u = a;
                break;
              case "value":
                o = a;
                break;
              case "defaultValue":
                s = a;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(j(91));
              default:
                gA(A, n, l, a);
            }
        if ((o === null && s !== null && (o = s), A.push(">"), u != null)) {
          if (o != null) throw Error(j(92));
          if (At(u) && 1 < u.length) throw Error(j(93));
          o = "" + u;
        }
        return (
          typeof o == "string" &&
            o[0] ===
              `
` &&
            A.push(`
`),
          o !== null && A.push(cA("" + o)),
          null
        );
      case "input":
        A.push(DA("input")), (a = u = l = o = null);
        for (s in t)
          if (dA.call(t, s) && ((i = t[s]), i != null))
            switch (s) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(j(399, "input"));
              case "defaultChecked":
                a = i;
                break;
              case "defaultValue":
                l = i;
                break;
              case "checked":
                u = i;
                break;
              case "value":
                o = i;
                break;
              default:
                gA(A, n, s, i);
            }
        return (
          u !== null
            ? gA(A, n, "checked", u)
            : a !== null && gA(A, n, "checked", a),
          o !== null
            ? gA(A, n, "value", o)
            : l !== null && gA(A, n, "value", l),
          A.push("/>"),
          null
        );
      case "menuitem":
        A.push(DA("menuitem"));
        for (var v in t)
          if (dA.call(t, v) && ((o = t[v]), o != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(j(400));
              default:
                gA(A, n, v, o);
            }
        return A.push(">"), null;
      case "title":
        A.push(DA("title")), (o = null);
        for (d in t)
          if (dA.call(t, d) && ((s = t[d]), s != null))
            switch (d) {
              case "children":
                o = s;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(j(434));
              default:
                gA(A, n, d, s);
            }
        return A.push(">"), o;
      case "listing":
      case "pre":
        A.push(DA(e)), (s = o = null);
        for (a in t)
          if (dA.call(t, a) && ((l = t[a]), l != null))
            switch (a) {
              case "children":
                o = l;
                break;
              case "dangerouslySetInnerHTML":
                s = l;
                break;
              default:
                gA(A, n, a, l);
            }
        if ((A.push(">"), s != null)) {
          if (o != null) throw Error(j(60));
          if (typeof s != "object" || !("__html" in s)) throw Error(j(61));
          (t = s.__html),
            t != null &&
              (typeof t == "string" &&
              0 < t.length &&
              t[0] ===
                `
`
                ? A.push(
                    `
`,
                    t
                  )
                : A.push("" + t));
        }
        return (
          typeof o == "string" &&
            o[0] ===
              `
` &&
            A.push(`
`),
          o
        );
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        A.push(DA(e));
        for (var w in t)
          if (dA.call(t, w) && ((o = t[w]), o != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(j(399, e));
              default:
                gA(A, n, w, o);
            }
        return A.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return et(A, t, e, n);
      case "html":
        return (
          r.insertionMode === 0 && A.push("<!DOCTYPE html>"), et(A, t, e, n)
        );
      default:
        if (e.indexOf("-") === -1 && typeof t.is != "string")
          return et(A, t, e, n);
        A.push(DA(e)), (s = o = null);
        for (i in t)
          if (dA.call(t, i) && ((l = t[i]), l != null))
            switch (i) {
              case "children":
                o = l;
                break;
              case "dangerouslySetInnerHTML":
                s = l;
                break;
              case "style":
                en(A, n, l);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                $t(i) &&
                  typeof l != "function" &&
                  typeof l != "symbol" &&
                  A.push(" ", i, '="', cA(l), '"');
            }
        return A.push(">"), fe(A, s, o), o;
    }
  }
  function nn(A, e, t) {
    if ((A.push('<!--$?--><template id="'), t === null)) throw Error(j(395));
    return A.push(t), A.push('"></template>');
  }
  function Oo(A, e, t, n) {
    switch (t.insertionMode) {
      case 0:
      case 1:
        return (
          A.push('<div hidden id="'),
          A.push(e.segmentPrefix),
          (e = n.toString(16)),
          A.push(e),
          A.push('">')
        );
      case 2:
        return (
          A.push('<svg aria-hidden="true" style="display:none" id="'),
          A.push(e.segmentPrefix),
          (e = n.toString(16)),
          A.push(e),
          A.push('">')
        );
      case 3:
        return (
          A.push('<math aria-hidden="true" style="display:none" id="'),
          A.push(e.segmentPrefix),
          (e = n.toString(16)),
          A.push(e),
          A.push('">')
        );
      case 4:
        return (
          A.push('<table hidden id="'),
          A.push(e.segmentPrefix),
          (e = n.toString(16)),
          A.push(e),
          A.push('">')
        );
      case 5:
        return (
          A.push('<table hidden><tbody id="'),
          A.push(e.segmentPrefix),
          (e = n.toString(16)),
          A.push(e),
          A.push('">')
        );
      case 6:
        return (
          A.push('<table hidden><tr id="'),
          A.push(e.segmentPrefix),
          (e = n.toString(16)),
          A.push(e),
          A.push('">')
        );
      case 7:
        return (
          A.push('<table hidden><colgroup id="'),
          A.push(e.segmentPrefix),
          (e = n.toString(16)),
          A.push(e),
          A.push('">')
        );
      default:
        throw Error(j(397));
    }
  }
  function Ro(A, e) {
    switch (e.insertionMode) {
      case 0:
      case 1:
        return A.push("</div>");
      case 2:
        return A.push("</svg>");
      case 3:
        return A.push("</math>");
      case 4:
        return A.push("</table>");
      case 5:
        return A.push("</tbody></table>");
      case 6:
        return A.push("</tr></table>");
      case 7:
        return A.push("</colgroup></table>");
      default:
        throw Error(j(397));
    }
  }
  var jo = /[<\u2028\u2029]/g;
  function tt(A) {
    return JSON.stringify(A).replace(jo, function (e) {
      switch (e) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    });
  }
  function Ho(A, e) {
    return (
      (e = e === void 0 ? "" : e),
      {
        bootstrapChunks: [],
        startInlineScript: "<script>",
        placeholderPrefix: e + "P:",
        segmentPrefix: e + "S:",
        boundaryPrefix: e + "B:",
        idPrefix: e,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1,
        generateStaticMarkup: A,
      }
    );
  }
  function rn(A, e, t, n) {
    return t.generateStaticMarkup
      ? (A.push(cA(e)), !1)
      : (e === ""
          ? (A = n)
          : (n && A.push("<!-- -->"), A.push(cA(e)), (A = !0)),
        A);
  }
  var qA = Object.assign,
    Lo = Symbol.for("react.element"),
    on = Symbol.for("react.portal"),
    sn = Symbol.for("react.fragment"),
    ln = Symbol.for("react.strict_mode"),
    an = Symbol.for("react.profiler"),
    un = Symbol.for("react.provider"),
    cn = Symbol.for("react.context"),
    fn = Symbol.for("react.forward_ref"),
    dn = Symbol.for("react.suspense"),
    vn = Symbol.for("react.suspense_list"),
    gn = Symbol.for("react.memo"),
    nt = Symbol.for("react.lazy"),
    Fo = Symbol.for("react.scope"),
    No = Symbol.for("react.debug_trace_mode"),
    Uo = Symbol.for("react.legacy_hidden"),
    zo = Symbol.for("react.default_value"),
    wn = Symbol.iterator;
  function rt(A) {
    if (A == null) return null;
    if (typeof A == "function") return A.displayName || A.name || null;
    if (typeof A == "string") return A;
    switch (A) {
      case sn:
        return "Fragment";
      case on:
        return "Portal";
      case an:
        return "Profiler";
      case ln:
        return "StrictMode";
      case dn:
        return "Suspense";
      case vn:
        return "SuspenseList";
    }
    if (typeof A == "object")
      switch (A.$$typeof) {
        case cn:
          return (A.displayName || "Context") + ".Consumer";
        case un:
          return (A._context.displayName || "Context") + ".Provider";
        case fn:
          var e = A.render;
          return (
            (A = A.displayName),
            A ||
              ((A = e.displayName || e.name || ""),
              (A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")),
            A
          );
        case gn:
          return (
            (e = A.displayName || null), e !== null ? e : rt(A.type) || "Memo"
          );
        case nt:
          (e = A._payload), (A = A._init);
          try {
            return rt(A(e));
          } catch {}
      }
    return null;
  }
  var hn = {};
  function pn(A, e) {
    if (((A = A.contextTypes), !A)) return hn;
    var t = {},
      n;
    for (n in A) t[n] = e[n];
    return t;
  }
  var zA = null;
  function de(A, e) {
    if (A !== e) {
      (A.context._currentValue2 = A.parentValue), (A = A.parent);
      var t = e.parent;
      if (A === null) {
        if (t !== null) throw Error(j(401));
      } else {
        if (t === null) throw Error(j(401));
        de(A, t);
      }
      e.context._currentValue2 = e.value;
    }
  }
  function mn(A) {
    (A.context._currentValue2 = A.parentValue),
      (A = A.parent),
      A !== null && mn(A);
  }
  function yn(A) {
    var e = A.parent;
    e !== null && yn(e), (A.context._currentValue2 = A.value);
  }
  function Bn(A, e) {
    if (
      ((A.context._currentValue2 = A.parentValue), (A = A.parent), A === null)
    )
      throw Error(j(402));
    A.depth === e.depth ? de(A, e) : Bn(A, e);
  }
  function En(A, e) {
    var t = e.parent;
    if (t === null) throw Error(j(402));
    A.depth === t.depth ? de(A, t) : En(A, t),
      (e.context._currentValue2 = e.value);
  }
  function ve(A) {
    var e = zA;
    e !== A &&
      (e === null
        ? yn(A)
        : A === null
        ? mn(e)
        : e.depth === A.depth
        ? de(e, A)
        : e.depth > A.depth
        ? Bn(e, A)
        : En(e, A),
      (zA = A));
  }
  var Pn = {
    isMounted: function () {
      return !1;
    },
    enqueueSetState: function (A, e) {
      (A = A._reactInternals), A.queue !== null && A.queue.push(e);
    },
    enqueueReplaceState: function (A, e) {
      (A = A._reactInternals), (A.replace = !0), (A.queue = [e]);
    },
    enqueueForceUpdate: function () {},
  };
  function Dn(A, e, t, n) {
    var r = A.state !== void 0 ? A.state : null;
    (A.updater = Pn), (A.props = t), (A.state = r);
    var o = { queue: [], replace: !1 };
    A._reactInternals = o;
    var s = e.contextType;
    if (
      ((A.context = typeof s == "object" && s !== null ? s._currentValue2 : n),
      (s = e.getDerivedStateFromProps),
      typeof s == "function" &&
        ((s = s(t, r)), (r = s == null ? r : qA({}, r, s)), (A.state = r)),
      typeof e.getDerivedStateFromProps != "function" &&
        typeof A.getSnapshotBeforeUpdate != "function" &&
        (typeof A.UNSAFE_componentWillMount == "function" ||
          typeof A.componentWillMount == "function"))
    )
      if (
        ((e = A.state),
        typeof A.componentWillMount == "function" && A.componentWillMount(),
        typeof A.UNSAFE_componentWillMount == "function" &&
          A.UNSAFE_componentWillMount(),
        e !== A.state && Pn.enqueueReplaceState(A, A.state, null),
        o.queue !== null && 0 < o.queue.length)
      )
        if (
          ((e = o.queue),
          (s = o.replace),
          (o.queue = null),
          (o.replace = !1),
          s && e.length === 1)
        )
          A.state = e[0];
        else {
          for (
            o = s ? e[0] : A.state, r = !0, s = s ? 1 : 0;
            s < e.length;
            s++
          ) {
            var l = e[s];
            (l = typeof l == "function" ? l.call(A, o, t, n) : l),
              l != null && (r ? ((r = !1), (o = qA({}, o, l))) : qA(o, l));
          }
          A.state = o;
        }
      else o.queue = null;
  }
  var Go = { id: 1, overflow: "" };
  function ot(A, e, t) {
    var n = A.id;
    A = A.overflow;
    var r = 32 - ge(n) - 1;
    (n &= ~(1 << r)), (t += 1);
    var o = 32 - ge(e) + r;
    if (30 < o) {
      var s = r - (r % 5);
      return (
        (o = (n & ((1 << s) - 1)).toString(32)),
        (n >>= s),
        (r -= s),
        { id: (1 << (32 - ge(e) + r)) | (t << r) | n, overflow: o + A }
      );
    }
    return { id: (1 << o) | (t << r) | n, overflow: A };
  }
  var ge = Math.clz32 ? Math.clz32 : Wo,
    _o = Math.log,
    Yo = Math.LN2;
  function Wo(A) {
    return (A >>>= 0), A === 0 ? 32 : (31 - ((_o(A) / Yo) | 0)) | 0;
  }
  function Vo(A, e) {
    return (A === e && (A !== 0 || 1 / A === 1 / e)) || (A !== A && e !== e);
  }
  var Xo = typeof Object.is == "function" ? Object.is : Vo,
    TA = null,
    st = null,
    we = null,
    K = null,
    $A = !1,
    he = !1,
    Ae = 0,
    OA = null,
    pe = 0;
  function GA() {
    if (TA === null) throw Error(j(321));
    return TA;
  }
  function Cn() {
    if (0 < pe) throw Error(j(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function lt() {
    return (
      K === null
        ? we === null
          ? (($A = !1), (we = K = Cn()))
          : (($A = !0), (K = we))
        : K.next === null
        ? (($A = !1), (K = K.next = Cn()))
        : (($A = !0), (K = K.next)),
      K
    );
  }
  function at() {
    (st = TA = null), (he = !1), (we = null), (pe = 0), (K = OA = null);
  }
  function bn(A, e) {
    return typeof e == "function" ? e(A) : e;
  }
  function Sn(A, e, t) {
    if (((TA = GA()), (K = lt()), $A)) {
      var n = K.queue;
      if (((e = n.dispatch), OA !== null && ((t = OA.get(n)), t !== void 0))) {
        OA.delete(n), (n = K.memoizedState);
        do (n = A(n, t.action)), (t = t.next);
        while (t !== null);
        return (K.memoizedState = n), [n, e];
      }
      return [K.memoizedState, e];
    }
    return (
      (A =
        A === bn
          ? typeof e == "function"
            ? e()
            : e
          : t !== void 0
          ? t(e)
          : e),
      (K.memoizedState = A),
      (A = K.queue = { last: null, dispatch: null }),
      (A = A.dispatch = Ko.bind(null, TA, A)),
      [K.memoizedState, A]
    );
  }
  function Qn(A, e) {
    if (((TA = GA()), (K = lt()), (e = e === void 0 ? null : e), K !== null)) {
      var t = K.memoizedState;
      if (t !== null && e !== null) {
        var n = t[1];
        A: if (n === null) n = !1;
        else {
          for (var r = 0; r < n.length && r < e.length; r++)
            if (!Xo(e[r], n[r])) {
              n = !1;
              break A;
            }
          n = !0;
        }
        if (n) return t[0];
      }
    }
    return (A = A()), (K.memoizedState = [A, e]), A;
  }
  function Ko(A, e, t) {
    if (25 <= pe) throw Error(j(301));
    if (A === TA)
      if (
        ((he = !0),
        (A = { action: t, next: null }),
        OA === null && (OA = new Map()),
        (t = OA.get(e)),
        t === void 0)
      )
        OA.set(e, A);
      else {
        for (e = t; e.next !== null; ) e = e.next;
        e.next = A;
      }
  }
  function Jo() {
    throw Error(j(394));
  }
  function me() {}
  var xn = {
      readContext: function (A) {
        return A._currentValue2;
      },
      useContext: function (A) {
        return GA(), A._currentValue2;
      },
      useMemo: Qn,
      useReducer: Sn,
      useRef: function (A) {
        (TA = GA()), (K = lt());
        var e = K.memoizedState;
        return e === null ? ((A = { current: A }), (K.memoizedState = A)) : e;
      },
      useState: function (A) {
        return Sn(bn, A);
      },
      useInsertionEffect: me,
      useLayoutEffect: function () {},
      useCallback: function (A, e) {
        return Qn(function () {
          return A;
        }, e);
      },
      useImperativeHandle: me,
      useEffect: me,
      useDebugValue: me,
      useDeferredValue: function (A) {
        return GA(), A;
      },
      useTransition: function () {
        return GA(), [!1, Jo];
      },
      useId: function () {
        var A = st.treeContext,
          e = A.overflow;
        (A = A.id), (A = (A & ~(1 << (32 - ge(A) - 1))).toString(32) + e);
        var t = ye;
        if (t === null) throw Error(j(404));
        return (
          (e = Ae++),
          (A = ":" + t.idPrefix + "R" + A),
          0 < e && (A += "H" + e.toString(32)),
          A + ":"
        );
      },
      useMutableSource: function (A, e) {
        return GA(), e(A._source);
      },
      useSyncExternalStore: function (A, e, t) {
        if (t === void 0) throw Error(j(407));
        return t();
      },
    },
    ye = null,
    it =
      Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        .ReactCurrentDispatcher;
  function Zo(A) {
    return console.error(A), null;
  }
  function ee() {}
  function qo(A, e, t, n, r, o, s, l, a) {
    var i = [],
      u = new Set();
    return (
      (e = {
        destination: null,
        responseState: e,
        progressiveChunkSize: n === void 0 ? 12800 : n,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: u,
        pingedTasks: i,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: r === void 0 ? Zo : r,
        onAllReady: ee,
        onShellReady: s === void 0 ? ee : s,
        onShellError: ee,
        onFatalError: ee,
      }),
      (t = Be(e, 0, null, t, !1, !1)),
      (t.parentFlushed = !0),
      (A = ut(e, A, null, t, u, hn, null, Go)),
      i.push(A),
      e
    );
  }
  function ut(A, e, t, n, r, o, s, l) {
    A.allPendingTasks++, t === null ? A.pendingRootTasks++ : t.pendingTasks++;
    var a = {
      node: e,
      ping: function () {
        var i = A.pingedTasks;
        i.push(a), i.length === 1 && jn(A);
      },
      blockedBoundary: t,
      blockedSegment: n,
      abortSet: r,
      legacyContext: o,
      context: s,
      treeContext: l,
    };
    return r.add(a), a;
  }
  function Be(A, e, t, n, r, o) {
    return {
      status: 0,
      id: -1,
      index: e,
      parentFlushed: !1,
      chunks: [],
      children: [],
      formatContext: n,
      boundary: t,
      lastPushedText: r,
      textEmbedded: o,
    };
  }
  function te(A, e) {
    if (((A = A.onError(e)), A != null && typeof A != "string"))
      throw Error(
        'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
          typeof A +
          '" instead'
      );
    return A;
  }
  function Ee(A, e) {
    var t = A.onShellError;
    t(e),
      (t = A.onFatalError),
      t(e),
      A.destination !== null
        ? ((A.status = 2), A.destination.destroy(e))
        : ((A.status = 1), (A.fatalError = e));
  }
  function kn(A, e, t, n, r) {
    for (TA = {}, st = e, Ae = 0, A = t(n, r); he; )
      (he = !1), (Ae = 0), (pe += 1), (K = null), (A = t(n, r));
    return at(), A;
  }
  function Tn(A, e, t, n) {
    var r = t.render(),
      o = n.childContextTypes;
    if (o != null) {
      var s = e.legacyContext;
      if (typeof t.getChildContext != "function") n = s;
      else {
        t = t.getChildContext();
        for (var l in t)
          if (!(l in o)) throw Error(j(108, rt(n) || "Unknown", l));
        n = qA({}, s, t);
      }
      (e.legacyContext = n), wA(A, e, r), (e.legacyContext = s);
    } else wA(A, e, r);
  }
  function In(A, e) {
    if (A && A.defaultProps) {
      (e = qA({}, e)), (A = A.defaultProps);
      for (var t in A) e[t] === void 0 && (e[t] = A[t]);
      return e;
    }
    return e;
  }
  function ct(A, e, t, n, r) {
    if (typeof t == "function")
      if (t.prototype && t.prototype.isReactComponent) {
        r = pn(t, e.legacyContext);
        var o = t.contextType;
        (o = new t(
          n,
          typeof o == "object" && o !== null ? o._currentValue2 : r
        )),
          Dn(o, t, n, r),
          Tn(A, e, o, t);
      } else {
        (o = pn(t, e.legacyContext)), (r = kn(A, e, t, n, o));
        var s = Ae !== 0;
        if (
          typeof r == "object" &&
          r !== null &&
          typeof r.render == "function" &&
          r.$$typeof === void 0
        )
          Dn(r, t, n, o), Tn(A, e, r, t);
        else if (s) {
          (n = e.treeContext), (e.treeContext = ot(n, 1, 0));
          try {
            wA(A, e, r);
          } finally {
            e.treeContext = n;
          }
        } else wA(A, e, r);
      }
    else if (typeof t == "string") {
      switch (
        ((r = e.blockedSegment),
        (o = Mo(r.chunks, t, n, A.responseState, r.formatContext)),
        (r.lastPushedText = !1),
        (s = r.formatContext),
        (r.formatContext = ko(s, t, n)),
        ft(A, e, o),
        (r.formatContext = s),
        t)
      ) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          r.chunks.push("</", t, ">");
      }
      r.lastPushedText = !1;
    } else {
      switch (t) {
        case Uo:
        case No:
        case ln:
        case an:
        case sn:
          wA(A, e, n.children);
          return;
        case vn:
          wA(A, e, n.children);
          return;
        case Fo:
          throw Error(j(343));
        case dn:
          A: {
            (t = e.blockedBoundary),
              (r = e.blockedSegment),
              (o = n.fallback),
              (n = n.children),
              (s = new Set());
            var l = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: s,
                errorDigest: null,
              },
              a = Be(A, r.chunks.length, l, r.formatContext, !1, !1);
            r.children.push(a), (r.lastPushedText = !1);
            var i = Be(A, 0, null, r.formatContext, !1, !1);
            (i.parentFlushed = !0),
              (e.blockedBoundary = l),
              (e.blockedSegment = i);
            try {
              if (
                (ft(A, e, n),
                A.responseState.generateStaticMarkup ||
                  (i.lastPushedText &&
                    i.textEmbedded &&
                    i.chunks.push("<!-- -->")),
                (i.status = 1),
                Pe(l, i),
                l.pendingTasks === 0)
              )
                break A;
            } catch (u) {
              (i.status = 4),
                (l.forceClientRender = !0),
                (l.errorDigest = te(A, u));
            } finally {
              (e.blockedBoundary = t), (e.blockedSegment = r);
            }
            (e = ut(A, o, t, a, s, e.legacyContext, e.context, e.treeContext)),
              A.pingedTasks.push(e);
          }
          return;
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case fn:
            if (((n = kn(A, e, t.render, n, r)), Ae !== 0)) {
              (t = e.treeContext), (e.treeContext = ot(t, 1, 0));
              try {
                wA(A, e, n);
              } finally {
                e.treeContext = t;
              }
            } else wA(A, e, n);
            return;
          case gn:
            (t = t.type), (n = In(t, n)), ct(A, e, t, n, r);
            return;
          case un:
            if (
              ((r = n.children),
              (t = t._context),
              (n = n.value),
              (o = t._currentValue2),
              (t._currentValue2 = n),
              (s = zA),
              (zA = n =
                {
                  parent: s,
                  depth: s === null ? 0 : s.depth + 1,
                  context: t,
                  parentValue: o,
                  value: n,
                }),
              (e.context = n),
              wA(A, e, r),
              (A = zA),
              A === null)
            )
              throw Error(j(403));
            (n = A.parentValue),
              (A.context._currentValue2 =
                n === zo ? A.context._defaultValue : n),
              (A = zA = A.parent),
              (e.context = A);
            return;
          case cn:
            (n = n.children), (n = n(t._currentValue2)), wA(A, e, n);
            return;
          case nt:
            (r = t._init),
              (t = r(t._payload)),
              (n = In(t, n)),
              ct(A, e, t, n, void 0);
            return;
        }
      throw Error(j(130, t == null ? t : typeof t, ""));
    }
  }
  function wA(A, e, t) {
    if (((e.node = t), typeof t == "object" && t !== null)) {
      switch (t.$$typeof) {
        case Lo:
          ct(A, e, t.type, t.props, t.ref);
          return;
        case on:
          throw Error(j(257));
        case nt:
          var n = t._init;
          (t = n(t._payload)), wA(A, e, t);
          return;
      }
      if (At(t)) {
        Mn(A, e, t);
        return;
      }
      if (
        (t === null || typeof t != "object"
          ? (n = null)
          : ((n = (wn && t[wn]) || t["@@iterator"]),
            (n = typeof n == "function" ? n : null)),
        n && (n = n.call(t)))
      ) {
        if (((t = n.next()), !t.done)) {
          var r = [];
          do r.push(t.value), (t = n.next());
          while (!t.done);
          Mn(A, e, r);
        }
        return;
      }
      throw (
        ((A = Object.prototype.toString.call(t)),
        Error(
          j(
            31,
            A === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : A
          )
        ))
      );
    }
    typeof t == "string"
      ? ((n = e.blockedSegment),
        (n.lastPushedText = rn(
          e.blockedSegment.chunks,
          t,
          A.responseState,
          n.lastPushedText
        )))
      : typeof t == "number" &&
        ((n = e.blockedSegment),
        (n.lastPushedText = rn(
          e.blockedSegment.chunks,
          "" + t,
          A.responseState,
          n.lastPushedText
        )));
  }
  function Mn(A, e, t) {
    for (var n = t.length, r = 0; r < n; r++) {
      var o = e.treeContext;
      e.treeContext = ot(o, n, r);
      try {
        ft(A, e, t[r]);
      } finally {
        e.treeContext = o;
      }
    }
  }
  function ft(A, e, t) {
    var n = e.blockedSegment.formatContext,
      r = e.legacyContext,
      o = e.context;
    try {
      return wA(A, e, t);
    } catch (a) {
      if (
        (at(),
        typeof a == "object" && a !== null && typeof a.then == "function")
      ) {
        t = a;
        var s = e.blockedSegment,
          l = Be(
            A,
            s.chunks.length,
            null,
            s.formatContext,
            s.lastPushedText,
            !0
          );
        s.children.push(l),
          (s.lastPushedText = !1),
          (A = ut(
            A,
            e.node,
            e.blockedBoundary,
            l,
            e.abortSet,
            e.legacyContext,
            e.context,
            e.treeContext
          ).ping),
          t.then(A, A),
          (e.blockedSegment.formatContext = n),
          (e.legacyContext = r),
          (e.context = o),
          ve(o);
      } else
        throw (
          ((e.blockedSegment.formatContext = n),
          (e.legacyContext = r),
          (e.context = o),
          ve(o),
          a)
        );
    }
  }
  function $o(A) {
    var e = A.blockedBoundary;
    (A = A.blockedSegment), (A.status = 3), Rn(this, e, A);
  }
  function On(A, e, t) {
    var n = A.blockedBoundary;
    (A.blockedSegment.status = 3),
      n === null
        ? (e.allPendingTasks--,
          e.status !== 2 &&
            ((e.status = 2),
            e.destination !== null && e.destination.push(null)))
        : (n.pendingTasks--,
          n.forceClientRender ||
            ((n.forceClientRender = !0),
            (A = t === void 0 ? Error(j(432)) : t),
            (n.errorDigest = e.onError(A)),
            n.parentFlushed && e.clientRenderedBoundaries.push(n)),
          n.fallbackAbortableTasks.forEach(function (r) {
            return On(r, e, t);
          }),
          n.fallbackAbortableTasks.clear(),
          e.allPendingTasks--,
          e.allPendingTasks === 0 && ((n = e.onAllReady), n()));
  }
  function Pe(A, e) {
    if (
      e.chunks.length === 0 &&
      e.children.length === 1 &&
      e.children[0].boundary === null
    ) {
      var t = e.children[0];
      (t.id = e.id), (t.parentFlushed = !0), t.status === 1 && Pe(A, t);
    } else A.completedSegments.push(e);
  }
  function Rn(A, e, t) {
    if (e === null) {
      if (t.parentFlushed) {
        if (A.completedRootSegment !== null) throw Error(j(389));
        A.completedRootSegment = t;
      }
      A.pendingRootTasks--,
        A.pendingRootTasks === 0 &&
          ((A.onShellError = ee), (e = A.onShellReady), e());
    } else
      e.pendingTasks--,
        e.forceClientRender ||
          (e.pendingTasks === 0
            ? (t.parentFlushed && t.status === 1 && Pe(e, t),
              e.parentFlushed && A.completedBoundaries.push(e),
              e.fallbackAbortableTasks.forEach($o, A),
              e.fallbackAbortableTasks.clear())
            : t.parentFlushed &&
              t.status === 1 &&
              (Pe(e, t),
              e.completedSegments.length === 1 &&
                e.parentFlushed &&
                A.partialBoundaries.push(e)));
    A.allPendingTasks--, A.allPendingTasks === 0 && ((A = A.onAllReady), A());
  }
  function jn(A) {
    if (A.status !== 2) {
      var e = zA,
        t = it.current;
      it.current = xn;
      var n = ye;
      ye = A.responseState;
      try {
        var r = A.pingedTasks,
          o;
        for (o = 0; o < r.length; o++) {
          var s = r[o],
            l = A,
            a = s.blockedSegment;
          if (a.status === 0) {
            ve(s.context);
            try {
              wA(l, s, s.node),
                l.responseState.generateStaticMarkup ||
                  (a.lastPushedText &&
                    a.textEmbedded &&
                    a.chunks.push("<!-- -->")),
                s.abortSet.delete(s),
                (a.status = 1),
                Rn(l, s.blockedBoundary, a);
            } catch (g) {
              if (
                (at(),
                typeof g == "object" &&
                  g !== null &&
                  typeof g.then == "function")
              ) {
                var i = s.ping;
                g.then(i, i);
              } else {
                s.abortSet.delete(s), (a.status = 4);
                var u = s.blockedBoundary,
                  d = g,
                  v = te(l, d);
                if (
                  (u === null
                    ? Ee(l, d)
                    : (u.pendingTasks--,
                      u.forceClientRender ||
                        ((u.forceClientRender = !0),
                        (u.errorDigest = v),
                        u.parentFlushed && l.clientRenderedBoundaries.push(u))),
                  l.allPendingTasks--,
                  l.allPendingTasks === 0)
                ) {
                  var w = l.onAllReady;
                  w();
                }
              }
            } finally {
            }
          }
        }
        r.splice(0, o), A.destination !== null && dt(A, A.destination);
      } catch (g) {
        te(A, g), Ee(A, g);
      } finally {
        (ye = n), (it.current = t), t === xn && ve(e);
      }
    }
  }
  function De(A, e, t) {
    switch (((t.parentFlushed = !0), t.status)) {
      case 0:
        var n = (t.id = A.nextSegmentId++);
        return (
          (t.lastPushedText = !1),
          (t.textEmbedded = !1),
          (A = A.responseState),
          e.push('<template id="'),
          e.push(A.placeholderPrefix),
          (A = n.toString(16)),
          e.push(A),
          e.push('"></template>')
        );
      case 1:
        t.status = 2;
        var r = !0;
        n = t.chunks;
        var o = 0;
        t = t.children;
        for (var s = 0; s < t.length; s++) {
          for (r = t[s]; o < r.index; o++) e.push(n[o]);
          r = Ce(A, e, r);
        }
        for (; o < n.length - 1; o++) e.push(n[o]);
        return o < n.length && (r = e.push(n[o])), r;
      default:
        throw Error(j(390));
    }
  }
  function Ce(A, e, t) {
    var n = t.boundary;
    if (n === null) return De(A, e, t);
    if (((n.parentFlushed = !0), n.forceClientRender))
      return (
        A.responseState.generateStaticMarkup ||
          ((n = n.errorDigest),
          e.push("<!--$!-->"),
          e.push("<template"),
          n && (e.push(' data-dgst="'), (n = cA(n)), e.push(n), e.push('"')),
          e.push("></template>")),
        De(A, e, t),
        (A = A.responseState.generateStaticMarkup ? !0 : e.push("<!--/$-->")),
        A
      );
    if (0 < n.pendingTasks) {
      (n.rootSegmentID = A.nextSegmentId++),
        0 < n.completedSegments.length && A.partialBoundaries.push(n);
      var r = A.responseState,
        o = r.nextSuspenseID++;
      return (
        (r = r.boundaryPrefix + o.toString(16)),
        (n = n.id = r),
        nn(e, A.responseState, n),
        De(A, e, t),
        e.push("<!--/$-->")
      );
    }
    if (n.byteSize > A.progressiveChunkSize)
      return (
        (n.rootSegmentID = A.nextSegmentId++),
        A.completedBoundaries.push(n),
        nn(e, A.responseState, n.id),
        De(A, e, t),
        e.push("<!--/$-->")
      );
    if (
      (A.responseState.generateStaticMarkup || e.push("<!--$-->"),
      (t = n.completedSegments),
      t.length !== 1)
    )
      throw Error(j(391));
    return (
      Ce(A, e, t[0]),
      (A = A.responseState.generateStaticMarkup ? !0 : e.push("<!--/$-->")),
      A
    );
  }
  function Hn(A, e, t) {
    return (
      Oo(e, A.responseState, t.formatContext, t.id),
      Ce(A, e, t),
      Ro(e, t.formatContext)
    );
  }
  function Ln(A, e, t) {
    for (var n = t.completedSegments, r = 0; r < n.length; r++)
      Fn(A, e, t, n[r]);
    if (
      ((n.length = 0),
      (A = A.responseState),
      (n = t.id),
      (t = t.rootSegmentID),
      e.push(A.startInlineScript),
      A.sentCompleteBoundaryFunction
        ? e.push('$RC("')
        : ((A.sentCompleteBoundaryFunction = !0),
          e.push(
            'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'
          )),
      n === null)
    )
      throw Error(j(395));
    return (
      (t = t.toString(16)),
      e.push(n),
      e.push('","'),
      e.push(A.segmentPrefix),
      e.push(t),
      e.push('")</script>')
    );
  }
  function Fn(A, e, t, n) {
    if (n.status === 2) return !0;
    var r = n.id;
    if (r === -1) {
      if ((n.id = t.rootSegmentID) === -1) throw Error(j(392));
      return Hn(A, e, n);
    }
    return (
      Hn(A, e, n),
      (A = A.responseState),
      e.push(A.startInlineScript),
      A.sentCompleteSegmentFunction
        ? e.push('$RS("')
        : ((A.sentCompleteSegmentFunction = !0),
          e.push(
            'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
          )),
      e.push(A.segmentPrefix),
      (r = r.toString(16)),
      e.push(r),
      e.push('","'),
      e.push(A.placeholderPrefix),
      e.push(r),
      e.push('")</script>')
    );
  }
  function dt(A, e) {
    try {
      var t = A.completedRootSegment;
      if (t !== null && A.pendingRootTasks === 0) {
        Ce(A, e, t), (A.completedRootSegment = null);
        var n = A.responseState.bootstrapChunks;
        for (t = 0; t < n.length - 1; t++) e.push(n[t]);
        t < n.length && e.push(n[t]);
      }
      var r = A.clientRenderedBoundaries,
        o;
      for (o = 0; o < r.length; o++) {
        var s = r[o];
        n = e;
        var l = A.responseState,
          a = s.id,
          i = s.errorDigest,
          u = s.errorMessage,
          d = s.errorComponentStack;
        if (
          (n.push(l.startInlineScript),
          l.sentClientRenderFunction
            ? n.push('$RX("')
            : ((l.sentClientRenderFunction = !0),
              n.push(
                'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'
              )),
          a === null)
        )
          throw Error(j(395));
        if ((n.push(a), n.push('"'), i || u || d)) {
          n.push(",");
          var v = tt(i || "");
          n.push(v);
        }
        if (u || d) {
          n.push(",");
          var w = tt(u || "");
          n.push(w);
        }
        if (d) {
          n.push(",");
          var g = tt(d);
          n.push(g);
        }
        if (!n.push(")</script>")) {
          (A.destination = null), o++, r.splice(0, o);
          return;
        }
      }
      r.splice(0, o);
      var p = A.completedBoundaries;
      for (o = 0; o < p.length; o++)
        if (!Ln(A, e, p[o])) {
          (A.destination = null), o++, p.splice(0, o);
          return;
        }
      p.splice(0, o);
      var h = A.partialBoundaries;
      for (o = 0; o < h.length; o++) {
        var m = h[o];
        A: {
          (r = A), (s = e);
          var E = m.completedSegments;
          for (l = 0; l < E.length; l++)
            if (!Fn(r, s, m, E[l])) {
              l++, E.splice(0, l);
              var Q = !1;
              break A;
            }
          E.splice(0, l), (Q = !0);
        }
        if (!Q) {
          (A.destination = null), o++, h.splice(0, o);
          return;
        }
      }
      h.splice(0, o);
      var b = A.completedBoundaries;
      for (o = 0; o < b.length; o++)
        if (!Ln(A, e, b[o])) {
          (A.destination = null), o++, b.splice(0, o);
          return;
        }
      b.splice(0, o);
    } finally {
      A.allPendingTasks === 0 &&
        A.pingedTasks.length === 0 &&
        A.clientRenderedBoundaries.length === 0 &&
        A.completedBoundaries.length === 0 &&
        e.push(null);
    }
  }
  function As(A, e) {
    try {
      var t = A.abortableTasks;
      t.forEach(function (n) {
        return On(n, A, e);
      }),
        t.clear(),
        A.destination !== null && dt(A, A.destination);
    } catch (n) {
      te(A, n), Ee(A, n);
    }
  }
  function es() {}
  function Nn(A, e, t, n) {
    var r = !1,
      o = null,
      s = "",
      l = {
        push: function (i) {
          return i !== null && (s += i), !0;
        },
        destroy: function (i) {
          (r = !0), (o = i);
        },
      },
      a = !1;
    if (
      ((A = qo(
        A,
        Ho(t, e ? e.identifierPrefix : void 0),
        { insertionMode: 1, selectedValue: null },
        1 / 0,
        es,
        void 0,
        function () {
          a = !0;
        }
      )),
      jn(A),
      As(A, n),
      A.status === 1)
    )
      (A.status = 2), l.destroy(A.fatalError);
    else if (A.status !== 2 && A.destination === null) {
      A.destination = l;
      try {
        dt(A, l);
      } catch (i) {
        te(A, i), Ee(A, i);
      }
    }
    if (r) throw o;
    if (!a) throw Error(j(426));
    return s;
  }
  (VA.renderToNodeStream = function () {
    throw Error(j(207));
  }),
    (VA.renderToStaticMarkup = function (A, e) {
      return Nn(
        A,
        e,
        !0,
        'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
      );
    }),
    (VA.renderToStaticNodeStream = function () {
      throw Error(j(208));
    }),
    (VA.renderToString = function (A, e) {
      return Nn(
        A,
        e,
        !1,
        'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
      );
    }),
    (VA.version = "18.3.1");
  var vt = {};
  /**
   * @license React
   * react-dom-server.browser.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Un = f;
  function L(A) {
    for (
      var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + A,
        t = 1;
      t < arguments.length;
      t++
    )
      e += "&args[]=" + encodeURIComponent(arguments[t]);
    return (
      "Minified React error #" +
      A +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var hA = null,
    pA = 0;
  function k(A, e) {
    if (e.length !== 0)
      if (512 < e.length)
        0 < pA &&
          (A.enqueue(new Uint8Array(hA.buffer, 0, pA)),
          (hA = new Uint8Array(512)),
          (pA = 0)),
          A.enqueue(e);
      else {
        var t = hA.length - pA;
        t < e.length &&
          (t === 0
            ? A.enqueue(hA)
            : (hA.set(e.subarray(0, t), pA),
              A.enqueue(hA),
              (e = e.subarray(t))),
          (hA = new Uint8Array(512)),
          (pA = 0)),
          hA.set(e, pA),
          (pA += e.length);
      }
  }
  function q(A, e) {
    return k(A, e), !0;
  }
  function zn(A) {
    hA &&
      0 < pA &&
      (A.enqueue(new Uint8Array(hA.buffer, 0, pA)), (hA = null), (pA = 0));
  }
  var Gn = new TextEncoder();
  function N(A) {
    return Gn.encode(A);
  }
  function C(A) {
    return Gn.encode(A);
  }
  function _n(A, e) {
    typeof A.error == "function" ? A.error(e) : A.close();
  }
  var vA = Object.prototype.hasOwnProperty,
    ts =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Yn = {},
    Wn = {};
  function Vn(A) {
    return vA.call(Wn, A)
      ? !0
      : vA.call(Yn, A)
      ? !1
      : ts.test(A)
      ? (Wn[A] = !0)
      : ((Yn[A] = !0), !1);
  }
  function fA(A, e, t, n, r, o, s) {
    (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
      (this.attributeName = n),
      (this.attributeNamespace = r),
      (this.mustUseProperty = t),
      (this.propertyName = A),
      (this.type = e),
      (this.sanitizeURL = o),
      (this.removeEmptyString = s);
  }
  var lA = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (A) {
      lA[A] = new fA(A, 0, !1, A, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (A) {
      var e = A[0];
      lA[e] = new fA(e, 1, !1, A[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      A
    ) {
      lA[A] = new fA(A, 2, !1, A.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (A) {
      lA[A] = new fA(A, 2, !1, A, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (A) {
        lA[A] = new fA(A, 3, !1, A.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (A) {
      lA[A] = new fA(A, 3, !0, A, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (A) {
      lA[A] = new fA(A, 4, !1, A, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (A) {
      lA[A] = new fA(A, 6, !1, A, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (A) {
      lA[A] = new fA(A, 5, !1, A.toLowerCase(), null, !1, !1);
    });
  var gt = /[\-:]([a-z])/g;
  function wt(A) {
    return A[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (A) {
      var e = A.replace(gt, wt);
      lA[e] = new fA(e, 1, !1, A, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (A) {
        var e = A.replace(gt, wt);
        lA[e] = new fA(e, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (A) {
      var e = A.replace(gt, wt);
      lA[e] = new fA(
        e,
        1,
        !1,
        A,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (A) {
      lA[A] = new fA(A, 1, !1, A.toLowerCase(), null, !1, !1);
    }),
    (lA.xlinkHref = new fA(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (A) {
      lA[A] = new fA(A, 1, !1, A.toLowerCase(), null, !0, !0);
    });
  var be = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    ns = ["Webkit", "ms", "Moz", "O"];
  Object.keys(be).forEach(function (A) {
    ns.forEach(function (e) {
      (e = e + A.charAt(0).toUpperCase() + A.substring(1)), (be[e] = be[A]);
    });
  });
  var rs = /["'&<>]/;
  function aA(A) {
    if (typeof A == "boolean" || typeof A == "number") return "" + A;
    A = "" + A;
    var e = rs.exec(A);
    if (e) {
      var t = "",
        n,
        r = 0;
      for (n = e.index; n < A.length; n++) {
        switch (A.charCodeAt(n)) {
          case 34:
            e = "&quot;";
            break;
          case 38:
            e = "&amp;";
            break;
          case 39:
            e = "&#x27;";
            break;
          case 60:
            e = "&lt;";
            break;
          case 62:
            e = "&gt;";
            break;
          default:
            continue;
        }
        r !== n && (t += A.substring(r, n)), (r = n + 1), (t += e);
      }
      A = r !== n ? t + A.substring(r, n) : t;
    }
    return A;
  }
  var os = /([A-Z])/g,
    ss = /^ms-/,
    ht = Array.isArray,
    ls = C("<script>"),
    as = C("</script>"),
    is = C('<script src="'),
    us = C('<script type="module" src="'),
    Xn = C('" async=""></script>'),
    cs = /(<\/|<)(s)(cript)/gi;
  function fs(A, e, t, n) {
    return "" + e + (t === "s" ? "\\u0073" : "\\u0053") + n;
  }
  function ds(A, e, t, n, r) {
    (A = A === void 0 ? "" : A),
      (e = e === void 0 ? ls : C('<script nonce="' + aA(e) + '">'));
    var o = [];
    if (
      (t !== void 0 && o.push(e, N(("" + t).replace(cs, fs)), as), n !== void 0)
    )
      for (t = 0; t < n.length; t++) o.push(is, N(aA(n[t])), Xn);
    if (r !== void 0)
      for (n = 0; n < r.length; n++) o.push(us, N(aA(r[n])), Xn);
    return {
      bootstrapChunks: o,
      startInlineScript: e,
      placeholderPrefix: C(A + "P:"),
      segmentPrefix: C(A + "S:"),
      boundaryPrefix: A + "B:",
      idPrefix: A,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
    };
  }
  function CA(A, e) {
    return { insertionMode: A, selectedValue: e };
  }
  function vs(A) {
    return CA(
      A === "http://www.w3.org/2000/svg"
        ? 2
        : A === "http://www.w3.org/1998/Math/MathML"
        ? 3
        : 0,
      null
    );
  }
  function gs(A, e, t) {
    switch (e) {
      case "select":
        return CA(1, t.value != null ? t.value : t.defaultValue);
      case "svg":
        return CA(2, null);
      case "math":
        return CA(3, null);
      case "foreignObject":
        return CA(1, null);
      case "table":
        return CA(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return CA(5, null);
      case "colgroup":
        return CA(7, null);
      case "tr":
        return CA(6, null);
    }
    return 4 <= A.insertionMode || A.insertionMode === 0 ? CA(1, null) : A;
  }
  var pt = C("<!-- -->");
  function Kn(A, e, t, n) {
    return e === "" ? n : (n && A.push(pt), A.push(N(aA(e))), !0);
  }
  var Jn = new Map(),
    ws = C(' style="'),
    Zn = C(":"),
    hs = C(";");
  function qn(A, e, t) {
    if (typeof t != "object") throw Error(L(62));
    e = !0;
    for (var n in t)
      if (vA.call(t, n)) {
        var r = t[n];
        if (r != null && typeof r != "boolean" && r !== "") {
          if (n.indexOf("--") === 0) {
            var o = N(aA(n));
            r = N(aA(("" + r).trim()));
          } else {
            o = n;
            var s = Jn.get(o);
            s !== void 0 ||
              ((s = C(
                aA(o.replace(os, "-$1").toLowerCase().replace(ss, "-ms-"))
              )),
              Jn.set(o, s)),
              (o = s),
              (r =
                typeof r == "number"
                  ? r === 0 || vA.call(be, n)
                    ? N("" + r)
                    : N(r + "px")
                  : N(aA(("" + r).trim())));
          }
          e ? ((e = !1), A.push(ws, o, Zn, r)) : A.push(hs, o, Zn, r);
        }
      }
    e || A.push(_A);
  }
  var RA = C(" "),
    XA = C('="'),
    _A = C('"'),
    $n = C('=""');
  function mA(A, e, t, n) {
    switch (t) {
      case "style":
        qn(A, e, n);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")
    ) {
      if (((e = lA.hasOwnProperty(t) ? lA[t] : null), e !== null)) {
        switch (typeof n) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!e.acceptsBooleans) return;
        }
        switch (((t = N(e.attributeName)), e.type)) {
          case 3:
            n && A.push(RA, t, $n);
            break;
          case 4:
            n === !0
              ? A.push(RA, t, $n)
              : n !== !1 && A.push(RA, t, XA, N(aA(n)), _A);
            break;
          case 5:
            isNaN(n) || A.push(RA, t, XA, N(aA(n)), _A);
            break;
          case 6:
            !isNaN(n) && 1 <= n && A.push(RA, t, XA, N(aA(n)), _A);
            break;
          default:
            e.sanitizeURL && (n = "" + n), A.push(RA, t, XA, N(aA(n)), _A);
        }
      } else if (Vn(t)) {
        switch (typeof n) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (
              ((e = t.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-")
            )
              return;
        }
        A.push(RA, N(t), XA, N(aA(n)), _A);
      }
    }
  }
  var jA = C(">"),
    Ar = C("/>");
  function Se(A, e, t) {
    if (e != null) {
      if (t != null) throw Error(L(60));
      if (typeof e != "object" || !("__html" in e)) throw Error(L(61));
      (e = e.__html), e != null && A.push(N("" + e));
    }
  }
  function ps(A) {
    var e = "";
    return (
      Un.Children.forEach(A, function (t) {
        t != null && (e += t);
      }),
      e
    );
  }
  var mt = C(' selected=""');
  function yt(A, e, t, n) {
    A.push(bA(t));
    var r = (t = null),
      o;
    for (o in e)
      if (vA.call(e, o)) {
        var s = e[o];
        if (s != null)
          switch (o) {
            case "children":
              t = s;
              break;
            case "dangerouslySetInnerHTML":
              r = s;
              break;
            default:
              mA(A, n, o, s);
          }
      }
    return (
      A.push(jA),
      Se(A, r, t),
      typeof t == "string" ? (A.push(N(aA(t))), null) : t
    );
  }
  var Bt = C(`
`),
    ms = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    er = new Map();
  function bA(A) {
    var e = er.get(A);
    if (e === void 0) {
      if (!ms.test(A)) throw Error(L(65, A));
      (e = C("<" + A)), er.set(A, e);
    }
    return e;
  }
  var ys = C("<!DOCTYPE html>");
  function Bs(A, e, t, n, r) {
    switch (e) {
      case "select":
        A.push(bA("select"));
        var o = null,
          s = null;
        for (u in t)
          if (vA.call(t, u)) {
            var l = t[u];
            if (l != null)
              switch (u) {
                case "children":
                  o = l;
                  break;
                case "dangerouslySetInnerHTML":
                  s = l;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  mA(A, n, u, l);
              }
          }
        return A.push(jA), Se(A, s, o), o;
      case "option":
        (s = r.selectedValue), A.push(bA("option"));
        var a = (l = null),
          i = null,
          u = null;
        for (o in t)
          if (vA.call(t, o)) {
            var d = t[o];
            if (d != null)
              switch (o) {
                case "children":
                  l = d;
                  break;
                case "selected":
                  i = d;
                  break;
                case "dangerouslySetInnerHTML":
                  u = d;
                  break;
                case "value":
                  a = d;
                default:
                  mA(A, n, o, d);
              }
          }
        if (s != null)
          if (((t = a !== null ? "" + a : ps(l)), ht(s))) {
            for (n = 0; n < s.length; n++)
              if ("" + s[n] === t) {
                A.push(mt);
                break;
              }
          } else "" + s === t && A.push(mt);
        else i && A.push(mt);
        return A.push(jA), Se(A, u, l), l;
      case "textarea":
        A.push(bA("textarea")), (u = s = o = null);
        for (l in t)
          if (vA.call(t, l) && ((a = t[l]), a != null))
            switch (l) {
              case "children":
                u = a;
                break;
              case "value":
                o = a;
                break;
              case "defaultValue":
                s = a;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(L(91));
              default:
                mA(A, n, l, a);
            }
        if ((o === null && s !== null && (o = s), A.push(jA), u != null)) {
          if (o != null) throw Error(L(92));
          if (ht(u) && 1 < u.length) throw Error(L(93));
          o = "" + u;
        }
        return (
          typeof o == "string" &&
            o[0] ===
              `
` &&
            A.push(Bt),
          o !== null && A.push(N(aA("" + o))),
          null
        );
      case "input":
        A.push(bA("input")), (a = u = l = o = null);
        for (s in t)
          if (vA.call(t, s) && ((i = t[s]), i != null))
            switch (s) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(L(399, "input"));
              case "defaultChecked":
                a = i;
                break;
              case "defaultValue":
                l = i;
                break;
              case "checked":
                u = i;
                break;
              case "value":
                o = i;
                break;
              default:
                mA(A, n, s, i);
            }
        return (
          u !== null
            ? mA(A, n, "checked", u)
            : a !== null && mA(A, n, "checked", a),
          o !== null
            ? mA(A, n, "value", o)
            : l !== null && mA(A, n, "value", l),
          A.push(Ar),
          null
        );
      case "menuitem":
        A.push(bA("menuitem"));
        for (var v in t)
          if (vA.call(t, v) && ((o = t[v]), o != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(L(400));
              default:
                mA(A, n, v, o);
            }
        return A.push(jA), null;
      case "title":
        A.push(bA("title")), (o = null);
        for (d in t)
          if (vA.call(t, d) && ((s = t[d]), s != null))
            switch (d) {
              case "children":
                o = s;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(L(434));
              default:
                mA(A, n, d, s);
            }
        return A.push(jA), o;
      case "listing":
      case "pre":
        A.push(bA(e)), (s = o = null);
        for (a in t)
          if (vA.call(t, a) && ((l = t[a]), l != null))
            switch (a) {
              case "children":
                o = l;
                break;
              case "dangerouslySetInnerHTML":
                s = l;
                break;
              default:
                mA(A, n, a, l);
            }
        if ((A.push(jA), s != null)) {
          if (o != null) throw Error(L(60));
          if (typeof s != "object" || !("__html" in s)) throw Error(L(61));
          (t = s.__html),
            t != null &&
              (typeof t == "string" &&
              0 < t.length &&
              t[0] ===
                `
`
                ? A.push(Bt, N(t))
                : A.push(N("" + t)));
        }
        return (
          typeof o == "string" &&
            o[0] ===
              `
` &&
            A.push(Bt),
          o
        );
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        A.push(bA(e));
        for (var w in t)
          if (vA.call(t, w) && ((o = t[w]), o != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(L(399, e));
              default:
                mA(A, n, w, o);
            }
        return A.push(Ar), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return yt(A, t, e, n);
      case "html":
        return r.insertionMode === 0 && A.push(ys), yt(A, t, e, n);
      default:
        if (e.indexOf("-") === -1 && typeof t.is != "string")
          return yt(A, t, e, n);
        A.push(bA(e)), (s = o = null);
        for (i in t)
          if (vA.call(t, i) && ((l = t[i]), l != null))
            switch (i) {
              case "children":
                o = l;
                break;
              case "dangerouslySetInnerHTML":
                s = l;
                break;
              case "style":
                qn(A, n, l);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                Vn(i) &&
                  typeof l != "function" &&
                  typeof l != "symbol" &&
                  A.push(RA, N(i), XA, N(aA(l)), _A);
            }
        return A.push(jA), Se(A, s, o), o;
    }
  }
  var Es = C("</"),
    Ps = C(">"),
    Ds = C('<template id="'),
    Cs = C('"></template>'),
    bs = C("<!--$-->"),
    Ss = C('<!--$?--><template id="'),
    Qs = C('"></template>'),
    xs = C("<!--$!-->"),
    ks = C("<!--/$-->"),
    Ts = C("<template"),
    Is = C('"'),
    Ms = C(' data-dgst="');
  C(' data-msg="'), C(' data-stck="');
  var Os = C("></template>");
  function tr(A, e, t) {
    if ((k(A, Ss), t === null)) throw Error(L(395));
    return k(A, t), q(A, Qs);
  }
  var Rs = C('<div hidden id="'),
    js = C('">'),
    Hs = C("</div>"),
    Ls = C('<svg aria-hidden="true" style="display:none" id="'),
    Fs = C('">'),
    Ns = C("</svg>"),
    Us = C('<math aria-hidden="true" style="display:none" id="'),
    zs = C('">'),
    Gs = C("</math>"),
    _s = C('<table hidden id="'),
    Ys = C('">'),
    Ws = C("</table>"),
    Vs = C('<table hidden><tbody id="'),
    Xs = C('">'),
    Ks = C("</tbody></table>"),
    Js = C('<table hidden><tr id="'),
    Zs = C('">'),
    qs = C("</tr></table>"),
    $s = C('<table hidden><colgroup id="'),
    Al = C('">'),
    el = C("</colgroup></table>");
  function tl(A, e, t, n) {
    switch (t.insertionMode) {
      case 0:
      case 1:
        return (
          k(A, Rs), k(A, e.segmentPrefix), k(A, N(n.toString(16))), q(A, js)
        );
      case 2:
        return (
          k(A, Ls), k(A, e.segmentPrefix), k(A, N(n.toString(16))), q(A, Fs)
        );
      case 3:
        return (
          k(A, Us), k(A, e.segmentPrefix), k(A, N(n.toString(16))), q(A, zs)
        );
      case 4:
        return (
          k(A, _s), k(A, e.segmentPrefix), k(A, N(n.toString(16))), q(A, Ys)
        );
      case 5:
        return (
          k(A, Vs), k(A, e.segmentPrefix), k(A, N(n.toString(16))), q(A, Xs)
        );
      case 6:
        return (
          k(A, Js), k(A, e.segmentPrefix), k(A, N(n.toString(16))), q(A, Zs)
        );
      case 7:
        return (
          k(A, $s), k(A, e.segmentPrefix), k(A, N(n.toString(16))), q(A, Al)
        );
      default:
        throw Error(L(397));
    }
  }
  function nl(A, e) {
    switch (e.insertionMode) {
      case 0:
      case 1:
        return q(A, Hs);
      case 2:
        return q(A, Ns);
      case 3:
        return q(A, Gs);
      case 4:
        return q(A, Ws);
      case 5:
        return q(A, Ks);
      case 6:
        return q(A, qs);
      case 7:
        return q(A, el);
      default:
        throw Error(L(397));
    }
  }
  var rl = C(
      'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
    ),
    ol = C('$RS("'),
    sl = C('","'),
    ll = C('")</script>'),
    al = C(
      'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'
    ),
    il = C('$RC("'),
    ul = C('","'),
    cl = C('")</script>'),
    fl = C(
      'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'
    ),
    dl = C('$RX("'),
    vl = C('"'),
    gl = C(")</script>"),
    Et = C(","),
    wl = /[<\u2028\u2029]/g;
  function Pt(A) {
    return JSON.stringify(A).replace(wl, function (e) {
      switch (e) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    });
  }
  var ne = Object.assign,
    hl = Symbol.for("react.element"),
    nr = Symbol.for("react.portal"),
    rr = Symbol.for("react.fragment"),
    or = Symbol.for("react.strict_mode"),
    sr = Symbol.for("react.profiler"),
    lr = Symbol.for("react.provider"),
    ar = Symbol.for("react.context"),
    ir = Symbol.for("react.forward_ref"),
    ur = Symbol.for("react.suspense"),
    cr = Symbol.for("react.suspense_list"),
    fr = Symbol.for("react.memo"),
    Dt = Symbol.for("react.lazy"),
    pl = Symbol.for("react.scope"),
    ml = Symbol.for("react.debug_trace_mode"),
    yl = Symbol.for("react.legacy_hidden"),
    Bl = Symbol.for("react.default_value"),
    dr = Symbol.iterator;
  function Ct(A) {
    if (A == null) return null;
    if (typeof A == "function") return A.displayName || A.name || null;
    if (typeof A == "string") return A;
    switch (A) {
      case rr:
        return "Fragment";
      case nr:
        return "Portal";
      case sr:
        return "Profiler";
      case or:
        return "StrictMode";
      case ur:
        return "Suspense";
      case cr:
        return "SuspenseList";
    }
    if (typeof A == "object")
      switch (A.$$typeof) {
        case ar:
          return (A.displayName || "Context") + ".Consumer";
        case lr:
          return (A._context.displayName || "Context") + ".Provider";
        case ir:
          var e = A.render;
          return (
            (A = A.displayName),
            A ||
              ((A = e.displayName || e.name || ""),
              (A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")),
            A
          );
        case fr:
          return (
            (e = A.displayName || null), e !== null ? e : Ct(A.type) || "Memo"
          );
        case Dt:
          (e = A._payload), (A = A._init);
          try {
            return Ct(A(e));
          } catch {}
      }
    return null;
  }
  var vr = {};
  function gr(A, e) {
    if (((A = A.contextTypes), !A)) return vr;
    var t = {},
      n;
    for (n in A) t[n] = e[n];
    return t;
  }
  var YA = null;
  function Qe(A, e) {
    if (A !== e) {
      (A.context._currentValue = A.parentValue), (A = A.parent);
      var t = e.parent;
      if (A === null) {
        if (t !== null) throw Error(L(401));
      } else {
        if (t === null) throw Error(L(401));
        Qe(A, t);
      }
      e.context._currentValue = e.value;
    }
  }
  function wr(A) {
    (A.context._currentValue = A.parentValue),
      (A = A.parent),
      A !== null && wr(A);
  }
  function hr(A) {
    var e = A.parent;
    e !== null && hr(e), (A.context._currentValue = A.value);
  }
  function pr(A, e) {
    if (((A.context._currentValue = A.parentValue), (A = A.parent), A === null))
      throw Error(L(402));
    A.depth === e.depth ? Qe(A, e) : pr(A, e);
  }
  function mr(A, e) {
    var t = e.parent;
    if (t === null) throw Error(L(402));
    A.depth === t.depth ? Qe(A, t) : mr(A, t),
      (e.context._currentValue = e.value);
  }
  function xe(A) {
    var e = YA;
    e !== A &&
      (e === null
        ? hr(A)
        : A === null
        ? wr(e)
        : e.depth === A.depth
        ? Qe(e, A)
        : e.depth > A.depth
        ? pr(e, A)
        : mr(e, A),
      (YA = A));
  }
  var yr = {
    isMounted: function () {
      return !1;
    },
    enqueueSetState: function (A, e) {
      (A = A._reactInternals), A.queue !== null && A.queue.push(e);
    },
    enqueueReplaceState: function (A, e) {
      (A = A._reactInternals), (A.replace = !0), (A.queue = [e]);
    },
    enqueueForceUpdate: function () {},
  };
  function Br(A, e, t, n) {
    var r = A.state !== void 0 ? A.state : null;
    (A.updater = yr), (A.props = t), (A.state = r);
    var o = { queue: [], replace: !1 };
    A._reactInternals = o;
    var s = e.contextType;
    if (
      ((A.context = typeof s == "object" && s !== null ? s._currentValue : n),
      (s = e.getDerivedStateFromProps),
      typeof s == "function" &&
        ((s = s(t, r)), (r = s == null ? r : ne({}, r, s)), (A.state = r)),
      typeof e.getDerivedStateFromProps != "function" &&
        typeof A.getSnapshotBeforeUpdate != "function" &&
        (typeof A.UNSAFE_componentWillMount == "function" ||
          typeof A.componentWillMount == "function"))
    )
      if (
        ((e = A.state),
        typeof A.componentWillMount == "function" && A.componentWillMount(),
        typeof A.UNSAFE_componentWillMount == "function" &&
          A.UNSAFE_componentWillMount(),
        e !== A.state && yr.enqueueReplaceState(A, A.state, null),
        o.queue !== null && 0 < o.queue.length)
      )
        if (
          ((e = o.queue),
          (s = o.replace),
          (o.queue = null),
          (o.replace = !1),
          s && e.length === 1)
        )
          A.state = e[0];
        else {
          for (
            o = s ? e[0] : A.state, r = !0, s = s ? 1 : 0;
            s < e.length;
            s++
          ) {
            var l = e[s];
            (l = typeof l == "function" ? l.call(A, o, t, n) : l),
              l != null && (r ? ((r = !1), (o = ne({}, o, l))) : ne(o, l));
          }
          A.state = o;
        }
      else o.queue = null;
  }
  var El = { id: 1, overflow: "" };
  function bt(A, e, t) {
    var n = A.id;
    A = A.overflow;
    var r = 32 - ke(n) - 1;
    (n &= ~(1 << r)), (t += 1);
    var o = 32 - ke(e) + r;
    if (30 < o) {
      var s = r - (r % 5);
      return (
        (o = (n & ((1 << s) - 1)).toString(32)),
        (n >>= s),
        (r -= s),
        { id: (1 << (32 - ke(e) + r)) | (t << r) | n, overflow: o + A }
      );
    }
    return { id: (1 << o) | (t << r) | n, overflow: A };
  }
  var ke = Math.clz32 ? Math.clz32 : Cl,
    Pl = Math.log,
    Dl = Math.LN2;
  function Cl(A) {
    return (A >>>= 0), A === 0 ? 32 : (31 - ((Pl(A) / Dl) | 0)) | 0;
  }
  function bl(A, e) {
    return (A === e && (A !== 0 || 1 / A === 1 / e)) || (A !== A && e !== e);
  }
  var Sl = typeof Object.is == "function" ? Object.is : bl,
    IA = null,
    St = null,
    Te = null,
    J = null,
    re = !1,
    Ie = !1,
    oe = 0,
    HA = null,
    Me = 0;
  function WA() {
    if (IA === null) throw Error(L(321));
    return IA;
  }
  function Er() {
    if (0 < Me) throw Error(L(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Qt() {
    return (
      J === null
        ? Te === null
          ? ((re = !1), (Te = J = Er()))
          : ((re = !0), (J = Te))
        : J.next === null
        ? ((re = !1), (J = J.next = Er()))
        : ((re = !0), (J = J.next)),
      J
    );
  }
  function xt() {
    (St = IA = null), (Ie = !1), (Te = null), (Me = 0), (J = HA = null);
  }
  function Pr(A, e) {
    return typeof e == "function" ? e(A) : e;
  }
  function Dr(A, e, t) {
    if (((IA = WA()), (J = Qt()), re)) {
      var n = J.queue;
      if (((e = n.dispatch), HA !== null && ((t = HA.get(n)), t !== void 0))) {
        HA.delete(n), (n = J.memoizedState);
        do (n = A(n, t.action)), (t = t.next);
        while (t !== null);
        return (J.memoizedState = n), [n, e];
      }
      return [J.memoizedState, e];
    }
    return (
      (A =
        A === Pr
          ? typeof e == "function"
            ? e()
            : e
          : t !== void 0
          ? t(e)
          : e),
      (J.memoizedState = A),
      (A = J.queue = { last: null, dispatch: null }),
      (A = A.dispatch = Ql.bind(null, IA, A)),
      [J.memoizedState, A]
    );
  }
  function Cr(A, e) {
    if (((IA = WA()), (J = Qt()), (e = e === void 0 ? null : e), J !== null)) {
      var t = J.memoizedState;
      if (t !== null && e !== null) {
        var n = t[1];
        A: if (n === null) n = !1;
        else {
          for (var r = 0; r < n.length && r < e.length; r++)
            if (!Sl(e[r], n[r])) {
              n = !1;
              break A;
            }
          n = !0;
        }
        if (n) return t[0];
      }
    }
    return (A = A()), (J.memoizedState = [A, e]), A;
  }
  function Ql(A, e, t) {
    if (25 <= Me) throw Error(L(301));
    if (A === IA)
      if (
        ((Ie = !0),
        (A = { action: t, next: null }),
        HA === null && (HA = new Map()),
        (t = HA.get(e)),
        t === void 0)
      )
        HA.set(e, A);
      else {
        for (e = t; e.next !== null; ) e = e.next;
        e.next = A;
      }
  }
  function xl() {
    throw Error(L(394));
  }
  function Oe() {}
  var br = {
      readContext: function (A) {
        return A._currentValue;
      },
      useContext: function (A) {
        return WA(), A._currentValue;
      },
      useMemo: Cr,
      useReducer: Dr,
      useRef: function (A) {
        (IA = WA()), (J = Qt());
        var e = J.memoizedState;
        return e === null ? ((A = { current: A }), (J.memoizedState = A)) : e;
      },
      useState: function (A) {
        return Dr(Pr, A);
      },
      useInsertionEffect: Oe,
      useLayoutEffect: function () {},
      useCallback: function (A, e) {
        return Cr(function () {
          return A;
        }, e);
      },
      useImperativeHandle: Oe,
      useEffect: Oe,
      useDebugValue: Oe,
      useDeferredValue: function (A) {
        return WA(), A;
      },
      useTransition: function () {
        return WA(), [!1, xl];
      },
      useId: function () {
        var A = St.treeContext,
          e = A.overflow;
        (A = A.id), (A = (A & ~(1 << (32 - ke(A) - 1))).toString(32) + e);
        var t = Re;
        if (t === null) throw Error(L(404));
        return (
          (e = oe++),
          (A = ":" + t.idPrefix + "R" + A),
          0 < e && (A += "H" + e.toString(32)),
          A + ":"
        );
      },
      useMutableSource: function (A, e) {
        return WA(), e(A._source);
      },
      useSyncExternalStore: function (A, e, t) {
        if (t === void 0) throw Error(L(407));
        return t();
      },
    },
    Re = null,
    kt =
      Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        .ReactCurrentDispatcher;
  function kl(A) {
    return console.error(A), null;
  }
  function se() {}
  function Tl(A, e, t, n, r, o, s, l, a) {
    var i = [],
      u = new Set();
    return (
      (e = {
        destination: null,
        responseState: e,
        progressiveChunkSize: n === void 0 ? 12800 : n,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: u,
        pingedTasks: i,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: r === void 0 ? kl : r,
        onAllReady: o === void 0 ? se : o,
        onShellReady: s === void 0 ? se : s,
        onShellError: l === void 0 ? se : l,
        onFatalError: a === void 0 ? se : a,
      }),
      (t = je(e, 0, null, t, !1, !1)),
      (t.parentFlushed = !0),
      (A = Tt(e, A, null, t, u, vr, null, El)),
      i.push(A),
      e
    );
  }
  function Tt(A, e, t, n, r, o, s, l) {
    A.allPendingTasks++, t === null ? A.pendingRootTasks++ : t.pendingTasks++;
    var a = {
      node: e,
      ping: function () {
        var i = A.pingedTasks;
        i.push(a), i.length === 1 && Mr(A);
      },
      blockedBoundary: t,
      blockedSegment: n,
      abortSet: r,
      legacyContext: o,
      context: s,
      treeContext: l,
    };
    return r.add(a), a;
  }
  function je(A, e, t, n, r, o) {
    return {
      status: 0,
      id: -1,
      index: e,
      parentFlushed: !1,
      chunks: [],
      children: [],
      formatContext: n,
      boundary: t,
      lastPushedText: r,
      textEmbedded: o,
    };
  }
  function le(A, e) {
    if (((A = A.onError(e)), A != null && typeof A != "string"))
      throw Error(
        'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
          typeof A +
          '" instead'
      );
    return A;
  }
  function He(A, e) {
    var t = A.onShellError;
    t(e),
      (t = A.onFatalError),
      t(e),
      A.destination !== null
        ? ((A.status = 2), _n(A.destination, e))
        : ((A.status = 1), (A.fatalError = e));
  }
  function Sr(A, e, t, n, r) {
    for (IA = {}, St = e, oe = 0, A = t(n, r); Ie; )
      (Ie = !1), (oe = 0), (Me += 1), (J = null), (A = t(n, r));
    return xt(), A;
  }
  function Qr(A, e, t, n) {
    var r = t.render(),
      o = n.childContextTypes;
    if (o != null) {
      var s = e.legacyContext;
      if (typeof t.getChildContext != "function") n = s;
      else {
        t = t.getChildContext();
        for (var l in t)
          if (!(l in o)) throw Error(L(108, Ct(n) || "Unknown", l));
        n = ne({}, s, t);
      }
      (e.legacyContext = n), yA(A, e, r), (e.legacyContext = s);
    } else yA(A, e, r);
  }
  function xr(A, e) {
    if (A && A.defaultProps) {
      (e = ne({}, e)), (A = A.defaultProps);
      for (var t in A) e[t] === void 0 && (e[t] = A[t]);
      return e;
    }
    return e;
  }
  function It(A, e, t, n, r) {
    if (typeof t == "function")
      if (t.prototype && t.prototype.isReactComponent) {
        r = gr(t, e.legacyContext);
        var o = t.contextType;
        (o = new t(
          n,
          typeof o == "object" && o !== null ? o._currentValue : r
        )),
          Br(o, t, n, r),
          Qr(A, e, o, t);
      } else {
        (o = gr(t, e.legacyContext)), (r = Sr(A, e, t, n, o));
        var s = oe !== 0;
        if (
          typeof r == "object" &&
          r !== null &&
          typeof r.render == "function" &&
          r.$$typeof === void 0
        )
          Br(r, t, n, o), Qr(A, e, r, t);
        else if (s) {
          (n = e.treeContext), (e.treeContext = bt(n, 1, 0));
          try {
            yA(A, e, r);
          } finally {
            e.treeContext = n;
          }
        } else yA(A, e, r);
      }
    else if (typeof t == "string") {
      switch (
        ((r = e.blockedSegment),
        (o = Bs(r.chunks, t, n, A.responseState, r.formatContext)),
        (r.lastPushedText = !1),
        (s = r.formatContext),
        (r.formatContext = gs(s, t, n)),
        Mt(A, e, o),
        (r.formatContext = s),
        t)
      ) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          r.chunks.push(Es, N(t), Ps);
      }
      r.lastPushedText = !1;
    } else {
      switch (t) {
        case yl:
        case ml:
        case or:
        case sr:
        case rr:
          yA(A, e, n.children);
          return;
        case cr:
          yA(A, e, n.children);
          return;
        case pl:
          throw Error(L(343));
        case ur:
          A: {
            (t = e.blockedBoundary),
              (r = e.blockedSegment),
              (o = n.fallback),
              (n = n.children),
              (s = new Set());
            var l = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: s,
                errorDigest: null,
              },
              a = je(A, r.chunks.length, l, r.formatContext, !1, !1);
            r.children.push(a), (r.lastPushedText = !1);
            var i = je(A, 0, null, r.formatContext, !1, !1);
            (i.parentFlushed = !0),
              (e.blockedBoundary = l),
              (e.blockedSegment = i);
            try {
              if (
                (Mt(A, e, n),
                i.lastPushedText && i.textEmbedded && i.chunks.push(pt),
                (i.status = 1),
                Le(l, i),
                l.pendingTasks === 0)
              )
                break A;
            } catch (u) {
              (i.status = 4),
                (l.forceClientRender = !0),
                (l.errorDigest = le(A, u));
            } finally {
              (e.blockedBoundary = t), (e.blockedSegment = r);
            }
            (e = Tt(A, o, t, a, s, e.legacyContext, e.context, e.treeContext)),
              A.pingedTasks.push(e);
          }
          return;
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case ir:
            if (((n = Sr(A, e, t.render, n, r)), oe !== 0)) {
              (t = e.treeContext), (e.treeContext = bt(t, 1, 0));
              try {
                yA(A, e, n);
              } finally {
                e.treeContext = t;
              }
            } else yA(A, e, n);
            return;
          case fr:
            (t = t.type), (n = xr(t, n)), It(A, e, t, n, r);
            return;
          case lr:
            if (
              ((r = n.children),
              (t = t._context),
              (n = n.value),
              (o = t._currentValue),
              (t._currentValue = n),
              (s = YA),
              (YA = n =
                {
                  parent: s,
                  depth: s === null ? 0 : s.depth + 1,
                  context: t,
                  parentValue: o,
                  value: n,
                }),
              (e.context = n),
              yA(A, e, r),
              (A = YA),
              A === null)
            )
              throw Error(L(403));
            (n = A.parentValue),
              (A.context._currentValue =
                n === Bl ? A.context._defaultValue : n),
              (A = YA = A.parent),
              (e.context = A);
            return;
          case ar:
            (n = n.children), (n = n(t._currentValue)), yA(A, e, n);
            return;
          case Dt:
            (r = t._init),
              (t = r(t._payload)),
              (n = xr(t, n)),
              It(A, e, t, n, void 0);
            return;
        }
      throw Error(L(130, t == null ? t : typeof t, ""));
    }
  }
  function yA(A, e, t) {
    if (((e.node = t), typeof t == "object" && t !== null)) {
      switch (t.$$typeof) {
        case hl:
          It(A, e, t.type, t.props, t.ref);
          return;
        case nr:
          throw Error(L(257));
        case Dt:
          var n = t._init;
          (t = n(t._payload)), yA(A, e, t);
          return;
      }
      if (ht(t)) {
        kr(A, e, t);
        return;
      }
      if (
        (t === null || typeof t != "object"
          ? (n = null)
          : ((n = (dr && t[dr]) || t["@@iterator"]),
            (n = typeof n == "function" ? n : null)),
        n && (n = n.call(t)))
      ) {
        if (((t = n.next()), !t.done)) {
          var r = [];
          do r.push(t.value), (t = n.next());
          while (!t.done);
          kr(A, e, r);
        }
        return;
      }
      throw (
        ((A = Object.prototype.toString.call(t)),
        Error(
          L(
            31,
            A === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : A
          )
        ))
      );
    }
    typeof t == "string"
      ? ((n = e.blockedSegment),
        (n.lastPushedText = Kn(
          e.blockedSegment.chunks,
          t,
          A.responseState,
          n.lastPushedText
        )))
      : typeof t == "number" &&
        ((n = e.blockedSegment),
        (n.lastPushedText = Kn(
          e.blockedSegment.chunks,
          "" + t,
          A.responseState,
          n.lastPushedText
        )));
  }
  function kr(A, e, t) {
    for (var n = t.length, r = 0; r < n; r++) {
      var o = e.treeContext;
      e.treeContext = bt(o, n, r);
      try {
        Mt(A, e, t[r]);
      } finally {
        e.treeContext = o;
      }
    }
  }
  function Mt(A, e, t) {
    var n = e.blockedSegment.formatContext,
      r = e.legacyContext,
      o = e.context;
    try {
      return yA(A, e, t);
    } catch (a) {
      if (
        (xt(),
        typeof a == "object" && a !== null && typeof a.then == "function")
      ) {
        t = a;
        var s = e.blockedSegment,
          l = je(
            A,
            s.chunks.length,
            null,
            s.formatContext,
            s.lastPushedText,
            !0
          );
        s.children.push(l),
          (s.lastPushedText = !1),
          (A = Tt(
            A,
            e.node,
            e.blockedBoundary,
            l,
            e.abortSet,
            e.legacyContext,
            e.context,
            e.treeContext
          ).ping),
          t.then(A, A),
          (e.blockedSegment.formatContext = n),
          (e.legacyContext = r),
          (e.context = o),
          xe(o);
      } else
        throw (
          ((e.blockedSegment.formatContext = n),
          (e.legacyContext = r),
          (e.context = o),
          xe(o),
          a)
        );
    }
  }
  function Il(A) {
    var e = A.blockedBoundary;
    (A = A.blockedSegment), (A.status = 3), Ir(this, e, A);
  }
  function Tr(A, e, t) {
    var n = A.blockedBoundary;
    (A.blockedSegment.status = 3),
      n === null
        ? (e.allPendingTasks--,
          e.status !== 2 &&
            ((e.status = 2), e.destination !== null && e.destination.close()))
        : (n.pendingTasks--,
          n.forceClientRender ||
            ((n.forceClientRender = !0),
            (A = t === void 0 ? Error(L(432)) : t),
            (n.errorDigest = e.onError(A)),
            n.parentFlushed && e.clientRenderedBoundaries.push(n)),
          n.fallbackAbortableTasks.forEach(function (r) {
            return Tr(r, e, t);
          }),
          n.fallbackAbortableTasks.clear(),
          e.allPendingTasks--,
          e.allPendingTasks === 0 && ((n = e.onAllReady), n()));
  }
  function Le(A, e) {
    if (
      e.chunks.length === 0 &&
      e.children.length === 1 &&
      e.children[0].boundary === null
    ) {
      var t = e.children[0];
      (t.id = e.id), (t.parentFlushed = !0), t.status === 1 && Le(A, t);
    } else A.completedSegments.push(e);
  }
  function Ir(A, e, t) {
    if (e === null) {
      if (t.parentFlushed) {
        if (A.completedRootSegment !== null) throw Error(L(389));
        A.completedRootSegment = t;
      }
      A.pendingRootTasks--,
        A.pendingRootTasks === 0 &&
          ((A.onShellError = se), (e = A.onShellReady), e());
    } else
      e.pendingTasks--,
        e.forceClientRender ||
          (e.pendingTasks === 0
            ? (t.parentFlushed && t.status === 1 && Le(e, t),
              e.parentFlushed && A.completedBoundaries.push(e),
              e.fallbackAbortableTasks.forEach(Il, A),
              e.fallbackAbortableTasks.clear())
            : t.parentFlushed &&
              t.status === 1 &&
              (Le(e, t),
              e.completedSegments.length === 1 &&
                e.parentFlushed &&
                A.partialBoundaries.push(e)));
    A.allPendingTasks--, A.allPendingTasks === 0 && ((A = A.onAllReady), A());
  }
  function Mr(A) {
    if (A.status !== 2) {
      var e = YA,
        t = kt.current;
      kt.current = br;
      var n = Re;
      Re = A.responseState;
      try {
        var r = A.pingedTasks,
          o;
        for (o = 0; o < r.length; o++) {
          var s = r[o],
            l = A,
            a = s.blockedSegment;
          if (a.status === 0) {
            xe(s.context);
            try {
              yA(l, s, s.node),
                a.lastPushedText && a.textEmbedded && a.chunks.push(pt),
                s.abortSet.delete(s),
                (a.status = 1),
                Ir(l, s.blockedBoundary, a);
            } catch (g) {
              if (
                (xt(),
                typeof g == "object" &&
                  g !== null &&
                  typeof g.then == "function")
              ) {
                var i = s.ping;
                g.then(i, i);
              } else {
                s.abortSet.delete(s), (a.status = 4);
                var u = s.blockedBoundary,
                  d = g,
                  v = le(l, d);
                if (
                  (u === null
                    ? He(l, d)
                    : (u.pendingTasks--,
                      u.forceClientRender ||
                        ((u.forceClientRender = !0),
                        (u.errorDigest = v),
                        u.parentFlushed && l.clientRenderedBoundaries.push(u))),
                  l.allPendingTasks--,
                  l.allPendingTasks === 0)
                ) {
                  var w = l.onAllReady;
                  w();
                }
              }
            } finally {
            }
          }
        }
        r.splice(0, o), A.destination !== null && Ot(A, A.destination);
      } catch (g) {
        le(A, g), He(A, g);
      } finally {
        (Re = n), (kt.current = t), t === br && xe(e);
      }
    }
  }
  function Fe(A, e, t) {
    switch (((t.parentFlushed = !0), t.status)) {
      case 0:
        var n = (t.id = A.nextSegmentId++);
        return (
          (t.lastPushedText = !1),
          (t.textEmbedded = !1),
          (A = A.responseState),
          k(e, Ds),
          k(e, A.placeholderPrefix),
          (A = N(n.toString(16))),
          k(e, A),
          q(e, Cs)
        );
      case 1:
        t.status = 2;
        var r = !0;
        n = t.chunks;
        var o = 0;
        t = t.children;
        for (var s = 0; s < t.length; s++) {
          for (r = t[s]; o < r.index; o++) k(e, n[o]);
          r = Ne(A, e, r);
        }
        for (; o < n.length - 1; o++) k(e, n[o]);
        return o < n.length && (r = q(e, n[o])), r;
      default:
        throw Error(L(390));
    }
  }
  function Ne(A, e, t) {
    var n = t.boundary;
    if (n === null) return Fe(A, e, t);
    if (((n.parentFlushed = !0), n.forceClientRender))
      (n = n.errorDigest),
        q(e, xs),
        k(e, Ts),
        n && (k(e, Ms), k(e, N(aA(n))), k(e, Is)),
        q(e, Os),
        Fe(A, e, t);
    else if (0 < n.pendingTasks) {
      (n.rootSegmentID = A.nextSegmentId++),
        0 < n.completedSegments.length && A.partialBoundaries.push(n);
      var r = A.responseState,
        o = r.nextSuspenseID++;
      (r = C(r.boundaryPrefix + o.toString(16))),
        (n = n.id = r),
        tr(e, A.responseState, n),
        Fe(A, e, t);
    } else if (n.byteSize > A.progressiveChunkSize)
      (n.rootSegmentID = A.nextSegmentId++),
        A.completedBoundaries.push(n),
        tr(e, A.responseState, n.id),
        Fe(A, e, t);
    else {
      if ((q(e, bs), (t = n.completedSegments), t.length !== 1))
        throw Error(L(391));
      Ne(A, e, t[0]);
    }
    return q(e, ks);
  }
  function Or(A, e, t) {
    return (
      tl(e, A.responseState, t.formatContext, t.id),
      Ne(A, e, t),
      nl(e, t.formatContext)
    );
  }
  function Rr(A, e, t) {
    for (var n = t.completedSegments, r = 0; r < n.length; r++)
      jr(A, e, t, n[r]);
    if (
      ((n.length = 0),
      (A = A.responseState),
      (n = t.id),
      (t = t.rootSegmentID),
      k(e, A.startInlineScript),
      A.sentCompleteBoundaryFunction
        ? k(e, il)
        : ((A.sentCompleteBoundaryFunction = !0), k(e, al)),
      n === null)
    )
      throw Error(L(395));
    return (
      (t = N(t.toString(16))),
      k(e, n),
      k(e, ul),
      k(e, A.segmentPrefix),
      k(e, t),
      q(e, cl)
    );
  }
  function jr(A, e, t, n) {
    if (n.status === 2) return !0;
    var r = n.id;
    if (r === -1) {
      if ((n.id = t.rootSegmentID) === -1) throw Error(L(392));
      return Or(A, e, n);
    }
    return (
      Or(A, e, n),
      (A = A.responseState),
      k(e, A.startInlineScript),
      A.sentCompleteSegmentFunction
        ? k(e, ol)
        : ((A.sentCompleteSegmentFunction = !0), k(e, rl)),
      k(e, A.segmentPrefix),
      (r = N(r.toString(16))),
      k(e, r),
      k(e, sl),
      k(e, A.placeholderPrefix),
      k(e, r),
      q(e, ll)
    );
  }
  function Ot(A, e) {
    (hA = new Uint8Array(512)), (pA = 0);
    try {
      var t = A.completedRootSegment;
      if (t !== null && A.pendingRootTasks === 0) {
        Ne(A, e, t), (A.completedRootSegment = null);
        var n = A.responseState.bootstrapChunks;
        for (t = 0; t < n.length - 1; t++) k(e, n[t]);
        t < n.length && q(e, n[t]);
      }
      var r = A.clientRenderedBoundaries,
        o;
      for (o = 0; o < r.length; o++) {
        var s = r[o];
        n = e;
        var l = A.responseState,
          a = s.id,
          i = s.errorDigest,
          u = s.errorMessage,
          d = s.errorComponentStack;
        if (
          (k(n, l.startInlineScript),
          l.sentClientRenderFunction
            ? k(n, dl)
            : ((l.sentClientRenderFunction = !0), k(n, fl)),
          a === null)
        )
          throw Error(L(395));
        k(n, a),
          k(n, vl),
          (i || u || d) && (k(n, Et), k(n, N(Pt(i || "")))),
          (u || d) && (k(n, Et), k(n, N(Pt(u || "")))),
          d && (k(n, Et), k(n, N(Pt(d)))),
          q(n, gl);
      }
      r.splice(0, o);
      var v = A.completedBoundaries;
      for (o = 0; o < v.length; o++) Rr(A, e, v[o]);
      v.splice(0, o), zn(e), (hA = new Uint8Array(512)), (pA = 0);
      var w = A.partialBoundaries;
      for (o = 0; o < w.length; o++) {
        var g = w[o];
        A: {
          (r = A), (s = e);
          var p = g.completedSegments;
          for (l = 0; l < p.length; l++)
            if (!jr(r, s, g, p[l])) {
              l++, p.splice(0, l);
              var h = !1;
              break A;
            }
          p.splice(0, l), (h = !0);
        }
        if (!h) {
          (A.destination = null), o++, w.splice(0, o);
          return;
        }
      }
      w.splice(0, o);
      var m = A.completedBoundaries;
      for (o = 0; o < m.length; o++) Rr(A, e, m[o]);
      m.splice(0, o);
    } finally {
      zn(e),
        A.allPendingTasks === 0 &&
          A.pingedTasks.length === 0 &&
          A.clientRenderedBoundaries.length === 0 &&
          A.completedBoundaries.length === 0 &&
          e.close();
    }
  }
  function Hr(A, e) {
    try {
      var t = A.abortableTasks;
      t.forEach(function (n) {
        return Tr(n, A, e);
      }),
        t.clear(),
        A.destination !== null && Ot(A, A.destination);
    } catch (n) {
      le(A, n), He(A, n);
    }
  }
  (vt.renderToReadableStream = function (A, e) {
    return new Promise(function (t, n) {
      var r,
        o,
        s = new Promise(function (u, d) {
          (o = u), (r = d);
        }),
        l = Tl(
          A,
          ds(
            e ? e.identifierPrefix : void 0,
            e ? e.nonce : void 0,
            e ? e.bootstrapScriptContent : void 0,
            e ? e.bootstrapScripts : void 0,
            e ? e.bootstrapModules : void 0
          ),
          vs(e ? e.namespaceURI : void 0),
          e ? e.progressiveChunkSize : void 0,
          e ? e.onError : void 0,
          o,
          function () {
            var u = new ReadableStream(
              {
                type: "bytes",
                pull: function (d) {
                  if (l.status === 1) (l.status = 2), _n(d, l.fatalError);
                  else if (l.status !== 2 && l.destination === null) {
                    l.destination = d;
                    try {
                      Ot(l, d);
                    } catch (v) {
                      le(l, v), He(l, v);
                    }
                  }
                },
                cancel: function () {
                  Hr(l);
                },
              },
              { highWaterMark: 0 }
            );
            (u.allReady = s), t(u);
          },
          function (u) {
            s.catch(function () {}), n(u);
          },
          r
        );
      if (e && e.signal) {
        var a = e.signal,
          i = function () {
            Hr(l, a.reason), a.removeEventListener("abort", i);
          };
        a.addEventListener("abort", i);
      }
      Mr(l);
    });
  }),
    (vt.version = "18.3.1");
  var KA, Lr;
  (KA = VA),
    (Lr = vt),
    (UA.version = KA.version),
    (UA.renderToString = KA.renderToString),
    (UA.renderToStaticMarkup = KA.renderToStaticMarkup),
    (UA.renderToNodeStream = KA.renderToNodeStream),
    (UA.renderToStaticNodeStream = KA.renderToStaticNodeStream),
    (UA.renderToReadableStream = Lr.renderToReadableStream);
  const nA = {
      AUDIO_BUTTON: "audio-button",
      NOTIFICATION_BUTTON: "notification-button",
      CLOSE_CHAT_BUTTON: "close-chat-button",
      SEND_MESSAGE_BUTTON: "send-button",
      VOICE_MESSAGE_BUTTON: "voice-button",
      FILE_ATTACHMENT_BUTTON: "file-attachment-button",
      EMOJI_PICKER_BUTTON: "emoji-button",
    },
    Ml =
      "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2042%2042'%3e%3cpath%20style='fill:none;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke:%23b00000;stroke-opacity:1;stroke-miterlimit:4'%20d='M17%209a8%208%200%200%201-8%208%208%208%200%200%201-8-8%208%208%200%200%201%208-8%208%208%200%200%201%208%208Zm0%200'%20transform='rotate(.086)%20scale(1.77778)'/%3e%3cpath%20style='fill:none;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke:%23b00000;stroke-opacity:1;stroke-miterlimit:10'%20d='M14.66%2014.66%203.34%203.34'%20transform='rotate(.086)%20scale(1.77778)'/%3e%3c/svg%3e",
    Fr =
      "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20viewBox='0%200%201000%201000'%3e%3crect%20width='100%25'%20height='100%25'%20fill='%23fff'/%3e%3cg%3e%3crect%20width='45'%20height='30'%20x='-22.5'%20y='-15'%20rx='1.5'%20ry='1.5'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%2337547a;fill-rule:nonzero;opacity:1'%20transform='rotate(90%20-99%20362)%20scale(3.4003)'/%3e%3cpath%20d='M0%2075q14%200%2014%2017%200%2016-14%2016Z'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%2398b0ca;fill-rule:nonzero;opacity:1'%20transform='rotate(180%20106%20386)%20scale(3.4003)'/%3e%3crect%20width='25'%20height='4'%20x='-12.5'%20y='-2'%20rx='.2'%20ry='.2'%20style='stroke:%2346648c;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%2346648c;fill-rule:nonzero;opacity:1'%20transform='rotate(90%20-46%20282)%20scale(3.4003)'/%3e%3cpath%20d='M19%2065h4l5%204v1H14v-1Z'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%2346648c;fill-rule:nonzero;opacity:1'%20transform='translate(165%20150)%20scale(3.4003)'/%3e%3crect%20width='25'%20height='2'%20x='-12.5'%20y='-1'%20rx='.1'%20ry='.1'%20style='stroke:%2398b0ca;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%2398b0ca;fill-rule:nonzero;opacity:1'%20transform='rotate(90%20-3%20240)%20scale(3.4003)'/%3e%3ccircle%20r='7.5'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%23a478fc;fill-rule:nonzero;opacity:1'%20transform='translate(236%20175)%20scale(3.4003)'/%3e%3crect%20width='45'%20height='30'%20x='-22.5'%20y='-15'%20rx='1.5'%20ry='1.5'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%2337547a;fill-rule:nonzero;opacity:1'%20transform='rotate(90%20139%20600)%20scale(3.4003)'/%3e%3cpath%20d='M184%2075q14%200%2014%2017%200%2016-14%2016Z'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%2398b0ca;fill-rule:nonzero;opacity:1'%20transform='translate(165%20150)%20scale(3.4003)'/%3e%3crect%20width='25'%20height='4'%20x='-12.5'%20y='-2'%20rx='.2'%20ry='.2'%20style='stroke:%2346648c;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%2346648c;fill-rule:nonzero;opacity:1'%20transform='rotate(90%20219%20548)%20scale(3.4003)'/%3e%3cpath%20d='M175%2065h4l5%204v1h-14v-1Z'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%2346648c;fill-rule:nonzero;opacity:1'%20transform='translate(165%20150)%20scale(3.4003)'/%3e%3crect%20width='25'%20height='2'%20x='-12.5'%20y='-1'%20rx='.1'%20ry='.1'%20style='stroke:%2398b0ca;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%2398b0ca;fill-rule:nonzero;opacity:1'%20transform='rotate(90%20262%20505)%20scale(3.4003)'/%3e%3ccircle%20r='7.5'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%23a478fc;fill-rule:nonzero;opacity:1'%20transform='translate(767%20175)%20scale(3.4003)'/%3e%3crect%20width='116.7'%20height='70'%20x='-58.4'%20y='-35'%20rx='31.5'%20ry='31.5'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%2371c9fc;fill-rule:nonzero;opacity:1'%20transform='translate(502%20877)%20scale(3.4003)'/%3e%3crect%20width='60'%20height='20'%20x='-30'%20y='-10'%20rx='3'%20ry='3'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%2337547a;fill-rule:nonzero;opacity:1'%20transform='translate(502%20728)%20scale(3.4003)'/%3e%3ccircle%20r='75'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%2371c9fc;fill-rule:nonzero;opacity:1'%20transform='translate(502%20473)%20scale(3.4003)'/%3e%3crect%20width='129.4'%20height='82.3'%20x='-64.7'%20y='-41.1'%20rx='37'%20ry='37'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%23fff;fill-rule:nonzero;opacity:1'%20transform='translate(502%20464)%20scale(3.4003)'/%3e%3crect%20width='108'%20height='68.6'%20x='-54'%20y='-34.3'%20rx='30.9'%20ry='30.9'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%23162334;fill-rule:nonzero;opacity:1'%20transform='translate(502%20464)%20scale(3.4003)'/%3e%3ccircle%20r='19.4'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%23a478fc;fill-rule:nonzero;opacity:1'%20transform='translate(415%20464)%20scale(3.4003)'/%3e%3ccircle%20r='19.4'%20style='stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%23a478fc;fill-rule:nonzero;opacity:1'%20transform='translate(591%20464)%20scale(3.4003)'/%3e%3crect%20width='96'%20height='53.2'%20x='-48'%20y='-26.6'%20rx='23.9'%20ry='23.9'%20style='stroke:%23162334;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;is-custom-font:none;font-file-url:none;fill:%23162334;fill-rule:nonzero;opacity:1'%20transform='translate(503%20875)%20scale(3.4003)'/%3e%3cpath%20stroke-linecap='round'%20d='m68%20215%207-15M81%20222l-7-22M81%20222l7-14M101%20208H87M114%20219l-7-24M113%20219l13-22M131%20214l-5-17M148%20214h-18M69%20214H51M100%20209l7-15'%20style='stroke:%23a478fc;stroke-width:3;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:10;is-custom-font:none;font-file-url:none;fill:none;fill-rule:nonzero;opacity:1'%20transform='translate(165%20150)%20scale(3.4003)'/%3e%3c/g%3e%3c/svg%3e",
    Ol =
      "data:image/svg+xml,%3csvg%20width='140'%20height='140'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cy='60.044'%20cx='70'%20fill='%235c5c5c'%20r='29'/%3e%3cpath%20d='m16.36%20156.186-.01-30.5c-.005-16.844%2024.168-30.507%2053.991-30.516%2029.823-.009%2054.004%2013.64%2054.01%2030.484l.008%2030.5-108%20.032z'%20fill='%235c5c5c'/%3e%3c/svg%3e",
    Rl = (A, e) =>
      AA.createElement(
        "svg",
        { viewBox: "0 0 637 637", ref: e, ...A },
        AA.createElement("path", {
          d: "m478 113-13 2-4 1h4l14-2c10-2 35-2 42-1l6 3 3 1c3 0-4-3-8-5-7-1-34-1-44 1m56 6 8 6c7 5 20 17 20 19s7 12 8 12l-3-6-4-6c0-3-15-17-25-24-5-3-8-4-4-1m-198 16-9 1a512 512 0 0 1 9-1m-180 30a412 412 0 0 0-23 4 167 167 0 0 0-32 8 439 439 0 0 1 46-9 304 304 0 0 1 11-2l6-1h-8m369 8 4 3-7-6c-1 0 0 2 3 3m-439 9c-7 3-18 13-18 15l6-5c5-5 9-8 14-10l6-4-8 4m442 12-10 11-7 6 7-6c7-5 14-14 13-16l-3 5M65 205l-1 11c0 9 0 10 4 17 5 10 7 12 22 11 10 0 15 0 38-5l5-1-6 1-16 2-21 2c-13 1-16-1-21-10-3-5-4-6-4-15l1-12c1-4 1-5-1-1m335 1c3 0 3 1 3 3l-2 6c-2 5-35 39-76 80-53 51-120 117-138 137-21 24-22 25-22 27 0 3 6 9 9 9 4 0 14-8 38-27a5073 5073 0 0 1 15-16 1421 1421 0 0 0-17 15l-31 25-6 2-4-3c-3-3-3-4-2-6 3-8 79-85 160-163 57-57 79-80 79-86 0-2-3-4-7-4-2 0-2 0 1 1m165 18c-9 17-25 32-57 53l-10 8 16-11 12-8c15-10 27-22 39-39 5-7 6-8 4-8l-4 5m-221 2a199 199 0 0 0-19 10 183 183 0 0 1 27-12c0-1-1-1-8 2m-34 16c-3 3-2 3 2 0l1-2-3 2m151 3-1 2 2-2c3-3 2-3-1 0m-16 12-11 10a281 281 0 0 0 11-10m-24 18-7 5-7 5-42 31c-10 7-24 19-22 19l7-6 16-12a343 343 0 0 0 35-25 573 573 0 0 0 20-17m-187 0-2 2 4-2 3-2-5 2m-14 6-3 2 4-1 4-3-5 2m-7 3-8 4-18 8 18-7 7-3 3-1c1-2 0-2-2-1m254 24a2672 2672 0 0 1-71 54 601 601 0 0 0 39-29 1352 1352 0 0 1 32-25m-291-8-2 2 4-2 3-2-5 2m-13 5-2 2h3c5-3 4-4-1-2m-19 9-7 3-13 6c-10 5-13 7-14 10-3 4-2 5 1 0 2-3 5-5 14-9l13-6 12-6-6 2m178 36c-17 12-21 16-21 17a390 390 0 0 1 20-17m-206 34 1 4 1 3 1 5 2 8 1 5v-6l-1-8-2-5-1-4-1-2c-1-2-1-2-1 0m222 23-9 7a683 683 0 0 0-56 44 261 261 0 0 0-26 20 1345 1345 0 0 0-46 34c-6 3-7 3-19 3-11 0-12 0-18-3-8-4-10-8-17-20l-5-10 4 10c5 10 12 18 19 22 4 2 6 2 17 2 13 0 14 0 21-3l26-19 42-33a2183 2183 0 0 0 43-34 643 643 0 0 1 24-20",
          fill: "#fff",
          fillRule: "evenodd",
        }),
        AA.createElement("path", {
          d: "M478 114a620 620 0 0 1-39 6l-21 3a5481 5481 0 0 0-19 3 870 870 0 0 1-54 8l-1 1-6 1-12 2-13 2a992 992 0 0 0-76 12 400 400 0 0 1-45 8l-6 1-5 1h-3l-3 1-2 1-26 4-13 2-17 3c-23 5-33 9-43 19-7 8-9 13-9 27 0 8 1 9 4 14 5 9 8 11 21 10l21-2a1133 1133 0 0 1 23-4 659 659 0 0 0 74-14l3-1h3l3-1h3l2-1 2-1h3l2-1h2l24-5 38-7a2100 2100 0 0 1 93-18l3-1 10-1a2082 2082 0 0 1 120-17l2 1c2 0 8 5 8 7l1 2 1 6c0 4 0 6-3 10-2 4-16 16-18 16l-7 5-10 8a1070 1070 0 0 0-11 7 113 113 0 0 1-20 14l-2 2-3 2-2 2h-1a154 154 0 0 1-28 21l-5 4-5 4a573 573 0 0 1-50 37 175 175 0 0 0-24 18l-1 2-2 1-2 1-2 1-1 1-12 10a396 396 0 0 0-32 25l-8 6-6 5-9 7a326 326 0 0 1-25 20l-13 12a5073 5073 0 0 0-17 15c-24 20-34 27-39 27-2 0-8-6-8-9 0-2 1-3 22-27 18-20 85-86 138-137 41-41 74-75 76-80l2-6c0-2 0-3-2-3l-7 1a233 233 0 0 1-26 9l-1 1-1 1h-1l-1 1h-2l-3 2-1 1h-2l-3 2h-1l-5 2-22 10-9 4-4 2-5 2-10 4-2 1-2 1-2 1-13 6a334 334 0 0 1-38 17 75 75 0 0 0-14 6l-5 2-4 1-2 1-3 2-7 3-16 6a247 247 0 0 0-32 14l-1 1h-2l-1 1h-2l-1 1-12 6a103 103 0 0 0-27 15l-2 5-1 1v11l1 5 1 5 1 4c0 3 0 4 2 4v3l1 3 1 2 2 10 1 4 1 5 2 10 2 8 1 4 1 4c3 3 9 25 11 38l1 7v2l1 4v1l1 1v2l1 2 1 3v1l5 10c7 13 9 16 17 20 6 3 7 3 18 3 12 0 13 0 19-3 8-4 11-6 26-18a1345 1345 0 0 1 85-67 683 683 0 0 1 50-39l12-9a513 513 0 0 1 44-33 201 201 0 0 0 22-17 2270 2270 0 0 0 73-54 158 158 0 0 0 58-59c2 0 3-9 4-27l-1-19-1-4-1-6-1-3-4-6-4-6c0-2-6-8-13-14a77 77 0 0 0-28-18c-6-1-34-1-43 1",
        })
      ),
    Nr = f.forwardRef(Rl),
    jl = (A, e) =>
      AA.createElement(
        "svg",
        { viewBox: "0 -960 960 960", ref: e, ...A },
        AA.createElement("path", {
          d: "M765-321q0 117-84 196-83 80-200 80-118 0-200-80t-83-196v-392q0-85 61-144 61-58 146-58 86 0 147 58 61 59 61 144v374q0 54-39 92-39 37-93 37-55 0-93-37-38-38-38-92v-372h110v372q0 9 6 14t15 5q8 0 15-5t7-14v-374q0-39-29-66t-68-27q-40 0-69 27t-29 66v392q0 71 51 119t122 48q71 0 122-48t51-119v-426h111v426Z",
        })
      ),
    Ur = f.forwardRef(jl),
    Hl = (A, e) =>
      AA.createElement(
        "svg",
        { viewBox: "0 -960 960 960", ref: e, ...A },
        AA.createElement("path", {
          d: "M125-165v-113h77v-273q0-93 55-167 56-75 146-100v-19q0-32 22-55 23-23 55-23t55 23q22 23 22 55v19q90 25 146 99 56 73 56 168v273h77v113H125ZM480-32q-38 0-66-27-27-27-27-66h186q0 39-27 66t-66 27Z",
        })
      ),
    Ll = f.forwardRef(Hl),
    Fl = (A, e) =>
      AA.createElement(
        "svg",
        { viewBox: "0 -960 960 960", ref: e, ...A },
        AA.createElement("path", {
          d: "M137-190v-113h78v-253q0-41 11-79 11-39 35-71l-9 150h10L17-802l74-74L873-92l-74 74-175-172H137Zm609-149L319-769q20-15 41-25t44-16v-28q0-32 22-54t54-22q32 0 55 22t22 54v28q85 23 137 94t52 160v217ZM481-47q-38 0-65-27t-27-65h184q0 38-27 65t-65 27Z",
        })
      ),
    Nl = f.forwardRef(Fl),
    Ul = (A, e) =>
      AA.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 100 100",
          ref: e,
          ...A,
        },
        AA.createElement(
          "g",
          { strokeLinecap: "round", strokeWidth: 10 },
          AA.createElement("path", { d: "m19 19 61 61M80 19 19 80" })
        )
      ),
    zl = f.forwardRef(Ul),
    Gl = (A, e) =>
      AA.createElement(
        "svg",
        { viewBox: "0 -960 960 960", ref: e, ...A },
        AA.createElement("path", {
          d: "M94-136v-255l351-93-351-92v-253l816 346L94-136Z",
        })
      ),
    _l = f.forwardRef(Gl),
    Yl = (A, e) =>
      AA.createElement(
        "svg",
        { viewBox: "0 -960 960 960", ref: e, ...A },
        AA.createElement("path", {
          d: "M480-372q-61 0-105-43-43-43-43-105v-240q0-61 43-105 43-43 105-43 61 0 105 43 43 44 43 105v240q0 62-43 105t-105 43ZM425-76v-122q-121-16-197-108t-76-214h109q0 91 64 154t155 63q91 0 155-63t64-154h109q0 122-77 214T534-198v122H425Z",
        })
      ),
    Wl = f.forwardRef(Yl),
    Vl = (A, e) =>
      AA.createElement(
        "svg",
        { viewBox: "0 -960 960 960", ref: e, ...A },
        AA.createElement("path", {
          d: "m763-343-80-79q8-20 13-44 5-23 5-54h109q0 49-11 95t-36 82ZM625-482 336-770v-2q3-56 45-96t101-40q62 0 105 43t43 105v249l-1 17q-1 7-4 12ZM427-76v-122q-120-16-196-108-77-92-77-214h109q0 91 64 154t155 63q43 0 80-14 37-15 67-41l78 79q-35 32-78 53t-93 28v122H427Zm362 27L41-796l75-75 748 748-75 74Z",
        })
      ),
    Xl = f.forwardRef(Vl),
    Kl = (A, e) =>
      AA.createElement(
        "svg",
        { viewBox: "0 -960 960 960", ref: e, ...A },
        AA.createElement("path", {
          d: "M625-511q29 0 50-21t20-50q0-29-20-50-21-20-50-20t-50 20-20 50q0 29 20 50 21 21 50 21Zm-290 0q29 0 50-21t20-49q0-30-20-50t-50-21q-29 0-50 20-20 21-20 50 0 30 20 50 21 21 50 21Zm145 268q75 0 137-43t85-115H258q24 72 85 115 62 43 137 43Zm0 198q-90 0-170-34-79-34-138-93T79-310q-34-80-34-170t34-170q34-79 93-138t138-93q80-34 170-34t170 34q79 34 138 93t93 138q34 80 34 170t-34 170q-34 79-93 138T650-79q-80 34-170 34Zm0-435Zm0 322q134 0 228-94t94-228q0-134-94-228t-228-94q-134 0-228 94t-94 228q0 134 94 228t228 94Z",
        })
      ),
    zr = f.forwardRef(Kl),
    Jl = (A, e) =>
      AA.createElement(
        "svg",
        { viewBox: "0 -960 960 960", ref: e, ...A },
        AA.createElement("path", {
          d: "M553-64v-108q107-27 173-113 67-87 67-197 0-109-67-195T553-789v-108q152 26 249 144 97 117 97 271 0 155-97 273T553-64ZM61-335v-290h176l236-237v764L237-335H61Zm492 28v-346q51 23 82 70t31 103-31 103q-31 47-82 70Z",
        })
      ),
    Zl = f.forwardRef(Jl),
    ql = (A, e) =>
      AA.createElement(
        "svg",
        { viewBox: "0 -960 960 960", ref: e, ...A },
        AA.createElement("path", {
          d: "M807-15 700-123q-33 21-71 37-38 15-80 22v-108q20-4 38-12l35-17-153-154v257L234-335H57v-290h144L10-818l74-75L882-90l-75 75Zm37-264-80-79q13-30 19-60 7-31 7-64 0-109-68-195-67-86-173-112v-108q152 26 249 144 98 117 98 271 0 55-14 107-13 51-38 96ZM661-462 549-575v-78q51 23 83 70 31 47 31 103l-1 9-1 9ZM469-655 366-759l103-103v207Z",
        })
      ),
    $l = f.forwardRef(ql),
    Aa =
      "data:audio/wav;base64,UklGRmaIAABXQVZFZm10IBAAAAABAAIAQB8AAAB9AAAEABAATElTVBoAAABJTkZPSVNGVA4AAABMYXZmNjAuMTYuMTAwAGRhdGEgiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAA//////7/////////AAABAAAAAgABAAEAAQAAAAIAAQABAP//AAD+////AAD+//7////+////AAD//wAA/v8AAAAA/v8AAP//AAAAAAAAAgD////////+////AAABAAEAAgD/////AQABAAAA//8CAP//AAAAAAAA/v8AAAAA//8AAAEA//8EAAAAAAAAAAAA//8BAP//AQABAAEA/////wEA/v///wAAAAACAAAAAAABAAAA//8AAP//AAACAP//////////AAAAAAEAAAAAAAEA//8AAAEAAQADAAIAAgAAAAAA/v///wEAAAAAAAEAAAAAAAEA//8AAAEAAQD//wAA//8AAAEAAAABAAEAAAABAP//AAD//wAAAgAAAP//AQD/////AAAAAP7/AgAAAAIAAAAAAAAAAAABAAAAAQABAP//AAABAP///v8AAP////8AAP//AAD//wAA//8BAP//AAD///7///8BAP7///8AAAIAAgABAAEA/v8AAP//AQADAAEAAAACAAEA/////////v///wEA/v////7/AAD+////AAAAAAAAAgAAAAAAAAD//wEAAAAAAAAAAQABAAIA/v8AAAAA//8AAAEAAAAAAP//AgD//wEA/////wAAAQACAAAAAAAAAP//AQD/////AQAAAAEA/v8AAAEAAQABAAEA///+////AQD//wEAAgD+//7/AAAAAAAAAQAAAAAAAQAAAAAAAAAAAP//AAD//wEAAQD//wAAAQABAP7///8AAP7/AAABAP7/AQABAAEAAAABAAEAAAD+/wIAAAABAAAAAQD/////AQACAP////8AAP//AQD//wEA/v8CAAEAAAAAAAAAAQAAAAIAAQAAAAEAAgD//wEAAAAAAP7///8BAP//AgAAAP///v8CAAAAAgD///////////7/AAACAAEAAgD//wAAAAABAP//AwAAAAMA//8AAAAAAQD+/wAAAAD//wAAAQD//wEA//8BAP7/AAABAAAA//8BAAAA//8AAP//AQADAP3////+////AgD+/////v8BAAEAAQACAAAAAAAAAAAA//8AAP//AAD+/wEA/v8AAP7/AAD//wAAAQACAAAAAQAAAP//AQAAAAAAAAABAAAAAAD+//////8AAAAAAAD//wAAAAABAAEA//8AAAEA//8AAP//AgD+/wAA///+/wAA/v///wAAAQABAAAAAQD//wAA//8AAAEA//8BAAAAAgABAP//AAACAAIAAQABAP//AAAAAAAA//8BAAIAAAABAAAA//8CAAEA/v//////AAAAAAEA////////AQAAAP//AAD//wAAAAAAAP3/AAAAAAEAAAACAAAAAAAAAP//AAD//wAAAAAAAAAAAAAAAP///v///wAAAAABAAAAAAD//wEAAAABAAEAAQD//wAAAAACAAAAAQD+/wAA//8BAAEAAAD+/wAA/////wAAAAABAAAAAAD//////v8AAAAA//8AAAAAAAAAAAIAAAABAAEAAAABAP7/AAD9//////////7///8BAP//AAD///3/AQABAP//AAD//wAAAAABAAAA//8AAP//AAD/////AQABAAEA//8AAAAA//8BAAMA//8AAAAA//8AAP7/AAD//wAAAAAAAP7/AQAAAAAA/v8CAP//AAABAAIAAQABAAAA//8BAAEAAQD///7/AQD//wAAAQABAP//AAD//wEAAAAAAAAAAQAAAAIA//8AAP////8AAP//AQD//////v///wEA/v8AAAIAAgACAAEAAAAAAAEAAAAAAAAAAAAAAAAAAQD//wAA/////wAAAQACAP////8AAAAAAAD//wAAAQD+/wEA//8AAAEAAwD//wEAAQAAAAAAAAABAP////8AAAAAAQAAAAAAAAAAAAEAAQAAAP////////7/AQABAAEAAQD///////8BAAAA//8AAAAAAgABAAEA/v8BAP7///8BAP3/AQABAAIAAAD//wEAAAAAAP//AAABAAIA//8CAAAAAQAAAAEA//8BAAAA/////wAAAAD//wEAAQD//wAAAAAAAP//AAAAAAAAAQABAAAAAQAAAP//AQD//////v8AAAEAAAAAAAAA//8AAAAAAAACAAEAAQAAAP//AAABAAEA/////wAAAgABAAAAAAAAAAEAAAABAP//AQABAP7////+/wEAAAAAAP//AAABAAAAAAABAAEAAAAAAAAA//8BAP///f/+/wEAAQD///7///8AAAAAAQAAAP////8AAAAAAAABAAAAAQD/////AAD//wEA//8AAAIA//8CAAAA//8AAAAAAAD+/wEAAAD+/wAA/////wAA////////AAAAAAAA//8BAAAAAAD//wAAAAD//wEA//8AAP//AQD+/wAAAAAAAP7/AAD+/wEAAQABAP//AAABAAEAAQD//wAA/////wEA//8AAAAAAgAAAAAA//8BAAAAAgAAAAAAAAAAAP7/AQD//wAAAAD+/wAAAAADAAIA/////wAAAQD//wIA//8BAAEA/v8AAAIAAAAAAP3///8AAAAAAAAAAAAAAAABAP///////wAA//8AAAEAAQABAAEAAQABAAAAAQAAAAAAAQABAP7/AQD//wAAAQABAAEA//8BAAAAAgAAAAEAAAABAP//AAD/////AAD//wIA/////wIAAAD///7/AAAAAAAAAAACAP//AAABAP////8AAAAAAAABAAAAAgAAAAAAAQD+/wEA/////wAA/////wAAAAAAAAAA/v//////AAAAAP//AAABAAAAAQAAAAIAAAACAAAA//8AAAAA//8AAP7/AAAAAP//AAACAP//AQABAP//AQABAAAA/////////v8AAP//AQAAAAAA///+/wAAAQD+/wEAAQAAAAEA/////wAAAQD//wAA//8AAAAA/v8BAAEA//8AAP7//v8BAAAAAAAAAAEA//8AAAEA/////wAAAAD//////////wEAAAABAAEA//8CAAEA/f8AAAAA//8BAAAABAABAAEAAQAAAAAAAAAAAP7///8AAAAA/v8BAAAA//8AAAIA//8AAP////8BAP//AAAAAAAAAAD/////AQD///7/////////AQD8////AgABAAIA////////AAD//wAAAAABAAAAAAAAAAEAAgAAAP//AQD//wAAAAAAAP/////+/wAAAAABAAAAAwABAP///////wEAAAADAP//AQACAAAA//8CAAEAAAAAAP///////wIAAAAAAAAAAQAAAAAAAgD//wEAAAABAAAA/v8AAAAAAAAAAAAAAAAAAAEA/v8AAP//AQD//wAA//////7///8AAAAAAAAAAP7/AQD//wAA//8AAAEAAAABAAEAAQD/////AAD//wEAAAD/////AQAAAAEAAAD//wEAAAD/////AgD//wAAAQD//////////wAAAAD//wAAAAABAAAAAAD//wAAAQD///7/AQD//wEAAAD/////AAD//wEA//8AAAEA//8CAAAAAQD//wEAAgAAAAEAAwAAAAAA/v8BAAEAAgD//wEAAAAAAAAAAAD//wEA//8AAAAAAQACAP///////wAAAQABAAEAAAAAAAEAAQD+/wEA/f////////8AAAAA//8AAAEA//8BAAAA/v///wEAAAAAAAEA/////wAAAAAAAP//AAAAAAIAAAABAAAA/////wAAAAD//wAA/v8AAAMAAQD+/wEAAAABAAEA//8BAP//AgAAAAAAAAD//wAA/////wEA/v8CAP3/AAACAP3/AQABAAAAAQACAAEA/v8AAAAA//8BAAAAAgAAAAAAAgACAAEA/v/9/wAAAQABAP7///8AAP//AgD+/////v8CAP////8BAP//AQACAAEAAQABAP//AAD///7/AAABAAEAAgD//wEA//8CAAEAAQABAAEAAAABAAAA/v8AAAEA/v8AAP//AAABAP//AQAAAAEAAgAAAAAA/v///wEAAQAAAAIAAAD/////AgAAAAEA/v8AAP7/AQAAAAAAAQAAAAEAAAACAAEA//8BAP////8AAAIAAAAAAP//AAAAAAIAAAAAAAAAAwABAP///v8BAAAAAAAAAP3/AAABAAEA/v////////////3//v8AAAAAAQABAAIAAAD+/////v8AAAAAAQABAAEAAQAAAP//AAAAAP//AQAAAP//AAABAAAAAAAAAAAA////////AAAAAP//AQD/////AAABAAEA//8CAP7///8AAP7//v8BAAEAAAD+/////////wEAAAAAAAAAAgD//wAAAQAAAP7/AQABAP//AQAAAAAAAAD/////AAACAP////8BAAAAAAD//wAA//8AAAEAAQABAAAAAAABAAAAAQD+/wEA/v8AAAEAAQD/////AAD//wAAAQABAP7//v//////AAACAAAAAAAAAAAAAAACAAAAAQAAAAAA//8BAP//AQD//wAA///+/wIAAQD//wAAAAD//wAA/v8AAP3///8AAAAAAAAAAAAA/f8AAAAA//8CAP7/AAD///7/AAAAAAAAAAD//wEAAAAAAAEAAAAAAAAA//8BAP////8BAP7///8CAAEA//8BAP3///////////8BAAAAAAAAAAEAAgD+//////8BAAMAAQADAAEAAAACAAAAAQD/////AAABAAMAAQAAAP//AQD//wAA//8AAAAA//8CAP7//////wAAAAAAAAIA/v8AAP//AAACAP//AwD//wAA//8AAP//AwD//wEAAQABAAEAAQACAAEAAAD//wAA//8AAAIAAAAAAP///////wAAAQD//wIA//8BAP7/AAD///////8AAAAAAAAAAAEAAAD//wAAAQD//wEA//8BAAAAAAD/////AgABAAIAAAABAAAAAAAAAP//AAAAAAAA//8AAAAAAAD/////AQAAAAAAAQD//wAA///+////AAAAAAEAAgABAAEAAAAAAP//AQAAAAAAAQD+/wAAAAABAAEAAAD/////AQABAP7///8AAAIAAAACAAAA//8AAP//AgACAAAA///+/wAAAAABAAAAAQAAAAEA/v8BAAEA//8CAP//AQD+/////v8AAAAAAAACAP//AAD+/wIA/v8BAAAAAAD/////AAAAAP7///8AAP7//////wEAAAABAAAAAAD//wAAAAAAAAAAAgACAAAAAAABAAAA/f8AAP7/AgAAAAEA//8BAAAAAAD///7/AQD//wAAAAAAAAEAAAAAAAEAAAAAAAAAAQAAAAAA//8AAAAAAAABAP///////wAAAgABAAEA//8AAP//AAACAP//AQABAAEA//8BAAAAAAABAAAA//8AAAEAAAAAAAIA/v8BAP//AQD//wEAAAABAAEAAQACAAEAAAAAAAEAAAABAAAAAAD/////AAABAAEA//8AAAAAAQABAP//AAAAAP//AAD/////AQD//wAAAAABAAEA//8BAAAA//8AAP///f/+/wAA/////wAAAQAAAAIAAAAAAAAAAAD+/wEA/f8CAAAA//8AAAEAAgAAAAMAAAABAAAAAAAAAP//AQAAAAAAAQABAAAAAQAAAP//AAAAAAAA//8AAAAAAAABAAAAAQAAAAAAAAABAAIAAAAAAP7/AQD//wAAAAD+////AAAAAAAAAAABAAAA/////wAA//8AAAAAAAD/////AgD//wAA//8CAP//AQACAAEA/f////////8BAAIAAQABAP//AAD//wAA///+////AAD+/wAAAQD/////AAAAAAAA/////wAAAAABAAAAAQAAAAAA//8AAAIAAAABAP//AQABAAEA//8AAAAAAAADAAEAAAABAP//AgD//wMA//8AAAAAAAD//wAAAAD9/wEA///+/wAA//8BAAEA//8BAAAA//8AAP///v8BAP///////////v8BAAAAAQABAAAAAAAAAAAA//8AAP7/AQAAAAAAAAAAAP7/AQAAAAAAAgABAAEAAAABAAEAAAAAAAAAAAD+/wAAAAD//wEAAAAAAAAAAAAAAP//AgABAAAAAAABAAEAAAD/////AAAAAP//AAABAP////8BAAAAAQABAP7//v/+////AQAAAAAAAQAAAAEAAgAAAAAAAQAAAAEAAAD+/////v8BAP//AAABAP//AQABAAAAAAD//wAA//8CAP//AAAAAAEAAAABAAAAAAAAAP//AAD+////AwAAAAAAAQD//wEAAAACAAEAAAADAAAAAAD/////AAAAAAEAAAABAAAA//8AAAEA//8BAP///v8AAP//AAD//wAAAQABAP//AQAAAAAA/////wEAAQAAAP////8AAAEA//8BAAAAAQAAAP////8AAAAAAQAAAAIAAQAAAAEAAAAAAAEAAAD//wEAAAAAAP////8AAAAA//8BAAEAAAAAAAIA///+/wIA/v8BAAAAAQACAAAAAQAAAP7///8AAP//AAAAAAEAAAAAAP7/AAD+////AAAAAAAAAAD//wAA/v8BAAMAAAABAAIAAgD//wAA//8BAAEA//8BAP7/AAAAAP7///8BAAAAAQAAAP7/AQD/////AAAAAAEAAAABAP//AQABAAAAAgABAAAAAAAAAP///////wEA//8AAAEA//8AAAAAAQAAAAIAAAABAP7//////wAAAQABAAAAAAABAAEA///+/wAA//8BAP///v8AAP///v8BAAAA//8CAAAAAQAAAAEAAQABAAAAAAD+/wAAAAD+/wAAAAAAAAAA/f////////8AAAAAAQABAP///////wEA//8BAAEAAAAAAAAA/////wEA/v//////AAAAAP//AAABAAAAAAD+/wAAAAD9////AQAAAAEAAwD//wEAAQAAAP//AgAAAAAAAAD+/wIAAAAAAAAAAAAAAAIA//8AAAEAAQACAAAAAQD//wAAAAD//wIAAQABAAAAAAD//wEA//8BAAEAAQAAAAAAAQABAP7/AAD//wEAAAACAP7/AQAAAAAAAAD//wIAAQACAAIAAQAAAAAAAAAAAP3///8BAAAAAQACAP//AgD9/wAAAAD//wEA/v////////8AAAAAAAD//wEAAQD//wMAAQAAAAEA//8AAAEA//8AAAAAAAACAAAAAAD//wAAAQD///////8AAAAA//8BAAIA/v8BAAEA/f8AAAAAAAAAAAAAAgD/////AAD+/wAAAAD//wAAAAAAAP//////////AgABAP///v8AAAIAAQAAAP//AAABAAAA/////wAAAAAAAAEAAAABAP///v///wIA//8BAAEAAQAAAAAA///+/wEAAAAAAAAA/////////v8BAP3/AAAAAAAAAAAAAAAA//8AAP//AAAAAP//AAABAAIAAAACAP////8DAAAAAAABAAAAAwABAP//AAABAP//AAAAAP////8BAAAAAgD//wAA///+/wAAAQD//wAA//8AAP7///8AAAAA/v8AAAAAAQD//wEA/v////////8AAAAAAQAAAP//AQACAAAAAAAAAP//AAD//wAAAAD//wAAAAD+/wAAAAAAAP//AQD//wAAAgAAAAAAAQABAAAAAwD+/wAAAAD///7/AQD//wIAAQAAAP//AAD//wAA//8CAAEAAAAAAAAA/////wAAAAD//wEAAQD///////8BAAAA//8BAAEAAAAAAAAA/v///wEAAAAAAAAAAAADAAAAAAAAAAAAAQABAAEAAAD+//7//v8AAP//AQAAAAAAAAABAAEAAgAAAAAAAQD//wAA/f8AAAAAAAABAAAAAQAAAAAAAAAAAAIA//8BAP///////wIA/////wAAAAABAAEA//8BAAAAAAD//wAAAQD//wEAAAAAAAIA/v8BAP//AAAAAAEAAAABAP//AAAAAAAAAQABAP7/AAABAAAAAQD//wIAAAAAAAEA///+/wAA//8AAP//AAAAAAAAAAABAP///////wIAAQAAAAEAAQAAAP7/AQAAAAAAAQAAAAAAAQD/////AQAAAAAA///+//7/AAD+/wEA//8AAAAA///+/wEAAAABAAIAAQABAAAA//8AAP//AAD//wAAAAD//wAAAAAAAP//AQAAAAAA////////AQAAAAAAAQD+////AQABAP7/AAD///7/AgD//wAAAAAAAP//AAAAAAEA//8BAAEAAgAAAAIAAAD//wEA/////wAAAQD///7/AQD//wEAAQD/////AAAAAAEAAgAAAAAAAQD//wEA//8AAP7//////wAA//8BAAEA//8BAAAAAQD/////AAABAP//AAACAP//AQAAAP//AAABAP////8AAAAAAAABAAEAAwABAAAAAgD//wAAAAD//wEAAAABAAAAAAABAAEA/////wAA//8AAAIAAAAAAAEAAQABAAEAAQABAP//AgAAAAAA//8BAP3//v///wAA//8AAAAAAQAAAP//AQD//wEAAAACAAIAAAABAAAA//8BAAEA//8BAP//AAAAAP//AQAAAAIAAAD//wAAAAAAAAEA////////AQAAAP//AQD//wAAAQD+/wEAAAABAP///v///wAAAAAAAP//AAAAAAIAAQD//wAAAgD+/wAAAAD//wAAAAABAP///P//////AAACAP////8AAAIAAAABAAAAAAAAAAAA//8AAAAAAQADAP//AQAAAAAAAAABAAEAAQAAAAAA/v8AAAAAAAD//wAAAQD//wAAAAD//wAA/v////////8CAAEA/v8BAP7/AAAAAAAA//8AAAEAAAD//wIAAQAAAAIAAQAAAAAAAAD///7/AQABAP//AAAAAP//AAACAAEA//8BAAAAAwAAAAAAAAD//wEAAAD//wAA///////////+/wAAAQABAAIAAAABAAEAAAD//wEAAAD/////AAD+/wIAAwABAAEA/v8BAAEAAAD//wAA//8AAP//AAAAAAEAAAAAAP//AAAAAAEAAQABAAEA/v///wAAAAD//wEAAAACAAAA/f/+/wAA/v///wAA//8AAAEAAQD///7/AAAAAAAAAAABAAAAAAACAAAAAAABAAAAAAABAP//AQD//wAA//8BAP7/AgABAAEAAQAAAAAAAQD//wEA/v8AAP////8AAP///////wIAAQD//wAAAAD//wAA/v///wAAAQD//wIA/////wEAAAAAAAIAAAABAAAAAAD//wEA//8AAAAA/////wAAAQAAAAAAAAD//wEAAQAAAAAAAAACAP///////wAAAgD//wAA/v8AAAIAAAAAAAEAAAABAP//AQABAAEAAQAAAP///v8BAAEAAAAAAP////8AAAAAAQD//wIAAQAAAAEAAAAAAAAA//8BAP//AAAAAP7//v///wEAAAAAAAIAAAAAAP//AAD//wEA//8BAAAAAAABAAEAAAABAP7///8AAAIAAAABAP//AAD//wEAAAAAAP//AAAAAAEAAAAAAAAAAAAAAP7/AQD//wAAAQD+/wEA/v8BAP7/AAABAAEAAAACAAIAAAADAAAA//8AAAEAAAABAP//AQD//wIA/////wEA//8AAAEA//8AAAEAAAAAAAAAAQABAAAAAAAAAAAAAAD//////////wAA//8AAP7/AAD+/wAAAQAAAAAA/////wAABAAAAAAA//8AAAEAAAAAAAAA/v8AAP//AAAAAAAAAAD//wAAAAD///////8BAAEAAAD/////AgABAAEA/v/+/wAAAQACAAEAAAD//wAAAwABAP//AgD+/wAA/v8AAAAAAAAAAAEA//8AAAEAAAD+/wEAAAAAAAEAAgAAAAEAAAABAP//AQD+/wIA/////wAAAQD//wAAAQD+/wAAAQABAAAA////////AAACAAAAAQAAAAIA//8BAP///v///wEA//8BAAEAAQD+/wAAAQD9/wAAAQAAAAEAAAABAAAAAgAAAP//AAD+/wAA/f8AAAAA////////AgAAAAcAAQD7/wEA/f8AAAIA//8GAP7//v/+//b/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+P/F//z/rv/i/7r/6v/Z/wYABwAoADAAKQBOABkATAD0/zQA1P8PANv/0//v/6//FwCi/ywAxP8oAPn//v82APT/WwD4/00A+/8yAPv//f/8/83/+v+w/+T/sf/j/9b/AQACACoAIgAtAEIAHwBPAAEAQADe/xcA0v/k/+X/t/8IAKv/IgC//yEA6/8EACMA9/9PAPf/VAD+/zcA+/8JAPn/1P8AALf/6f+w/+P/zf////j/HAAdAC0APgAfAEsABwBCAOP/IADV/+//2v/B//3/rP8PALv/GADd/xEAFgABAEMABABaAP//QgACABcA+//n/wAAwP/w/67/4v+///3/6f8WABcAKQA0ACIARgAQAEcA8f8pANn/9f/U/87/7f+v/wgAtP8RANP/FgANAAIAOQACAFQA/f9HAAAAIAABAO3//P/E/wEAs//q/7n/9P/i/wYAEQAZADEAJABBABMASAAAADEA3/8CANL/1v/g/7H/AACy/w8Axf8ZAPv/CQAzAAIAVQD//1AAAAAsAAIA9v/7/8r/AwC2//P/tf/m/+H/AwADABEAKQApADoAHgBHAAgAPADr/wkA1//f/93/vP/6/7L/CgDA/x4A7/8hACkAAgBPAPz/UgD1/zIABAAEAPz/0v/5/7f/AACy//H/2f/+/wEAAAAkABUAMwAdADoAEQA9APD/EADU//L/1P/H/+z/tf8LALv/HADk/ygAGgADAEMA//9TAPn/QAAAABAAAQDc//z/wf8DALD/7P/Q//z/9/8HABoAFgA3ACMAMAAOADwA+P8ZANv/+P/Y/9H/5v+8/wUAu/8WANf/HgAMAAoAPQABAFMA/f9HAP7/HwAEAN//+v/H/wMAs//2/8r/8//y/wMADgAQAC4AIwAyABMAJwD8/xcA3v8LANP/5v/f/8j/AgC4/w4A1P8eAAQACgAxAAEAUgD+/0gA/v8nAAIA8f/5/8r/BAC6/+3/wP/l/+b/AQAIABkAIwArAC4AIAAoAAkAGADj/w0A0f/r/9//0P8DAL3/CgDN/xkA//8IACUAAgBJAAAATwD+/ysAAQD7//3/z/8DAMT/+f/K/+L/5P/1////EgAcACYALgApAC4ACwAcAPL/EADZ//L/1f/U//f/uv8KAMX/DwDu/wcAHwADAEUABgBNAAEANQAAAAYAAQDf////xf/+/9P/4f/b//X/9v8LAA4AGAAlACoAMAAQABkA9v8TAOL/+f/W/9r/8f/I/wcAxP8MAOr/BwATAAQAOAAGAEcAAABCAAEADwAEAOP//v/F/wIAzf/o/93/8P/s/w4ACwAZACEAKgAyABMAIQD5/xgA6v8DANb/4P/y/9H/AQDJ/wkA4/8DAAoA/f8wAAQAQwABAEAA//8VAAIA7P/+/8r/BADP/+v/2v/s/+n/CwAIAA0AHAAjADQAHAAkAP//GQDy/wQA5v/i//b/0P/7/8f/AADh/wMAAAD+/yUAAAA7AAEAOAAAABwAAAD6/wAA1/8CAMr/AADb/+3/5f8BAAIACAAVABcALwAfACgA+/8XAPn/DgDe/+//7v/Q/wMAz/8JAOP/CwDx////EAAHADEAAQArAAIAHQAEAAcAAADr/wEAzv8CANj//f/k/wEA+f/+/xQABwAqAB4ALAD+/x4A8P8SAOb/8//f/9j//f/N/wEA3v8LAO7/AgAMAAQALAAEAC0AAQAdAAQADwABAPP/BADV/wMA0/8AAOH/AQD1/wAAEAADACQAGwAwAAQAHwD0/xUA8f/4/+L/2//7/8z/AwDc/woA6f8AAAQAAwAoAAcANAAAACcAAgAUAAEA+P8CANv/AgDR/wEA4v8BAOz/AgAIAPv/JAAVADMAFAAhAPP/GQDz//7/3P/l/+3/z/8BANf/CgDn/wkA/P///xoABwAwAAIAJwACABcAAwABAAIA4f8BAND/AgDd//3/6P8CAAYA/f8YAAwALwAZACUA9v8bAPj/AwDq/+r/7P/S//7/1/8EAOX/CQD6//7/GQAFAC8AAQApAAEAGQACAAMAAgDm/wEAzv8BANv//v/p/wIA//8BABMABQArACAALAABAB4A8f8NAOv/7v/m/9n/+P/R/wMA4f8OAPT/AQATAAMAKwAHACoAAwAbAAMABQADAO7/AQDU/wEA2f8AAOL////3////EgAAACUAGgAvAAUAHQD2/xIA9f/0//T/3P/4/8///f/h/wIA7f8AAAoAAQApAAQALQADACAAAgAPAP//9P///9r//f/T/wAA3f/9//D/AQAQAP//HAAHAC8ACQAfAPv/GAD+//f/+P/j/wEA0v/+/9n/AADq/wIABgD//x0AAQAuAAEAIwAAABQAAwD8/wEA3/8AAM//AADe////7f8BAAwA//8ZAAMALwAAACEA//8dAP3//v/9/+n////U//z/1v8BAOT/AAD+/wAAGwD+/ywA/v8kAAIAGAD///3////q/wEA0P///97/AADk/wAABAAAABUAAQAqAAEAKQAAABwAAAAFAP//6f8AANr////X/wAA4/8AAPj/AgAUAAAAKgD//ywAAAAcAP7/AQAAAOv/AADU/wAA2v8CAOP/AAABAAAAFgABABsAAAAqAAEAHwAAABQAAgDv/wEA3v///9H////f////7/8BAAoAAQApAAAALgD//yEAAQAIAAAA8P8BANr//v/V////4f8AAPf//v8UAAAAFAAAACYAAQAhAP7/GwD+//T/AADo/wIA1v8CANr/AgDp/wEABgAAAB8AAQAsAAEAJAAAAAwA///z/wEA3/8AANT/AADh/wEA9P///xQAAgASAAAAJQAAACEAAAAaAP//+v8BAOj////W////2P8BAOf///8DAAAAHwAAAC4AAAAlAAAAEgAAAPL/AQDm////0f8CAN3/AADr//7/EQD//xAAAQAhAAIAJQAAAB8AAAABAP//6v8CAN//AQDX/wAA4/8AAPr/AAAXAAAAKgABACgAAAAbAP///f8AAOj/AADU/wAA2v///+f/AQANAAMAEQD+/xwA/v8kAP7/IQABAAgA/v/p////5/8AANf/AQDd/wEA8v8BABMAAQAjAAAALgAAACAAAQADAAEA7f8BANn/AgDY//7/4P/+/wEAAAAXAAIAFAAFACUA/P8jAP//EgAAAO//AQDo////1/8AAN3/AADx//7/DgAAAB0AAQAoAAAAIwAAAAoAAQDv/wMA4f8AANn/AQDi/wEA+v///xgAAAAQAP3/IwD//yUA/v8XAAAA7/8AAOv/AADc/wAA3P/+/+v/AQALAAEAGgACACkAAAAkAP7/EAABAO/////q//7/1/8AANz/AgDw/wEAEgD//w8AAAAcAAIAJQAAAB0AAAD2////7P8AAOP/AgDa/wAA5P8BAAQAAQAWAAAAIgAAACMAAAAaAP//+P///+v/AQDZ/wAA2////+7/AAARAAAADgAAABYAAAAhAAAAIAABAPz/AQDt/wAA5P8AANr/AQDg/wEA/P8BABcAAAAhAP//KQD//xwAAAD8/wEA7v8AAN3////Z/wAA6f8BAA0AAAARAAEAEQAAACMAAAAgAAEA/f8CAO3/AADv/wAA3v8BANv////1////EgAAABkA//8nAAAAIgAAAAMAAADu/wAA6P8CANn/AQDg////BQD//xMAAQAOAP//IAABACYAAAAGAAAA6f////H/AADg/wEA2f8AAO3///8PAAAAFQACACQAAAAkAAEADQABAO//AADp/wAA2////9z/AQD7/wEAFgAAAAwAAQAXAP7/JQD9/xMAAADx/wAA8f8AAOr/AADc/wEA4/8BAAkAAAAVAAAAIQD//yYA//8UAAEA9P8BAOz/AADf/wAA3P8AAPP/AAAQAAAADQABAA0AAAAlAAEAGAD///H//v/0/wEA7v8CAN//AADg//3/BAACABUAAQAfAAAAJwABABgAAQD0//7/7f///+L/AADa/wIA8P///w4A//8SAAMACQAAACAAAQAgAP//+v////P////y/wEA4/8BANr/AQD9/wAAEwD//xkAAQAjAAAAIgABAPz////s/wAA6v8BANX/AQDr//7/BwABABMAAAAHAP//FwAAACYAAAD//wEA9P8BAPb/AQDu////2v8BAPn/AAATAP//FwD//yEAAAAjAAAAAgAAAOn/AQDr//7/2P8CAOT/AAABAP//FgABAAUAAQATAP//IwAAAAEAAgDy/wEA9/8AAPb/AADb/wAA6/8BABAAAAATAP7/IQAAACYA//8UAP//7/8AAPD/AADd/wEA3P/+//7///8OAAAACgAAAAgAAAAhAP//CQACAPT/AQD2/wAA9v///97////m/wIADgABABMAAQAfAP//JwAAABMAAADw/wAA8P///+r/AQDb/wAA9f8AAA8AAAARAAIABAD//wYA/v8HAAAAAQD//wMAAgAGAAAA7f8AAOz/AAALAP//DwACABQA//8bAAAAHgD///f/AADq/wEA6/8BANj//v/t/wAACAD+/xAAAgAEAAAABAABAAcAAQADAAAA//8AAAUA///1/wAA5f///wIAAAAOAAAAEAAAABsAAAAhAAAA/v8BAOj////y////3f8AAOf/AQAGAAEADAAAAAcA//8BAP//CQABAAMA//8BAP//BQAAAAAAAADo/wAA+/8AAAoAAAALAAAAFAAAACAAAQAGAAIA7f8BAPH/AADm/wMA3P8CAP7/AgASAP//CgD//wAAAAAIAP//BQD//wEAAAACAP7/BAAAAPz/AwD8////BAAAAAEA//8HAAAAHQAAAAgA/v/x//7/8f///+f/AQDg/////P///woAAAAMAP//AAABAAYA//8EAAAAAgAAAAUAAAACAAAAAwAAAAIAAAABAAAAAQABAAAAAgAcAP//DgD///T/AQDx/wAA9P8CAOH/AAD3/wAACQAAAAoAAQABAP//AwAAAAcAAAD+/wAAAgACAAEAAAD+////AwD+/wAAAAABAP//+v8BABEAAQATAAAA9f/+//L//f/z/wIA6f8AAPb/AQAFAP//DAAAAAAAAAAFAP//BQD//wEA//8DAAEAAQAAAP7///8AAAAA//8BAAIAAAD+/wAAEAABABYAAgD6/wEA8v8BAPX/AwDp/wAA8////wMA//8JAAEABAABAAEA//8FAAEA//8AAAMAAQACAP//AQAAAAEAAgAFAP//AQABAAAAAQAAAP//EQABAAAAAAD5/wEA+P8AAPr////6/wAA+/8BAAIA//8BAAAA//8CAAUA//8BAP7/AAABAAEAAgAAAAAAAwAAAAEA/v8DAAIAAAACAAQA//8TAAAA/P8BAPr////3//////8AAPz/AQD7/wEAAgD/////AAABAAEABAAAAP//////////AAAAAAAAAAADAAAAAwAAAAAA//8EAP///v/+/xAA//8HAAAA+/////j/AQD8////AAD///n///8AAAAA//8AAP////8DAP//AgAAAAAAAAACAAIAAAD+/wAAAQD//wAA/////wIAAgD9////CQACAAYA///9////+f8BAPr/AQAAAAIA/v///wAA//8AAAAAAAAAAAEAAAABAAAAAgAAAAEAAAAAAAEAAQABAAAAAgABAP//AAD//wEAAAD///////8BAAIAAQAAAAAA/v/+//////8BAAAAAQABAP//AAD///////8BAAAAAQABAP////8CAAEAAQD//wEA/v//////AQAAAAAAAAAAAAAAAAD9/wMA/////wAAAQD+/wEA/v/+//7/AQD//wMAAAAAAAAAAAABAAEA//////7/AAACAP3/AAD//wAAAQAAAP//AQD//wAAAAAAAAEA//8CAP//AAAAAAAA/v8AAAAA//8BAP//AAABAP//AAAAAP//AQD//wAAAQABAAAAAAABAAEA/v///wAAAAD//////////wAAAAAAAP//AAD////////8/wIAAAADAAEA/////wEA/v8BAP7/AgAAAAEAAgAAAP//AgD/////AQD//wEA//////7/AQD//wMAAAAAAAAA//8CAP//AQAAAP//AAACAAAAAAABAP//AQD+/wAA/////wAA/f///wAAAAAAAP7/AAAAAAAAAgD//wEAAQACAP//AAAAAAEAAQD//wAAAAAAAAAA//8BAAMA/v8AAP7/AQAAAAAAAQAAAAAA///+//7/AAAAAAAA//8BAP7/AQAAAP//AQABAAAAAQAAAP//AAD//wIA/v///wAAAQABAP//AAD//wEA//8BAP//AgAAAP///////wAAAQABAP//AwABAAAAAAAAAAAA/////wIAAwACAAAA/v8BAAAAAAAAAAAA//8AAP////8AAAAA/////wAA/////wEA/v8CAAEAAQD//wAAAAABAAAAAAD//wEAAQABAAAA//8CAAAAAAAAAP7/AAABAAAAAQABAAAAAgABAAAAAQD//wEAAwD+/wAA/v8AAAEAAAAAAAAAAAAAAAEAAAD//wMA/v///wAAAAACAAEAAAAAAP7///8DAAEAAQD//wEA/f8BAAEAAQD//wEAAQABAAMAAgAAAAEA//8AAP//BAAAAAIA/v//////AQABAAAAAAD//wEAAAACAAIAAQAAAAAAAgAAAAAAAAABAAIAAAABAAIAAQAAAP////8AAAAAAAD//wAAAQACAP//AAAAAAAAAQAAAAEA//8AAAAAAAD/////AQD//wAAAQD9////AQAAAAAA//8BAAAA///+/////v8BAAAAAQAAAAAAAAAAAAIA//8BAAAAAAACAP//AQD//wAAAAD/////AAD9/wAAAAACAAAAAgAAAAEAAQABAAEAAAAAAAEA//8AAAEAAQACAAAAAQAAAAEA//8BAAIAAAACAP//AAABAAAAAAAAAAAAAAD//wAAAQD/////AAAAAP////8AAAEAAAAAAP7///8BAAIAAQD//wEAAQAAAP//AgAAAAAAAAD//wAA//8CAP7/AQAAAP7/AAD+////AAAAAAAAAQABAAAA//8AAAEAAAABAP7/AAAAAP7/AAD+/wAAAQABAAEA/////////v8BAP///v///wIAAAAAAAAAAQAAAAIAAQAAAAAAAAABAAEAAAAAAAAAAAD//wEAAQD//wAAAQABAAAA/v/+/////////wAAAAD//wAAAAD/////AAAAAP7/AAD//wIA//8CAP//AQAAAP////8AAAAAAQABAP////8AAP//AQACAAAAAQAAAAAAAAAAAAAA//8BAAAAAAD+/wAA/v///wEAAAD+//7///8CAP7/AAABAP3/AwAAAAAAAAABAAIAAAABAAAAAQABAAIAAAAAAP//AAAAAAEAAAACAAEAAAACAAAAAAABAAAAAwAAAAAAAAD+/wAAAQD9//////8BAAAA/v8AAAAAAAAAAAAAAAD//wMA/v8BAAEAAQACAAAA/v8BAP//AwABAAIAAQABAP//AQAAAAEAAAAAAAEA//8AAAAAAAD/////AAABAAEAAAAAAP////8AAAAAAAAAAAAA/v8AAP//AQAAAP//AAABAAIAAQAAAAAAAgABAAAA/////wAAAQABAP//AQABAAEA/////wAAAAAAAAAAAAABAAEAAQAAAAAAAAAAAAAA//8AAP7/AQD9/wAAAgD//wEAAQABAAEA/v8AAAEA/////wAAAAAAAP//AAABAAAAAAAAAAAA//8CAP//AAABAAEAAQABAAAA//8BAAIAAgD//wAA/v8AAAEAAAD///7/AAAAAAEAAAABAAAAAQABAAAAAQACAAAA///+/wAAAQABAP7////+/wAA//8AAAAAAgAAAP//AQD9/wAAAAD//wAA//8AAAAAAQAAAAAAAQD//wAAAAAAAP//AQABAAAA/v8CAP//AAD///////8AAAAAAAACAAEA//8BAP7/AAAAAAEA//8BAAAAAQD//wAAAQD+/wAA/////wAAAAD//wAAAQABAAAA//8AAAEA/////wAA//8AAAAA/v/+/wEAAgABAP//AgD//wIA/////wAA//8AAAEAAQAAAAAAAQAAAAMAAAACAP//",
    Gr = {
      general: {
        primaryColor: "#42b0c5",
        secondaryColor: "#491d8d",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        showHeader: !0,
        showFooter: !0,
        showInputRow: !0,
        actionDisabledIcon: Ml,
        embedded: !1,
        flowStartTrigger: "ON_LOAD",
      },
      tooltip: { mode: "CLOSE", text: "Talk to me! 😊" },
      chatButton: { icon: Nr },
      header: {
        title: c.jsx("div", {
          style: {
            cursor: "pointer",
            margin: 0,
            fontSize: 20,
            fontWeight: "bold",
          },
          onClick: () => window.open("https://github.com/tjtanjin/"),
          children: "Tan Jin",
        }),
        showAvatar: !0,
        avatar: Fr,
        buttons: [
          nA.NOTIFICATION_BUTTON,
          nA.AUDIO_BUTTON,
          nA.CLOSE_CHAT_BUTTON,
        ],
        closeChatIcon: zl,
      },
      notification: {
        disabled: !1,
        defaultToggledOn: !0,
        volume: 0.2,
        icon: Ll,
        iconDisabled: Nl,
        sound: Aa,
        showCount: !0,
      },
      audio: {
        disabled: !0,
        defaultToggledOn: !1,
        language: "en-US",
        voiceNames: [
          "Microsoft David - English (United States)",
          "Alex (English - United States)",
        ],
        rate: 1,
        volume: 1,
        icon: Zl,
        iconDisabled: $l,
      },
      chatHistory: {
        disabled: !1,
        maxEntries: 30,
        storageKey: "rcb-history",
        storageType: "LOCAL_STORAGE",
        viewChatHistoryButtonText: "Load Chat History ⟳",
        chatHistoryLineBreakText: "----- Previous Chat History -----",
        autoLoad: !1,
      },
      chatInput: {
        disabled: !1,
        allowNewline: !1,
        enabledPlaceholderText: "Type your message...",
        disabledPlaceholderText: "",
        showCharacterCount: !1,
        characterLimit: -1,
        botDelay: 1e3,
        sendButtonIcon: _l,
        blockSpam: !0,
        sendOptionOutput: !0,
        sendCheckboxOutput: !0,
        buttons: [nA.VOICE_MESSAGE_BUTTON, nA.SEND_MESSAGE_BUTTON],
      },
      chatWindow: {
        showScrollbar: !1,
        showTypingIndicator: !0,
        autoJumpToBottom: !1,
        showMessagePrompt: !0,
        messagePromptText: "New Messages ↓",
        messagePromptOffset: 30,
        defaultOpen: !1,
      },
      sensitiveInput: {
        maskInTextArea: !0,
        maskInUserBubble: !0,
        asterisksCount: 10,
        hideInUserBubble: !1,
      },
      userBubble: {
        animate: !0,
        showAvatar: !1,
        avatar: Ol,
        simulateStream: !1,
        streamSpeed: 30,
      },
      botBubble: {
        animate: !0,
        showAvatar: !1,
        avatar: Fr,
        simulateStream: !1,
        streamSpeed: 30,
      },
      voice: {
        disabled: !0,
        defaultToggledOn: !1,
        language: "en-US",
        timeoutPeriod: 1e4,
        autoSendDisabled: !1,
        autoSendPeriod: 1e3,
        sendAsAudio: !1,
        icon: Wl,
        iconDisabled: Xl,
      },
      footer: {
        text: c.jsxs("div", {
          style: {
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: 3,
          },
          onClick: () => window.open("https://react-chatbotify.com"),
          children: [
            c.jsx("span", { children: "Powered By " }, 0),
            c.jsx(
              "div",
              {
                style: {
                  borderRadius: "50%",
                  width: 14,
                  height: 14,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "linear-gradient(to right, #42b0c5, #491d8d)",
                },
                children: c.jsx(Nr, {
                  style: { width: "80%", height: "80%", fill: "#fff" },
                }),
              },
              1
            ),
            c.jsx(
              "span",
              { style: { fontWeight: "bold" }, children: " React ChatBotify" },
              2
            ),
          ],
        }),
        buttons: [nA.FILE_ATTACHMENT_BUTTON, nA.EMOJI_PICKER_BUTTON],
      },
      fileAttachment: {
        disabled: !1,
        multiple: !0,
        accept: ".png",
        icon: Ur,
        iconDisabled: Ur,
        sendFileName: !0,
        showMediaDisplay: !1,
      },
      emoji: {
        disabled: !1,
        icon: zr,
        iconDisabled: zr,
        list: [
          "😀",
          "😃",
          "😄",
          "😅",
          "😊",
          "😌",
          "😇",
          "🙃",
          "🤣",
          "😍",
          "🥰",
          "🥳",
          "🎉",
          "🎈",
          "🚀",
          "⭐️",
        ],
      },
      toast: { maxCount: 3, forbidOnMax: !1, dismissOnClick: !0 },
      event: {
        rcbPreInjectMessage: !1,
        rcbPostInjectMessage: !1,
        rcbStartSimulateStreamMessage: !1,
        rcbStopSimulateStreamMessage: !1,
        rcbStartStreamMessage: !1,
        rcbChunkStreamMessage: !1,
        rcbStopStreamMessage: !1,
        rcbRemoveMessage: !1,
        rcbLoadChatHistory: !1,
        rcbToggleChatWindow: !1,
        rcbStartSpeakAudio: !1,
        rcbToggleAudio: !1,
        rcbToggleNotifications: !1,
        rcbToggleVoice: !1,
        rcbChangePath: !1,
        rcbShowToast: !1,
        rcbDismissToast: !1,
        rcbUserSubmitText: !1,
        rcbUserUploadFile: !1,
        rcbTextAreaChangeValue: !1,
        rcbPreLoadChatBot: !1,
        rcbPostLoadChatBot: !1,
        rcbPreProcessBlock: !1,
        rcbPostProcessBlock: !1,
      },
      ariaLabel: {
        chatButton: "open chat",
        audioButton: "toggle audio",
        closeChatButton: "close chat",
        emojiButton: "emoji picker",
        fileAttachmentButton: "upload file",
        notificationButton: "toggle notifications",
        sendButton: "send message",
        voiceButton: "toggle voice",
        inputTextArea: "input text area",
      },
      device: {
        desktopEnabled: !0,
        mobileEnabled: !0,
        applyMobileOptimizations: !0,
      },
    },
    _r = f.createContext({ settings: {}, setSettings: () => null }),
    H = () => f.useContext(_r),
    ea = ({ children: A, settings: e = Gr, setSettings: t }) =>
      c.jsx(_r.Provider, {
        value: { settings: e, setSettings: t },
        children: A,
      }),
    Yr = {
      tooltipStyle: {},
      notificationBadgeStyle: {},
      chatWindowStyle: {},
      headerStyle: {},
      bodyStyle: {},
      chatInputContainerStyle: {},
      chatInputAreaStyle: {},
      chatInputAreaFocusedStyle: {},
      chatInputAreaDisabledStyle: {},
      userBubbleStyle: {},
      botBubbleStyle: {},
      botOptionStyle: {},
      botOptionHoveredStyle: {},
      botCheckboxRowStyle: {},
      botCheckboxNextStyle: {},
      botCheckMarkStyle: {},
      botCheckMarkSelectedStyle: {},
      characterLimitStyle: {},
      characterLimitReachedStyle: {},
      chatHistoryLineBreakStyle: {},
      chatMessagePromptStyle: {},
      chatMessagePromptHoveredStyle: {},
      footerStyle: {},
      loadingSpinnerStyle: {},
      mediaDisplayContainerStyle: {},
      chatButtonStyle: {},
      chatHistoryButtonStyle: {},
      chatHistoryButtonHoveredStyle: {},
      sendButtonStyle: {},
      sendButtonHoveredStyle: {},
      sendButtonDisabledStyle: {},
      audioButtonStyle: {},
      audioButtonDisabledStyle: {},
      closeChatButtonStyle: {},
      emojiButtonStyle: {},
      emojiButtonDisabledStyle: {},
      fileAttachmentButtonStyle: {},
      fileAttachmentButtonDisabledStyle: {},
      notificationButtonStyle: {},
      notificationButtonDisabledStyle: {},
      voiceButtonStyle: {},
      voiceButtonDisabledStyle: {},
      chatIconStyle: {},
      audioIconStyle: {},
      audioIconDisabledStyle: {},
      closeChatIconStyle: {},
      emojiIconStyle: {},
      emojiIconDisabledStyle: {},
      fileAttachmentIconStyle: {},
      fileAttachmentIconDisabledStyle: {},
      notificationIconStyle: {},
      notificationIconDisabledStyle: {},
      voiceIconStyle: {},
      voiceIconDisabledStyle: {},
      sendIconStyle: {},
      sendIconDisabledStyle: {},
      sendIconHoveredStyle: {},
      rcbTypingIndicatorContainerStyle: {},
      rcbTypingIndicatorDotStyle: {},
      toastPromptContainerStyle: {},
      toastPromptStyle: {},
      toastPromptHoveredStyle: {},
    },
    Wr = f.createContext({ styles: {}, setStyles: () => null }),
    V = () => f.useContext(Wr),
    ta = ({ children: A, styles: e = Yr, setStyles: t }) =>
      c.jsx(Wr.Provider, { value: { styles: e, setStyles: t }, children: A }),
    na = ({ buttons: A }) => {
      var e, t, n, r, o;
      const { settings: s } = H(),
        { styles: l } = V(),
        a = {
          backgroundImage: `linear-gradient(to right, ${
            (e = s.general) == null ? void 0 : e.secondaryColor
          },
			${(t = s.general) == null ? void 0 : t.primaryColor})`,
          ...l.headerStyle,
        };
      return c.jsxs("div", {
        style: a,
        className: "rcb-chat-header-container",
        children: [
          c.jsxs("div", {
            className: "rcb-chat-header",
            children: [
              ((n = s.header) == null ? void 0 : n.showAvatar) &&
                c.jsx("div", {
                  style: {
                    backgroundImage: `url("${
                      (r = s.header) == null ? void 0 : r.avatar
                    }")`,
                  },
                  className: "rcb-bot-avatar",
                }),
              (o = s.header) == null ? void 0 : o.title,
            ],
          }),
          c.jsx("div", {
            className: "rcb-chat-header",
            children:
              A == null
                ? void 0
                : A.map((i, u) => c.jsx(f.Fragment, { children: i }, u)),
          }),
        ],
      });
    },
    Vr = f.createContext({}),
    iA = () => f.useContext(Vr),
    ra = ({ children: A, botIdRef: e, flowRef: t }) => {
      const n = f.useRef(null),
        r = f.useRef(""),
        o = f.useRef(null),
        s = f.useRef(new Map()),
        l = f.useRef(null),
        a = f.useRef(""),
        i = f.useRef(!1),
        u = f.useRef(null),
        d = f.useRef(null),
        v = f.useRef(null);
      return c.jsx(Vr.Provider, {
        value: {
          botIdRef: e,
          flowRef: t,
          inputRef: n,
          timeoutIdRef: o,
          streamMessageMap: s,
          chatBodyRef: l,
          paramsInputRef: a,
          keepVoiceOnRef: i,
          audioContextRef: u,
          audioBufferRef: d,
          gainNodeRef: v,
          prevInputRef: r,
        },
        children: A,
      });
    },
    BA = (A) => {
      const [e, t] = f.useState(A),
        n = f.useRef(A);
      return [
        e,
        (r) => {
          const o = typeof r == "function" ? r(n.current) : r;
          (n.current = o), t(o);
        },
        n,
      ];
    },
    Xr = f.createContext({}),
    oA = () => f.useContext(Xr),
    oa = ({ children: A, settings: e }) => {
      var t, n, r, o, s, l;
      const [a, i, u] = BA(!1),
        [d, v, w] = BA(
          ((t = e == null ? void 0 : e.chatWindow) == null
            ? void 0
            : t.defaultOpen) ?? !1
        ),
        [g, p, h] = BA(
          ((n = e == null ? void 0 : e.audio) == null
            ? void 0
            : n.defaultToggledOn) ?? !1
        ),
        [m, E, Q] = BA(
          ((r = e == null ? void 0 : e.voice) == null
            ? void 0
            : r.defaultToggledOn) ?? !1
        ),
        [b, y, P] = BA(
          ((o = e == null ? void 0 : e.notification) == null
            ? void 0
            : o.defaultToggledOn) ?? !0
        ),
        [S, B] = f.useState(!1),
        [x, R] = f.useState(!1),
        [D, T, I] = BA(!1),
        [M, Z, z] = BA(!0),
        [F, W, G] = BA(!1),
        [eA, U] = f.useState(!1),
        [X, _] = f.useState(!1),
        [Y, $] = f.useState(0),
        [rA, tA] = f.useState(0),
        [NA, Ke] = f.useState(!1),
        [Ri, ji] = f.useState(
          ((s = window.visualViewport) == null ? void 0 : s.height) ??
            window.innerHeight
        ),
        [Hi, Li] = f.useState(
          ((l = window.visualViewport) == null ? void 0 : l.width) ??
            window.innerWidth
        );
      return c.jsx(Xr.Provider, {
        value: {
          isBotTyping: a,
          setSyncedIsBotTyping: i,
          syncedIsBotTypingRef: u,
          isChatWindowOpen: d,
          setSyncedIsChatWindowOpen: v,
          syncedIsChatWindowOpenRef: w,
          audioToggledOn: g,
          setSyncedAudioToggledOn: p,
          syncedAudioToggledOnRef: h,
          voiceToggledOn: m,
          setSyncedVoiceToggledOn: E,
          syncedVoiceToggledOnRef: Q,
          notificationsToggledOn: b,
          setSyncedNotificationsToggledOn: y,
          syncedNotificationsToggledOnRef: P,
          isLoadingChatHistory: S,
          setIsLoadingChatHistory: B,
          hasChatHistoryLoaded: x,
          setHasChatHistoryLoaded: R,
          isScrolling: D,
          setSyncedIsScrolling: T,
          syncedIsScrollingRef: I,
          textAreaDisabled: M,
          setSyncedTextAreaDisabled: Z,
          syncedTextAreaDisabledRef: z,
          textAreaSensitiveMode: F,
          setSyncedTextAreaSensitiveMode: W,
          syncedTextAreaSensitiveModeRef: G,
          hasInteractedPage: eA,
          setHasInteractedPage: U,
          hasFlowStarted: X,
          setHasFlowStarted: _,
          unreadCount: Y,
          setUnreadCount: $,
          inputLength: rA,
          setInputLength: tA,
          blockAllowsAttachment: NA,
          setBlockAllowsAttachment: Ke,
          viewportHeight: Ri,
          setViewportHeight: ji,
          viewportWidth: Hi,
          setViewportWidth: Li,
        },
        children: A,
      });
    };
  var O = ((A) => (
    (A.START_SPEAK_AUDIO = "rcb-start-speak-audio"),
    (A.TOGGLE_AUDIO = "rcb-toggle-audio"),
    (A.TOGGLE_NOTIFICATIONS = "rcb-toggle-notifications"),
    (A.TOGGLE_VOICE = "rcb-toggle-voice"),
    (A.TOGGLE_CHAT_WINDOW = "rcb-toggle-chat-window"),
    (A.PRE_INJECT_MESSAGE = "rcb-pre-inject-message"),
    (A.POST_INJECT_MESSAGE = "rcb-post-inject-message"),
    (A.START_SIMULATE_STREAM_MESSAGE = "rcb-start-simulate-stream-message"),
    (A.STOP_SIMULATE_STREAM_MESSAGE = "rcb-stop-simulate-stream-message"),
    (A.START_STREAM_MESSAGE = "rcb-start-stream-message"),
    (A.CHUNK_STREAM_MESSAGE = "rcb-chunk-stream-message"),
    (A.STOP_STREAM_MESSAGE = "rcb-stop-stream-message"),
    (A.REMOVE_MESSAGE = "rcb-remove-message"),
    (A.LOAD_CHAT_HISTORY = "rcb-load-chat-history"),
    (A.CHANGE_PATH = "rcb-change-path"),
    (A.SHOW_TOAST = "rcb-show-toast"),
    (A.DISMISS_TOAST = "rcb-dismiss-toast"),
    (A.USER_SUBMIT_TEXT = "rcb-user-submit-text"),
    (A.USER_UPLOAD_FILE = "rcb-user-upload-file"),
    (A.TEXT_AREA_CHANGE_VALUE = "rcb-text-area-change-value"),
    (A.PRE_LOAD_CHATBOT = "rcb-pre-load-chatbot"),
    (A.POST_LOAD_CHATBOT = "rcb-post-load-chatbot"),
    (A.PRE_PROCESS_BLOCK = "rcb-pre-process-block"),
    (A.POST_PROCESS_BLOCK = "rcb-post-process-block"),
    A
  ))(O || {});
  const sa = {
      [O.START_SPEAK_AUDIO]: !0,
      [O.TOGGLE_AUDIO]: !0,
      [O.TOGGLE_VOICE]: !0,
      [O.TOGGLE_NOTIFICATIONS]: !0,
      [O.TOGGLE_CHAT_WINDOW]: !0,
      [O.PRE_INJECT_MESSAGE]: !0,
      [O.POST_INJECT_MESSAGE]: !1,
      [O.PRE_LOAD_CHATBOT]: !0,
      [O.POST_LOAD_CHATBOT]: !1,
      [O.START_SIMULATE_STREAM_MESSAGE]: !0,
      [O.STOP_SIMULATE_STREAM_MESSAGE]: !1,
      [O.START_STREAM_MESSAGE]: !0,
      [O.CHUNK_STREAM_MESSAGE]: !0,
      [O.STOP_STREAM_MESSAGE]: !0,
      [O.REMOVE_MESSAGE]: !0,
      [O.LOAD_CHAT_HISTORY]: !0,
      [O.CHANGE_PATH]: !0,
      [O.SHOW_TOAST]: !0,
      [O.DISMISS_TOAST]: !0,
      [O.USER_SUBMIT_TEXT]: !0,
      [O.USER_UPLOAD_FILE]: !0,
      [O.TEXT_AREA_CHANGE_VALUE]: !0,
      [O.PRE_PROCESS_BLOCK]: !0,
      [O.POST_PROCESS_BLOCK]: !0,
    },
    Rt = async (A, e, t) => {
      const n = new CustomEvent(A, { detail: e, cancelable: sa[A] });
      return (
        (n.data = t),
        (n.promises = []),
        window.dispatchEvent(n),
        await Promise.all(n.promises),
        n
      );
    },
    Kr = f.createContext({
      paths: [],
      setSyncedPaths: () => {},
      syncedPathsRef: { current: [] },
    }),
    ae = () => f.useContext(Kr),
    la = ({ children: A }) => {
      const [e, t, n] = BA([]);
      return c.jsx(Kr.Provider, {
        value: { paths: e, setSyncedPaths: t, syncedPathsRef: n },
        children: A,
      });
    },
    EA = () => {
      const { botIdRef: A } = iA(),
        { syncedPathsRef: e } = ae(),
        t = f.useCallback(
          () => (e.current.length > 0 ? e.current.at(-1) ?? null : null),
          []
        ),
        n = f.useCallback(
          () => (e.current.length > 1 ? e.current.at(-2) ?? null : null),
          []
        );
      return {
        dispatchRcbEvent: f.useCallback(
          async (r, o) => {
            const s = { botId: A.current, currPath: t(), prevPath: n() };
            return await Rt(r, s, o);
          },
          [A]
        ),
      };
    },
    PA = () => {
      const { settings: A } = H(),
        {
          isChatWindowOpen: e,
          setSyncedIsChatWindowOpen: t,
          viewportHeight: n,
          setViewportHeight: r,
          viewportWidth: o,
          setViewportWidth: s,
          setUnreadCount: l,
          setSyncedIsBotTyping: a,
          setSyncedIsScrolling: i,
          syncedIsBotTypingRef: u,
          syncedIsChatWindowOpenRef: d,
        } = oA(),
        { chatBodyRef: v } = iA(),
        { dispatchRcbEvent: w } = EA(),
        g = f.useCallback(
          async (E) => {
            var Q;
            E !== d.current &&
              (((Q = A.event) != null &&
                Q.rcbToggleChatWindow &&
                (
                  await w(O.TOGGLE_CHAT_WINDOW, {
                    currState: d.current,
                    newState: !d.current,
                  })
                ).defaultPrevented) ||
                t((b) => (b || l(0), !b)));
          },
          [d]
        ),
        p = f.useCallback(
          async (E) => {
            E !== u.current && a((Q) => !Q);
          },
          [u]
        ),
        h = f.useCallback(
          (E, Q, b, y) => (
            (E /= y / 2),
            E < 1
              ? (b / 2) * E * E + Q
              : (E--, (-b / 2) * (E * (E - 2) - 1) + Q)
          ),
          []
        ),
        m = f.useCallback(
          (E = 0) => {
            if (!v.current) return;
            const Q = v.current.scrollHeight - v.current.clientHeight;
            if (E <= 0) {
              (v.current.scrollTop = Q), i(!1);
              return;
            }
            const b = v.current.scrollTop,
              y = Q - b,
              P = 20;
            let S = 0;
            const B = () => {
              if (!v.current) return;
              S += P;
              const x = h(S, b, y, E);
              (v.current.scrollTop = x),
                S < E ? requestAnimationFrame(B) : i(!1);
            };
            B();
          },
          [v]
        );
      return {
        isChatWindowOpen: e,
        setSyncedIsChatWindowOpen: t,
        toggleChatWindow: g,
        viewportHeight: n,
        setViewportHeight: r,
        viewportWidth: o,
        setViewportWidth: s,
        toggleIsBotTyping: p,
        scrollToBottom: m,
      };
    },
    aa = () => {
      var A, e, t;
      const { settings: n } = H(),
        { styles: r } = V(),
        { unreadCount: o, isScrolling: s } = oA(),
        { chatBodyRef: l } = iA(),
        { scrollToBottom: a } = PA(),
        [i, u] = f.useState(!1),
        d = {
          color: (A = n.general) == null ? void 0 : A.primaryColor,
          borderColor: (e = n.general) == null ? void 0 : e.primaryColor,
          ...r.chatMessagePromptHoveredStyle,
        },
        v = () => {
          u(!0);
        },
        w = () => {
          u(!1);
        };
      return c.jsx("div", {
        className: `rcb-message-prompt-container ${(() => {
          var g;
          return l.current &&
            (g = n.chatWindow) != null &&
            g.showMessagePrompt &&
            s &&
            o > 0
            ? "visible"
            : "hidden";
        })()}`,
        children: c.jsx("div", {
          onMouseEnter: v,
          onMouseLeave: w,
          style: i ? d : { ...r.chatMessagePromptStyle },
          onMouseDown: (g) => {
            g.preventDefault(), a(600);
          },
          className: "rcb-message-prompt-text",
          children: (t = n.chatWindow) == null ? void 0 : t.messagePromptText,
        }),
      });
    },
    Jr = f.createContext({
      messages: [],
      setSyncedMessages: () => {},
      syncedMessagesRef: { current: [] },
    }),
    jt = () => f.useContext(Jr),
    ia = ({ children: A }) => {
      const [e, t, n] = BA([]);
      return c.jsx(Jr.Provider, {
        value: { messages: e, setSyncedMessages: t, syncedMessagesRef: n },
        children: A,
      });
    },
    ua = ({ message: A, isNewSender: e }) => {
      var t, n, r, o, s, l;
      const { settings: a } = H(),
        { styles: i } = V(),
        u = typeof A.content == "string",
        d = A.content,
        v = A.contentWrapper ? c.jsx(A.contentWrapper, { children: d }) : d,
        w = {
          backgroundColor: (t = a.general) == null ? void 0 : t.primaryColor,
          color: "#fff",
          maxWidth: (n = a.userBubble) != null && n.showAvatar ? "65%" : "70%",
          ...i.userBubbleStyle,
        },
        g =
          (r = a.userBubble) != null && r.animate
            ? "rcb-user-message-entry"
            : "",
        p = ((o = a.userBubble) == null ? void 0 : o.showAvatar) && e,
        h = `rcb-user-message${
          !e && (s = a.userBubble) != null && s.showAvatar
            ? " rcb-user-message-offset"
            : ""
        }`;
      return c.jsxs("div", {
        className: "rcb-user-message-container",
        children: [
          u
            ? c.jsx("div", { style: w, className: `${h} ${g}`, children: v })
            : c.jsx(c.Fragment, { children: v }),
          p &&
            c.jsx("div", {
              style: {
                backgroundImage: `url("${
                  (l = a.userBubble) == null ? void 0 : l.avatar
                }")`,
              },
              className: "rcb-message-user-avatar",
            }),
        ],
      });
    },
    ca = ({ message: A, isNewSender: e }) => {
      var t, n, r, o, s, l;
      const { settings: a } = H(),
        { styles: i } = V(),
        u = typeof A.content == "string",
        d = A.content,
        v = A.contentWrapper ? c.jsx(A.contentWrapper, { children: d }) : d,
        w = {
          backgroundColor: (t = a.general) == null ? void 0 : t.secondaryColor,
          color: "#fff",
          maxWidth: (n = a.botBubble) != null && n.showAvatar ? "65%" : "70%",
          ...i.botBubbleStyle,
        },
        g =
          (r = a.botBubble) != null && r.animate ? "rcb-bot-message-entry" : "",
        p = ((o = a.botBubble) == null ? void 0 : o.showAvatar) && e,
        h = `rcb-bot-message${
          !e && (s = a.botBubble) != null && s.showAvatar
            ? " rcb-bot-message-offset"
            : ""
        }`;
      return c.jsxs("div", {
        className: "rcb-bot-message-container",
        children: [
          p &&
            c.jsx("div", {
              style: {
                backgroundImage: `url("${
                  (l = a.botBubble) == null ? void 0 : l.avatar
                }")`,
              },
              className: "rcb-message-bot-avatar",
            }),
          u
            ? c.jsx("div", { style: w, className: `${h} ${g}`, children: v })
            : c.jsx(c.Fragment, { children: v }),
        ],
      });
    },
    fa = () => {
      var A, e, t;
      const { settings: n } = H(),
        { styles: r } = V(),
        o =
          (A = n.botBubble) != null && A.animate ? "rcb-bot-message-entry" : "";
      return c.jsxs("div", {
        className: "rcb-bot-message-container",
        children: [
          ((e = n.botBubble) == null ? void 0 : e.showAvatar) &&
            c.jsx("div", {
              style: {
                backgroundImage: `url("${
                  (t = n.botBubble) == null ? void 0 : t.avatar
                }")`,
              },
              className: "rcb-message-bot-avatar",
            }),
          c.jsx("div", {
            onMouseDown: (s) => {
              s.preventDefault();
            },
            className: `rcb-bot-message ${o}`,
            children: c.jsxs("div", {
              className: "rcb-typing-indicator",
              style: {
                ...(r == null ? void 0 : r.rcbTypingIndicatorContainerStyle),
              },
              children: [
                c.jsx("span", {
                  className: "rcb-dot",
                  style: {
                    ...(r == null ? void 0 : r.rcbTypingIndicatorDotStyle),
                  },
                }),
                c.jsx("span", {
                  className: "rcb-dot",
                  style: {
                    ...(r == null ? void 0 : r.rcbTypingIndicatorDotStyle),
                  },
                }),
                c.jsx("span", {
                  className: "rcb-dot",
                  style: {
                    ...(r == null ? void 0 : r.rcbTypingIndicatorDotStyle),
                  },
                }),
              ],
            }),
          }),
        ],
      });
    },
    da = () => {
      var A, e, t;
      const { settings: n } = H(),
        { styles: r } = V(),
        { messages: o } = jt(),
        { scrollToBottom: s } = PA(),
        { isBotTyping: l, syncedIsScrollingRef: a } = oA(),
        { chatBodyRef: i } = iA(),
        u = {
          ...(r == null ? void 0 : r.bodyStyle),
          scrollbarWidth:
            (A = n.chatWindow) != null && A.showScrollbar ? "auto" : "none",
        };
      f.useEffect(() => {
        a.current || s();
      }, [(e = i.current) == null ? void 0 : e.scrollHeight]);
      const d = (v) => (v === 0 ? !0 : o[v].sender !== o[v - 1].sender);
      return c.jsxs("div", {
        style: u,
        className: "rcb-chat-body-container",
        ref: i,
        children: [
          o.map((v, w) => {
            const g = d(w);
            return v.sender.toUpperCase() === "USER"
              ? c.jsx(ua, { message: v, isNewSender: g }, w)
              : v.sender.toUpperCase() === "BOT"
              ? c.jsx(ca, { message: v, isNewSender: g }, w)
              : c.jsx("div", { children: v.content }, w);
          }),
          l &&
            ((t = n.chatWindow) == null ? void 0 : t.showTypingIndicator) &&
            c.jsx(fa, {}),
          c.jsx(aa, {}),
        ],
      });
    },
    va = ({ checkboxes: A, checkedItems: e, path: t }) => {
      var n, r, o, s, l, a, i, u, d, v, w;
      const { settings: g } = H(),
        { styles: p } = V(),
        { paths: h } = ae(),
        { handleSubmitText: m } = ZA(),
        [E, Q] = f.useState(new Set()),
        [b, y] = f.useState(!1),
        P = {
          cursor: b
            ? `url("${
                (n = g.general) == null ? void 0 : n.actionDisabledIcon
              }"), auto`
            : "pointer",
          color: (r = g.general) == null ? void 0 : r.primaryColor,
          borderColor: (o = g.general) == null ? void 0 : o.primaryColor,
          ...p.botCheckboxRowStyle,
        },
        S = {
          cursor:
            b || E.size < A.min
              ? `url("${
                  (s = g.general) == null ? void 0 : s.actionDisabledIcon
                }"), auto`
              : "pointer",
          color: (l = g.general) == null ? void 0 : l.primaryColor,
          borderColor: (a = g.general) == null ? void 0 : a.primaryColor,
          ...p.botCheckboxNextStyle,
        },
        B = {
          cursor: b
            ? `url("${
                (i = g.general) == null ? void 0 : i.actionDisabledIcon
              }"), auto`
            : "pointer",
          color: "transparent",
          ...p.botCheckMarkStyle,
        },
        x = {
          cursor: b
            ? `url("${
                (u = g.general) == null ? void 0 : u.actionDisabledIcon
              }"), auto`
            : "pointer",
          color: "#fff",
          borderColor: (d = g.general) == null ? void 0 : d.primaryColor,
          backgroundColor: (v = g.general) == null ? void 0 : v.primaryColor,
          ...p.botCheckMarkSelectedStyle,
        };
      f.useEffect(() => {
        h.length > 0 && h[h.length - 1] !== t && y(!A.reusable);
      }, [h]);
      const R = (D) => {
        b ||
          Q((T) => {
            const I = new Set(T);
            if (I.has(D)) e.delete(D), I.delete(D);
            else {
              if (E.size == A.max) return T;
              e.add(D), I.add(D);
            }
            return I;
          });
      };
      return c.jsxs("div", {
        className: `rcb-checkbox-container ${
          (w = g.botBubble) != null && w.showAvatar ? "rcb-checkbox-offset" : ""
        }`,
        children: [
          A.items.map((D) =>
            c.jsx(
              "div",
              {
                onMouseDown: (T) => {
                  T.preventDefault(), R(D);
                },
                style: P,
                className: "rcb-checkbox-row-container",
                children: c.jsxs("div", {
                  className: "rcb-checkbox-row",
                  children: [
                    c.jsx("div", {
                      style: E.has(D) ? x : B,
                      className: "rcb-checkbox-mark",
                    }),
                    c.jsx("div", {
                      className: "rcb-checkbox-label",
                      children: D,
                    }),
                  ],
                }),
              },
              D
            )
          ),
          c.jsx("div", {
            style: S,
            className: "rcb-checkbox-next-button",
            onMouseDown: (D) => {
              var T;
              if ((D.preventDefault(), b || E.size < A.min)) return;
              const I = Array.from(e).join(", ");
              y(!A.reusable);
              let M;
              A.sendOutput != null
                ? (M = A.sendOutput)
                : (M =
                    ((T = g.chatInput) == null
                      ? void 0
                      : T.sendCheckboxOutput) ?? !0),
                m(I, M);
            },
          }),
        ],
      });
    },
    ga = async (A, e) => {
      const t = A.checkboxes;
      if (!t) return;
      let n;
      if (
        (typeof t == "function"
          ? ((n = t(e)), n instanceof Promise && (n = await n))
          : (n = t),
        Array.isArray(n) && (n = { items: n }),
        !("items" in n) || n.items.length == 0)
      )
        return;
      n.min == null && (n.min = 1),
        n.max == null && (n.max = n.items.length),
        n.min > n.max && (n.min = n.max),
        n.reusable == null && (n.reusable = !1);
      const r = new Set(),
        o = e.currPath,
        s = c.jsx(va, { checkboxes: n, checkedItems: r, path: o });
      await e.injectMessage(s);
    },
    wa = async (A, e) => {
      const t = A.function;
      if (!t) return;
      const n = t(e);
      return n instanceof Promise ? await n : n;
    },
    ha = async (A, e, t) => {
      const n = A.message;
      if (!n) return;
      if (typeof n == "string") {
        n.trim() !== "" &&
          (t ? await e.simulateStreamMessage(n) : await e.injectMessage(n));
        return;
      }
      let r = n(e);
      r instanceof Promise && (r = await r),
        typeof r == "string" &&
          r.trim() !== "" &&
          (t ? await e.simulateStreamMessage(r) : await e.injectMessage(r));
    },
    pa = ({ options: A, path: e }) => {
      var t, n, r, o, s, l;
      const { settings: a } = H(),
        { styles: i } = V(),
        { paths: u } = ae(),
        { handleSubmitText: d } = ZA(),
        [v, w] = f.useState([]),
        [g, p] = f.useState(!1),
        h = {
          cursor: g
            ? `url("${
                (t = a.general) == null ? void 0 : t.actionDisabledIcon
              }"), auto`
            : "pointer",
          color: (n = a.general) == null ? void 0 : n.primaryColor,
          borderColor: (r = a.general) == null ? void 0 : r.primaryColor,
          backgroundColor: "#fff",
          ...i.botOptionStyle,
        },
        m = {
          color: "#fff",
          borderColor: (o = a.general) == null ? void 0 : o.primaryColor,
          backgroundColor: (s = a.general) == null ? void 0 : s.primaryColor,
          ...i.botOptionHoveredStyle,
        };
      f.useEffect(() => {
        u.length > 0 && u[u.length - 1] !== e && p(!A.reusable);
      }, [u]);
      const E = (b) => {
          w((y) => {
            const P = [...y];
            return (P[b] = !0), P;
          });
        },
        Q = (b) => {
          w((y) => {
            const P = [...y];
            return (P[b] = !1), P;
          });
        };
      return c.jsx("div", {
        className: `rcb-options-container ${
          (l = a.botBubble) != null && l.showAvatar ? "rcb-options-offset" : ""
        }`,
        children: A.items.map((b, y) => {
          const P = v[y] && !g;
          return c.jsx(
            "div",
            {
              className: "rcb-options",
              style: P ? m : h,
              onMouseEnter: () => E(y),
              onMouseLeave: () => Q(y),
              onMouseDown: (S) => {
                var B;
                if ((S.preventDefault(), g)) return;
                p(!A.reusable);
                let x;
                A.sendOutput != null
                  ? (x = A.sendOutput)
                  : (x =
                      ((B = a.chatInput) == null
                        ? void 0
                        : B.sendOptionOutput) ?? !0),
                  d(b, x);
              },
              children: b,
            },
            b
          );
        }),
      });
    },
    ma = async (A, e) => {
      const t = A.options;
      if (!t) return;
      let n;
      if (
        (typeof t == "function"
          ? ((n = t(e)), n instanceof Promise && (n = await n))
          : (n = t),
        Array.isArray(n) && (n = { items: n }),
        !("items" in n) || n.items.length == 0)
      )
        return;
      n.reusable == null && (n.reusable = !1);
      const r = e.currPath,
        o = c.jsx(pa, { options: n, path: r });
      await e.injectMessage(o);
    },
    ya = async (A, e) => {
      const t = A.path;
      if (!t) return !1;
      if (typeof t == "string") return await e.goToPath(t), !0;
      let n = t(e);
      if ((n instanceof Promise && (n = await n), !n)) return !1;
      const r = n;
      return await e.goToPath(r), !0;
    },
    Ba = async (A, e) => {
      const t = A.component;
      if (t) {
        if (typeof t == "function") {
          let n = t(e);
          if ((n instanceof Promise && (n = await n), !n)) return;
          await e.injectMessage(n);
          return;
        }
        await e.injectMessage(t);
      }
    },
    Ea = async (A, e, t, n) => {
      const r = A.transition;
      let o;
      if (
        (typeof r == "function"
          ? ((o = r(e)), o instanceof Promise && (o = await o))
          : (o = r),
        typeof o == "number" && (o = { duration: o }),
        !o ||
          o instanceof Promise ||
          o.duration == null ||
          typeof o.duration != "number")
      )
        return;
      o.interruptable == null && (o.interruptable = !1);
      const s = setTimeout(async () => {
        const l = await n(A);
        l && (await qr(l, e));
      }, o.duration);
      o.interruptable && (t.current = s);
    },
    Pa = async (A, e, t) => {
      const n = A.chatDisabled;
      if (n == null) return;
      let r;
      typeof n == "function"
        ? ((r = n(e)), r instanceof Promise && (r = await r))
        : (r = n),
        t(r);
    },
    Zr = async (A, e, t) => {
      const n = A.isSensitive;
      if (!n) {
        t(!1);
        return;
      }
      let r;
      typeof n == "function"
        ? ((r = n(e)), r instanceof Promise && (r = await r))
        : (r = n),
        t(r);
    },
    Da = async (A, e, t, n, r, o, s) => {
      if (!A) throw new Error("Block is not valid.");
      for (const l of Object.keys(A))
        switch (l) {
          case "message":
            await ha(A, e, t);
            break;
          case "options":
            await ma(A, e);
            break;
          case "checkboxes":
            await ga(A, e);
            break;
          case "component":
            await Ba(A, e);
            break;
          case "chatDisabled":
            await Pa(A, e, r);
            break;
          case "isSensitive":
            await Zr(A, e, o);
            break;
          case "transition":
            await Ea(A, e, n, s);
        }
    },
    qr = async (A, e) => {
      if (!A) throw new Error("Block is not valid.");
      const t = Object.keys(A);
      for (const n of t) n === "function" && (await wa(A, e));
      t.includes("path") && (await ya(A, e));
    },
    Ca = () => {
      var A;
      const { settings: e } = H(),
        { styles: t } = V();
      return c.jsx("div", {
        className: "rcb-line-break-container",
        children: c.jsx("div", {
          style: { ...t.chatHistoryLineBreakStyle },
          className: "rcb-line-break-text",
          "data-testid": "chat-history-line-break-text",
          children:
            (A = e.chatHistory) == null ? void 0 : A.chatHistoryLineBreakText,
        }),
      });
    },
    ba = () => {
      var A;
      const { settings: e } = H(),
        { styles: t } = V(),
        n = {
          borderTop: `4px solid ${
            (A = e.general) == null ? void 0 : A.primaryColor
          }`,
          ...t.loadingSpinnerStyle,
        };
      return c.jsx("div", {
        className: "rcb-spinner-container",
        children: c.jsx("div", { style: n, className: "rcb-spinner" }),
      });
    },
    Ue = () => {
      try {
        if (typeof crypto < "u" && typeof crypto.randomUUID == "function")
          return crypto.randomUUID();
        throw new Error("crypto.randomUUID not available");
      } catch (A) {
        if (typeof crypto < "u" && typeof crypto.getRandomValues == "function")
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (e) {
              const t = crypto.getRandomValues(new Uint8Array(1))[0] % 16;
              return (e === "x" ? t : (t & 3) | 8).toString(16);
            }
          );
        throw (
          (console.error(A),
          new Error("crypto.getRandomValues is also not available"))
        );
      }
    },
    LA = (A, e) => ({
      id: Ue(),
      content: A,
      sender: e,
      type: typeof A == "string" ? "string" : "object",
      timestamp: new Date().toUTCString(),
      tags: [],
    });
  let MA,
    $r = !1,
    ze = "rcb-history",
    Ge = 30,
    Ao = !1,
    _e = [];
  const Ht = async (A) => {
      if (Ao || !MA) return;
      const e = [],
        t = $r ? _e.length : 0;
      for (let r = A.length - 1; r >= t; r--) {
        const o = A[r];
        if (
          o.sender.toUpperCase() !== "SYSTEM" &&
          (o.content !== "" && e.unshift(o), e.length === Ge)
        )
          break;
      }
      let n = e.map(Ta);
      if (n.length < Ge) {
        const r = Ge - n.length;
        n = [..._e.slice(-r), ...n];
      }
      Qa(n);
    },
    Sa = (A) => {
      if (A != null)
        try {
          return JSON.parse(A);
        } catch {
          return [];
        }
      return [];
    },
    eo = () => _e,
    Qa = (A) => {
      MA && MA.setItem(ze, JSON.stringify(A));
    },
    xa = () => {
      MA && MA.removeItem(ze);
    },
    ka = (A) => {
      var e, t, n, r, o;
      ((t = (e = A.chatHistory) == null ? void 0 : e.storageType) == null
        ? void 0
        : t.toUpperCase()) === "SESSION_STORAGE"
        ? (MA = sessionStorage)
        : (MA = localStorage),
        (ze = (n = A.chatHistory) == null ? void 0 : n.storageKey),
        (Ge = (r = A.chatHistory) == null ? void 0 : r.maxEntries),
        (Ao = (o = A.chatHistory) == null ? void 0 : o.disabled),
        (_e = Sa(MA.getItem(ze)));
    },
    Ta = (A) =>
      f.isValidElement(A.content)
        ? structuredClone({
            id: A.id,
            content: UA.renderToString(A.content),
            type: A.type,
            sender: A.sender.toUpperCase(),
            timestamp: A.timestamp,
            tags: A.tags,
          })
        : A,
    Ia = (A, e, t, n, r, o, s, l, a) => {
      var i;
      if ((($r = !0), t != null))
        try {
          const u = LA(c.jsx(ba, {}), "SYSTEM"),
            d = r.current.slice(1);
          n([u, ...d]);
          const v = t.map((w) => {
            if (w.type === "object") {
              const g = to(w.content, A, e);
              return { ...w, content: g };
            }
            return w;
          });
          setTimeout(() => {
            var w;
            const g = r.current.slice(1);
            let p =
              (w = A.chatHistory) != null && w.autoLoad
                ? LA(c.jsx(c.Fragment, {}), "SYSTEM")
                : LA(c.jsx(Ca, {}), "SYSTEM");
            n([...v, p, ...g]), a(!0);
          }, 500),
            setTimeout(() => {
              if (!o.current) return;
              const { scrollHeight: w } = o.current,
                g = w - s;
              (o.current.scrollTop += g), l(!1);
            }, 510);
        } catch {
          MA.removeItem((i = A.chatHistory) == null ? void 0 : i.storageKey);
        }
    },
    to = (A, e, t) => {
      const n = new DOMParser().parseFromString(A, "text/html");
      return Array.from(n.body.childNodes).map((r, o) => {
        var s;
        if (r.nodeType === Node.TEXT_NODE) return r.textContent;
        {
          const l = r.tagName.toLowerCase();
          let a = Array.from(r.attributes).reduce((i, u) => {
            const d = u.name.toLowerCase();
            if (d === "style") {
              const v = u.value.split(";").filter((g) => g.trim() !== ""),
                w = {};
              v.forEach((g) => {
                const [p, h] = g.split(":").map((E) => E.trim()),
                  m = p.replace(/-([a-z])/g, (E, Q) => Q.toUpperCase());
                w[m] = h;
              }),
                (i[d] = w);
            } else
              (l === "audio" || l === "video") &&
              d === "controls" &&
              u.value === ""
                ? (i[d] = "true")
                : (i[d] = u.value);
            return i;
          }, {});
          if (Object.prototype.hasOwnProperty.call(a, "class")) {
            const i = r.classList;
            (a.className = i.toString()),
              delete a.class,
              (s = e.botBubble) != null && s.showAvatar && (a = Ma(i, a)),
              (a = Oa(i, a, e, t)),
              (a = Ra(i, a, e, t)),
              (a = ja(i, a, e, t)),
              (a = Ha(i, a, e, t));
          }
          if (
            [
              "area",
              "base",
              "br",
              "col",
              "embed",
              "hr",
              "img",
              "input",
              "link",
              "meta",
              "source",
              "track",
              "wbr",
            ].includes(l)
          )
            return f.createElement(l, { key: o, ...a });
          {
            const i = to(r.innerHTML, e, t);
            return f.createElement(l, { key: o, ...a }, ...i);
          }
        }
      });
    },
    Ma = (A, e) => (
      (A.contains("rcb-options-container") ||
        A.contains("rcb-checkbox-container")) &&
        (e.className = `${A.toString()} rcb-options-offset`),
      e
    ),
    Oa = (A, e, t, n) => {
      var r, o, s, l, a;
      return (
        A.contains("rcb-options") &&
          (e.style = {
            ...e.style,
            color:
              ((r = n.botOptionStyle) == null ? void 0 : r.color) ??
              ((o = t.general) == null ? void 0 : o.primaryColor),
            borderColor:
              ((s = n.botOptionStyle) == null ? void 0 : s.color) ??
              ((l = t.general) == null ? void 0 : l.primaryColor),
            cursor: `url("${
              (a = t.general) == null ? void 0 : a.actionDisabledIcon
            }"), auto`,
            ...n.botOptionStyle,
          }),
        e
      );
    },
    Ra = (A, e, t, n) => {
      var r, o, s, l, a;
      return (
        A.contains("rcb-checkbox-row-container") &&
          (e.style = {
            ...e.style,
            color:
              ((r = n.botCheckboxRowStyle) == null ? void 0 : r.color) ??
              ((o = t.general) == null ? void 0 : o.primaryColor),
            borderColor:
              ((s = n.botCheckboxRowStyle) == null ? void 0 : s.color) ??
              ((l = t.general) == null ? void 0 : l.primaryColor),
            cursor: `url("${
              (a = t.general) == null ? void 0 : a.actionDisabledIcon
            }"), auto`,
            ...n.botCheckboxRowStyle,
          }),
        e
      );
    },
    ja = (A, e, t, n) => {
      var r, o, s, l, a;
      return (
        A.contains("rcb-checkbox-next-button") &&
          (e.style = {
            ...e.style,
            color:
              ((r = n.botCheckboxNextStyle) == null ? void 0 : r.color) ??
              ((o = t.general) == null ? void 0 : o.primaryColor),
            borderColor:
              ((s = n.botCheckboxNextStyle) == null ? void 0 : s.color) ??
              ((l = t.general) == null ? void 0 : l.primaryColor),
            cursor: `url("${
              (a = t.general) == null ? void 0 : a.actionDisabledIcon
            }"), auto`,
            ...n.botCheckboxNextStyle,
          }),
        e
      );
    },
    Ha = (A, e, t, n) => {
      var r, o;
      return (
        (A.contains("rcb-media-display-image-container") ||
          A.contains("rcb-media-display-video-container")) &&
          (e.style = {
            ...e.style,
            backgroundColor: (r = t.general) == null ? void 0 : r.primaryColor,
            maxWidth:
              (o = t.userBubble) != null && o.showAvatar ? "65%" : "70%",
            ...n.mediaDisplayContainerStyle,
          }),
        e
      );
    },
    no = (A) => {
      if (!A) return !1;
      const e = A.getBoundingClientRect(),
        t = window.innerHeight ?? document.documentElement.clientHeight,
        n = window.innerWidth ?? document.documentElement.clientWidth;
      return e.top >= 0 && e.left >= 0 && e.bottom <= t && e.right <= n;
    },
    Lt = () => {
      const { settings: A } = H(),
        {
          notificationsToggledOn: e,
          setSyncedNotificationsToggledOn: t,
          hasInteractedPage: n,
          unreadCount: r,
          setUnreadCount: o,
          syncedNotificationsToggledOnRef: s,
        } = oA(),
        { audioBufferRef: l, audioContextRef: a, gainNodeRef: i } = iA(),
        { dispatchRcbEvent: u } = EA(),
        d = f.useCallback(async () => {
          var g, p;
          const h = (g = A.notification) == null ? void 0 : g.sound;
          a.current = new AudioContext();
          const m = a.current.createGain();
          (m.gain.value =
            ((p = A.notification) == null ? void 0 : p.volume) ?? 0.2),
            (i.current = m);
          let E;
          if (h != null && h.startsWith("data:audio")) {
            const Q = atob(h.split(",")[1]),
              b = new ArrayBuffer(Q.length),
              y = new Uint8Array(b);
            for (let P = 0; P < Q.length; P++) y[P] = Q.charCodeAt(P);
            E = b;
          } else E = await (await fetch(h)).arrayBuffer();
          l.current = await a.current.decodeAudioData(E);
        }, [A.notification]),
        v = f.useCallback(() => {
          var g;
          if (
            ((g = A.notification) != null && g.disabled) ||
            !s.current ||
            !n ||
            !a.current ||
            !l.current
          )
            return;
          const p = a.current.createBufferSource();
          (p.buffer = l.current),
            p.connect(i.current).connect(a.current.destination),
            p.start();
        }, [A.notification, s, n, a, l, i]),
        w = f.useCallback(
          async (g) => {
            var p;
            g !== s.current &&
              (((p = A.event) != null &&
                p.rcbToggleNotifications &&
                (
                  await u(O.TOGGLE_NOTIFICATIONS, {
                    currState: s.current,
                    newState: !s.current,
                  })
                ).defaultPrevented) ||
                t((h) => !h));
          },
          [s]
        );
      return {
        unreadCount: r,
        setUnreadCount: o,
        notificationsToggledOn: e,
        toggleNotifications: w,
        playNotificationSound: v,
        setUpNotifications: d,
      };
    },
    La = (A, e, t, n, r) => {
      if (!window.SpeechSynthesisUtterance) {
        console.info(
          "Speech Synthesis API is not supported in this environment."
        );
        return;
      }
      const o = new window.SpeechSynthesisUtterance();
      (o.text = A), (o.lang = e), (o.rate = n), (o.volume = r);
      let s = !1;
      for (const l of t)
        if (
          (window.speechSynthesis.getVoices().find((a) => {
            if (a.name === l) {
              (o.voice = a), window.speechSynthesis.speak(o), (s = !0);
              return;
            }
          }),
          s)
        )
          break;
      s || window.speechSynthesis.speak(o);
    },
    Fa = (A, e) => {
      var t, n, r, o;
      La(
        e,
        (t = A.audio) == null ? void 0 : t.language,
        (n = A.audio) == null ? void 0 : n.voiceNames,
        (r = A.audio) == null ? void 0 : r.rate,
        (o = A.audio) == null ? void 0 : o.volume
      );
    },
    ro = () => {
      const { settings: A } = H(),
        {
          audioToggledOn: e,
          setSyncedAudioToggledOn: t,
          syncedAudioToggledOnRef: n,
        } = oA(),
        { dispatchRcbEvent: r } = EA(),
        o = f.useCallback(
          async (l) => {
            var a;
            l !== n.current &&
              (((a = A.event) != null &&
                a.rcbToggleAudio &&
                (
                  await r(O.TOGGLE_AUDIO, {
                    currState: n.current,
                    newState: !n.current,
                  })
                ).defaultPrevented) ||
                t((i) => !i));
          },
          [n]
        ),
        s = f.useCallback(
          async (l) => {
            var a, i;
            if (((a = A.audio) != null && a.disabled) || !n.current) return;
            let u = l;
            if ((i = A.event) != null && i.rcbStartSpeakAudio) {
              const d = await r(O.START_SPEAK_AUDIO, { textToRead: u });
              if (d.defaultPrevented) return;
              u = d.data.textToRead;
            }
            Fa(A, u);
          },
          [A, n]
        );
      return { audioToggledOn: e, speakAudio: s, toggleAudio: o };
    },
    ie = () => {
      var A, e;
      const { settings: t } = H(),
        { messages: n, setSyncedMessages: r, syncedMessagesRef: o } = jt(),
        {
          setSyncedIsBotTyping: s,
          setUnreadCount: l,
          syncedIsScrollingRef: a,
          syncedIsChatWindowOpenRef: i,
        } = oA(),
        { streamMessageMap: u, chatBodyRef: d, paramsInputRef: v } = iA(),
        { scrollToBottom: w } = PA(),
        { dispatchRcbEvent: g } = EA(),
        { speakAudio: p } = ro(),
        { playNotificationSound: h } = Lt(),
        m = f.useCallback(
          (B, x = !1) => {
            var R, D;
            Ht(B);
            let T = !0;
            const I = B[B.length - 1];
            if (!I) return;
            const M = I.sender.toUpperCase();
            M === "USER" && (T = !1),
              (R = t.general) != null &&
                R.embedded &&
                no(d.current) &&
                (T = !1),
              ((i.current && !a.current) || x) && (T = !1),
              T && h(),
              !x &&
                ((M !== "USER" &&
                  (D = t.chatWindow) != null &&
                  D.autoJumpToBottom) ||
                  M === "USER" ||
                  !a.current) &&
                setTimeout(() => w(), 1);
          },
          [t, d, i, a, h, w]
        ),
        E = f.useCallback(
          async (B, x = "BOT", R = null) => {
            var D, T, I, M, Z;
            if (typeof B != "string")
              throw new Error(
                "Content must be of type string to simulate stream."
              );
            x = x.toUpperCase();
            let z = LA(B, x);
            if ((D = t.event) != null && D.rcbStartSimulateStreamMessage) {
              const _ = await g(O.START_SIMULATE_STREAM_MESSAGE, {
                message: z,
              });
              if (_.defaultPrevented) return null;
              (R = _.data.simulateStreamChunker || R), (z = _.data.message);
            }
            s(!1);
            let F = 30;
            x === "BOT"
              ? (F = (T = t.botBubble) == null ? void 0 : T.streamSpeed)
              : (F = (I = t.userBubble) == null ? void 0 : I.streamSpeed);
            const W = { ...z, content: "" };
            r((_) => [..._, W]), m(o.current);
            let G = z.content;
            R && (G = R(G));
            let eA = 0;
            const U = G.length;
            z.sender.toUpperCase() === "BOT" &&
              (i.current || ((M = t.general) != null && M.embedded)) &&
              typeof z.content == "string" &&
              z.content.trim() !== "" &&
              p(z.content);
            const X = new Promise((_) => {
              const Y = setInterval(() => {
                if (eA >= U) {
                  clearInterval(Y), _();
                  return;
                }
                r(($) => {
                  const rA = [...$];
                  for (let tA = rA.length - 1; tA >= 0; tA--)
                    if (rA[tA].id === W.id) {
                      const NA = G[eA];
                      NA && ((W.content += NA), (rA[tA] = W)), eA++;
                      break;
                    }
                  return rA;
                });
              }, F);
            });
            return (
              (a.current || !i.current) && l((_) => _ + 1),
              await X,
              Ht(o.current),
              (Z = t.event) != null &&
                Z.rcbStopSimulateStreamMessage &&
                (await g(O.STOP_SIMULATE_STREAM_MESSAGE, { message: z })),
              x === "USER" && (v.current = B),
              z
            );
          },
          [t, g, m, o, v, s, l, i, p]
        ),
        Q = f.useCallback(
          async (B, x = "BOT") => {
            var R, D, T;
            x = x.toUpperCase();
            let I = LA(B, x);
            if ((R = t.event) != null && R.rcbPreInjectMessage) {
              const M = await g(O.PRE_INJECT_MESSAGE, { message: I });
              if (M.defaultPrevented) return null;
              I = M.data.message;
            }
            return (
              I.sender.toUpperCase() === "BOT" &&
                (i.current || ((D = t.general) != null && D.embedded)) &&
                typeof I.content == "string" &&
                I.content.trim() !== "" &&
                p(I.content),
              (a.current || !i.current) && l((M) => M + 1),
              (T = t.event) != null &&
                T.rcbPostInjectMessage &&
                (await g(O.POST_INJECT_MESSAGE, { message: I })),
              r((M) => [...M, I]),
              m(o.current),
              x === "USER" && typeof B == "string" && (v.current = B),
              I
            );
          },
          [t, g, m, v, o, i, p, l]
        ),
        b = f.useCallback(
          async (B) => {
            var x;
            const R = o.current.find((D) => D.id === B);
            return !R ||
              ((x = t.event) != null &&
                x.rcbRemoveMessage &&
                (await g(O.REMOVE_MESSAGE, { message: R })).defaultPrevented)
              ? null
              : (r((D) => D.filter((T) => T.id !== B)),
                m(o.current),
                l((D) => Math.max(D - 1, 0)),
                R);
          },
          [g, (A = t.event) == null ? void 0 : A.rcbRemoveMessage, m, o, l]
        ),
        y = f.useCallback(
          async (B, x = "BOT") => {
            var R, D;
            if (((x = x.toUpperCase()), !u.current.has(x))) {
              const I = LA(B, x);
              return (R = t.event) != null &&
                R.rcbStartStreamMessage &&
                (await g(O.START_STREAM_MESSAGE, { message: I }))
                  .defaultPrevented
                ? null
                : (s(!1),
                  r((M) => [...M, I]),
                  m(o.current),
                  u.current.set(x, I.id),
                  (a.current || !i.current) && l((M) => M + 1),
                  I);
            }
            const T = { ...LA(B, x), id: u.current.get(x) };
            return (D = t.event) != null &&
              D.rcbChunkStreamMessage &&
              (await g(O.CHUNK_STREAM_MESSAGE, { message: T })).defaultPrevented
              ? null
              : (r((I) => I.map((M) => (M.id === T.id ? T : M))),
                m(o.current, !0),
                T);
          },
          [g, t.event, m, o, s, l, u]
        ),
        P = f.useCallback(
          async (B = "BOT") => {
            var x;
            if (((B = B.toUpperCase()), !u.current.has(B))) return !0;
            const R = u.current.get(B);
            let D;
            for (let T = 0; T < 3; T++) {
              const I = o.current.find((M) => M.id === R);
              I && (D = I), await new Promise((M) => setTimeout(M, 20));
            }
            return (x = t.event) != null &&
              x.rcbStopStreamMessage &&
              (await g(O.STOP_STREAM_MESSAGE, { message: D })).defaultPrevented
              ? !1
              : (u.current.delete(B),
                Ht(o.current),
                B === "USER" &&
                  typeof (D == null ? void 0 : D.content) == "string" &&
                  (v.current = D.content),
                !0);
          },
          [g, (e = t.event) == null ? void 0 : e.rcbStopStreamMessage, u, v]
        ),
        S = f.useCallback(
          (B) => {
            r(B), m(B);
          },
          [m]
        );
      return {
        simulateStreamMessage: E,
        injectMessage: Q,
        removeMessage: b,
        streamMessage: y,
        endStreamMessage: P,
        replaceMessages: S,
        messages: n,
      };
    };
  let Ft,
    SA,
    Ye,
    FA = !1,
    QA = null;
  const Nt = () => {
      if (!Ft) {
        const A = window.SpeechRecognition || window.webkitSpeechRecognition;
        Ft = A != null ? new A() : null;
      }
      return Ft;
    },
    Na = (A, e, t, n, r, o, s) => {
      var l;
      (l = A.voice) != null && l.sendAsAudio ? za(t, o) : Ua(A, e, t, n, r, s);
    },
    Ua = (A, e, t, n, r, o) => {
      var s, l, a;
      const i = Nt();
      if (!i) return;
      if (!FA)
        try {
          (FA = !0),
            (i.lang = (s = A.voice) == null ? void 0 : s.language),
            i.start();
        } catch {}
      const u = (l = A.voice) == null ? void 0 : l.timeoutPeriod,
        d = (a = A.voice) == null ? void 0 : a.autoSendPeriod;
      (i.onresult = (v) => {
        var w, g;
        clearTimeout(SA), (SA = null), clearTimeout(Ye);
        const p = v.results[v.results.length - 1][0].transcript;
        if (o.current) {
          const h = (w = A.chatInput) == null ? void 0 : w.characterLimit,
            m = o.current.value + p;
          h != null && h >= 0 && m.length > h ? n(m.slice(0, h)) : n(m),
            r(o.current.value.length);
        }
        u && (SA = setTimeout(async () => await zt(e, o), u)),
          ((g = A.voice) != null && g.autoSendDisabled) ||
            (Ye = setTimeout(t, d));
      }),
        (i.onend = () => {
          FA
            ? (i.start(),
              !SA && u && (SA = setTimeout(async () => await zt(e, o), u)))
            : (clearTimeout(SA), (SA = null), clearTimeout(Ye));
        }),
        u && (SA = setTimeout(async () => await zt(e, o), u));
    },
    za = (A, e) => {
      navigator.mediaDevices
        .getUserMedia({ audio: !0 })
        .then((t) => {
          if (((QA = new MediaRecorder(t)), !FA))
            try {
              (FA = !0), QA.start();
            } catch {}
          (QA.ondataavailable = (n) => {
            e.current && e.current.push(n.data);
          }),
            (QA.onstop = () => {
              A(), t.getTracks().forEach((n) => n.stop());
            });
        })
        .catch((t) => {
          console.error("Unable to use microphone:", t);
        });
    },
    Ut = () => {
      const A = Nt();
      A &&
        ((FA = !1),
        A && A.stop(),
        QA && QA.state !== "inactive" && (QA.stop(), (QA = null)),
        clearTimeout(SA),
        (SA = null),
        clearTimeout(Ye));
    },
    Ga = (A, e) => {
      var t, n, r;
      const o = Nt();
      ((t = e.voice) != null && t.disabled) ||
        !((n = e.chatInput) != null && n.blockSpam) ||
        !o ||
        (A && !FA
          ? ((FA = !0),
            (r = e.voice) != null && r.sendAsAudio
              ? QA == null || QA.start()
              : o.start())
          : A || Ut());
    },
    zt = async (A, e) => {
      var t;
      ((t = e.current) != null && t.disabled) || (await A()), Ut();
    },
    Gt = () => {
      const { settings: A } = H(),
        {
          voiceToggledOn: e,
          setSyncedVoiceToggledOn: t,
          syncedVoiceToggledOnRef: n,
        } = oA(),
        { dispatchRcbEvent: r } = EA(),
        o = f.useCallback(
          async (l) => {
            var a;
            l !== n.current &&
              (((a = A.event) != null &&
                a.rcbToggleVoice &&
                (
                  await r(O.TOGGLE_VOICE, {
                    currState: n.current,
                    newState: !n.current,
                  })
                ).defaultPrevented) ||
                t((i) => !i));
          },
          [n]
        ),
        s = f.useCallback(
          (l) => {
            Ga(l, A);
          },
          [A]
        );
      return { voiceToggledOn: e, toggleVoice: o, syncVoice: s };
    },
    JA = () => {
      const { settings: A } = H(),
        {
          inputLength: e,
          setInputLength: t,
          textAreaDisabled: n,
          setSyncedTextAreaDisabled: r,
          textAreaSensitiveMode: o,
          setSyncedTextAreaSensitiveMode: s,
          syncedTextAreaDisabledRef: l,
          syncedTextAreaSensitiveModeRef: a,
        } = oA(),
        { inputRef: i, chatBodyRef: u, prevInputRef: d } = iA(),
        { dispatchRcbEvent: v } = EA(),
        w = f.useCallback(
          async (b) => {
            var y, P, S;
            if (l.current && i.current) {
              i.current.value = "";
              return;
            }
            if (i.current && d.current !== null) {
              const B = (y = A.chatInput) == null ? void 0 : y.characterLimit,
                x =
                  (P = A.chatInput) != null && P.allowNewline
                    ? b
                    : b.replace(/\n/g, " ");
              if (
                (B != null && B >= 0 && x.length > B
                  ? (i.current.value = x.slice(0, B))
                  : (i.current.value = x),
                (S = A.event) != null &&
                  S.rcbTextAreaChangeValue &&
                  (
                    await v(O.TEXT_AREA_CHANGE_VALUE, {
                      currValue: i.current.value,
                      prevValue: d.current,
                    })
                  ).defaultPrevented)
              ) {
                i.current.value = d.current;
                return;
              }
              d.current = i.current.value;
            }
          },
          [l, i, d, A, v]
        ),
        g = f.useCallback((b) => {
          var y;
          ((y = i.current) != null && y.disabled) ||
            setTimeout(() => {
              var P, S, B;
              (P = A.general) != null && P.embedded
                ? no(u == null ? void 0 : u.current) &&
                  ((S = i.current) == null || S.focus())
                : b !== "start" && ((B = i.current) == null || B.focus());
            }, 100);
        }, []),
        p = f.useCallback(() => {
          i.current && i.current.focus();
        }, []),
        h = f.useCallback(() => {
          i.current && i.current.blur();
        }, []),
        m = f.useCallback(() => (i && i.current ? i.current.value : ""), []),
        E = f.useCallback(
          (b) => {
            b !== l.current && r((y) => !y);
          },
          [l]
        ),
        Q = f.useCallback(
          (b) => {
            b !== a.current && s((y) => !y);
          },
          [a]
        );
      return {
        textAreaDisabled: n,
        setSyncedTextAreaDisabled: r,
        textAreaSensitiveMode: o,
        setSyncedTextAreaSensitiveMode: s,
        inputLength: e,
        setInputLength: t,
        getTextAreaValue: m,
        setTextAreaValue: w,
        updateTextAreaFocus: g,
        focusTextArea: p,
        blurTextArea: h,
        toggleTextAreaDisabled: E,
        toggleTextAreaSensitiveMode: Q,
      };
    },
    oo = f.createContext({
      toasts: [],
      setSyncedToasts: () => {},
      syncedToastsRef: { current: [] },
    }),
    so = () => f.useContext(oo),
    _a = ({ children: A }) => {
      const [e, t, n] = BA([]);
      return c.jsx(oo.Provider, {
        value: { toasts: e, setSyncedToasts: t, syncedToastsRef: n },
        children: A,
      });
    },
    We = () => {
      const { settings: A } = H(),
        { toasts: e, setSyncedToasts: t, syncedToastsRef: n } = so(),
        { dispatchRcbEvent: r } = EA(),
        o = f.useCallback(
          async (a, i) => {
            var u, d, v, w;
            let g = null;
            if (
              n.current.length >=
              (((u = A.toast) == null ? void 0 : u.maxCount) ?? 3)
            ) {
              if ((d = A.toast) != null && d.forbidOnMax) return null;
              g = Ue();
              let h = { id: g, content: a, timeout: i };
              if ((v = A.event) != null && v.rcbShowToast) {
                const m = await r(O.SHOW_TOAST, { toast: h });
                if (m.defaultPrevented) return null;
                h = m.data.toast;
              }
              return t((m) => [...m.slice(1), h]), g;
            }
            g = Ue();
            let p = { id: g, content: a, timeout: i };
            if ((w = A.event) != null && w.rcbShowToast) {
              const h = await r(O.SHOW_TOAST, { toast: p });
              if (h.defaultPrevented) return null;
              p = h.data.toast;
            }
            return t((h) => [...h, p]), g;
          },
          [A, r]
        ),
        s = f.useCallback(
          async (a) => {
            var i;
            const u = n.current.find((d) => d.id === a);
            return !u ||
              ((i = A.event) != null &&
                i.rcbDismissToast &&
                (await r(O.DISMISS_TOAST, { toast: u })).defaultPrevented)
              ? null
              : (t((d) => d.filter((v) => v.id !== a)), a);
          },
          [r]
        ),
        l = f.useCallback((a) => {
          t(a);
        }, []);
      return { showToast: o, dismissToast: s, toasts: e, replaceToasts: l };
    },
    _t = () => {
      var A, e, t, n, r;
      const { settings: o } = H(),
        { paths: s, setSyncedPaths: l, syncedPathsRef: a } = ae(),
        {
          flowRef: i,
          streamMessageMap: u,
          paramsInputRef: d,
          keepVoiceOnRef: v,
          timeoutIdRef: w,
        } = iA(),
        {
          setSyncedIsBotTyping: g,
          setSyncedTextAreaDisabled: p,
          setSyncedTextAreaSensitiveMode: h,
          blockAllowsAttachment: m,
          setBlockAllowsAttachment: E,
        } = oA(),
        { dispatchRcbEvent: Q } = EA(),
        {
          endStreamMessage: b,
          injectMessage: y,
          removeMessage: P,
          simulateStreamMessage: S,
          streamMessage: B,
        } = ie(),
        { showToast: x, dismissToast: R } = We(),
        { toggleChatWindow: D } = PA(),
        { updateTextAreaFocus: T, setTextAreaValue: I } = JA(),
        { syncVoice: M } = Gt(),
        Z = f.useCallback(
          async (U) => {
            var X;
            if ((X = o.event) != null && X.rcbPostProcessBlock) {
              const _ = await Q(O.POST_PROCESS_BLOCK, { block: U });
              if (_.defaultPrevented) return null;
              U = _.data.block;
            }
            return U;
          },
          [(A = o.event) == null ? void 0 : A.rcbPostProcessBlock, Q]
        ),
        z = f.useCallback(
          async (U, X) => {
            var _, Y, $, rA;
            if (!U) return;
            let tA = i.current[U];
            if (!tA) {
              g(!1);
              return;
            }
            if ((_ = o.event) != null && _.rcbPreProcessBlock) {
              const Ke = await Q(O.PRE_PROCESS_BLOCK, { block: tA });
              if (Ke.defaultPrevented) return;
              tA = Ke.data.block;
            }
            g(!0), (Y = o.chatInput) != null && Y.blockSpam && p(!0), h(!1);
            const NA = {
              prevPath: X,
              currPath: U,
              goToPath: G,
              setTextAreaValue: I,
              userInput: d.current,
              endStreamMessage: b,
              injectMessage: y,
              removeMessage: P,
              simulateStreamMessage: S,
              streamMessage: B,
              toggleChatWindow: D,
              showToast: x,
              dismissToast: R,
            };
            await Da(
              tA,
              NA,
              (($ = o.botBubble) == null ? void 0 : $.simulateStream) ?? !1,
              w,
              p,
              h,
              Z
            ),
              g(!1),
              "chatDisabled" in tA ||
                p((rA = o.chatInput) == null ? void 0 : rA.disabled),
              "isSensitive" in tA || h(!1),
              E(typeof tA.file == "function"),
              T(U),
              M(v.current && !tA.chatDisabled),
              U !== X && u.current.clear();
          },
          [
            i,
            T,
            M,
            (e = o.botBubble) == null ? void 0 : e.simulateStream,
            (t = o.chatInput) == null ? void 0 : t.disabled,
            d,
            b,
            y,
            P,
            S,
            B,
            D,
            x,
            R,
            v,
            u,
          ]
        ),
        F = f.useCallback(
          () => (a.current.length > 0 ? a.current.at(-1) ?? null : null),
          []
        ),
        W = f.useCallback(
          () => (a.current.length > 1 ? a.current.at(-2) ?? null : null),
          []
        ),
        G = f.useCallback(
          async (U) => {
            var X;
            const _ = F(),
              Y = W();
            return (X = o.event) != null &&
              X.rcbChangePath &&
              (
                await Q(O.CHANGE_PATH, {
                  currPath: _,
                  prevPath: Y,
                  nextPath: U,
                })
              ).defaultPrevented
              ? !1
              : (l(($) => [...$, U]), await z(U, _), !0);
          },
          [
            (n = o.chatInput) == null ? void 0 : n.blockSpam,
            (r = o.event) == null ? void 0 : r.rcbChangePath,
            z,
            Q,
          ]
        ),
        eA = f.useCallback((U) => {
          l(U);
        }, []);
      return {
        getCurrPath: F,
        getPrevPath: W,
        goToPath: G,
        blockAllowsAttachment: m,
        setBlockAllowsAttachment: E,
        paths: s,
        replacePaths: eA,
        firePostProcessBlockEvent: Z,
      };
    },
    ZA = () => {
      var A, e, t, n;
      const { settings: r } = H(),
        {
          endStreamMessage: o,
          injectMessage: s,
          removeMessage: l,
          simulateStreamMessage: a,
          streamMessage: i,
        } = ie(),
        { syncedPathsRef: u } = ae(),
        {
          getCurrPath: d,
          getPrevPath: v,
          goToPath: w,
          firePostProcessBlockEvent: g,
        } = _t(),
        {
          setSyncedTextAreaSensitiveMode: p,
          setSyncedTextAreaDisabled: h,
          setSyncedIsBotTyping: m,
          setBlockAllowsAttachment: E,
          setInputLength: Q,
          syncedVoiceToggledOnRef: b,
          syncedTextAreaSensitiveModeRef: y,
        } = oA(),
        {
          flowRef: P,
          inputRef: S,
          keepVoiceOnRef: B,
          paramsInputRef: x,
          timeoutIdRef: R,
        } = iA(),
        { showToast: D, dismissToast: T } = We(),
        { dispatchRcbEvent: I } = EA(),
        { syncVoice: M } = Gt(),
        { setTextAreaValue: Z } = JA(),
        { toggleChatWindow: z } = PA(),
        F = f.useCallback(
          async (G) => {
            var eA, U, X, _, Y, $;
            const rA = d();
            if (!(!rA || !P.current[rA])) {
              if (y.current) {
                if (
                  (eA = r == null ? void 0 : r.sensitiveInput) != null &&
                  eA.hideInUserBubble
                )
                  return;
                if (
                  (U = r == null ? void 0 : r.sensitiveInput) != null &&
                  U.maskInUserBubble
                ) {
                  (X = r.userBubble) != null && X.simulateStream
                    ? await a(
                        "*".repeat(
                          ((_ = r.sensitiveInput) == null
                            ? void 0
                            : _.asterisksCount) ?? 10
                        ),
                        "USER"
                      )
                    : await s(
                        "*".repeat(
                          ((Y = r.sensitiveInput) == null
                            ? void 0
                            : Y.asterisksCount) ?? 10
                        ),
                        "USER"
                      );
                  return;
                }
              }
              ($ = r.userBubble) != null && $.simulateStream
                ? await a(G, "USER")
                : await s(G, "USER");
            }
          },
          [P, d, r, s, a, y]
        ),
        W = f.useCallback(
          async (G, eA = !0) => {
            var U, X;
            if (((G = G.trim()), G === "")) return;
            eA && (await F(G)),
              R.current && clearTimeout(R.current),
              S.current && (Z(""), Q(0));
            const _ = d();
            if (!_) return;
            let Y = P.current[_];
            const $ = await g(Y);
            $ &&
              ((U = r.chatInput) != null && U.blockSpam && h(!0),
              (B.current = b.current),
              M(!1),
              setTimeout(() => {
                m(!0);
              }, 400),
              p(!1),
              setTimeout(
                async () => {
                  var rA;
                  const tA = {
                      prevPath: v(),
                      currPath: d(),
                      goToPath: w,
                      setTextAreaValue: Z,
                      userInput: x.current,
                      injectMessage: s,
                      simulateStreamMessage: a,
                      streamMessage: i,
                      removeMessage: l,
                      endStreamMessage: o,
                      toggleChatWindow: z,
                      showToast: D,
                      dismissToast: T,
                    },
                    NA = u.current.length;
                  await qr($, tA),
                    u.current.length === NA &&
                      ("chatDisabled" in Y
                        ? h(!!Y.chatDisabled)
                        : h(!!((rA = r.chatInput) != null && rA.disabled)),
                      Zr(Y, tA, p),
                      E(typeof Y.file == "function"),
                      M(B.current),
                      m(!1));
                },
                (X = r.chatInput) == null ? void 0 : X.botDelay
              ));
          },
          [
            R,
            (A = r.chatInput) == null ? void 0 : A.blockSpam,
            (e = r.chatInput) == null ? void 0 : e.botDelay,
            (t = r.chatInput) == null ? void 0 : t.disabled,
            B,
            b,
            M,
            F,
            v,
            d,
            w,
            s,
            a,
            i,
            l,
            o,
            z,
            D,
            T,
            P,
          ]
        );
      return {
        handleSubmitText: f.useCallback(
          async (G, eA = !0) => {
            var U, X;
            (G = G ?? ((U = S.current) == null ? void 0 : U.value)),
              !(
                ((X = r.event) != null &&
                  X.rcbUserSubmitText &&
                  (
                    await I(O.USER_SUBMIT_TEXT, {
                      inputText: G,
                      sendInChat: eA,
                    })
                  ).defaultPrevented) ||
                !d()
              ) && W(G, eA);
          },
          [I, d, W, S, (n = r.event) == null ? void 0 : n.rcbUserSubmitText]
        ),
      };
    },
    Ve = () => {
      var A;
      const { settings: e } = H();
      return f.useMemo(() => {
        var t;
        if (typeof window > "u" || !window.navigator) return !1;
        if (!((t = e.device) != null && t.applyMobileOptimizations)) return !0;
        const n = navigator.userAgent,
          r =
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              n
            ),
          o = window.innerWidth >= 768;
        return r && o;
      }, [(A = e.device) == null ? void 0 : A.applyMobileOptimizations]);
    },
    Ya = ({ buttons: A }) => {
      var e, t, n, r, o, s, l, a, i, u, d;
      const v = Ve(),
        { settings: w } = H(),
        { styles: g } = V(),
        {
          textAreaDisabled: p,
          textAreaSensitiveMode: h,
          inputLength: m,
          hasFlowStarted: E,
          setHasFlowStarted: Q,
          setInputLength: b,
        } = oA(),
        { inputRef: y } = iA(),
        [P, S] = f.useState(!1),
        [B, x] = f.useState(!1),
        { handleSubmitText: R } = ZA(),
        { setTextAreaValue: D } = JA(),
        T = {
          boxSizing: v ? "content-box" : "border-box",
          ...g.chatInputAreaStyle,
        },
        I = {
          outline: p ? "" : "none",
          boxShadow: p
            ? ""
            : `0 0 5px ${(e = w.general) == null ? void 0 : e.primaryColor}`,
          boxSizing: v ? "content-box" : "border-box",
          ...g.chatInputAreaStyle,
          ...g.chatInputAreaFocusedStyle,
        },
        M = {
          cursor: `url("${
            (t = w.general) == null ? void 0 : t.actionDisabledIcon
          }"), auto`,
          caretColor: "transparent",
          boxSizing: v ? "content-box" : "border-box",
          ...g.chatInputAreaStyle,
          ...g.chatInputAreaDisabledStyle,
        },
        Z = { color: "#989898", ...g.characterLimitStyle },
        z = { color: "#ff0000", ...g.characterLimitReachedStyle },
        F = p
          ? (n = w.chatInput) == null
            ? void 0
            : n.disabledPlaceholderText
          : (r = w.chatInput) == null
          ? void 0
          : r.enabledPlaceholderText,
        W = () => {
          p || S(!0);
        },
        G = () => {
          S(!1);
        },
        eA = () => {
          x(!0);
        },
        U = () => {
          x(!1);
        },
        X = async (Y) => {
          var $;
          if (!B && Y.key === "Enter") {
            if (Y.shiftKey) {
              (($ = w.chatInput) != null && $.allowNewline) ||
                Y.preventDefault();
              return;
            }
            Y.preventDefault(), await R();
          }
        },
        _ = (Y) => {
          y.current && (D(Y.target.value), b(y.current.value.length));
        };
      return c.jsxs("div", {
        "aria-label":
          ((o = w.ariaLabel) == null ? void 0 : o.inputTextArea) ??
          "input text area",
        role: "textbox",
        onMouseDown: (Y) => {
          var $;
          Y.stopPropagation(),
            !E &&
              (($ = w.general) == null ? void 0 : $.flowStartTrigger) ===
                "ON_CHATBOT_INTERACT" &&
              Q(!0);
        },
        style: { ...g.chatInputContainerStyle },
        className: "rcb-chat-input",
        children: [
          h && (s = w.sensitiveInput) != null && s.maskInTextArea
            ? c.jsx("input", {
                ref: y,
                type: "password",
                className: "rcb-chat-input-textarea",
                style: p ? M : P ? I : T,
                placeholder: F,
                onChange: _,
                onKeyDown: X,
                onFocus: W,
                onBlur: G,
                onCompositionStart: eA,
                onCompositionEnd: U,
              })
            : c.jsx("textarea", {
                ref: y,
                style: p ? M : P ? I : T,
                rows: 1,
                className: "rcb-chat-input-textarea",
                placeholder: F,
                onChange: _,
                onKeyDown: X,
                onFocus: W,
                onBlur: G,
                onCompositionStart: eA,
                onCompositionEnd: U,
              }),
          c.jsxs(c.Fragment, {
            children: [
              A == null
                ? void 0
                : A.map((Y, $) => c.jsx(f.Fragment, { children: Y }, $)),
              ((l = w.chatInput) == null ? void 0 : l.showCharacterCount) &&
                ((a = w.chatInput) == null ? void 0 : a.characterLimit) !=
                  null &&
                ((i = w.chatInput) == null ? void 0 : i.characterLimit) > 0 &&
                c.jsxs("div", {
                  className: "rcb-chat-input-char-counter",
                  style:
                    m >= ((u = w.chatInput) == null ? void 0 : u.characterLimit)
                      ? z
                      : Z,
                  children: [
                    m,
                    "/",
                    (d = w.chatInput) == null ? void 0 : d.characterLimit,
                  ],
                }),
            ],
          }),
        ],
      });
    },
    Wa = ({ buttons: A }) => {
      var e;
      const { settings: t } = H(),
        { styles: n } = V();
      return c.jsxs("div", {
        "data-testid": "chatbot-footer-container",
        style: { ...n.footerStyle },
        className: "rcb-chat-footer-container",
        children: [
          c.jsx("div", {
            className: "rcb-chat-footer",
            children:
              A == null
                ? void 0
                : A.map((r, o) => c.jsx(f.Fragment, { children: r }, o)),
          }),
          c.jsx("span", { children: (e = t.footer) == null ? void 0 : e.text }),
        ],
      });
    },
    Va = () => {
      var A, e, t, n, r, o, s;
      const { settings: l } = H(),
        { styles: a } = V(),
        { unreadCount: i } = oA(),
        { isChatWindowOpen: u, toggleChatWindow: d } = PA(),
        v = {
          backgroundImage: `linear-gradient(to right, ${
            (A = l.general) == null ? void 0 : A.secondaryColor
          },
			${(e = l.general) == null ? void 0 : e.primaryColor})`,
          ...a.chatButtonStyle,
        },
        w = {
          backgroundImage: `url(${
            (t = l.chatButton) == null ? void 0 : t.icon
          })`,
          fill: "#fff",
          width: 75,
          height: 75,
          ...a.chatIconStyle,
        },
        g = () => {
          var p;
          const h = (p = l.chatButton) == null ? void 0 : p.icon;
          return !h || typeof h == "string"
            ? c.jsx("span", { className: "rcb-toggle-icon", style: w })
            : h &&
                c.jsx("span", {
                  className: "rcb-toggle-icon",
                  children: c.jsx(h, { style: w }),
                });
        };
      return c.jsx(c.Fragment, {
        children:
          !((n = l.general) != null && n.embedded) &&
          c.jsxs("div", {
            "aria-label":
              ((r = l.ariaLabel) == null ? void 0 : r.chatButton) ??
              "open chat",
            role: "button",
            style: v,
            className: `rcb-toggle-button ${
              u ? "rcb-button-hide" : "rcb-button-show"
            }`,
            onClick: () => d(!0),
            children: [
              g(),
              !((o = l.notification) != null && o.disabled) &&
                ((s = l.notification) == null ? void 0 : s.showCount) &&
                c.jsx("span", {
                  style: { ...a.notificationBadgeStyle },
                  className: "rcb-badge",
                  children: i,
                }),
            ],
          }),
      });
    },
    Xa = () => {
      var A, e, t, n;
      const r = Ve(),
        { settings: o } = H(),
        { styles: s } = V(),
        { isChatWindowOpen: l, toggleChatWindow: a } = PA(),
        [i, u] = f.useState(!1),
        [d, v] = f.useState(!1),
        [w, g] = f.useState(0);
      f.useEffect(() => {
        var m, E, Q;
        const b = (m = o.tooltip) == null ? void 0 : m.mode;
        if (b === "ALWAYS")
          if (r) {
            let y;
            l
              ? (y =
                  (((E = s.chatWindowStyle) == null ? void 0 : E.width) ??
                    375) -
                  (((Q = s.chatButtonStyle) == null ? void 0 : Q.width) ?? 75))
              : (y = 0),
              g(y),
              u(!0);
          } else u(!l);
        else
          b === "NEVER"
            ? u(!1)
            : b === "START"
            ? d
              ? u(!1)
              : (v(!0), u(!0))
            : b === "CLOSE" && u(!l);
      }, [l]);
      const p = {
          transform: `translateX(-${w}px)`,
          right:
            (((A = s.chatButtonStyle) == null ? void 0 : A.width) ?? 75) + 40,
          bottom: 30,
          backgroundColor: (e = o.general) == null ? void 0 : e.secondaryColor,
          color: "#fff",
          ...s.tooltipStyle,
        },
        h = {
          borderColor: `transparent transparent transparent ${p.backgroundColor}`,
        };
      return c.jsx(c.Fragment, {
        children:
          !((t = o.general) != null && t.embedded) &&
          c.jsxs("div", {
            "data-testid": "chat-tooltip",
            style: p,
            className: `rcb-chat-tooltip ${
              i ? "rcb-tooltip-show" : "rcb-tooltip-hide"
            }`,
            onClick: () => a(!0),
            children: [
              c.jsx("span", {
                children: (n = o.tooltip) == null ? void 0 : n.text,
              }),
              c.jsx("span", { className: "rcb-chat-tooltip-tail", style: h }),
            ],
          }),
      });
    },
    Ka = ({ id: A, content: e, timeout: t }) => {
      var n, r;
      const { settings: o } = H(),
        { styles: s } = V(),
        [l] = f.useState({
          toastPromptStyle: { ...s.toastPromptStyle },
          toastPromptHoveredStyle: { ...s.toastPromptHoveredStyle },
        }),
        { dismissToast: a } = We(),
        [i, u] = f.useState(!1),
        d = {
          color: (n = o.general) == null ? void 0 : n.primaryColor,
          borderColor: (r = o.general) == null ? void 0 : r.primaryColor,
          ...l.toastPromptHoveredStyle,
        };
      return (
        f.useEffect(() => {
          if (t) {
            const v = setTimeout(() => {
              a(A);
            }, t);
            return () => clearTimeout(v);
          }
        }, [A, a, t]),
        typeof e == "string"
          ? c.jsx("div", {
              onMouseEnter: () => {
                u(!0);
              },
              onMouseLeave: () => {
                u(!1);
              },
              style: i ? d : l.toastPromptStyle,
              onMouseDown: async (v) => {
                var w;
                (w = o.toast) != null &&
                  w.dismissOnClick &&
                  (v.preventDefault(), await a(A));
              },
              className: "rcb-toast-prompt",
              children: e,
            })
          : c.jsx(c.Fragment, { children: e })
      );
    },
    Ja = () => {
      var A, e, t, n;
      const { styles: r } = V(),
        { toasts: o } = so(),
        s = {
          bottom:
            (((A = r.footerStyle) == null ? void 0 : A.height) ?? 50) +
            (((e = r.chatInputContainerStyle) == null ? void 0 : e.height) ??
              70) +
            20,
          width: 300,
          minWidth:
            (((t = r.chatWindowStyle) == null ? void 0 : t.width) ?? 375) / 2,
          maxWidth:
            (((n = r.chatWindowStyle) == null ? void 0 : n.width) ?? 375) - 50,
          ...r.toastPromptContainerStyle,
        };
      return c.jsx("div", {
        className: "rcb-toast-prompt-container",
        style: s,
        children: o.map((l) =>
          c.jsx(Ka, { id: l.id, content: l.content, timeout: l.timeout }, l.id)
        ),
      });
    },
    lo = ({ file: A, fileType: e, fileUrl: t }) => {
      var n, r, o;
      const { settings: s } = H(),
        { styles: l } = V(),
        a = {
          backgroundColor: (n = s.general) == null ? void 0 : n.primaryColor,
          maxWidth: (r = s.userBubble) != null && r.showAvatar ? "65%" : "70%",
          ...l.mediaDisplayContainerStyle,
        };
      return c.jsx(c.Fragment, {
        children: t
          ? c.jsxs(c.Fragment, {
              children: [
                e === "image" &&
                  t &&
                  c.jsx("div", {
                    style: a,
                    className:
                      "rcb-media-display-image-container rcb-media-entry",
                    "data-testid": "media-display-image-container",
                    children: c.jsx("img", {
                      src: t,
                      alt: "Image Display",
                      className: "rcb-media-display-image",
                    }),
                  }),
                e === "video" &&
                  t &&
                  c.jsx("div", {
                    style: a,
                    className:
                      "rcb-media-display-video-container rcb-media-entry",
                    "data-testid": "media-display-video-container",
                    children: c.jsxs("video", {
                      controls: !0,
                      className: "rcb-media-display-video",
                      children: [
                        c.jsx("source", { src: t, type: A.type }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                  }),
                e === "audio" &&
                  t &&
                  c.jsxs("audio", {
                    "data-testid": "media-display-audio-container",
                    style: {
                      maxWidth:
                        (o = s.userBubble) != null && o.showAvatar
                          ? "65%"
                          : "70%",
                    },
                    controls: !0,
                    className: "rcb-media-display-audio rcb-media-entry",
                    children: [
                      c.jsx("source", { src: t, type: A.type }),
                      "Your browser does not support the audio tag.",
                    ],
                  }),
              ],
            })
          : c.jsx(c.Fragment, {}),
      });
    },
    ao = async (A) => {
      if (!A) return { fileType: null, fileUrl: null };
      const e = A.type.split("/")[0];
      if (!["image", "video", "audio"].includes(e))
        return { fileType: null, fileUrl: null };
      try {
        const t = await new Promise((n, r) => {
          const o = new FileReader();
          (o.onload = () => n(o.result)),
            (o.onerror = () => r(new Error("File reading failed"))),
            o.readAsDataURL(A);
        });
        return { fileType: e, fileUrl: t };
      } catch (t) {
        return console.error(t), { fileType: null, fileUrl: null };
      }
    },
    Za = () => {
      var A, e, t, n, r, o;
      const { settings: s } = H(),
        { styles: l } = V(),
        {
          injectMessage: a,
          simulateStreamMessage: i,
          streamMessage: u,
          removeMessage: d,
          endStreamMessage: v,
        } = ie(),
        {
          getCurrPath: w,
          getPrevPath: g,
          goToPath: p,
          blockAllowsAttachment: h,
        } = _t(),
        { flowRef: m, inputRef: E } = iA(),
        Q = m.current,
        { showToast: b, dismissToast: y } = We(),
        { dispatchRcbEvent: P } = EA(),
        { toggleChatWindow: S } = PA(),
        { setTextAreaValue: B } = JA(),
        { handleSubmitText: x } = ZA(),
        R = {
          cursor: `url("${
            (A = s.general) == null ? void 0 : A.actionDisabledIcon
          }"), auto`,
          ...l.fileAttachmentButtonStyle,
          ...l.fileAttachmentButtonDisabledStyle,
        },
        D = {
          backgroundImage: `url(${
            (e = s.fileAttachment) == null ? void 0 : e.icon
          })`,
          fill: "#a6a6a6",
          ...l.fileAttachmentIconStyle,
        },
        T = {
          backgroundImage: `url(${
            (t = s.fileAttachment) == null ? void 0 : t.icon
          })`,
          fill: "#a6a6a6",
          ...l.fileAttachmentIconStyle,
          ...l.fileAttachmentIconDisabledStyle,
        },
        I = async (Z) => {
          var z, F, W, G;
          const eA = Z.target.files;
          if (!eA) return;
          const U = Array.from(eA);
          if (
            ((Z.target.value = ""),
            (z = s.event) != null &&
              z.rcbUserUploadFile &&
              (await P(O.USER_UPLOAD_FILE, { files: U })).defaultPrevented)
          )
            return;
          const X = w();
          if (!X) return;
          const _ = Q[X];
          if (!_) return;
          const Y = _.file;
          if (Y != null) {
            const $ = [];
            for (let rA = 0; rA < U.length; rA++) {
              if (
                ($.push(U[rA].name),
                !((F = s.fileAttachment) != null && F.showMediaDisplay))
              )
                continue;
              const tA = await ao(U[rA]);
              !tA.fileType ||
                !tA.fileUrl ||
                (await a(
                  c.jsx(lo, {
                    file: U[rA],
                    fileType: tA.fileType,
                    fileUrl: tA.fileUrl,
                  }),
                  "USER"
                ));
            }
            await x(
              "📄 " + $.join(", "),
              (W = s.fileAttachment) == null ? void 0 : W.sendFileName
            ),
              await Y({
                userInput: (G = E.current) == null ? void 0 : G.value,
                prevPath: g(),
                currPath: w(),
                goToPath: p,
                setTextAreaValue: B,
                injectMessage: a,
                simulateStreamMessage: i,
                streamMessage: u,
                removeMessage: d,
                endStreamMessage: v,
                toggleChatWindow: S,
                showToast: b,
                dismissToast: y,
                files: U,
              });
          }
        },
        M = () => {
          var Z, z;
          const F = h
            ? (Z = s.fileAttachment) == null
              ? void 0
              : Z.icon
            : (z = s.fileAttachment) == null
            ? void 0
            : z.iconDisabled;
          return !F || typeof F == "string"
            ? c.jsx("span", {
                className: h
                  ? "rcb-attach-icon-enabled"
                  : "rcb-attach-icon-disabled",
                style: h ? D : T,
              })
            : F &&
                c.jsx("span", {
                  className: h
                    ? "rcb-attach-icon-enabled"
                    : "rcb-attach-icon-disabled",
                  children: c.jsx(F, { style: h ? D : T }),
                });
        };
      return c.jsxs("label", {
        "aria-label":
          ((n = s.ariaLabel) == null ? void 0 : n.fileAttachmentButton) ??
          "upload file",
        role: "button",
        className: h
          ? "rcb-attach-button-enabled"
          : "rcb-attach-button-disabled",
        style: h ? { ...l.fileAttachmentButtonStyle } : R,
        children: [
          c.jsx("input", {
            className: "rcb-attach-input",
            role: "file",
            type: "file",
            onChange: I,
            multiple: (r = s.fileAttachment) == null ? void 0 : r.multiple,
            accept: (o = s.fileAttachment) == null ? void 0 : o.accept,
            disabled: !h,
          }),
          M(),
        ],
      });
    },
    qa = () => {
      var A, e, t, n, r, o;
      const { settings: s } = H(),
        { styles: l } = V(),
        { syncedTextAreaDisabledRef: a } = oA(),
        { inputRef: i } = iA(),
        { textAreaDisabled: u, setTextAreaValue: d } = JA(),
        v = f.useRef(null),
        w = f.useRef(null),
        [g, p] = f.useState(!1),
        h = {
          cursor: `url("${
            (A = s.general) == null ? void 0 : A.actionDisabledIcon
          }"), auto`,
          ...l.emojiButtonStyle,
          ...l.emojiButtonDisabledStyle,
        },
        m = {
          backgroundImage: `url(${(e = s.emoji) == null ? void 0 : e.icon})`,
          fill: "#a6a6a6",
          ...l.emojiIconStyle,
        },
        E = {
          backgroundImage: `url(${(t = s.emoji) == null ? void 0 : t.icon})`,
          fill: "#a6a6a6",
          ...l.emojiIconStyle,
          ...l.emojiIconDisabledStyle,
        };
      f.useEffect(() => {
        const P = (x) => {
            const R = x.composedPath();
            v.current &&
              !R.includes(v.current) &&
              w.current &&
              !R.includes(w.current) &&
              p(!1);
          },
          S = () => {
            if (v.current && w.current) {
              const x = w.current.getBoundingClientRect(),
                R = v.current.offsetHeight,
                D = x.top - R - 8;
              (v.current.style.left = `${x.left}px`),
                (v.current.style.top = `${D}px`);
            }
          },
          B = () => {
            S();
          };
        return (
          document.addEventListener("mousedown", P),
          window.addEventListener("resize", B),
          () => {
            document.removeEventListener("mousedown", P),
              window.removeEventListener("resize", B);
          }
        );
      }, []);
      const Q = (P, S) => {
          P.preventDefault(),
            i.current &&
              (d(i.current.value + S),
              setTimeout(() => {
                const B = i.current;
                if (B) {
                  B.focus();
                  const x = B.value.length;
                  B.setSelectionRange(x, x);
                }
              }, 50)),
            p(!1);
        },
        b = (P) => {
          P.preventDefault(), a.current ? p(!1) : p((S) => !S);
        },
        y = () => {
          var P, S;
          const B = u
            ? (P = s.emoji) == null
              ? void 0
              : P.iconDisabled
            : (S = s.emoji) == null
            ? void 0
            : S.icon;
          return !B || typeof B == "string"
            ? c.jsx("span", {
                className: `${
                  u ? "rcb-emoji-icon-disabled" : "rcb-emoji-icon-enabled"
                }`,
                style: u ? E : m,
              })
            : B &&
                c.jsx("span", {
                  className: `${
                    u ? "rcb-emoji-icon-disabled" : "rcb-emoji-icon-enabled"
                  }`,
                  children: c.jsx(B, { style: u ? E : m }),
                });
        };
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx("div", {
            "aria-label":
              ((n = s.ariaLabel) == null ? void 0 : n.emojiButton) ??
              "emoji picker",
            role: "button",
            ref: w,
            className: `${
              u ? "rcb-emoji-button-disabled" : "rcb-emoji-button-enabled"
            }`,
            style: u ? h : { ...l.emojiButtonStyle },
            onMouseDown: b,
            children: y(),
          }),
          g &&
            c.jsx("div", {
              className: "rcb-emoji-button-popup",
              ref: v,
              children:
                (o = (r = s.emoji) == null ? void 0 : r.list) == null
                  ? void 0
                  : o.map((P, S) =>
                      c.jsx(
                        "span",
                        {
                          className: "rcb-emoji",
                          onMouseDown: (B) => Q(B, P),
                          children: P,
                        },
                        S
                      )
                    ),
            }),
        ],
      });
    },
    $a = () => {
      var A, e, t;
      const { settings: n } = H(),
        { styles: r } = V(),
        { audioToggledOn: o, toggleAudio: s } = ro(),
        l = {
          backgroundImage: `url(${(A = n.audio) == null ? void 0 : A.icon})`,
          fill: "#fcec3d",
          ...r.audioIconStyle,
        },
        a = {
          backgroundImage: `url(${
            (e = n.audio) == null ? void 0 : e.iconDisabled
          })`,
          fill: "#e8eaed",
          ...r.audioIconStyle,
          ...r.audioIconDisabledStyle,
        },
        i = () => {
          var u, d;
          const v = o
            ? (u = n.audio) == null
              ? void 0
              : u.icon
            : (d = n.audio) == null
            ? void 0
            : d.iconDisabled;
          return !v || typeof v == "string"
            ? c.jsx("span", {
                className: "rcb-audio-icon",
                "data-testid": "rcb-audio-icon",
                style: o ? l : a,
              })
            : v &&
                c.jsx("span", {
                  className: "rcb-audio-icon",
                  "data-testid": "rcb-audio-icon",
                  children: c.jsx(v, {
                    style: o ? l : a,
                    "data-testid": "rcb-audio-icon-svg",
                  }),
                });
        };
      return c.jsx("div", {
        "aria-label":
          ((t = n.ariaLabel) == null ? void 0 : t.audioButton) ??
          "toggle audio",
        role: "button",
        onMouseDown: async (u) => {
          u.preventDefault(), await s();
        },
        style: o
          ? { ...r.audioButtonStyle }
          : { ...r.audioButtonStyle, ...r.audioButtonDisabledStyle },
        children: i(),
      });
    },
    Ai = () => {
      var A, e;
      const { settings: t } = H(),
        { styles: n } = V(),
        { toggleChatWindow: r } = PA(),
        o = {
          backgroundImage: `url(${
            (A = t.header) == null ? void 0 : A.closeChatIcon
          })`,
          fill: "#e8eaed",
          stroke: "#e8eaed",
          ...n.closeChatIconStyle,
        },
        s = () => {
          var l;
          const a = (l = t.header) == null ? void 0 : l.closeChatIcon;
          return !a || typeof a == "string"
            ? c.jsx("span", {
                className: "rcb-close-chat-icon",
                "data-testid": "rcb-close-chat-icon",
                style: o,
              })
            : a &&
                c.jsx("span", {
                  className: "rcb-close-chat-icon",
                  "data-testid": "rcb-close-chat-icon",
                  children: c.jsx(a, { style: o }),
                });
        };
      return c.jsx("div", {
        "aria-label":
          ((e = t.ariaLabel) == null ? void 0 : e.closeChatButton) ??
          "close chat",
        role: "button",
        onMouseDown: (l) => {
          l.stopPropagation(), r(!1);
        },
        style: { ...n.closeChatButtonStyle },
        children: s(),
      });
    },
    ei = () => {
      const {
        notificationsToggledOn: A,
        toggleNotifications: e,
        playNotificationSound: t,
      } = Lt();
      return {
        notificationsToggledOn: A,
        toggleNotifications: e,
        playNotificationSound: t,
      };
    },
    ti = () => {
      var A, e, t;
      const { settings: n } = H(),
        { styles: r } = V(),
        { notificationsToggledOn: o, toggleNotifications: s } = ei(),
        l = {
          backgroundImage: `url(${
            (A = n.notification) == null ? void 0 : A.icon
          })`,
          fill: "#fcec3d",
          ...r.notificationIconStyle,
        },
        a = {
          backgroundImage: `url(${
            (e = n.notification) == null ? void 0 : e.iconDisabled
          })`,
          fill: "#e8eaed",
          ...r.notificationIconStyle,
          ...r.notificationIconDisabledStyle,
        },
        i = () => {
          var u, d;
          const v = o
            ? (u = n.notification) == null
              ? void 0
              : u.icon
            : (d = n.notification) == null
            ? void 0
            : d.iconDisabled;
          return !v || typeof v == "string"
            ? c.jsx("span", {
                className: "rcb-notification-icon",
                "data-testid": "rcb-notification-icon",
                style: o ? l : a,
              })
            : v &&
                c.jsx("span", {
                  className: "rcb-notification-icon",
                  "data-testid": "rcb-notification-icon",
                  children: c.jsx(v, {
                    style: o ? l : a,
                    "data-testid": "rcb-notification-icon-svg",
                  }),
                });
        };
      return c.jsx("div", {
        "aria-label":
          ((t = n.ariaLabel) == null ? void 0 : t.notificationButton) ??
          "toggle notifications",
        role: "button",
        onMouseDown: async (u) => {
          u.preventDefault(), await s();
        },
        style: o
          ? { ...r.notificationButtonStyle }
          : {
              ...r.notificationButtonStyle,
              ...r.notificationButtonDisabledStyle,
            },
        children: i(),
      });
    },
    ni = () => {
      var A, e, t;
      const { settings: n } = H(),
        { styles: r } = V(),
        { injectMessage: o } = ie(),
        { inputRef: s } = iA(),
        { voiceToggledOn: l, toggleVoice: a } = Gt(),
        { setInputLength: i, setTextAreaValue: u, textAreaDisabled: d } = JA(),
        { handleSubmitText: v } = ZA(),
        w = f.useRef([]),
        [g, p] = f.useState(!1);
      f.useEffect(() => {
        var y;
        (y = n.voice) != null && y.sendAsAudio ? (Q(), (w.current = [])) : v();
      }, [g]),
        f.useEffect(() => {
          l ? Na(n, a, E, u, i, w, s) : Ut();
        }, [l]);
      const h = {
          backgroundImage: `url(${(A = n.voice) == null ? void 0 : A.icon})`,
          fill: "#9aa0a6",
          ...r.voiceIconStyle,
        },
        m = {
          backgroundImage: `url(${
            (e = n.voice) == null ? void 0 : e.iconDisabled
          })`,
          fill: "#9aa0a6",
          ...r.voiceIconStyle,
          ...r.voiceIconDisabledStyle,
        },
        E = () => {
          p((y) => !y);
        },
        Q = async () => {
          const y = new Blob(w.current, { type: "audio/wav" }),
            P = new File([y], "voice-input.wav", { type: "audio/wav" }),
            S = await ao(P);
          !S.fileType ||
            !S.fileUrl ||
            (await o(
              c.jsx(lo, { file: P, fileType: S.fileType, fileUrl: S.fileUrl }),
              "USER"
            ));
        },
        b = () => {
          var y, P;
          const S = l
            ? (y = n.voice) == null
              ? void 0
              : y.icon
            : (P = n.voice) == null
            ? void 0
            : P.iconDisabled;
          return !S || typeof S == "string"
            ? c.jsx("span", {
                className: `rcb-voice-icon${l && !d ? "-on" : ""}`,
                "data-testid": "rcb-voice-icon",
                style: l && !d ? h : m,
              })
            : S &&
                c.jsx("span", {
                  className: `rcb-voice-icon ${l && !d ? "on" : ""}`,
                  children: c.jsx(S, { style: l && !d ? h : m }),
                });
        };
      return c.jsx("div", {
        "aria-label":
          ((t = n.ariaLabel) == null ? void 0 : t.voiceButton) ??
          "toggle voice",
        role: "button",
        onMouseDown: async (y) => {
          y.preventDefault(), !d && (await a());
        },
        style:
          l && !d
            ? { ...r.voiceButtonStyle }
            : { ...r.voiceButtonStyle, ...r.voiceButtonDisabledStyle },
        className:
          l && !d ? "rcb-voice-button-enabled" : "rcb-voice-button-disabled",
        children: b(),
      });
    },
    ri = () => {
      var A, e, t, n, r, o, s, l;
      const { settings: a } = H(),
        { styles: i } = V(),
        { textAreaDisabled: u } = oA(),
        [d, v] = f.useState(!1),
        { handleSubmitText: w } = ZA(),
        g = {
          backgroundColor: (A = a.general) == null ? void 0 : A.primaryColor,
          ...i.sendButtonStyle,
        },
        p = {
          cursor: `url("${
            (e = a.general) == null ? void 0 : e.actionDisabledIcon
          }"), auto`,
          backgroundColor: (t = a.general) == null ? void 0 : t.primaryColor,
          ...i.sendButtonStyle,
          ...i.sendButtonDisabledStyle,
        },
        h = {
          backgroundColor: (n = a.general) == null ? void 0 : n.secondaryColor,
          ...i.sendButtonStyle,
          ...i.sendButtonHoveredStyle,
        },
        m = {
          backgroundImage: `url(${
            (r = a.chatInput) == null ? void 0 : r.sendButtonIcon
          })`,
          fill: "#fff",
          ...i.sendIconStyle,
        },
        E = {
          backgroundImage: `url(${
            (o = a.chatInput) == null ? void 0 : o.sendButtonIcon
          })`,
          fill: "#fff",
          ...i.sendIconStyle,
          ...i.sendIconDisabledStyle,
        },
        Q = {
          backgroundImage: `url(${
            (s = a.chatInput) == null ? void 0 : s.sendButtonIcon
          })`,
          fill: "#fff",
          ...i.sendIconStyle,
          ...i.sendIconHoveredStyle,
        },
        b = () => {
          v(!0);
        },
        y = () => {
          v(!1);
        },
        P = () => {
          var S;
          const B = (S = a.chatInput) == null ? void 0 : S.sendButtonIcon;
          return !B || typeof B == "string"
            ? c.jsx("span", {
                className: "rcb-send-icon",
                "data-testid": "rcb-send-icon",
                style: u ? E : d ? Q : m,
              })
            : B &&
                c.jsx("span", {
                  className: "rcb-send-icon",
                  "data-testid": "rcb-send-icon",
                  children: c.jsx(B, { style: u ? E : d ? Q : m }),
                });
        };
      return c.jsx("div", {
        "aria-label":
          ((l = a.ariaLabel) == null ? void 0 : l.sendButton) ?? "send message",
        role: "button",
        onMouseEnter: b,
        onMouseLeave: y,
        onMouseDown: async (S) => {
          S == null || S.preventDefault(), !u && (await w());
        },
        style: u ? p : d ? h : g,
        className: "rcb-send-button",
        children: P(),
      });
    },
    oi = (A) => Object.values(nA).includes(A),
    si = (A, e) => {
      var t, n, r, o, s, l, a, i, u;
      const d = {
          [nA.AUDIO_BUTTON]: (t = A.audio) == null ? void 0 : t.disabled,
          [nA.CLOSE_CHAT_BUTTON]: (n = A.general) == null ? void 0 : n.embedded,
          [nA.EMOJI_PICKER_BUTTON]: (r = A.emoji) == null ? void 0 : r.disabled,
          [nA.FILE_ATTACHMENT_BUTTON]:
            (o = A.fileAttachment) == null ? void 0 : o.disabled,
          [nA.NOTIFICATION_BUTTON]:
            (s = A.notification) == null ? void 0 : s.disabled,
          [nA.SEND_MESSAGE_BUTTON]: !1,
          [nA.VOICE_MESSAGE_BUTTON]:
            (l = A.voice) == null ? void 0 : l.disabled,
        },
        v = {},
        w = (m) =>
          m
            ? m
                .map((E) => {
                  if (typeof E == "string") {
                    if (oi(E) && !d[E]) {
                      if (v[E]) return v[E];
                      const Q = e[E];
                      if (typeof Q == "function") {
                        const b = Q();
                        return (v[E] = b), b;
                      }
                      return null;
                    }
                    return null;
                  }
                  return E;
                })
                .filter((E) => E !== null)
            : [],
        g = w((a = A.header) == null ? void 0 : a.buttons),
        p = w((i = A.chatInput) == null ? void 0 : i.buttons),
        h = w((u = A.footer) == null ? void 0 : u.buttons);
      return { header: g, chatInput: p, footer: h };
    },
    li = () => c.jsx($a, {}),
    ai = () => c.jsx(ti, {}),
    ii = () => c.jsx(Ai, {}),
    ui = () => c.jsx(ni, {}),
    ci = () => c.jsx(ri, {}),
    fi = () => c.jsx(Za, {}),
    di = () => c.jsx(qa, {}),
    vi = () => {
      const { settings: A } = H(),
        e = f.useMemo(
          () => ({
            [nA.CLOSE_CHAT_BUTTON]: () => ii(),
            [nA.AUDIO_BUTTON]: () => li(),
            [nA.NOTIFICATION_BUTTON]: () => ai(),
            [nA.EMOJI_PICKER_BUTTON]: () => di(),
            [nA.FILE_ATTACHMENT_BUTTON]: () => fi(),
            [nA.SEND_MESSAGE_BUTTON]: () => ci(),
            [nA.VOICE_MESSAGE_BUTTON]: () => ui(),
          }),
          []
        ),
        {
          header: t,
          chatInput: n,
          footer: r,
        } = f.useMemo(() => si(A, e), [A, e]),
        o = f.useMemo(() => t, [t]),
        s = f.useMemo(() => n, [n]),
        l = f.useMemo(() => r, [r]);
      return { headerButtons: o, chatInputButtons: s, footerButtons: l };
    },
    io = () => {
      const { settings: A } = H(),
        { styles: e } = V(),
        { setSyncedMessages: t, syncedMessagesRef: n } = jt(),
        {
          isLoadingChatHistory: r,
          setIsLoadingChatHistory: o,
          hasChatHistoryLoaded: s,
          setHasChatHistoryLoaded: l,
        } = oA(),
        { chatBodyRef: a } = iA(),
        { dispatchRcbEvent: i } = EA(),
        u = f.useCallback(async () => {
          var d, v;
          const w = eo();
          if (
            !w ||
            ((d = A.event) != null &&
              d.rcbLoadChatHistory &&
              (await i(O.LOAD_CHAT_HISTORY, {})).defaultPrevented)
          )
            return;
          o(!0);
          const g = ((v = a.current) == null ? void 0 : v.scrollHeight) ?? 0;
          Ia(A, e, w, t, n, a, g, o, l);
        }, [A, e, i, n, a, o, l]);
      return {
        isLoadingChatHistory: r,
        setIsLoadingChatHistory: o,
        hasChatHistoryLoaded: s,
        showChatHistory: u,
      };
    },
    gi = () => {
      var A, e, t;
      const { settings: n } = H(),
        { styles: r } = V(),
        { showChatHistory: o } = io(),
        [s, l] = f.useState(!1),
        a = {
          color: (A = n.general) == null ? void 0 : A.primaryColor,
          borderColor: (e = n.general) == null ? void 0 : e.primaryColor,
          ...r.chatHistoryButtonStyle,
          ...r.chatHistoryButtonHoveredStyle,
        };
      return c.jsx("div", {
        className: "rcb-view-history-container",
        children: c.jsx("div", {
          onMouseEnter: () => {
            l(!0);
          },
          onMouseLeave: () => {
            l(!1);
          },
          style: s ? a : { ...r.chatHistoryButtonStyle },
          onMouseDown: (i) => {
            i.preventDefault(), o();
          },
          className: "rcb-view-history-button",
          role: "button",
          tabIndex: 0,
          children: c.jsx("p", {
            children:
              (t = n.chatHistory) == null
                ? void 0
                : t.viewChatHistoryButtonText,
          }),
        }),
      });
    },
    wi = () => {
      var A;
      const { settings: e } = H(),
        {
          hasInteractedPage: t,
          setHasInteractedPage: n,
          hasFlowStarted: r,
          setHasFlowStarted: o,
        } = oA(),
        s = f.useCallback(() => {
          var l;
          if (
            (n(!0),
            !r &&
              ((l = e.general) == null ? void 0 : l.flowStartTrigger) ===
                "ON_PAGE_INTERACT" &&
              o(!0),
            !window.SpeechSynthesisUtterance)
          ) {
            console.info(
              "Speech Synthesis API is not supported in this environment."
            );
            return;
          }
          const a = new window.SpeechSynthesisUtterance();
          (a.text = ""),
            (a.onend = () => {
              window.removeEventListener("click", s),
                window.removeEventListener("keydown", s),
                window.removeEventListener("touchstart", s);
            }),
            window.speechSynthesis.speak(a);
        }, [r, (A = e.general) == null ? void 0 : A.flowStartTrigger]);
      return { hasInteractedPage: t, handleFirstInteraction: s };
    },
    hi = () => {
      var A, e, t, n;
      const r = Ve(),
        { settings: o } = H(),
        { replaceMessages: s } = ie(),
        {
          isBotTyping: l,
          isChatWindowOpen: a,
          setUnreadCount: i,
          setSyncedIsChatWindowOpen: u,
          setSyncedTextAreaDisabled: d,
          setSyncedAudioToggledOn: v,
          setSyncedVoiceToggledOn: w,
          setSyncedIsScrolling: g,
          syncedIsScrollingRef: p,
          syncedIsChatWindowOpenRef: h,
        } = oA(),
        { chatBodyRef: m } = iA(),
        {
          viewportHeight: E,
          setViewportHeight: Q,
          setViewportWidth: b,
          scrollToBottom: y,
        } = PA(),
        { setUpNotifications: P } = Lt(),
        { handleFirstInteraction: S } = wi(),
        { showChatHistory: B } = io(),
        x = f.useRef(0),
        R = f.useRef(!1);
      f.useEffect(
        () => (
          window.addEventListener("click", S),
          window.addEventListener("keydown", S),
          window.addEventListener("touchstart", S),
          () => {
            window.removeEventListener("click", S),
              window.removeEventListener("keydown", S),
              window.removeEventListener("touchstart", S);
          }
        ),
        []
      ),
        f.useEffect(() => {
          const D = m.current;
          if (!D) return;
          const T = () => {
            R.current ||
              ((R.current = !0),
              requestAnimationFrame(() => {
                var I, M;
                if (!D) return;
                const { scrollTop: Z, clientHeight: z, scrollHeight: F } = D,
                  W =
                    Z + z <
                    F -
                      (((I = o.chatWindow) == null
                        ? void 0
                        : I.messagePromptOffset) ?? 30);
                g(W),
                  (p.current = W),
                  W ||
                    (Z + z >= F - 1 && (D.scrollTop = F - z - 1),
                    (h.current || ((M = o.general) != null && M.embedded)) &&
                      i(0)),
                  (R.current = !1);
              }));
          };
          return (
            D.addEventListener("wheel", T, { passive: !0 }),
            D.addEventListener("touchmove", T, { passive: !0 }),
            () => {
              D.removeEventListener("wheel", T),
                D.removeEventListener("touchmove", T);
            }
          );
        }, []),
        f.useEffect(() => {
          var D, T, I;
          d((D = o.chatInput) == null ? void 0 : D.disabled),
            u((T = o.chatWindow) == null ? void 0 : T.defaultOpen),
            v((I = o.audio) == null ? void 0 : I.defaultToggledOn),
            setTimeout(() => {
              var M;
              w((M = o.voice) == null ? void 0 : M.defaultToggledOn);
            }, 1);
        }, []),
        f.useEffect(() => {
          var D;
          ((D = o.notification) != null && D.disabled) || P();
        }, [(A = o.notification) == null ? void 0 : A.disabled]),
        f.useEffect(() => {
          !p.current && m != null && m.current && y();
        }, [l]),
        f.useEffect(() => {
          var D, T;
          if ((D = o.chatHistory) != null && D.disabled) xa();
          else if ((ka(o), eo().length > 0)) {
            const I = LA(c.jsx(gi, {}), "SYSTEM");
            s([I]), (T = o.chatHistory) != null && T.autoLoad && B();
          }
        }, [
          (e = o.chatHistory) == null ? void 0 : e.storageKey,
          (t = o.chatHistory) == null ? void 0 : t.maxEntries,
          (n = o.chatHistory) == null ? void 0 : n.disabled,
        ]),
        f.useEffect(() => {
          var D;
          r ||
            ((D = o.general) != null && D.embedded) ||
            !navigator.virtualKeyboard ||
            ((navigator.virtualKeyboard.overlaysContent = !0),
            navigator.virtualKeyboard.addEventListener(
              "geometrychange",
              (T) => {
                if (!T.target) return;
                const {
                  x: I,
                  y: M,
                  width: Z,
                  height: z,
                } = T.target.boundingRect;
                I == 0 && M == 0 && Z == 0 && z == 0
                  ? (setTimeout(() => {
                      var F;
                      Q(
                        (F = window.visualViewport) == null ? void 0 : F.height
                      );
                    }, 101),
                    setTimeout(() => {
                      var F, W;
                      E !=
                        ((F = window.visualViewport) == null
                          ? void 0
                          : F.height) &&
                        Q(
                          (W = window.visualViewport) == null
                            ? void 0
                            : W.height
                        );
                    }, 1001))
                  : setTimeout(() => {
                      var F;
                      Q(
                        ((F = window.visualViewport) == null
                          ? void 0
                          : F.height) - z
                      );
                    }, 101);
              }
            ));
        }, [r]),
        f.useEffect(() => {
          var D, T, I, M;
          if (r) return;
          a &&
            (Q((D = window.visualViewport) == null ? void 0 : D.height),
            b((T = window.visualViewport) == null ? void 0 : T.width));
          const Z = () =>
              window.scrollTo({ top: 0, left: 0, behavior: "auto" }),
            z = () => (x.current = window.scrollY),
            F = () => {
              var G, eA;
              Q((G = window.visualViewport) == null ? void 0 : G.height),
                b((eA = window.visualViewport) == null ? void 0 : eA.width);
            },
            W = () => {
              var G;
              window.removeEventListener("scroll", Z),
                window.removeEventListener("scroll", z),
                (G = window.visualViewport) == null ||
                  G.removeEventListener("resize", F);
            };
          return (
            a
              ? (W(),
                (document.body.style.position = "fixed"),
                window.addEventListener("scroll", Z),
                (I = window.visualViewport) == null ||
                  I.addEventListener("resize", F))
              : ((document.body.style.position = "static"),
                W(),
                window.scrollTo({ top: x.current, left: 0, behavior: "auto" }),
                window.addEventListener("scroll", z),
                (M = window.visualViewport) == null ||
                  M.removeEventListener("resize", F)),
            W
          );
        }, [a, r]);
    },
    Yt = {
      DEFAULT_URL:
        "https://cdn.jsdelivr.net/gh/tjtanjin/react-chatbotify-themes/themes",
      DEFAULT_EXPIRATION: "2592000",
      CACHE_KEY_PREFIX: "RCB_THEME_CACHE_DATA",
    },
    pi = Yt.DEFAULT_URL,
    mi = Yt.DEFAULT_EXPIRATION,
    uo = Yt.CACHE_KEY_PREFIX,
    yi = (A, e, t) => {
      const n = localStorage.getItem(`${uo}_${A}_${e}`);
      if (!n) return null;
      try {
        const r = JSON.parse(n),
          o = new Date().getTime(),
          s = Math.floor(o / 1e3);
        return r.cacheDate + t >= s ? r : null;
      } catch (r) {
        return console.error(`Unable to fetch cache for ${A}`, r), null;
      }
    },
    Bi = (A, e, t, n, r) => {
      const o = new Date().getTime(),
        s = Math.floor(o / 1e3),
        l = { settings: t, inlineStyles: n, cssStylesText: r, cacheDate: s };
      localStorage.setItem(`${uo}_${A}_${e}`, JSON.stringify(l));
    },
    Ei = async (A, e) => {
      const t = `${e}/${A}/meta.json`;
      try {
        const n = await fetch(t);
        return n.ok
          ? (await n.json()).version
          : (console.error(`Failed to fetch meta.json from ${t}`), null);
      } catch (n) {
        return console.error(`Failed to fetch meta.json from ${t}`, n), null;
      }
    },
    co = async (A, e) => {
      const { id: t, version: n, baseUrl: r = pi, cacheDuration: o = mi } = e,
        s = n || (await Ei(t, r));
      if (!s)
        return (
          console.error(`Unable to find version for theme: ${t}`),
          { settings: {}, inlineStyles: {}, cssStylesText: "" }
        );
      const l = yi(t, s, o);
      if (l) {
        const E = fo(A, l.cssStylesText);
        return {
          settings: l.settings,
          inlineStyles: l.inlineStyles,
          cssStylesText: E,
        };
      }
      const a = `${r}/${t}/${s}/styles.css`,
        i = `${r}/${t}/${s}/settings.json`,
        u = `${r}/${t}/${s}/styles.json`;
      let d = "";
      const v = await fetch(a);
      v.ok
        ? (d = await v.text())
        : console.info(`Could not fetch styles.css from ${a}`);
      const w = await fetch(i);
      let g = {};
      w.ok
        ? (g = await w.json())
        : console.info(`Could not fetch settings.json from ${i}`);
      const p = await fetch(u);
      let h = {};
      p.ok
        ? (h = await p.json())
        : console.info(`Could not fetch styles.json from ${u}`),
        Bi(t, s, g, h, d);
      const m = fo(A, d);
      return { settings: g, inlineStyles: h, cssStylesText: m };
    },
    fo = (A, e) =>
      e.split(new RegExp("(?<=})")).map((t) => {
        const n = t.trim();
        return n.startsWith("@import") ||
          n.startsWith("@keyframes") ||
          n.startsWith("@media")
          ? n
          : n
          ? `#${A} ${n}`
          : "";
      }).join(`
`),
    Pi = () => Xe(Gr),
    Di = () => Xe(Yr),
    Ci = async (A, e, t, n) => {
      var r, o;
      let s = Pi(),
        l = Di(),
        a = "";
      if (n != null)
        if (Array.isArray(n))
          for (const i of n) {
            const u = await co(A, i);
            (s = xA(u.settings, s)),
              (l = xA(u.inlineStyles, l)),
              (a += u.cssStylesText);
          }
        else {
          const i = await co(A, n);
          (s = xA(i.settings, s)),
            (l = xA(i.inlineStyles, l)),
            (a += i.cssStylesText);
        }
      return (
        e != null && (s = xA(e, s)),
        t != null && (l = xA(t, l)),
        ((r = s.chatInput) == null ? void 0 : r.botDelay) != null &&
          ((o = s.chatInput) == null ? void 0 : o.botDelay) < 500 &&
          (s.chatInput.botDelay = 500),
        { settings: s, inlineStyles: l, cssStylesText: a }
      );
    },
    xA = (A, e) => {
      const t = [{ source: A, target: e }];
      for (; t.length; ) {
        const n = t.pop();
        if (n == null) continue;
        const { source: r, target: o } = n;
        for (const s of Object.keys(r)) {
          const l = s;
          if (f.isValidElement(r[l])) o[l] = r[l];
          else if (
            typeof r[l] == "object" &&
            r[l] !== null &&
            !Array.isArray(r[l])
          )
            (typeof o[l] != "object" || o[l] === null) && (o[l] = {}),
              t.push({ source: r[l], target: o[l] });
          else
            try {
              o[l] = r[l];
            } catch {}
        }
      }
      return e;
    },
    Xe = (A) => {
      if (A === null || typeof A != "object") return A;
      const e = Array.isArray(A) ? [] : {},
        t = [{ source: A, target: e }],
        n = new WeakMap();
      for (n.set(A, e); t.length; ) {
        const r = t.pop();
        if (r == null) continue;
        const { source: o, target: s } = r;
        for (const l in o)
          if (Object.prototype.hasOwnProperty.call(o, l)) {
            const a = o[l];
            if (a && typeof a == "object")
              if (n.has(a)) s[l] = n.get(a);
              else {
                const i = Array.isArray(a) ? [] : {};
                n.set(a, i), (s[l] = i), t.push({ source: a, target: i });
              }
            else s[l] = a;
          }
      }
      return e;
    },
    bi = () => {
      const { settings: A, setSettings: e } = H(),
        t = f.useCallback(
          (r) => {
            !r || Object.keys(r).length === 0 || e(Xe(xA(r, A)));
          },
          [A]
        ),
        n = f.useCallback((r) => {
          e(r);
        }, []);
      return { settings: A, replaceSettings: n, updateSettings: t };
    },
    Si = () => {
      const { styles: A, setStyles: e } = V(),
        t = f.useCallback(
          (r) => {
            !r || Object.keys(r).length === 0 || e(Xe(xA(r, A)));
          },
          [A]
        ),
        n = f.useCallback((r) => {
          e(r);
        }, []);
      return { styles: A, replaceStyles: n, updateStyles: t };
    },
    Qi = (A) => {
      const { updateSettings: e } = bi(),
        { updateStyles: t } = Si(),
        n = A == null ? void 0 : A.map((r) => r());
      f.useEffect(() => {
        let r = {},
          o = {};
        n == null ||
          n.forEach((s) => {
            s != null &&
              s.settings &&
              Object.keys(s == null ? void 0 : s.settings).length !== 0 &&
              (r = xA(s.settings, r)),
              s != null &&
                s.styles &&
                Object.keys(s == null ? void 0 : s.styles).length !== 0 &&
                (o = xA(s.styles, o));
          }),
          e(r),
          t(o);
      }, []);
    },
    xi = ({ plugins: A }) => {
      var e, t, n, r, o;
      const s = Ve(),
        { settings: l } = H(),
        { styles: a } = V(),
        { hasFlowStarted: i, setHasFlowStarted: u } = oA(),
        { inputRef: d } = iA(),
        { viewportHeight: v, viewportWidth: w, isChatWindowOpen: g } = PA(),
        { goToPath: p } = _t(),
        { headerButtons: h, chatInputButtons: m, footerButtons: E } = vi();
      hi(),
        Qi(A),
        f.useEffect(() => {
          var y;
          (i ||
            ((y = l.general) == null ? void 0 : y.flowStartTrigger) ===
              "ON_LOAD") &&
            p("start");
        }, [i, (e = l.general) == null ? void 0 : e.flowStartTrigger]);
      const Q = f.useMemo(() => {
          var y;
          const P = "rcb-chatbot-global ";
          return (y = l.general) != null && y.embedded
            ? P + "rcb-window-embedded"
            : g
            ? P + "rcb-window-open"
            : P + "rcb-window-close";
        }, [l, g]),
        b = () => {
          var y, P;
          return !s && !((y = l.general) != null && y.embedded)
            ? {
                ...a.chatWindowStyle,
                borderRadius: "0px",
                left: "0px",
                right: "auto",
                top: "0px",
                bottom: "auto",
                width: `${w}px`,
                height: `${v}px`,
                zIndex: 1e4,
              }
            : (P = l.general) != null && P.embedded
            ? { ...a.chatWindowStyle }
            : { ...a.chatWindowStyle, zIndex: 1e4 };
        };
      return c.jsx(c.Fragment, {
        children:
          (() => {
            var y, P;
            return (
              (s && ((y = l.device) == null ? void 0 : y.desktopEnabled)) ||
              (!s && ((P = l.device) == null ? void 0 : P.mobileEnabled))
            );
          })() &&
          c.jsxs("div", {
            onMouseDown: (y) => {
              var P, S;
              !i &&
                ((P = l.general) == null ? void 0 : P.flowStartTrigger) ===
                  "ON_CHATBOT_INTERACT" &&
                u(!0),
                s
                  ? (S = d.current) == null || S.blur()
                  : y == null || y.preventDefault();
            },
            className: Q,
            children: [
              c.jsx(Xa, {}),
              c.jsx(Va, {}),
              g &&
                !s &&
                !((t = l.general) != null && t.embedded) &&
                c.jsxs(c.Fragment, {
                  children: [
                    c.jsx("style", {
                      children: `
									html {
										overflow: hidden !important;
										touch-action: none !important;
										scroll-behavior: auto !important;
									}
								`,
                    }),
                    c.jsx("div", {
                      style: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#fff",
                        zIndex: 9999,
                      },
                    }),
                  ],
                }),
              c.jsxs("div", {
                style: b(),
                className: "rcb-chat-window",
                children: [
                  ((n = l.general) == null ? void 0 : n.showHeader) &&
                    c.jsx(na, { buttons: h }),
                  c.jsx(da, {}),
                  c.jsx(Ja, {}),
                  ((r = l.general) == null ? void 0 : r.showInputRow) &&
                    c.jsx(Ya, { buttons: m }),
                  ((o = l.general) == null ? void 0 : o.showFooter) &&
                    c.jsx(Wa, { buttons: E }),
                ],
              }),
            ],
          }),
      });
    },
    vo = f.createContext(void 0),
    go = () => f.useContext(vo),
    ki = ({ children: A }) => {
      var e;
      const t = f.useRef(""),
        n = f.useRef({}),
        [r, o] = f.useState({}),
        [s, l] = f.useState({}),
        [a, i] = f.useState(!1);
      f.useEffect(() => {
        i(!0);
      }, []);
      const u = async (d, v, w, g, p, h) => {
        (t.current = d), (n.current = v);
        const m = await Ci(d, w, g, p);
        h.current && (h.current.textContent = m.cssStylesText),
          o(m.settings),
          l(m.inlineStyles);
      };
      return a
        ? c.jsx("div", {
            style: {
              fontFamily: (e = r.general) == null ? void 0 : e.fontFamily,
            },
            children: c.jsx(vo.Provider, {
              value: { loadConfig: u },
              children: c.jsx(ea, {
                settings: r,
                setSettings: o,
                children: c.jsx(ta, {
                  styles: s,
                  setStyles: l,
                  children: c.jsx(_a, {
                    children: c.jsx(ra, {
                      botIdRef: t,
                      flowRef: n,
                      children: c.jsx(la, {
                        children: c.jsx(oa, {
                          settings: r,
                          children: c.jsx(ia, { children: A }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          })
        : null;
    },
    Ti = ({
      id: A,
      flow: e,
      settings: t,
      styles: n,
      themes: r,
      plugins: o,
      setConfigLoaded: s,
      styleRootRef: l,
    }) => {
      const a = f.useMemo(() => A, []),
        i = go(),
        { flowRef: u } = iA();
      u && u.current !== e && (u.current = e);
      const d = async () => {
        var v, w;
        ((v = t.event) != null &&
          v.rcbPreLoadChatBot &&
          (
            await Rt(
              O.PRE_LOAD_CHATBOT,
              { botId: a, currPath: null, prevPath: null },
              { flow: e, settings: t, styles: n, themes: r, plugins: o }
            )
          ).defaultPrevented) ||
          (i != null &&
            i.loadConfig &&
            (await i.loadConfig(a, e, t, n, r, l), s(!0)),
          (w = t.event) != null &&
            w.rcbPostLoadChatBot &&
            Rt(
              O.POST_LOAD_CHATBOT,
              { botId: a, currPath: null, prevPath: null },
              { flow: e, settings: t, styles: n, themes: r, plugins: o }
            ));
      };
      return (
        f.useEffect(() => {
          d();
        }, [r]),
        null
      );
    },
    Wt = ["Quickstart", "API Docs", "Examples", "Github", "Discord"],
    Ii = {
      start: {
        message:
          "Hello, I am Tan Jin 👋! Welcome to React ChatBotify, I'm excited that you are using our chatbot 😊!",
        transition: { duration: 1e3 },
        chatDisabled: !0,
        path: "show_options",
      },
      show_options: {
        message:
          "It looks like you have not set up a conversation flow yet. No worries! Here are a few helpful things you can check out to get started:",
        options: Wt,
        path: "process_options",
      },
      prompt_again: {
        message: "Do you need any other help?",
        options: Wt,
        path: "process_options",
      },
      unknown_input: {
        message:
          "Sorry, I do not understand your message 😢! If you require further assistance, you may click on the Github option and open an issue there or visit our discord.",
        options: Wt,
        path: "process_options",
      },
      process_options: {
        transition: { duration: 0 },
        path: (A) => {
          let e = "";
          switch (A.userInput) {
            case "Quickstart":
              e = "https://react-chatbotify.com/docs/introduction/quickstart/";
              break;
            case "API Docs":
              e = "https://react-chatbotify.com/docs/api/bot_options";
              break;
            case "Examples":
              e = "https://react-chatbotify.com/docs/examples/basic_form";
              break;
            case "Github":
              e = "https://github.com/tjtanjin/react-chatbotify/";
              break;
            case "Discord":
              e = "https://discord.gg/6R4DK4G5Zh";
              break;
            default:
              return "unknown_input";
          }
          return (
            A.injectMessage("Sit tight! I'll send you right there!"),
            setTimeout(() => {
              window.open(e);
            }, 1e3),
            "repeat"
          );
        },
      },
      repeat: { transition: { duration: 3e3 }, path: "prompt_again" },
    },
    Mi = ({
      id: A,
      flow: e,
      settings: t,
      styles: n,
      themes: r,
      plugins: o,
    }) => {
      const s = f.useMemo(() => A || "rcb-" + Ue(), []),
        l = !e || Object.keys(e).length === 0 ? Ii : e,
        a = t || {},
        i = n || {},
        u = o || [],
        [d, v] = f.useState(!1),
        w = go(),
        g = f.useRef(null),
        [p, h] = f.useState(r || []);
      f.useEffect(() => {
        r && h(r);
      }, [r]);
      const m = () =>
        c.jsxs(c.Fragment, {
          children: [
            c.jsx(Ti, {
              styleRootRef: g,
              id: s,
              flow: l,
              settings: a,
              styles: i,
              themes: p,
              plugins: u,
              setConfigLoaded: v,
            }),
            d && c.jsx(xi, { plugins: o }),
          ],
        });
      return w == null
        ? c.jsxs(ki, {
            children: [
              c.jsx("style", { ref: g }),
              c.jsx("div", { id: s, children: m() }),
            ],
          })
        : c.jsxs(c.Fragment, {
            children: [
              c.jsx("style", { ref: g }),
              c.jsx("div", { id: s, children: m() }),
            ],
          });
    };
  function Oi({ config: A }) {
    var e, t;
    return c.jsx("div", {
      id: "chatbot-container",
      style: { position: "fixed", bottom: "20px", right: "20px", zIndex: 9999 },
      children: c.jsx(Mi, {
        theme: {
          primaryColor:
            ((e = A == null ? void 0 : A.style) == null
              ? void 0
              : e.accentColor) || "#003164",
        },
        chatFlow: [
          {
            type: "text",
            message:
              ((t = A == null ? void 0 : A.botConfig) == null
                ? void 0
                : t.welcomeMessage) || "Hi there!",
          },
        ],
      }),
    });
  }
  function wo(A) {
    const e = document.createElement("div");
    document.body.appendChild(e),
      Ze.createRoot(e).render(c.jsx(Oi, { config: A }));
  }
  return (
    (window.init_chatbotify_sdk = wo),
    (Je.init_chatbotify_sdk = wo),
    Object.defineProperty(Je, Symbol.toStringTag, { value: "Module" }),
    Je
  );
})({}, React, ReactDOM);
