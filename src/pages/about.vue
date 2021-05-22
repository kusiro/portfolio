<template>
  <section id="about">
    <article>
      <div class="content-wrapper">
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
      </div>
      <div class="portfolio-img">
          <img src="../assets/img/portofilo.jpg" alt="">
      </div>
    </article>
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
  article {
    max-width: 1200px;
    display: flex;
    align-items: center;
    min-height: 100vh;
    position: relative;
    width: 100%;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;

    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 100%; height: 100%;
      top: 5%; right: 25%;
      z-index: -1;
      background-color: #f1f4f6;
    }

    .title-text {
      font-size: 2.8em;
      margin-bottom: 0.3em;
      b {
        border-bottom: solid 0.2em $pop-deep;
      }
    }

    p {
      margin-bottom: 2em;
      font-weight: 300;
      letter-spacing: 1.2px;
      font-size: 0.8em;
    }
    .tag-wrapper {
      display: flex;
      .tag {
        padding: 1px 6px;
        font-weight: 300;
        border: solid 1px $pop-deep;
        margin-right: 0.6em;
      }
    }
  }
  .portfolio-img {
    height: 520px;
    margin-left: 180px;
    img {
      height: 100%;
    }
  }
}

</style>
