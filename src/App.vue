<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import AViewSync from "./components/AView/AViewSync.vue";
import BViewSync from "./components/BView/BViewSync.vue";
import CViewSync from "./components/CView/CViewSync.vue";

const components = [
  () => import("./components/AView/AViewAsync.vue"),
  () => import("./components/BView/BViewAsync.vue"),
  () => import("./components/CView/CViewAsync.vue"),
];

let i = 0;
setInterval(() => {
  if (i < components.length) {
    components[i]();
    ++i;
  }
}, 1000);
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <template v-if="false">
        <AViewSync />
        <BViewSync />
        <CViewSync />
      </template>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
