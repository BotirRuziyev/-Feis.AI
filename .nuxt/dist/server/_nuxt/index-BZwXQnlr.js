import { u as useAuthStore, a as apiFetchGet, c as useApiFetch, _ as _export_sfc, E as ElTable, b as ElTableColumn, d as ElImage, e as ElButton } from "../server.mjs";
import { _ as __nuxt_component_3 } from "./el-table-column-DhVRXC8V.js";
/* empty css              */
/* empty css                     */
/* empty css                    */
/* empty css                         */
/* empty css                   */
import { ref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { P as PaginationResult, S as SearchForm } from "./pagination.result-CyiXrpld.js";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "@vue/devtools-api";
import "qs";
import "lodash-unified";
import "@vue/shared";
import "@vueuse/core";
import "@popperjs/core";
import "@ctrl/tinycolor";
import "dayjs";
import "dayjs/plugin/localeData.js";
import "dayjs/plugin/customParseFormat.js";
import "dayjs/plugin/advancedFormat.js";
import "dayjs/plugin/weekOfYear.js";
import "dayjs/plugin/weekYear.js";
import "dayjs/plugin/dayOfYear.js";
import "dayjs/plugin/isSameOrAfter.js";
import "dayjs/plugin/isSameOrBefore.js";
import "async-validator";
import "memoize-one";
import "normalize-wheel-es";
import "@floating-ui/dom";
const _sfc_main = {
  setup() {
    const store = useAuthStore();
    const searchResult = ref(new PaginationResult());
    const searchForm = ref(new SearchForm());
    searchForm.value.admin = true;
    const getList = async (params) => {
      searchForm.value = params;
      searchResult.value = await apiFetchGet("/faceImageGeneration", searchForm.value);
    };
    getList(searchForm.value);
    const setExample = async (id) => {
      const { data, error } = await useApiFetch(`/faceImageGeneration/example/${id}`, "PATCH", {});
      if (!error.value) {
        searchResult.value.items.splice(
          searchResult.value.items.findIndex((v) => v.id === data.value.id),
          1,
          { ...data.value }
        );
      }
    };
    return {
      store,
      searchForm,
      searchResult,
      getList,
      setExample
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_table = ElTable;
  const _component_el_table_column = ElTableColumn;
  const _component_el_image = ElImage;
  const _component_el_button = ElButton;
  const _component_app_pagination = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_el_table, {
    data: $setup.searchResult.items,
    border: "",
    style: { "width": "100%", "margin-top": "15px" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_table_column, { type: "expand" }, {
          default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div style="${ssrRenderStyle({ "padding": "5px" })}"${_scopeId2}><div style="${ssrRenderStyle({ "display": "flex", "flex-wrap": "wrap" })}"${_scopeId2}><!--[-->`);
              ssrRenderList(row.images, (img) => {
                _push3(`<div style="${ssrRenderStyle({ "padding": "5px" })}"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_el_image, {
                  style: { "width": "200px", "height": "200px" },
                  src: img,
                  fit: "cover"
                }, null, _parent3, _scopeId2));
                _push3(`</div>`);
              });
              _push3(`<!--]--></div><h1${_scopeId2}>Data</h1><pre${_scopeId2}>${ssrInterpolate(row)}</pre></div>`);
            } else {
              return [
                createVNode("div", { style: { "padding": "5px" } }, [
                  createVNode("div", { style: { "display": "flex", "flex-wrap": "wrap" } }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(row.images, (img) => {
                      return openBlock(), createBlock("div", { style: { "padding": "5px" } }, [
                        createVNode(_component_el_image, {
                          style: { "width": "200px", "height": "200px" },
                          src: img,
                          fit: "cover"
                        }, null, 8, ["src"])
                      ]);
                    }), 256))
                  ]),
                  createVNode("h1", null, "Data"),
                  createVNode("pre", null, toDisplayString(row), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "id",
          label: "ID",
          width: "60px"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "face.id",
          label: "Face"
        }, {
          default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
            var _a, _b, _c, _d, _e, _f;
            if (_push3) {
              if ((_a = row == null ? void 0 : row.face) == null ? void 0 : _a.id) {
                _push3(`<div${_scopeId2}> Face name: ${ssrInterpolate((_b = row == null ? void 0 : row.face) == null ? void 0 : _b.faceName)}<br${_scopeId2}> Face id: ${ssrInterpolate((_c = row == null ? void 0 : row.face) == null ? void 0 : _c.id)}</div>`);
              } else {
                _push3(`<span${_scopeId2}> No Face </span>`);
              }
            } else {
              return [
                ((_d = row == null ? void 0 : row.face) == null ? void 0 : _d.id) ? (openBlock(), createBlock("div", { key: 0 }, [
                  createTextVNode(" Face name: " + toDisplayString((_e = row == null ? void 0 : row.face) == null ? void 0 : _e.faceName), 1),
                  createVNode("br"),
                  createTextVNode(" Face id: " + toDisplayString((_f = row == null ? void 0 : row.face) == null ? void 0 : _f.id), 1)
                ])) : (openBlock(), createBlock("span", { key: 1 }, " No Face "))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "user.email",
          label: "User"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "prompt",
          label: "prompt"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "status",
          label: "triggeredPrompt"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "createdAt",
          label: "createdAt"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "example",
          label: "Example"
        }, {
          default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_button, {
                onClick: ($event) => $setup.setExample(row.id),
                type: "success"
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    if (row.example) {
                      _push4(`<span${_scopeId3}>Yes</span>`);
                    } else {
                      _push4(`<span${_scopeId3}>Set example</span>`);
                    }
                  } else {
                    return [
                      row.example ? (openBlock(), createBlock("span", { key: 0 }, "Yes")) : (openBlock(), createBlock("span", { key: 1 }, "Set example"))
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_button, {
                  onClick: ($event) => $setup.setExample(row.id),
                  type: "success"
                }, {
                  default: withCtx(() => [
                    row.example ? (openBlock(), createBlock("span", { key: 0 }, "Yes")) : (openBlock(), createBlock("span", { key: 1 }, "Set example"))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_table_column, { type: "expand" }, {
            default: withCtx(({ row }) => [
              createVNode("div", { style: { "padding": "5px" } }, [
                createVNode("div", { style: { "display": "flex", "flex-wrap": "wrap" } }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(row.images, (img) => {
                    return openBlock(), createBlock("div", { style: { "padding": "5px" } }, [
                      createVNode(_component_el_image, {
                        style: { "width": "200px", "height": "200px" },
                        src: img,
                        fit: "cover"
                      }, null, 8, ["src"])
                    ]);
                  }), 256))
                ]),
                createVNode("h1", null, "Data"),
                createVNode("pre", null, toDisplayString(row), 1)
              ])
            ]),
            _: 1
          }),
          createVNode(_component_el_table_column, {
            prop: "id",
            label: "ID",
            width: "60px"
          }),
          createVNode(_component_el_table_column, {
            prop: "face.id",
            label: "Face"
          }, {
            default: withCtx(({ row }) => {
              var _a, _b, _c;
              return [
                ((_a = row == null ? void 0 : row.face) == null ? void 0 : _a.id) ? (openBlock(), createBlock("div", { key: 0 }, [
                  createTextVNode(" Face name: " + toDisplayString((_b = row == null ? void 0 : row.face) == null ? void 0 : _b.faceName), 1),
                  createVNode("br"),
                  createTextVNode(" Face id: " + toDisplayString((_c = row == null ? void 0 : row.face) == null ? void 0 : _c.id), 1)
                ])) : (openBlock(), createBlock("span", { key: 1 }, " No Face "))
              ];
            }),
            _: 1
          }),
          createVNode(_component_el_table_column, {
            prop: "user.email",
            label: "User"
          }),
          createVNode(_component_el_table_column, {
            prop: "prompt",
            label: "prompt"
          }),
          createVNode(_component_el_table_column, {
            prop: "status",
            label: "triggeredPrompt"
          }),
          createVNode(_component_el_table_column, {
            prop: "createdAt",
            label: "createdAt"
          }),
          createVNode(_component_el_table_column, {
            prop: "example",
            label: "Example"
          }, {
            default: withCtx(({ row }) => [
              createVNode(_component_el_button, {
                onClick: ($event) => $setup.setExample(row.id),
                type: "success"
              }, {
                default: withCtx(() => [
                  row.example ? (openBlock(), createBlock("span", { key: 0 }, "Yes")) : (openBlock(), createBlock("span", { key: 1 }, "Set example"))
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_app_pagination, {
    params: $setup.searchResult,
    onChange: $setup.getList
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/face-image-generation/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-BZwXQnlr.js.map
