<template>
  <v-app>
    <v-main>
      <img id="grid" src="./assets/img/layout_desktop.svg" alt="">

      <core-app-nav />

      <core-view />

      <core-footer />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    CoreAppNav: () => import('@/components/core/AppNav'),
    CoreView: () => import('@/components/core/View'),
    CoreFooter: () => import('@/components/core/Footer'),
  },
};
</script>

<style lang="scss">
  #grid {
    width: 100%;
    position: fixed;
    opacity: 0.5;
  }
</style>