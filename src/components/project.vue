<template>
  <div id="project">
    <h1 class="title-text">Project</h1>
    <div class="wrapper">
      <div class="feature-block" v-for="project in projects" v-bind:key="project.id">
        <div class="content">
          <h1 class="title">{{ project.title }}</h1>
          <ul class="describe-section">
            <li class="describe" v-for="describe in project.describes" v-bind:key="describe.id">
              {{ describe }}
            </li>
          </ul>
          <div class="link-wrapper">
            <a class="link" v-for="link in project.links" v-bind:key="link.id" target="_blank" :href="link.link">{{ link.linkName }}</a>
          </div>
        </div>
        <div class="demo-image">
          <div class="image-wrapper">
            <img v-bind:src="project.image" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ar_pdf from '/src/assets/pdf/AR_publication.pdf';
export default {
  name: 'project',
  data() {
    return {
      projects: [
        {
          title: "2017 / 2018 Meichu Hackathon",
          describes: [
            "MeiChu Hackathon 2017 / 2018 Official Website.",
            "Design and develop the website.",
            "Use react for 2017 website",
            "Use vue for 2018 website"
          ],
          links: [
            {
              linkName: "2018 website",
              link: "https://meichu-hackathon.github.io/MC_Hackathon-2018/#/"
            }, {
              linkName: "2017 website",
              link: "https://kusiro.github.io/MJ_Hackathon/"
            }
          ],
          image: require('/src/assets/img/meichuHackthon_2018.png'),
        },
        {
          title: "半導體巡檢智慧系統",
          describe: "An AR application to improve semiconductor fabrication.",
          describes: [
            "Run on microsoft Hololens 2",
            "Design and develop the website.",
            "Use react for 2017 website",
            "C# / Python / unity / 3D modling"
          ],
          links: [
            {
              linkName: "pdf",
              link: ar_pdf,
            },
            {
              linkName: "code",
              link: ""
            }
          ],
          image: require('/src/assets/img/AR.jpg')
        },
        {
          title: "食安實驗平台聯盟",
          describe: "MeiChu Hackathon 2018 Official Website",
          links: [
            {
              linkName: "2018 website",
              link: "https://meichu-hackathon.github.io/MC_Hackathon-2018/#/"
            }, {
              linkName: "2017 website",
              link: ""
            }
          ],
          image: "Meichu_2108"
        },
        {
          title: "2017 / 2018 SITCON 開場動畫",
          describe: "MeiChu Hackathon 2018 Official Website",
          links: [
            {
              linkName: "2018 website",
              link: "https://meichu-hackathon.github.io/MC_Hackathon-2018/#/"
            }, {
              linkName: "2017 website",
              link: ""
            }
          ],
          image: "Meichu_2108"
        },
      ]
    }
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
        align-items: center;
        background-color: $main-color-light;
        border-radius: 1.5px;
        box-shadow: 5px 5px 0 0 $main-color-shadow;
        margin: 2em 0;

        .content {
          flex: 3;
          min-height: 350px;
          height: 80%;
          position: relative;
          margin-right: 1em;
          padding: 1em;

          h1 {
            font-size: 1.5em;
            margin: 0;
          }
          .describe-section {
            margin-top: 2em;
            padding-left: 1em;
            list-style: circle;

            .describe {
              margin: .8em 0;
            }
          }

          .link-wrapper {
            position: absolute;
            bottom: 1em;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;

            a {
              text-decoration: none;
              color: $font-color-black;
              font-size: .8em;
            }

            .link {
              border: solid 2px $main-color-black;
              font-weight: 500;
              border-radius: 5px;
              padding: 0.6em;
              margin-right: .6em;
              transition: 0.1s;

              &:hover {
                color: $font-color-white;
                background-color: $main-color-black;
              }
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
          flex: 7;
          position: relative;

          .image-wrapper {
            height: 0;
            padding-top: 56.25%;
          }

          img {
            width: 100%;
            position: absolute;
            top: 50%;left: -1em;
            transform: translateY(-50%);
          }
        }
      }
    }
}
</style>
