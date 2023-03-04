<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import DuplicateNameSyncA from "./components/viewA/DuplicateNameSync.vue";
import DuplicateNameSyncB from "./components/viewB/DuplicateNameSync.vue";
import DuplicateNameSyncC from "./components/viewC/DuplicateNameSync.vue";

const components = [
  () => import("./components/viewA/DuplicateNameAsync.vue"),
  () => import("./components/viewB/DuplicateNameAsync.vue"),
  () => import("./components/viewC/DuplicateNameAsync.vue"),
  () => import("./components/viewA/NormalNameAsync.vue"),
];

console.log(components);
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
        <DuplicateNameSyncA />
        <DuplicateNameSyncB />
        <DuplicateNameSyncC />
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
