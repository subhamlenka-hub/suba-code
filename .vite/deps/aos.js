import {
  require_lodash
} from "./chunk-AS35N6C4.js";
import {
  __commonJS,
  __toESM
} from "./chunk-7D4SUZUM.js";

// node_modules/lodash.throttle/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash.throttle/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce2(func, wait, options2) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options2)) {
        leading = !!options2.leading;
        maxing = "maxWait" in options2;
        maxWait = maxing ? nativeMax(toNumber(options2.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options2 ? !!options2.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function throttle2(func, wait, options2) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options2)) {
        leading = "leading" in options2 ? !!options2.leading : leading;
        trailing = "trailing" in options2 ? !!options2.trailing : trailing;
      }
      return debounce2(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = throttle2;
  }
});

// node_modules/aos/dist/aos.esm.js
var import_lodash = __toESM(require_lodash2());
var import_lodash2 = __toESM(require_lodash());
var callback = function callback2() {
};
function containsAOSNode(nodes) {
  var i = void 0, currentNode = void 0, result = void 0;
  for (i = 0; i < nodes.length; i += 1) {
    currentNode = nodes[i];
    if (currentNode.dataset && currentNode.dataset.aos) {
      return true;
    }
    result = currentNode.children && containsAOSNode(currentNode.children);
    if (result) {
      return true;
    }
  }
  return false;
}
function check(mutations) {
  if (!mutations) return;
  mutations.forEach(function(mutation) {
    var addedNodes = Array.prototype.slice.call(mutation.addedNodes);
    var removedNodes = Array.prototype.slice.call(mutation.removedNodes);
    var allNodes = addedNodes.concat(removedNodes);
    if (containsAOSNode(allNodes)) {
      return callback();
    }
  });
}
function getMutationObserver() {
  return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
}
function isSupported() {
  return !!getMutationObserver();
}
function ready(selector, fn) {
  var doc = window.document;
  var MutationObserver = getMutationObserver();
  var observer2 = new MutationObserver(check);
  callback = fn;
  observer2.observe(doc.documentElement, {
    childList: true,
    subtree: true,
    removedNodes: true
  });
}
var observer = { isSupported, ready };
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = /* @__PURE__ */ function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var fullNameRe = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
var prefixRe = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
var fullNameMobileRe = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
var prefixMobileRe = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function ua() {
  return navigator.userAgent || navigator.vendor || window.opera || "";
}
var Detector = function() {
  function Detector2() {
    classCallCheck(this, Detector2);
  }
  createClass(Detector2, [{
    key: "phone",
    value: function phone() {
      var a = ua();
      return !!(fullNameRe.test(a) || prefixRe.test(a.substr(0, 4)));
    }
  }, {
    key: "mobile",
    value: function mobile() {
      var a = ua();
      return !!(fullNameMobileRe.test(a) || prefixMobileRe.test(a.substr(0, 4)));
    }
  }, {
    key: "tablet",
    value: function tablet() {
      return this.mobile() && !this.phone();
    }
    // http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c
  }, {
    key: "ie11",
    value: function ie11() {
      return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
    }
  }]);
  return Detector2;
}();
var detect = new Detector();
var addClasses = function addClasses2(node, classes) {
  return classes && classes.forEach(function(className) {
    return node.classList.add(className);
  });
};
var removeClasses = function removeClasses2(node, classes) {
  return classes && classes.forEach(function(className) {
    return node.classList.remove(className);
  });
};
var fireEvent = function fireEvent2(eventName, data) {
  var customEvent = void 0;
  if (detect.ie11()) {
    customEvent = document.createEvent("CustomEvent");
    customEvent.initCustomEvent(eventName, true, true, { detail: data });
  } else {
    customEvent = new CustomEvent(eventName, {
      detail: data
    });
  }
  return document.dispatchEvent(customEvent);
};
var applyClasses = function applyClasses2(el, top) {
  var options2 = el.options, position = el.position, node = el.node, data = el.data;
  var hide = function hide2() {
    if (!el.animated) return;
    removeClasses(node, options2.animatedClassNames);
    fireEvent("aos:out", node);
    if (el.options.id) {
      fireEvent("aos:in:" + el.options.id, node);
    }
    el.animated = false;
  };
  var show = function show2() {
    if (el.animated) return;
    addClasses(node, options2.animatedClassNames);
    fireEvent("aos:in", node);
    if (el.options.id) {
      fireEvent("aos:in:" + el.options.id, node);
    }
    el.animated = true;
  };
  if (options2.mirror && top >= position.out && !options2.once) {
    hide();
  } else if (top >= position.in) {
    show();
  } else if (el.animated && !options2.once) {
    hide();
  }
};
var handleScroll = function handleScroll2($elements) {
  return $elements.forEach(function(el, i) {
    return applyClasses(el, window.pageYOffset);
  });
};
var offset = function offset2(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - (el.tagName != "BODY" ? el.scrollLeft : 0);
    _y += el.offsetTop - (el.tagName != "BODY" ? el.scrollTop : 0);
    el = el.offsetParent;
  }
  return {
    top: _y,
    left: _x
  };
};
var getInlineOption = function(el, key, fallback) {
  var attr = el.getAttribute("data-aos-" + key);
  if (typeof attr !== "undefined") {
    if (attr === "true") {
      return true;
    } else if (attr === "false") {
      return false;
    }
  }
  return attr || fallback;
};
var getPositionIn = function getPositionIn2(el, defaultOffset, defaultAnchorPlacement) {
  var windowHeight = window.innerHeight;
  var anchor = getInlineOption(el, "anchor");
  var inlineAnchorPlacement = getInlineOption(el, "anchor-placement");
  var additionalOffset = Number(getInlineOption(el, "offset", inlineAnchorPlacement ? 0 : defaultOffset));
  var anchorPlacement = inlineAnchorPlacement || defaultAnchorPlacement;
  var finalEl = el;
  if (anchor && document.querySelectorAll(anchor)) {
    finalEl = document.querySelectorAll(anchor)[0];
  }
  var triggerPoint = offset(finalEl).top - windowHeight;
  switch (anchorPlacement) {
    case "top-bottom":
      break;
    case "center-bottom":
      triggerPoint += finalEl.offsetHeight / 2;
      break;
    case "bottom-bottom":
      triggerPoint += finalEl.offsetHeight;
      break;
    case "top-center":
      triggerPoint += windowHeight / 2;
      break;
    case "center-center":
      triggerPoint += windowHeight / 2 + finalEl.offsetHeight / 2;
      break;
    case "bottom-center":
      triggerPoint += windowHeight / 2 + finalEl.offsetHeight;
      break;
    case "top-top":
      triggerPoint += windowHeight;
      break;
    case "bottom-top":
      triggerPoint += windowHeight + finalEl.offsetHeight;
      break;
    case "center-top":
      triggerPoint += windowHeight + finalEl.offsetHeight / 2;
      break;
  }
  return triggerPoint + additionalOffset;
};
var getPositionOut = function getPositionOut2(el, defaultOffset) {
  var windowHeight = window.innerHeight;
  var anchor = getInlineOption(el, "anchor");
  var additionalOffset = getInlineOption(el, "offset", defaultOffset);
  var finalEl = el;
  if (anchor && document.querySelectorAll(anchor)) {
    finalEl = document.querySelectorAll(anchor)[0];
  }
  var elementOffsetTop = offset(finalEl).top;
  return elementOffsetTop + finalEl.offsetHeight - additionalOffset;
};
var prepare = function prepare2($elements, options2) {
  $elements.forEach(function(el, i) {
    var mirror = getInlineOption(el.node, "mirror", options2.mirror);
    var once = getInlineOption(el.node, "once", options2.once);
    var id = getInlineOption(el.node, "id");
    var customClassNames = options2.useClassNames && el.node.getAttribute("data-aos");
    var animatedClassNames = [options2.animatedClassName].concat(customClassNames ? customClassNames.split(" ") : []).filter(function(className) {
      return typeof className === "string";
    });
    if (options2.initClassName) {
      el.node.classList.add(options2.initClassName);
    }
    el.position = {
      in: getPositionIn(el.node, options2.offset, options2.anchorPlacement),
      out: mirror && getPositionOut(el.node, options2.offset)
    };
    el.options = {
      once,
      mirror,
      animatedClassNames,
      id
    };
  });
  return $elements;
};
var elements = function() {
  var elements2 = document.querySelectorAll("[data-aos]");
  return Array.prototype.map.call(elements2, function(node) {
    return { node };
  });
};
var $aosElements = [];
var initialized = false;
var options = {
  offset: 120,
  delay: 0,
  easing: "ease",
  duration: 400,
  disable: false,
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
  startEvent: "DOMContentLoaded",
  animatedClassName: "aos-animate",
  initClassName: "aos-init",
  useClassNames: false,
  disableMutationObserver: false,
  throttleDelay: 99,
  debounceDelay: 50
};
var isBrowserNotSupported = function isBrowserNotSupported2() {
  return document.all && !window.atob;
};
var initializeScroll = function initializeScroll2() {
  $aosElements = prepare($aosElements, options);
  handleScroll($aosElements);
  window.addEventListener("scroll", (0, import_lodash.default)(function() {
    handleScroll($aosElements, options.once);
  }, options.throttleDelay));
  return $aosElements;
};
var refresh = function refresh2() {
  var initialize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
  if (initialize) initialized = true;
  if (initialized) initializeScroll();
};
var refreshHard = function refreshHard2() {
  $aosElements = elements();
  if (isDisabled(options.disable) || isBrowserNotSupported()) {
    return disable();
  }
  refresh();
};
var disable = function disable2() {
  $aosElements.forEach(function(el, i) {
    el.node.removeAttribute("data-aos");
    el.node.removeAttribute("data-aos-easing");
    el.node.removeAttribute("data-aos-duration");
    el.node.removeAttribute("data-aos-delay");
    if (options.initClassName) {
      el.node.classList.remove(options.initClassName);
    }
    if (options.animatedClassName) {
      el.node.classList.remove(options.animatedClassName);
    }
  });
};
var isDisabled = function isDisabled2(optionDisable) {
  return optionDisable === true || optionDisable === "mobile" && detect.mobile() || optionDisable === "phone" && detect.phone() || optionDisable === "tablet" && detect.tablet() || typeof optionDisable === "function" && optionDisable() === true;
};
var init = function init2(settings) {
  options = _extends(options, settings);
  $aosElements = elements();
  if (!options.disableMutationObserver && !observer.isSupported()) {
    console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    ');
    options.disableMutationObserver = true;
  }
  if (!options.disableMutationObserver) {
    observer.ready("[data-aos]", refreshHard);
  }
  if (isDisabled(options.disable) || isBrowserNotSupported()) {
    return disable();
  }
  document.querySelector("body").setAttribute("data-aos-easing", options.easing);
  document.querySelector("body").setAttribute("data-aos-duration", options.duration);
  document.querySelector("body").setAttribute("data-aos-delay", options.delay);
  if (["DOMContentLoaded", "load"].indexOf(options.startEvent) === -1) {
    document.addEventListener(options.startEvent, function() {
      refresh(true);
    });
  } else {
    window.addEventListener("load", function() {
      refresh(true);
    });
  }
  if (options.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1) {
    refresh(true);
  }
  window.addEventListener("resize", (0, import_lodash2.default)(refresh, options.debounceDelay, true));
  window.addEventListener("orientationchange", (0, import_lodash2.default)(refresh, options.debounceDelay, true));
  return $aosElements;
};
var aos = {
  init,
  refresh,
  refreshHard
};
var aos_esm_default = aos;
export {
  aos_esm_default as default
};
//# sourceMappingURL=aos.js.map
