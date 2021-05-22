<template>
      <v-app-bar
        id="nav"
        v-scroll="onScroll"
        :color="!isScrolling ? 'transparent' : 'white'"
        fixed
        flat
      >

      <v-slide-x-transition>
        <v-toolbar-title><router-link to="/">Soon Chun</router-link></v-toolbar-title>
      </v-slide-x-transition>

      <v-spacer></v-spacer>
      <ul>
        <li><router-link to="/About">About</router-link></li>
        <li><router-link to="/Project">Project</router-link></li>
        <li><router-link to="/Work-Experence">Experence</router-link></li>
      </ul>
      
      
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

<style lang="scss" scoped>
@import '@/styles/main.scss';
#nav {

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: 2em;
    padding: 0;
    li {
      position: relative;
      margin-left: 2em;

      &::before, &::after {
        content: '';
        position: absolute;
        transition: .3s cubic-bezier(0.9, 0, 0.1, 1);
        opacity: 0;
        background: #a79678;
      }
      &::before {
        width: 2px;
        height: 6px; 
        bottom: 10px;
        left: -8px;
      }
      &::after {
        width: 6px;
        height: 2px; 
        bottom: -3px;
        left: 10px;
      }

      &:hover {
        &::before, &::after {
          opacity: 1;
          bottom: -3px;
          left: -8px;
        }
      }
    }
  }

  a {
    text-decoration: none;
    font-family: $font-family;
    font-weight: normal;
    display: block;
    color: #2c3e50;
    
    &::before, &::after {
      content: '';
      position: absolute;
      transition: .3s cubic-bezier(0.9, 0, 0.1, 1);
      opacity: 0;
      background: #a79678;
    }
    &::before {
      width: 2px;
      height: 6px; 
      top: 10px;
      right: -5px;
    }
    &::after {
      width: 6px;
      height: 2px; 
      top: -3px;
      right: 10px;
    }

    &:hover {
      &::before, &::after {
        opacity: 1;
        top: -3px;
        right: -5px;
      }
    }

    &.router-link-exact-active {
      transition: .3s;
      color: #a79678;
    }
  }
}
</style>