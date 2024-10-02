import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-IYQ6M6U2.js";
import {
  DomSanitizer
} from "./chunk-ZIVWFREV.js";
import "./chunk-A2TMQDCR.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-RI2AEFVG.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-WYYIVEMK.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  Subscription,
  __spreadProps,
  __spreadValues,
  animationFrameScheduler,
  debounceTime,
  delay,
  distinctUntilChanged,
  expand,
  filter,
  finalize,
  from,
  fromEvent,
  merge,
  mergeMap,
  of,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap
} from "./chunk-YTR4LZ5T.js";

// node_modules/@angular/cdk/fesm2022/platform.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var _Platform = class _Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    this.isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
};
_Platform.ɵfac = function Platform_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Platform)(ɵɵinject(PLATFORM_ID));
};
_Platform.ɵprov = ɵɵdefineInjectable({
  token: _Platform,
  factory: _Platform.ɵfac,
  providedIn: "root"
});
var Platform = _Platform;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var _PlatformModule = class _PlatformModule {
};
_PlatformModule.ɵfac = function PlatformModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PlatformModule)();
};
_PlatformModule.ɵmod = ɵɵdefineNgModule({
  type: _PlatformModule
});
_PlatformModule.ɵinj = ɵɵdefineInjector({});
var PlatformModule = _PlatformModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/ng-gallery/fesm2022/ng-gallery.mjs
function GalleryDotsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function GalleryDotsComponent_div_0_Template_div_click_0_listener() {
      const i_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.gallery.ref(ctx_r2.galleryId).set(i_r2));
    });
    ɵɵelement(1, "div", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r2.config == null ? null : ctx_r2.config.dotsSize, "px")("height", ctx_r2.config == null ? null : ctx_r2.config.dotsSize, "px");
    ɵɵclassProp("g-dot-active", i_r2 === ctx_r2.state.currIndex);
  }
}
function GalleryNavComponent_i_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "i", 2);
    ɵɵlistener("click", function GalleryNavComponent_i_0_Template_i_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.gallery.ref(ctx_r1.galleryId).prev(ctx_r1.config.navScrollBehavior));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerHtml", ctx_r1.navIcon, ɵɵsanitizeHtml);
  }
}
function GalleryNavComponent_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "i", 3);
    ɵɵlistener("click", function GalleryNavComponent_i_1_Template_i_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.gallery.ref(ctx_r1.galleryId).next(ctx_r1.config.navScrollBehavior));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerHtml", ctx_r1.navIcon, ɵɵsanitizeHtml);
  }
}
var _c0 = ["iframe"];
function GalleryIframeComponent_iframe_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "iframe", 3, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.iframeSrc, ɵɵsanitizeResourceUrl);
    ɵɵattribute("loading", ctx_r0.loadingAttr);
  }
}
function GalleryIframeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "iframe", 4, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.iframeSrc, ɵɵsanitizeResourceUrl);
    ɵɵattribute("loading", ctx_r0.loadingAttr);
  }
}
var _c1 = ["video"];
function GalleryVideoComponent_ng_container_2_source_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "source", 5);
  }
  if (rf & 2) {
    const src_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("src", src_r2 == null ? null : src_r2.url, ɵɵsanitizeUrl)("type", src_r2.type);
  }
}
function GalleryVideoComponent_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "source", 6);
  }
  if (rf & 2) {
    const src_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("src", src_r2 == null ? null : src_r2.url, ɵɵsanitizeUrl);
  }
}
function GalleryVideoComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GalleryVideoComponent_ng_container_2_source_1_Template, 1, 2, "source", 4)(2, GalleryVideoComponent_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const src_r2 = ctx.$implicit;
    const noType_r3 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", src_r2 == null ? null : src_r2.type)("ngIfElse", noType_r3);
  }
}
function GalleryImageComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r0.errorTemplate, ɵɵsanitizeHtml);
  }
}
function GalleryImageComponent_div_2_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "h4");
    ɵɵelement(2, "div", 11);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("innerHTML", ctx_r0.errorSvg, ɵɵsanitizeHtml);
  }
}
function GalleryImageComponent_div_2_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h2");
    ɵɵelement(1, "div", 12);
    ɵɵelementEnd();
    ɵɵelementStart(2, "p");
    ɵɵtext(3, "Unable to load the image!");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("innerHTML", ctx_r0.errorSvg, ɵɵsanitizeHtml);
  }
}
function GalleryImageComponent_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GalleryImageComponent_div_2_ng_template_2_ng_container_0_Template, 3, 1, "ng-container", 10)(1, GalleryImageComponent_div_2_ng_template_2_ng_template_1_Template, 4, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const isLarge_r2 = ɵɵreference(2);
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r0.isThumbnail)("ngIfElse", isLarge_r2);
  }
}
function GalleryImageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, GalleryImageComponent_div_2_div_1_Template, 1, 1, "div", 8)(2, GalleryImageComponent_div_2_ng_template_2_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultError_r3 = ɵɵreference(3);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.errorTemplate)("ngIfElse", defaultError_r3);
  }
}
function GalleryImageComponent_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r0.loaderTemplate, ɵɵsanitizeHtml);
  }
}
function GalleryImageComponent_ng_container_3_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 16);
  }
}
function GalleryImageComponent_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GalleryImageComponent_ng_container_3_ng_template_2_div_0_Template, 1, 0, "div", 15);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r0.isThumbnail);
  }
}
function GalleryImageComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GalleryImageComponent_ng_container_3_div_1_Template, 1, 1, "div", 13)(2, GalleryImageComponent_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const defaultLoader_r4 = ɵɵreference(3);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.loaderTemplate)("ngIfElse", defaultLoader_r4);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_1_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, GalleryItemComponent_ng_container_0_ng_container_1_div_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.config.imageTemplate)("ngTemplateOutletContext", ctx_r1.imageContext);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "gallery-image", 7);
    ɵɵlistener("loaded", function GalleryItemComponent_ng_container_0_ng_container_1_Template_gallery_image_loaded_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onItemLoaded());
    })("error", function GalleryItemComponent_ng_container_0_ng_container_1_Template_gallery_image_error_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.error.emit($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, GalleryItemComponent_ng_container_0_ng_container_1_div_2_Template, 2, 2, "div", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("src", ctx_r1.imageData.src)("alt", ctx_r1.imageData.alt)("loadingAttr", ctx_r1.config.loadingAttr)("loadingIcon", ctx_r1.config.loadingIcon)("loadingError", ctx_r1.config.loadingError);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.imageTemplate);
  }
}
function GalleryItemComponent_ng_container_0_gallery_video_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "gallery-video", 11);
    ɵɵlistener("error", function GalleryItemComponent_ng_container_0_gallery_video_2_Template_gallery_video_error_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.error.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r1.videoData.src)("mute", ctx_r1.videoData.mute)("poster", ctx_r1.videoData.poster)("controls", ctx_r1.videoData.controls)("controlsList", ctx_r1.videoData.controlsList)("disablePictureInPicture", ctx_r1.videoData.disablePictureInPicture)("play", ctx_r1.isAutoPlay)("pause", ctx_r1.currIndex !== ctx_r1.index);
  }
}
function GalleryItemComponent_ng_container_0_gallery_iframe_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "gallery-iframe", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r1.youtubeSrc)("autoplay", ctx_r1.isAutoPlay)("loadingAttr", ctx_r1.config.loadingAttr)("pause", ctx_r1.currIndex !== ctx_r1.index);
  }
}
function GalleryItemComponent_ng_container_0_gallery_iframe_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "gallery-iframe", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r1.data.src)("loadingAttr", ctx_r1.config.loadingAttr);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_5_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, GalleryItemComponent_ng_container_0_ng_container_5_div_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.config.itemTemplate)("ngTemplateOutletContext", ctx_r1.itemContext);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GalleryItemComponent_ng_container_0_ng_container_5_div_1_Template, 2, 2, "div", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.itemTemplate);
  }
}
function GalleryItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 1);
    ɵɵtemplate(1, GalleryItemComponent_ng_container_0_ng_container_1_Template, 3, 6, "ng-container", 2)(2, GalleryItemComponent_ng_container_0_gallery_video_2_Template, 1, 8, "gallery-video", 3)(3, GalleryItemComponent_ng_container_0_gallery_iframe_3_Template, 1, 4, "gallery-iframe", 4)(4, GalleryItemComponent_ng_container_0_gallery_iframe_4_Template, 1, 2, "gallery-iframe", 5)(5, GalleryItemComponent_ng_container_0_ng_container_5_Template, 2, 1, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngSwitch", ctx_r1.type);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.Types.Image);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.Types.Video);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.Types.Youtube);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.Types.Iframe);
  }
}
var _c2 = ["slider"];
var _c3 = ["*"];
function GallerySliderComponent_gallery_item_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "gallery-item", 4);
    ɵɵlistener("click", function GallerySliderComponent_gallery_item_3_Template_gallery_item_click_0_listener() {
      const i_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.itemClick.emit(i_r2));
    })("error", function GallerySliderComponent_gallery_item_3_Template_gallery_item_error_0_listener($event) {
      const i_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.error.emit({
        itemIndex: i_r2,
        error: $event
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("type", item_r4.type)("config", ctx_r2.config)("data", item_r4.data)("currIndex", ctx_r2.state.currIndex)("index", i_r2)("count", ctx_r2.state.items.length);
    ɵɵattribute("galleryId", ctx_r2.galleryId);
  }
}
function GalleryThumbComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GalleryThumbComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, GalleryThumbComponent_div_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.config.thumbTemplate)("ngTemplateOutletContext", ctx_r0.imageContext);
  }
}
function GalleryThumbsComponent_gallery_thumb_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "gallery-thumb", 4);
    ɵɵlistener("click", function GalleryThumbsComponent_gallery_thumb_3_Template_gallery_thumb_click_0_listener() {
      const i_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.config.disableThumb ? null : ctx_r2.thumbClick.emit(i_r2));
    })("error", function GalleryThumbsComponent_gallery_thumb_3_Template_gallery_thumb_error_0_listener($event) {
      const i_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.error.emit({
        itemIndex: i_r2,
        error: $event
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("type", item_r4.type)("config", ctx_r2.config)("data", item_r4.data)("currIndex", ctx_r2.state.currIndex)("index", i_r2)("count", ctx_r2.state.items.length);
  }
}
var _c4 = (a0, a1) => ({
  state: a0,
  config: a1
});
function GalleryCoreComponent_gallery_thumbs_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "gallery-thumbs", 7);
    ɵɵlistener("thumbClick", function GalleryCoreComponent_gallery_thumbs_0_Template_gallery_thumbs_thumbClick_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.thumbClick.emit($event));
    })("error", function GalleryCoreComponent_gallery_thumbs_0_Template_gallery_thumbs_error_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.error.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("state", ctx_r1.state)("config", ctx_r1.config);
  }
}
function GalleryCoreComponent_gallery_nav_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "gallery-nav", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("state", ctx_r1.state)("config", ctx_r1.config)("galleryId", ctx_r1.galleryId);
  }
}
function GalleryCoreComponent_gallery_dots_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "gallery-dots", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("state", ctx_r1.state)("config", ctx_r1.config)("galleryId", ctx_r1.galleryId);
  }
}
function GalleryCoreComponent_gallery_counter_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "gallery-counter", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("state", ctx_r1.state);
  }
}
function GalleryCoreComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var GalleryAction;
(function(GalleryAction2) {
  GalleryAction2["INITIALIZED"] = "initialized";
  GalleryAction2["ITEMS_CHANGED"] = "itemsChanged";
  GalleryAction2["INDEX_CHANGED"] = "indexChanged";
  GalleryAction2["PLAY"] = "play";
  GalleryAction2["STOP"] = "stop";
})(GalleryAction || (GalleryAction = {}));
var ImageSize;
(function(ImageSize2) {
  ImageSize2["Cover"] = "cover";
  ImageSize2["Contain"] = "contain";
})(ImageSize || (ImageSize = {}));
var LoadingStrategy;
(function(LoadingStrategy2) {
  LoadingStrategy2["Preload"] = "preload";
  LoadingStrategy2["Lazy"] = "lazy";
  LoadingStrategy2["Default"] = "default";
})(LoadingStrategy || (LoadingStrategy = {}));
var LoadingAttr;
(function(LoadingAttr2) {
  LoadingAttr2["Eager"] = "eager";
  LoadingAttr2["Lazy"] = "lazy";
})(LoadingAttr || (LoadingAttr = {}));
var ThumbnailsPosition;
(function(ThumbnailsPosition2) {
  ThumbnailsPosition2["Top"] = "top";
  ThumbnailsPosition2["Left"] = "left";
  ThumbnailsPosition2["Right"] = "right";
  ThumbnailsPosition2["Bottom"] = "bottom";
})(ThumbnailsPosition || (ThumbnailsPosition = {}));
var DotsPosition;
(function(DotsPosition2) {
  DotsPosition2["Top"] = "top";
  DotsPosition2["Bottom"] = "bottom";
})(DotsPosition || (DotsPosition = {}));
var CounterPosition;
(function(CounterPosition2) {
  CounterPosition2["Top"] = "top";
  CounterPosition2["Bottom"] = "bottom";
})(CounterPosition || (CounterPosition = {}));
var SlidingDirection;
(function(SlidingDirection2) {
  SlidingDirection2["Horizontal"] = "horizontal";
  SlidingDirection2["Vertical"] = "vertical";
})(SlidingDirection || (SlidingDirection = {}));
var GalleryItemTypes;
(function(GalleryItemTypes2) {
  GalleryItemTypes2["Image"] = "image";
  GalleryItemTypes2["Video"] = "video";
  GalleryItemTypes2["Youtube"] = "youtube";
  GalleryItemTypes2["Iframe"] = "iframe";
})(GalleryItemTypes || (GalleryItemTypes = {}));
var ThumbnailsView;
(function(ThumbnailsView2) {
  ThumbnailsView2["Default"] = "default";
  ThumbnailsView2["Contain"] = "contain";
})(ThumbnailsView || (ThumbnailsView = {}));
var defaultState = {
  action: GalleryAction.INITIALIZED,
  isPlaying: false,
  hasNext: false,
  hasPrev: false,
  currIndex: 0,
  items: []
};
var defaultConfig = {
  nav: true,
  loop: true,
  dots: false,
  thumb: true,
  debug: false,
  dotsSize: 6,
  counter: true,
  autoPlay: false,
  thumbWidth: 120,
  thumbHeight: 90,
  disableThumb: false,
  slidingDisabled: false,
  thumbSlidingDisabled: false,
  mouseSlidingDisabled: false,
  thumbMouseSlidingDisabled: false,
  playerInterval: 3e3,
  slidingDuration: 468,
  slidingEase: {
    x1: 0.42,
    y1: 0,
    x2: 0.58,
    y2: 1
  },
  thumbAutosize: false,
  itemAutosize: false,
  autoHeight: false,
  scrollBehavior: "smooth",
  navScrollBehavior: "smooth",
  resizeDebounceTime: 50,
  loadingAttr: LoadingAttr.Lazy,
  imageSize: ImageSize.Contain,
  thumbImageSize: ImageSize.Cover,
  thumbView: ThumbnailsView.Default,
  dotsPosition: DotsPosition.Bottom,
  counterPosition: CounterPosition.Top,
  thumbPosition: ThumbnailsPosition.Bottom,
  loadingStrategy: LoadingStrategy.Preload,
  slidingDirection: SlidingDirection.Horizontal,
  navIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>`,
  // navIcon: `<?xml version="1.0" encoding="UTF-8"?><svg width="512px" height="512px" enable-background="new 0 0 240.823 240.823" version="1.1" viewBox="0 0 240.823 240.823" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m183.19 111.82l-108.3-108.26c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.3-108.26c4.68-4.691 4.68-12.511-0.012-17.19z"></svg>`,
  loadingIcon: `<?xml version="1.0" encoding="UTF-8"?><svg stroke="#fff" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>`
};
var ImageItem = class {
  constructor(data) {
    this.data = data;
    this.type = GalleryItemTypes.Image;
  }
};
var VideoItem = class {
  constructor(data) {
    this.data = data;
    this.type = GalleryItemTypes.Video;
  }
};
var IframeItem = class {
  constructor(data) {
    this.data = data;
    this.type = GalleryItemTypes.Iframe;
  }
};
var YoutubeItem = class {
  constructor(data) {
    this.data = __spreadValues(__spreadValues({}, data), {
      src: `https://youtube.com/embed/${data.src}`,
      thumb: data.thumb ? data.thumb : `//img.youtube.com/vi/${data.src}/default.jpg`
    });
    this.type = GalleryItemTypes.Youtube;
  }
};
var filterActions = (actions) => {
  return filter((state) => actions.indexOf(state.action) > -1);
};
var GalleryRef = class {
  get stateSnapshot() {
    return this._state.value;
  }
  get configSnapshot() {
    return this._config.value;
  }
  /** Stream that emits when gallery is initialized/reset */
  get initialized() {
    return this.state.pipe(filterActions([GalleryAction.INITIALIZED]));
  }
  /** Stream that emits when items is changed (items loaded, item added, item removed) */
  get itemsChanged() {
    return this.state.pipe(filterActions([GalleryAction.ITEMS_CHANGED]));
  }
  /** Stream that emits when current item is changed */
  get indexChanged() {
    return this.state.pipe(filterActions([GalleryAction.INDEX_CHANGED]));
  }
  /** Stream that emits when the player should start or stop */
  get playingChanged() {
    return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP]));
  }
  /** Stream that emits when the player should start or stop */
  get playerActions() {
    return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP, GalleryAction.INDEX_CHANGED]));
  }
  constructor(config, deleteInstance) {
    this.deleteInstance = deleteInstance;
    this.itemClick = new Subject();
    this.thumbClick = new Subject();
    this.error = new Subject();
    this._state = new BehaviorSubject(defaultState);
    this._config = new BehaviorSubject(config);
    this.state = this._state.asObservable();
    this.config = this._config.asObservable();
  }
  /**
   * Activate player actions listener
   */
  activatePlayer() {
    return this.playerActions.pipe(switchMap((e) => e.isPlaying ? of({}).pipe(delay(this._config.value.playerInterval), tap(() => this.next(this._config.value.scrollBehavior))) : EMPTY));
  }
  /**
   * Set gallery state
   */
  setState(state) {
    this._state.next(__spreadValues(__spreadValues({}, this.stateSnapshot), state));
  }
  /**
   * Set gallery config
   */
  setConfig(config) {
    this._config.next(__spreadValues(__spreadValues({}, this._config.value), config));
  }
  /**
   * Add gallery item
   */
  add(item, active) {
    const items = [...this.stateSnapshot.items, item];
    this.setState({
      action: GalleryAction.ITEMS_CHANGED,
      items,
      hasNext: items.length > 1,
      currIndex: active ? items.length - 1 : this.stateSnapshot.currIndex
    });
  }
  /**
   * Add image item
   */
  addImage(data, active) {
    this.add(new ImageItem(data), active);
  }
  /**
   * Add video item
   */
  addVideo(data, active) {
    this.add(new VideoItem(data), active);
  }
  /**
   * Add iframe item
   */
  addIframe(data, active) {
    this.add(new IframeItem(data), active);
  }
  /**
   * Add Youtube item
   */
  addYoutube(data, active) {
    this.add(new YoutubeItem(data), active);
  }
  /**
   * Remove gallery item
   */
  remove(i) {
    const state = this.stateSnapshot;
    const items = [...state.items.slice(0, i), ...state.items.slice(i + 1, state.items.length)];
    this.setState({
      action: GalleryAction.ITEMS_CHANGED,
      currIndex: i < 1 ? state.currIndex : i - 1,
      items,
      hasNext: items.length > 1,
      hasPrev: i > 0
    });
  }
  /**
   * Load items and reset the state
   */
  load(items) {
    if (items) {
      this.setState({
        action: GalleryAction.ITEMS_CHANGED,
        items,
        hasNext: items.length > 1,
        hasPrev: false
      });
    }
  }
  /**
   * Set active item
   */
  set(i, behavior = this._config.value.scrollBehavior) {
    if (i < 0 || i >= this.stateSnapshot.items.length) {
      console.error(`[NgGallery]: Unable to set the active item because the given index (${i}) is outside the items range!`);
      return;
    }
    if (i !== this.stateSnapshot.currIndex) {
      this.setState({
        behavior,
        action: GalleryAction.INDEX_CHANGED,
        currIndex: i,
        hasNext: i < this.stateSnapshot.items.length - 1,
        hasPrev: i > 0
      });
    }
  }
  /**
   * Next item
   */
  next(behavior = this._config.value.scrollBehavior, loop = true) {
    if (this.stateSnapshot.hasNext) {
      this.set(this.stateSnapshot.currIndex + 1, behavior);
    } else if (loop && this._config.value.loop) {
      this.set(0, behavior);
    }
  }
  /**
   * Prev item
   */
  prev(behavior = this._config.value.scrollBehavior, loop = true) {
    if (this.stateSnapshot.hasPrev) {
      this.set(this.stateSnapshot.currIndex - 1, behavior);
    } else if (loop && this._config.value.loop) {
      this.set(this.stateSnapshot.items.length - 1, behavior);
    }
  }
  /**
   * Start gallery player
   */
  play(interval) {
    if (interval) {
      this.setConfig({
        playerInterval: interval
      });
    }
    this.setState({
      action: GalleryAction.PLAY,
      isPlaying: true
    });
  }
  /**
   * Stop gallery player
   */
  stop() {
    this.setState({
      action: GalleryAction.STOP,
      isPlaying: false
    });
  }
  /**
   * Reset gallery to initial state
   */
  reset() {
    this.setState(defaultState);
  }
  /**
   * Destroy gallery
   */
  destroy() {
    this._state.complete();
    this._config.complete();
    this.itemClick.complete();
    this.thumbClick.complete();
    this.deleteInstance();
  }
};
var GALLERY_CONFIG = new InjectionToken("GALLERY_CONFIG");
var _Gallery = class _Gallery {
  constructor(config) {
    this._instances = /* @__PURE__ */ new Map();
    this.config = config ? __spreadValues(__spreadValues({}, defaultConfig), config) : defaultConfig;
  }
  /**
   * Get or create gallery by ID
   * @param id
   * @param config
   */
  ref(id = "root", config) {
    if (this._instances.has(id)) {
      const galleryRef = this._instances.get(id);
      if (config) {
        galleryRef.setConfig(__spreadValues(__spreadValues({}, this.config), config));
      }
      return galleryRef;
    } else {
      return this._instances.set(id, new GalleryRef(__spreadValues(__spreadValues({}, this.config), config), this.deleteInstance(id))).get(id);
    }
  }
  /**
   * Destroy all gallery instances
   */
  destroyAll() {
    this._instances.forEach((ref) => ref.destroy());
  }
  /**
   * Reset all gallery instances
   */
  resetAll() {
    this._instances.forEach((ref) => ref.reset());
  }
  /**
   * Logger for debugging
   */
  debugConsole(...data) {
    if (this.config.debug) {
      console.log(...data);
    }
  }
  /**
   * A destroyer function for each gallery instance
   */
  deleteInstance(id) {
    return () => {
      if (this._instances.has(id)) {
        this._instances.delete(id);
      }
    };
  }
};
_Gallery.ɵfac = function Gallery_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Gallery)(ɵɵinject(GALLERY_CONFIG, 8));
};
_Gallery.ɵprov = ɵɵdefineInjectable({
  token: _Gallery,
  factory: _Gallery.ɵfac,
  providedIn: "root"
});
var Gallery = _Gallery;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Gallery, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [GALLERY_CONFIG]
      }]
    }];
  }, null);
})();
var _GalleryCounterComponent = class _GalleryCounterComponent {
};
_GalleryCounterComponent.ɵfac = function GalleryCounterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryCounterComponent)();
};
_GalleryCounterComponent.ɵcmp = ɵɵdefineComponent({
  type: _GalleryCounterComponent,
  selectors: [["gallery-counter"]],
  inputs: {
    state: "state"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 1,
  consts: [[1, "g-counter"]],
  template: function GalleryCounterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtext(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.state.currIndex + 1 + " / " + ctx.state.items.length);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var GalleryCounterComponent = _GalleryCounterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryCounterComponent, [{
    type: Component,
    args: [{
      selector: "gallery-counter",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="g-counter">{{ (state.currIndex + 1) + ' / ' + state.items.length }}</div>
  `,
      standalone: true
    }]
  }], null, {
    state: [{
      type: Input
    }]
  });
})();
var _GalleryDotsComponent = class _GalleryDotsComponent {
  constructor(gallery) {
    this.gallery = gallery;
  }
};
_GalleryDotsComponent.ɵfac = function GalleryDotsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryDotsComponent)(ɵɵdirectiveInject(Gallery));
};
_GalleryDotsComponent.ɵcmp = ɵɵdefineComponent({
  type: _GalleryDotsComponent,
  selectors: [["gallery-dots"]],
  inputs: {
    galleryId: "galleryId",
    state: "state",
    config: "config"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [["class", "g-dot", 3, "g-dot-active", "width", "height", "click", 4, "ngFor", "ngForOf"], [1, "g-dot", 3, "click"], [1, "g-dot-inner"]],
  template: function GalleryDotsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, GalleryDotsComponent_div_0_Template, 2, 6, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.state.items);
    }
  },
  dependencies: [CommonModule, NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
var GalleryDotsComponent = _GalleryDotsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryDotsComponent, [{
    type: Component,
    args: [{
      selector: "gallery-dots",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="g-dot"
         *ngFor="let item of state.items; let i = index"
         [class.g-dot-active]="i === state.currIndex"
         [style.width.px]="config?.dotsSize"
         [style.height.px]="config?.dotsSize"
         (click)="gallery.ref(this.galleryId).set(i)">
      <div class="g-dot-inner"></div>
    </div>
  `,
      standalone: true,
      imports: [CommonModule]
    }]
  }], function() {
    return [{
      type: Gallery
    }];
  }, {
    galleryId: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }]
  });
})();
var _GalleryNavComponent = class _GalleryNavComponent {
  constructor(gallery, _sanitizer) {
    this.gallery = gallery;
    this._sanitizer = _sanitizer;
  }
  ngOnInit() {
    this.navIcon = this._sanitizer.bypassSecurityTrustHtml(this.config.navIcon);
  }
};
_GalleryNavComponent.ɵfac = function GalleryNavComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryNavComponent)(ɵɵdirectiveInject(Gallery), ɵɵdirectiveInject(DomSanitizer));
};
_GalleryNavComponent.ɵcmp = ɵɵdefineComponent({
  type: _GalleryNavComponent,
  selectors: [["gallery-nav"]],
  inputs: {
    galleryId: "galleryId",
    state: "state",
    config: "config"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [["class", "g-nav-prev", "aria-label", "Previous", "role", "button", 3, "innerHtml", "click", 4, "ngIf"], ["class", "g-nav-next", "aria-label", "Next", "role", "button", 3, "innerHtml", "click", 4, "ngIf"], ["aria-label", "Previous", "role", "button", 1, "g-nav-prev", 3, "click", "innerHtml"], ["aria-label", "Next", "role", "button", 1, "g-nav-next", 3, "click", "innerHtml"]],
  template: function GalleryNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, GalleryNavComponent_i_0_Template, 1, 1, "i", 0)(1, GalleryNavComponent_i_1_Template, 1, 1, "i", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.config.loop || ctx.state.hasPrev);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.config.loop || ctx.state.hasNext);
    }
  },
  dependencies: [CommonModule, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var GalleryNavComponent = _GalleryNavComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryNavComponent, [{
    type: Component,
    args: [{
      selector: "gallery-nav",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <i *ngIf="config.loop || state.hasPrev"
       class="g-nav-prev"
       aria-label="Previous"
       role="button"
       (click)="gallery.ref(this.galleryId).prev(config.navScrollBehavior)"
       [innerHtml]="navIcon"></i>

    <i *ngIf="config.loop || state.hasNext"
       class="g-nav-next"
       aria-label="Next"
       role="button"
       (click)="gallery.ref(this.galleryId).next(config.navScrollBehavior)"
       [innerHtml]="navIcon"></i>
  `,
      standalone: true,
      imports: [CommonModule]
    }]
  }], function() {
    return [{
      type: Gallery
    }, {
      type: DomSanitizer
    }];
  }, {
    galleryId: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }]
  });
})();
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;
var HorizontalCommonAdapter = class {
  get scrollValue() {
    return this.slider.scrollLeft;
  }
  get clientSize() {
    return this.slider.clientWidth;
  }
  constructor(slider, config) {
    this.slider = slider;
    this.config = config;
    this.panDirection = DIRECTION_LEFT | DIRECTION_RIGHT;
    this.scrollSnapType = "x mandatory";
  }
  getPanValue(value, e, behavior) {
    return {
      behavior,
      left: value - e.deltaX
    };
  }
};
var VerticalCommonAdapter = class {
  get scrollValue() {
    return this.slider.scrollTop;
  }
  get clientSize() {
    return this.slider.clientHeight;
  }
  constructor(slider, config) {
    this.slider = slider;
    this.config = config;
    this.scrollSnapType = "y mandatory";
    this.panDirection = DIRECTION_UP | DIRECTION_DOWN;
  }
  getPanValue(value, e, behavior) {
    return {
      behavior,
      top: value - e.deltaY
    };
  }
};
var HorizontalThumbAdapter = class extends HorizontalCommonAdapter {
  get thumbSize() {
    return this.config.thumbWidth;
  }
  get isContentLessThanContainer() {
    return this.slider.clientWidth >= this.slider.firstElementChild.clientWidth;
  }
  constructor(slider, config) {
    super(slider, config);
    this.slider = slider;
    this.config = config;
  }
  getCentralisedScrollToValue(el, behavior, thumbView) {
    let position = el.offsetLeft;
    if (thumbView === ThumbnailsView.Default) {
      position -= this.clientSize / 2 - el.clientWidth / 2;
    }
    return {
      start: position,
      duration: behavior === "smooth" ? this.config.slidingDuration : 0,
      easing: this.config.slidingEase
    };
  }
  getScrollToValue(el, behavior) {
    let position = el.offsetLeft - (this.clientSize - el.clientWidth) / 2;
    return {
      start: position,
      duration: behavior === "smooth" ? this.config.slidingDuration : 0,
      easing: this.config.slidingEase
    };
  }
  getCentralizerStartSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientWidth;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.firstElementChild?.clientWidth / 2;
  }
  getCentralizerEndSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientWidth;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.lastElementChild?.clientWidth / 2;
  }
};
var VerticalThumbAdapter = class extends VerticalCommonAdapter {
  get thumbSize() {
    return this.config.thumbHeight;
  }
  get isContentLessThanContainer() {
    return this.slider.clientHeight >= this.slider.firstElementChild.clientHeight;
  }
  constructor(slider, config) {
    super(slider, config);
    this.slider = slider;
    this.config = config;
  }
  getCentralisedScrollToValue(el, behavior, thumbView) {
    let position = el.offsetTop;
    if (thumbView === ThumbnailsView.Default) {
      position -= this.clientSize / 2 - el.clientHeight / 2;
    }
    return {
      top: position,
      duration: behavior === "smooth" ? this.config.slidingDuration : 0,
      easing: this.config.slidingEase
    };
  }
  getScrollToValue(el, behavior) {
    const position = el.offsetTop - (this.clientSize - el.clientHeight) / 2;
    return {
      top: position,
      duration: behavior === "smooth" ? this.config.slidingDuration : 0,
      easing: this.config.slidingEase
    };
  }
  getCentralizerStartSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientHeight;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.firstElementChild?.clientHeight / 2;
  }
  getCentralizerEndSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientHeight;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.lastElementChild?.clientHeight / 2;
  }
};
var HorizontalAdapter = class extends HorizontalCommonAdapter {
  get measureIndex() {
    return this.slider.scrollLeft / this.slider.clientWidth;
  }
  get isContentLessThanContainer() {
    return this.slider.clientWidth >= this.slider.firstElementChild.clientWidth;
  }
  constructor(slider, config) {
    super(slider, config);
    this.slider = slider;
    this.config = config;
  }
  getClientSize(el) {
    return el.clientWidth;
  }
  getOffsetSize(el) {
    return el.offsetLeft;
  }
  getScrollToValue(el, behavior) {
    const position = el.offsetLeft - (this.clientSize - el.clientWidth) / 2;
    return {
      start: position,
      duration: behavior === "smooth" ? this.config.slidingDuration : 0,
      easing: this.config.slidingEase
    };
  }
  getPanDelta(e) {
    return e.deltaX;
  }
  getPanVelocity(e) {
    return e.velocityX;
  }
  getCentralizerStartSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientWidth;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.firstElementChild?.clientWidth / 2;
  }
  getCentralizerEndSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientWidth;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.lastElementChild?.clientWidth / 2;
  }
};
var VerticalAdapter = class extends VerticalCommonAdapter {
  get measureIndex() {
    return this.slider.scrollTop / this.slider.clientHeight;
  }
  get isContentLessThanContainer() {
    return this.slider.clientHeight >= this.slider.firstElementChild.clientHeight;
  }
  constructor(slider, config) {
    super(slider, config);
    this.slider = slider;
    this.config = config;
  }
  getClientSize(el) {
    return el.clientHeight;
  }
  getOffsetSize(el) {
    return el.offsetTop;
  }
  getScrollToValue(el, behavior) {
    const position = el.offsetTop - (this.clientSize - el.clientHeight) / 2;
    return {
      top: position,
      duration: behavior === "smooth" ? this.config.slidingDuration : 0,
      easing: this.config.slidingEase
    };
  }
  getPanDelta(e) {
    return e.deltaY;
  }
  getPanVelocity(e) {
    return e.velocityY;
  }
  getCentralizerStartSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientHeight;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.firstElementChild?.clientHeight / 2;
  }
  getCentralizerEndSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientHeight;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.lastElementChild?.clientHeight / 2;
  }
};
function resizeObservable(el) {
  return new Observable((subscriber) => {
    const resizeObserver = new ResizeObserver((entries) => subscriber.next(entries));
    resizeObserver.observe(el);
    return function unsubscribe() {
      resizeObserver.disconnect();
    };
  });
}
var _GalleryIframeComponent = class _GalleryIframeComponent {
  set src(src) {
    this.videoSrc = src;
    this.iframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(src);
  }
  set pauseVideo(shouldPause) {
    if (this.iframe?.nativeElement) {
      if (shouldPause) {
        const iframe = this.iframe.nativeElement;
        iframe.src = null;
        if (!this.autoplay && this.videoSrc) {
          this.iframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoSrc);
        }
      }
    }
  }
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
  }
};
_GalleryIframeComponent.ɵfac = function GalleryIframeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryIframeComponent)(ɵɵdirectiveInject(DomSanitizer));
};
_GalleryIframeComponent.ɵcmp = ɵɵdefineComponent({
  type: _GalleryIframeComponent,
  selectors: [["gallery-iframe"]],
  viewQuery: function GalleryIframeComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.iframe = _t.first);
    }
  },
  inputs: {
    src: "src",
    pauseVideo: [0, "pause", "pauseVideo"],
    autoplay: "autoplay",
    loadingAttr: "loadingAttr"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 3,
  vars: 2,
  consts: [["default", ""], ["iframe", ""], ["allowfullscreen", "", "allow", "", "style", "border:none", 3, "src", 4, "ngIf", "ngIfElse"], ["allowfullscreen", "", "allow", "", 2, "border", "none", 3, "src"], ["allowfullscreen", "", 2, "border", "none", 3, "src"]],
  template: function GalleryIframeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, GalleryIframeComponent_iframe_0_Template, 2, 2, "iframe", 2)(1, GalleryIframeComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const default_r2 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.autoplay)("ngIfElse", default_r2);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var GalleryIframeComponent = _GalleryIframeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryIframeComponent, [{
    type: Component,
    args: [{
      selector: "gallery-iframe",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <iframe *ngIf="autoplay; else default"
            #iframe
            [attr.loading]="loadingAttr"
            allowfullscreen
            allow
            style="border:none"
            [src]="iframeSrc">
    </iframe>
    <ng-template #default>
      <iframe #iframe
              [attr.loading]="loadingAttr"
              allowfullscreen
              style="border:none"
              [src]="iframeSrc">
      </iframe>
    </ng-template>
  `,
      standalone: true,
      imports: [NgIf]
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, {
    src: [{
      type: Input,
      args: ["src"]
    }],
    pauseVideo: [{
      type: Input,
      args: ["pause"]
    }],
    autoplay: [{
      type: Input
    }],
    loadingAttr: [{
      type: Input
    }],
    iframe: [{
      type: ViewChild,
      args: ["iframe"]
    }]
  });
})();
var _GalleryVideoComponent = class _GalleryVideoComponent {
  constructor() {
    this.error = new EventEmitter();
  }
  set pauseVideo(shouldPause) {
    if (this.video.nativeElement) {
      const video = this.video.nativeElement;
      if (shouldPause && !video.paused) {
        video.pause();
      }
    }
  }
  set playVideo(shouldPlay) {
    if (this.video.nativeElement) {
      const video = this.video.nativeElement;
      if (shouldPlay) {
        video.play();
      }
    }
  }
  ngOnInit() {
    if (this.src instanceof Array) {
      this.videoSources = [...this.src];
    } else {
      this.videoSources = [{
        url: this.src
      }];
    }
  }
};
_GalleryVideoComponent.ɵfac = function GalleryVideoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryVideoComponent)();
};
_GalleryVideoComponent.ɵcmp = ɵɵdefineComponent({
  type: _GalleryVideoComponent,
  selectors: [["gallery-video"]],
  viewQuery: function GalleryVideoComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.video = _t.first);
    }
  },
  inputs: {
    src: "src",
    poster: "poster",
    mute: "mute",
    loop: "loop",
    controls: "controls",
    controlsList: "controlsList",
    disableRemotePlayback: "disableRemotePlayback",
    disablePictureInPicture: "disablePictureInPicture",
    pauseVideo: [0, "pause", "pauseVideo"],
    playVideo: [0, "play", "playVideo"]
  },
  outputs: {
    error: "error"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 3,
  vars: 8,
  consts: [["video", ""], ["noType", ""], [3, "error", "disableRemotePlayback", "controls", "loop", "poster"], [4, "ngFor", "ngForOf"], [3, "src", "type", 4, "ngIf", "ngIfElse"], [3, "src", "type"], [3, "src"]],
  template: function GalleryVideoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "video", 2, 0);
      ɵɵlistener("error", function GalleryVideoComponent_Template_video_error_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.error.emit($event));
      });
      ɵɵtemplate(2, GalleryVideoComponent_ng_container_2_Template, 4, 2, "ng-container", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("disableRemotePlayback", ctx.disableRemotePlayback)("controls", ctx.controls)("loop", ctx.loop)("poster", ctx.poster, ɵɵsanitizeUrl);
      ɵɵattribute("mute", ctx.mute)("controlsList", ctx.controlsList)("disablePictureInPicture", ctx.disablePictureInPicture);
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.videoSources);
    }
  },
  dependencies: [NgForOf, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var GalleryVideoComponent = _GalleryVideoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryVideoComponent, [{
    type: Component,
    args: [{
      selector: "gallery-video",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <video #video
           [attr.mute]="mute"
           [attr.controlsList]="controlsList"
           [attr.disablePictureInPicture]="disablePictureInPicture"
           [disableRemotePlayback]="disableRemotePlayback"
           [controls]="controls"
           [loop]="loop"
           [poster]="poster"
           (error)="error.emit($event)">
      <ng-container *ngFor="let src of videoSources">
        <source *ngIf="src?.type; else noType" [src]="src?.url" [type]="src.type"/>
        <ng-template #noType>
          <source [src]="src?.url"/>
        </ng-template>
      </ng-container>
    </video>
  `,
      standalone: true,
      imports: [NgForOf, NgIf]
    }]
  }], null, {
    src: [{
      type: Input
    }],
    poster: [{
      type: Input
    }],
    mute: [{
      type: Input
    }],
    loop: [{
      type: Input
    }],
    controls: [{
      type: Input
    }],
    controlsList: [{
      type: Input
    }],
    disableRemotePlayback: [{
      type: Input
    }],
    disablePictureInPicture: [{
      type: Input
    }],
    pauseVideo: [{
      type: Input,
      args: ["pause"]
    }],
    playVideo: [{
      type: Input,
      args: ["play"]
    }],
    error: [{
      type: Output
    }],
    video: [{
      type: ViewChild,
      args: ["video", {
        static: true
      }]
    }]
  });
})();
var imageFailedSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="100" height="100" version="1.1" viewBox="0 0 256 256" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
 <g transform="translate(1.4066 1.4066) scale(2.81)">
	<path d="m74.453 48.627c-5.538 0-11.075-2.107-15.291-6.324-6.11-6.11-7.768-14.99-5.024-22.629h-48.08c-3.346 1e-3 -6.058 2.713-6.058 6.059v16.322l23.834 20.315c2.278 1.942 5.573 2.119 8.047 0.434l14.382-9.801c2.33-1.588 5.408-1.531 7.677 0.141l27.15 20.001v-25.574c-2.156 0.692-4.394 1.056-6.637 1.056z" fill="#c1e5f4" stroke-linecap="round"/>
 <circle cx="27.942" cy="37.942" r="6.072" fill="#fff0a9"/>
 <path d="m85.446 16.02c-6.061-6.061-15.922-6.061-21.983 0s-6.061 15.923 0 21.984c3.031 3.031 7.011 4.546 10.992 4.546 3.98 0 7.962-1.515 10.992-4.545 2.936-2.937 4.553-6.841 4.553-10.993s-1.617-8.056-4.554-10.992zm-3.555 3.555c1.987 1.986 3.081 4.627 3.081 7.436 0 1.95-0.538 3.813-1.525 5.438l-14.428-14.428c4.043-2.442 9.384-1.934 12.872 1.554zm-14.873 14.874c-3.486-3.487-3.997-8.829-1.554-12.873l14.426 14.427c-4.043 2.443-9.385 1.932-12.872-1.554z" fill="#e29393" stroke-linecap="round"/>
 <path d="m0 40.043v32.425c0 3.346 2.712 6.058 6.058 6.058h68.974c3.346 0 6.058-2.712 6.058-6.058v-1.335l-27.15-20.001c-2.27-1.672-5.348-1.729-7.677-0.141l-14.383 9.801c-2.473 1.686-5.769 1.508-8.047-0.434l-23.833-20.315z" fill="#96ea9c" stroke-linecap="round"/>
</g>
</svg>
`;
var _GalleryImageComponent = class _GalleryImageComponent {
  get imageState() {
    return this.state;
  }
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
    this.state = "loading";
    this.progress = 0;
    this.errorIcon = imageFailedSvg;
    this.error = new EventEmitter();
    this.loaded = new EventEmitter();
  }
  ngOnInit() {
    if (this.loadingIcon) {
      this.loaderTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingIcon);
    }
    if (this.loadingError) {
      this.errorTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingError);
    }
    if (this.errorIcon) {
      this.errorSvg = this._sanitizer.bypassSecurityTrustHtml(this.errorIcon);
    }
  }
};
_GalleryImageComponent.ɵfac = function GalleryImageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryImageComponent)(ɵɵdirectiveInject(DomSanitizer));
};
_GalleryImageComponent.ɵcmp = ɵɵdefineComponent({
  type: _GalleryImageComponent,
  selectors: [["gallery-image"]],
  hostVars: 1,
  hostBindings: function GalleryImageComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("imageState", ctx.imageState);
    }
  },
  inputs: {
    isThumbnail: "isThumbnail",
    loadingAttr: "loadingAttr",
    alt: "alt",
    src: "src",
    loadingIcon: "loadingIcon",
    loadingError: "loadingError",
    errorIcon: "errorIcon"
  },
  outputs: {
    error: "error",
    loaded: "loaded"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 4,
  vars: 9,
  consts: [["defaultError", ""], ["isLarge", ""], ["defaultLoader", ""], [3, "ngSwitch"], [1, "g-image-item", 3, "load", "error", "src"], ["class", "g-image-error-message", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [1, "g-image-error-message"], [3, "innerHTML", 4, "ngIf", "ngIfElse"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], [1, "gallery-thumb-error", 3, "innerHTML"], [1, "gallery-image-error", 3, "innerHTML"], ["class", "g-loading", 3, "innerHTML", 4, "ngIf", "ngIfElse"], [1, "g-loading", 3, "innerHTML"], ["class", "g-thumb-loading", 4, "ngIf"], [1, "g-thumb-loading"]],
  template: function GalleryImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0, 3);
      ɵɵelementStart(1, "img", 4);
      ɵɵlistener("load", function GalleryImageComponent_Template_img_load_1_listener() {
        ctx.state = "success";
        return ctx.loaded.emit();
      })("error", function GalleryImageComponent_Template_img_error_1_listener($event) {
        ctx.state = "failed";
        return ctx.error.emit($event);
      });
      ɵɵelementEnd();
      ɵɵtemplate(2, GalleryImageComponent_div_2_Template, 4, 2, "div", 5)(3, GalleryImageComponent_ng_container_3_Template, 4, 2, "ng-container", 6);
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngSwitch", ctx.state);
      ɵɵadvance();
      ɵɵstyleProp("visibility", ctx.state === "success" ? "visible" : "hidden");
      ɵɵproperty("@fadeIn", ctx.state)("src", ctx.src, ɵɵsanitizeUrl);
      ɵɵattribute("alt", ctx.alt)("loading", ctx.loadingAttr);
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", "failed");
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", "loading");
    }
  },
  dependencies: [NgSwitch, NgSwitchCase, NgIf],
  encapsulation: 2,
  data: {
    animation: [trigger("fadeIn", [transition("* => success", [style({
      opacity: 0
    }), animate("300ms ease-in", style({
      opacity: 1
    }))])])]
  },
  changeDetection: 0
});
var GalleryImageComponent = _GalleryImageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryImageComponent, [{
    type: Component,
    args: [{
      selector: "gallery-image",
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("fadeIn", [transition("* => success", [style({
        opacity: 0
      }), animate("300ms ease-in", style({
        opacity: 1
      }))])])],
      template: `
    <ng-container [ngSwitch]="state">
      <img [@fadeIn]="state"
           [src]="src"
           [attr.alt]="alt"
           [attr.loading]="loadingAttr"
           [style.visibility]="state === 'success' ? 'visible' : 'hidden'"
           class="g-image-item"
           (load)="state = 'success'; loaded.emit()"
           (error)="state = 'failed'; error.emit($event)"/>

      <div *ngSwitchCase="'failed'"
           class="g-image-error-message">
        <div *ngIf="errorTemplate; else defaultError"
             [innerHTML]="errorTemplate"></div>
        <ng-template #defaultError>
          <ng-container *ngIf="isThumbnail; else isLarge">
            <h4>
              <div class="gallery-thumb-error" [innerHTML]="errorSvg"></div>
            </h4>
          </ng-container>
          <ng-template #isLarge>
            <h2>
              <div class="gallery-image-error" [innerHTML]="errorSvg"></div>
            </h2>
            <p>Unable to load the image!</p>
          </ng-template>
        </ng-template>
      </div>

      <ng-container *ngSwitchCase="'loading'">
        <div *ngIf="loaderTemplate; else defaultLoader"
             class="g-loading"
             [innerHTML]="loaderTemplate">
        </div>
        <ng-template #defaultLoader>
          <div *ngIf="isThumbnail" class="g-thumb-loading"></div>
        </ng-template>
      </ng-container>
    </ng-container>
  `,
      standalone: true,
      imports: [NgSwitch, NgSwitchCase, NgIf]
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, {
    isThumbnail: [{
      type: Input
    }],
    loadingAttr: [{
      type: Input
    }],
    alt: [{
      type: Input
    }],
    src: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    loadingError: [{
      type: Input
    }],
    errorIcon: [{
      type: Input
    }],
    error: [{
      type: Output
    }],
    loaded: [{
      type: Output
    }],
    imageState: [{
      type: HostBinding,
      args: ["attr.imageState"]
    }]
  });
})();
var _GalleryItemComponent = class _GalleryItemComponent {
  get isActive() {
    return this.index === this.currIndex;
  }
  get isIndexAttr() {
    return this.index;
  }
  get imageState() {
    return this.imageLoadingState;
  }
  get imageContext() {
    return {
      $implicit: this.imageData,
      index: this.index,
      type: this.type,
      active: this.isActive,
      count: this.count,
      first: this.index === 0,
      last: this.index === this.count - 1
    };
  }
  get itemContext() {
    return {
      $implicit: this.data,
      index: this.index,
      type: this.type,
      active: this.isActive,
      count: this.count,
      first: this.index === 0,
      last: this.index === this.count - 1
    };
  }
  get element() {
    return this.el.nativeElement;
  }
  get isAutoPlay() {
    if (this.isActive) {
      if (this.type === GalleryItemTypes.Video || this.type === GalleryItemTypes.Youtube) {
        return this.videoData.autoplay;
      }
    }
  }
  get youtubeSrc() {
    let autoplay = 0;
    if (this.isActive && this.type === GalleryItemTypes.Youtube && this.data.autoplay) {
      autoplay = 1;
    }
    const url = new URL(this.data.src);
    url.search = new URLSearchParams(__spreadProps(__spreadValues({
      wmode: "transparent"
    }, this.data.params), {
      autoplay
    })).toString();
    return url.href;
  }
  get load() {
    switch (this.config.loadingStrategy) {
      case LoadingStrategy.Preload:
        return true;
      case LoadingStrategy.Lazy:
        return this.currIndex === this.index;
      default:
        return this.currIndex === this.index || this.currIndex === this.index - 1 || this.currIndex === this.index + 1;
    }
  }
  get imageData() {
    return this.data;
  }
  get videoData() {
    return this.data;
  }
  constructor(el, cd, _platform) {
    this.el = el;
    this.cd = cd;
    this._platform = _platform;
    this.Types = GalleryItemTypes;
    this.imageLoadingState = "IN_PROGRESS";
    this.error = new EventEmitter();
  }
  ngAfterViewChecked() {
    const height = this.getHeight();
    if (this._platform.isBrowser) {
      this.element.style.setProperty("--g-item-width", `${this.getWidth()}px`);
      this.element.style.setProperty("--g-item-height", `${height}px`);
    }
    if (this.currIndex === this.index) {
      const isThumbPositionHorizontal = this.config.thumbPosition === ThumbnailsPosition.Top || this.config.thumbPosition === ThumbnailsPosition.Bottom;
      if (this.config.autoHeight && height && isThumbPositionHorizontal) {
        this.element.parentElement.parentElement.style.height = `${height}px`;
      }
    }
  }
  onItemLoaded() {
    if (this.imageLoadingState === "IN_PROGRESS") {
      this.imageLoadingState = "DONE";
      this.cd.detectChanges();
    }
  }
  getWidth() {
    if (this.config.slidingDirection === "horizontal") {
      const firstElementChild = this.element?.firstElementChild;
      if (this.config.itemAutosize && this.imageLoadingState === "DONE" && firstElementChild?.clientWidth) {
        return firstElementChild.clientWidth;
      }
    }
    return this.element.parentElement.parentElement.clientWidth;
  }
  getHeight() {
    const firstElementChild = this.element.firstElementChild;
    if (firstElementChild) {
      if (this.config.autoHeight) {
        if (this.imageLoadingState === "DONE" && firstElementChild.clientHeight) {
          return firstElementChild.clientHeight;
        }
      }
      if (this.config.slidingDirection === "vertical") {
        if (this.config.itemAutosize && this.imageLoadingState === "DONE" && firstElementChild.clientHeight) {
          return firstElementChild.clientHeight;
        }
      }
    }
    return this.element.parentElement.parentElement.clientHeight;
  }
};
_GalleryItemComponent.ɵfac = function GalleryItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryItemComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform));
};
_GalleryItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _GalleryItemComponent,
  selectors: [["gallery-item"]],
  hostVars: 4,
  hostBindings: function GalleryItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("galleryIndex", ctx.isIndexAttr)("imageState", ctx.imageState);
      ɵɵclassProp("g-active-item", ctx.isActive);
    }
  },
  inputs: {
    config: "config",
    index: "index",
    count: "count",
    currIndex: "currIndex",
    type: "type",
    data: "data"
  },
  outputs: {
    error: "error"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "src", "mute", "poster", "controls", "controlsList", "disablePictureInPicture", "play", "pause", "error", 4, "ngSwitchCase"], [3, "src", "autoplay", "loadingAttr", "pause", 4, "ngSwitchCase"], [3, "src", "loadingAttr", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "loaded", "error", "src", "alt", "loadingAttr", "loadingIcon", "loadingError"], ["class", "g-template g-item-template", 4, "ngIf"], [1, "g-template", "g-item-template"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "error", "src", "mute", "poster", "controls", "controlsList", "disablePictureInPicture", "play", "pause"], [3, "src", "autoplay", "loadingAttr", "pause"], [3, "src", "loadingAttr"]],
  template: function GalleryItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, GalleryItemComponent_ng_container_0_Template, 6, 5, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.load);
    }
  },
  dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, GalleryImageComponent, GalleryVideoComponent, GalleryIframeComponent],
  encapsulation: 2,
  changeDetection: 0
});
var GalleryItemComponent = _GalleryItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryItemComponent, [{
    type: Component,
    args: [{
      selector: "gallery-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *ngIf="load" [ngSwitch]="type">
      <ng-container *ngSwitchCase="Types.Image">
        <gallery-image [src]="imageData.src"
                       [alt]="imageData.alt"
                       [loadingAttr]="config.loadingAttr"
                       [loadingIcon]="config.loadingIcon"
                       [loadingError]="config.loadingError"
                       (loaded)="onItemLoaded()"
                       (error)="error.emit($event)"></gallery-image>

        <div *ngIf="config.imageTemplate" class="g-template g-item-template">
          <ng-container *ngTemplateOutlet="config.imageTemplate; context: imageContext"></ng-container>
        </div>
      </ng-container>

      <gallery-video *ngSwitchCase="Types.Video"
                     [src]="videoData.src"
                     [mute]="videoData.mute"
                     [poster]="videoData.poster"
                     [controls]="videoData.controls"
                     [controlsList]="videoData.controlsList"
                     [disablePictureInPicture]="videoData.disablePictureInPicture"
                     [play]="isAutoPlay"
                     [pause]="currIndex !== index"
                     (error)="error.emit($event)"></gallery-video>

      <gallery-iframe *ngSwitchCase="Types.Youtube"
                      [src]="youtubeSrc"
                      [autoplay]="isAutoPlay"
                      [loadingAttr]="config.loadingAttr"
                      [pause]="currIndex !== index"></gallery-iframe>

      <gallery-iframe *ngSwitchCase="Types.Iframe"
                      [src]="data.src"
                      [loadingAttr]="config.loadingAttr"></gallery-iframe>

      <ng-container *ngSwitchDefault>
        <div *ngIf="config.itemTemplate" class="g-template g-item-template">
          <ng-container *ngTemplateOutlet="config.itemTemplate; context: itemContext"></ng-container>
        </div>
      </ng-container>
    </ng-container>
  `,
      standalone: true,
      imports: [CommonModule, GalleryImageComponent, GalleryVideoComponent, GalleryIframeComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: Platform
    }];
  }, {
    config: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    count: [{
      type: Input
    }],
    currIndex: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    error: [{
      type: Output
    }],
    isActive: [{
      type: HostBinding,
      args: ["class.g-active-item"]
    }],
    isIndexAttr: [{
      type: HostBinding,
      args: ["attr.galleryIndex"]
    }],
    imageState: [{
      type: HostBinding,
      args: ["attr.imageState"]
    }]
  });
})();
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
    let currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    let currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function LinearEasing(x) {
  return x;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }
  let sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    let lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    let dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    let guessForT = intervalStart + dist * kSampleStepSize;
    let initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing(x) {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
}
var SMOOTH_SCROLL_OPTIONS = new InjectionToken("SMOOTH_SCROLL_OPTIONS");
var _SmoothScrollManager = class _SmoothScrollManager {
  get _w() {
    return this._document.defaultView;
  }
  /**
   * Timing method
   */
  get _now() {
    return this._w.performance?.now?.bind(this._w.performance) || Date.now;
  }
  constructor(_document, customDefaultOptions, _platform) {
    this._document = _document;
    this._platform = _platform;
    this._onGoingScrolls = /* @__PURE__ */ new Map();
    this._defaultOptions = __spreadValues({
      duration: 468,
      easing: {
        x1: 0.42,
        y1: 0,
        x2: 0.58,
        y2: 1
      }
    }, customDefaultOptions);
  }
  /**
   * changes scroll position inside an element
   */
  _scrollElement(el, x, y) {
    el.scrollLeft = x;
    el.scrollTop = y;
  }
  /**
   * Handles a given parameter of type HTMLElement, ElementRef or selector
   */
  _getElement(el, parent) {
    if (typeof el === "string") {
      return (parent || this._document).querySelector(el);
    }
    return coerceElement(el);
  }
  /**
   * Initializes a destroyer stream, re-initializes it if the element is already being scrolled
   */
  _initSmoothScroll(el) {
    if (this._onGoingScrolls.has(el)) {
      this._onGoingScrolls.get(el).next();
    }
    return this._onGoingScrolls.set(el, new Subject()).get(el);
  }
  /**
   * Checks if smooth scroll has reached, cleans up the smooth scroll stream and resolves its promise
   */
  _isFinished(context, destroyed, resolve) {
    if (context.currentX !== context.x || context.currentY !== context.y) {
      return true;
    }
    destroyed.next();
    resolve();
    return false;
  }
  /**
   * Terminates an ongoing smooth scroll
   */
  _interrupted(el, destroyed) {
    return merge(fromEvent(el, "wheel", {
      passive: true,
      capture: true
    }), fromEvent(el, "touchmove", {
      passive: true,
      capture: true
    }), destroyed).pipe(take(1));
  }
  /**
   * Deletes the destroyer function, runs if the smooth scroll has finished or interrupted
   */
  _destroy(el, destroyed) {
    destroyed.complete();
    this._onGoingScrolls.delete(el);
  }
  /**
   * A function called recursively that, given a context, steps through scrolling
   */
  _step(context) {
    return new Observable((subscriber) => {
      let elapsed = (this._now() - context.startTime) / context.duration;
      elapsed = elapsed > 1 ? 1 : elapsed;
      const value = context.easing(elapsed);
      context.currentX = context.startX + (context.x - context.startX) * value;
      context.currentY = context.startY + (context.y - context.startY) * value;
      this._scrollElement(context.scrollable, context.currentX, context.currentY);
      requestAnimationFrame(() => subscriber.next(context));
    });
  }
  _applyScrollToOptions(el, options) {
    if (!options.duration) {
      this._scrollElement(el, options.left, options.top);
      return Promise.resolve();
    }
    const destroyed = this._initSmoothScroll(el);
    const context = {
      scrollable: el,
      startTime: this._now(),
      startX: el.scrollLeft,
      startY: el.scrollTop,
      x: options.left == null ? el.scrollLeft : ~~options.left,
      y: options.top == null ? el.scrollTop : ~~options.top,
      duration: options.duration,
      easing: bezier(options.easing.x1, options.easing.y1, options.easing.x2, options.easing.y2)
    };
    return new Promise((resolve) => {
      of(null).pipe(expand(() => this._step(context).pipe(takeWhile((currContext) => this._isFinished(currContext, destroyed, resolve)))), takeUntil(this._interrupted(el, destroyed)), finalize(() => this._destroy(el, destroyed))).subscribe();
    });
  }
  /**
   * Dismiss an ongoing scroll
   * @param el
   */
  dismissOngoingScroll(el) {
    this._onGoingScrolls.get(el)?.next();
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param scrollable element
   * @param customOptions specified the offsets to scroll to.
   */
  scrollTo(scrollable, customOptions) {
    if (this._platform.isBrowser) {
      const el = this._getElement(scrollable);
      const isRtl = getComputedStyle(el).direction === "rtl";
      const rtlScrollAxisType2 = getRtlScrollAxisType();
      const options = __spreadValues(__spreadValues(__spreadValues({}, this._defaultOptions), customOptions), {
        // Rewrite start & end offsets as right or left offsets.
        left: customOptions.left == null ? isRtl ? customOptions.end : customOptions.start : customOptions.left,
        right: customOptions.right == null ? isRtl ? customOptions.start : customOptions.end : customOptions.right
      });
      if (options.bottom != null) {
        options.top = el.scrollHeight - el.clientHeight - options.bottom;
      }
      if (isRtl && rtlScrollAxisType2 !== 0) {
        if (options.left != null) {
          options.right = el.scrollWidth - el.clientWidth - options.left;
        }
        if (rtlScrollAxisType2 === 2) {
          options.left = options.right;
        } else if (rtlScrollAxisType2 === 1) {
          options.left = options.right ? -options.right : options.right;
        }
      } else {
        if (options.right != null) {
          options.left = el.scrollWidth - el.clientWidth - options.right;
        }
      }
      return this._applyScrollToOptions(el, options);
    }
    return Promise.resolve();
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(scrollable, target, customOptions = {}) {
    const scrollableEl = this._getElement(scrollable);
    const targetEl = this._getElement(target, scrollableEl);
    const options = __spreadValues(__spreadValues({}, customOptions), {
      left: targetEl.offsetLeft + (customOptions.left || 0),
      top: targetEl.offsetTop + (customOptions.top || 0)
    });
    return targetEl ? this.scrollTo(scrollableEl, options) : Promise.resolve();
  }
};
_SmoothScrollManager.ɵfac = function SmoothScrollManager_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SmoothScrollManager)(ɵɵinject(DOCUMENT), ɵɵinject(SMOOTH_SCROLL_OPTIONS, 8), ɵɵinject(Platform));
};
_SmoothScrollManager.ɵprov = ɵɵdefineInjectable({
  token: _SmoothScrollManager,
  factory: _SmoothScrollManager.ɵfac,
  providedIn: "root"
});
var SmoothScrollManager = _SmoothScrollManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScrollManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [SMOOTH_SCROLL_OPTIONS]
      }]
    }, {
      type: Platform
    }];
  }, null);
})();
var _GallerySliderComponent = class _GallerySliderComponent {
  get slider() {
    return this.sliderEl.nativeElement;
  }
  constructor(_el, _cd, _zone, _platform, _smoothScroll, _gallery) {
    this._el = _el;
    this._cd = _cd;
    this._zone = _zone;
    this._platform = _platform;
    this._smoothScroll = _smoothScroll;
    this._gallery = _gallery;
    this.scrollHandler$ = new Subject();
    this.visibleElements = /* @__PURE__ */ new Map();
    this._destroyed$ = new Subject();
    this.itemClick = new EventEmitter();
    this.error = new EventEmitter();
    this.items = new QueryList();
    this.scrollHandler$.pipe(debounceTime(0, animationFrameScheduler), switchMap(({
      value,
      behavior
    }) => {
      this._gallery.debugConsole("[Gallery scrollHandler$] ", this.slider.style.scrollSnapType);
      this.slider.style.scrollSnapType = "unset";
      const el = this.items.get(value)?.element;
      this._gallery.debugConsole("🤯 [Gallery scrollHandler$] scrollSnapType = unset, scrollTo element", !!el);
      if (el) {
        this.slider.classList.add("g-scrolling");
        const pos = this.adapter.getScrollToValue(el, behavior || this.config.scrollBehavior);
        const index = +this.items.get(value)?.element.getAttribute("galleryIndex");
        this._gallery.debugConsole(`🚀 [Gallery scrollHandler$] Scroll start ===> index: ${index}, position:`, pos);
        this._gallery.debugConsole(`🚀 [Gallery scrollHandler$] slider scrollable`, this.adapter.scrollValue);
        return from(this._smoothScroll.scrollTo(this.slider, pos)).pipe(tap(() => {
          this._isPanning = false;
          this.slider.classList.remove("g-scrolling");
          this.slider.style.scrollSnapType = this.adapter.scrollSnapType;
          this._gallery.debugConsole("✅ [Gallery scrollHandler$] Scroll end");
        }));
      }
      this._gallery.debugConsole("😡 [Gallery scrollHandler$] Scroll element was not found!");
      return EMPTY;
    }), takeUntil(this._destroyed$)).subscribe();
  }
  ngOnChanges(changes) {
    if (changes.config) {
      if (changes.config.currentValue?.slidingDirection !== changes.config.previousValue?.slidingDirection) {
        switch (this.config.slidingDirection) {
          case SlidingDirection.Horizontal:
            this.adapter = new HorizontalAdapter(this.slider, this.config);
            break;
          case SlidingDirection.Vertical:
            this.adapter = new VerticalAdapter(this.slider, this.config);
            break;
        }
        if (this._platform.isBrowser) {
          if (!changes.config.firstChange) {
            requestAnimationFrame(() => {
              this.scrollToIndex(this.state.currIndex, "auto");
            });
          }
          this.enableDisableGestures();
        }
      }
      if (this._platform.isBrowser && !changes.config.firstChange) {
        if (changes.config.currentValue?.mouseSlidingDisabled !== changes.config.previousValue?.mouseSlidingDisabled) {
          this.enableDisableGestures();
        }
      }
    }
    if (this._platform.isBrowser && changes.state && changes.state.currentValue?.currIndex !== changes.state.previousValue?.currIndex) {
      requestAnimationFrame(() => {
        this.scrollToIndex(this.state.currIndex, changes.state.firstChange ? "auto" : this.state.behavior);
      });
    }
  }
  ngOnInit() {
    if (this._platform.isBrowser) {
      this._zone.runOutsideAngular(() => {
        this.createIntersectionObserver(this.slider).pipe(tap((entry) => {
          entry.target.classList.toggle("g-item-visible", entry.isIntersecting);
          if (entry.isIntersecting) {
            this.visibleElements.set(entry.target, entry);
          } else {
            this.visibleElements.delete(entry.target);
          }
        }), takeUntil(this._destroyed$)).subscribe();
        fromEvent(this.slider, "scroll", {
          passive: true
        }).pipe(debounceTime(50), filter(() => !this._isPanning), tap(() => this.onViewportScroll()), takeUntil(this._destroyed$)).subscribe();
        resizeObservable(this._el.nativeElement).pipe(debounceTime(this.config.resizeDebounceTime), tap(([entry]) => this.onHostResize(entry)), takeUntil(this._destroyed$)).subscribe();
      });
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this.items.notifyOnChanges();
      this.items.changes.pipe(startWith(null), tap(() => {
        this.visibleElements.forEach((item) => {
          this.intersectionObserver.unobserve(item.target);
        });
        this.items.toArray().map((item) => {
          this.intersectionObserver.observe(item.element);
        });
      }), takeUntil(this._destroyed$)).subscribe();
    }
  }
  ngAfterViewChecked() {
    if (this.config.itemAutosize && this._platform.isBrowser) {
      this.slider.style.setProperty("--slider-centralize-start-size", this.adapter.getCentralizerStartSize() + "px");
      this.slider.style.setProperty("--slider-centralize-end-size", this.adapter.getCentralizerEndSize() + "px");
    }
  }
  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
    this.deactivateGestures();
  }
  trackByFn(index, item) {
    return item.type;
  }
  onHostResize(entry) {
    const width = Math.ceil(entry.contentRect.width);
    const height = Math.ceil(entry.contentRect.height);
    this.slider.style.width = `${width}px`;
    this.slider.style.height = `${height}px`;
    this.scrollToIndex(this.state.currIndex, "auto");
    this._cd.detectChanges();
    this._gallery.debugConsole("🦐 [Gallery OnHostResize]: set viewport width to absolute number");
  }
  onViewportScroll() {
    const currElement = this.items.get(this.state.currIndex)?.element;
    const elementAtCenter = this.getElementFromViewportCenter();
    if (elementAtCenter) {
      if (elementAtCenter !== currElement) {
        this.tryScrollToElement(elementAtCenter);
      }
    } else {
      this._gallery.debugConsole("⁉ [Gallery onViewportScroll]: No center element was found");
      this.visibleElements.forEach((entry) => {
        this.tryScrollToElement(entry.target);
      });
    }
  }
  tryScrollToElement(elementAtCenter) {
    const allowedMargin = 10;
    const offsetDiff = (this.adapter.clientSize - this.adapter.getClientSize(elementAtCenter)) / 2;
    const rangeStart = this.adapter.scrollValue + offsetDiff;
    const rangeEnd = this.adapter.scrollValue + this.adapter.clientSize - offsetDiff;
    const elStart = this.adapter.getOffsetSize(elementAtCenter);
    const elEnd = elStart + this.adapter.getClientSize(elementAtCenter);
    const isStart = rangeStart + allowedMargin >= elStart && rangeStart - allowedMargin <= elStart;
    const isEnd = rangeEnd + allowedMargin >= elEnd && rangeEnd - allowedMargin <= elEnd;
    this.slider.style.scrollSnapType = this.adapter.scrollSnapType;
    if (isStart && isEnd) {
      this._gallery.debugConsole("🍄 [Gallery onViewportScroll]: Set active gallery item");
      const index = +elementAtCenter.getAttribute("galleryIndex");
      this._zone.run(() => this._gallery.ref(this.galleryId).set(index, "smooth"));
    }
  }
  scrollToIndex(value, behavior, onEnd) {
    this.scrollHandler$.next({
      value,
      behavior,
      onEnd
    });
  }
  enableDisableGestures() {
    if (!this._platform.IOS && !this._platform.ANDROID) {
      if (!this.config.mouseSlidingDisabled) {
        this.activateGestures();
      } else {
        this.deactivateGestures();
      }
    }
  }
  activateGestures() {
    if (typeof Hammer !== "undefined") {
      this.deactivateGestures();
      const direction = this.adapter.panDirection;
      this._zone.runOutsideAngular(() => {
        this._hammer = new Hammer(this._el.nativeElement, {
          inputClass: Hammer.MouseInput
        });
        this._hammer.get("pan").set({
          direction
        });
        let panOffset;
        this._hammer.on("panstart", () => {
          this._smoothScroll.dismissOngoingScroll(this.slider);
          panOffset = this.adapter.scrollValue;
          this.slider.style.scrollSnapType = "unset";
          this.slider.classList.add("g-sliding");
          this._isPanning = true;
        });
        this._hammer.on("panmove", (e) => this.slider.scrollTo(this.adapter.getPanValue(panOffset, e, "auto")));
        this._hammer.on("panend", (e) => this.onPanEnd(e));
      });
    }
  }
  deactivateGestures() {
    this._hammer?.destroy();
  }
  onPanEnd(e) {
    this._gallery.debugConsole("🖱️ [Gallery]: onPanEnd", e);
    this.slider.classList.remove("g-sliding");
    const delta = this.adapter.getPanDelta(e);
    const velocity = this.adapter.getPanVelocity(e);
    const galleryRef = this._gallery.ref(this.galleryId);
    this._zone.run(() => {
      const currElement = this.items.get(this.state.currIndex)?.element;
      const elementAtCenter = this.getElementFromViewportCenter();
      if (elementAtCenter && elementAtCenter !== currElement) {
        const index = +elementAtCenter.getAttribute("galleryIndex");
        this.scrollToIndex(index, "smooth");
        return;
      }
      if (Math.abs(delta) > (currElement.clientWidth || this.adapter.clientSize) / 2) {
        return delta > 0 ? galleryRef.prev("smooth", false) : galleryRef.next("smooth", false);
      }
      if (Math.abs(velocity) > 0.3) {
        return velocity > 0 ? galleryRef.prev("smooth", false) : galleryRef.next("smooth", false);
      }
      this.scrollToIndex(this.state.currIndex, "smooth");
    });
  }
  getElementFromViewportCenter() {
    const sliderRect = this.slider.getBoundingClientRect();
    const centerElements = document.elementsFromPoint(sliderRect.x + sliderRect.width / 2, sliderRect.y + sliderRect.height / 2);
    const element = centerElements.find((element2) => element2.localName === "gallery-item" && element2.getAttribute("galleryId") === this.galleryId);
    this._gallery.debugConsole("🪟 [Gallery]: getElementFromViewportCenter", element);
    return element;
  }
  createIntersectionObserver(slider) {
    return new Observable((observer) => {
      this.intersectionObserver = new IntersectionObserver((entries) => observer.next(entries), {
        root: slider
      });
      return () => this.intersectionObserver.disconnect();
    }).pipe(mergeMap((entries) => entries), distinctUntilChanged());
  }
};
_GallerySliderComponent.ɵfac = function GallerySliderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GallerySliderComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(SmoothScrollManager), ɵɵdirectiveInject(Gallery));
};
_GallerySliderComponent.ɵcmp = ɵɵdefineComponent({
  type: _GallerySliderComponent,
  selectors: [["gallery-slider"]],
  viewQuery: function GallerySliderComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 7);
      ɵɵviewQuery(GalleryItemComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sliderEl = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    }
  },
  inputs: {
    galleryId: "galleryId",
    state: "state",
    config: "config"
  },
  outputs: {
    itemClick: "itemClick",
    error: "error"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c3,
  decls: 5,
  vars: 3,
  consts: [["slider", ""], [1, "g-slider"], [1, "g-slider-content"], [3, "type", "config", "data", "currIndex", "index", "count", "click", "error", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click", "error", "type", "config", "data", "currIndex", "index", "count"]],
  template: function GallerySliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 1, 0)(2, "div", 2);
      ɵɵtemplate(3, GallerySliderComponent_gallery_item_3_Template, 1, 7, "gallery-item", 3);
      ɵɵelementEnd()();
      ɵɵprojection(4);
    }
    if (rf & 2) {
      ɵɵattribute("centralised", ctx.config.itemAutosize);
      ɵɵadvance(3);
      ɵɵproperty("ngForOf", ctx.state.items)("ngForTrackBy", ctx.trackByFn);
    }
  },
  dependencies: [CommonModule, NgForOf, GalleryItemComponent],
  encapsulation: 2,
  changeDetection: 0
});
var GallerySliderComponent = _GallerySliderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GallerySliderComponent, [{
    type: Component,
    args: [{
      selector: "gallery-slider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div #slider
         class="g-slider"
         [attr.centralised]="config.itemAutosize">
      <div class="g-slider-content">
        <gallery-item *ngFor="let item of state.items; trackBy: trackByFn; index as i"
                      [attr.galleryId]="galleryId"
                      [type]="item.type"
                      [config]="config"
                      [data]="item.data"
                      [currIndex]="state.currIndex"
                      [index]="i"
                      [count]="state.items.length"
                      (click)="itemClick.emit(i)"
                      (error)="error.emit({ itemIndex: i, error: $event })">
        </gallery-item>
      </div>
    </div>
    <ng-content></ng-content>
  `,
      standalone: true,
      imports: [CommonModule, GalleryItemComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: NgZone
    }, {
      type: Platform
    }, {
      type: SmoothScrollManager
    }, {
      type: Gallery
    }];
  }, {
    galleryId: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    sliderEl: [{
      type: ViewChild,
      args: ["slider", {
        static: true
      }]
    }],
    items: [{
      type: ViewChildren,
      args: [GalleryItemComponent]
    }]
  });
})();
var _GalleryThumbComponent = class _GalleryThumbComponent {
  constructor() {
    this.error = new EventEmitter();
  }
  get isActive() {
    return this.index === this.currIndex;
  }
  get imageContext() {
    return {
      $implicit: this.data,
      index: this.index,
      type: this.type,
      active: this.isActive,
      count: this.count,
      first: this.index === 0,
      last: this.index === this.count - 1
    };
  }
};
_GalleryThumbComponent.ɵfac = function GalleryThumbComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryThumbComponent)();
};
_GalleryThumbComponent.ɵcmp = ɵɵdefineComponent({
  type: _GalleryThumbComponent,
  selectors: [["gallery-thumb"]],
  hostVars: 2,
  hostBindings: function GalleryThumbComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("g-active-thumb", ctx.isActive);
    }
  },
  inputs: {
    config: "config",
    index: "index",
    count: "count",
    currIndex: "currIndex",
    type: "type",
    data: "data"
  },
  outputs: {
    error: "error"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 6,
  consts: [[3, "error", "src", "alt", "isThumbnail", "loadingIcon", "loadingError"], ["class", "g-template g-thumb-template", 4, "ngIf"], [1, "g-template", "g-thumb-template"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function GalleryThumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "gallery-image", 0);
      ɵɵlistener("error", function GalleryThumbComponent_Template_gallery_image_error_0_listener($event) {
        return ctx.error.emit($event);
      });
      ɵɵelementEnd();
      ɵɵtemplate(1, GalleryThumbComponent_div_1_Template, 2, 2, "div", 1);
    }
    if (rf & 2) {
      ɵɵproperty("src", ctx.data.thumb)("alt", ctx.data.alt + "-thumbnail")("isThumbnail", true)("loadingIcon", ctx.config.thumbLoadingIcon)("loadingError", ctx.config.thumbLoadingError);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.config.thumbTemplate);
    }
  },
  dependencies: [CommonModule, NgIf, NgTemplateOutlet, GalleryImageComponent],
  encapsulation: 2,
  changeDetection: 0
});
var GalleryThumbComponent = _GalleryThumbComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryThumbComponent, [{
    type: Component,
    args: [{
      selector: "gallery-thumb",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <gallery-image [src]="data.thumb"
                   [alt]="data.alt + '-thumbnail'"
                   [isThumbnail]="true"
                   [loadingIcon]="config.thumbLoadingIcon"
                   [loadingError]="config.thumbLoadingError"
                   (error)="error.emit($event)"></gallery-image>

    <div *ngIf="config.thumbTemplate" class="g-template g-thumb-template">
      <ng-container *ngTemplateOutlet="config.thumbTemplate; context: imageContext"></ng-container>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, GalleryImageComponent]
    }]
  }], null, {
    config: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    count: [{
      type: Input
    }],
    currIndex: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    error: [{
      type: Output
    }],
    isActive: [{
      type: HostBinding,
      args: ["class.g-active-thumb"]
    }]
  });
})();
var _GalleryThumbsComponent = class _GalleryThumbsComponent {
  get slider() {
    return this.sliderEl.nativeElement;
  }
  constructor(_el, _zone, _smoothScroll, _cd, _platform) {
    this._el = _el;
    this._zone = _zone;
    this._smoothScroll = _smoothScroll;
    this._cd = _cd;
    this._platform = _platform;
    this.thumbnailsView = ThumbnailsView;
    this._destroyed$ = new Subject();
    this.thumbClick = new EventEmitter();
    this.error = new EventEmitter();
    this.items = new QueryList();
  }
  ngOnChanges(changes) {
    if (changes.config) {
      if (changes.config.currentValue?.thumbPosition !== changes.config.previousValue?.thumbPosition) {
        switch (this.config.thumbPosition) {
          case ThumbnailsPosition.Right:
          case ThumbnailsPosition.Left:
            this.adapter = new VerticalThumbAdapter(this.slider, this.config);
            break;
          case ThumbnailsPosition.Top:
          case ThumbnailsPosition.Bottom:
            this.adapter = new HorizontalThumbAdapter(this.slider, this.config);
            break;
        }
        if (this._platform.isBrowser) {
          if (!changes.config.firstChange) {
            requestAnimationFrame(() => {
              this.scrollToIndex(this.state.currIndex, "auto");
            });
          }
          this.enableDisableGestures();
        }
      }
      if (this._platform.isBrowser) {
        if (!changes.config.firstChange && changes.config.currentValue?.thumbMouseSlidingDisabled !== changes.config.previousValue?.thumbMouseSlidingDisabled) {
          this.enableDisableGestures();
        }
        this.slider.style.setProperty("--thumb-height", `${this.config.thumbHeight}px`);
        this.slider.style.setProperty("--thumb-width", `${this.config.thumbWidth}px`);
      }
    }
    if (this._platform.isBrowser && changes.state && (changes.state.firstChange || !this.config.thumbDetached)) {
      if (changes.state.currentValue?.currIndex !== changes.state.previousValue?.currIndex) {
        requestAnimationFrame(() => {
          this.scrollToIndex(this.state.currIndex, changes.state?.firstChange ? "auto" : "smooth");
        });
      }
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      setTimeout(() => this.scrollToIndex(this.state.currIndex, "auto"), 200);
      this._zone.runOutsideAngular(() => {
        resizeObservable(this._el.nativeElement).pipe(debounceTime(this.config.resizeDebounceTime), tap(() => {
          const el = this.items.get(this.state.currIndex)?.nativeElement;
          if (el) {
            this.slider.style.setProperty("--thumb-centralize-start-size", this.adapter.getCentralizerStartSize() + "px");
            this.slider.style.setProperty("--thumb-centralize-end-size", this.adapter.getCentralizerEndSize() + "px");
          }
          this._cd.detectChanges();
          this.scrollToIndex(this.state.currIndex, "auto");
        }), takeUntil(this._destroyed$)).subscribe();
      });
    }
  }
  ngAfterViewChecked() {
    const el = this.items.get(this.state.currIndex)?.nativeElement;
    if (el && this._platform.isBrowser) {
      this.slider.style.setProperty("--thumb-centralize-start-size", this.adapter.getCentralizerStartSize() + "px");
      this.slider.style.setProperty("--thumb-centralize-end-size", this.adapter.getCentralizerEndSize() + "px");
    }
  }
  ngOnDestroy() {
    this.deactivateGestures();
    this._destroyed$.next();
    this._destroyed$.complete();
  }
  trackByFn(index, item) {
    return item.type;
  }
  scrollToIndex(value, behavior) {
    this._zone.runOutsideAngular(() => {
      this.slider.style.scrollSnapType = "unset";
      const el = this.items.get(value)?.nativeElement;
      if (el) {
        this._smoothScroll.scrollTo(this.slider, this.adapter.getScrollToValue(el, behavior)).then(() => {
          this.slider.style.scrollSnapType = this.adapter.scrollSnapType;
        });
      }
    });
  }
  enableDisableGestures() {
    if (!this._platform.IOS && !this._platform.ANDROID) {
      if (!this.config.thumbMouseSlidingDisabled) {
        this.activateGestures();
      } else {
        this.deactivateGestures();
      }
    }
  }
  activateGestures() {
    if (typeof Hammer !== "undefined" && !this.config.disableThumb) {
      const direction = this.adapter.panDirection;
      this._zone.runOutsideAngular(() => {
        this._hammer = new Hammer(this._el.nativeElement, {
          inputClass: Hammer.MouseInput
        });
        this._hammer.get("pan").set({
          direction
        });
        let panOffset = 0;
        this._hammer.on("panstart", () => {
          panOffset = this.adapter.scrollValue;
          this.slider.style.scrollSnapType = "unset";
          this.slider.classList.add("g-sliding");
        });
        this._hammer.on("panmove", (e) => this.slider.scrollTo(this.adapter.getPanValue(panOffset, e, "auto")));
        this._hammer.on("panend", () => {
          this.slider.style.scrollSnapType = this.adapter.scrollSnapType;
          this.slider.classList.remove("g-sliding");
        });
      });
    }
  }
  deactivateGestures() {
    this._hammer?.destroy();
  }
};
_GalleryThumbsComponent.ɵfac = function GalleryThumbsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryThumbsComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(SmoothScrollManager), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform));
};
_GalleryThumbsComponent.ɵcmp = ɵɵdefineComponent({
  type: _GalleryThumbsComponent,
  selectors: [["gallery-thumbs"]],
  viewQuery: function GalleryThumbsComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 7);
      ɵɵviewQuery(GalleryThumbComponent, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sliderEl = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    }
  },
  inputs: {
    state: "state",
    config: "config"
  },
  outputs: {
    thumbClick: "thumbClick",
    error: "error"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 3,
  consts: [["slider", ""], [1, "g-slider"], [1, "g-slider-content"], [3, "type", "config", "data", "currIndex", "index", "count", "click", "error", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click", "error", "type", "config", "data", "currIndex", "index", "count"]],
  template: function GalleryThumbsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 1, 0)(2, "div", 2);
      ɵɵtemplate(3, GalleryThumbsComponent_gallery_thumb_3_Template, 1, 6, "gallery-thumb", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵattribute("centralised", ctx.config.thumbView === ctx.thumbnailsView.Contain || ctx.adapter.isContentLessThanContainer);
      ɵɵadvance(3);
      ɵɵproperty("ngForOf", ctx.state.items)("ngForTrackBy", ctx.trackByFn);
    }
  },
  dependencies: [CommonModule, NgForOf, GalleryThumbComponent],
  encapsulation: 2,
  changeDetection: 0
});
var GalleryThumbsComponent = _GalleryThumbsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryThumbsComponent, [{
    type: Component,
    args: [{
      selector: "gallery-thumbs",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div #slider
         class="g-slider"
         [attr.centralised]="config.thumbView === thumbnailsView.Contain || adapter.isContentLessThanContainer">
      <div class="g-slider-content">
        <gallery-thumb *ngFor="let item of state.items; trackBy: trackByFn; index as i"
                       [type]="item.type"
                       [config]="config"
                       [data]="item.data"
                       [currIndex]="state.currIndex"
                       [index]="i"
                       [count]="state.items.length"
                       (click)="config.disableThumb ? null : thumbClick.emit(i)"
                       (error)="error.emit({ itemIndex: i, error: $event })">
        </gallery-thumb>
      </div>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, GalleryThumbComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: SmoothScrollManager
    }, {
      type: ChangeDetectorRef
    }, {
      type: Platform
    }];
  }, {
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    thumbClick: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    sliderEl: [{
      type: ViewChild,
      args: ["slider", {
        static: true
      }]
    }],
    items: [{
      type: ViewChildren,
      args: [GalleryThumbComponent, {
        read: ElementRef
      }]
    }]
  });
})();
var _GalleryCoreComponent = class _GalleryCoreComponent {
  constructor() {
    this.itemClick = new EventEmitter();
    this.thumbClick = new EventEmitter();
    this.error = new EventEmitter();
  }
  /** Set thumbnails position */
  get thumbPosition() {
    return this.config.thumbPosition;
  }
  /** Set sliding direction */
  get slidingDirection() {
    return this.config.slidingDirection;
  }
  /** Disable thumbnails clicks */
  get disableThumb() {
    return this.config.disableThumb;
  }
  /** Set gallery image size */
  get imageSize() {
    return this.config.imageSize;
  }
  get thumbImageSize() {
    return this.config.thumbImageSize;
  }
  /** Set gallery dots position */
  get dotsPosition() {
    return this.config.dotsPosition;
  }
  /** Set gallery counter position */
  get counterPosition() {
    return this.config.counterPosition;
  }
  /** Set gallery counter position */
  get slidingDisabled() {
    return this.config.slidingDisabled;
  }
  /** Set gallery counter position */
  get thumbSlidingDisabled() {
    return this.config.thumbSlidingDisabled;
  }
  /** Set gallery slider itemAutosize style  */
  get itemAutosize() {
    return this.config.itemAutosize;
  }
  /** Set gallery slider autoHeight style  */
  get autoHeight() {
    return this.config.autoHeight;
  }
  /** Set gallery slider thumbAutosize style  */
  get thumbAutosize() {
    return this.config.thumbAutosize;
  }
  /** Set debug style  */
  get debug() {
    return this.config.debug;
  }
};
_GalleryCoreComponent.ɵfac = function GalleryCoreComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryCoreComponent)();
};
_GalleryCoreComponent.ɵcmp = ɵɵdefineComponent({
  type: _GalleryCoreComponent,
  selectors: [["gallery-core"]],
  hostVars: 13,
  hostBindings: function GalleryCoreComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("thumbPosition", ctx.thumbPosition)("slidingDirection", ctx.slidingDirection)("disableThumb", ctx.disableThumb)("imageSize", ctx.imageSize)("thumbImageSize", ctx.thumbImageSize)("dotsPosition", ctx.dotsPosition)("counterPosition", ctx.counterPosition)("slidingDisabled", ctx.slidingDisabled)("thumbSlidingDisabled", ctx.thumbSlidingDisabled)("itemAutosize", ctx.itemAutosize)("autoHeight", ctx.autoHeight)("thumbAutosize", ctx.thumbAutosize)("debug", ctx.debug);
    }
  },
  inputs: {
    galleryId: "galleryId",
    state: "state",
    config: "config"
  },
  outputs: {
    itemClick: "itemClick",
    thumbClick: "thumbClick",
    error: "error"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 8,
  vars: 12,
  consts: [[3, "state", "config", "thumbClick", "error", 4, "ngIf"], [1, "g-box"], [3, "itemClick", "error", "state", "config", "galleryId"], [3, "state", "config", "galleryId", 4, "ngIf"], [3, "state", 4, "ngIf"], [1, "g-box-template"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "thumbClick", "error", "state", "config"], [3, "state", "config", "galleryId"], [3, "state"]],
  template: function GalleryCoreComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, GalleryCoreComponent_gallery_thumbs_0_Template, 1, 2, "gallery-thumbs", 0);
      ɵɵelementStart(1, "div", 1)(2, "gallery-slider", 2);
      ɵɵlistener("itemClick", function GalleryCoreComponent_Template_gallery_slider_itemClick_2_listener($event) {
        return ctx.itemClick.emit($event);
      })("error", function GalleryCoreComponent_Template_gallery_slider_error_2_listener($event) {
        return ctx.error.emit($event);
      });
      ɵɵtemplate(3, GalleryCoreComponent_gallery_nav_3_Template, 1, 3, "gallery-nav", 3);
      ɵɵelementEnd();
      ɵɵtemplate(4, GalleryCoreComponent_gallery_dots_4_Template, 1, 3, "gallery-dots", 3)(5, GalleryCoreComponent_gallery_counter_5_Template, 1, 1, "gallery-counter", 4);
      ɵɵelementStart(6, "div", 5);
      ɵɵtemplate(7, GalleryCoreComponent_ng_container_7_Template, 1, 0, "ng-container", 6);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.config.thumb);
      ɵɵadvance(2);
      ɵɵproperty("state", ctx.state)("config", ctx.config)("galleryId", ctx.galleryId);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.config.nav && ctx.state.items.length > 1);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.config.dots);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.config.counter);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.config.boxTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(9, _c4, ctx.state, ctx.config));
    }
  },
  dependencies: [CommonModule, NgIf, NgTemplateOutlet, GalleryThumbsComponent, GallerySliderComponent, GalleryNavComponent, GalleryDotsComponent, GalleryCounterComponent],
  encapsulation: 2,
  changeDetection: 0
});
var GalleryCoreComponent = _GalleryCoreComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryCoreComponent, [{
    type: Component,
    args: [{
      selector: "gallery-core",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <gallery-thumbs *ngIf="config.thumb"
                    [state]="state"
                    [config]="config"
                    (thumbClick)="thumbClick.emit($event)"
                    (error)="error.emit($event)">
    </gallery-thumbs>

    <div class="g-box">
      <gallery-slider [state]="state"
                      [config]="config"
                      [galleryId]="galleryId"
                      (itemClick)="itemClick.emit($event)"
                      (error)="error.emit($event)">

        <gallery-nav *ngIf="config.nav && state.items.length > 1"
                     [state]="state"
                     [config]="config"
                     [galleryId]="galleryId">
        </gallery-nav>

      </gallery-slider>

      <gallery-dots *ngIf="config.dots"
                    [state]="state"
                    [config]="config"
                    [galleryId]="galleryId">
      </gallery-dots>

      <gallery-counter *ngIf="config.counter"
                       [state]="state">
      </gallery-counter>

      <div class="g-box-template">
        <ng-container *ngTemplateOutlet="config.boxTemplate; context: { state: state, config: config }"></ng-container>
      </div>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, GalleryThumbsComponent, GallerySliderComponent, GalleryNavComponent, GalleryDotsComponent, GalleryCounterComponent]
    }]
  }], null, {
    galleryId: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    thumbClick: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    thumbPosition: [{
      type: HostBinding,
      args: ["attr.thumbPosition"]
    }],
    slidingDirection: [{
      type: HostBinding,
      args: ["attr.slidingDirection"]
    }],
    disableThumb: [{
      type: HostBinding,
      args: ["attr.disableThumb"]
    }],
    imageSize: [{
      type: HostBinding,
      args: ["attr.imageSize"]
    }],
    thumbImageSize: [{
      type: HostBinding,
      args: ["attr.thumbImageSize"]
    }],
    dotsPosition: [{
      type: HostBinding,
      args: ["attr.dotsPosition"]
    }],
    counterPosition: [{
      type: HostBinding,
      args: ["attr.counterPosition"]
    }],
    slidingDisabled: [{
      type: HostBinding,
      args: ["attr.slidingDisabled"]
    }],
    thumbSlidingDisabled: [{
      type: HostBinding,
      args: ["attr.thumbSlidingDisabled"]
    }],
    itemAutosize: [{
      type: HostBinding,
      args: ["attr.itemAutosize"]
    }],
    autoHeight: [{
      type: HostBinding,
      args: ["attr.autoHeight"]
    }],
    thumbAutosize: [{
      type: HostBinding,
      args: ["attr.thumbAutosize"]
    }],
    debug: [{
      type: HostBinding,
      args: ["attr.debug"]
    }]
  });
})();
var _GalleryImageDef = class _GalleryImageDef {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  // Make sure the template checker knows the type of the context with which the
  // template of this directive will be rendered
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
};
_GalleryImageDef.ɵfac = function GalleryImageDef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryImageDef)(ɵɵdirectiveInject(TemplateRef));
};
_GalleryImageDef.ɵdir = ɵɵdefineDirective({
  type: _GalleryImageDef,
  selectors: [["", "galleryImageDef", ""]],
  standalone: true
});
var GalleryImageDef = _GalleryImageDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryImageDef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[galleryImageDef]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var _GalleryThumbDef = class _GalleryThumbDef {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  // Make sure the template checker knows the type of the context with which the
  // template of this directive will be rendered
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
};
_GalleryThumbDef.ɵfac = function GalleryThumbDef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryThumbDef)(ɵɵdirectiveInject(TemplateRef));
};
_GalleryThumbDef.ɵdir = ɵɵdefineDirective({
  type: _GalleryThumbDef,
  selectors: [["", "galleryThumbDef", ""]],
  standalone: true
});
var GalleryThumbDef = _GalleryThumbDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryThumbDef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[galleryThumbDef]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var _GalleryItemDef = class _GalleryItemDef {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  // Make sure the template checker knows the type of the context with which the
  // template of this directive will be rendered
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
};
_GalleryItemDef.ɵfac = function GalleryItemDef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryItemDef)(ɵɵdirectiveInject(TemplateRef));
};
_GalleryItemDef.ɵdir = ɵɵdefineDirective({
  type: _GalleryItemDef,
  selectors: [["", "galleryItemDef", ""]],
  standalone: true
});
var GalleryItemDef = _GalleryItemDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryItemDef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[galleryItemDef]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var _GalleryBoxDef = class _GalleryBoxDef {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  // Make sure the template checker knows the type of the context with which the
  // template of this directive will be rendered
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
};
_GalleryBoxDef.ɵfac = function GalleryBoxDef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryBoxDef)(ɵɵdirectiveInject(TemplateRef));
};
_GalleryBoxDef.ɵdir = ɵɵdefineDirective({
  type: _GalleryBoxDef,
  selectors: [["", "galleryBoxDef", ""]],
  standalone: true
});
var GalleryBoxDef = _GalleryBoxDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryBoxDef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[galleryBoxDef]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var _GalleryComponent = class _GalleryComponent {
  constructor(_gallery) {
    this._gallery = _gallery;
    this.nav = this._gallery.config.nav;
    this.dots = this._gallery.config.dots;
    this.loop = this._gallery.config.loop;
    this.debug = this._gallery.config.debug;
    this.thumb = this._gallery.config.thumb;
    this.counter = this._gallery.config.counter;
    this.dotsSize = this._gallery.config.dotsSize;
    this.autoPlay = this._gallery.config.autoPlay;
    this.thumbWidth = this._gallery.config.thumbWidth;
    this.thumbHeight = this._gallery.config.thumbHeight;
    this.disableThumb = this._gallery.config.disableThumb;
    this.scrollBehavior = this._gallery.config.scrollBehavior;
    this.navScrollBehavior = this._gallery.config.navScrollBehavior;
    this.slidingDisabled = this._gallery.config.slidingDisabled;
    this.thumbSlidingDisabled = this._gallery.config.thumbSlidingDisabled;
    this.mouseSlidingDisabled = this._gallery.config.mouseSlidingDisabled;
    this.thumbMouseSlidingDisabled = this._gallery.config.thumbMouseSlidingDisabled;
    this.playerInterval = this._gallery.config.playerInterval;
    this.slidingDuration = this._gallery.config.slidingDuration;
    this.slidingEase = this._gallery.config.slidingEase;
    this.resizeDebounceTime = this._gallery.config.resizeDebounceTime;
    this.imageSize = this._gallery.config.imageSize;
    this.thumbImageSize = this._gallery.config.thumbImageSize;
    this.dotsPosition = this._gallery.config.dotsPosition;
    this.counterPosition = this._gallery.config.counterPosition;
    this.slidingDirection = this._gallery.config.slidingDirection;
    this.loadingAttr = this._gallery.config.loadingAttr;
    this.loadingStrategy = this._gallery.config.loadingStrategy;
    this.thumbPosition = this._gallery.config.thumbPosition;
    this.thumbView = this._gallery.config.thumbView;
    this.thumbDetached = this._gallery.config.thumbDetached;
    this.thumbAutosize = this._gallery.config.thumbAutosize;
    this.itemAutosize = this._gallery.config.itemAutosize;
    this.autoHeight = this._gallery.config.autoHeight;
    this.destroyRef = true;
    this.skipInitConfig = false;
    this.itemClick = new EventEmitter();
    this.thumbClick = new EventEmitter();
    this.playingChange = new EventEmitter();
    this.indexChange = new EventEmitter();
    this.itemsChange = new EventEmitter();
    this.error = new EventEmitter();
    this._itemClick$ = Subscription.EMPTY;
    this._thumbClick$ = Subscription.EMPTY;
    this._itemChange$ = Subscription.EMPTY;
    this._indexChange$ = Subscription.EMPTY;
    this._playingChange$ = Subscription.EMPTY;
    this._playerListener$ = Subscription.EMPTY;
  }
  getConfig() {
    return {
      nav: this.nav,
      dots: this.dots,
      loop: this.loop,
      debug: this.debug,
      thumb: this.thumb,
      counter: this.counter,
      autoPlay: this.autoPlay,
      dotsSize: this.dotsSize,
      imageSize: this.imageSize,
      thumbImageSize: this.thumbImageSize,
      scrollBehavior: this.scrollBehavior,
      navScrollBehavior: this.navScrollBehavior,
      thumbView: this.thumbView,
      thumbWidth: this.thumbWidth,
      thumbHeight: this.thumbHeight,
      slidingEase: this.slidingEase,
      disableThumb: this.disableThumb,
      dotsPosition: this.dotsPosition,
      loadingAttr: this.loadingAttr,
      thumbDetached: this.thumbDetached,
      thumbPosition: this.thumbPosition,
      playerInterval: this.playerInterval,
      counterPosition: this.counterPosition,
      loadingStrategy: this.loadingStrategy,
      slidingDuration: this.slidingDuration,
      slidingDirection: this.slidingDirection,
      resizeDebounceTime: this.resizeDebounceTime,
      slidingDisabled: this.slidingDisabled,
      thumbSlidingDisabled: this.thumbSlidingDisabled,
      mouseSlidingDisabled: this.mouseSlidingDisabled,
      thumbMouseSlidingDisabled: this.thumbMouseSlidingDisabled,
      thumbAutosize: this.thumbAutosize,
      itemAutosize: this.itemAutosize,
      autoHeight: this.autoHeight
    };
  }
  ngOnChanges(changes) {
    if (this.galleryRef) {
      this.galleryRef.setConfig(this.getConfig());
      if (changes.items && changes.items.currentValue !== changes.items.previousValue) {
        this.load(this.items);
      }
    }
  }
  ngOnInit() {
    if (this.skipInitConfig) {
      this.galleryRef = this._gallery.ref(this.id);
    } else {
      this.galleryRef = this._gallery.ref(this.id, this.getConfig());
    }
    this.load(this.items);
    this._playerListener$ = this.galleryRef.activatePlayer().subscribe();
    if (this.indexChange.observed) {
      this._indexChange$ = this.galleryRef.indexChanged.subscribe((state) => this.indexChange.emit(state));
    }
    if (this.itemsChange.observed) {
      this._itemChange$ = this.galleryRef.itemsChanged.subscribe((state) => this.itemsChange.emit(state));
    }
    if (this.playingChange.observed) {
      this._playingChange$ = this.galleryRef.playingChanged.subscribe((state) => this.playingChange.emit(state));
    }
    if (this.autoPlay) {
      this.play();
    }
  }
  ngAfterContentInit() {
    const templateConfig = {};
    if (this.galleryItemDef) {
      templateConfig.itemTemplate = this.galleryItemDef.templateRef;
    }
    if (this.galleryImageDef) {
      templateConfig.imageTemplate = this.galleryImageDef.templateRef;
    }
    if (this.galleryThumbDef) {
      templateConfig.thumbTemplate = this.galleryThumbDef.templateRef;
    }
    if (this.galleryBoxDef) {
      templateConfig.boxTemplate = this.galleryBoxDef.templateRef;
    }
    if (Object.keys(templateConfig).length) {
      this.galleryRef.setConfig(templateConfig);
    }
  }
  ngOnDestroy() {
    this._itemClick$.unsubscribe();
    this._thumbClick$.unsubscribe();
    this._itemChange$.unsubscribe();
    this._indexChange$.unsubscribe();
    this._playingChange$.unsubscribe();
    this._playerListener$.unsubscribe();
    if (this.destroyRef) {
      this.galleryRef.destroy();
    }
  }
  onItemClick(i) {
    this.itemClick.emit(i);
    this.galleryRef.itemClick.next(i);
  }
  onThumbClick(i) {
    this.galleryRef.set(i);
    this.thumbClick.emit(i);
    this.galleryRef.thumbClick.next(i);
  }
  onError(err) {
    this.error.emit(err);
    this.galleryRef.error.next(err);
  }
  load(items) {
    this.galleryRef.load(items);
  }
  add(item, active) {
    this.galleryRef.add(item, active);
  }
  addImage(data, active) {
    this.galleryRef.addImage(data, active);
  }
  addVideo(data, active) {
    this.galleryRef.addVideo(data, active);
  }
  addIframe(data, active) {
    this.galleryRef.addIframe(data, active);
  }
  addYoutube(data, active) {
    this.galleryRef.addYoutube(data, active);
  }
  remove(i) {
    this.galleryRef.remove(i);
  }
  next(behavior, loop) {
    this.galleryRef.next(behavior, loop);
  }
  prev(behavior, loop) {
    this.galleryRef.prev(behavior, loop);
  }
  set(i, behavior) {
    this.galleryRef.set(i, behavior);
  }
  reset() {
    this.galleryRef.reset();
  }
  play(interval) {
    this.galleryRef.play(interval);
  }
  stop() {
    this.galleryRef.stop();
  }
};
_GalleryComponent.ɵfac = function GalleryComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryComponent)(ɵɵdirectiveInject(Gallery));
};
_GalleryComponent.ɵcmp = ɵɵdefineComponent({
  type: _GalleryComponent,
  selectors: [["gallery"]],
  contentQueries: function GalleryComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, GalleryItemDef, 5);
      ɵɵcontentQuery(dirIndex, GalleryImageDef, 5);
      ɵɵcontentQuery(dirIndex, GalleryThumbDef, 5);
      ɵɵcontentQuery(dirIndex, GalleryBoxDef, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.galleryItemDef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.galleryImageDef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.galleryThumbDef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.galleryBoxDef = _t.first);
    }
  },
  inputs: {
    id: "id",
    items: "items",
    nav: "nav",
    dots: "dots",
    loop: "loop",
    debug: "debug",
    thumb: "thumb",
    counter: "counter",
    dotsSize: "dotsSize",
    autoPlay: "autoPlay",
    thumbWidth: "thumbWidth",
    thumbHeight: "thumbHeight",
    disableThumb: "disableThumb",
    scrollBehavior: "scrollBehavior",
    navScrollBehavior: "navScrollBehavior",
    slidingDisabled: "slidingDisabled",
    thumbSlidingDisabled: "thumbSlidingDisabled",
    mouseSlidingDisabled: "mouseSlidingDisabled",
    thumbMouseSlidingDisabled: "thumbMouseSlidingDisabled",
    playerInterval: "playerInterval",
    slidingDuration: "slidingDuration",
    slidingEase: "slidingEase",
    resizeDebounceTime: "resizeDebounceTime",
    imageSize: "imageSize",
    thumbImageSize: "thumbImageSize",
    dotsPosition: "dotsPosition",
    counterPosition: "counterPosition",
    slidingDirection: "slidingDirection",
    loadingAttr: "loadingAttr",
    loadingStrategy: "loadingStrategy",
    thumbPosition: "thumbPosition",
    thumbView: "thumbView",
    thumbDetached: "thumbDetached",
    thumbAutosize: "thumbAutosize",
    itemAutosize: "itemAutosize",
    autoHeight: "autoHeight",
    destroyRef: "destroyRef",
    skipInitConfig: "skipInitConfig"
  },
  outputs: {
    itemClick: "itemClick",
    thumbClick: "thumbClick",
    playingChange: "playingChange",
    indexChange: "indexChange",
    itemsChange: "itemsChange",
    error: "error"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 3,
  vars: 7,
  consts: [[3, "itemClick", "thumbClick", "error", "galleryId", "state", "config"]],
  template: function GalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "gallery-core", 0);
      ɵɵpipe(1, "async");
      ɵɵpipe(2, "async");
      ɵɵlistener("itemClick", function GalleryComponent_Template_gallery_core_itemClick_0_listener($event) {
        return ctx.onItemClick($event);
      })("thumbClick", function GalleryComponent_Template_gallery_core_thumbClick_0_listener($event) {
        return ctx.onThumbClick($event);
      })("error", function GalleryComponent_Template_gallery_core_error_0_listener($event) {
        return ctx.onError($event);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("galleryId", ctx.id)("state", ɵɵpipeBind1(1, 3, ctx.galleryRef.state))("config", ɵɵpipeBind1(2, 5, ctx.galleryRef.config));
    }
  },
  dependencies: [CommonModule, AsyncPipe, GalleryCoreComponent],
  styles: ['gallery-core[dotsPosition=top] gallery-dots{top:15px}  gallery-core[dotsPosition=bottom] gallery-dots{bottom:15px}  gallery-dots{position:absolute;left:50%;z-index:99;transform:translate(-50%);display:flex;gap:6px}  .g-dot{cursor:pointer;z-index:20}  .g-dot:hover .g-dot-inner{opacity:1}  .g-dot-active .g-dot-inner{opacity:1}  .g-dot-inner{background-color:var(--g-overlay-color);opacity:.4;width:100%;height:100%;border-radius:50%;transition:opacity linear .15s}  gallery-dots,   .g-dot,   .g-dot-inner{display:flex;justify-content:center;align-items:center}  .g-nav-next,   .g-nav-prev{position:absolute;top:50%;display:flex;padding:16px 8px;cursor:pointer;z-index:999;opacity:.6;transition:opacity linear .15s,right linear .15s,left linear .15s}  .g-nav-next:hover,   .g-nav-prev:hover{opacity:1}  .g-nav-next svg,   .g-nav-prev svg{filter:var(--g-nav-drop-shadow);width:28px;height:28px;fill:#fff}  .g-nav-next{right:.5em;transform:translateY(-50%) perspective(1px)}  .g-nav-next:hover{right:.4em}  .g-nav-prev{left:.5em;transform:translateY(-50%) perspective(1px) scale(-1)}  .g-nav-prev:hover{left:.4em}@media only screen and (max-width: 480px){  .g-nav-next{right:.2em}  .g-nav-prev{left:.2em}}  gallery-slider{position:relative;display:flex;align-items:center;justify-content:center}  gallery-slider .g-slider[centralised=true]:before,   gallery-slider .g-slider[centralised=true]:after{content:""}  gallery-slider .g-slider[centralised=true]:before{flex:0 0 var(--slider-centralize-start-size)}  gallery-slider .g-slider[centralised=true]:after{flex:0 0 var(--slider-centralize-end-size)}  .g-slider-content{flex:0 0 auto;display:flex;align-items:center;gap:1px}  gallery-core[slidingDirection=horizontal] gallery-slider .g-slider{overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;flex-direction:row}  gallery-core[slidingDirection=horizontal] gallery-slider .g-slider-content{flex-direction:row;height:100%}  gallery-core[slidingDirection=vertical] gallery-slider .g-slider{overflow-x:hidden;overflow-y:auto;scroll-snap-type:y mandatory;flex-direction:column}  gallery-core[slidingDirection=vertical] gallery-slider .g-slider-content{flex-direction:column;width:100%}  gallery-core[slidingDisabled=true] .g-slider{overflow:hidden!important}  .g-slider{display:flex;align-items:center;width:100%;transition:var(--g-height-transition);scrollbar-width:none;-ms-overflow-style:none}  .g-slider::-webkit-scrollbar{display:none}  .g-slider.g-sliding .g-slider-content,   .g-slider.g-scrolling .g-slider-content{pointer-events:none}  .g-slider gallery-thumb,   .g-slider gallery-item{display:flex;flex-direction:column;flex:0 0 auto;scroll-snap-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}  .g-slider gallery-thumb gallery-image[imageState=success],   .g-slider gallery-item gallery-image[imageState=success]{align-self:center}  gallery-thumbs{max-height:100%;max-width:100%;display:block;z-index:100}  gallery-thumbs .g-slider[centralised=true]:before,   gallery-thumbs .g-slider[centralised=true]:after{content:""}  gallery-thumbs .g-slider[centralised=true]:before{flex:0 0 var(--thumb-centralize-start-size)}  gallery-thumbs .g-slider[centralised=true]:after{flex:0 0 var(--thumb-centralize-end-size)}  gallery-thumbs .g-slider gallery-thumb{background:black;height:var(--thumb-height);width:var(--thumb-width);max-height:var(--thumb-height);max-width:var(--thumb-width)}  gallery-thumbs .g-slider gallery-thumb gallery-image,   gallery-thumbs .g-slider gallery-thumb img{width:100%;height:100%}  gallery-core[disableThumb=true] gallery-thumb{cursor:default}  gallery-core[thumbPosition=top] gallery-thumbs .g-slider,   gallery-core[thumbPosition=bottom] gallery-thumbs .g-slider{top:0;overflow-x:auto;flex-direction:row}  gallery-core[thumbPosition=top] gallery-thumbs .g-slider-content,   gallery-core[thumbPosition=bottom] gallery-thumbs .g-slider-content{flex-direction:row}  gallery-core[thumbPosition=top][thumbAutosize=true] gallery-thumb,   gallery-core[thumbPosition=bottom][thumbAutosize=true] gallery-thumb{width:initial;max-width:unset}  gallery-core[thumbPosition=left] gallery-thumbs .g-slider,   gallery-core[thumbPosition=right] gallery-thumbs .g-slider{left:0;overflow-y:auto;flex-direction:column}  gallery-core[thumbPosition=left] gallery-thumbs .g-slider-content,   gallery-core[thumbPosition=right] gallery-thumbs .g-slider-content{flex-direction:column}  gallery-core[thumbPosition=left][thumbAutosize=true] gallery-thumb,   gallery-core[thumbPosition=right][thumbAutosize=true] gallery-thumb{height:initial;max-height:unset}  gallery-core[thumbSlidingDisabled=true] gallery-thumbs .g-slider{overflow:hidden!important}  gallery-core[thumbPosition=top]{flex-direction:column}  gallery-core[thumbPosition=left]{flex-direction:row}  gallery-core[thumbPosition=right]{flex-direction:row-reverse}  gallery-core[thumbPosition=bottom]{flex-direction:column-reverse}  gallery-thumb.g-active-thumb .g-thumb-loading{background-color:#464646}  .g-thumb-loading{position:relative;overflow:hidden;width:100%;height:100%;background-color:#262626}  .g-thumb-loading:before{content:"";position:absolute;inset:0 0 0 50%;z-index:1;width:500%;margin-left:-250%;animation:_ngcontent-%COMP%_phAnimation .8s linear infinite;background:linear-gradient(to right,rgba(255,255,255,0) 46%,rgba(255,255,255,.35) 50%,rgba(255,255,255,0) 54%) 50% 50%}@keyframes _ngcontent-%COMP%_phAnimation{0%{transform:translate3d(-30%,0,0)}to{transform:translate3d(30%,0,0)}}  gallery-core[counterPosition=top] .g-counter{top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}  gallery-core[counterPosition=bottom] .g-counter{bottom:0;border-top-left-radius:4px;border-top-right-radius:4px}  .g-counter{font-weight:700;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:.6;transition:opacity linear .15s;z-index:50;position:absolute;left:50%;transform:translate(-50%) perspective(1px);font-size:12px;padding:4px 10px;color:var(--g-font-color);background-color:var(--g-overlay-color);box-shadow:var(--g-box-shadow)}  .g-counter:hover{opacity:.8}  gallery[gallerize] gallery-item{cursor:pointer}  gallery-core{gap:1px}  gallery-image img{width:100%!important}  .gallery-image-error svg,   .gallery-thumb-error svg{width:100%;height:100%}  .gallery-thumb-error{width:40px;height:40px}  .gallery-image-error{width:100px;height:100px}  gallery-item,   gallery-thumb{position:relative;display:block;overflow:hidden}  gallery-item h2,   gallery-item h4,   gallery-thumb h2,   gallery-thumb h4{color:coral;margin:0}  gallery-item h2,   gallery-thumb h2{font-size:3.5em;margin-bottom:.3em}  gallery-item h4,   gallery-thumb h4{font-size:1.6em}  gallery-item gallery-image,   gallery-thumb gallery-image{transition:opacity .3s cubic-bezier(.5,0,.5,1)}  gallery-item{--g-item-width: "auto";--g-item-height: 100%;height:var(--g-item-height);width:var(--g-item-width);max-height:var(--g-item-height);max-width:100%;z-index:10}  gallery-item gallery-image{width:100%;height:100%}  gallery-item.g-active-item gallery-image{opacity:1}  gallery-item video,   gallery-item iframe{position:absolute;width:100%;height:100%}  gallery-thumb{align-self:center;cursor:pointer;max-height:100%}  gallery-thumb gallery-image{opacity:.5}  gallery-thumb.g-active-thumb gallery-image{opacity:1}  gallery-image{min-height:100%;display:flex}  .g-image-item{pointer-events:none;max-height:100%;max-width:100%}  .g-template,   .g-image-error-message{position:absolute;z-index:10;inset:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}  .g-loading{position:absolute;transform:translate3d(-50%,-50%,0);left:50%;top:50%;width:80px;height:80px}  gallery-core[imageSize=contain] gallery-item .g-image-item{-o-object-fit:contain;object-fit:contain}  gallery-core[imageSize=cover] gallery-item .g-image-item{-o-object-fit:cover;object-fit:cover}  gallery-core[thumbImageSize=cover] gallery-thumb .g-image-item{-o-object-fit:cover;object-fit:cover}  gallery{position:relative;z-index:1;overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:#000;--g-height-transition: height .4s linear;--g-nav-drop-shadow: drop-shadow(0 0 2px rgba(0, 0, 0, .6));--g-box-shadow: 0 0 3px rgba(0, 0, 0, .6);--g-font-color: #000;--g-overlay-color: #fff}  gallery *{box-sizing:border-box}  gallery,   gallery-core{position:relative;overflow:hidden}  gallery-core{max-height:100%;min-height:100%;height:500px}  gallery-core,   .g-box,   .g-slider{display:flex;width:100%;max-height:100%}  .g-box,   gallery-slider{overflow:hidden;position:relative;display:flex;flex-direction:column;order:1;flex:1}  gallery-core[autoHeight=true][thumbPosition=top],   gallery-core[autoHeight=true][thumbPosition=bottom]{height:-moz-fit-content!important;height:fit-content!important}  gallery-core[autoHeight=true][thumbPosition=top] .g-slider,   gallery-core[autoHeight=true][thumbPosition=bottom] .g-slider{height:100%}  gallery-core[autoHeight=true][thumbPosition=top] gallery-slider,   gallery-core[autoHeight=true][thumbPosition=top] gallery-core,   gallery-core[autoHeight=true][thumbPosition=bottom] gallery-slider,   gallery-core[autoHeight=true][thumbPosition=bottom] gallery-core{height:100%}  gallery-core[autoHeight=true] gallery-item{min-height:100%}  gallery-core[autoHeight=true][slidingDirection=horizontal] gallery-item{height:unset;max-height:unset;min-height:unset}  gallery-core[autoHeight=true][slidingDirection=horizontal] gallery-item gallery-image{height:100%;width:auto}  gallery-core[autoHeight=true][slidingDirection=vertical] gallery-item{height:unset;max-height:unset;min-height:unset}  gallery-core[autoHeight=true][slidingDirection=vertical] gallery-item gallery-image{width:100%;height:auto}  gallery-core[autoHeight=false][slidingDirection=horizontal] gallery-item,   gallery-core[autoHeight=false][slidingDirection=horizontal] .g-slider{height:100%}  gallery-core[itemAutoSize=true][slidingDirection=horizontal] gallery-item gallery-image{height:100%;width:auto}  gallery-core[itemAutoSize=true][slidingDirection=vertical] gallery-item{height:auto}  gallery-core[itemAutoSize=true][slidingDirection=vertical] gallery-item gallery-image{width:100%;height:auto}  gallery-core[debug=true] gallery-slider:after,   gallery-core[debug=true] gallery-slider:before{position:absolute;content:"";background:lime;box-shadow:0 0 5px #0f0;z-index:99999}  gallery-core[debug=true] gallery-slider:before{width:100%;height:1px}  gallery-core[debug=true] gallery-slider:after{height:100%;width:1px}  gallery-core[debug=true] gallery-slider gallery-item{outline:1px solid darkorange}  .g-box-template{position:absolute;z-index:10}'],
  changeDetection: 0
});
var GalleryComponent = _GalleryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryComponent, [{
    type: Component,
    args: [{
      selector: "gallery",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <gallery-core [galleryId]="id"
                  [state]="galleryRef.state | async"
                  [config]="galleryRef.config | async"
                  (itemClick)="onItemClick($event)"
                  (thumbClick)="onThumbClick($event)"
                  (error)="onError($event)"></gallery-core>
  `,
      standalone: true,
      imports: [CommonModule, GalleryCoreComponent],
      styles: ['::ng-deep gallery-core[dotsPosition=top] gallery-dots{top:15px}::ng-deep gallery-core[dotsPosition=bottom] gallery-dots{bottom:15px}::ng-deep gallery-dots{position:absolute;left:50%;z-index:99;transform:translate(-50%);display:flex;gap:6px}::ng-deep .g-dot{cursor:pointer;z-index:20}::ng-deep .g-dot:hover .g-dot-inner{opacity:1}::ng-deep .g-dot-active .g-dot-inner{opacity:1}::ng-deep .g-dot-inner{background-color:var(--g-overlay-color);opacity:.4;width:100%;height:100%;border-radius:50%;transition:opacity linear .15s}::ng-deep gallery-dots,::ng-deep .g-dot,::ng-deep .g-dot-inner{display:flex;justify-content:center;align-items:center}::ng-deep .g-nav-next,::ng-deep .g-nav-prev{position:absolute;top:50%;display:flex;padding:16px 8px;cursor:pointer;z-index:999;opacity:.6;transition:opacity linear .15s,right linear .15s,left linear .15s}::ng-deep .g-nav-next:hover,::ng-deep .g-nav-prev:hover{opacity:1}::ng-deep .g-nav-next svg,::ng-deep .g-nav-prev svg{filter:var(--g-nav-drop-shadow);width:28px;height:28px;fill:#fff}::ng-deep .g-nav-next{right:.5em;transform:translateY(-50%) perspective(1px)}::ng-deep .g-nav-next:hover{right:.4em}::ng-deep .g-nav-prev{left:.5em;transform:translateY(-50%) perspective(1px) scale(-1)}::ng-deep .g-nav-prev:hover{left:.4em}@media only screen and (max-width: 480px){::ng-deep .g-nav-next{right:.2em}::ng-deep .g-nav-prev{left:.2em}}::ng-deep gallery-slider{position:relative;display:flex;align-items:center;justify-content:center}::ng-deep gallery-slider .g-slider[centralised=true]:before,::ng-deep gallery-slider .g-slider[centralised=true]:after{content:""}::ng-deep gallery-slider .g-slider[centralised=true]:before{flex:0 0 var(--slider-centralize-start-size)}::ng-deep gallery-slider .g-slider[centralised=true]:after{flex:0 0 var(--slider-centralize-end-size)}::ng-deep .g-slider-content{flex:0 0 auto;display:flex;align-items:center;gap:1px}::ng-deep gallery-core[slidingDirection=horizontal] gallery-slider .g-slider{overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;flex-direction:row}::ng-deep gallery-core[slidingDirection=horizontal] gallery-slider .g-slider-content{flex-direction:row;height:100%}::ng-deep gallery-core[slidingDirection=vertical] gallery-slider .g-slider{overflow-x:hidden;overflow-y:auto;scroll-snap-type:y mandatory;flex-direction:column}::ng-deep gallery-core[slidingDirection=vertical] gallery-slider .g-slider-content{flex-direction:column;width:100%}::ng-deep gallery-core[slidingDisabled=true] .g-slider{overflow:hidden!important}::ng-deep .g-slider{display:flex;align-items:center;width:100%;transition:var(--g-height-transition);scrollbar-width:none;-ms-overflow-style:none}::ng-deep .g-slider::-webkit-scrollbar{display:none}::ng-deep .g-slider.g-sliding .g-slider-content,::ng-deep .g-slider.g-scrolling .g-slider-content{pointer-events:none}::ng-deep .g-slider gallery-thumb,::ng-deep .g-slider gallery-item{display:flex;flex-direction:column;flex:0 0 auto;scroll-snap-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}::ng-deep .g-slider gallery-thumb gallery-image[imageState=success],::ng-deep .g-slider gallery-item gallery-image[imageState=success]{align-self:center}::ng-deep gallery-thumbs{max-height:100%;max-width:100%;display:block;z-index:100}::ng-deep gallery-thumbs .g-slider[centralised=true]:before,::ng-deep gallery-thumbs .g-slider[centralised=true]:after{content:""}::ng-deep gallery-thumbs .g-slider[centralised=true]:before{flex:0 0 var(--thumb-centralize-start-size)}::ng-deep gallery-thumbs .g-slider[centralised=true]:after{flex:0 0 var(--thumb-centralize-end-size)}::ng-deep gallery-thumbs .g-slider gallery-thumb{background:black;height:var(--thumb-height);width:var(--thumb-width);max-height:var(--thumb-height);max-width:var(--thumb-width)}::ng-deep gallery-thumbs .g-slider gallery-thumb gallery-image,::ng-deep gallery-thumbs .g-slider gallery-thumb img{width:100%;height:100%}::ng-deep gallery-core[disableThumb=true] gallery-thumb{cursor:default}::ng-deep gallery-core[thumbPosition=top] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=bottom] gallery-thumbs .g-slider{top:0;overflow-x:auto;flex-direction:row}::ng-deep gallery-core[thumbPosition=top] gallery-thumbs .g-slider-content,::ng-deep gallery-core[thumbPosition=bottom] gallery-thumbs .g-slider-content{flex-direction:row}::ng-deep gallery-core[thumbPosition=top][thumbAutosize=true] gallery-thumb,::ng-deep gallery-core[thumbPosition=bottom][thumbAutosize=true] gallery-thumb{width:initial;max-width:unset}::ng-deep gallery-core[thumbPosition=left] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=right] gallery-thumbs .g-slider{left:0;overflow-y:auto;flex-direction:column}::ng-deep gallery-core[thumbPosition=left] gallery-thumbs .g-slider-content,::ng-deep gallery-core[thumbPosition=right] gallery-thumbs .g-slider-content{flex-direction:column}::ng-deep gallery-core[thumbPosition=left][thumbAutosize=true] gallery-thumb,::ng-deep gallery-core[thumbPosition=right][thumbAutosize=true] gallery-thumb{height:initial;max-height:unset}::ng-deep gallery-core[thumbSlidingDisabled=true] gallery-thumbs .g-slider{overflow:hidden!important}::ng-deep gallery-core[thumbPosition=top]{flex-direction:column}::ng-deep gallery-core[thumbPosition=left]{flex-direction:row}::ng-deep gallery-core[thumbPosition=right]{flex-direction:row-reverse}::ng-deep gallery-core[thumbPosition=bottom]{flex-direction:column-reverse}::ng-deep gallery-thumb.g-active-thumb .g-thumb-loading{background-color:#464646}::ng-deep .g-thumb-loading{position:relative;overflow:hidden;width:100%;height:100%;background-color:#262626}::ng-deep .g-thumb-loading:before{content:"";position:absolute;inset:0 0 0 50%;z-index:1;width:500%;margin-left:-250%;animation:phAnimation .8s linear infinite;background:linear-gradient(to right,rgba(255,255,255,0) 46%,rgba(255,255,255,.35) 50%,rgba(255,255,255,0) 54%) 50% 50%}@keyframes phAnimation{0%{transform:translate3d(-30%,0,0)}to{transform:translate3d(30%,0,0)}}::ng-deep gallery-core[counterPosition=top] .g-counter{top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}::ng-deep gallery-core[counterPosition=bottom] .g-counter{bottom:0;border-top-left-radius:4px;border-top-right-radius:4px}::ng-deep .g-counter{font-weight:700;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:.6;transition:opacity linear .15s;z-index:50;position:absolute;left:50%;transform:translate(-50%) perspective(1px);font-size:12px;padding:4px 10px;color:var(--g-font-color);background-color:var(--g-overlay-color);box-shadow:var(--g-box-shadow)}::ng-deep .g-counter:hover{opacity:.8}::ng-deep gallery[gallerize] gallery-item{cursor:pointer}::ng-deep gallery-core{gap:1px}::ng-deep gallery-image img{width:100%!important}::ng-deep .gallery-image-error svg,::ng-deep .gallery-thumb-error svg{width:100%;height:100%}::ng-deep .gallery-thumb-error{width:40px;height:40px}::ng-deep .gallery-image-error{width:100px;height:100px}::ng-deep gallery-item,::ng-deep gallery-thumb{position:relative;display:block;overflow:hidden}::ng-deep gallery-item h2,::ng-deep gallery-item h4,::ng-deep gallery-thumb h2,::ng-deep gallery-thumb h4{color:coral;margin:0}::ng-deep gallery-item h2,::ng-deep gallery-thumb h2{font-size:3.5em;margin-bottom:.3em}::ng-deep gallery-item h4,::ng-deep gallery-thumb h4{font-size:1.6em}::ng-deep gallery-item gallery-image,::ng-deep gallery-thumb gallery-image{transition:opacity .3s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-item{--g-item-width: "auto";--g-item-height: 100%;height:var(--g-item-height);width:var(--g-item-width);max-height:var(--g-item-height);max-width:100%;z-index:10}::ng-deep gallery-item gallery-image{width:100%;height:100%}::ng-deep gallery-item.g-active-item gallery-image{opacity:1}::ng-deep gallery-item video,::ng-deep gallery-item iframe{position:absolute;width:100%;height:100%}::ng-deep gallery-thumb{align-self:center;cursor:pointer;max-height:100%}::ng-deep gallery-thumb gallery-image{opacity:.5}::ng-deep gallery-thumb.g-active-thumb gallery-image{opacity:1}::ng-deep gallery-image{min-height:100%;display:flex}::ng-deep .g-image-item{pointer-events:none;max-height:100%;max-width:100%}::ng-deep .g-template,::ng-deep .g-image-error-message{position:absolute;z-index:10;inset:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}::ng-deep .g-loading{position:absolute;transform:translate3d(-50%,-50%,0);left:50%;top:50%;width:80px;height:80px}::ng-deep gallery-core[imageSize=contain] gallery-item .g-image-item{-o-object-fit:contain;object-fit:contain}::ng-deep gallery-core[imageSize=cover] gallery-item .g-image-item{-o-object-fit:cover;object-fit:cover}::ng-deep gallery-core[thumbImageSize=cover] gallery-thumb .g-image-item{-o-object-fit:cover;object-fit:cover}::ng-deep gallery{position:relative;z-index:1;overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:#000;--g-height-transition: height .4s linear;--g-nav-drop-shadow: drop-shadow(0 0 2px rgba(0, 0, 0, .6));--g-box-shadow: 0 0 3px rgba(0, 0, 0, .6);--g-font-color: #000;--g-overlay-color: #fff}::ng-deep gallery *{box-sizing:border-box}::ng-deep gallery,::ng-deep gallery-core{position:relative;overflow:hidden}::ng-deep gallery-core{max-height:100%;min-height:100%;height:500px}::ng-deep gallery-core,::ng-deep .g-box,::ng-deep .g-slider{display:flex;width:100%;max-height:100%}::ng-deep .g-box,::ng-deep gallery-slider{overflow:hidden;position:relative;display:flex;flex-direction:column;order:1;flex:1}::ng-deep gallery-core[autoHeight=true][thumbPosition=top],::ng-deep gallery-core[autoHeight=true][thumbPosition=bottom]{height:-moz-fit-content!important;height:fit-content!important}::ng-deep gallery-core[autoHeight=true][thumbPosition=top] .g-slider,::ng-deep gallery-core[autoHeight=true][thumbPosition=bottom] .g-slider{height:100%}::ng-deep gallery-core[autoHeight=true][thumbPosition=top] gallery-slider,::ng-deep gallery-core[autoHeight=true][thumbPosition=top] gallery-core,::ng-deep gallery-core[autoHeight=true][thumbPosition=bottom] gallery-slider,::ng-deep gallery-core[autoHeight=true][thumbPosition=bottom] gallery-core{height:100%}::ng-deep gallery-core[autoHeight=true] gallery-item{min-height:100%}::ng-deep gallery-core[autoHeight=true][slidingDirection=horizontal] gallery-item{height:unset;max-height:unset;min-height:unset}::ng-deep gallery-core[autoHeight=true][slidingDirection=horizontal] gallery-item gallery-image{height:100%;width:auto}::ng-deep gallery-core[autoHeight=true][slidingDirection=vertical] gallery-item{height:unset;max-height:unset;min-height:unset}::ng-deep gallery-core[autoHeight=true][slidingDirection=vertical] gallery-item gallery-image{width:100%;height:auto}::ng-deep gallery-core[autoHeight=false][slidingDirection=horizontal] gallery-item,::ng-deep gallery-core[autoHeight=false][slidingDirection=horizontal] .g-slider{height:100%}::ng-deep gallery-core[itemAutoSize=true][slidingDirection=horizontal] gallery-item gallery-image{height:100%;width:auto}::ng-deep gallery-core[itemAutoSize=true][slidingDirection=vertical] gallery-item{height:auto}::ng-deep gallery-core[itemAutoSize=true][slidingDirection=vertical] gallery-item gallery-image{width:100%;height:auto}::ng-deep gallery-core[debug=true] gallery-slider:after,::ng-deep gallery-core[debug=true] gallery-slider:before{position:absolute;content:"";background:lime;box-shadow:0 0 5px #0f0;z-index:99999}::ng-deep gallery-core[debug=true] gallery-slider:before{width:100%;height:1px}::ng-deep gallery-core[debug=true] gallery-slider:after{height:100%;width:1px}::ng-deep gallery-core[debug=true] gallery-slider gallery-item{outline:1px solid darkorange}::ng-deep .g-box-template{position:absolute;z-index:10}\n']
    }]
  }], function() {
    return [{
      type: Gallery
    }];
  }, {
    id: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    nav: [{
      type: Input
    }],
    dots: [{
      type: Input
    }],
    loop: [{
      type: Input
    }],
    debug: [{
      type: Input
    }],
    thumb: [{
      type: Input
    }],
    counter: [{
      type: Input
    }],
    dotsSize: [{
      type: Input
    }],
    autoPlay: [{
      type: Input
    }],
    thumbWidth: [{
      type: Input
    }],
    thumbHeight: [{
      type: Input
    }],
    disableThumb: [{
      type: Input
    }],
    scrollBehavior: [{
      type: Input
    }],
    navScrollBehavior: [{
      type: Input
    }],
    slidingDisabled: [{
      type: Input
    }],
    thumbSlidingDisabled: [{
      type: Input
    }],
    mouseSlidingDisabled: [{
      type: Input
    }],
    thumbMouseSlidingDisabled: [{
      type: Input
    }],
    playerInterval: [{
      type: Input
    }],
    slidingDuration: [{
      type: Input
    }],
    slidingEase: [{
      type: Input
    }],
    resizeDebounceTime: [{
      type: Input
    }],
    imageSize: [{
      type: Input
    }],
    thumbImageSize: [{
      type: Input
    }],
    dotsPosition: [{
      type: Input
    }],
    counterPosition: [{
      type: Input
    }],
    slidingDirection: [{
      type: Input
    }],
    loadingAttr: [{
      type: Input
    }],
    loadingStrategy: [{
      type: Input
    }],
    thumbPosition: [{
      type: Input
    }],
    thumbView: [{
      type: Input
    }],
    thumbDetached: [{
      type: Input
    }],
    thumbAutosize: [{
      type: Input
    }],
    itemAutosize: [{
      type: Input
    }],
    autoHeight: [{
      type: Input
    }],
    destroyRef: [{
      type: Input
    }],
    skipInitConfig: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    thumbClick: [{
      type: Output
    }],
    playingChange: [{
      type: Output
    }],
    indexChange: [{
      type: Output
    }],
    itemsChange: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    galleryItemDef: [{
      type: ContentChild,
      args: [GalleryItemDef]
    }],
    galleryImageDef: [{
      type: ContentChild,
      args: [GalleryImageDef]
    }],
    galleryThumbDef: [{
      type: ContentChild,
      args: [GalleryThumbDef]
    }],
    galleryBoxDef: [{
      type: ContentChild,
      args: [GalleryBoxDef]
    }]
  });
})();
var _GalleryModule = class _GalleryModule {
};
_GalleryModule.ɵfac = function GalleryModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryModule)();
};
_GalleryModule.ɵmod = ɵɵdefineNgModule({
  type: _GalleryModule,
  imports: [GalleryComponent, GalleryItemDef, GalleryImageDef, GalleryThumbDef, GalleryBoxDef],
  exports: [GalleryComponent, GalleryItemDef, GalleryImageDef, GalleryThumbDef, GalleryBoxDef]
});
_GalleryModule.ɵinj = ɵɵdefineInjector({
  imports: [GalleryComponent]
});
var GalleryModule = _GalleryModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryModule, [{
    type: NgModule,
    args: [{
      imports: [GalleryComponent, GalleryItemDef, GalleryImageDef, GalleryThumbDef, GalleryBoxDef],
      exports: [GalleryComponent, GalleryItemDef, GalleryImageDef, GalleryThumbDef, GalleryBoxDef]
    }]
  }], null, null);
})();
export {
  CounterPosition,
  DotsPosition,
  GALLERY_CONFIG,
  Gallery,
  GalleryAction,
  GalleryBoxDef,
  GalleryComponent,
  GalleryIframeComponent,
  GalleryImageComponent,
  GalleryImageDef,
  GalleryItemDef,
  GalleryItemTypes,
  GalleryModule,
  GalleryRef,
  GalleryThumbDef,
  GalleryVideoComponent,
  IframeItem,
  ImageItem,
  ImageSize,
  LoadingAttr,
  LoadingStrategy,
  SlidingDirection,
  ThumbnailsPosition,
  ThumbnailsView,
  VideoItem,
  YoutubeItem
};
//# sourceMappingURL=ng-gallery.js.map
