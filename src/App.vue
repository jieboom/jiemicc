<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>


export default {
  name: 'App',
  created() {
    const mobileSystem = ['iphone', 'android '];
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = mobileSystem.some(system => userAgent.includes(system));

    const path = this.$route.fullPath;
    if (isMobile && !/mobile/.test(path)) {
      this.$router.push(`/mobile${path}`);
    }
    if (!isMobile && /mobile/.test(path)) {
      this.$router.push(path.replace(/mobile\/|mobile/, ''));
    }
    window.overIndex = 2019;
  },
  methods: {
    linkToDemo() {
      this.demoShow = true;
    },
  },
};
</script>
<style scoped lang="scss">
#app {
  .jiemicc-doc {
    max-width: 1700px;
    min-width: 1120px;
    margin: auto;
  }
  .jiemicc-demo {
    min-height: 100vh;
    padding: 20px;
    padding-top: 46px;
    background: #fff;
  }
}
</style>
