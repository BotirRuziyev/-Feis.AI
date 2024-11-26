<template>
  <div class="signup-section">
    <div class="signup-section-body">
      <div class="signup-section-carousel-block">
        <Carousel ref="carouselRef" v-model="currentSlide" autoplay="2500">
          <Slide
            v-for="(carouselItem, index) in carouselItems"
            :key="carouselItem.img"
          >
            <div
              class="signup-section-item-carousel-item"
              :style="{ background: 'url(' + carouselItem.img + ')' }"
            >
              <div class="signup-section-item-carousel-item-text">
                <div class="signup-section-item-carousel-navigation">
                  <span
                    v-for="(carouselItem, index) in carouselItems"
                    @click="change(index + 1)"
                    :class="{ active: currentSlide === index }"
                  />
                </div>
                <h2 class="carusel-item-title">{{ carouselItem.title }}</h2>
                <p
                  class="carusel-item-description"
                  v-html="carouselItem.text"
                ></p>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>

      <div class="signup-section-login-block" v-if="!mobileShowNewUser">
        <div class="signup-section-login-logo">Feis.AI</div>
        <div class="sign-up-section-item-sign-up">
          <div class="text-center">
            <h1 class="signup-section-title">
              Sign up and create your <br />
              first AI photos
            </h1>
            <div class="registered">
              <span>Already registered? </span>
              <NuxtLink to="/signin" class="app-orange-text"
                >Log in here</NuxtLink
              >
            </div>
            <p class="generate-stunning-photos app-light-gray-color">
              Generate stunning photos, explore endless creative <br />
              possibilities, and unlock a world of imagination!
            </p>

            <app-button-apple-and-google />

            <p class="privacy-policy app-light-gray font-size-12">
              By signing up, you agree to our Terms of Service
              <br />
              and acknowledge that you have read our Privacy Policy.
            </p>
          </div>
        </div>
      </div>

      <div class="signup-section-login-block" v-if="mobileShowNewUser">
        <div class="text-center">
          <h1>
            Your account <br />
            has been created
          </h1>
          <div class="registered">
            Already registered? <span class="app-orange-text">Log in here</span>
          </div>
          <p>
            Your account has been successfully <br />
            registered! Let’s go ahead and set it up.
          </p>
          <el-button type="primary" size="large">
            <nuxt-link :to="{ name: 'subscription' }">
              Let’s setup your account
            </nuxt-link>
          </el-button>
        </div>
      </div>
    </div>
  </div>

  <div class="signup-section-mobile">
    <!--    signup-section-mobile-->

    <div v-if="mobileShowNewUser" class="signup-section-mobile-carousel-block">
      <div class="signup-section-mobile-carousel-login">
        <div
          class="signup-section-mobile-carousel-item-img"
          style="
            height: 45vh;
            background: url(&quot;/img/sign-up/sign-up.png&quot;);
          "
        />
        <div class="signup-section-mobile-carousel-item1">
          <div class="signup-section-mobile-carousel-item-text text-center">
            <div class="signup-section-login-logo">Feis.AI</div>
            <div class="">
              <div class="text-center">
                <h1 class="signup-section-title">
                  Sign up and create your <br />
                  first AI photos
                </h1>
                <div class="registered">
                  <span>Already registered? </span>
                  <p class="app-orange-text">Log in here</p>
                </div>
                <p class="generate-stunning-photos app-light-gray-color">
                  Generate stunning photos, explore endless creative <br />
                  possibilities, and unlock a world of imagination!
                </p>
                <app-button-apple-and-google />
                <p class="privacy-policy app-light-gray font-size-12">
                  By signing up, you agree to our Terms of Service
                  <br />
                  and acknowledge that you have read our Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="signup-section-login-block" v-if="mobileShowNewUser">
      <div class="text-center">
        <h1>
          Your account <br />
          has been created
        </h1>
        <span
          >Already registered?
          <span class="app-orange-text">Log in here</span></span
        >
        <p>
          Your account has been successfully <br />
          registered! Let’s go ahead and set it up.
        </p>
        <el-button type="primary" size="large">
          <nuxt-link :to="{ name: 'subscription' }">
            Let’s setup your account
          </nuxt-link>
        </el-button>
      </div>
    </div>

    <div
      class="signup-section-mobile-carousel-block signup-section-mobile-carousel-block-two"
    >
      <Carousel ref="mobileCarouselRef" v-model="currentSlide" autoplay="2500">
        <Slide
          v-for="(carouselItem, index) in carouselItems"
          :key="carouselItem.img"
        >
          <div class="signup-section-mobile-carousel-item">
            <div
              class="signup-section-mobile-carousel-item-img"
              :style="{ background: 'url(' + carouselItem.img + ')' }"
            />

            <div class="signup-section-mobile-carousel-item-text">
              <div class="signup-section-login-logo">Feis.AI</div>

              <h2 class="carusel-item-title">{{ carouselItem.title }}</h2>
              <p
                class="carusel-item-description"
                v-html="carouselItem.text.replace('<br>', '')"
              ></p>

              <div class="signup-section-mobile-item-carousel-navigation">
                <span
                  v-for="(carouselItem, index) in carouselItems"
                  @click="change(index + 1)"
                  :class="{ active: currentSlide === index }"
                />
              </div>

              <el-button type="primary" size="large">
                <nuxt-link
                  :to="{ name: 'signup', query: { acrive: 'signup' } }"
                >
                  Sign up now
                </nuxt-link>
              </el-button>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    definePageMeta({ layout: "auth" });

    const route = useRoute();

    const mobileShowSignup = ref<boolean>(false);
    const mobileShowNewUser = ref<boolean>(false);

    if (route.query.acrive === "signup") {
      mobileShowSignup.value = true;
    }

    if (route.query.active === "newuser") {
      mobileShowNewUser.value = true;
    }

    watch(
      route,
      (value) => {
        if (value.query.acrive === "signup") {
          mobileShowSignup.value = true;
        }

        if (route.query.acrive === "newuser") {
          mobileShowNewUser.value = true;
        }

        console.log({
          "route.query": route.query,
          "value.query": value.query,
        });
      },
      { deep: true, immediate: true },
    );

    const carouselRef = ref();
    const currentSlide = ref(0);
    const change = (num: number) => {
      currentSlide.value = num;
    };

    const next = () => carouselRef.value.next();
    const prev = () => carouselRef.value.prev();

    const carouselItems = [
      {
        img: "/img/sign-up/img-1.png",
        title: "Create Unique AI Photos With your Face",
        text: "Upload photos of yourself and generate one-of-a-kind images with your face, that you won't find anywhere else",
      },
      {
        img: "/img/sign-up/img-1.png",
        title: "Generate Images  from Text Prompts",
        text: "Describe your vision and  watch our AI turn your words  into reality",
      },
      {
        img: "/img/sign-up/img-1.png",
        title: "Generate  Realistic AI Photos",
        text: "No more need to hire a professional photographer. Just upload your face, enter a desired prompt and wait 30 seconds",
      },
      {
        img: "/img/sign-up/img-1.png",
        title: "Generate Funny  Photos and Memes",
        text: "Do you want to prank your friends or generate a meme with your own face? Now you can do this with help of AIs",
      },
      {
        img: "/img/sign-up/img-1.png",
        title: "Discover creative possibilities with AI",
        text: "Explore prompts, get inspired, and see how AI can transform ideas into unique visuals. Dive into a world where imagination meets technology.",
      },
      {
        img: "/img/sign-up/img-1.png",
        title: "Easy Steps to Get Started",
        text: "Upload 10-20 selfies and wait for  AI to learn your face. Enter any text prompt and see the results",
      },
    ];

    return {
      carouselRef,
      currentSlide,
      change,
      next,
      prev,
      carouselItems,
      mobileShowSignup,
      mobileShowNewUser,
    };
  },
};
</script>

