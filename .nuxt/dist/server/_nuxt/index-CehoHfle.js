import { u as useAuthStore, a as apiFetchGet, _ as _export_sfc, E as ElTable, b as ElTableColumn } from "../server.mjs";
import { _ as __nuxt_component_3 } from "./el-table-column-DhVRXC8V.js";
/* empty css              */
/* empty css                     */
/* empty css                    */
import { ref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { P as PaginationResult, S as SearchForm } from "./pagination.result-CyiXrpld.js";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
    const getList = async (params) => {
      searchForm.value = params;
      searchResult.value = await apiFetchGet("/faceLog", searchForm.value);
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_table = ElTable;
  const _component_el_table_column = ElTableColumn;
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
              _push3(`<h1${_scopeId2}>Response</h1><pre${_scopeId2}>${ssrInterpolate(JSON.parse(row.responseJson))}</pre>`);
            } else {
              return [
                createVNode("h1", null, "Response"),
                createVNode("pre", null, toDisplayString(JSON.parse(row.responseJson)), 1)
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
          prop: "user.email",
          label: "User"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "face.id",
          label: "Face"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "apiCallType",
          label: "apiCallType"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "status",
          label: "status"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "createdAt",
          label: "createdAt"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_table_column, { type: "expand" }, {
            default: withCtx(({ row }) => [
              createVNode("h1", null, "Response"),
              createVNode("pre", null, toDisplayString(JSON.parse(row.responseJson)), 1)
            ]),
            _: 1
          }),
          createVNode(_component_el_table_column, {
            prop: "id",
            label: "ID",
            width: "60px"
          }),
          createVNode(_component_el_table_column, {
            prop: "user.email",
            label: "User"
          }),
          createVNode(_component_el_table_column, {
            prop: "face.id",
            label: "Face"
          }),
          createVNode(_component_el_table_column, {
            prop: "apiCallType",
            label: "apiCallType"
          }),
          createVNode(_component_el_table_column, {
            prop: "status",
            label: "status"
          }),
          createVNode(_component_el_table_column, {
            prop: "createdAt",
            label: "createdAt"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/face-log/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-CehoHfle.js.map
