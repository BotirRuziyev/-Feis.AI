import { _ as _export_sfc, u as useAuthStore, c as useApiFetch, e as ElButton } from './server.mjs';
import { mergeProps, withCtx, openBlock, createBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  setup() {
    const store = useAuthStore();
    const items = [
      {
        paymentLink: "https://buy.stripe.com/test_6oE2c0gTV2CW81OeUU",
        title: "Starter Plan",
        price: "$9.00",
        stripeProductId: "prod_RDvLKWHEurGKof",
        tariffs: [
          {
            id: 1,
            possible: true,
            tarifName: "Generate up to 25 images per week"
          },
          {
            id: 2,
            possible: true,
            tarifName: "Add 1 face per week"
          },
          {
            id: 3,
            possible: true,
            tarifName: "Access Quick Training"
          },
          {
            id: 4,
            possible: true,
            tarifName: "Personal License"
          }
        ]
      },
      {
        paymentLink: "https://buy.stripe.com/test_6oE2c0gTV2CW81OeUU",
        title: "Pro Plan",
        price: "$29.00",
        stripeProductId: "prod_RFchTKZlLsJyqF",
        tariffs: [
          {
            id: 1,
            possible: true,
            tarifName: "Generate up to 25 images per week"
          },
          {
            id: 2,
            possible: true,
            tarifName: "Add 1 face per week"
          },
          {
            id: 3,
            possible: true,
            tarifName: "Access Quick Training"
          },
          {
            id: 4,
            possible: true,
            tarifName: "Personal License"
          }
        ]
      },
      {
        paymentLink: "#",
        isFree: true,
        title: "Free Plan",
        price: "$9.00",
        stripeProductId: "",
        tariffs: [
          {
            id: 1,
            possible: false,
            tarifName: "Generate up to 25 images per week"
          },
          {
            id: 2,
            possible: false,
            tarifName: "Add 1 face per week"
          },
          {
            id: 3,
            possible: false,
            tarifName: "Access Quick Training"
          },
          {
            id: 4,
            possible: false,
            tarifName: "Personal License"
          }
        ]
      }
    ];
    const cancelSubscription = async () => {
      const { data, error } = await useApiFetch(`/subscription/stripe/cancelSubscription`, "POST", {});
      if (!error.value) {
        await store.getUserApi();
      }
    };
    return {
      store,
      cancelSubscription,
      items
    };
  }
};
const _imports_0 = publicAssetsURL("/icon/check_small.svg");
const _imports_1 = publicAssetsURL("/icon/close_small.svg");
const _imports_2 = publicAssetsURL("/img/apple_pay.svg");
const _imports_3 = publicAssetsURL("/img/google_Pay.svg");
const _imports_4 = publicAssetsURL("/img/PayPal.svg");
const _imports_5 = publicAssetsURL("/img/Visa.svg");
const _imports_6 = publicAssetsURL("/img/express.svg");
const _imports_7 = publicAssetsURL("/img/master.svg");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_button = ElButton;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "subscription" }, _attrs))}><div class="page-head"><h1 class="page-title">Choose Your Subscription Plan</h1><p class="page-description">You can upgrade or cancel subsription plan at any time.</p></div><div class="subscription-items"><!--[-->`);
  ssrRenderList($setup.items, (item) => {
    var _a;
    _push(`<div class="subscription-item"><div><div class="subscription-item__head"><div class="card-item__title">${ssrInterpolate(item.title)}</div><div class="card-item__price"><div>${ssrInterpolate(item.price)} <span>/week</span></div>`);
    _push(ssrRenderComponent(_component_el_button, {
      class: "subscribe",
      type: "primary"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (item.isFree) {
            _push2(`<a${_scopeId}> Subscribe </a>`);
          } else {
            _push2(`<a${ssrRenderAttr("href", item.paymentLink)}${_scopeId}> Subscribe </a>`);
          }
        } else {
          return [
            item.isFree ? (openBlock(), createBlock("a", {
              key: 0,
              onClick: $setup.cancelSubscription
            }, " Subscribe ", 8, ["onClick"])) : (openBlock(), createBlock("a", {
              key: 1,
              href: item.paymentLink
            }, " Subscribe ", 8, ["href"]))
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div><div class="tariffs-list"><!--[-->`);
    ssrRenderList(item.tariffs, (tarif) => {
      _push(`<div class="list-item"><div class="icon">`);
      if (tarif.possible) {
        _push(`<span><img${ssrRenderAttr("src", _imports_0)} alt=""></span>`);
      } else {
        _push(`<span><img${ssrRenderAttr("src", _imports_1)} alt=""></span>`);
      }
      _push(`</div><p class="tarif-name">${ssrInterpolate(tarif.tarifName)}</p></div>`);
    });
    _push(`<!--]--></div></div>`);
    _push(ssrRenderComponent(_component_el_button, {
      type: "primary",
      class: ["subscribe-btn", item.isFree ? "" : "active"]
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (item.isFree) {
            _push2(`<a${_scopeId}> Subscribe </a>`);
          } else {
            _push2(`<a${ssrRenderAttr("href", item.paymentLink)}${_scopeId}> Subscribe </a>`);
          }
        } else {
          return [
            item.isFree ? (openBlock(), createBlock("a", {
              key: 0,
              onClick: $setup.cancelSubscription
            }, " Subscribe ", 8, ["onClick"])) : (openBlock(), createBlock("a", {
              key: 1,
              href: item.paymentLink
            }, " Subscribe ", 8, ["href"]))
          ];
        }
      }),
      _: 2
    }, _parent));
    if (((_a = $setup.store.getUser) == null ? void 0 : _a.stripeProductId) === item.stripeProductId) {
      _push(ssrRenderComponent(_component_el_button, {
        type: "danger",
        onClick: $setup.cancelSubscription
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cancel or to free `);
          } else {
            return [
              createTextVNode(" Cancel or to free ")
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="subscription-payments__methods"><div class="title">Accepted payments methods</div><div class="subscription-payments-methods-list"><button class="list-item"><img${ssrRenderAttr("src", _imports_2)} alt=""></button><button class="list-item"><img${ssrRenderAttr("src", _imports_3)} alt=""></button><button class="list-item"><img${ssrRenderAttr("src", _imports_3)} alt=""></button><button class="list-item"><img${ssrRenderAttr("src", _imports_4)} alt=""></button><button class="list-item"><img${ssrRenderAttr("src", _imports_5)} alt=""></button><button class="list-item"><img${ssrRenderAttr("src", _imports_6)} alt=""></button><button class="list-item"><img${ssrRenderAttr("src", _imports_7)} alt=""></button></div></div><p class="page-mobile-description">You can upgrade or cancel subsription plan at any time.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/subscription/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-B5eRYkzO.mjs.map
