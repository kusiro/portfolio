<template>
  <section id="about">
    <v-container class="block">
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          xl="4"
          lg="6"
          md="6"
          sm="8"
          xs="10"
          class="content-wrapper"
        >
          <h1 class="title-text"><b>A</b>bout me</h1>
          <p class="content">I am a senior student in National Tsing Hua University, majoring in Industrial Engineering and enrolling in the program of Computer Science. I am interested in front-end development and have numbers of visual / UI design experience.</p>
          <h2 class="title-text sub">A Passionate Learner</h2>
          <p class="content">Aside from front-end development, I am also experienced in animation design and visual design, and have participated in designing Meichu Hackathon(2017/2018) key vision, and SITCON(2017/2018) opening animation. For my graduation topic, I successfully developed an AR application to improve semiconductor fabrication.</p>
          
          <div class="tag-wrapper">
              <div class="tag">Front-end Develop</div>
              <div class="tag">Design</div>
              <div class="tag">Animation</div>
              <div class="tag">AR</div>
          </div>
        </v-col>
        <v-col
          xl="4"
          lg="4"
          md="4"
          sm="0"
          class="portfolio-img"
        >
            <img src="../assets/img/portofilo.jpg" alt="">
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped lang="scss">
@import '@/styles/main.scss';

#about {
  margin-top: 64px;
  min-height: 100vh;
  .block {
    min-height: 100vh;
    position: relative;
    flex-wrap: unset;
    display: flex;
    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 70%; height: 100%;
      top: 0;
      z-index: -1;
      background-color: #f1f4f6;
      @include phone-width {
        width: 100%;
        left: 0;
        top: 0;
      }
    }

    .title-text {
      font-size: 2.6em;
      @include laptop-width {
        font-size: 1.8em;
      }
      @include phone-width {
        font-size: 1.8em;
      }
      margin-bottom: 0.3em;
      b {
        border-bottom: solid 0.2em $pop-deep;
      }
    }

    p {
      margin-bottom: 2em;
      font-weight: 300;
      letter-spacing: 1.2px;
      font-size: 1em;
      max-width: 480px;
      @include laptop-width {
        font-size: 0.8em;
      }
      @include phone-width {
        font-size: 0.8em;
      }
    }
    .tag-wrapper {
      display: flex;
      .tag {
        padding: 1px 6px;
        font-weight: 300;
        border: solid 1px $pop-deep;
        margin-right: 0.6em;
        font-size: 1em;
        @include laptop-width {
          font-size: 0.8em;
        }
        @include phone-width {
          font-size: 0.7em;
        }
      }
    }
  }
  .portfolio-img {
    // max-height: 520px;
    @include laptop-width {
      // max-height: 480px;
    }
    @include phone-width {
      display: none;
    }
    img {
      width: 100%;
    }
  }
}

</style>
