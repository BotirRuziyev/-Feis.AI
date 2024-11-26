import { m as useRoute, u as useAuthStore, a as apiFetchGet, _ as _export_sfc } from "../server.mjs";
import { ref, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
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
  components: {},
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const store = useAuthStore();
    const item = ref(null);
    const getItem = async () => {
      item.value = await apiFetchGet(`/faceImageGeneration/${id}`);
    };
    getItem();
    return {
      id,
      store,
      item,
      getItem
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.item) {
    _push(`<div${ssrRenderAttrs(_attrs)}><h1>myFile id: ${ssrInterpolate($setup.id)}</h1><p>prompt: ${ssrInterpolate($setup.item.prompt)}</p><p>aspectRatio: ${ssrInterpolate($setup.item.aspectRatio)}</p><p>loraScale: ${ssrInterpolate($setup.item.loraScale)}</p><!--[-->`);
    ssrRenderList($setup.item.images, (image) => {
      _push(`<img style="${ssrRenderStyle({ "width": "100%" })}"${ssrRenderAttr("src", image)}>`);
    });
    _push(`<!--]--><pre>${ssrInterpolate($setup.item.images[0])}</pre><pre>${ssrInterpolate($setup.item)}</pre></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/myFiles/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-Bj2nCkih.js.map
