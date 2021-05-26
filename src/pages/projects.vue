<template>
  <section id="projects">
    <v-container class="main-content">

      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" xl="8" lg="8" md="8" sm="6">
          <h1 class="title-text"><b>P</b>rojects</h1>
        </v-col>
        <v-col cols="12" xl="10" lg="9" md="8" sm="8" class="block-wrapper">
          <div v-for="project in projects" v-bind:key="project.id">
            <a class="feature-block" target="_blank" v-bind:href="project.link">
              <v-row align="center" justify="center">
                <v-col xl="4" lg="6" md="6" sm="8" cols="8"  class="project-content">
                  <h1 class="project-title">{{ project.title }}</h1>
                  <h2 class="project-subtitle">{{ project.subtitle }}</h2>
                  <div class="descriptions-wrapper">
                    <p v-for="description in project.descriptions" v-bind:key="description.id">{{ description }}</p>
                  </div>
                  <div class="spacer"></div>
                  <div class="tag-wrapper">
                    <div class="tag" v-for="tag in project.tags" v-bind:key="tag.id">{{ tag }}</div>
                  </div>
                  <!-- <div class="link-wrapper">
                    <a class="link" v-for="link in project.links" v-bind:key="link.id" target="_blank" :href="link.link">{{ link.linkName }}</a>
                  </div> -->
                </v-col>
                <v-col xl="6" lg="6" md="6" sm="8" cols="8"  class="image-wrapper">
                  <img v-bind:src="project.image" alt="">
                </v-col>
              </v-row>
            </a>
          </div>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script>
import ar_pdf from '/src/assets/pdf/AR_publication.pdf';
export default {
  name: 'project',
  data() {
    return {
      projects: [
        {
          title: "MeiChu Hackathon",
          subtitle: "2018",
          descriptions: [
            "MeiChu Hackathon 2018 Official Website.",
          ],
          tags: ["vue", "google api"],
          link: "https://meichu-hackathon.github.io/MC_Hackathon-2018/#/",
          image: require('/src/assets/img/mockup/Meichu.png'),
        },
        {
          title: "Meichu Hackathon",
          subtitle: "2017",
          descriptions: [
            "MeiChu Hackathon 2017Official Website.",
          ],
          tags: ["React", "Angular backend"],
          link: "https://kusiro.github.io/MJ_Hackathon/",
          image: require('/src/assets/img/mockup/meichu2017.png'),
        },
        {
          title: "2018 SITCON",
          descriptions: [
            "2018 SITCON official website",
            "Develop the website with other member in SITCON's volunteer group"
          ],
          link: "https://sitcon.org/2018/#/",
          tags: ["github", "vue"],
          image: require('/src/assets/img/mockup/sitcon.png')
        },
        {
          title: "ElsaLab",
          descriptions: ["NTHU ElsaLab", ""],
          link: "https://elsalab.ai/",
          tags: ["react", "Django backend"],
          image: require('/src/assets/img/mockup/elsalab.png')
        },
        {
          title: "半導體巡檢智慧系統",
          descriptions: [
            "Run on microsoft Hololens 2",
          ],
          link: ar_pdf,
          tags: ["C#", "Python", "unity", "3D modling"],
          image: require('/src/assets/img/AR.jpg')
        },
        {
          title: "SITCON Animation",
          subtitle: "2018",
          descriptions: ["SITCON event Opening animation"],
          link: "https://youtu.be/U_7qPitWoAo",
          tags: ["After effects", "Blender3D"],
          image: require('/src/assets/img/sitcon2018Opening.png')
        },
        {
          title: "SITCON Animation",
          subtitle: "2017",
          descriptions: ["SITCON event Opening animation"],
          link: "https://youtu.be/MWwM2_jvXHU",
          tags: ["After effects", "Blender3D"],
          image: require('/src/assets/img/sitcon2017Opening.png')
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/main.scss';
#projects {
  min-height: 100vh;
  margin-top: 64px;
}

.main-content {

  .title-text {
    font-size: 2.8em;
    margin-top: 2em;
    b {
      border-bottom: solid 0.2em #a79678;
    }
  }

  .block-wrapper {
    .feature-block {
      text-decoration: none;
      color: $main-color-dark;
      transition: .3s;
      cursor: pointer;
      display: flex;
      margin-top: 10em;
      min-height: 480px;
      position: relative;
      &::before {
        content: '';
        width: 65%; height: 100%;
        z-index: -1;
        position: absolute;
        top: -10%; left: 10%;
        background-color: #f1f4f6;
        @include phone-width {
          width: 80%;
        }
      }

      .project-content {
        transition: 0.3s;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 400px;
        @include phone-width {
          height: 280px;
        }
        .project-title {
          font-size: 2em;
          margin: 0;
          @include laptop-width {
            font-size: 1.8em;
          }
          @include phone-width {
            font-size: 1.6em;
          }
        }
        .project-subtitle {
          font-weight: 500;
          font-size: 1.6em;
          margin-top: -10px;
          @include laptop-width {
            font-size: 1.4em;
          }
          @include phone-width {
            font-size: 1.3em;
          }
        }
        .descriptions-wrapper {
          margin-top: 1em;
          p {
            font-size: 1.2em;
            letter-spacing: 1px;
            font-weight: 300;
            @include laptop-width {
              font-size: 1em;
            }
            @include phone-width {
              font-size: 0.9em;
            }
          }
        }
        .tag-wrapper  {
          display: flex;
          .tag {
            padding: 2px 8px;
            margin-right: 0.6em;
            font-weight: 300;
            border: solid 1px $pop-deep;
          }
        }
      }

      .image-wrapper {
        transition: .3s;
        @include phone-width {
          margin-top: 1.6em;
        }
        img {
          width: 100%;
        }
      }

      &:hover {
        .project-content {
          transform: scale(1.05);
        }
        .image-wrapper {
          transform: translateX(3%);
        }
      }
    }
  }
}
</style>
