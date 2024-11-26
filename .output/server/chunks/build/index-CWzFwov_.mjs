import { _ as _export_sfc, u as useAuthStore, a as apiFetchGet, s as ElRow, t as ElCol, d as ElImage } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DM--a9B3.mjs';
import { useSSRContext, ref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useTemplateRef, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { P as PaginationResult, S as SearchForm } from './pagination.result-CyiXrpld.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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

const _sfc_main$1 = {
  name: "app-square-image",
  props: ["img"],
  setup() {
    const height = ref(null);
    useTemplateRef("ele");
    return {
      height
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_image = ElImage;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "my-face-item",
    style: { height: $setup.height + "px" },
    ref: "ele"
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_el_image, {
    src: $props.img,
    style: [{ "width": "100%" }, { height: $setup.height + "px" }],
    fit: "cover",
    loading: "eager"
  }, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app-square-image.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {},
  setup() {
    const store = useAuthStore();
    const searchResult = ref(new PaginationResult());
    const searchForm = ref(new SearchForm());
    searchForm.value.limit = 5e3;
    const getList = async (params) => {
      searchForm.value = params;
      searchResult.value = await apiFetchGet("/face", searchForm.value);
    };
    getList(searchForm.value);
    return {
      store,
      searchForm,
      searchResult,
      getList
    };
  }
};
const _imports_0 = publicAssetsURL("/icon/icon-plus.png");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c;
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_nuxt_link = __nuxt_component_0;
  const _component_app_square_image = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>My Faces</h1><p>${ssrInterpolate(((_a = $setup.store.getUser) == null ? void 0 : _a.subscriptionFacesCount) - ((_b = $setup.store.getUser) == null ? void 0 : _b.facesCount))} / ${ssrInterpolate((_c = $setup.store.getUser) == null ? void 0 : _c.subscriptionFacesCount)} faces uploaded</p><div class="app-base-border-radius app-base-margin-top-bottom" style="${ssrRenderStyle({ "width": "100%" })}"></div>`);
  _push(ssrRenderComponent(_component_el_row, { gutter: 15 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_col, {
          span: 6,
          xs: 12
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_nuxt_link, {
                class: "my-faces-item",
                to: { name: "myFaces-create" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_app_square_image, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="myFaces-create-item-btm"${_scopeId4}><img${ssrRenderAttr("src", _imports_0)}${_scopeId4}><span${_scopeId4}>Create new face</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "myFaces-create-item-btm" }, [
                              createVNode("img", { src: _imports_0 }),
                              createVNode("span", null, "Create new face")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_app_square_image, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "myFaces-create-item-btm" }, [
                            createVNode("img", { src: _imports_0 }),
                            createVNode("span", null, "Create new face")
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_nuxt_link, {
                  class: "my-faces-item",
                  to: { name: "myFaces-create" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_app_square_image, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "myFaces-create-item-btm" }, [
                          createVNode("img", { src: _imports_0 }),
                          createVNode("span", null, "Create new face")
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList($setup.searchResult.items, (item) => {
          _push2(ssrRenderComponent(_component_el_col, {
            span: 6,
            xs: 12
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_nuxt_link, {
                  class: "my-faces-item",
                  to: { name: "index", query: { face: item.id } }
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_app_square_image, {
                        img: item.coverImageUrl
                      }, null, _parent4, _scopeId3));
                      _push4(`<p${_scopeId3}>${ssrInterpolate(item.faceName)}</p>`);
                      if (item.generatedCount > 0) {
                        _push4(`<div${_scopeId3}><span${_scopeId3}>${ssrInterpolate(item.generatedCount)} photos generated</span></div>`);
                      } else if (item.trainingStatus === "InProgress") {
                        _push4(`<div${_scopeId3}><span${_scopeId3}>${ssrInterpolate(item.generatedCount)} photos.</span></div>`);
                      } else {
                        _push4(`<div${_scopeId3}><span${_scopeId3}>${ssrInterpolate(item.generatedCount)} photos.</span><span class="app-orange-text"${_scopeId3}>Generate</span></div>`);
                      }
                      _push4(`<p${_scopeId3}>trainingStatus: ${ssrInterpolate(item.trainingStatus)}</p>`);
                    } else {
                      return [
                        createVNode(_component_app_square_image, {
                          img: item.coverImageUrl
                        }, null, 8, ["img"]),
                        createVNode("p", null, toDisplayString(item.faceName), 1),
                        item.generatedCount > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("span", null, toDisplayString(item.generatedCount) + " photos generated", 1)
                        ])) : item.trainingStatus === "InProgress" ? (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode("span", null, toDisplayString(item.generatedCount) + " photos.", 1)
                        ])) : (openBlock(), createBlock("div", { key: 2 }, [
                          createVNode("span", null, toDisplayString(item.generatedCount) + " photos.", 1),
                          createVNode("span", { class: "app-orange-text" }, "Generate")
                        ])),
                        createVNode("p", null, "trainingStatus: " + toDisplayString(item.trainingStatus), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_nuxt_link, {
                    class: "my-faces-item",
                    to: { name: "index", query: { face: item.id } }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_app_square_image, {
                        img: item.coverImageUrl
                      }, null, 8, ["img"]),
                      createVNode("p", null, toDisplayString(item.faceName), 1),
                      item.generatedCount > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("span", null, toDisplayString(item.generatedCount) + " photos generated", 1)
                      ])) : item.trainingStatus === "InProgress" ? (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode("span", null, toDisplayString(item.generatedCount) + " photos.", 1)
                      ])) : (openBlock(), createBlock("div", { key: 2 }, [
                        createVNode("span", null, toDisplayString(item.generatedCount) + " photos.", 1),
                        createVNode("span", { class: "app-orange-text" }, "Generate")
                      ])),
                      createVNode("p", null, "trainingStatus: " + toDisplayString(item.trainingStatus), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode(_component_el_col, {
            span: 6,
            xs: 12
          }, {
            default: withCtx(() => [
              createVNode(_component_nuxt_link, {
                class: "my-faces-item",
                to: { name: "myFaces-create" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_app_square_image, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "myFaces-create-item-btm" }, [
                        createVNode("img", { src: _imports_0 }),
                        createVNode("span", null, "Create new face")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          (openBlock(true), createBlock(Fragment, null, renderList($setup.searchResult.items, (item) => {
            return openBlock(), createBlock(_component_el_col, {
              span: 6,
              xs: 12
            }, {
              default: withCtx(() => [
                createVNode(_component_nuxt_link, {
                  class: "my-faces-item",
                  to: { name: "index", query: { face: item.id } }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_app_square_image, {
                      img: item.coverImageUrl
                    }, null, 8, ["img"]),
                    createVNode("p", null, toDisplayString(item.faceName), 1),
                    item.generatedCount > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("span", null, toDisplayString(item.generatedCount) + " photos generated", 1)
                    ])) : item.trainingStatus === "InProgress" ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("span", null, toDisplayString(item.generatedCount) + " photos.", 1)
                    ])) : (openBlock(), createBlock("div", { key: 2 }, [
                      createVNode("span", null, toDisplayString(item.generatedCount) + " photos.", 1),
                      createVNode("span", { class: "app-orange-text" }, "Generate")
                    ])),
                    createVNode("p", null, "trainingStatus: " + toDisplayString(item.trainingStatus), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              _: 2
            }, 1024);
          }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/myFaces/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CWzFwov_.mjs.map
