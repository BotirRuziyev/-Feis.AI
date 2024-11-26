<template>
  <div class="dashboard-header">
    <nuxt-link :to="{ name: 'index' }" class="dashboard-header-logo-block">
      <app-logo />
    </nuxt-link>

    <div class="dashboard-header-right-block">
      <nuxt-link
        :to="{ name: 'subscription' }"
        class="dashboard-header-subscription"
      >
        {{ store?.getUser?.generationsCount || 0 }} CREDITS
      </nuxt-link>
      <nuxt-link to="#" class="dashboard-header-upgrade">UPGRADE</nuxt-link>
      <nuxt-link
        :to="{ name: 'notifications' }"
        class="dashboard-header-notifications"
      >
        <span />
        <img src="/notifications.svg" />
      </nuxt-link>

      <nuxt-link :to="{ name: 'settings' }" class="dashboard-header-settings">
        <span />
        <img src="/icon/user-icon.svg" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import AppLogo from "~/components/app-logo.vue";
import { useAuthStore } from "~/composables/stores/useAuthStore";

export default {
  name: "dashboard-header",
  components: { AppLogo },
  setup() {
    const store = useAuthStore();

    return {
      store,
    };
  },
};
</script>

<style lang="scss">
.dashboard-header {
  width: 100%;
  margin-bottom: 25px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  z-index: 3;
  border-bottom: 1px solid #2d2b2a;
}
.dashboard-header-right-block {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  gap: 17px;
}
.dashboard-header-credits {
  margin-right: 15px;
}
.dashboard-header-notifications {
  width: 34px;
  height: 34px;
  position: relative;
  img {
    height: 27px;
  }
  span {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--app-orange);
    right: 1px;
    top: 1px;
  }
}
.dashboard-header-settings {
  width: 30px;
  height: 30px;
  position: relative;
  img {
    height: 24px;
  }
}

.dashboard-header-logo-block {
  text-decoration: none;
}

.dashboard-header-subscription {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: var(--light-gray);
}
.dashboard-header-upgrade {
  display: block;
  background: linear-gradient(110deg, #ffa05c 0%, #ff804d 100%);
  border-radius: 60px;
  padding: 6px 17px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #fff;
}

@media only screen and (max-width: 780px) {
  .dashboard-header {
    margin-bottom: 76px;
    height: auto;
    border-bottom: 0;
    padding: 10px 16px;
    .app-logo {
      font-size: 16px;
    }
  }
  .dashboard-header-right-block {
    gap: 8px;
  }
  .dashboard-header-notifications {
    width: 20px;
    height: 20px;
    position: relative;
    img {
      height: 17px;
    }
    span {
      right: 1px;
      top: -2px;
    }
  }
  .dashboard-header-settings {
    width: 20px;
    height: 20px;
    position: relative;
    img {
      height: 17px;
    }
  }

  .dashboard-header-subscription {
    font-size: 10px;
  }
  .dashboard-header-upgrade {
    padding: 5px 10px;
    font-size: 10px;
  }
}
</style>
