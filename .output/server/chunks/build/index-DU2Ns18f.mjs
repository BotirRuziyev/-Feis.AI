import { _ as _export_sfc, u as useAuthStore, a as apiFetchGet, E as ElTable, b as ElTableColumn } from './server.mjs';
import { _ as __nuxt_component_3 } from './el-table-column-DhVRXC8V.mjs';
import { ref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { P as PaginationResult, S as SearchForm } from './pagination.result-CyiXrpld.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
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

const _sfc_main = {
  setup() {
    const store = useAuthStore();
    const searchResult = ref(new PaginationResult());
    const searchForm = ref(new SearchForm());
    const getList = async (params) => {
      searchForm.value = params;
      searchResult.value = await apiFetchGet("/subscription", searchForm.value);
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
              _push3(`<pre${_scopeId2}>${ssrInterpolate(row)}</pre>`);
            } else {
              return [
                createVNode("pre", null, toDisplayString(row), 1)
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
          label: "user"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "faceTrainingLimit",
          label: "faceTrainingLimit"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "generationLimit",
          label: "generationLimit"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "stripePaymentId",
          label: "stripePaymentId"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "applePaymentId",
          label: "applePaymentId"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "subscriptionType",
          label: "subscriptionType"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "startDate",
          label: "startDate"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "endDate",
          label: "endDate"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "createdAt",
          label: "createdAt"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_table_column, { type: "expand" }, {
            default: withCtx(({ row }) => [
              createVNode("pre", null, toDisplayString(row), 1)
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
            label: "user"
          }),
          createVNode(_component_el_table_column, {
            prop: "faceTrainingLimit",
            label: "faceTrainingLimit"
          }),
          createVNode(_component_el_table_column, {
            prop: "generationLimit",
            label: "generationLimit"
          }),
          createVNode(_component_el_table_column, {
            prop: "stripePaymentId",
            label: "stripePaymentId"
          }),
          createVNode(_component_el_table_column, {
            prop: "applePaymentId",
            label: "applePaymentId"
          }),
          createVNode(_component_el_table_column, {
            prop: "subscriptionType",
            label: "subscriptionType"
          }),
          createVNode(_component_el_table_column, {
            prop: "startDate",
            label: "startDate"
          }),
          createVNode(_component_el_table_column, {
            prop: "endDate",
            label: "endDate"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/subscription/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DU2Ns18f.mjs.map
