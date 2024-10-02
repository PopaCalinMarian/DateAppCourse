import {
  AnimationBuilder,
  animate,
  style
} from "./chunk-IYQ6M6U2.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  isPlatformBrowser
} from "./chunk-RI2AEFVG.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  TemplateRef,
  ViewContainerRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1
} from "./chunk-WYYIVEMK.js";
import {
  Subject,
  __spreadProps,
  __spreadValues,
  animationFrameScheduler,
  filter,
  fromEvent,
  merge,
  of
} from "./chunk-YTR4LZ5T.js";

// node_modules/ngx-bootstrap/utils/fesm2022/ngx-bootstrap-utils.mjs
var Trigger = class {
  constructor(open, close) {
    this.open = open;
    this.close = close || open;
  }
  isManual() {
    return this.open === "manual" || this.close === "manual";
  }
};
var DEFAULT_ALIASES = {
  hover: ["mouseover", "mouseout"],
  focus: ["focusin", "focusout"]
};
function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
  const trimmedTriggers = (triggers || "").trim();
  if (trimmedTriggers.length === 0) {
    return [];
  }
  const parsedTriggers = trimmedTriggers.split(/\s+/).map((trigger) => trigger.split(":")).map((triggerPair) => {
    const alias = aliases[triggerPair[0]] || triggerPair;
    return new Trigger(alias[0], alias[1]);
  });
  const manualTriggers = parsedTriggers.filter((triggerPair) => triggerPair.isManual());
  if (manualTriggers.length > 1) {
    throw new Error("Triggers parse error: only one manual trigger is allowed");
  }
  if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
    throw new Error("Triggers parse error: manual trigger can't be mixed with other triggers");
  }
  return parsedTriggers;
}
function listenToTriggersV2(renderer, options) {
  const parsedTriggers = parseTriggers(options.triggers);
  const target = options.target;
  if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
    return Function.prototype;
  }
  const listeners = [];
  const _registerHide = [];
  const registerHide = () => {
    _registerHide.forEach((fn) => listeners.push(fn()));
    _registerHide.length = 0;
  };
  parsedTriggers.forEach((trigger) => {
    const useToggle = trigger.open === trigger.close;
    const showFn = useToggle ? options.toggle : options.show;
    if (!useToggle && trigger.close && options.hide) {
      const triggerClose = trigger.close;
      const optionsHide = options.hide;
      const _hide = () => renderer.listen(target, triggerClose, optionsHide);
      _registerHide.push(_hide);
    }
    if (showFn) {
      listeners.push(renderer.listen(target, trigger.open, () => showFn(registerHide)));
    }
  });
  return () => {
    listeners.forEach((unsubscribeFn) => unsubscribeFn());
  };
}
function registerOutsideClick(renderer, options) {
  if (!options.outsideClick) {
    return Function.prototype;
  }
  return renderer.listen("document", "click", (event) => {
    if (options.target && options.target.contains(event.target)) {
      return;
    }
    if (options.targets && options.targets.some((target) => target.contains(event.target))) {
      return;
    }
    if (options.hide) {
      options.hide();
    }
  });
}
function registerEscClick(renderer, options) {
  if (!options.outsideEsc) {
    return Function.prototype;
  }
  return renderer.listen("document", "keyup.esc", (event) => {
    if (options.target && options.target.contains(event.target)) {
      return;
    }
    if (options.targets && options.targets.some((target) => target.contains(event.target))) {
      return;
    }
    if (options.hide) {
      options.hide();
    }
  });
}
var win = typeof window !== "undefined" && window || {};
var document2 = win.document;
var location = win.location;
var gc = win.gc ? () => win.gc() : () => null;
var performance = win.performance ? win.performance : null;
var Event = win.Event;
var MouseEvent = win.MouseEvent;
var KeyboardEvent = win.KeyboardEvent;
var EventTarget = win.EventTarget;
var History = win.History;
var Location = win.Location;
var EventListener = win.EventListener;
var BsVerions;
(function(BsVerions2) {
  BsVerions2["isBs4"] = "bs4";
  BsVerions2["isBs5"] = "bs5";
})(BsVerions || (BsVerions = {}));
var guessedVersion;
function _guessBsVersion() {
  const spanEl = win.document.createElement("span");
  spanEl.innerText = "testing bs version";
  spanEl.classList.add("d-none");
  spanEl.classList.add("pl-1");
  win.document.head.appendChild(spanEl);
  const checkPadding = win.getComputedStyle(spanEl).paddingLeft;
  if (checkPadding && parseFloat(checkPadding)) {
    win.document.head.removeChild(spanEl);
    return "bs4";
  }
  win.document.head.removeChild(spanEl);
  return "bs5";
}
function isBs4() {
  if (guessedVersion) return guessedVersion === "bs4";
  guessedVersion = _guessBsVersion();
  return guessedVersion === "bs4";
}
function isBs5() {
  if (guessedVersion) return guessedVersion === "bs5";
  guessedVersion = _guessBsVersion();
  return guessedVersion === "bs5";
}
function getBsVer() {
  return {
    isBs4: isBs4(),
    isBs5: isBs5()
  };
}
var _hideMsg = typeof console === "undefined" || !("warn" in console);

// node_modules/ngx-bootstrap/positioning/fesm2022/ngx-bootstrap-positioning.mjs
var MapPlacementInToRL;
(function(MapPlacementInToRL2) {
  MapPlacementInToRL2["top"] = "top";
  MapPlacementInToRL2["bottom"] = "bottom";
  MapPlacementInToRL2["left"] = "left";
  MapPlacementInToRL2["right"] = "right";
  MapPlacementInToRL2["auto"] = "auto";
  MapPlacementInToRL2["end"] = "right";
  MapPlacementInToRL2["start"] = "left";
  MapPlacementInToRL2["top left"] = "top left";
  MapPlacementInToRL2["top right"] = "top right";
  MapPlacementInToRL2["right top"] = "right top";
  MapPlacementInToRL2["right bottom"] = "right bottom";
  MapPlacementInToRL2["bottom right"] = "bottom right";
  MapPlacementInToRL2["bottom left"] = "bottom left";
  MapPlacementInToRL2["left bottom"] = "left bottom";
  MapPlacementInToRL2["left top"] = "left top";
  MapPlacementInToRL2["top start"] = "top left";
  MapPlacementInToRL2["top end"] = "top right";
  MapPlacementInToRL2["end top"] = "right top";
  MapPlacementInToRL2["end bottom"] = "right bottom";
  MapPlacementInToRL2["bottom end"] = "bottom right";
  MapPlacementInToRL2["bottom start"] = "bottom left";
  MapPlacementInToRL2["start bottom"] = "start bottom";
  MapPlacementInToRL2["start top"] = "left top";
})(MapPlacementInToRL || (MapPlacementInToRL = {}));
var PlacementForBs5;
(function(PlacementForBs52) {
  PlacementForBs52["top"] = "top";
  PlacementForBs52["bottom"] = "bottom";
  PlacementForBs52["left"] = "start";
  PlacementForBs52["right"] = "end";
  PlacementForBs52["auto"] = "auto";
  PlacementForBs52["end"] = "end";
  PlacementForBs52["start"] = "start";
  PlacementForBs52["top left"] = "top start";
  PlacementForBs52["top right"] = "top end";
  PlacementForBs52["right top"] = "end top";
  PlacementForBs52["right bottom"] = "end bottom";
  PlacementForBs52["bottom right"] = "bottom end";
  PlacementForBs52["bottom left"] = "bottom start";
  PlacementForBs52["left bottom"] = "start bottom";
  PlacementForBs52["left top"] = "start top";
  PlacementForBs52["top start"] = "top start";
  PlacementForBs52["top end"] = "top end";
  PlacementForBs52["end top"] = "end top";
  PlacementForBs52["end bottom"] = "end bottom";
  PlacementForBs52["bottom end"] = "bottom end";
  PlacementForBs52["bottom start"] = "bottom start";
  PlacementForBs52["start bottom"] = "start bottom";
  PlacementForBs52["start top"] = "start top";
})(PlacementForBs5 || (PlacementForBs5 = {}));
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  const window2 = element.ownerDocument.defaultView;
  const css = window2?.getComputedStyle(element, null);
  return property ? css && css[property] : css;
}
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }
  const noOffsetParent = null;
  let offsetParent = element?.offsetParent;
  let sibling = void 0;
  while (offsetParent === noOffsetParent && element.nextElementSibling && sibling !== element.nextElementSibling) {
    sibling = element.nextElementSibling;
    offsetParent = sibling.offsetParent;
  }
  const nodeName = offsetParent && offsetParent.nodeName;
  if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
    return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
  }
  if (offsetParent && ["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
    return getOffsetParent(offsetParent);
  }
  return offsetParent;
}
function isOffsetContainer(element) {
  const {
    nodeName
  } = element;
  if (nodeName === "BODY") {
    return false;
  }
  return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
}
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }
  return node;
}
function findCommonOffsetParent(element1, element2) {
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }
  const order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  const start = order ? element1 : element2;
  const end = order ? element2 : element1;
  const range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  const commonAncestorContainer = range.commonAncestorContainer;
  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }
    return getOffsetParent(commonAncestorContainer);
  }
  const element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
