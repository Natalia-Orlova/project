<template>
  <div>
    <HeaderComp/>
    <BannerComp :banner-info="bannerInfo"/>
    <div v-for="item in projectDetails" :key="item.id" class="project-details center">
        <h2 class="project-details__title center">{{ item.name }}</h2>
        <p class='project-details__text center'>{{ item.desc1 }}</p>
        <p class='project-details__text center'>{{ item.desc2 }}</p>
        <img class="project-details__img" :src="item.image" alt="project_photo">
    </div>
    <FooterComp/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FooterComp from '../blocks/FooterComp.vue'
import HeaderComp from '../blocks/HeaderComp.vue'
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
  components: { HeaderComp, FooterComp, BannerComp }
}
</script>

<style lang="scss" scoped>
.project-details{
    margin-bottom: 96px;
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
    }
}
</style>
