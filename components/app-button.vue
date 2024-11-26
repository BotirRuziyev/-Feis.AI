<template>
  <button type="button" class="app-button" :disabled="disabled">
    {{ text }}
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'app-button',
  props: ['text', 'disabled'],
  setup() {

    return {

    }
  }
}
</script>

<style lang="scss">
.app-button {
  cursor: pointer;
  background: linear-gradient(92.54deg, #FFA05C 5.24%, #FF804D 98.58%);
  border: none;
  outline: none;
  height: 51px;
  border-radius: 51px;
  padding: 8px 24px;
  width: inherit;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.01em;
  text-align: center;
  color: var(--app-white);
}
</style>
