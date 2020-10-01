<template>
  <div class="outer-page-wrapper">
    <Header></Header>
    <div class="hero">
      <h2 class="hero-title">Delicious Code Editor Extensions</h2>
      <p>
        Every dev needs something sweet sometimes. Code Biscuits are in-editor
        annotations usually at the end of a closing tag/bracket/parenthisis/etc.
      </p>
    </div>
    <div class="example-wrapper">
      <h2>See it in action. Watch the end tags.</h2>
      <img src="../static/example.gif" />
    </div>
    <div class="downloads-wrapper">
      <h2>Downloads</h2>
      <ul class="downloads">
        <li class="download">
          <h3>HTML Biscuits</h3>
          <div class="buttons">
            <a
              class="marketplace-button"
              href="https://marketplace.visualstudio.com/items?itemName=CodeBiscuits.html-biscuits"
            >
              <img class="icon" src="../static/icon-download-dark.svg" />
              <span class="text">Marketplace</span>
            </a>
            <a
              class="github-button"
              href="https://github.com/code-biscuits/html-biscuits"
            >
              <img class="icon" src="../static/icon-code-fork-light.svg" />
              <span class="text">Github</span>
            </a>
          </div>
        </li>
        <li class="download"><h3>More coming soon...</h3></li>
      </ul>
    </div>
    <footer class="main-footer">
      <div>
        Icons used:
        <ul>
          <li>biscuit by Bartama Graphic from the Noun Project</li>
          <li>Download by IconMark from the Noun Project</li>
          <li>Code Fork by shashank singh from the Noun Project</li>
        </ul>
      </div>
      Made with Biscuits. 2020
    </footer>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  background: $light-text-color;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-shadow: 1px 1px 1px #000;
}

.outer-page-wrapper {
  padding-top: $header-height;
}

.hero {
  height: 400px;
  background: $dark-text-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;

  .hero-title {
    font-size: 42px;
    color: $light-text-color;
    font-weight: bold;
    margin: 0;
  }
  p {
    color: $light-text-color;
    margin-bottom: 100px;
    max-width: 420px;
  }
}

.example-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 42px;

  h2 {
    font-size: 32px;
    color: $dark-text-color;
    font-weight: bold;
    margin-top: 0;

    text-shadow: 1px 1px 1px $light-text-color;
  }

  img {
    border-radius: 16px;
    max-width: 100%;
    height: auto;
    margin: 0 -42px;
    min-width: 100%;
    max-width: 150%;

    @media (min-width: $breakpoint-md) {
      margin: 0;
      min-width: auto;
      max-width: 100%;
    }
  }
}

.downloads-wrapper {
  background: $secondary-background;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 42px;

  h2 {
    font-size: 32px;
    color: $light-text-color;
    font-weight: bold;
  }
}

.downloads {
  margin: 0;
  padding: 24px;

  .download {
    @include primary-box-shadow();

    border-radius: 42px;
    border: 2px solid $light-text-color;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 14px 20px;
    margin-bottom: 24px;
    background: $dark-text-color;

    width: 620px;
    max-width: calc(100vw - 48px);

    h3 {
      font-size: 28px;
      color: $light-text-color;
      margin: 0;
    }
  }
}

.main-footer {
  padding: 142px 42px 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.marketplace-button {
  @include primary-button();

  margin-right: 8px;
}
.github-button {
  @include secondary-button();
}
</style>

<script lang="ts">
import Vue from "vue";
import Header from "../components/header.vue";
export default Vue.extend({
  components: {
    Header,
  },
});
</script>
