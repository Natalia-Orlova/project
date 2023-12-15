<template>
  <div>
    <BannerComp :banner-info="bannerInfo"/>
    <div class="slider center">
        <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :pagination="{ clickable: true }"
    >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
    </swiper>
    </div>
    <!-- <div v-for="item in projectDetails" :key="item.id" class="project-details center">
        <h2 class="project-details__title center">{{ item.name }}</h2>
        <p class='project-details__text center'>{{ item.desc1 }}</p>
        <p class='project-details__text center'>{{ item.desc2 }}</p>
        <img class="project-details__img" :src="item.image" alt="project_photo">
    </div> -->
  </div>
</template>

<script>
// import Swiper core and required modules
import { Pagination } from 'swiper/modules'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { mapGetters, mapActions } from 'vuex'
import BannerComp from '../components/BannerComp.vue'

export default {
  name: 'ProjectDetails',
  data () {
    return {
      bannerInfo: {
        banner: 'img/project_details_banner.jpg'
      }
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    ...mapActions(['fetchData'])
  },
  computed: {
    ...mapGetters(['projectDetails'])
  },
  components: { BannerComp, Swiper, SwiperSlide },
  setup () {
    return {
      modules: [Pagination]
    }
  }
}
</script>

<style lang="scss" scoped>
.project-details{
    position: relative;
    &__title{
      width: 658px;
      color: #292F36;
      font-family: DM Serif Display;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 62.5px */
      letter-spacing: 1px;
    }
    &__text{
      width: 658px;
      color: #4D5053;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
      margin-bottom: 32px;
    }
    &__img{
      border-radius: 50px;
      margin-bottom: 96px;
    }
}

#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
