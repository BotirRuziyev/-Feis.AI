import { u as useAuthStore, a as apiFetchGet, _ as _export_sfc } from "../server.mjs";
import { ref, computed, useSSRContext } from "vue";
import { P as PaginationResult, S as SearchForm } from "./pagination.result-CyiXrpld.js";
import { copyText } from "vue3-clipboard";
import "hookable";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
    const store = useAuthStore();
    const searchResult = ref(new PaginationResult());
    const searchForm = ref(new SearchForm());
    const getList = async (params) => {
      searchForm.value = params;
      searchResult.value = await apiFetchGet("/faceImageGeneration/exampleList", searchForm.value);
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
    const copyPrompt = (str) => {
      copyText(str, void 0, (error, event) => {
        if (error) {
          console.log(error);
        } else {
          console.log(str, event);
        }
      });
    };
    return {
      store,
      searchForm,
      searchResult,
      getList,
      images,
      copyPrompt
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Inspiration</h1><div class="app-base-border-radius app-base-margin-top-bottom" style="${ssrRenderStyle({ "width": "100%" })}"></div><div class="masonry"><!--[-->`);
  ssrRenderList($setup.images, (item) => {
    _push(`<div class="mItem"><div class="mItem-body"><img${ssrRenderAttr("src", item.img)} alt=""><div class="mItem-body-info"><a${ssrRenderAttr("href", item.img)} download>Download</a><span>Copy prompt</span></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/inspiration/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-9Xo_fvxB.js.map
