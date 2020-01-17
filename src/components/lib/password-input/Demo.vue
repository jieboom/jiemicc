
<template>
  <div class="jiemicc-demo ">

    <demo-wrapper title="基础用法">
      <jiemicc-password-input
        ref="passwordInput1"
        :value="value1"
        info="最多6位数字"
        focused
        @foucs=" show1 = true"
      ></jiemicc-password-input>
      <jiemicc-number-keyboard
        v-model="value1"
        :show.sync="show1"
        maxlength="6"
        title="完成"
        @close="closeInput('passwordInput1')"
      ></jiemicc-number-keyboard>
    </demo-wrapper>
    <demo-wrapper title="自定义长度">
      <jiemicc-password-input
      ref="passwordInput2"
        :value="value2"
        length="4"
        margin="20px"
        @foucs=" show2 = true"
      ></jiemicc-password-input>
      <jiemicc-number-keyboard
        v-model="value2"
        maxlength="4"
        :show.sync="show2"
        title="完成"
        @close="closeInput('passwordInput2')"
      ></jiemicc-number-keyboard>
    </demo-wrapper>
     <demo-wrapper title="明文展示">
      <jiemicc-password-input
      ref="passwordInput3"
        value="123456"
        length="6"
        :cleartext="true"
      ></jiemicc-password-input>

    </demo-wrapper>
    <demo-wrapper title="错误提示">
      <jiemicc-password-input
      ref="passwordInput4"
        value="123456"
        length="6"
        errorInfo="密码错误"
      ></jiemicc-password-input>

    </demo-wrapper>


  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';
import JiemiccNumberKeyboard from '@/components/lib/number-keyboard/JiemiccNumberKeyboard.vue';
import JiemiccPasswordInput from '@/components/lib/password-input/JiemiccPasswordInput.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
    JiemiccNumberKeyboard,
    JiemiccPasswordInput,
  },
  props: {},
  data() {
    return {
      show1: true,
      value1: '123',
      show2: false,
      value2: '123',
    };
  },
  methods: {
    closeInput(ref) {
      this.$refs[ref].onBlur();
    },
  },
};
</script>
<style lang='scss' scoped>
.jiemicc-demo {
  min-height: calc(100vh - 100px);
  /deep/ .jiemcc-demo-wrapper__content {
    padding: 0 15px;
  }
}
</style>
