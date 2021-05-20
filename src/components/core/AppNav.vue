<template>
      <v-app-bar
        v-scroll="onScroll"
        :color="!isScrolling ? 'transparent' : 'white'"
        fixed
        flat
      >

      <v-slide-x-transition>
        <v-toolbar-title>Soon Chun</v-toolbar-title>
      </v-slide-x-transition>

      <v-spacer></v-spacer>

      <v-btn text>About</v-btn>
      <v-btn text>Intro</v-btn>
      <v-btn text>Project</v-btn>
      <v-btn text>Experence</v-btn>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'CoreAppBar',


    data: () => ({
      showLogo: false,
      isScrolling: false,
    }),

    methods: {
      onScroll () {
        const offset = window.pageYOffset
        this.isScrolling = offset > 50
        this.showLogo = offset > 200
      },
    },
  }
</script>