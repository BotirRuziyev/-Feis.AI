<template>
  <dashboard>
    <slot />
  </dashboard>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/composables/stores/useAuthStore";
import { onMounted, useRoute } from "#imports";
import Dashboard from "~/components/dashboard/dashboard.vue";
const store = useAuthStore();

onMounted(() => {
  store.updateToken();
  setInterval(() => {
    store.updateToken();
  }, 60000);
});

const route = useRoute();
if (route.query?.reload === "true") {
  setTimeout(() => {
    window.location.href = "/";
  }, 500);
}
</script>
