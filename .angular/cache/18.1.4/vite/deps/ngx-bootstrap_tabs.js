import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-RI2AEFVG.js";
import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  Output,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  setClassMetadata,
  ɵɵadvance,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-WYYIVEMK.js";
import "./chunk-YTR4LZ5T.js";

// node_modules/ngx-bootstrap/tabs/fesm2022/ngx-bootstrap-tabs.mjs
var _c0 = ["*"];
var _c1 = (a0) => ["nav-item", a0];
function TabsetComponent_li_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 7);
    ɵɵlistener("click", function TabsetComponent_li_1_span_4_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      const tabz_r4 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      $event.preventDefault();
      return ɵɵresetView(ctx_r2.removeTab(tabz_r4));
    });
    ɵɵtext(1, " ❌");
    ɵɵelementEnd();
  }
}
function TabsetComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 3);
    ɵɵlistener("keydown", function TabsetComponent_li_1_Template_li_keydown_0_listener($event) {
      const i_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.keyNavActions($event, i_r2));
    });
    ɵɵelementStart(1, "a", 4);
    ɵɵlistener("click", function TabsetComponent_li_1_Template_a_click_1_listener() {
      const tabz_r4 = ɵɵrestoreView(_r1).$implicit;
      return ɵɵresetView(tabz_r4.active = true);
    });
    ɵɵelementStart(2, "span", 5);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, TabsetComponent_li_1_span_4_Template, 2, 0, "span", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const tabz_r4 = ctx.$implicit;
    ɵɵclassProp("active", tabz_r4.active)("disabled", tabz_r4.disabled);
    ɵɵproperty("ngClass", ɵɵpureFunction1(15, _c1, tabz_r4.customClass || ""));
    ɵɵadvance();
    ɵɵclassProp("active", tabz_r4.active)("disabled", tabz_r4.disabled);
    ɵɵattribute("aria-controls", tabz_r4.id ? tabz_r4.id : "")("aria-selected", !!tabz_r4.active)("id", tabz_r4.id ? tabz_r4.id + "-link" : "");
    ɵɵadvance();
    ɵɵproperty("ngTransclude", tabz_r4.headingRef);
    ɵɵadvance();
    ɵɵtextInterpolate(tabz_r4.heading);
    ɵɵadvance();
    ɵɵproperty("ngIf", tabz_r4.removable);
  }
}
var _NgTranscludeDirective = class _NgTranscludeDirective {
  set ngTransclude(templateRef) {
    this._ngTransclude = templateRef;
    if (templateRef) {
      this.viewRef.createEmbeddedView(templateRef);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get ngTransclude() {
    return this._ngTransclude;
  }
  constructor(viewRef) {
    this.viewRef = viewRef;
  }
};
_NgTranscludeDirective.ɵfac = function NgTranscludeDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgTranscludeDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
_NgTranscludeDirective.ɵdir = ɵɵdefineDirective({
  type: _NgTranscludeDirective,
  selectors: [["", "ngTransclude", ""]],
  inputs: {
    ngTransclude: "ngTransclude"
  }
});
var NgTranscludeDirective = _NgTranscludeDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgTranscludeDirective, [{
    type: Directive,
    args: [{
      selector: "[ngTransclude]"
    }]
  }], () => [{
    type: ViewContainerRef
  }], {
    ngTransclude: [{
      type: Input
    }]
  });
})();
var _TabsetConfig = class _TabsetConfig {
  constructor() {
    this.type = "tabs";
    this.isKeysAllowed = true;
    this.ariaLabel = "Tabs";
  }
};
_TabsetConfig.ɵfac = function TabsetConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsetConfig)();
};
_TabsetConfig.ɵprov = ɵɵdefineInjectable({
  token: _TabsetConfig,
  factory: _TabsetConfig.ɵfac,
  providedIn: "root"
});
var TabsetConfig = _TabsetConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsetConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _TabsetComponent = class _TabsetComponent {
  /** if true tabs will be placed vertically */
  get vertical() {
    return this._vertical;
  }
  set vertical(value) {
    this._vertical = value;
    this.setClassMap();
  }
  /** if true tabs fill the container and have a consistent width */
  get justified() {
    return this._justified;
  }
  set justified(value) {
    this._justified = value;
    this.setClassMap();
  }
  /** navigation context class: 'tabs' or 'pills' */
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value;
    this.setClassMap();
  }
  get isKeysAllowed() {
    return this._isKeysAllowed;
  }
  set isKeysAllowed(value) {
    this._isKeysAllowed = value;
  }
  constructor(config, renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.clazz = true;
    this.tabs = [];
    this.classMap = {};
    this.ariaLabel = "Tabs";
    this.isDestroyed = false;
    this._vertical = false;
    this._justified = false;
    this._type = "tabs";
    this._isKeysAllowed = true;
    Object.assign(this, config);
  }
  ngOnDestroy() {
    this.isDestroyed = true;
  }
  addTab(tab) {
    this.tabs.push(tab);
    tab.active = this.tabs.length === 1 && !tab.active;
  }
  removeTab(tab, options = {
    reselect: true,
    emit: true
  }) {
    const index = this.tabs.indexOf(tab);
    if (index === -1 || this.isDestroyed) {
      return;
    }
    if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
      const newActiveIndex = this.getClosestTabIndex(index);
      this.tabs[newActiveIndex].active = true;
    }
    if (options.emit) {
      tab.removed.emit(tab);
    }
    this.tabs.splice(index, 1);
    if (tab.elementRef.nativeElement.parentNode) {
      this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
    }
  }
  keyNavActions(event, index) {
    if (!this.isKeysAllowed) {
      return;
    }
    const list = Array.from(this.elementRef.nativeElement.querySelectorAll(".nav-link"));
    if (event.keyCode === 13 || event.key === "Enter" || event.keyCode === 32 || event.key === "Space") {
      event.preventDefault();
      const currentTab = list[index % list.length];
      currentTab.click();
      return;
    }
    if (event.keyCode === 39 || event.key === "RightArrow") {
      let nextTab;
      let shift = 1;
      do {
        nextTab = list[(index + shift) % list.length];
        shift++;
      } while (nextTab.classList.contains("disabled"));
      nextTab.focus();
      return;
    }
    if (event.keyCode === 37 || event.key === "LeftArrow") {
      let previousTab;
      let shift = 1;
      let i = index;
      do {
        if (i - shift < 0) {
          i = list.length - 1;
          previousTab = list[i];
          shift = 0;
        } else {
          previousTab = list[i - shift];
        }
        shift++;
      } while (previousTab.classList.contains("disabled"));
      previousTab.focus();
      return;
    }
    if (event.keyCode === 36 || event.key === "Home") {
      event.preventDefault();
      let firstTab;
      let shift = 0;
      do {
        firstTab = list[shift % list.length];
        shift++;
      } while (firstTab.classList.contains("disabled"));
      firstTab.focus();
      return;
    }
    if (event.keyCode === 35 || event.key === "End") {
      event.preventDefault();
      let lastTab;
      let shift = 1;
      let i = index;
      do {
        if (i - shift < 0) {
          i = list.length - 1;
          lastTab = list[i];
          shift = 0;
        } else {
          lastTab = list[i - shift];
        }
        shift++;
      } while (lastTab.classList.contains("disabled"));
      lastTab.focus();
      return;
    }
    if (event.keyCode === 46 || event.key === "Delete") {
      if (this.tabs[index].removable) {
        this.removeTab(this.tabs[index]);
        if (list[index + 1]) {
          list[(index + 1) % list.length].focus();
          return;
        }
        if (list[list.length - 1]) {
          list[0].focus();
        }
      }
    }
  }
  getClosestTabIndex(index) {
    const tabsLength = this.tabs.length;
    if (!tabsLength) {
      return -1;
    }
    for (let step = 1; step <= tabsLength; step += 1) {
      const prevIndex = index - step;
      const nextIndex = index + step;
      if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
        return prevIndex;
      }
      if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
        return nextIndex;
      }
    }
    return -1;
  }
  hasAvailableTabs(index) {
    const tabsLength = this.tabs.length;
    if (!tabsLength) {
      return false;
    }
    for (let i = 0; i < tabsLength; i += 1) {
      if (!this.tabs[i].disabled && i !== index) {
        return true;
      }
    }
    return false;
  }
  setClassMap() {
    this.classMap = {
      "nav-stacked": this.vertical,
      "flex-column": this.vertical,
      "nav-justified": this.justified,
      [`nav-${this.type}`]: true
    };
  }
};
_TabsetComponent.ɵfac = function TabsetComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsetComponent)(ɵɵdirectiveInject(TabsetConfig), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_TabsetComponent.ɵcmp = ɵɵdefineComponent({
  type: _TabsetComponent,
  selectors: [["tabset"]],
  hostVars: 2,
  hostBindings: function TabsetComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("tab-container", ctx.clazz);
    }
  },
  inputs: {
    vertical: "vertical",
    justified: "justified",
    type: "type"
  },
  ngContentSelectors: _c0,
  decls: 4,
  vars: 3,
  consts: [["role", "tablist", 1, "nav", 3, "click", "ngClass"], [3, "ngClass", "active", "disabled", "keydown", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "keydown", "ngClass"], ["href", "javascript:void(0);", "role", "tab", 1, "nav-link", 3, "click"], [3, "ngTransclude"], ["class", "bs-remove-tab", 3, "click", 4, "ngIf"], [1, "bs-remove-tab", 3, "click"]],
  template: function TabsetComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "ul", 0);
      ɵɵlistener("click", function TabsetComponent_Template_ul_click_0_listener($event) {
        return $event.preventDefault();
      });
      ɵɵtemplate(1, TabsetComponent_li_1_Template, 5, 17, "li", 1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 2);
      ɵɵprojection(3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.classMap);
      ɵɵattribute("aria-label", ctx.ariaLabel);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.tabs);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTranscludeDirective],
  styles: ["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"]
});
var TabsetComponent = _TabsetComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsetComponent, [{
    type: Component,
    args: [{
      selector: "tabset",
      template: `<ul class="nav" [ngClass]="classMap"
    (click)="$event.preventDefault()"
    [attr.aria-label]="ariaLabel"
    role="tablist">
  <li *ngFor="let tabz of tabs; let i = index" [ngClass]="['nav-item', tabz.customClass || '']"
      [class.active]="tabz.active" [class.disabled]="tabz.disabled" (keydown)="keyNavActions($event, i)">
    <a href="javascript:void(0);" class="nav-link" role="tab"
       [attr.aria-controls]="tabz.id ? tabz.id : ''"
       [attr.aria-selected]="!!tabz.active"
       [attr.id]="tabz.id ? tabz.id + '-link' : ''"
       [class.active]="tabz.active" [class.disabled]="tabz.disabled"
       (click)="tabz.active = true">
      <span [ngTransclude]="tabz.headingRef">{{ tabz.heading }}</span>
      <span *ngIf="tabz.removable" (click)="$event.preventDefault(); removeTab(tabz);" class="bs-remove-tab"> &#10060;</span>
    </a>
  </li>
</ul>
<div class="tab-content">
  <ng-content></ng-content>
</div>
`,
      styles: [":host .nav-tabs .nav-item.disabled a.disabled{cursor:default}\n"]
    }]
  }], () => [{
    type: TabsetConfig
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    vertical: [{
      type: Input
    }],
    justified: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    clazz: [{
      type: HostBinding,
      args: ["class.tab-container"]
    }]
  });
})();
var _TabDirective = class _TabDirective {
  /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
  get customClass() {
    return this._customClass;
  }
  set customClass(customClass) {
    if (this.customClass) {
      this.customClass.split(" ").forEach((cssClass) => {
        this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
      });
    }
    this._customClass = customClass ? customClass.trim() : "";
    if (this.customClass) {
      this.customClass.split(" ").forEach((cssClass) => {
        this.renderer.addClass(this.elementRef.nativeElement, cssClass);
      });
    }
  }
  /** tab active state toggle */
  get active() {
    return this._active;
  }
  set active(active) {
    if (this._active === active) {
      return;
    }
    if (this.disabled && active || !active) {
      if (this._active && !active) {
        this.deselect.emit(this);
        this._active = active;
      }
      return;
    }
    this._active = active;
    this.selectTab.emit(this);
    this.tabset.tabs.forEach((tab) => {
      if (tab !== this) {
        tab.active = false;
      }
    });
  }
  get ariaLabelledby() {
    return this.id ? `${this.id}-link` : "";
  }
  constructor(tabset, elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.disabled = false;
    this.removable = false;
    this.selectTab = new EventEmitter();
    this.deselect = new EventEmitter();
    this.removed = new EventEmitter();
    this.addClass = true;
    this.role = "tabpanel";
    this._active = false;
    this._customClass = "";
    this.tabset = tabset;
    this.tabset.addTab(this);
  }
  ngOnInit() {
    this.removable = !!this.removable;
  }
  ngOnDestroy() {
    this.tabset.removeTab(this, {
      reselect: false,
      emit: false
    });
  }
};
_TabDirective.ɵfac = function TabDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabDirective)(ɵɵdirectiveInject(TabsetComponent), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_TabDirective.ɵdir = ɵɵdefineDirective({
  type: _TabDirective,
  selectors: [["tab"], ["", "tab", ""]],
  hostVars: 7,
  hostBindings: function TabDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.id)("role", ctx.role)("aria-labelledby", ctx.ariaLabelledby);
      ɵɵclassProp("active", ctx.active)("tab-pane", ctx.addClass);
    }
  },
  inputs: {
    heading: "heading",
    id: "id",
    disabled: "disabled",
    removable: "removable",
    customClass: "customClass",
    active: "active"
  },
  outputs: {
    selectTab: "selectTab",
    deselect: "deselect",
    removed: "removed"
  },
  exportAs: ["tab"]
});
var TabDirective = _TabDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabDirective, [{
    type: Directive,
    args: [{
      selector: "tab, [tab]",
      exportAs: "tab"
    }]
  }], () => [{
    type: TabsetComponent
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    heading: [{
      type: Input
    }],
    id: [{
      type: HostBinding,
      args: ["attr.id"]
    }, {
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    removable: [{
      type: Input
    }],
    customClass: [{
      type: Input
    }],
    active: [{
      type: HostBinding,
      args: ["class.active"]
    }, {
      type: Input
    }],
    selectTab: [{
      type: Output
    }],
    deselect: [{
      type: Output
    }],
    removed: [{
      type: Output
    }],
    addClass: [{
      type: HostBinding,
      args: ["class.tab-pane"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    ariaLabelledby: [{
      type: HostBinding,
      args: ["attr.aria-labelledby"]
    }]
  });
})();
var _TabHeadingDirective = class _TabHeadingDirective {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(templateRef, tab) {
    tab.headingRef = templateRef;
  }
};
_TabHeadingDirective.ɵfac = function TabHeadingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabHeadingDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(TabDirective));
};
_TabHeadingDirective.ɵdir = ɵɵdefineDirective({
  type: _TabHeadingDirective,
  selectors: [["", "tabHeading", ""]]
});
var TabHeadingDirective = _TabHeadingDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabHeadingDirective, [{
    type: Directive,
    args: [{
      selector: "[tabHeading]"
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: TabDirective
  }], null);
})();
var _TabsModule = class _TabsModule {
  static forRoot() {
    return {
      ngModule: _TabsModule,
      providers: []
    };
  }
};
_TabsModule.ɵfac = function TabsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsModule)();
};
_TabsModule.ɵmod = ɵɵdefineNgModule({
  type: _TabsModule,
  declarations: [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective],
  imports: [CommonModule],
  exports: [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective]
});
_TabsModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var TabsModule = _TabsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective],
      exports: [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective]
    }]
  }], null, null);
})();
export {
  NgTranscludeDirective,
  TabDirective,
  TabHeadingDirective,
  TabsModule,
  TabsetComponent,
  TabsetConfig
};
//# sourceMappingURL=ngx-bootstrap_tabs.js.map
