
<template>
  <div class="jiemicc-demo ">

    <demo-wrapper title="基础用法">
      <jiemicc-field
        v-model="field0"
        placeholder="请输入文字"
      ></jiemicc-field>
    </demo-wrapper>

    <demo-wrapper title="自定义类型">
      <jiemicc-cell-group clickable>
        <jiemicc-field
          label="文字"
          type="text"
          v-model="field1"
          placeholder="请输入文字"
        ></jiemicc-field>
        <jiemicc-field
          label="手机号码"
          type="tel"
          v-model="field2"
          placeholder="请输入手机号码"
        ></jiemicc-field>
        <jiemicc-field
          label="整数"
          type="digit"
          v-model="field3"
          placeholder="请输入整数"
        ></jiemicc-field>
        <jiemicc-field
          label="数字"
          type="number"
          maxlength="10"
          v-model="field4"
          placeholder="请输入数字"
        ></jiemicc-field>
        <jiemicc-field
          label="密码"

          show-limit-count
          type="password"
          v-model="field5"
          placeholder="请输入密码"
        ></jiemicc-field>
         <form action="">
            <jiemicc-field
          label="搜索"

          show-limit-count
          type="search"
          v-model="field5"
          placeholder="请输入密码"
        ></jiemicc-field>
         </form>

      </jiemicc-cell-group>
    </demo-wrapper>
     <demo-wrapper title="禁用输入框">
      <jiemicc-cell-group clickable>
        <jiemicc-field
          label="文本"
          type="text"
          v-model="field6"
          placeholder="输入框只读"
          readonly
        ></jiemicc-field>
        <jiemicc-field
          label="文本"
          type="text"
          v-model="field7"
          placeholder="输入框禁用"
          disabled
        ></jiemicc-field>
      </jiemicc-cell-group>
    </demo-wrapper>
     <demo-wrapper title="插入图标">
      <jiemicc-cell-group clickable>
        <jiemicc-field
          label="文本"
          type="text"
          v-model="field8"
          left-icon="aixin"
          placeholder="左侧图标"
        ></jiemicc-field>
        <jiemicc-field
          label="文本"
          type="text"
          v-model="field9"
          right-icon="ditu"
          placeholder="右侧图标"
        ></jiemicc-field>
         <jiemicc-field
          label="文本"
          type="text"
          v-model="field10"
          clearable
          placeholder="显示清除图标"
        ></jiemicc-field>
      </jiemicc-cell-group>
    </demo-wrapper>
     <demo-wrapper title="错误提示">
      <jiemicc-cell-group clickable>
        <jiemicc-field
          label="用户名"
          type="text"
          v-model="field11"
          left-icon="aixin"
          placeholder="请输入用户名"
          required
        ></jiemicc-field>
        <jiemicc-field
          label="手机号"
          type="text"
          v-model="field12"
          right-icon="ditu"
          placeholder="请输入手机号"
          required
          error-message="手机号格式有误"
        ></jiemicc-field>

      </jiemicc-cell-group>
    </demo-wrapper>
     <demo-wrapper title="插入按钮">
      <jiemicc-cell-group clickable>
        <jiemicc-field
          label="用户名"
          type="text"
          v-model="field13"
          left-icon="aixin"
          placeholder="请输入用户名"
          clearable
          class="insert-button"
        >
         <template #button>
             <jiemicc-button size="small" type="info" > 发送验证码</jiemicc-button>
         </template>

        </jiemicc-field>

      </jiemicc-cell-group>
    </demo-wrapper>
     <demo-wrapper title="文本域高度自适应">
        <jiemicc-field
          class="jiemicc-demo-textarea"
          label="留言"
          type="textarea"
          v-model="field14"
          left-icon="aixin"
          placeholder="请输入留言"
          rows="1"
          autosize
        ></jiemicc-field>

    </demo-wrapper>
     <demo-wrapper title="显示字数统计">
        <jiemicc-field
          class="jiemicc-demo-textarea"
          label="留言"
          type="textarea"
          v-model="field15"
          left-icon="aixin"
          placeholder="请输入留言"
          :autosize="{minHeight: 50,maxHeight:100}"
          show-limit-count
          maxlength='10'
        ></jiemicc-field>

    </demo-wrapper>


  </div>
</template>

<script >
import DemoWrapper from '@/components/common/DemoWrapper.vue';
import JiemiccCellGroup from '@/components/lib/cell/JiemiccCellGroup.vue';
import JiemiccButton from '@/components/lib/button/JiemiccButton.vue';
import JiemiccField from '@/components/lib/field/JiemiccField.vue';

export default {
  name: 'Demo',
  components: {
    DemoWrapper,
    JiemiccCellGroup,
    JiemiccButton,
    JiemiccField,
  },
  props: {},
  data() {
    return {
      field0: '123',
      field1: '',
      field2: '',
      field3: '',
      field4: '',
      field5: '',
      field6: '123',
      field7: '123',
      field8: '',
      field9: '123',
      field10: '123',
      field11: '',
      field12: '123',
      field13: '123',
      field14: '',
      field15: '',
    };
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.jiemicc-demo {
  min-height: calc(100vh - 100px);
  .jiemicc-demo-textarea{
     /deep/ .jiemicc-cell-main{
       align-items: flex-start;
     }
  }
  .insert-button /deep/ .jiemicc-cell-main{
    align-items: center;
  }
}
</style>
