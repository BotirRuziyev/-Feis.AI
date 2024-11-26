<template>
  <div class="subscription">
    <div class="page-head">
      <h1 class="page-title">Choose Your Subscription Plan</h1>
      <p class="page-description">
        You can upgrade or cancel subsription plan at any time.
      </p>
    </div>
    <div class="subscription-items">
      <div class="subscription-item" v-for="item in items" :key="item.price">
        <div>
          <div class="subscription-item__head">
            <div class="card-item__title">
              {{ item.title }}
            </div>
            <div class="card-item__price">
              <div>{{ item.price }} <span>/week</span></div>
              <el-button class="subscribe" type="primary">
                <a v-if="item.isFree" @click="cancelSubscription">
                  Subscribe
                </a>
                <a v-else :href="item.paymentLink"> Subscribe </a>
              </el-button>
            </div>
          </div>
          <div class="tariffs-list">
            <div
              class="list-item"
              v-for="tarif of item.tariffs"
              :key="tarif.id"
            >
              <div class="icon">
                <span v-if="tarif.possible">
                  <img src="/icon/check_small.svg" alt="" />
                </span>
                <span v-else>
                  <img src="/icon/close_small.svg" alt="" />
                </span>
              </div>
              <p class="tarif-name">
                {{ tarif.tarifName }}
              </p>
            </div>
          </div>
        </div>
        <el-button
          type="primary"
          class="subscribe-btn"
          :class="item.isFree ? '' : 'active'"
        >
          <a v-if="item.isFree" @click="cancelSubscription"> Subscribe </a>
          <a v-else :href="item.paymentLink"> Subscribe </a>
        </el-button>

        <el-button
          v-if="store.getUser?.stripeProductId === item.stripeProductId"
          type="danger"
          @click="cancelSubscription"
        >
          Cancel or to free
        </el-button>
      </div>
    </div>
    <div class="subscription-payments__methods">
      <div class="title">Accepted payments methods</div>
      <div class="subscription-payments-methods-list">
        <button class="list-item">
          <img src="/img/apple_pay.svg" alt="" />
        </button>
        <button class="list-item">
          <img src="/img/google_Pay.svg" alt="" />
        </button>
        <button class="list-item">
          <img src="/img/google_Pay.svg" alt="" />
        </button>
        <button class="list-item">
          <img src="/img/paypal.svg" alt="" />
        </button>
        <button class="list-item">
          <img src="/img/Visa.svg" alt="" />
        </button>
        <button class="list-item">
          <img src="/img/express.svg" alt="" />
        </button>
        <button class="list-item">
          <img src="/img/master.svg" alt="" />
        </button>
      </div>
    </div>
    <p class="page-mobile-description">
      You can upgrade or cancel subsription plan at any time.
    </p>
    <!--    <pre>{{ items }}</pre>-->
    <!--    <pre>stripeProductId: {{ store.getUser?.stripeProductId }}</pre>-->
    <!--    <pre>subscriptionStripeId: {{ store.getUser?.subscriptionStripeId }}</pre>-->
    <!--    <pre>{{ store.getUser }}</pre>-->
  </div>
</template>

<script lang="ts">
import { useAuthStore } from "~/composables/stores/useAuthStore";
import { useValidateForm } from "~/utils/element.utils";
import { useApiFetch } from "~/composables/useApiFetch";

definePageMeta({});

export default {
  setup() {
    const store = useAuthStore();

    const items = [
      {
        paymentLink: "https://buy.stripe.com/test_6oE2c0gTV2CW81OeUU",
        title: "Starter Plan",
        price: "$9.00",
        stripeProductId: "prod_RDvLKWHEurGKof",
        tariffs: [
          {
            id: 1,
            possible: true,
            tarifName: "Generate up to 25 images per week",
          },
          {
            id: 2,
            possible: true,
            tarifName: "Add 1 face per week",
          },
          {
            id: 3,
            possible: true,
            tarifName: "Access Quick Training",
          },
          {
            id: 4,
            possible: true,
            tarifName: "Personal License",
          },
        ],
      },
      {
        paymentLink: "https://buy.stripe.com/test_6oE2c0gTV2CW81OeUU",
        title: "Pro Plan",
        price: "$29.00",
        stripeProductId: "prod_RFchTKZlLsJyqF",
        tariffs: [
          {
            id: 1,
            possible: true,
            tarifName: "Generate up to 25 images per week",
          },
          {
            id: 2,
            possible: true,
            tarifName: "Add 1 face per week",
          },
          {
            id: 3,
            possible: true,
            tarifName: "Access Quick Training",
          },
          {
            id: 4,
            possible: true,
            tarifName: "Personal License",
          },
        ],
      },
      {
        paymentLink: "#",
        isFree: true,
        title: "Free Plan",
        price: "$9.00",
        stripeProductId: "",
        tariffs: [
          {
            id: 1,
            possible: false,
            tarifName: "Generate up to 25 images per week",
          },
          {
            id: 2,
            possible: false,
            tarifName: "Add 1 face per week",
          },
          {
            id: 3,
            possible: false,
            tarifName: "Access Quick Training",
          },
          {
            id: 4,
            possible: false,
            tarifName: "Personal License",
          },
        ],
      },
    ];

    const cancelSubscription = async () => {
      const { data, error } = await useApiFetch<any>(
        `/subscription/stripe/cancelSubscription`,
        "POST",
        {},
      );
      if (!error.value) {
        await store.getUserApi();
      }
    };

    return {
      store,
      cancelSubscription,
      items,
    };
  },
};
</script>

