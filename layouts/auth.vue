<template>
  <div class="app-layouts-auth">
    <div class="app-container app-layouts-auth-container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  transition: "home",
};
</script>

<style lang="scss">
.app-layouts-auth {
  width: 100%;
  height: 100vh;
  background: url("/bg/bg-desktop.png");
  background-size: cover !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.app-layouts-auth-container {
  padding: 50px;
}

@media only screen and (max-width: 768px) {
  .app-layouts-auth {
    background: url("/bg/bg-mobile.png");
    background-position: bottom;
  }
  .app-layouts-auth-container {
    padding: 0;
  }
}
</style>
