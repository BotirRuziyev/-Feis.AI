<template>
  <div class="app-button-apple-and-google">
    <a :href="googleAuthUrl" class="google" @click="clickApple">
      <img src="/icon/google.png" />
      <span>Continue with Google</span>
    </a>
    <a :href="appleAuthUrl" class="apple" @click="clickGoogle">
      <img src="/icon/apple.png" />
      <span>Continue with Apple ID</span>
    </a>
  </div>
</template>

<script lang="ts">
import { useRuntimeConfig } from "nuxt/app";

export default {
  name: "app-button-apple-and-google",
  props: [],
  emit: ["clickGoogle", "clickApple"],
  setup(props: any, { emit }: any) {
    const runtimeConfig = useRuntimeConfig();
    const { googleAuthUrl, appleAuthUrl } = runtimeConfig.public;

    const clickGoogle = () => {};
    const clickApple = () => {};

    return {
      clickGoogle,
      clickApple,
      googleAuthUrl,
      appleAuthUrl,
    };
  },
};
</script>

<style lang="scss">
.app-button-apple-and-google {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 15px;
    background: transparent;
    cursor: pointer;
    outline: none;
    margin-bottom: 10px;
    border: 1px solid var(--app-white);
    border-radius: 60px;
    height: 61px;
    width: 290px;
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #fff;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    text-decoration: none;
  }
  .apple {
    background: var(--app-white);
    color: var(--app-black);
    margin-bottom: 0;
  }
}
</style>
