
<template>
  <div class="jiemicc-demo ">

    <demo-wrapper title="基础用法">
      <jiemicc-picker></jiemicc-picker>
    </demo-wrapper>

  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';
import JiemiccPopup from '@/components/lib/popup/JiemiccPopup.vue';
import JiemiccPicker from '@/components/lib/picker/JiemiccPicker.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
    JiemiccPopup,
    JiemiccPicker,
  },
  props: {},
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>
<style lang='scss' scoped>
.jiemicc-demo {
  min-height: calc(100vh - 100px);

}
</style>
