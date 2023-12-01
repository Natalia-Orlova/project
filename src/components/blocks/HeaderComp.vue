<template>
  <div>
    <header id="home" class="header center">
      <div class="header__left">
        <a href="#" class="header__left_logo">
          <img :src="logo" alt="logo"/>
        </a>
        <a href="#" class="header__left_text">Interno</a>
      </div>

      <nav class="header__breadcrumbs">
        <a v-for="item in breadcrumbs" :key="item.id" href="#" class="header__breadcrumbs_link">{{item}}</a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',

  data () {
    return {
      logo: 'img/header_logo.svg',
      breadcrumbs: ['Home', 'Project', 'Blog']
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.header {
  margin-top: 53px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__left {
    display: flex;
    align-items: center;
    gap: 10px;

    &_text {
      color: #292f36;
      font-family: "DM Serif Display";
      font-size: 40px;
      font-weight: 400;
    }
  }

  &__breadcrumbs {
    width: 20%;
    display: flex;
    justify-content: space-between;

    &_link {
      color: #292f36;
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      transition: all 0.3s;
    }

    &_link:hover {
      color: #cda274;
    }
  }
}
</style>
