<template>
  <header class="main-header" v-bind:class="{ scrolled }">
    <h1 class="title">
      <span class="icon-wrapper">
        <img class="icon" src="~/assets/images/icon-biscuits.svg" />
      </span>
      Code Biscuits
    </h1>
    <div class="cta-buttons">
      <a
        class="marketplace-button"
        href="https://marketplace.visualstudio.com/publishers/CodeBiscuits"
      >
        <img class="icon" src="~/assets/images/icon-download-dark.svg" />
        <span class="text">Marketplace</span>
      </a>
      <a class="github-button" href="https://github.com/code-biscuits">
        <img class="icon" src="~/assets/images/icon-code-fork-light.svg" />
        <span class="text">Github</span>
      </a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/variables";
@import "~/assets/styles/mixins";

.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: $dark-text-color;
  height: $header-height;

  .title {
    color: $light-text-color;
    margin: 0;
    padding: 0;
    display: inline-flex;
    align-items: center;

    .icon-wrapper {
      border-radius: 100px;
      background: $light-text-color;
      width: 42px;
      height: 42px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding-top: 6px;
      margin-right: 8px;

      img {
        width: auto;
        height: 100%;
      }
    }
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 400px;
    right: calc(50vw - 68px);
    transition: all 0.3s;

    @media (min-width: $breakpoint-md) {
      right: calc(50vw - 168px);
    }
  }

  &.scrolled {
    .cta-buttons {
      top: 16px;
      right: 16px;
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
    this.handleScroll(window.scrollY);
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  },
  data: function() {
    return {
      scrolled: false,
    };
  },
  methods: {
    handleScroll(scrollPosition) {
      this.scrolled = window.scrollY > 70;
    },
  },
});
</script>
