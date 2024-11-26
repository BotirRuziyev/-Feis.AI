<template>
  <div class="dashboard-menu">
    <div class="dashboard-menu-top">
      <nuxt-link :to="{ name: 'contactSupport' }">
        <img src="/icon/home.svg" />
        Dashboard
      </nuxt-link>
      <nuxt-link :to="{ name: 'index' }">
        <img src="/icon/aiGenerator.svg" />
        Ai Generator
      </nuxt-link>
      <nuxt-link :to="{ name: 'inspiration' }">
        <img src="/icon/freeMode.svg" />
        Inspiration
      </nuxt-link>
      <nuxt-link :to="{ name: 'myFaces' }">
        <img src="/icon/myFaces.svg" />
        My faces
      </nuxt-link>
      <nuxt-link :to="{ name: 'myFiles' }">
        <img src="/icon/myFiles.svg" />
        My files
      </nuxt-link>
      <nuxt-link :to="{ name: 'settings' }">
        <img src="/icon/settings.svg" />
        Settings
      </nuxt-link>
    </div>

    <div class="admin-routes" v-if="store.getUser?.isAdmin">
      <p>Admin</p>
      <nuxt-link :to="{ name: 'admin-face' }"> face </nuxt-link>
      <nuxt-link :to="{ name: 'admin-face-image-generation' }">
        image generation
      </nuxt-link>
      <!--      <nuxt-link :to="{ name: 'admin-face-log' }">-->
      <!--        log-->
      <!--      </nuxt-link>-->
      <nuxt-link :to="{ name: 'admin-subscription' }"> subscription </nuxt-link>
      <nuxt-link :to="{ name: 'admin-user' }"> user </nuxt-link>
      <nuxt-link :to="{ name: 'admin-contactSupport' }">
        Contact support
      </nuxt-link>
    </div>

    <div class="dashboard-menu-bottom">
      <nuxt-link @click="store.logout()" class="logout">
        <img src="/icon/logout.svg" />
        Log out
      </nuxt-link>
      <nuxt-link :to="{ name: 'index' }" class="orange-generate-aI-art">
        <img src="/icon/orange-generate-aI-art.svg" />
        Generate AI Art
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { useAuthStore } from "~/composables/stores/useAuthStore";

export default {
  name: "dashboard-menu",
  setup() {
    const store = useAuthStore();

    return {
      store,
    };
  },
};
</script>

<style lang="scss">
.dashboard-menu {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: calc(80vh - 40px);
  .dashboard-menu-top {
    justify-content: normal;
    a {
      display: flex;
      align-items: center;
      gap: 11px;
      padding: 11px 0 26px;
      border-bottom: 1px solid rgba(45, 43, 42, 0.25);
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 15px;
      line-height: 116%;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-align: center;
      color: var(--navgray);
      text-decoration: none;
      transition: 0.3s;
      &:hover {
        color: var(--app-white);
        border-color: rgba(45, 43, 42, 1);
        img {
          filter: invert(91%) sepia(92%) saturate(31%) hue-rotate(69deg)
            brightness(108%) contrast(110%);
        }
      }
      img {
        width: 21px;
        height: 21px;
        transition: 0.3s;
      }
      &:nth-child(1),
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6) {
        img {
          height: 20px;
        }
      }
      &:nth-child(3) {
        img {
          height: 17px;
        }
      }
    }

    a.router-link-active {
      color: var(--app-white);
      img {
        filter: invert(91%) sepia(92%) saturate(31%) hue-rotate(69deg)
          brightness(108%) contrast(110%);
      }
    }
  }
  .dashboard-menu-bottom {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    .logout {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 18px 10px;
      margin-bottom: 10px;
      cursor: pointer;
      font-family: var(--second-family);
      font-weight: 600;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: 0.01em;
      color: var(--navgray);
      transition: 0.3s;
      &:hover {
        color: var(--app-white);
        img {
          filter: invert(91%) sepia(92%) saturate(31%) hue-rotate(69deg)
            brightness(108%) contrast(110%);
        }
      }
      img {
        width: 24px;
        height: 24px;
        transition: 0.3s;
      }
    }
    .orange-generate-aI-art {
      display: flex;
      align-items: center;
      gap: 5px;
      border-radius: 60px;
      padding: 17px 28px;
      border: 1px solid #ff804d;
      font-family: var(--second-family);
      font-weight: 600;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: 0.01em;
      background: linear-gradient(110deg, #ffa05c 0%, #ff804d 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      img {
        width: 21px;
        height: 21px;
      }
    }
  }
}

.admin-routes {
  a {
    font-size: 13px;
    padding: 4px 0;
  }
}
</style>
