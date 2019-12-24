<template>
  <div class="jiemicc-doc-content d-flex">
    <doc-content-menu></doc-content-menu>
    <doc-content-main></doc-content-main>
    <doc-content-demo></doc-content-demo>
  </div>
</template>

<script >
import DocContentDemo from './DocContentDemo.vue';
import DocContentMain from './DocContentMain.vue';
import DocContentMenu from './DocContentMenu.vue';

export default {
  name: 'DocContent',
  components: {
    DocContentDemo,
    DocContentMain,
    DocContentMenu,
  },
  props: {

  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
<style lang='scss' scoped>
.jiemicc-doc-content{
  position: relative;
}
</style>
