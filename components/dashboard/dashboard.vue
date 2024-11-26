<template>
  <div
    class="dashboard"
    :class="
      currentURL != '' && currentURL != null
        ? `${currentURL + '-dashboard'} `
        : 'ai-generator-dashboard'
    "
  >
    <div class="app-container">
      <dashboard-header />

      <div class="dashboard-container">
        <div class="dashboard-menu-block">
          <dashboard-menu />
        </div>

        <div class="dashboard-body">
          <slot></slot>
        </div>
      </div>

      <dashboard-footer />

      <!-- <div
        class="dashboard-menu-mobile-block app-base-top-left-right-border-radius"
      >
        <dashboard-menu-mobile />
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import DashboardHeader from "~/components/dashboard/dashboard-header.vue";
import DashboardFooter from "~/components/dashboard/dashboard-footer.vue";
import DashboardMenu from "~/components/dashboard/dashboard-menu.vue";
export default {
  name: "dashboard",
  components: { DashboardMenu, DashboardFooter, DashboardHeader },
  setup() {
    return {};
  },
  methods: {
    getWordAfterSlash(input: string, slashIndex: number): string | null {
      const parts = input.split("/");
      return parts[slashIndex] || null;
    },
  },
  computed: {
    currentURL(): string | null {
      return this.getWordAfterSlash(this.$route.fullPath, 1); // 'world'ni oladi
    },
  },
};
</script>

<style lang="scss">
.dashboard {
  min-height: 100vh;
  background: var(--field-bg);
}
.dashboard-container {
  min-height: 200px;
  display: flex;
  align-items: start;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  z-index: 2;
}
.dashboard-menu-block {
  width: 277px;
  min-width: 277px;
  margin-right: 20px;
  border-radius: 25px;
  padding: 36px 27px 27px;
  background: #121212;
}
.dashboard-body {
  width: 100%;
  min-height: 80vh;
  background: url("/img/ai-generation-bg.png");
  background-size: cover !important;
  position: relative;
  padding: 50px 40px 40px;
  border-radius: 25px;
  .page-head {
    padding-bottom: 25px;
    border-bottom: 1px solid var(--stroke-gray);
    margin-bottom: 35px;
    .back-btn {
      display: flex;
      align-items: center;
      gap: 2px;
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 14px;
      text-transform: uppercase;
      color: var(--gray);
      margin-bottom: 21px;
      cursor: pointer;
      img {
        width: 17px;
        height: 17px;
      }
    }
    .page-title {
      font-family: var(--second-family);
      font-weight: 600;
      font-size: 45px;
      color: #fff;
      margin-bottom: 10px;
    }
    .page-description {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 18px;
      line-height: 155%;
      color: var(--light-gray);
      margin-bottom: 0;
      .upgrade {
        background: linear-gradient(110deg, #ffa05c 0%, #ff804d 100%);
        padding: 6px 17px;
        border: 0;
        border-radius: 60px;
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 18px;
        text-align: center;
        color: #fff;
      }
    }
  }
}

.dashboard-menu-mobile-block {
  display: none;
}
@media only screen and (max-width: 768px) {
  .dashboard-container {
    overflow: visible;
  }
  .dashboard-menu-block {
    display: none;
  }
  .dashboard-menu-mobile-block {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--app-black);
    display: flex;
    height: 80px;
  }
  .dashboard-body {
    .page-head {
      padding-bottom: 0;
      margin-bottom: 15px;
      border: 0;
      .page-title {
        font-weight: 600;
        font-size: 28px;
        text-align: center;
      }
      .page-description {
        display: none;
        font-size: 14px;
      }
    }
  }
}
</style>
