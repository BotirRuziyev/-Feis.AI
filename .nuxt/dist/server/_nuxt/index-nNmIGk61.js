import { defineComponent, inject, reactive, ref, h, provide, computed, watch, cloneVNode, Fragment, mergeProps, useSSRContext, withCtx, createVNode, openBlock, createBlock, renderList, toDisplayString, createTextVNode } from "vue";
import { _ as __nuxt_component_0 } from "./nuxt-link-DM--a9B3.js";
import { k as useRuntimeConfig, _ as _export_sfc, m as useRoute, e as ElButton } from "../server.mjs";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1 } from "./virtual_public-lfYRWJ5S.js";
/* empty css              */
/* empty css                   */
import "hookable";
import "ufo";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "cookie-es";
import "ohash";
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
/**
 * Vue 3 Carousel 0.4.0
 * (c) 2024
 * @license MIT
 */
const defaultConfig = {
  itemsToShow: 1,
  itemsToScroll: 1,
  modelValue: 0,
  transition: 300,
  autoplay: 0,
  snapAlign: "center",
  wrapAround: false,
  throttle: 16,
  pauseAutoplayOnHover: false,
  mouseDrag: true,
  touchDrag: true,
  dir: "ltr",
  breakpoints: void 0,
  i18n: {
    ariaNextSlide: "Navigate to next slide",
    ariaPreviousSlide: "Navigate to previous slide",
    ariaNavigateToSlide: "Navigate to slide {slideNumber}",
    ariaGallery: "Gallery",
    itemXofY: "Item {currentSlide} of {slidesCount}",
    iconArrowUp: "Arrow pointing upwards",
    iconArrowDown: "Arrow pointing downwards",
    iconArrowRight: "Arrow pointing to the right",
    iconArrowLeft: "Arrow pointing to the left"
  }
};
const carouselProps = {
  // count of items to showed per view
  itemsToShow: {
    default: defaultConfig.itemsToShow,
    type: Number
  },
  // count of items to be scrolled
  itemsToScroll: {
    default: defaultConfig.itemsToScroll,
    type: Number
  },
  // control infinite scrolling mode
  wrapAround: {
    default: defaultConfig.wrapAround,
    type: Boolean
  },
  // control max drag
  throttle: {
    default: defaultConfig.throttle,
    type: Number
  },
  // control snap position alignment
  snapAlign: {
    default: defaultConfig.snapAlign,
    validator(value) {
      return ["start", "end", "center", "center-even", "center-odd"].includes(value);
    }
  },
  // sliding transition time in ms
  transition: {
    default: defaultConfig.transition,
    type: Number
  },
  // an object to store breakpoints
  breakpoints: {
    default: defaultConfig.breakpoints,
    type: Object
  },
  // time to auto advance slides in ms
  autoplay: {
    default: defaultConfig.autoplay,
    type: Number
  },
  // pause autoplay when mouse hover over the carousel
  pauseAutoplayOnHover: {
    default: defaultConfig.pauseAutoplayOnHover,
    type: Boolean
  },
  // slide number number of initial slide
  modelValue: {
    default: void 0,
    type: Number
  },
  // toggle mouse dragging.
  mouseDrag: {
    default: defaultConfig.mouseDrag,
    type: Boolean
  },
  // toggle mouse dragging.
  touchDrag: {
    default: defaultConfig.touchDrag,
    type: Boolean
  },
  // control snap position alignment
  dir: {
    default: defaultConfig.dir,
    validator(value) {
      return ["rtl", "ltr"].includes(value);
    }
  },
  // aria-labels and additional text labels
  i18n: {
    default: defaultConfig.i18n,
    type: Object
  },
  // an object to pass all settings
  settings: {
    default() {
      return {};
    },
    type: Object
  }
};
function getMaxSlideIndex({ config, slidesCount }) {
  const { snapAlign, wrapAround, itemsToShow = 1 } = config;
  if (wrapAround) {
    return Math.max(slidesCount - 1, 0);
  }
  let output;
  switch (snapAlign) {
    case "start":
      output = slidesCount - itemsToShow;
      break;
    case "end":
      output = slidesCount - 1;
      break;
    case "center":
    case "center-odd":
      output = slidesCount - Math.ceil((itemsToShow - 0.5) / 2);
      break;
    case "center-even":
      output = slidesCount - Math.ceil(itemsToShow / 2);
      break;
    default:
      output = 0;
      break;
  }
  return Math.max(output, 0);
}
function getMinSlideIndex({ config, slidesCount }) {
  const { wrapAround, snapAlign, itemsToShow = 1 } = config;
  let output = 0;
  if (wrapAround || itemsToShow > slidesCount) {
    return output;
  }
  switch (snapAlign) {
    case "start":
      output = 0;
      break;
    case "end":
      output = itemsToShow - 1;
      break;
    case "center":
    case "center-odd":
      output = Math.floor((itemsToShow - 1) / 2);
      break;
    case "center-even":
      output = Math.floor((itemsToShow - 2) / 2);
      break;
    default:
      output = 0;
      break;
  }
  return output;
}
function getNumberInRange({ val, max, min }) {
  if (max < min) {
    return val;
  }
  return Math.min(Math.max(val, min), max);
}
function getSlidesToScroll({ config, currentSlide, slidesCount }) {
  const { snapAlign, wrapAround, itemsToShow = 1 } = config;
  let output = currentSlide;
  switch (snapAlign) {
    case "center":
    case "center-odd":
      output -= (itemsToShow - 1) / 2;
      break;
    case "center-even":
      output -= (itemsToShow - 2) / 2;
      break;
    case "end":
      output -= itemsToShow - 1;
      break;
  }
  if (wrapAround) {
    return output;
  }
  return getNumberInRange({
    val: output,
    max: slidesCount - itemsToShow,
    min: 0
  });
}
function getSlidesVNodes(vNode) {
  if (!vNode)
    return [];
  return vNode.reduce((acc, node) => {
    var _a;
    if (node.type === Fragment) {
      return [...acc, ...getSlidesVNodes(node.children)];
    }
    if (((_a = node.type) === null || _a === void 0 ? void 0 : _a.name) === "CarouselSlide") {
      return [...acc, node];
    }
    return acc;
  }, []);
}
function mapNumberToRange({ val, max, min = 0 }) {
  if (val > max) {
    return mapNumberToRange({ val: val - (max + 1), max, min });
  }
  if (val < min) {
    return mapNumberToRange({ val: val + (max + 1), max, min });
  }
  return val;
}
function throttle(fn, limit) {
  let inThrottle;
  if (!limit) {
    return fn;
  }
  return function(...args) {
    const self = this;
    if (!inThrottle) {
      fn.apply(self, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
function i18nFormatter(string = "", values = {}) {
  return Object.entries(values).reduce((acc, [key, value]) => acc.replace(`{${key}}`, String(value)), string);
}
var ARIAComponent = defineComponent({
  name: "ARIA",
  setup() {
    const config = inject("config", reactive(Object.assign({}, defaultConfig)));
    const currentSlide = inject("currentSlide", ref(0));
    const slidesCount = inject("slidesCount", ref(0));
    return () => h("div", {
      class: ["carousel__liveregion", "carousel__sr-only"],
      "aria-live": "polite",
      "aria-atomic": "true"
    }, i18nFormatter(config.i18n["itemXofY"], {
      currentSlide: currentSlide.value + 1,
      slidesCount: slidesCount.value
    }));
  }
});
var Carousel = defineComponent({
  name: "Carousel",
  props: carouselProps,
  setup(props, { slots, emit, expose }) {
    var _a;
    const root = ref(null);
    const slides = ref([]);
    const slideWidth = ref(0);
    const slidesCount = ref(0);
    const config = reactive(Object.assign({}, defaultConfig));
    const currentSlideIndex = ref((_a = props.modelValue) !== null && _a !== void 0 ? _a : 0);
    const prevSlideIndex = ref(0);
    const middleSlideIndex = ref(0);
    const maxSlideIndex = ref(0);
    const minSlideIndex = ref(0);
    let autoplayTimer = null;
    provide("config", config);
    provide("slidesCount", slidesCount);
    provide("currentSlide", currentSlideIndex);
    provide("maxSlide", maxSlideIndex);
    provide("minSlide", minSlideIndex);
    provide("slideWidth", slideWidth);
    const breakpoints = computed(() => Object.assign({}, props.breakpoints));
    const __defaultConfig = computed(() => Object.assign(Object.assign(Object.assign({}, defaultConfig), props), { i18n: Object.assign(Object.assign({}, defaultConfig.i18n), props.i18n), breakpoints: void 0 }));
    function updateBreakpointsConfigs() {
      const breakpointsArray = Object.keys(breakpoints.value || {}).map((key) => Number(key)).sort((a, b) => +b - +a);
      let newConfig = Object.assign({}, __defaultConfig.value);
      breakpointsArray.some((breakpoint) => {
        const isMatched = (void 0).matchMedia(`(min-width: ${breakpoint}px)`).matches;
        if (isMatched) {
          newConfig = Object.assign(Object.assign({}, newConfig), breakpoints.value[breakpoint]);
        }
        return isMatched;
      });
      bindConfigs(newConfig);
    }
    function bindConfigs(newConfig) {
      Object.entries(newConfig).forEach(([key, val]) => config[key] = val);
    }
    function updateSlideWidth() {
      if (!root.value)
        return;
      const rect = root.value.getBoundingClientRect();
      slideWidth.value = rect.width / config.itemsToShow;
    }
    function updateSlidesData() {
      if (slidesCount.value <= 0)
        return;
      middleSlideIndex.value = Math.ceil((slidesCount.value - 1) / 2);
      maxSlideIndex.value = getMaxSlideIndex({ config, slidesCount: slidesCount.value });
      minSlideIndex.value = getMinSlideIndex({ config, slidesCount: slidesCount.value });
      if (!config.wrapAround) {
        currentSlideIndex.value = getNumberInRange({
          val: currentSlideIndex.value,
          max: maxSlideIndex.value,
          min: minSlideIndex.value
        });
      }
    }
    let isTouch = false;
    const startPosition = { x: 0, y: 0 };
    const endPosition = { x: 0, y: 0 };
    const dragged = reactive({ x: 0, y: 0 });
    const isHover = ref(false);
    const isDragging = ref(false);
    const handleMouseEnter = () => {
      isHover.value = true;
    };
    const handleMouseLeave = () => {
      isHover.value = false;
    };
    function handleDragStart(event) {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) {
        return;
      }
      isTouch = event.type === "touchstart";
      if (!isTouch) {
        event.preventDefault();
      }
      if (!isTouch && event.button !== 0 || isSliding.value) {
        return;
      }
      startPosition.x = isTouch ? event.touches[0].clientX : event.clientX;
      startPosition.y = isTouch ? event.touches[0].clientY : event.clientY;
      (void 0).addEventListener(isTouch ? "touchmove" : "mousemove", handleDragging);
      (void 0).addEventListener(isTouch ? "touchend" : "mouseup", handleDragEnd);
    }
    const handleDragging = throttle((event) => {
      isDragging.value = true;
      endPosition.x = isTouch ? event.touches[0].clientX : event.clientX;
      endPosition.y = isTouch ? event.touches[0].clientY : event.clientY;
      const deltaX = endPosition.x - startPosition.x;
      const deltaY = endPosition.y - startPosition.y;
      dragged.y = deltaY;
      dragged.x = deltaX;
    }, config.throttle);
    function handleDragEnd() {
      const direction = config.dir === "rtl" ? -1 : 1;
      const tolerance = Math.sign(dragged.x) * 0.4;
      const draggedSlides = Math.round(dragged.x / slideWidth.value + tolerance) * direction;
      if (draggedSlides && !isTouch) {
        const captureClick = (e) => {
          e.preventDefault();
          (void 0).removeEventListener("click", captureClick);
        };
        (void 0).addEventListener("click", captureClick);
      }
      slideTo(currentSlideIndex.value - draggedSlides);
      dragged.x = 0;
      dragged.y = 0;
      isDragging.value = false;
      (void 0).removeEventListener(isTouch ? "touchmove" : "mousemove", handleDragging);
      (void 0).removeEventListener(isTouch ? "touchend" : "mouseup", handleDragEnd);
    }
    function initAutoplay() {
      if (!config.autoplay || config.autoplay <= 0) {
        return;
      }
      autoplayTimer = setInterval(() => {
        if (config.pauseAutoplayOnHover && isHover.value) {
          return;
        }
        next();
      }, config.autoplay);
    }
    function resetAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
      initAutoplay();
    }
    const isSliding = ref(false);
    function slideTo(slideIndex) {
      const currentVal = config.wrapAround ? slideIndex : getNumberInRange({
        val: slideIndex,
        max: maxSlideIndex.value,
        min: minSlideIndex.value
      });
      if (currentSlideIndex.value === currentVal || isSliding.value) {
        return;
      }
      emit("slide-start", {
        slidingToIndex: slideIndex,
        currentSlideIndex: currentSlideIndex.value,
        prevSlideIndex: prevSlideIndex.value,
        slidesCount: slidesCount.value
      });
      isSliding.value = true;
      prevSlideIndex.value = currentSlideIndex.value;
      currentSlideIndex.value = currentVal;
      setTimeout(() => {
        if (config.wrapAround) {
          const mappedNumber = mapNumberToRange({
            val: currentVal,
            max: maxSlideIndex.value,
            min: 0
          });
          if (mappedNumber !== currentSlideIndex.value) {
            currentSlideIndex.value = mappedNumber;
            emit("loop", {
              currentSlideIndex: currentSlideIndex.value,
              slidingToIndex: slideIndex
            });
          }
        }
        emit("update:modelValue", currentSlideIndex.value);
        emit("slide-end", {
          currentSlideIndex: currentSlideIndex.value,
          prevSlideIndex: prevSlideIndex.value,
          slidesCount: slidesCount.value
        });
        isSliding.value = false;
        resetAutoplay();
      }, config.transition);
    }
    function next() {
      slideTo(currentSlideIndex.value + config.itemsToScroll);
    }
    function prev() {
      slideTo(currentSlideIndex.value - config.itemsToScroll);
    }
    const nav = { slideTo, next, prev };
    provide("nav", nav);
    provide("isSliding", isSliding);
    const slidesToScroll = computed(() => getSlidesToScroll({
      config,
      currentSlide: currentSlideIndex.value,
      slidesCount: slidesCount.value
    }));
    provide("slidesToScroll", slidesToScroll);
    const trackStyle = computed(() => {
      const direction = config.dir === "rtl" ? -1 : 1;
      const xScroll = slidesToScroll.value * slideWidth.value * direction;
      return {
        transform: `translateX(${dragged.x - xScroll}px)`,
        transition: `${isSliding.value ? config.transition : 0}ms`,
        margin: config.wrapAround ? `0 -${slidesCount.value * slideWidth.value}px` : "",
        width: `100%`
      };
    });
    function restartCarousel() {
      updateBreakpointsConfigs();
      updateSlidesData();
      updateSlideWidth();
      resetAutoplay();
    }
    Object.keys(carouselProps).forEach((prop) => {
      if (["modelValue"].includes(prop))
        return;
      watch(() => props[prop], restartCarousel);
    });
    watch(() => props["modelValue"], (val) => {
      if (val === currentSlideIndex.value) {
        return;
      }
      slideTo(Number(val));
    });
    watch(slidesCount, updateSlidesData);
    emit("before-init");
    const data = {
      config,
      slidesCount,
      slideWidth,
      next,
      prev,
      slideTo,
      currentSlide: currentSlideIndex,
      maxSlide: maxSlideIndex,
      minSlide: minSlideIndex,
      middleSlide: middleSlideIndex
    };
    expose({
      updateBreakpointsConfigs,
      updateSlidesData,
      updateSlideWidth,
      restartCarousel,
      slideTo,
      next,
      prev,
      nav,
      data
    });
    const slotSlides = slots.default || slots.slides;
    const slotAddons = slots.addons;
    const slotsProps = reactive(data);
    return () => {
      const slidesElements = getSlidesVNodes(slotSlides === null || slotSlides === void 0 ? void 0 : slotSlides(slotsProps));
      const addonsElements = (slotAddons === null || slotAddons === void 0 ? void 0 : slotAddons(slotsProps)) || [];
      slidesElements.forEach((el, index2) => el.props.index = index2);
      let output = slidesElements;
      if (config.wrapAround) {
        const slidesBefore = slidesElements.map((el, index2) => cloneVNode(el, {
          index: -slidesElements.length + index2,
          isClone: true,
          key: `clone-before-${index2}`
        }));
        const slidesAfter = slidesElements.map((el, index2) => cloneVNode(el, {
          index: slidesElements.length + index2,
          isClone: true,
          key: `clone-after-${index2}`
        }));
        output = [...slidesBefore, ...slidesElements, ...slidesAfter];
      }
      slides.value = slidesElements;
      slidesCount.value = Math.max(slidesElements.length, 1);
      const trackEl = h("ol", {
        class: "carousel__track",
        style: trackStyle.value,
        onMousedownCapture: config.mouseDrag ? handleDragStart : null,
        onTouchstartPassiveCapture: config.touchDrag ? handleDragStart : null
      }, output);
      const viewPortEl = h("div", { class: "carousel__viewport" }, trackEl);
      return h("section", {
        ref: root,
        class: {
          carousel: true,
          "is-sliding": isSliding.value,
          "is-dragging": isDragging.value,
          "is-hover": isHover.value,
          "carousel--rtl": config.dir === "rtl"
        },
        dir: config.dir,
        "aria-label": config.i18n["ariaGallery"],
        tabindex: "0",
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave
      }, [viewPortEl, addonsElements, h(ARIAComponent)]);
    };
  }
});
var IconName;
(function(IconName2) {
  IconName2["arrowUp"] = "arrowUp";
  IconName2["arrowDown"] = "arrowDown";
  IconName2["arrowRight"] = "arrowRight";
  IconName2["arrowLeft"] = "arrowLeft";
})(IconName || (IconName = {}));
var Slide = defineComponent({
  name: "CarouselSlide",
  props: {
    index: {
      type: Number,
      default: 1
    },
    isClone: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const config = inject("config", reactive(Object.assign({}, defaultConfig)));
    const currentSlide = inject("currentSlide", ref(0));
    const slidesToScroll = inject("slidesToScroll", ref(0));
    const isSliding = inject("isSliding", ref(false));
    const isActive = computed(() => props.index === currentSlide.value);
    const isPrev = computed(() => props.index === currentSlide.value - 1);
    const isNext = computed(() => props.index === currentSlide.value + 1);
    const isVisible = computed(() => {
      const min = Math.floor(slidesToScroll.value);
      const max = Math.ceil(slidesToScroll.value + config.itemsToShow - 1);
      return props.index >= min && props.index <= max;
    });
    return () => {
      var _a;
      return h("li", {
        style: { width: `${100 / config.itemsToShow}%` },
        class: {
          carousel__slide: true,
          "carousel__slide--clone": props.isClone,
          "carousel__slide--visible": isVisible.value,
          "carousel__slide--active": isActive.value,
          "carousel__slide--prev": isPrev.value,
          "carousel__slide--next": isNext.value,
          "carousel__slide--sliding": isSliding.value
        },
        "aria-hidden": !isVisible.value
      }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots, {
        isActive: isActive.value,
        isClone: props.isClone,
        isPrev: isPrev.value,
        isNext: isNext.value,
        isSliding: isSliding.value,
        isVisible: isVisible.value
      }));
    };
  }
});
const _sfc_main$1 = {
  name: "app-button-apple-and-google",
  props: [],
  emit: ["clickGoogle", "clickApple"],
  setup(props, { emit }) {
    const runtimeConfig = useRuntimeConfig();
    const { googleAuthUrl, appleAuthUrl } = runtimeConfig.public;
    const clickGoogle = () => {
    };
    const clickApple = () => {
    };
    return {
      clickGoogle,
      clickApple,
      googleAuthUrl,
      appleAuthUrl
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-button-apple-and-google" }, _attrs))}><a${ssrRenderAttr("href", $setup.googleAuthUrl)} class="google"><img${ssrRenderAttr("src", _imports_0)}><span>Continue with Google</span></a><a${ssrRenderAttr("href", $setup.appleAuthUrl)} class="apple"><img${ssrRenderAttr("src", _imports_1)}><span>Continue with Apple ID</span></a></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app-button-apple-and-google.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    const route = useRoute();
    const mobileShowSignup = ref(false);
    const mobileShowNewUser = ref(false);
    if (route.query.acrive === "signup") {
      mobileShowSignup.value = true;
    }
    if (route.query.active === "newuser") {
      mobileShowNewUser.value = true;
    }
    watch(
      route,
      (value) => {
        if (value.query.acrive === "signup") {
          mobileShowSignup.value = true;
        }
        if (route.query.acrive === "newuser") {
          mobileShowNewUser.value = true;
        }
        console.log({
          "route.query": route.query,
          "value.query": value.query
        });
      },
      { deep: true, immediate: true }
    );
    const carouselRef = ref();
    const currentSlide = ref(0);
    const change = (num) => {
      currentSlide.value = num;
    };
    const next = () => carouselRef.value.next();
    const prev = () => carouselRef.value.prev();
    const carouselItems = [
      {
        img: "/img/sign-up/img-1.png",
        title: "Create Unique AI Photos With your Face",
        text: "Upload photos of yourself and generate one-of-a-kind images with your face, that you won't find anywhere else"
      },
      {
        img: "/img/sign-up/img-1.png",
        title: "Generate Images  from Text Prompts",
        text: "Describe your vision and  watch our AI turn your words  into reality"
      },
      {
        img: "/img/sign-up/img-1.png",
        title: "Generate  Realistic AI Photos",
        text: "No more need to hire a professional photographer. Just upload your face, enter a desired prompt and wait 30 seconds"
      },
      {
        img: "/img/sign-up/img-1.png",
        title: "Generate Funny  Photos and Memes",
        text: "Do you want to prank your friends or generate a meme with your own face? Now you can do this with help of AIs"
      },
      {
        img: "/img/sign-up/img-1.png",
        title: "Discover creative possibilities with AI",
        text: "Explore prompts, get inspired, and see how AI can transform ideas into unique visuals. Dive into a world where imagination meets technology."
      },
      {
        img: "/img/sign-up/img-1.png",
        title: "Easy Steps to Get Started",
        text: "Upload 10-20 selfies and wait for  AI to learn your face. Enter any text prompt and see the results"
      }
    ];
    return {
      carouselRef,
      currentSlide,
      change,
      next,
      prev,
      carouselItems,
      mobileShowSignup,
      mobileShowNewUser
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = Carousel;
  const _component_Slide = Slide;
  const _component_NuxtLink = __nuxt_component_0;
  const _component_app_button_apple_and_google = __nuxt_component_3;
  const _component_el_button = ElButton;
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<!--[--><div class="signup-section" data-v-c9b82366><div class="signup-section-body" data-v-c9b82366><div class="signup-section-carousel-block" data-v-c9b82366>`);
  _push(ssrRenderComponent(_component_Carousel, {
    ref: "carouselRef",
    modelValue: $setup.currentSlide,
    "onUpdate:modelValue": ($event) => $setup.currentSlide = $event,
    autoplay: "2500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.carouselItems, (carouselItem, index2) => {
          _push2(ssrRenderComponent(_component_Slide, {
            key: carouselItem.img
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="signup-section-item-carousel-item" style="${ssrRenderStyle({ background: "url(" + carouselItem.img + ")" })}" data-v-c9b82366${_scopeId2}><div class="signup-section-item-carousel-item-text" data-v-c9b82366${_scopeId2}><div class="signup-section-item-carousel-navigation" data-v-c9b82366${_scopeId2}><!--[-->`);
                ssrRenderList($setup.carouselItems, (carouselItem2, index22) => {
                  _push3(`<span class="${ssrRenderClass({ active: $setup.currentSlide === index22 })}" data-v-c9b82366${_scopeId2}></span>`);
                });
                _push3(`<!--]--></div><h2 class="carusel-item-title" data-v-c9b82366${_scopeId2}>${ssrInterpolate(carouselItem.title)}</h2><p class="carusel-item-description" data-v-c9b82366${_scopeId2}>${carouselItem.text ?? ""}</p></div></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "signup-section-item-carousel-item",
                    style: { background: "url(" + carouselItem.img + ")" }
                  }, [
                    createVNode("div", { class: "signup-section-item-carousel-item-text" }, [
                      createVNode("div", { class: "signup-section-item-carousel-navigation" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList($setup.carouselItems, (carouselItem2, index22) => {
                          return openBlock(), createBlock("span", {
                            onClick: ($event) => $setup.change(index22 + 1),
                            class: { active: $setup.currentSlide === index22 }
                          }, null, 10, ["onClick"]);
                        }), 256))
                      ]),
                      createVNode("h2", { class: "carusel-item-title" }, toDisplayString(carouselItem.title), 1),
                      createVNode("p", {
                        class: "carusel-item-description",
                        innerHTML: carouselItem.text
                      }, null, 8, ["innerHTML"])
                    ])
                  ], 4)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.carouselItems, (carouselItem, index2) => {
            return openBlock(), createBlock(_component_Slide, {
              key: carouselItem.img
            }, {
              default: withCtx(() => [
                createVNode("div", {
                  class: "signup-section-item-carousel-item",
                  style: { background: "url(" + carouselItem.img + ")" }
                }, [
                  createVNode("div", { class: "signup-section-item-carousel-item-text" }, [
                    createVNode("div", { class: "signup-section-item-carousel-navigation" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList($setup.carouselItems, (carouselItem2, index22) => {
                        return openBlock(), createBlock("span", {
                          onClick: ($event) => $setup.change(index22 + 1),
                          class: { active: $setup.currentSlide === index22 }
                        }, null, 10, ["onClick"]);
                      }), 256))
                    ]),
                    createVNode("h2", { class: "carusel-item-title" }, toDisplayString(carouselItem.title), 1),
                    createVNode("p", {
                      class: "carusel-item-description",
                      innerHTML: carouselItem.text
                    }, null, 8, ["innerHTML"])
                  ])
                ], 4)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  if (!$setup.mobileShowNewUser) {
    _push(`<div class="signup-section-login-block" data-v-c9b82366><div class="signup-section-login-logo" data-v-c9b82366>Feis.AI</div><div class="sign-up-section-item-sign-up" data-v-c9b82366><div class="text-center" data-v-c9b82366><h1 class="signup-section-title" data-v-c9b82366> Sign up and create your <br data-v-c9b82366> first AI photos </h1><div class="registered" data-v-c9b82366><span data-v-c9b82366>Already registered? </span>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/signin",
      class: "app-orange-text"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Log in here`);
        } else {
          return [
            createTextVNode("Log in here")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><p class="generate-stunning-photos app-light-gray-color" data-v-c9b82366> Generate stunning photos, explore endless creative <br data-v-c9b82366> possibilities, and unlock a world of imagination! </p>`);
    _push(ssrRenderComponent(_component_app_button_apple_and_google, null, null, _parent));
    _push(`<p class="privacy-policy app-light-gray font-size-12" data-v-c9b82366> By signing up, you agree to our Terms of Service <br data-v-c9b82366> and acknowledge that you have read our Privacy Policy. </p></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.mobileShowNewUser) {
    _push(`<div class="signup-section-login-block" data-v-c9b82366><div class="text-center" data-v-c9b82366><h1 data-v-c9b82366> Your account <br data-v-c9b82366> has been created </h1><div class="registered" data-v-c9b82366> Already registered? <span class="app-orange-text" data-v-c9b82366>Log in here</span></div><p data-v-c9b82366> Your account has been successfully <br data-v-c9b82366> registered! Let’s go ahead and set it up. </p>`);
    _push(ssrRenderComponent(_component_el_button, {
      type: "primary",
      size: "large"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_nuxt_link, { to: { name: "subscription" } }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Let’s setup your account `);
              } else {
                return [
                  createTextVNode(" Let’s setup your account ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_nuxt_link, { to: { name: "subscription" } }, {
              default: withCtx(() => [
                createTextVNode(" Let’s setup your account ")
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="signup-section-mobile" data-v-c9b82366>`);
  if ($setup.mobileShowNewUser) {
    _push(`<div class="signup-section-mobile-carousel-block" data-v-c9b82366><div class="signup-section-mobile-carousel-login" data-v-c9b82366><div class="signup-section-mobile-carousel-item-img" style="${ssrRenderStyle({ "height": "45vh", "background": 'url("/img/sign-up/sign-up.png")' })}" data-v-c9b82366></div><div class="signup-section-mobile-carousel-item1" data-v-c9b82366><div class="signup-section-mobile-carousel-item-text text-center" data-v-c9b82366><div class="signup-section-login-logo" data-v-c9b82366>Feis.AI</div><div class="" data-v-c9b82366><div class="text-center" data-v-c9b82366><h1 class="signup-section-title" data-v-c9b82366> Sign up and create your <br data-v-c9b82366> first AI photos </h1><div class="registered" data-v-c9b82366><span data-v-c9b82366>Already registered? </span><p class="app-orange-text" data-v-c9b82366>Log in here</p></div><p class="generate-stunning-photos app-light-gray-color" data-v-c9b82366> Generate stunning photos, explore endless creative <br data-v-c9b82366> possibilities, and unlock a world of imagination! </p>`);
    _push(ssrRenderComponent(_component_app_button_apple_and_google, null, null, _parent));
    _push(`<p class="privacy-policy app-light-gray font-size-12" data-v-c9b82366> By signing up, you agree to our Terms of Service <br data-v-c9b82366> and acknowledge that you have read our Privacy Policy. </p></div></div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.mobileShowNewUser) {
    _push(`<div class="signup-section-login-block" data-v-c9b82366><div class="text-center" data-v-c9b82366><h1 data-v-c9b82366> Your account <br data-v-c9b82366> has been created </h1><span data-v-c9b82366>Already registered? <span class="app-orange-text" data-v-c9b82366>Log in here</span></span><p data-v-c9b82366> Your account has been successfully <br data-v-c9b82366> registered! Let’s go ahead and set it up. </p>`);
    _push(ssrRenderComponent(_component_el_button, {
      type: "primary",
      size: "large"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_nuxt_link, { to: { name: "subscription" } }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Let’s setup your account `);
              } else {
                return [
                  createTextVNode(" Let’s setup your account ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_nuxt_link, { to: { name: "subscription" } }, {
              default: withCtx(() => [
                createTextVNode(" Let’s setup your account ")
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="signup-section-mobile-carousel-block signup-section-mobile-carousel-block-two" data-v-c9b82366>`);
  _push(ssrRenderComponent(_component_Carousel, {
    ref: "mobileCarouselRef",
    modelValue: $setup.currentSlide,
    "onUpdate:modelValue": ($event) => $setup.currentSlide = $event,
    autoplay: "2500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.carouselItems, (carouselItem, index2) => {
          _push2(ssrRenderComponent(_component_Slide, {
            key: carouselItem.img
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="signup-section-mobile-carousel-item" data-v-c9b82366${_scopeId2}><div class="signup-section-mobile-carousel-item-img" style="${ssrRenderStyle({ background: "url(" + carouselItem.img + ")" })}" data-v-c9b82366${_scopeId2}></div><div class="signup-section-mobile-carousel-item-text" data-v-c9b82366${_scopeId2}><div class="signup-section-login-logo" data-v-c9b82366${_scopeId2}>Feis.AI</div><h2 class="carusel-item-title" data-v-c9b82366${_scopeId2}>${ssrInterpolate(carouselItem.title)}</h2><p class="carusel-item-description" data-v-c9b82366${_scopeId2}>${carouselItem.text.replace("<br>", "") ?? ""}</p><div class="signup-section-mobile-item-carousel-navigation" data-v-c9b82366${_scopeId2}><!--[-->`);
                ssrRenderList($setup.carouselItems, (carouselItem2, index22) => {
                  _push3(`<span class="${ssrRenderClass({ active: $setup.currentSlide === index22 })}" data-v-c9b82366${_scopeId2}></span>`);
                });
                _push3(`<!--]--></div>`);
                _push3(ssrRenderComponent(_component_el_button, {
                  type: "primary",
                  size: "large"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_nuxt_link, { to: { name: "signup", query: { acrive: "signup" } } }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(` Sign up now `);
                          } else {
                            return [
                              createTextVNode(" Sign up now ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_nuxt_link, { to: { name: "signup", query: { acrive: "signup" } } }, {
                          default: withCtx(() => [
                            createTextVNode(" Sign up now ")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "signup-section-mobile-carousel-item" }, [
                    createVNode("div", {
                      class: "signup-section-mobile-carousel-item-img",
                      style: { background: "url(" + carouselItem.img + ")" }
                    }, null, 4),
                    createVNode("div", { class: "signup-section-mobile-carousel-item-text" }, [
                      createVNode("div", { class: "signup-section-login-logo" }, "Feis.AI"),
                      createVNode("h2", { class: "carusel-item-title" }, toDisplayString(carouselItem.title), 1),
                      createVNode("p", {
                        class: "carusel-item-description",
                        innerHTML: carouselItem.text.replace("<br>", "")
                      }, null, 8, ["innerHTML"]),
                      createVNode("div", { class: "signup-section-mobile-item-carousel-navigation" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList($setup.carouselItems, (carouselItem2, index22) => {
                          return openBlock(), createBlock("span", {
                            onClick: ($event) => $setup.change(index22 + 1),
                            class: { active: $setup.currentSlide === index22 }
                          }, null, 10, ["onClick"]);
                        }), 256))
                      ]),
                      createVNode(_component_el_button, {
                        type: "primary",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_nuxt_link, { to: { name: "signup", query: { acrive: "signup" } } }, {
                            default: withCtx(() => [
                              createTextVNode(" Sign up now ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.carouselItems, (carouselItem, index2) => {
            return openBlock(), createBlock(_component_Slide, {
              key: carouselItem.img
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "signup-section-mobile-carousel-item" }, [
                  createVNode("div", {
                    class: "signup-section-mobile-carousel-item-img",
                    style: { background: "url(" + carouselItem.img + ")" }
                  }, null, 4),
                  createVNode("div", { class: "signup-section-mobile-carousel-item-text" }, [
                    createVNode("div", { class: "signup-section-login-logo" }, "Feis.AI"),
                    createVNode("h2", { class: "carusel-item-title" }, toDisplayString(carouselItem.title), 1),
                    createVNode("p", {
                      class: "carusel-item-description",
                      innerHTML: carouselItem.text.replace("<br>", "")
                    }, null, 8, ["innerHTML"]),
                    createVNode("div", { class: "signup-section-mobile-item-carousel-navigation" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList($setup.carouselItems, (carouselItem2, index22) => {
                        return openBlock(), createBlock("span", {
                          onClick: ($event) => $setup.change(index22 + 1),
                          class: { active: $setup.currentSlide === index22 }
                        }, null, 10, ["onClick"]);
                      }), 256))
                    ]),
                    createVNode(_component_el_button, {
                      type: "primary",
                      size: "large"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_nuxt_link, { to: { name: "signup", query: { acrive: "signup" } } }, {
                          default: withCtx(() => [
                            createTextVNode(" Sign up now ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c9b82366"]]);
export {
  index as default
};
//# sourceMappingURL=index-nNmIGk61.js.map
