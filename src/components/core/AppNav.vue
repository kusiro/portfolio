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
        <li class="enable"><router-link to="/About">About</router-link></li>
        <li class="enable"><router-link to="/Projects">Project</router-link></li>
        <li class="disable">Experence</li>
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
    .enable {
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
    .disable {
      position: relative;
      margin-left: 2em;
      opacity: 0.3;
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