<template>
  <div>
    <div
        id="nav"
        v-scroll="onScroll"
        :color="!isScrolling ? 'transparent' : '#f1f4f6'"
        fixed
        flat
      >
      
      <ul class="bar-item">
        <li><NuxtLink to="/">Icon</NuxtLink></li>
      </ul>

      <ul class="bar-item">
        <li class="enable"><NuxtLink to="/About">About</NuxtLink></li>
        <li class="enable"><NuxtLink to="/Projects">Project</NuxtLink></li>
        <li class="enable"><NuxtLink to="Work-Experience">Experience</NuxtLink></li>
        <v-app-bar-nav-icon class="draw-icon" @click="drawer = true"></v-app-bar-nav-icon>
      </ul>
      <!-- Nav draw icon -->
    </div>
    <!-- Nav draw list -->
    <!-- <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        right
        height="100vh"
    >
      <ul class="bar-item draw-bar">
        <li class="enable"><router-link to="/About">About</router-link></li>
        <li class="enable"><router-link to="/Projects">Project</router-link></li>
        <li class="disable">Experience</li>
      </ul>
    </v-navigation-drawer> -->
  </div>
</template>

<script>
  
  export default {

    data: () => ({
      showLogo: false,
      isScrolling: false,
      drawer: false,
      group: null,
    }),

    methods: {
      
      onScroll () {
        let drawIcon = document.querySelector('.draw-icon')
        let barItem = document.querySelector('.bar-item')
        const offset = window.pageYOffset
        this.isScrolling = offset > 50
        this.showLogo = offset > 200
        if(this.isScrolling){
          drawIcon.classList.add('draw-icon-show')
          barItem.classList.add('bar-item-hidden')
        } else {
          drawIcon.classList.remove('draw-icon-show')
          barItem.classList.remove('bar-item-hidden')
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  justify-content: space-between;
  padding: 0 2em;
}
.bar-item {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  transition: .3s;
  .enable {
    position: relative;
    margin-left: 2em;

    &::before, &::after {
      content: '';
      position: absolute;
      transition: .3s cubic-bezier(0.3, 0, 0.1, 1);
      opacity: 0;
      background: #a79678;
    }
    &::before {
      width: 2px;
      height: 6px; 
      bottom: 30px;
      left: -8px;
    }
    &::after {
      width: 6px;
      height: 2px; 
      bottom: -3px;
      left: 30px;
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
  a {    
    color: #2c3e50;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    display: block;
    &::before, &::after {
      content: '';
      position: absolute;
      transition: .3s cubic-bezier(0.3, 0, 0.1, 1);
      opacity: 0;
      background: #a79678;
    }
    &::before {
      width: 2px;
      height: 6px; 
      top: 30px;
      right: -5px;
    }
    &::after {
      width: 6px;
      height: 2px; 
      top: -3px;
      right: 30px;
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
      color: #a79678!important;
    }
  }
}
#nav {
  .draw-icon {
    position: absolute;
    opacity: 0;
    right: 1.6em;
    transform: translateY(-50%);
  }
  .draw-icon-show {
    transform: translateY(0);
    opacity: 1;
  }
  .bar-item-hidden {
    opacity: 0;
    transform: translateY(50%);
  }
  a {
    color: #2c3e50;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    display: block;
  }
}
.draw-bar {
  flex-direction: column;
  li {
    margin: 1em 0;
  }
}

</style>