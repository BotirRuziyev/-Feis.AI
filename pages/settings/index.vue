<template>
  <div class="settings">
    <div class="page-head">
      <nuxt-link class="back-btn"
        ><img src="/icon/chevron_back.svg" alt="" /> HOME</nuxt-link
      >
      <h1 class="page-title">Account Settings</h1>
    </div>
    <el-row :gutter="15">
      <el-col :span="12" :xs="24">
        <div class="account-settings-menu">
          <nuxt-link class="nav-link" :to="{ name: 'subscription' }">
            <span>Your Subscription Plan</span>
            <img src="/icon/chevron_left.svg" />
          </nuxt-link>
          <nuxt-link class="nav-link" :to="{ name: 'notificationsSettings' }">
            <span>Notifications Setting</span>
            <img src="/icon/chevron_left.svg" />
          </nuxt-link>
          <nuxt-link class="nav-link" :to="{ name: 'contactSupport' }">
            <span>Contact support</span>
            <img src="/icon/chevron_left.svg" />
          </nuxt-link>
          <nuxt-link class="nav-link" :to="{ name: 'privacyPolicy' }">
            <span>Privacy Policy</span>
            <img src="/icon/chevron_left.svg" />
          </nuxt-link>
          <nuxt-link class="nav-link" :to="{ name: 'termsAndConditions' }">
            <span>Terms & Conditions</span>
            <img src="/icon/chevron_left.svg" />
          </nuxt-link>
          <div class="logout">
            <img src="/icon/logout.svg" alt="" />
            Log out
          </div>
        </div>
      </el-col>

      <el-col :span="12" :xs="24">
        <div class="account-settings-download-block">
          <div style="width: 133px; height: 133px" class="qr-code">
            <QRCodeVue3
              :width="152"
              :height="152"
              value="https://scholtz.sk"
              :qrOptions="{
                typeNumber: 0,
                mode: 'Byte',
                errorCorrectionLevel: 'H',
              }"
              :imageOptions="{
                hideBackgroundDots: true,
                imageSize: 0.4,
                margin: 0,
              }"
              :dotsOptions="{
                type: 'square',
                roundSize: true,
                color: '#ffffff',
              }"
              :backgroundOptions="{ color: 'transparent' }"
              :cornersSquareOptions="{ type: null, color: '#ffffff' }"
              :corners-dot-options="{ type: null, color: '#ffffff' }"
            />
          </div>

          <div class="card-body">
            <h1 class="card-title">Download Our App</h1>
            <p class="card-description">
              Get the full experience by downloading our app. Create,<br />
              customize, and explore features on the go! Scan the QR code<br />
              to download, or use the buttons below.
            </p>

            <div class="account-settings-download-btns">
              <a href="#" class="download-btn">
                <img src="/icon/google.png" />
                <span>Download on Google Play</span>
              </a>
              <a href="#" class="download-btn">
                <img src="/icon/apple.png" />
                <span>Download on the App Store</span>
              </a>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { useAuthStore } from "~/composables/stores/useAuthStore";
import QRCodeVue3 from "qrcode-vue3";

definePageMeta({});

export default {
  components: { QRCodeVue3 },
  setup() {
    const store = useAuthStore();

    return {
      store,
    };
  },
};
</script>

<style lang="scss">
.settings-dashboard {
  .dashboard-body {
    background: url("/img/ai-generation-bg.png");
  }
}
.settings {
  .page-head {
    border-bottom: 1px solid var(--stroke-gray);
    padding-bottom: 25px;
    margin-bottom: 34px;
    .page-title {
      text-align: left;
      margin-bottom: 0;
    }
  }
}
.account-settings-menu {
  height: 100%;
  .nav-link {
    height: 110px;
    padding: 30px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 22px;
    color: #fff;
    background: var(--field-bg);
    margin-bottom: 15px;
    text-decoration: none;
    &:last-child {
      margin-bottom: 0;
    }
    img {
      width: 18px;
      height: 18px;
    }
  }
  .logout {
    display: none;
    align-items: center;
    gap: 8px;
    margin: 40px 0 13px;
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #fff;
    img {
      width: 24px;
      height: 24px;
    }
  }
}

.account-settings-download-block {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url("/bg/our-app-bg.png");
  background-size: cover;
  border-radius: 25px;
  padding: 15px;
  height: 100%;
  text-align: center;
  .qr-code {
    margin-bottom: 30px;
  }
  .card-body {
    .card-title {
      font-family: var(--second-family);
      font-weight: 600;
      font-size: 33px;
      text-align: center;
      color: #fff;
      margin-bottom: 10px;
    }
    .card-description {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 18px;
      line-height: 155%;
      text-align: center;
      color: var(--light-gray);
      margin-bottom: 20px;
    }
    .account-settings-download-btns {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      img {
        width: 25px;
        height: 25px;
        margin-right: 15px;
      }
      .download-btn {
        width: 100%;
        max-width: 327px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
        padding: 16px 20px;
        margin-bottom: 10px;
        border: 2px solid #fff;
        border-radius: 60px;
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: #fff;
        img {
          margin: 0;
        }
        &:last-child {
          margin-bottom: 0;
          background: #fff;
          color: var(--black);
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .settings-dashboard {
    background: url(--black) !important;
    background-size: 100% !important;
    background-position: bottom !important;
    background-repeat: no-repeat !important;
    .dashboard-header {
      width: calc(100% - 32px);
      padding: 16px;
      border-radius: 12px;
      box-shadow: 0 19px 44px 0 rgba(115, 0, 255, 0.08);
      background: rgba(27, 27, 27, 0.94);
      margin: 0 auto 23px;
      transform: translateY(8px);
    }
    .dashboard-body {
      padding: 0 16px 18px;
      border-radius: 0;
      background: none !important;
      .settings {
        .page-head {
          border-bottom: 1px solid var(--stroke-gray);
          padding-bottom: 9px;
          margin-bottom: 15px;
          .page-title {
            text-align: left;
          }
        }
        .account-settings-menu {
          .nav-link {
            height: 75px;
            padding: 26px 24px 26px 16px;
            font-size: 16px;
            margin-bottom: 5px;
            border-radius: 12px;
            &:last-child {
              margin-bottom: 0;
            }
          }
          .logout {
            display: flex;
          }
        }
        .account-settings-download-block {
          display: none;
        }
      }
    }
  }
}
</style>