<style scoped lang="scss">
$desktop_height: calc(100vh - 100px);
$desktop_body_height: calc($desktop_height - 60px);
$mobile_height: 100vh;
$mobile_body_height: calc($desktop_height - 60px);

.signup-section {
  width: 100%;
  height: $desktop_height;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: var(--app-black);
  border-radius: 20px;
  margin: 0 auto;
  .signup-section-body {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    border-radius: 20px;
    height: $desktop_body_height;
    width: calc(100% - 60px);
  }
  .signup-section-carousel-block {
    width: 50%;
  }
  .signup-section-login-block {
    width: 50%;
    padding-left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .signup-section-item-carousel-item {
    margin: 0;
    width: 100%;
    height: calc($desktop_height - 60px);
    cursor: pointer;
    position: relative;
    border-radius: 20px;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    .signup-section-item-carousel-item-text {
      max-width: 695px;
      width: 100%;
      padding: 45px;
      position: absolute;
      bottom: 1px;
      z-index: 999999;
    }
  }
  .signup-section-item-carousel-navigation {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: block;
      background: var(--app-white);
      height: 6px;
      width: 6px;
      margin-right: 5px;
      border-radius: 50%;
    }
    span.active {
      width: 34px !important;
      border-radius: 4px;
    }
  }
}
.signup-section-login-logo {
  display: inline-block;
  border: 1px solid #fff;
  border-radius: 60px;
  padding: 13px 20px;
  margin-bottom: 30px;
  font-family: var(--second-family);
  font-weight: 700;
  line-height: 17px;
  font-size: 16px;
  color: #fff;
}
.signup-section-title {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 45px;
  text-align: center;
  color: #fff;
  margin-bottom: 10px;
}
.registered {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 10px;
  align-items: center;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 155%;
  text-align: center;
  color: #fff;
  .app-orange-text {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 155%;
    text-align: center;
    text-decoration: none;
    color: #db5401 !important;
  }
}
.generate-stunning-photos {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 155%;
  text-align: center;
  color: var(--light-gray);
  margin: 0 0 20px;
}
.privacy-policy {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 170%;
  text-align: center;
  color: var(--light-gray);
  margin: 0;
}
.carusel-item-title {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 28px;
  color: #fff;
  text-align: left;
  margin: 28px 0 10px;
}
.carusel-item-description {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 155%;
  text-align: left;
  color: #fff;
}
.signup-section-mobile {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .signup-section-mobile-carousel-block {
    width: 100%;
    padding: 0 !important;
    height: 100vh;
  }
  .signup-section-mobile-carousel-item {
    width: 100%;
    position: relative;
    height: 100vh;
    margin: -16px 0;
    position: relative;
    cursor: pointer;
    background-size: auto;
  }
  .signup-section-mobile-carousel-item-img {
    height: 60vh;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover !important;
  }
  .signup-section-mobile-carousel-item-text {
    padding: 30px;
    height: 40vh;
    background: rgba(0, 0, 0, 0.75);
  }
  .signup-section-mobile-item-carousel-navigation {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: block;
      background: var(--app-white);
      height: 6px;
      width: 6px;
      margin-right: 5px;
      border-radius: 50%;
    }
    span.active {
      width: 34px !important;
      border-radius: 4px;
    }
  }
}

