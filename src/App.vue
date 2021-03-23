<template>
  <div>
    <div id="sidebar">
      <div class="about">
        About
      </div>
      <div class="work">
        Work Experience
      </div>
      <div class="project">
        Projects
      </div>
      <div class="contact">
        Contact
      </div>
    </div>
    <div id="wrapper">
      <Intro />
      <About />
      <Work />
      <Project />
      <Contact />
    </div>
    <!-- <div class="bg-pattern"></div> -->
  </div>
</template>

<script>
import intro from './components/intro';
import about from './components/about';
import work from './components/work';
import project from './components/project';
import contact from './components/contact';

export default {
  name: 'App',
  components: {
    Intro: intro,
    About: about,
    Work: work,
    Project: project,
    Contact: contact
  }
}
</script>

<style lang="scss">

* {
  box-sizing: border-box;
}
html, body {
  margin: 0; padding: 0;
}
#sidebar {
  height: 100vh; width: 20.5%;
  background-color: $main-color-white;
  padding: 2em;
  text-align: right;
  position: fixed;
  color: $font-color-black;
  font-size: 20px;
  left: 0;
  font-family: $font-family;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  box-shadow: $font-color-black 0px 0px 10px 0px;;

  div {
    right: 0; position: relative;
    margin: 1.5em 0;
    padding: 0.4em 0;
    border-bottom: solid 2px $font-color-black;
;
    width: 80%;
    cursor: pointer;
  }
}
#wrapper {
  background-color: $main-color-white;
  background-size: 20px 20px;
  margin-left: 20.5%;
}

.bg-pattern {
  opacity: 0.3;
  top: 0;
  width: 100%;
  position: fixed;
  height: 100%;
  z-index: 10000;
  user-select: none;

  // pattern
  background-image: radial-gradient($main-color-black 1px,transparent 1px);
  background-size: 15px 15px;

}
</style>
