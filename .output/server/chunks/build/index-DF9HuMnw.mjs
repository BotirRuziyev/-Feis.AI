import { _ as _export_sfc, c as useApiFetch, s as ElRow, t as ElCol, q as ElForm, v as ElFormItem, o as ElInput, e as ElButton, y as vLoading } from './server.mjs';
import { r as required, u as useValidateForm } from './element.utils-D43vSFwO.mjs';
import { ref, reactive, withCtx, mergeProps, createVNode, createTextVNode, withDirectives, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps } from 'vue/server-renderer';
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
    const loading = ref(false);
    const formRules = reactive({
      message: [required]
    });
    const formRuleRef = ref();
    const form = reactive({
      message: null
    });
    const submitForm = async () => {
      if (await useValidateForm(formRuleRef.value)) {
        loading.value = true;
        if (!form.id) {
          const { data, error } = await useApiFetch(`/contactSupport`, "POST", { ...form });
          if (!error.value)
            ;
        }
        loading.value = false;
      }
    };
    return {
      loading,
      formRules,
      form,
      formRuleRef,
      submitForm
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_el_form = ElForm;
  const _component_el_form_item = ElFormItem;
  const _component_el_input = ElInput;
  const _component_el_button = ElButton;
  const _directive_loading = vLoading;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Contact support</h1>`);
  _push(ssrRenderComponent(_component_el_row, { gutter: 15 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_col, {
          span: 12,
          xs: 24
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="contact-support"${_scopeId2}><div${_scopeId2}><a href="tel:++199999999999"${_scopeId2}>Call: +1 999 9999-99-99</a><a href="mailto:mail@mail.com"${_scopeId2}>Email: mail@mail.com</a></div>`);
              _push3(ssrRenderComponent(_component_el_form, mergeProps({
                class: "",
                "label-position": "top",
                ref: "formRuleRef",
                model: $setup.form,
                rules: $setup.formRules
              }, ssrGetDirectiveProps(_ctx, _directive_loading, $setup.loading)), {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_form_item, {
                      prop: "message",
                      label: "Describe your issue"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_el_input, {
                            size: "large",
                            modelValue: $setup.form.message,
                            "onUpdate:modelValue": ($event) => $setup.form.message = $event,
                            type: "textarea",
                            rows: 7,
                            placeholder: "Briefly describe your issue here..."
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_el_input, {
                              size: "large",
                              modelValue: $setup.form.message,
                              "onUpdate:modelValue": ($event) => $setup.form.message = $event,
                              type: "textarea",
                              rows: 7,
                              placeholder: "Briefly describe your issue here..."
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_el_col, {
                      span: 12,
                      xs: 24
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p${_scopeId4}> You will receive an answer via the email you used during registration Send message </p>`);
                          _push5(ssrRenderComponent(_component_el_button, {
                            onClick: $setup.submitForm,
                            type: "primary",
                            size: "large"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Save`);
                              } else {
                                return [
                                  createTextVNode("Save")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode("p", null, " You will receive an answer via the email you used during registration Send message "),
                            createVNode(_component_el_button, {
                              onClick: $setup.submitForm,
                              type: "primary",
                              size: "large"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Save")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_el_form_item, {
                        prop: "message",
                        label: "Describe your issue"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            size: "large",
                            modelValue: $setup.form.message,
                            "onUpdate:modelValue": ($event) => $setup.form.message = $event,
                            type: "textarea",
                            rows: 7,
                            placeholder: "Briefly describe your issue here..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, {
                        span: 12,
                        xs: 24
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, " You will receive an answer via the email you used during registration Send message "),
                          createVNode(_component_el_button, {
                            onClick: $setup.submitForm,
                            type: "primary",
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Save")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "contact-support" }, [
                  createVNode("div", null, [
                    createVNode("a", { href: "tel:++199999999999" }, "Call: +1 999 9999-99-99"),
                    createVNode("a", { href: "mailto:mail@mail.com" }, "Email: mail@mail.com")
                  ]),
                  withDirectives((openBlock(), createBlock(_component_el_form, {
                    class: "",
                    "label-position": "top",
                    ref: "formRuleRef",
                    model: $setup.form,
                    rules: $setup.formRules
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, {
                        prop: "message",
                        label: "Describe your issue"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            size: "large",
                            modelValue: $setup.form.message,
                            "onUpdate:modelValue": ($event) => $setup.form.message = $event,
                            type: "textarea",
                            rows: 7,
                            placeholder: "Briefly describe your issue here..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, {
                        span: 12,
                        xs: 24
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, " You will receive an answer via the email you used during registration Send message "),
                          createVNode(_component_el_button, {
                            onClick: $setup.submitForm,
                            type: "primary",
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Save")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["model", "rules"])), [
                    [_directive_loading, $setup.loading]
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_col, {
            span: 12,
            xs: 24
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "contact-support" }, [
                createVNode("div", null, [
                  createVNode("a", { href: "tel:++199999999999" }, "Call: +1 999 9999-99-99"),
                  createVNode("a", { href: "mailto:mail@mail.com" }, "Email: mail@mail.com")
                ]),
                withDirectives((openBlock(), createBlock(_component_el_form, {
                  class: "",
                  "label-position": "top",
                  ref: "formRuleRef",
                  model: $setup.form,
                  rules: $setup.formRules
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, {
                      prop: "message",
                      label: "Describe your issue"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          size: "large",
                          modelValue: $setup.form.message,
                          "onUpdate:modelValue": ($event) => $setup.form.message = $event,
                          type: "textarea",
                          rows: 7,
                          placeholder: "Briefly describe your issue here..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_col, {
                      span: 12,
                      xs: 24
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, " You will receive an answer via the email you used during registration Send message "),
                        createVNode(_component_el_button, {
                          onClick: $setup.submitForm,
                          type: "primary",
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Save")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model", "rules"])), [
                  [_directive_loading, $setup.loading]
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contactSupport/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DF9HuMnw.mjs.map