.signup-section-mobile {
  display: none;
}

@media only screen and (max-width: 768px) {
  .signup-section-mobile .signup-section-mobile-carousel-item {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .signup-section {
    display: none;
  }
  .signup-section-mobile {
    display: flex;
    flex-direction: column;
    width: 100%;
    .signup-section-mobile-carousel-block-two {
      .signup-section-mobile-carousel-item-img {
        height: 100%;
        background-position: center top !important;
      }
    }
    .signup-section-mobile-carousel-item1 {
      position: relative;
      z-index: 3;
    }
    .signup-section-mobile-carousel-item-text {
      height: auto;
      margin-top: -15px;
      border-radius: 15px 15px 0 0;
      backdrop-filter: blur(18px);
      box-shadow: 0 -5px 45px 0 rgba(0, 0, 0, 0.25);
      background: rgba(18, 18, 18, 0.9);
      position: relative;
      z-index: 3;
    }
  }
  .signup-section-login-logo {
    padding: 7px 20px;
    margin-bottom: 15px;
    font-size: 12px;
    line-height: 13px;
  }
  .signup-section-title {
    font-size: 28px;
    margin-bottom: 10px;
  }
  .registered {
    gap: 5px;
    font-weight: 400;
    font-size: 12px;
    line-height: 155%;

    .app-orange-text {
      font-weight: 600;
      color: var(--orange);
    }
  }
  .generate-stunning-photos {
    font-size: 14px;
    margin: 0 0 15px;
  }
  .privacy-policy {
    font-weight: 400;
    font-size: 10px;
  }
  .carusel-item-title {
    font-weight: 600;
    font-size: 28px;
    text-align: center;
    margin: 0 0 10px;
  }
  .carusel-item-description {
    font-size: 14px;
    text-align: center;
  }
  .el-button.el-button--primary {
    padding: 12px 30px !important;
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #fff;
  }
}
</style>
