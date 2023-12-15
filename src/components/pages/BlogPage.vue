<template>
  <div>
    <BannerComp :banner-info="bannerInfo"/>
  </div>
</template>

<script>
import BannerComp from '../components/BannerComp.vue'

export default {
  name: 'BlogPage',

  data () {
    return {
      bannerInfo: {
        banner: 'img/blog_img_placeholder.jpg',
        bannerTitle: 'Articles & News',
        bannerLinks: ['Home', 'Blog']
      }
    }
  },

  mounted () {},

  methods: {},
  components: { BannerComp }
}
</script>

<style lang="scss" scoped></style>