<style lang="scss">
.subscription-dashboard {
  .app-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
  .dashboard-body {
    background: url("/bg/dashbord-bg.png");
    padding-bottom: 18px !important;
  }
}
.subscription {
  border-radius: 25px;
  .subscription-items {
    min-height: 474px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 90px;
    .subscription-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      backdrop-filter: blur(80px);
      background: rgba(27, 27, 27, 0.9);
      border-radius: 20px;
      padding: 40px 32px;
      .subscription-item__head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 22px;
        border-bottom: 1px solid var(--stroke-gray);
        margin-bottom: 15px;

        .card-item__title,
        .card-item__price {
          font-family: var(--second-family);
          font-weight: 600;
          font-size: 28px;
          white-space: nowrap;
          color: #fff;
          .subscribe {
            display: none;
            height: auto;
            box-shadow: 0 4px 34px 0 rgba(255, 117, 43, 0.2);
            background: linear-gradient(
              110deg,
              #ffa05c 0%,
              #ff804d 100%
            ) !important;
            border-radius: 60px;
            padding: 5px 12px !important;
            font-family: var(--second-family);
            font-weight: 600;
            font-size: 11px;
            line-height: 17px;
            letter-spacing: 0.01em;
            color: #fff;
          }
        }
      }
      .tariffs-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
        .list-item {
          display: flex;
          align-items: center;
          gap: 5px;
          .icon {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            span {
              &:nth-child(1) {
                img {
                  height: 9px;
                }
              }
              &:nth-child(2) {
                img {
                  height: 10px;
                }
              }
            }
          }
          .tarif-name {
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 16px;
            line-height: 155%;
            color: var(--light-gray);
          }
        }
      }
      .subscribe-btn {
        background: var(--dark-gray) !important;
        border: 0;
        a {
          font-family: var(--second-family);
          font-weight: 600;
          font-size: 18px;
          line-height: 150%;
          letter-spacing: 0.01em;
          color: #fff;
        }
      }
      .subscribe-btn.active {
        background: linear-gradient(
          110deg,
          #ffa05c 0%,
          #ff804d 100%
        ) !important;
      }
    }
  }
  .subscription-payments__methods {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 23px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);

    .title {
      font-family: var(--second-family);
      font-weight: 600;
      font-size: 18px;
      color: var(--light-gray);
    }
    .subscription-payments-methods-list {
      display: flex;
      align-items: center;
      gap: 10px;
      .list-item {
        width: 69px;
        height: 39px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid #fff;
        img {
          width: 39px;
        }
        &:last-child {
          img {
            width: 34px;
          }
        }
      }
    }
  }
  .page-mobile-description {
    display: none;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 10px;
    line-height: 170%;
    text-align: center;
    color: var(--light-gray);
  }
}
@media (max-width: 768px) {
  .subscription-dashboard {
    background: url("/bg/bg-mobile.png") !important;
    background-size: cover !important;
    background-position: bottom;
    .app-container {
      height: 100%;
      &::after {
        content: "";
        width: 100%;
        height: 520px;
        background: url("/img/sign-up/img-1.png");
        background-size: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
      }
    }
    .dashboard-header {
      margin-bottom: 76px;
    }
    .dashboard-body {
      padding: 19px 17px 30px;
      border-radius: 20px 20px 0 0;
      backdrop-filter: blur(25px);
      box-shadow: 0 -5px 45px 0 rgba(0, 0, 0, 0.25);
      background: rgba(18, 18, 18, 0.9);
    }
  }
  .subscription {
    .subscription-items {
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
      margin-bottom: 15px;
      .subscription-item {
        padding: 20px 10px;
        .subscription-item__head {
          padding-bottom: 12px;
          .card-item__title {
            font-weight: 600;
            font-size: 18px;
          }
          .card-item__price {
            display: flex;
            align-items: center;
            gap: 10px;
            padding-left: 16px;
            border-radius: 60px;
            border: 1px solid #ff804d;
            font-weight: 500;
            font-size: 13px;
            span {
              font-size: 10px;
            }
            .subscribe {
              display: block;
            }
          }
        }
        .tariffs-list {
          flex-direction: row;
          flex-wrap: wrap;
          column-gap: 26px;
          row-gap: 10px;
          .list-item {
            .tarif-name {
              font-size: 13px;
              line-height: 155%;
            }
          }
        }
        .subscribe-btn {
          display: none;
        }
      }
    }
    .page-mobile-description {
      display: block;
    }
    .subscription-payments__methods {
      display: none;
    }
  }
}
</style>
