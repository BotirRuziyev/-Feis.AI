import { _ as _export_sfc, m as useRoute, u as useAuthStore, a as apiFetchGet } from './server.mjs';
import { ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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
    const route = useRoute();
    const id = route.params.id;
    const store = useAuthStore();
    const item = ref(null);
    const getItem = async () => {
      item.value = await apiFetchGet(`/face/${id}`);
    };
    getItem();
    return {
      store,
      item,
      getItem
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.item) {
    _push(`<div${ssrRenderAttrs(_attrs)}><h1>myFile id: ${ssrInterpolate($setup.item.id)}</h1><p>trainingStatus: ${ssrInterpolate($setup.item.trainingStatus)}</p><p>prompt: ${ssrInterpolate($setup.item.prompt)}</p><p>aspectRatio: ${ssrInterpolate($setup.item.aspectRatio)}</p><p>loraScale: ${ssrInterpolate($setup.item.loraScale)}</p><img style="${ssrRenderStyle({ "width": "100%" })}"${ssrRenderAttr("src", $setup.item.coverImageUrl)}><pre>${ssrInterpolate($setup.item)}</pre></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/myFaces/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CJI1SWw2.mjs.map
