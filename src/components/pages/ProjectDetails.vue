<template>
  <div>
    <HeaderComp/>
    <BannerComp :banner-info="bannerInfo"/>
    <FooterComp/>
  </div>
</template>

<script>
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
  mounted () { },
  methods: {},
  components: { HeaderComp, FooterComp, BannerComp }
}
</script>

<style lang="scss" scoped></style>
