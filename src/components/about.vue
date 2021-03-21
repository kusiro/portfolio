<template>
  <div id="about">
    <h1 class="title-text">About me</h1>
    <p class="content">I am a senior student in National Tsing Hua University, majoring in Industrial Engineering and enrolling in the program of Computer Science. I am interested in front-end development and have numbers of visual / UI design experience.</p>
    <h2 class="title-text sub">A Passionate Learner</h2>
    <p class="content">Aside from front-end development, I am also experienced in animation design and visual design, and have participated in designing Meichu Hackathon(2017/2018) key vision, and SITCON(2017/2018) opening animation. For my graduation topic, I successfully developed an AR application to improve semiconductor fabrication.</p>
    <div class="portfolio-img">
        <img src="../assets/img/portofilo.jpg" alt="">
    </div>
    <div class="tag-wrapper">
        <div class="tag">Front-end Develop</div>
        <div class="tag">Design</div>
        <div class="tag">Animation</div>
        <div class="tag">AR</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#about {
    min-height: 100vh;
    padding: 2em 6em;
    display: flex;
    flex-direction: column;
    position: relative;

    .title-text {
      color: $font-color-black;
      font-size: 64px;
      margin: 0;
      display: inline-block;
      margin: 0.6em 0;
      font-family: $font-family;
      display: block;
    }
    .sub {
        font-size: 32px;
        margin: 1.5em 0 0.5em 0;
    }
    .content {
      margin: 0;
      color: $font-color-black;
      font-size: 28px;
      font-family: $font-family;
      display: inline-block;
      max-width: 60%;
    }
    .portfolio-img {
        position: absolute;
        width: 20em;
        right: 4.5em; bottom: 27%;
        box-shadow: #0000007e 0 0 20px -5px;
        img {
            width: 100%;
        }
    }
    .tag-wrapper {
        display: flex;
        flex-wrap: wrap;
        width: 50%;
        margin-top: 5em;

        .tag {
            font-family: $font-family;
            padding: 0.5em;
            border-radius: 10px;
            margin: 0 0.3em 0 0;
            font-weight: 700;
            border: solid 2px $main-color-black;
            color: $font-color-black;
        }
    }
}
</style>
