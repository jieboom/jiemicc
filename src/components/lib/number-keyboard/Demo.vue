
<template>
  <div class="jiemicc-demo ">

    <demo-wrapper title="默认样式">

    </demo-wrapper>
  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
  },
  props: {},
  data() {
    return {

    };
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.jiemicc-demo {
  min-height: calc(100vh - 100px);
}
</style>
