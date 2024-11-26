import { _ as _export_sfc, u as useAuthStore, a as apiFetchGet } from './server.mjs';
import { ref, useSSRContext } from 'vue';
import { P as PaginationResult, S as SearchForm } from './pagination.result-CyiXrpld.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  components: {},
  setup() {
    const store = useAuthStore();
    const searchResult = ref(new PaginationResult());
    const searchForm = ref(new SearchForm());
    searchForm.value.limit = 500;
    const getList = async (params) => {
      searchForm.value = params;
      searchResult.value = await apiFetchGet("/notice/app", searchForm.value);
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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Notifications</h1><div class="app-base-border-radius app-base-margin-top-bottom" style="${ssrRenderStyle({ "width": "100%" })}"></div><!--[-->`);
  ssrRenderList($setup.searchResult.items, (item) => {
    var _a, _b;
    _push(`<div class="notification-item"><h4>${ssrInterpolate((_a = item == null ? void 0 : item.data) == null ? void 0 : _a.title)}</h4><h4>${ssrInterpolate(item == null ? void 0 : item.createdAt)}</h4><h4>${ssrInterpolate((_b = item == null ? void 0 : item.data) == null ? void 0 : _b.message)}</h4><pre>${ssrInterpolate(item.data)}</pre></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/notifications/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BXQYJLoX.mjs.map
