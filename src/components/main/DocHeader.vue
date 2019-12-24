<template>
  <div class="jiemicc-doc-header d-flex ai-center bg-header px-30 h-60">
    <a href="javascript:void()">
      <img
        src="@/assets/images/jiemicc.svg"
        class="v-c mr-10"
        alt="logo"
        width="24px"
      >
      <span class="fs-xl v-c color-white ">Jiemicc</span>
    </a>
    <input
      class="jiemicc-doc-header__search ml-140 w-200 b-none bg-none color-white fs-xs"
      type="text"
      placeholder="搜索文档..."
    >
  </div>

</template>

<script >
export default {
  name: 'DocHeader',
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.jiemicc-doc-header {
  .jiemicc-doc-header__search {
      &::placeholder{
          color: #fff;
      }
  }
}
</style>
