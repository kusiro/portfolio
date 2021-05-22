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
          ],
          image: require('/src/assets/img/AR.jpg')
        },
        {
          title: "2017 / 2018 SITCON 開場動畫",
          describe: "SITCON Opening animation",
          links: [
            {
              linkName: "2018 Animation",
              link: "https://youtu.be/U_7qPitWoAo"
            }, {
              linkName: "2017 Animation",
              link: "https://youtu.be/MWwM2_jvXHU"
            }
          ],
          image: require('/src/assets/img/sitcon.png')
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
