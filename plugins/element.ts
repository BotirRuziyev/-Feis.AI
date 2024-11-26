import { defineNuxtPlugin } from '#app';
import ElementPlus, { ID_INJECTION_KEY, ElCalendar } from 'element-plus';
// import ru from 'element-plus/es/locale/lang/ru'
// import 'element-plus/theme-chalk/src/index.scss'
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
// import ElTableInfiniteScroll from "el-table-infinite-scroll";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// @ts-ignore
import en from 'element-plus/dist/locale/en.mjs';

// import dayjs from 'dayjs'
// import 'dayjs/locale/ru'
// dayjs.locale('ru')

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus, {
    locale: en,
    size: 'large',
    zIndex: 3000,
  });

  nuxtApp.vueApp.use(ElCalendar, {
    // locale: dayjs,
    size: 'large',
    zIndex: 3000,
  });

  // nuxtApp.vueApp.use(ElTableInfiniteScroll)

  nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
  });

  // const app = createApp(App)
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component);
  }
});
