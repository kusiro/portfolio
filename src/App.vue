<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <img id="grid" src="./assets/img/layout_desktop.svg" alt="">
      <Intro />
      <About />
      <Project />
      <Work />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Intro from './components/intro';
import About from './components/about';
import Project from './components/project';
import Work from './components/work';

export default {
  name: 'App',

  components: {
    Intro,
    About,
    Project,
    Work,
  },

  data: () => ({
    
  }),
};
</script>

<style lang="scss">
  #grid {
    width: 100%;
    position: fixed;
    z-index: 999;
    opacity: 0.5;
  }
</style>