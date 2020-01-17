<template>
  <div class="jiemicc-demo">
    <template v-if="!demoShow">
      <div class="jiemicc-demo-header ml-20 ">
        <img
          src="@/assets/images/jiemicc.svg"
          class="v-c mr-20"
          alt="logo"
          width="32px"
        >
        <span class="fs-30 v-c color-mobile">Jiemicc</span>
        <p class="color-mobile-light  fs-14 mt-10 mb-10">轻量、可靠的移动端 Vue 组件库</p>
      </div>
      <div class="jiemicc-demo-main">
        <menu-list
          :menuList="menuList"
          :isMobile="true"
          @linkToDemo="linkToDemo"
        ></menu-list>
      </div>
    </template>
    <router-view></router-view>
  </div>

</template>
<script>
import MenuList from '@/components/common/MenuList.vue';

export default {
  name: 'App',
  components: {
    MenuList,
  },
  data() {
    return {
      menuList: [
        {
          title: '基础组件',
          list: [
            {
              name: 'Button 按钮',
              link: 'button',
            }, {
              name: 'Icon 图标',
              link: 'icon',
            },
            {
              name: 'Cell 单元格',
              link: 'cell',
            },
            {
              name: 'Popup 弹出层',
              link: 'popup',
            },
          ],
        },
        {
          title: '表单组件',
          list: [{
            name: 'Radio 单选框',
            link: 'radio',
          }, {
            name: 'Checkbox 多选框',
            link: 'checkbox',
          }, {
            name: 'Field 多选框',
            link: 'field',
          }, {
            name: 'NumberKeyboard 数字键盘',
            link: 'number-keyboard',
          }, {
            name: 'PasswordInput 密码输入框',
            link: 'password-input',
          }, {
            name: 'Picker 选择器',
            link: 'picker',
          }],
        },
      ],
      demoShow: false,
    };
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
