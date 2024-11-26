<template>
  <div class="dashboard-menu-mobile">
    <nuxt-link :to="{ name: 'myFaces' }">
      <img src="/icon/myFaces.svg">
      <span>My faces</span>
    </nuxt-link>
    <nuxt-link :to="{ name: 'inspiration' }">
      <img src="/icon/freeMode.svg">
      Inspiration
    </nuxt-link>
    <nuxt-link :to="{ name: 'index' }" class="dashboard-menu-mobile-ai-generator-btn">
      <img src="/icon/aiGenerator.svg">
      <span>Ai Generator</span>
    </nuxt-link>
    <nuxt-link :to="{ name: 'myFiles' }">
      <img src="/icon/myFiles.svg">
      <span>My files</span>
    </nuxt-link>
    <nuxt-link :to="{ name: 'settings' }">
      <img src="/icon/settings.svg">
      <span>Settings</span>
    </nuxt-link>
    <nuxt-link @click="store.logout()">
      <img src="/icon/logout.svg">
      Log out
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import {useAuthStore} from "~/composables/stores/useAuthStore";

export default {
  name: 'dashboard-menu-mobile',
  setup() {
    const store = useAuthStore()

    return {
      store
    }
  }
}
</script>

<style lang="scss">

.dashboard-menu-mobile {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  a {
    height: 80px;
    width: calc((100% - 90px) / 4);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--app-grey);
    text-align: center;
    text-decoration: none;
    font-size: 9px;
    font-weight: 600;
    line-height: 10.44px;
    letter-spacing: 0.5px;
    img {
      margin-bottom: 3px;
      width: 14px;
      height: 14px;
    }
  }
  a.router-link-active {
    color: var(--app-white);
  }
  .dashboard-menu-mobile-ai-generator-btn {
    border-radius: 50%;
    width: 90px;
    height: 90px;
    border: 10px solid var(--app-black);
    background: var(--app-orange);
  }
}

</style>
