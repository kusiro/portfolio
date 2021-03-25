<template>
  <div id="project">
    <h1 class="title-text">Project</h1>
    <div class="wrapper">
      <div class="feature-block">
        <div class="content">
          <h1 class="title">2018 梅竹黑客松網站</h1>
          <p class="describe">MeiChu Hackathon 2018 Official Website</p>
          <div class="link-wrapper">
            <div class="link">View website</div>
            <div class="link-icon"><img src="../assets/img/Github.png" alt=""></div>
          </div>
        </div>
        <div class="demo-image"><img src="../assets/img/meichuHackthon_2018.png" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project',
  data() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#project {
    min-height: 100vh;
    padding: 0 6em;
    display: flex;
    flex-direction: column;
      font-family: $font-family;

    .title-text {
      color: $font-color-black;
      font-size: 64px;
      margin: 0;
      display: inline-block;
      margin: 1.6em 0;
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;

      .feature-block {
        width: 100%;
        display: flex;
        border-top: solid 1em $main-color-black ;
        background-color: #d6cfb8;
        border-radius: 5px;
        box-shadow: 5px 5px 0 0 #6b6345;
        margin: 2em 0;
        padding: 1em;

        .content {
          flex: 4;
          min-height: 350px;
          position: relative;
          h1 {
            font-size: 32px;
            margin: 0;
          }
          p {
            margin-top: 2em;
          }

          .link-wrapper {
            position: absolute;
            bottom: 1em;
            left: 0;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;

            .link {
              border: solid 2px $main-color-black;
              font-weight: 500;
              color: $font-color-black;
              font-size: 16px;
              border-radius: 5px;
              padding: 0.8em;
              margin: 0 1em;
            }
            .link-icon {
              border-radius: 100%;
              height: 1.5em;
              position: relative;
              img {
                height: 100%;
              }
            }
          }
        }

        .demo-image {
          width: 40%;
          flex: 6;
          img { width: 100%;}
        }
      }
    }
}
</style>
