import { _ as __nuxt_component_0 } from './nuxt-link-DM--a9B3.mjs';
import { _ as _export_sfc, u as useAuthStore, s as ElRow, t as ElCol } from './server.mjs';
import QRCodeVue3 from 'qrcode-vue3';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-jocmKLJ9.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_6 } from './virtual_public-DI5z1i-1.mjs';
import { _ as _imports_0$1, a as _imports_1$1 } from './virtual_public-lfYRWJ5S.mjs';
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

const _sfc_main = {
  components: { QRCodeVue3 },
  setup() {
    const store = useAuthStore();
    return {
      store
    };
  }
};
const _imports_1 = publicAssetsURL("/icon/chevron_left.svg");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_QRCodeVue3 = resolveComponent("QRCodeVue3");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "settings" }, _attrs))}><div class="page-head">`);
  _push(ssrRenderComponent(_component_nuxt_link, { class: "back-btn" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}> HOME`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: ""
          }),
          createTextVNode(" HOME")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h1 class="page-title">Account Settings</h1></div>`);
  _push(ssrRenderComponent(_component_el_row, { gutter: 15 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_col, {
          span: 12,
          xs: 24
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="account-settings-menu"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_nuxt_link, {
                class: "nav-link",
                to: { name: "subscription" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>Your Subscription Plan</span><img${ssrRenderAttr("src", _imports_1)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("span", null, "Your Subscription Plan"),
                      createVNode("img", { src: _imports_1 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_nuxt_link, {
                class: "nav-link",
                to: { name: "notificationsSettings" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>Notifications Setting</span><img${ssrRenderAttr("src", _imports_1)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("span", null, "Notifications Setting"),
                      createVNode("img", { src: _imports_1 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_nuxt_link, {
                class: "nav-link",
                to: { name: "contactSupport" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>Contact support</span><img${ssrRenderAttr("src", _imports_1)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("span", null, "Contact support"),
                      createVNode("img", { src: _imports_1 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_nuxt_link, {
                class: "nav-link",
                to: { name: "privacyPolicy" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>Privacy Policy</span><img${ssrRenderAttr("src", _imports_1)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("span", null, "Privacy Policy"),
                      createVNode("img", { src: _imports_1 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_nuxt_link, {
                class: "nav-link",
                to: { name: "termsAndConditions" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>Terms &amp; Conditions</span><img${ssrRenderAttr("src", _imports_1)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("span", null, "Terms & Conditions"),
                      createVNode("img", { src: _imports_1 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="logout"${_scopeId2}><img${ssrRenderAttr("src", _imports_6)} alt=""${_scopeId2}> Log out </div></div>`);
            } else {
              return [
                createVNode("div", { class: "account-settings-menu" }, [
                  createVNode(_component_nuxt_link, {
                    class: "nav-link",
                    to: { name: "subscription" }
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Your Subscription Plan"),
                      createVNode("img", { src: _imports_1 })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_nuxt_link, {
                    class: "nav-link",
                    to: { name: "notificationsSettings" }
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Notifications Setting"),
                      createVNode("img", { src: _imports_1 })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_nuxt_link, {
                    class: "nav-link",
                    to: { name: "contactSupport" }
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Contact support"),
                      createVNode("img", { src: _imports_1 })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_nuxt_link, {
                    class: "nav-link",
                    to: { name: "privacyPolicy" }
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Privacy Policy"),
                      createVNode("img", { src: _imports_1 })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_nuxt_link, {
                    class: "nav-link",
                    to: { name: "termsAndConditions" }
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Terms & Conditions"),
                      createVNode("img", { src: _imports_1 })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "logout" }, [
                    createVNode("img", {
                      src: _imports_6,
                      alt: ""
                    }),
                    createTextVNode(" Log out ")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_col, {
          span: 12,
          xs: 24
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="account-settings-download-block"${_scopeId2}><div style="${ssrRenderStyle({ "width": "133px", "height": "133px" })}" class="qr-code"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_QRCodeVue3, {
                width: 152,
                height: 152,
                value: "https://scholtz.sk",
                qrOptions: {
                  typeNumber: 0,
                  mode: "Byte",
                  errorCorrectionLevel: "H"
                },
                imageOptions: {
                  hideBackgroundDots: true,
                  imageSize: 0.4,
                  margin: 0
                },
                dotsOptions: {
                  type: "square",
                  roundSize: true,
                  color: "#ffffff"
                },
                backgroundOptions: { color: "transparent" },
                cornersSquareOptions: { type: null, color: "#ffffff" },
                "corners-dot-options": { type: null, color: "#ffffff" }
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="card-body"${_scopeId2}><h1 class="card-title"${_scopeId2}>Download Our App</h1><p class="card-description"${_scopeId2}> Get the full experience by downloading our app. Create,<br${_scopeId2}> customize, and explore features on the go! Scan the QR code<br${_scopeId2}> to download, or use the buttons below. </p><div class="account-settings-download-btns"${_scopeId2}><a href="#" class="download-btn"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)}${_scopeId2}><span${_scopeId2}>Download on Google Play</span></a><a href="#" class="download-btn"${_scopeId2}><img${ssrRenderAttr("src", _imports_1$1)}${_scopeId2}><span${_scopeId2}>Download on the App Store</span></a></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "account-settings-download-block" }, [
                  createVNode("div", {
                    style: { "width": "133px", "height": "133px" },
                    class: "qr-code"
                  }, [
                    createVNode(_component_QRCodeVue3, {
                      width: 152,
                      height: 152,
                      value: "https://scholtz.sk",
                      qrOptions: {
                        typeNumber: 0,
                        mode: "Byte",
                        errorCorrectionLevel: "H"
                      },
                      imageOptions: {
                        hideBackgroundDots: true,
                        imageSize: 0.4,
                        margin: 0
                      },
                      dotsOptions: {
                        type: "square",
                        roundSize: true,
                        color: "#ffffff"
                      },
                      backgroundOptions: { color: "transparent" },
                      cornersSquareOptions: { type: null, color: "#ffffff" },
                      "corners-dot-options": { type: null, color: "#ffffff" }
                    })
                  ]),
                  createVNode("div", { class: "card-body" }, [
                    createVNode("h1", { class: "card-title" }, "Download Our App"),
                    createVNode("p", { class: "card-description" }, [
                      createTextVNode(" Get the full experience by downloading our app. Create,"),
                      createVNode("br"),
                      createTextVNode(" customize, and explore features on the go! Scan the QR code"),
                      createVNode("br"),
                      createTextVNode(" to download, or use the buttons below. ")
                    ]),
                    createVNode("div", { class: "account-settings-download-btns" }, [
                      createVNode("a", {
                        href: "#",
                        class: "download-btn"
                      }, [
                        createVNode("img", { src: _imports_0$1 }),
                        createVNode("span", null, "Download on Google Play")
                      ]),
                      createVNode("a", {
                        href: "#",
                        class: "download-btn"
                      }, [
                        createVNode("img", { src: _imports_1$1 }),
                        createVNode("span", null, "Download on the App Store")
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_col, {
            span: 12,
            xs: 24
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "account-settings-menu" }, [
                createVNode(_component_nuxt_link, {
                  class: "nav-link",
                  to: { name: "subscription" }
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Your Subscription Plan"),
                    createVNode("img", { src: _imports_1 })
                  ]),
                  _: 1
                }),
                createVNode(_component_nuxt_link, {
                  class: "nav-link",
                  to: { name: "notificationsSettings" }
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Notifications Setting"),
                    createVNode("img", { src: _imports_1 })
                  ]),
                  _: 1
                }),
                createVNode(_component_nuxt_link, {
                  class: "nav-link",
                  to: { name: "contactSupport" }
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Contact support"),
                    createVNode("img", { src: _imports_1 })
                  ]),
                  _: 1
                }),
                createVNode(_component_nuxt_link, {
                  class: "nav-link",
                  to: { name: "privacyPolicy" }
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Privacy Policy"),
                    createVNode("img", { src: _imports_1 })
                  ]),
                  _: 1
                }),
                createVNode(_component_nuxt_link, {
                  class: "nav-link",
                  to: { name: "termsAndConditions" }
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Terms & Conditions"),
                    createVNode("img", { src: _imports_1 })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "logout" }, [
                  createVNode("img", {
                    src: _imports_6,
                    alt: ""
                  }),
                  createTextVNode(" Log out ")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_el_col, {
            span: 12,
            xs: 24
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "account-settings-download-block" }, [
                createVNode("div", {
                  style: { "width": "133px", "height": "133px" },
                  class: "qr-code"
                }, [
                  createVNode(_component_QRCodeVue3, {
                    width: 152,
                    height: 152,
                    value: "https://scholtz.sk",
                    qrOptions: {
                      typeNumber: 0,
                      mode: "Byte",
                      errorCorrectionLevel: "H"
                    },
                    imageOptions: {
                      hideBackgroundDots: true,
                      imageSize: 0.4,
                      margin: 0
                    },
                    dotsOptions: {
                      type: "square",
                      roundSize: true,
                      color: "#ffffff"
                    },
                    backgroundOptions: { color: "transparent" },
                    cornersSquareOptions: { type: null, color: "#ffffff" },
                    "corners-dot-options": { type: null, color: "#ffffff" }
                  })
                ]),
                createVNode("div", { class: "card-body" }, [
                  createVNode("h1", { class: "card-title" }, "Download Our App"),
                  createVNode("p", { class: "card-description" }, [
                    createTextVNode(" Get the full experience by downloading our app. Create,"),
                    createVNode("br"),
                    createTextVNode(" customize, and explore features on the go! Scan the QR code"),
                    createVNode("br"),
                    createTextVNode(" to download, or use the buttons below. ")
                  ]),
                  createVNode("div", { class: "account-settings-download-btns" }, [
                    createVNode("a", {
                      href: "#",
                      class: "download-btn"
                    }, [
                      createVNode("img", { src: _imports_0$1 }),
                      createVNode("span", null, "Download on Google Play")
                    ]),
                    createVNode("a", {
                      href: "#",
                      class: "download-btn"
                    }, [
                      createVNode("img", { src: _imports_1$1 }),
                      createVNode("span", null, "Download on the App Store")
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-B3j4ApxF.mjs.map