function getFixedPositionOffsetParent(element) {
  if (!element || !element.parentElement) {
    return document.documentElement;
  }
  let el = element.parentElement;
  while (el?.parentElement && getStyleComputedProperty(el, "transform") === "none") {
    el = el.parentElement;
  }
  return el || document.documentElement;
}
function getBordersSize(styles, axis) {
  const sideA = axis === "x" ? "Left" : "Top";
  const sideB = sideA === "Left" ? "Right" : "Bottom";
  return parseFloat(styles[`border${sideA}Width`]) + parseFloat(styles[`border${sideB}Width`]);
}
function getSize(axis, body, html) {
  const _body = body;
  const _html = html;
  return Math.max(_body[`offset${axis}`], _body[`scroll${axis}`], _html[`client${axis}`], _html[`offset${axis}`], _html[`scroll${axis}`], 0);
}
function getWindowSizes(document3) {
  const body = document3.body;
  const html = document3.documentElement;
  return {
    height: getSize("Height", body, html),
    width: getSize("Width", body, html)
  };
}
function getClientRect(offsets) {
  return __spreadProps(__spreadValues({}, offsets), {
    right: (offsets.left || 0) + offsets.width,
    bottom: (offsets.top || 0) + offsets.height
  });
}
function isNumeric(n) {
  return n !== "" && !isNaN(parseFloat(n)) && isFinite(Number(n));
}
function isNumber(value) {
  return typeof value === "number" || Object.prototype.toString.call(value) === "[object Number]";
}
function getBoundingClientRect(element) {
  const rect = element.getBoundingClientRect();
  if (!(rect && isNumber(rect.top) && isNumber(rect.left) && isNumber(rect.bottom) && isNumber(rect.right))) {
    return rect;
  }
  const result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
  const sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : void 0;
  const width = sizes?.width || element.clientWidth || isNumber(rect.right) && isNumber(result.left) && rect.right - result.left || 0;
  const height = sizes?.height || element.clientHeight || isNumber(rect.bottom) && isNumber(result.top) && rect.bottom - result.top || 0;
  let horizScrollbar = element.offsetWidth - width;
  let vertScrollbar = element.offsetHeight - height;
  if (horizScrollbar || vertScrollbar) {
    const styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, "x");
    vertScrollbar -= getBordersSize(styles, "y");
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }
  return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent, fixedPosition = false) {
  const isHTML = parent.nodeName === "HTML";
  const childrenRect = getBoundingClientRect(children);
  const parentRect = getBoundingClientRect(parent);
  const styles = getStyleComputedProperty(parent);
  const borderTopWidth = parseFloat(styles.borderTopWidth);
  const borderLeftWidth = parseFloat(styles.borderLeftWidth);
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top ?? 0, 0);
    parentRect.left = Math.max(parentRect.left ?? 0, 0);
  }
  const offsets = getClientRect({
    top: (childrenRect.top ?? 0) - (parentRect.top ?? 0) - borderTopWidth,
    left: (childrenRect.left ?? 0) - (parentRect.left ?? 0) - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;
  if (isHTML) {
    const marginTop = parseFloat(styles.marginTop);
    const marginLeft = parseFloat(styles.marginLeft);
    if (isNumber(offsets.top)) {
      offsets.top -= borderTopWidth - marginTop;
    }
    if (isNumber(offsets.bottom)) {
      offsets.bottom -= borderTopWidth - marginTop;
    }
    if (isNumber(offsets.left)) {
      offsets.left -= borderLeftWidth - marginLeft;
    }
    if (isNumber(offsets.right)) {
      offsets.right -= borderLeftWidth - marginLeft;
    }
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }
  return offsets;
}
function getParentNode(element) {
  if (element.nodeName === "HTML") {
    return element;
  }
  return element.parentNode || element.host;
}
function getScrollParent(element) {
  if (!element) {
    return document.body;
  }
  switch (element.nodeName) {
    case "HTML":
    case "BODY":
      return element.ownerDocument.body;
    case "#document":
      return element.body;
    default:
  }
  const {
    overflow,
    overflowX,
    overflowY
  } = getStyleComputedProperty(element);
  if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
    return element;
  }
  return getScrollParent(getParentNode(element));
}
function getScroll(element, side = "top") {
  const upperSide = side === "top" ? "scrollTop" : "scrollLeft";
  const nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    const html = element.ownerDocument.documentElement;
    const scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }
  return element[upperSide];
}
function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll = false) {
  const html = element.ownerDocument.documentElement;
  const relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  const width = Math.max(html.clientWidth, window.innerWidth || 0);
  const height = Math.max(html.clientHeight, window.innerHeight || 0);
  const scrollTop = !excludeScroll ? getScroll(html) : 0;
  const scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
  const offset = {
    top: scrollTop - Number(relativeOffset?.top) + Number(relativeOffset?.marginTop),
    left: scrollLeft - Number(relativeOffset?.left) + Number(relativeOffset?.marginLeft),
    width,
    height
  };
  return getClientRect(offset);
}
function isFixed(element) {
  const nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    return false;
  }
  if (getStyleComputedProperty(element, "position") === "fixed") {
    return true;
  }
  return isFixed(getParentNode(element));
}
function getBoundaries(target, host, padding = 0, boundariesElement, fixedPosition = false) {
  let boundaries = {
    top: 0,
    left: 0
  };
  const offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
  if (boundariesElement === "viewport") {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    let boundariesNode;
    if (boundariesElement === "scrollParent") {
      boundariesNode = getScrollParent(getParentNode(host));
      if (boundariesNode.nodeName === "BODY") {
        boundariesNode = target.ownerDocument.documentElement;
      }
    } else if (boundariesElement === "window") {
      boundariesNode = target.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }
    const offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
    if (offsets && boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
      const {
        height,
        width
      } = getWindowSizes(target.ownerDocument);
      if (isNumber(boundaries.top) && isNumber(offsets.top) && isNumber(offsets.marginTop)) {
        boundaries.top += offsets.top - offsets.marginTop;
      }
      if (isNumber(boundaries.top)) {
        boundaries.bottom = Number(height) + Number(offsets.top);
      }
      if (isNumber(boundaries.left) && isNumber(offsets.left) && isNumber(offsets.marginLeft)) {
        boundaries.left += offsets.left - offsets.marginLeft;
      }
      if (isNumber(boundaries.top)) {
        boundaries.right = Number(width) + Number(offsets.left);
      }
    } else if (offsets) {
      boundaries = offsets;
    }
  }
  if (isNumber(boundaries.left)) {
    boundaries.left += padding;
  }
  if (isNumber(boundaries.top)) {
    boundaries.top += padding;
  }
  if (isNumber(boundaries.right)) {
    boundaries.right -= padding;
  }
  if (isNumber(boundaries.bottom)) {
    boundaries.bottom -= padding;
  }
  return boundaries;
}
function getArea({
  width,
  height
}) {
  return width * height;
}
function computeAutoPlacement(placement, refRect, target, host, allowedPositions = ["top", "bottom", "right", "left"], boundariesElement = "viewport", padding = 0) {
  if (placement.indexOf("auto") === -1) {
    return placement;
  }
  const boundaries = getBoundaries(target, host, padding, boundariesElement);
  const rects = {
    top: {
      width: boundaries?.width ?? 0,
      height: (refRect?.top ?? 0) - (boundaries?.top ?? 0)
    },
    right: {
      width: (boundaries?.right ?? 0) - (refRect?.right ?? 0),
      height: boundaries?.height ?? 0
    },
    bottom: {
      width: boundaries?.width ?? 0,
      height: (boundaries?.bottom ?? 0) - (refRect?.bottom ?? 0)
    },
    left: {
      width: (refRect.left ?? 0) - (boundaries?.left ?? 0),
      height: boundaries?.height ?? 0
    }
  };
  const sortedAreas = Object.keys(rects).map((key) => __spreadProps(__spreadValues({
    position: key
  }, rects[key]), {
    area: getArea(rects[key])
  })).sort((a, b) => b.area - a.area);
  let filteredAreas = sortedAreas.filter(({
    width,
    height
  }) => {
    return width >= target.clientWidth && height >= target.clientHeight;
  });
  filteredAreas = filteredAreas.filter(({
    position
  }) => {
    return allowedPositions.some((allowedPosition) => {
      return allowedPosition === position;
    });
  });
  const computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].position : sortedAreas[0].position;
  const variation = placement.split(" ")[1];
  target.className = target.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${getBsVer().isBs5 ? PlacementForBs5[computedPlacement] : computedPlacement}`);
  return computedPlacement + (variation ? `-${variation}` : "");
}
function getOffsets(data) {
  return {
    width: data.offsets.target.width,
    height: data.offsets.target.height,
    left: Math.floor(data.offsets.target.left ?? 0),
    top: Math.round(data.offsets.target.top ?? 0),
    bottom: Math.round(data.offsets.target.bottom ?? 0),
    right: Math.floor(data.offsets.target.right ?? 0)
  };
}
function getOppositePlacement(placement) {
  const hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  return placement.replace(/left|right|bottom|top/g, (matched) => hash[matched]);
}
function getOppositeVariation(variation) {
  if (variation === "right") {
    return "left";
  } else if (variation === "left") {
    return "right";
  }
  return variation;
}
var parse = (value, def = 0) => value ? parseFloat(value) : def;
function getOuterSizes(element) {
  const window2 = element.ownerDocument.defaultView;
  const styles = window2?.getComputedStyle(element);
  const x = parse(styles?.marginTop) + parse(styles?.marginBottom);
  const y = parse(styles?.marginLeft) + parse(styles?.marginRight);
  return {
    width: Number(element.offsetWidth) + y,
    height: Number(element.offsetHeight) + x
  };
}
function getReferenceOffsets(target, host, fixedPosition) {
  const commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
  return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
}
function getTargetOffsets(target, hostOffsets, position) {
  const placement = position.split(" ")[0];
  const targetRect = getOuterSizes(target);
  const targetOffsets = {
    width: targetRect.width,
    height: targetRect.height
  };
  const isHoriz = ["right", "left"].indexOf(placement) !== -1;
  const mainSide = isHoriz ? "top" : "left";
  const secondarySide = isHoriz ? "left" : "top";
  const measurement = isHoriz ? "height" : "width";
  const secondaryMeasurement = !isHoriz ? "height" : "width";
  targetOffsets[mainSide] = (hostOffsets[mainSide] ?? 0) + hostOffsets[measurement] / 2 - targetRect[measurement] / 2;
  targetOffsets[secondarySide] = placement === secondarySide ? (hostOffsets[secondarySide] ?? 0) - targetRect[secondaryMeasurement] : hostOffsets[getOppositePlacement(secondarySide)] ?? 0;
  return targetOffsets;
}
function isModifierEnabled(options, modifierName) {
  return !!options.modifiers[modifierName]?.enabled;
}
var availablePositions = {
  top: ["top", "top start", "top end"],
  bottom: ["bottom", "bottom start", "bottom end"],
  start: ["start", "start top", "start bottom"],
  end: ["end", "end top", "end bottom"]
};
function checkPopoverMargin(placement, checkPosition) {
  if (!getBsVer().isBs5) {
    return false;
  }
  return availablePositions[checkPosition].includes(placement);
}
function checkMargins(placement) {
  if (!getBsVer().isBs5) {
    return "";
  }
  if (checkPopoverMargin(placement, "end")) {
    return "ms-2";
  }
  if (checkPopoverMargin(placement, "start")) {
    return "me-2";
  }
  if (checkPopoverMargin(placement, "top")) {
    return "mb-2";
  }
  if (checkPopoverMargin(placement, "bottom")) {
    return "mt-2";
  }
  return "";
}
function updateContainerClass(data, renderer) {
  const target = data.instance.target;
  let containerClass = target.className;
  const dataPlacement = getBsVer().isBs5 ? PlacementForBs5[data.placement] : data.placement;
  if (data.placementAuto) {
    containerClass = containerClass.replace(/bs-popover-auto/g, `bs-popover-${dataPlacement}`);
    containerClass = containerClass.replace(/ms-2|me-2|mb-2|mt-2/g, "");
    containerClass = containerClass.replace(/bs-tooltip-auto/g, `bs-tooltip-${dataPlacement}`);
    containerClass = containerClass.replace(/\sauto/g, ` ${dataPlacement}`);
    if (containerClass.indexOf("popover") !== -1) {
      containerClass = containerClass + " " + checkMargins(dataPlacement);
    }
    if (containerClass.indexOf("popover") !== -1 && containerClass.indexOf("popover-auto") === -1) {
      containerClass += " popover-auto";
    }
    if (containerClass.indexOf("tooltip") !== -1 && containerClass.indexOf("tooltip-auto") === -1) {
      containerClass += " tooltip-auto";
    }
  }
  containerClass = containerClass.replace(/left|right|top|bottom|end|start/g, `${dataPlacement.split(" ")[0]}`);
  if (renderer) {
    renderer.setAttribute(target, "class", containerClass);
    return;
  }
  target.className = containerClass;
}
function setStyles(element, styles, renderer) {
  if (!element || !styles) {
    return;
  }
  Object.keys(styles).forEach((prop) => {
    let unit = "";
    if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = "px";
    }
    if (renderer) {
      renderer.setStyle(element, prop, `${String(styles[prop])}${unit}`);
      return;
    }
    element.style[prop] = String(styles[prop]) + unit;
  });
}
function arrow(data) {
  let targetOffsets = data.offsets.target;
  const arrowElement = data.instance.target.querySelector(".arrow");
  if (!arrowElement) {
    return data;
  }
  const isVertical = ["left", "right"].indexOf(data.placement.split(" ")[0]) !== -1;
  const len = isVertical ? "height" : "width";
  const sideCapitalized = isVertical ? "Top" : "Left";
  const side = sideCapitalized.toLowerCase();
  const altSide = isVertical ? "left" : "top";
  const opSide = isVertical ? "bottom" : "right";
  const arrowElementSize = getOuterSizes(arrowElement)[len];
  const placementVariation = data.placement.split(" ")[1];
  if ((data.offsets.host[opSide] ?? 0) - arrowElementSize < (targetOffsets[side] ?? 0)) {
    targetOffsets[side] -= (targetOffsets[side] ?? 0) - ((data.offsets.host[opSide] ?? 0) - arrowElementSize);
  }
  if (Number(data.offsets.host[side]) + Number(arrowElementSize) > (targetOffsets[opSide] ?? 0)) {
    targetOffsets[side] += Number(data.offsets.host[side]) + Number(arrowElementSize) - Number(targetOffsets[opSide]);
  }
  targetOffsets = getClientRect(targetOffsets);
  const css = getStyleComputedProperty(data.instance.target);
  const targetMarginSide = parseFloat(css[`margin${sideCapitalized}`]) || 0;
  const targetBorderSide = parseFloat(css[`border${sideCapitalized}Width`]) || 0;
  let center;
  if (!placementVariation) {
    center = Number(data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
  } else {
    const targetBorderRadius = parseFloat(css["borderRadius"]) || 0;
    const targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
    center = side === placementVariation ? Number(data.offsets.host[side]) + targetSideArrowOffset : Number(data.offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
  }
  let sideValue = center - (targetOffsets[side] ?? 0) - targetMarginSide - targetBorderSide;
  sideValue = Math.max(Math.min(targetOffsets[len] - (arrowElementSize + 5), sideValue), 0);
  data.offsets.arrow = {
    [side]: Math.round(sideValue),
    [altSide]: ""
    // make sure to unset any eventual altSide value from the DOM node
  };
  data.instance.arrow = arrowElement;
  return data;
}
function flip(data) {
  data.offsets.target = getClientRect(data.offsets.target);
  if (!isModifierEnabled(data.options, "flip")) {
    data.offsets.target = __spreadValues(__spreadValues({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
    return data;
  }
  const boundaries = getBoundaries(
    data.instance.target,
    data.instance.host,
    0,
    // padding
    "viewport",
    false
    // positionFixed
  );
  let placement = data.placement.split(" ")[0];
  let variation = data.placement.split(" ")[1] || "";
  const offsetsHost = data.offsets.host;
  const target = data.instance.target;
  const host = data.instance.host;
  const adaptivePosition = computeAutoPlacement("auto", offsetsHost, target, host, data.options.allowedPositions);
  const flipOrder = [placement, adaptivePosition];
  flipOrder.forEach((step, index) => {
    if (placement !== step || flipOrder.length === index + 1) {
      return;
    }
    placement = data.placement.split(" ")[0];
    const overlapsRef = placement === "left" && Math.floor(data.offsets.target.right ?? 0) > Math.floor(data.offsets.host.left ?? 0) || placement === "right" && Math.floor(data.offsets.target.left ?? 0) < Math.floor(data.offsets.host.right ?? 0) || placement === "top" && Math.floor(data.offsets.target.bottom ?? 0) > Math.floor(data.offsets.host.top ?? 0) || placement === "bottom" && Math.floor(data.offsets.target.top ?? 0) < Math.floor(data.offsets.host.bottom ?? 0);
    const overflowsLeft = Math.floor(data.offsets.target.left ?? 0) < Math.floor(boundaries.left ?? 0);
    const overflowsRight = Math.floor(data.offsets.target.right ?? 0) > Math.floor(boundaries.right ?? 0);
    const overflowsTop = Math.floor(data.offsets.target.top ?? 0) < Math.floor(boundaries.top ?? 0);
    const overflowsBottom = Math.floor(data.offsets.target.bottom ?? 0) > Math.floor(boundaries.bottom ?? 0);
    const overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
    const isVertical = ["top", "bottom"].indexOf(placement) !== -1;
    const flippedVariation = isVertical && variation === "left" && overflowsLeft || isVertical && variation === "right" && overflowsRight || !isVertical && variation === "left" && overflowsTop || !isVertical && variation === "right" && overflowsBottom;
    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }
      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }
      data.placement = placement + (variation ? ` ${variation}` : "");
      data.offsets.target = __spreadValues(__spreadValues({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
    }
  });
  return data;
}
function initData(targetElement, hostElement, position, options) {
  if (!targetElement || !hostElement) {
    return;
  }
  const hostElPosition = getReferenceOffsets(targetElement, hostElement);
  if (!position.match(/^(auto)*\s*(left|right|top|bottom|start|end)*$/) && !position.match(/^(left|right|top|bottom|start|end)*(?: (left|right|top|bottom|start|end))*$/)) {
    position = "auto";
  }
  const placementAuto = !!position.match(/auto/g);
  let placement = position.match(/auto\s(left|right|top|bottom|start|end)/) ? position.split(" ")[1] || "auto" : position;
  const matches = placement.match(/^(left|right|top|bottom|start|end)* ?(?!\1)(left|right|top|bottom|start|end)?/);
  if (matches) {
    placement = matches[1] + (matches[2] ? ` ${matches[2]}` : "");
  }
  if (["left right", "right left", "top bottom", "bottom top"].indexOf(placement) !== -1) {
    placement = "auto";
  }
  placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : void 0);
  const targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
  return {
    options: options || {
      modifiers: {}
    },
    instance: {
      target: targetElement,
      host: hostElement,
      arrow: void 0
    },
    offsets: {
      target: targetOffset,
      host: hostElPosition,
      arrow: void 0
    },
    positionFixed: false,
    placement,
    placementAuto
  };
}
function preventOverflow(data) {
  if (!isModifierEnabled(data.options, "preventOverflow")) {
    return data;
  }
  const transformProp = "transform";
  const targetStyles = data.instance.target.style;
  const {
    top,
    left,
    [transformProp]: transform
  } = targetStyles;
  targetStyles.top = "";
  targetStyles.left = "";
  targetStyles[transformProp] = "";
  const boundaries = getBoundaries(
    data.instance.target,
    data.instance.host,
    0,
    // padding
    data.options.modifiers.preventOverflow?.boundariesElement || "scrollParent",
    false
    // positionFixed
  );
  targetStyles.top = top;
  targetStyles.left = left;
  targetStyles[transformProp] = transform;
  const order = ["left", "right", "top", "bottom"];
  const check = {
    primary(placement) {
      let value = data.offsets.target[placement];
      if ((data.offsets.target[placement] ?? 0) < (boundaries[placement] ?? 0)) {
        value = Math.max(data.offsets.target[placement] ?? 0, boundaries[placement] ?? 0);
      }
      return {
        [placement]: value
      };
    },
    secondary(placement) {
      const isPlacementHorizontal = placement === "right";
      const mainSide = isPlacementHorizontal ? "left" : "top";
      const measurement = isPlacementHorizontal ? "width" : "height";
      let value = data.offsets.target[mainSide];
      if ((data.offsets.target[placement] ?? 0) > (boundaries[placement] ?? 0)) {
        value = Math.min(data.offsets.target[mainSide] ?? 0, (boundaries[placement] ?? 0) - data.offsets.target[measurement]);
      }
      return {
        [mainSide]: value
      };
    }
  };
  order.forEach((placement) => {
    const side = ["left", "top", "start"].indexOf(placement) !== -1 ? check["primary"] : check["secondary"];
    data.offsets.target = __spreadValues(__spreadValues({}, data.offsets.target), side(placement));
  });
  return data;
}
function shift(data) {
  const placement = data.placement;
  const basePlacement = placement.split(" ")[0];
  const shiftVariation = placement.split(" ")[1];
  if (shiftVariation) {
    const {
      host,
      target
    } = data.offsets;
    const isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
    const side = isVertical ? "left" : "top";
    const measurement = isVertical ? "width" : "height";
    const shiftOffsets = {
      start: {
        [side]: host[side]
      },
      end: {
        [side]: (host[side] ?? 0) + host[measurement] - target[measurement]
      }
    };
    data.offsets.target = __spreadValues(__spreadValues({}, target), {
      [side]: side === shiftVariation ? shiftOffsets.start[side] : shiftOffsets.end[side]
    });
  }
  return data;
}
var Positioning = class {
  position(hostElement, targetElement) {
    return this.offset(
      hostElement,
      targetElement
      /*, false*/
    );
  }
  offset(hostElement, targetElement) {
    return getReferenceOffsets(targetElement, hostElement);
  }
  positionElements(hostElement, targetElement, position, appendToBody, options) {
    const chainOfModifiers = [flip, shift, preventOverflow, arrow];
    const _position = MapPlacementInToRL[position];
    const data = initData(targetElement, hostElement, _position, options);
    if (!data) {
      return;
    }
    return chainOfModifiers.reduce((modifiedData, modifier) => modifier(modifiedData), data);
  }
};
var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
  const data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
  if (!data) {
    return;
  }
  const offsets = getOffsets(data);
  setStyles(targetElement, {
    "will-change": "transform",
    top: "0px",
    left: "0px",
    transform: `translate3d(${offsets.left}px, ${offsets.top}px, 0px)`
  }, renderer);
  if (data.instance.arrow) {
    setStyles(data.instance.arrow, data.offsets.arrow, renderer);
  }
  updateContainerClass(data, renderer);
}
var _PositioningService = class _PositioningService {
  constructor(ngZone, rendererFactory, platformId) {
    this.update$$ = new Subject();
    this.positionElements = /* @__PURE__ */ new Map();
    this.isDisabled = false;
    if (isPlatformBrowser(platformId)) {
      ngZone.runOutsideAngular(() => {
        this.triggerEvent$ = merge(fromEvent(window, "scroll", {
          passive: true
        }), fromEvent(window, "resize", {
          passive: true
        }), of(0, animationFrameScheduler), this.update$$);
        this.triggerEvent$.subscribe(() => {
          if (this.isDisabled) {
            return;
          }
          this.positionElements.forEach((positionElement) => {
            positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, this.options, rendererFactory.createRenderer(null, null));
          });
        });
      });
    }
  }
  position(options) {
    this.addPositionElement(options);
  }
  get event$() {
    return this.triggerEvent$;
  }
  disable() {
    this.isDisabled = true;
  }
  enable() {
    this.isDisabled = false;
  }
  addPositionElement(options) {
    this.positionElements.set(_getHtmlElement(options.element), options);
  }
  calcPosition() {
    this.update$$.next(null);
  }
  deletePositionElement(elRef) {
    this.positionElements.delete(_getHtmlElement(elRef));
  }
  setOptions(options) {
    this.options = options;
  }
};
_PositioningService.ɵfac = function PositioningService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PositioningService)(ɵɵinject(NgZone), ɵɵinject(RendererFactory2), ɵɵinject(PLATFORM_ID));
};
_PositioningService.ɵprov = ɵɵdefineInjectable({
  token: _PositioningService,
  factory: _PositioningService.ɵfac,
  providedIn: "root"
});
var PositioningService = _PositioningService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositioningService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: RendererFactory2
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
function _getHtmlElement(element) {
  if (typeof element === "string") {
    return document.querySelector(element);
  }
  if (element instanceof ElementRef) {
    return element.nativeElement;
  }
  return element ?? null;
}

// node_modules/ngx-bootstrap/component-loader/fesm2022/ngx-bootstrap-component-loader.mjs
var ContentRef = class {
  constructor(nodes, viewRef, componentRef) {
    this.nodes = nodes;
    this.viewRef = viewRef;
    this.componentRef = componentRef;
  }
};
var ComponentLoader = class {
  /**
   * Do not use this directly, it should be instanced via
   * `ComponentLoadFactory.attach`
   * @internal
   */
  constructor(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService, _document) {
    this._viewContainerRef = _viewContainerRef;
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._injector = _injector;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._ngZone = _ngZone;
    this._applicationRef = _applicationRef;
    this._posService = _posService;
    this._document = _document;
    this.onBeforeShow = new EventEmitter();
    this.onShown = new EventEmitter();
    this.onBeforeHide = new EventEmitter();
    this.onHidden = new EventEmitter();
    this._providers = [];
    this._isHiding = false;
    this.containerDefaultSelector = "body";
    this._listenOpts = {};
    this._globalListener = Function.prototype;
  }
  get isShown() {
    if (this._isHiding) {
      return false;
    }
    return !!this._componentRef;
  }
  attach(compType) {
    this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(compType);
    return this;
  }
  // todo: add behaviour: to target element, `body`, custom element
  to(container) {
    this.container = container || this.container;
    return this;
  }
  position(opts) {
    if (!opts) {
      return this;
    }
    this.attachment = opts.attachment || this.attachment;
    this._elementRef = opts.target || this._elementRef;
    return this;
  }
  provide(provider) {
    this._providers.push(provider);
    return this;
  }
  // todo: appendChild to element or document.querySelector(this.container)
  show(opts = {}) {
    this._subscribePositioning();
    this._innerComponent = void 0;
    if (!this._componentRef) {
      this.onBeforeShow.emit();
      this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
      const injector = Injector.create({
        providers: this._providers,
        parent: this._injector
      });
      if (!this._componentFactory) {
        return;
      }
      this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
      this._applicationRef.attachView(this._componentRef.hostView);
      this.instance = this._componentRef.instance;
      Object.assign(this._componentRef.instance, opts);
      if (this.container instanceof ElementRef) {
        this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
      }
      if (typeof this.container === "string" && typeof this._document !== "undefined") {
        const selectedElement = this._document.querySelector(this.container) || this._document.querySelector(this.containerDefaultSelector);
        if (!selectedElement) {
          return;
        }
        selectedElement.appendChild(this._componentRef.location.nativeElement);
      }
      if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
        this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
      }
      if (this._contentRef.componentRef) {
        this._innerComponent = this._contentRef.componentRef.instance;
        this._contentRef.componentRef.changeDetectorRef.markForCheck();
        this._contentRef.componentRef.changeDetectorRef.detectChanges();
      }
      this._componentRef.changeDetectorRef.markForCheck();
      this._componentRef.changeDetectorRef.detectChanges();
      this.onShown.emit(opts.id ? {
        id: opts.id
      } : this._componentRef.instance);
    }
    this._registerOutsideClick();
    return this._componentRef;
  }
  hide(id) {
    if (!this._componentRef) {
      return this;
    }
    this._posService.deletePositionElement(this._componentRef.location);
    this.onBeforeHide.emit(this._componentRef.instance);
    const componentEl = this._componentRef.location.nativeElement;
    componentEl.parentNode?.removeChild(componentEl);
    this._contentRef?.componentRef?.destroy();
    if (this._viewContainerRef && this._contentRef?.viewRef) {
      this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
    }
    this._contentRef?.viewRef?.destroy();
    this._componentRef?.destroy();
    this._contentRef = void 0;
    this._componentRef = void 0;
    this._removeGlobalListener();
    this.onHidden.emit(id ? {
      id
    } : null);
    return this;
  }
  toggle() {
    if (this.isShown) {
      this.hide();
      return;
    }
    this.show();
  }
  dispose() {
    if (this.isShown) {
      this.hide();
    }
    this._unsubscribePositioning();
    if (this._unregisterListenersFn) {
      this._unregisterListenersFn();
    }
  }
  listen(listenOpts) {
    this.triggers = listenOpts.triggers || this.triggers;
    this._listenOpts.outsideClick = listenOpts.outsideClick;
    this._listenOpts.outsideEsc = listenOpts.outsideEsc;
    listenOpts.target = listenOpts.target || this._elementRef?.nativeElement;
    const hide = this._listenOpts.hide = () => listenOpts.hide ? listenOpts.hide() : void this.hide();
    const show = this._listenOpts.show = (registerHide) => {
      listenOpts.show ? listenOpts.show(registerHide) : this.show(registerHide);
      registerHide();
    };
    const toggle = (registerHide) => {
      this.isShown ? hide() : show(registerHide);
    };
    if (this._renderer) {
      this._unregisterListenersFn = listenToTriggersV2(this._renderer, {
        target: listenOpts.target,
        triggers: listenOpts.triggers,
        show,
        hide,
        toggle
      });
    }
    return this;
  }
  _removeGlobalListener() {
    if (this._globalListener) {
      this._globalListener();
      this._globalListener = Function.prototype;
    }
  }
  attachInline(vRef, template) {
    if (vRef && template) {
      this._inlineViewRef = vRef.createEmbeddedView(template);
    }
    return this;
  }
  _registerOutsideClick() {
    if (!this._componentRef || !this._componentRef.location) {
      return;
    }
    let unsubscribeOutsideClick = Function.prototype;
    let unsubscribeEscClick = Function.prototype;
    if (this._listenOpts.outsideClick) {
      const target = this._componentRef.location.nativeElement;
      setTimeout(() => {
        if (this._renderer && this._elementRef) {
          unsubscribeOutsideClick = registerOutsideClick(this._renderer, {
            targets: [target, this._elementRef.nativeElement],
            outsideClick: this._listenOpts.outsideClick,
            hide: () => this._listenOpts.hide && this._listenOpts.hide()
          });
        }
      });
    }
    if (this._listenOpts.outsideEsc && this._renderer && this._elementRef) {
      const target = this._componentRef.location.nativeElement;
      unsubscribeEscClick = registerEscClick(this._renderer, {
        targets: [target, this._elementRef.nativeElement],
        outsideEsc: this._listenOpts.outsideEsc,
        hide: () => this._listenOpts.hide && this._listenOpts.hide()
      });
    }
    this._globalListener = () => {
      unsubscribeOutsideClick();
      unsubscribeEscClick();
    };
  }
  getInnerComponent() {
    return this._innerComponent;
  }
  _subscribePositioning() {
    if (this._zoneSubscription || !this.attachment) {
      return;
    }
    this.onShown.subscribe(() => {
      this._posService.position({
        element: this._componentRef?.location,
        target: this._elementRef,
        attachment: this.attachment,
        appendToBody: this.container === "body"
      });
    });
    this._zoneSubscription = this._ngZone.onStable.subscribe(() => {
      if (!this._componentRef) {
        return;
      }
      this._posService.calcPosition();
    });
  }
  _unsubscribePositioning() {
    if (!this._zoneSubscription) {
      return;
    }
    this._zoneSubscription.unsubscribe();
    this._zoneSubscription = void 0;
  }
  _getContentRef(content, context, initialState) {
    if (!content) {
      return new ContentRef([]);
    }
    if (content instanceof TemplateRef) {
      if (this._viewContainerRef) {
        const _viewRef = this._viewContainerRef.createEmbeddedView(content, context);
        _viewRef.markForCheck();
        return new ContentRef([_viewRef.rootNodes], _viewRef);
      }
      const viewRef = content.createEmbeddedView({});
      this._applicationRef.attachView(viewRef);
      return new ContentRef([viewRef.rootNodes], viewRef);
    }
    if (typeof content === "function") {
      const contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
      const modalContentInjector = Injector.create({
        providers: this._providers,
        parent: this._injector
      });
      const componentRef = contentCmptFactory.create(modalContentInjector);
      Object.assign(componentRef.instance, initialState);
      this._applicationRef.attachView(componentRef.hostView);
      return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
    }
    const nodes = this._renderer ? [this._renderer.createText(`${content}`)] : [];
    return new ContentRef([nodes]);
  }
};
var _ComponentLoaderFactory = class _ComponentLoaderFactory {
  constructor(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef, _document) {
    this._componentFactoryResolver = _componentFactoryResolver;
    this._ngZone = _ngZone;
    this._injector = _injector;
    this._posService = _posService;
    this._applicationRef = _applicationRef;
    this._document = _document;
  }
  /**
   *
   * @param _elementRef
   * @param _viewContainerRef
   * @param _renderer
   */
  createLoader(_elementRef, _viewContainerRef, _renderer) {
    return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService, this._document);
  }
};
_ComponentLoaderFactory.ɵfac = function ComponentLoaderFactory_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ComponentLoaderFactory)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(NgZone), ɵɵinject(Injector), ɵɵinject(PositioningService), ɵɵinject(ApplicationRef), ɵɵinject(DOCUMENT));
};
_ComponentLoaderFactory.ɵprov = ɵɵdefineInjectable({
  token: _ComponentLoaderFactory,
  factory: _ComponentLoaderFactory.ɵfac,
  providedIn: "root"
});
var ComponentLoaderFactory = _ComponentLoaderFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentLoaderFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ComponentFactoryResolver$1
  }, {
    type: NgZone
  }, {
    type: Injector
  }, {
    type: PositioningService
  }, {
    type: ApplicationRef
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();

// node_modules/ngx-bootstrap/dropdown/fesm2022/ngx-bootstrap-dropdown.mjs
var _c0 = ["*"];
var _c1 = (a0) => ({
  dropdown: a0
});
var _BsDropdownConfig = class _BsDropdownConfig {
  constructor() {
    this.autoClose = true;
    this.insideClick = false;
    this.isAnimated = false;
    this.stopOnClickPropagation = false;
  }
};
_BsDropdownConfig.ɵfac = function BsDropdownConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BsDropdownConfig)();
};
_BsDropdownConfig.ɵprov = ɵɵdefineInjectable({
  token: _BsDropdownConfig,
  factory: _BsDropdownConfig.ɵfac,
  providedIn: "root"
});
var BsDropdownConfig = _BsDropdownConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDropdownConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _BsDropdownState = class _BsDropdownState {
  constructor() {
    this.direction = "down";
    this.autoClose = true;
    this.insideClick = false;
    this.isAnimated = false;
    this.stopOnClickPropagation = false;
    this.isOpenChange = new EventEmitter();
    this.isDisabledChange = new EventEmitter();
    this.toggleClick = new EventEmitter();
    this.counts = 0;
    this.dropdownMenu = new Promise((resolve) => {
      this.resolveDropdownMenu = resolve;
    });
  }
};
_BsDropdownState.ɵfac = function BsDropdownState_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BsDropdownState)();
};
_BsDropdownState.ɵprov = ɵɵdefineInjectable({
  token: _BsDropdownState,
  factory: _BsDropdownState.ɵfac,
  providedIn: "platform"
});
var BsDropdownState = _BsDropdownState;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDropdownState, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], () => [], null);
})();
var DROPDOWN_ANIMATION_TIMING = "220ms cubic-bezier(0, 0, 0.2, 1)";
var dropdownAnimation = [style({
  height: 0,
  overflow: "hidden"
}), animate(DROPDOWN_ANIMATION_TIMING, style({
  height: "*",
  overflow: "hidden"
}))];
var _BsDropdownContainerComponent = class _BsDropdownContainerComponent {
  get direction() {
    return this._state.direction;
  }
  constructor(_state, cd, _renderer, _element, _builder) {
    this._state = _state;
    this.cd = cd;
    this._renderer = _renderer;
    this._element = _element;
    this.isOpen = false;
    this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
    this._subscription = _state.isOpenChange.subscribe((value) => {
      this.isOpen = value;
      const dropdown = this._element.nativeElement.querySelector(".dropdown-menu");
      this._renderer.addClass(this._element.nativeElement.querySelector("div"), "open");
      if (dropdown) {
        this._renderer.addClass(dropdown, "show");
        if (dropdown.classList.contains("dropdown-menu-right") || dropdown.classList.contains("dropdown-menu-end")) {
          this._renderer.setStyle(dropdown, "left", "auto");
          this._renderer.setStyle(dropdown, "right", "0");
        }
        if (this.direction === "up") {
          this._renderer.setStyle(dropdown, "top", "auto");
          this._renderer.setStyle(dropdown, "transform", "translateY(-101%)");
        }
      }
      if (dropdown && this._state.isAnimated) {
        this._factoryDropDownAnimation.create(dropdown).play();
      }
      this.cd.markForCheck();
      this.cd.detectChanges();
    });
  }
  /** @internal */
  _contains(el) {
    return this._element.nativeElement.contains(el);
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
};
_BsDropdownContainerComponent.ɵfac = function BsDropdownContainerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BsDropdownContainerComponent)(ɵɵdirectiveInject(BsDropdownState), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AnimationBuilder));
};
_BsDropdownContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsDropdownContainerComponent,
  selectors: [["bs-dropdown-container"]],
  hostAttrs: [2, "display", "block", "position", "absolute", "z-index", "1040"],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 9,
  consts: [[3, "ngClass"]],
  template: function BsDropdownContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("dropup", ctx.direction === "up")("show", ctx.isOpen)("open", ctx.isOpen);
      ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c1, ctx.direction === "down"));
    }
  },
  dependencies: [NgClass],
  encapsulation: 2,
  changeDetection: 0
});
var BsDropdownContainerComponent = _BsDropdownContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDropdownContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-dropdown-container",
      changeDetection: ChangeDetectionStrategy.OnPush,
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        style: "display:block;position: absolute;z-index: 1040"
      },
      template: `
    <div [class.dropup]="direction === 'up'"
         [ngClass]="{dropdown: direction === 'down'}"
         [class.show]="isOpen"
         [class.open]="isOpen"><ng-content></ng-content>
    </div>
  `
    }]
  }], () => [{
    type: BsDropdownState
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: AnimationBuilder
  }], null);
})();
var _BsDropdownDirective = class _BsDropdownDirective {
  /**
   * Indicates that dropdown will be closed on item or document click,
   * and after pressing ESC
   */
  set autoClose(value) {
    this._state.autoClose = value;
  }
  get autoClose() {
    return this._state.autoClose;
  }
  /**
   * Indicates that dropdown will be animated
   */
  set isAnimated(value) {
    this._state.isAnimated = value;
  }
  get isAnimated() {
    return this._state.isAnimated;
  }
  /**
   * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
   */
  set insideClick(value) {
    this._state.insideClick = value;
  }
  get insideClick() {
    return this._state.insideClick;
  }
  /**
   * Disables dropdown toggle and hides dropdown menu if opened
   */
  set isDisabled(value) {
    this._isDisabled = value;
    this._state.isDisabledChange.emit(value);
    if (value) {
      this.hide();
    }
  }
  get isDisabled() {
    return this._isDisabled;
  }
  /**
   * Returns whether or not the popover is currently being shown
   */
  get isOpen() {
    if (this._showInline) {
      return this._isInlineOpen;
    }
    return this._dropdown.isShown;
  }
  set isOpen(value) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }
  get _showInline() {
    return !this.container;
  }
  constructor(_elementRef, _renderer, _viewContainerRef, _cis, _state, _config, _builder) {
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._viewContainerRef = _viewContainerRef;
    this._cis = _cis;
    this._state = _state;
    this._config = _config;
    this.dropup = false;
    this._isInlineOpen = false;
    this._isDisabled = false;
    this._subscriptions = [];
    this._isInited = false;
    this._state.autoClose = this._config.autoClose;
    this._state.insideClick = this._config.insideClick;
    this._state.isAnimated = this._config.isAnimated;
    this._state.stopOnClickPropagation = this._config.stopOnClickPropagation;
    this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
    this._dropdown = this._cis.createLoader(this._elementRef, this._viewContainerRef, this._renderer).provide({
      provide: BsDropdownState,
      useValue: this._state
    });
    this.onShown = this._dropdown.onShown;
    this.onHidden = this._dropdown.onHidden;
    this.isOpenChange = this._state.isOpenChange;
  }
  ngOnInit() {
    if (this._isInited) {
      return;
    }
    this._isInited = true;
    this._dropdown.listen({
      // because of dropdown inline mode
      outsideClick: false,
      triggers: this.triggers,
      show: () => this.show()
    });
    this._subscriptions.push(this._state.toggleClick.subscribe((value) => this.toggle(value)));
    this._subscriptions.push(this._state.isDisabledChange.pipe(filter((value) => value)).subscribe(() => this.hide()));
  }
  /**
   * Opens an element’s popover. This is considered a “manual” triggering of
   * the popover.
   */
  show() {
    if (this.isOpen || this.isDisabled) {
      return;
    }
    if (this._showInline) {
      if (!this._inlinedMenu) {
        this._state.dropdownMenu.then((dropdownMenu) => {
          this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
          this._inlinedMenu = this._dropdown._inlineViewRef;
          this.addBs4Polyfills();
          if (this._inlinedMenu) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0].parentNode, "open");
          }
          this.playAnimation();
        }).catch();
      }
      this.addBs4Polyfills();
      this._isInlineOpen = true;
      this.onShown.emit(true);
      this._state.isOpenChange.emit(true);
      this.playAnimation();
      return;
    }
    this._state.dropdownMenu.then((dropdownMenu) => {
      const _dropup = this.dropup || typeof this.dropup !== "undefined" && this.dropup;
      this._state.direction = _dropup ? "up" : "down";
      const _placement = this.placement || (_dropup ? "top start" : "bottom start");
      this._dropdown.attach(BsDropdownContainerComponent).to(this.container).position({
        attachment: _placement
      }).show({
        content: dropdownMenu.templateRef,
        placement: _placement
      });
      this._state.isOpenChange.emit(true);
    }).catch();
  }
  /**
   * Closes an element’s popover. This is considered a “manual” triggering of
   * the popover.
   */
  hide() {
    if (!this.isOpen) {
      return;
    }
    if (this._showInline) {
      this.removeShowClass();
      this.removeDropupStyles();
      this._isInlineOpen = false;
      this.onHidden.emit(true);
    } else {
      this._dropdown.hide();
    }
    this._state.isOpenChange.emit(false);
  }
  /**
   * Toggles an element’s popover. This is considered a “manual” triggering of
   * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
   * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
   */
  toggle(value) {
    if (this.isOpen || !value) {
      return this.hide();
    }
    return this.show();
  }
  /** @internal */
  _contains(event) {
    return this._elementRef.nativeElement.contains(event.target) || this._dropdown.instance && this._dropdown.instance._contains(event.target);
  }
  navigationClick(event) {
    const ref = this._elementRef.nativeElement.querySelector(".dropdown-menu");
    if (!ref) {
      return;
    }
    const firstActive = this._elementRef.nativeElement.ownerDocument.activeElement;
    const allRef = ref.querySelectorAll(".dropdown-item");
    switch (event.keyCode) {
      case 38:
        if (this._state.counts > 0) {
          allRef[--this._state.counts].focus();
        }
        break;
      case 40:
        if (this._state.counts + 1 < allRef.length) {
          if (firstActive.classList !== allRef[this._state.counts].classList) {
            allRef[this._state.counts].focus();
          } else {
            allRef[++this._state.counts].focus();
          }
        }
        break;
      default:
    }
    event.preventDefault();
  }
  ngOnDestroy() {
    for (const sub of this._subscriptions) {
      sub.unsubscribe();
    }
    this._dropdown.dispose();
  }
  addBs4Polyfills() {
    this.addShowClass();
    this.checkRightAlignment();
    this.addDropupStyles();
  }
  playAnimation() {
    if (this._state.isAnimated && this._inlinedMenu) {
      setTimeout(() => {
        if (this._inlinedMenu) {
          this._factoryDropDownAnimation.create(this._inlinedMenu.rootNodes[0]).play();
        }
      });
    }
  }
  addShowClass() {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      this._renderer.addClass(this._inlinedMenu.rootNodes[0], "show");
    }
  }
  removeShowClass() {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      this._renderer.removeClass(this._inlinedMenu.rootNodes[0], "show");
    }
  }
  checkRightAlignment() {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      const isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains("dropdown-menu-right") || this._inlinedMenu.rootNodes[0].classList.contains("dropdown-menu-end");
      this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "left", isRightAligned ? "auto" : "0");
      this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "right", isRightAligned ? "0" : "auto");
    }
  }
  addDropupStyles() {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "top", this.dropup ? "auto" : "100%");
      this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "transform", this.dropup ? "translateY(-101%)" : "translateY(0)");
      this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "bottom", "auto");
    }
  }
  removeDropupStyles() {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], "top");
      this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], "transform");
      this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], "bottom");
    }
  }
};
_BsDropdownDirective.ɵfac = function BsDropdownDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BsDropdownDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentLoaderFactory), ɵɵdirectiveInject(BsDropdownState), ɵɵdirectiveInject(BsDropdownConfig), ɵɵdirectiveInject(AnimationBuilder));
};
_BsDropdownDirective.ɵdir = ɵɵdefineDirective({
  type: _BsDropdownDirective,
  selectors: [["", "bsDropdown", ""], ["", "dropdown", ""]],
  hostVars: 6,
  hostBindings: function BsDropdownDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown.arrowDown", function BsDropdownDirective_keydown_arrowDown_HostBindingHandler($event) {
        return ctx.navigationClick($event);
      })("keydown.arrowUp", function BsDropdownDirective_keydown_arrowUp_HostBindingHandler($event) {
        return ctx.navigationClick($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("dropup", ctx.dropup)("open", ctx.isOpen)("show", ctx.isOpen);
    }
  },
  inputs: {
    placement: "placement",
    triggers: "triggers",
    container: "container",
    dropup: "dropup",
    autoClose: "autoClose",
    isAnimated: "isAnimated",
    insideClick: "insideClick",
    isDisabled: "isDisabled",
    isOpen: "isOpen"
  },
  outputs: {
    isOpenChange: "isOpenChange",
    onShown: "onShown",
    onHidden: "onHidden"
  },
  exportAs: ["bs-dropdown"],
  features: [ɵɵProvidersFeature([BsDropdownState])]
});
var BsDropdownDirective = _BsDropdownDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDropdownDirective, [{
    type: Directive,
    args: [{
      selector: "[bsDropdown], [dropdown]",
      exportAs: "bs-dropdown",
      providers: [BsDropdownState],
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "[class.dropup]": "dropup",
        "[class.open]": "isOpen",
        "[class.show]": "isOpen"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }, {
    type: BsDropdownState
  }, {
    type: BsDropdownConfig
  }, {
    type: AnimationBuilder
  }], {
    placement: [{
      type: Input
    }],
    triggers: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    dropup: [{
      type: Input
    }],
    autoClose: [{
      type: Input
    }],
    isAnimated: [{
      type: Input
    }],
    insideClick: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    isOpen: [{
      type: Input
    }],
    isOpenChange: [{
      type: Output
    }],
    onShown: [{
      type: Output
    }],
    onHidden: [{
      type: Output
    }],
    navigationClick: [{
      type: HostListener,
      args: ["keydown.arrowDown", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.arrowUp", ["$event"]]
    }]
  });
})();
var _BsDropdownMenuDirective = class _BsDropdownMenuDirective {
  constructor(_state, _viewContainer, _templateRef) {
    _state.resolveDropdownMenu({
      templateRef: _templateRef,
      viewContainer: _viewContainer
    });
  }
};
_BsDropdownMenuDirective.ɵfac = function BsDropdownMenuDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BsDropdownMenuDirective)(ɵɵdirectiveInject(BsDropdownState), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
_BsDropdownMenuDirective.ɵdir = ɵɵdefineDirective({
  type: _BsDropdownMenuDirective,
  selectors: [["", "bsDropdownMenu", ""], ["", "dropdownMenu", ""]],
  exportAs: ["bs-dropdown-menu"]
});
var BsDropdownMenuDirective = _BsDropdownMenuDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDropdownMenuDirective, [{
    type: Directive,
    args: [{
      selector: "[bsDropdownMenu],[dropdownMenu]",
      exportAs: "bs-dropdown-menu"
    }]
  }], () => [{
    type: BsDropdownState
  }, {
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }], null);
})();
var _BsDropdownToggleDirective = class _BsDropdownToggleDirective {
  constructor(_changeDetectorRef, _dropdown, _element, _renderer, _state) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dropdown = _dropdown;
    this._element = _element;
    this._renderer = _renderer;
    this._state = _state;
    this.isOpen = false;
    this._subscriptions = [];
    this._subscriptions.push(this._state.isOpenChange.subscribe((value) => {
      this.isOpen = value;
      if (value) {
        this._documentClickListener = this._renderer.listen("document", "click", (event) => {
          if (this._state.autoClose && event.button !== 2 && !this._element.nativeElement.contains(event.target) && !(this._state.insideClick && this._dropdown._contains(event))) {
            this._state.toggleClick.emit(false);
            this._changeDetectorRef.detectChanges();
          }
        });
        this._escKeyUpListener = this._renderer.listen(this._element.nativeElement, "keyup.esc", () => {
          if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
            this._changeDetectorRef.detectChanges();
          }
        });
      } else {
        this._documentClickListener && this._documentClickListener();
        this._escKeyUpListener && this._escKeyUpListener();
      }
    }));
    this._subscriptions.push(this._state.isDisabledChange.subscribe((value) => this.isDisabled = value || void 0));
  }
  onClick(event) {
    if (this._state.stopOnClickPropagation) {
      event.stopPropagation();
    }
    if (this.isDisabled) {
      return;
    }
    this._state.toggleClick.emit(true);
  }
  ngOnDestroy() {
    if (this._documentClickListener) {
      this._documentClickListener();
    }
    if (this._escKeyUpListener) {
      this._escKeyUpListener();
    }
    for (const sub of this._subscriptions) {
      sub.unsubscribe();
    }
  }
};
_BsDropdownToggleDirective.ɵfac = function BsDropdownToggleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BsDropdownToggleDirective)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(BsDropdownDirective), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BsDropdownState));
};
_BsDropdownToggleDirective.ɵdir = ɵɵdefineDirective({
  type: _BsDropdownToggleDirective,
  selectors: [["", "bsDropdownToggle", ""], ["", "dropdownToggle", ""]],
  hostVars: 3,
  hostBindings: function BsDropdownToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function BsDropdownToggleDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-haspopup", true)("disabled", ctx.isDisabled)("aria-expanded", ctx.isOpen);
    }
  },
  exportAs: ["bs-dropdown-toggle"]
});
var BsDropdownToggleDirective = _BsDropdownToggleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDropdownToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[bsDropdownToggle],[dropdownToggle]",
      exportAs: "bs-dropdown-toggle",
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "[attr.aria-haspopup]": "true"
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: BsDropdownDirective
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: BsDropdownState
  }], {
    isDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    isOpen: [{
      type: HostBinding,
      args: ["attr.aria-expanded"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _BsDropdownModule = class _BsDropdownModule {
  static forRoot() {
    return {
      ngModule: _BsDropdownModule,
      providers: [ComponentLoaderFactory, PositioningService, BsDropdownState]
    };
  }
};
_BsDropdownModule.ɵfac = function BsDropdownModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BsDropdownModule)();
};
_BsDropdownModule.ɵmod = ɵɵdefineNgModule({
  type: _BsDropdownModule,
  declarations: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownDirective],
  imports: [CommonModule],
  exports: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective]
});
_BsDropdownModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var BsDropdownModule = _BsDropdownModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDropdownModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownDirective],
      exports: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective]
    }]
  }], null, null);
})();
export {
  BsDropdownConfig,
  BsDropdownContainerComponent,
  BsDropdownDirective,
  BsDropdownMenuDirective,
  BsDropdownModule,
  BsDropdownState,
  BsDropdownToggleDirective
};
/*! Bundled license information:

ngx-bootstrap/utils/fesm2022/ngx-bootstrap-utils.mjs:
  (**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=ngx-bootstrap_dropdown.js.map
