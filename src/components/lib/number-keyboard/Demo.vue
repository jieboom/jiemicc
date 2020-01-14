
<template>
  <div class="jiemicc-demo ">

    <demo-wrapper title="默认样式">
       <jiemicc-number-keyboard title="完成"></jiemicc-number-keyboard>
    </demo-wrapper>
  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';
import JiemiccNumberKeyboard from '@/components/lib/number-keyboard/JiemiccNumberKeyboard.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
    JiemiccNumberKeyboard,
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
