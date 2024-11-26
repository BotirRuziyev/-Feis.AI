import { defineComponent, withCtx, renderSlot, useSSRContext, mergeProps, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useAuthStore, m as useRoute, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DM--a9B3.mjs';
import { _ as _imports_0$1 } from './virtual_public-BI7rQlE6.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_1$1 } from './virtual_public-CRrnQEcK.mjs';
import { _ as _imports_6 } from './virtual_public-DI5z1i-1.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'qs';
import 'lodash-unified';
import '@vue/shared';
import '@vueuse/core';
import '@popperjs/core';
import '@ctrl/tinycolor';
import 'dayjs';
import 'dayjs/plugin/localeData.js';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/advancedFormat.js';
import 'dayjs/plugin/weekOfYear.js';
import 'dayjs/plugin/weekYear.js';
import 'dayjs/plugin/dayOfYear.js';
import 'dayjs/plugin/isSameOrAfter.js';
import 'dayjs/plugin/isSameOrBefore.js';
import 'async-validator';
import 'memoize-one';
import 'normalize-wheel-es';
import '@floating-ui/dom';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-logo" }, _attrs))}> Feis.AI </div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app-logo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {
  name: "dashboard-header",
  components: { AppLogo: __nuxt_component_1$1 },
  setup() {
    const store = useAuthStore();
    return {
      store
    };
  }
};
const _imports_1 = publicAssetsURL("/icon/user-icon.svg");
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_app_logo = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-header" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "index" },
    class: "dashboard-header-logo-block"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_app_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_app_logo)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="dashboard-header-right-block">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "subscription" },
    class: "dashboard-header-subscription"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        _push2(`${ssrInterpolate(((_b = (_a = $setup.store) == null ? void 0 : _a.getUser) == null ? void 0 : _b.generationsCount) || 0)} CREDITS `);
      } else {
        return [
          createTextVNode(toDisplayString(((_d = (_c = $setup.store) == null ? void 0 : _c.getUser) == null ? void 0 : _d.generationsCount) || 0) + " CREDITS ", 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "dashboard-header-upgrade"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`UPGRADE`);
      } else {
        return [
          createTextVNode("UPGRADE")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "notifications" },
    class: "dashboard-header-notifications"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}></span><img${ssrRenderAttr("src", _imports_0$1)}${_scopeId}>`);
      } else {
        return [
          createVNode("span"),
          createVNode("img", { src: _imports_0$1 })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "settings" },
    class: "dashboard-header-settings"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}></span><img${ssrRenderAttr("src", _imports_1)}${_scopeId}>`);
      } else {
        return [
          createVNode("span"),
          createVNode("img", { src: _imports_1 })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/dashboard-header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {
  name: "dashboard-menu",
  setup() {
    const store = useAuthStore();
    return {
      store
    };
  }
};
const _imports_0 = publicAssetsURL("/icon/home.svg");
const _imports_2 = publicAssetsURL("/icon/freeMode.svg");
const _imports_3 = publicAssetsURL("/icon/myFaces.svg");
const _imports_4 = publicAssetsURL("/icon/myFiles.svg");
const _imports_5 = publicAssetsURL("/icon/settings.svg");
const _imports_7 = publicAssetsURL("/icon/orange-generate-aI-art.svg");
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-menu" }, _attrs))}><div class="dashboard-menu-top">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "contactSupport" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)}${_scopeId}> Dashboard `);
      } else {
        return [
          createVNode("img", { src: _imports_0 }),
          createTextVNode(" Dashboard ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "index" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$1)}${_scopeId}> Ai Generator `);
      } else {
        return [
          createVNode("img", { src: _imports_1$1 }),
          createTextVNode(" Ai Generator ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "inspiration" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2)}${_scopeId}> Inspiration `);
      } else {
        return [
          createVNode("img", { src: _imports_2 }),
          createTextVNode(" Inspiration ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "myFaces" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_3)}${_scopeId}> My faces `);
      } else {
        return [
          createVNode("img", { src: _imports_3 }),
          createTextVNode(" My faces ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "myFiles" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_4)}${_scopeId}> My files `);
      } else {
        return [
          createVNode("img", { src: _imports_4 }),
          createTextVNode(" My files ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "settings" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5)}${_scopeId}> Settings `);
      } else {
        return [
          createVNode("img", { src: _imports_5 }),
          createTextVNode(" Settings ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  if ((_a = $setup.store.getUser) == null ? void 0 : _a.isAdmin) {
    _push(`<div class="admin-routes"><p>Admin</p>`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "admin-face" } }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` face `);
        } else {
          return [
            createTextVNode(" face ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "admin-face-image-generation" } }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` image generation `);
        } else {
          return [
            createTextVNode(" image generation ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "admin-subscription" } }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` subscription `);
        } else {
          return [
            createTextVNode(" subscription ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "admin-user" } }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` user `);
        } else {
          return [
            createTextVNode(" user ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "admin-contactSupport" } }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Contact support `);
        } else {
          return [
            createTextVNode(" Contact support ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="dashboard-menu-bottom">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    onClick: ($event) => $setup.store.logout(),
    class: "logout"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6)}${_scopeId}> Log out `);
      } else {
        return [
          createVNode("img", { src: _imports_6 }),
          createTextVNode(" Log out ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "index" },
    class: "orange-generate-aI-art"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_7)}${_scopeId}> Generate AI Art `);
      } else {
        return [
          createVNode("img", { src: _imports_7 }),
          createTextVNode(" Generate AI Art ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/dashboard-menu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  name: "dashboard-footer",
  setup() {
    return {};
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-footer" }, _attrs))}><div><span>\xA9\xA0Feis AI, 2024</span></div><div>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "contactSupport" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact Support`);
      } else {
        return [
          createTextVNode("Contact Support")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "privacyPolicy" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy Policy`);
      } else {
        return [
          createTextVNode("Privacy Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "termsAndConditions" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terms &amp; Conditions`);
      } else {
        return [
          createTextVNode("Terms & Conditions")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="#">Download our app</a></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/dashboard-footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  name: "dashboard",
  components: { DashboardMenu: __nuxt_component_1, DashboardFooter: __nuxt_component_2, DashboardHeader: __nuxt_component_0 },
  setup() {
    return {};
  },
  methods: {
    getWordAfterSlash(input, slashIndex) {
      const parts = input.split("/");
      return parts[slashIndex] || null;
    }
  },
  computed: {
    currentURL() {
      return this.getWordAfterSlash(this.$route.fullPath, 1);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_dashboard_header = __nuxt_component_0;
  const _component_dashboard_menu = __nuxt_component_1;
  const _component_dashboard_footer = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [
      "dashboard",
      $options.currentURL != "" && $options.currentURL != null ? `${$options.currentURL + "-dashboard"} ` : "ai-generator-dashboard"
    ]
  }, _attrs))}><div class="app-container">`);
  _push(ssrRenderComponent(_component_dashboard_header, null, null, _parent));
  _push(`<div class="dashboard-container"><div class="dashboard-menu-block">`);
  _push(ssrRenderComponent(_component_dashboard_menu, null, null, _parent));
  _push(`</div><div class="dashboard-body">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_dashboard_footer, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/dashboard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    useAuthStore();
    const route = useRoute();
    if (((_a = route.query) == null ? void 0 : _a.reload) === "true") {
      setTimeout(() => {
        (void 0).location.href = "/";
      }, 500);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Dashboard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CrODs30A.mjs.map
