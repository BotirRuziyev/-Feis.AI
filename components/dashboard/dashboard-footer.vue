<template>
  <div class="dashboard-footer">
    <div>
      <span>© Feis AI, 2024</span>
    </div>
    <div>
      <nuxt-link :to="{ name: 'contactSupport' }">Contact Support</nuxt-link>
      <nuxt-link :to="{ name: 'privacyPolicy' }">Privacy Policy</nuxt-link>
      <nuxt-link :to="{ name: 'termsAndConditions' }"
        >Terms & Conditions</nuxt-link
      >
      <a href="#">Download our app</a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "dashboard-footer",
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.dashboard-footer {
  //background: yellow;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
  border-top: 1px solid #2d2b2a;
  color: var(--app-grey-text-footer);
  font-size: 18px;
  a,
  span {
    color: var(--app-grey-text-footer);
    text-decoration: none;
  }
  a {
    padding: 0 16px;
  }
}
@media (max-width: 768px) {
  .dashboard-footer {
    display: none;
  }
}
</style>
