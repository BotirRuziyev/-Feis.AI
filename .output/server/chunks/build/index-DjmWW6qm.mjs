import { defineComponent, createElementBlock, ref, provide, computed, useSSRContext } from 'vue';
import { _ as _export_sfc, u as useAuthStore, a as apiFetchGet } from './server.mjs';
import { P as PaginationResult, S as SearchForm } from './pagination.result-CyiXrpld.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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

defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = {
  components: {},
  async setup() {
    const loading = ref(false);
    const store = useAuthStore();
    const searchResult = ref(new PaginationResult());
    const searchForm = ref(new SearchForm());
    const getList = async (params) => {
      searchForm.value = params;
      searchResult.value = await apiFetchGet("/faceImageGeneration", searchForm.value);
    };
    getList(searchForm.value);
    const images = computed(() => {
      const res = [];
      searchResult.value.items.forEach((v) => {
        var _a, _b, _c;
        const face = {
          id: ((_a = v == null ? void 0 : v.face) == null ? void 0 : _a.id) || null,
          faceName: ((_b = v == null ? void 0 : v.face) == null ? void 0 : _b.faceName) || null,
          coverImageUrl: ((_c = v == null ? void 0 : v.face) == null ? void 0 : _c.coverImageUrl) || null
        };
        v.images.forEach((img) => {
          const obj = {
            id: v.id,
            aspectRatio: v.aspectRatio,
            prompt: v.prompt,
            img,
            face
          };
          res.push(obj);
        });
      });
      return res;
    });
    return {
      loading,
      store,
      searchForm,
      searchResult,
      getList,
      images
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Files page</h1><div class="app-base-border-radius app-base-margin-top-bottom" style="${ssrRenderStyle({ "width": "100%" })}"></div>`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/myFiles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DjmWW6qm.mjs.map
