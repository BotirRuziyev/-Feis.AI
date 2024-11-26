import { _ as _export_sfc, l as ElPagination } from "../server.mjs";
/* empty css              */
/* empty css                    */
import { S as SearchForm } from "./pagination.result-CyiXrpld.js";
import { toRefs, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  props: {
    params: {
      type: Object,
      required: true,
      default: {
        offset: 0,
        limit: 1,
        total: 0
      }
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const { params } = toRefs(props);
    const currentPage = ref(1);
    currentPage.value = Math.round(params.value.offset / params.value.limit + 1);
    const changeParams = () => {
      params.value.offset = params.value.limit * currentPage.value - params.value.limit;
      emit("change", new SearchForm(params.value.offset, params.value.limit));
    };
    const handleCurrentChange = (val) => {
      changeParams();
    };
    const handleSizeChange = (val) => {
      params.value.limit = val;
      currentPage.value = 1;
      changeParams();
    };
    return {
      currentPage,
      handleSizeChange,
      handleCurrentChange
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_pagination = ElPagination;
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin-top": "15px", "width": "100%", "max-width": "100%" } }, _attrs))}>`);
  _push(ssrRenderComponent(_component_el_pagination, {
    layout: "prev, pager, next, sizes, total",
    "page-sizes": [1, 5, 10, 15, 20, 50, 100],
    "pager-count": 5,
    "page-size": $props.params.limit,
    currentPage: $setup.currentPage,
    "onUpdate:currentPage": ($event) => $setup.currentPage = $event,
    total: $props.params.count,
    onSizeChange: $setup.handleSizeChange,
    onCurrentChange: $setup.handleCurrentChange
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app-pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_3 as _
};
//# sourceMappingURL=el-table-column-DhVRXC8V.js.map
