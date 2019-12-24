<template>
  <div
    class="doc-content-menu pl-30  color-left-tree sticky"
    :class="{'menu-top':top}"
  >
    <menu-list :menuList="menuList"></menu-list>
  </div>
</template>

<script >
import MenuList from '@/components/common/MenuList.vue';

export default {
  name: 'DocContentMenu',
  components: {
    MenuList,
  },
  data() {
    return {
      menuList: [
        {
          title: '开发指南',
          list: new Array(5).fill({
            name: '介绍',
            link: '/introduce',
          }),
        },
        {
          title: '基础组件',
          list: new Array(5).fill({
            name: '按钮',
            link: '/button',
          }),
        },
        {
          title: '表单组件',
          list: new Array(5).fill({
            name: '复选框',
            link: '/checkbox',
          }),
        },
      ],
      top: false,
    };
  },
  mounted() {
    window.addEventListener(
      'scroll',
      // eslint-disable-next-line no-return-assign
      () => (this.top = window.document.body.scrollTop >= 60),
    );
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.doc-content-menu {
  width: 214px;
  position: fixed;
  top: 60px;
  bottom: 0;
  background: #fff;
  overflow: auto;
  &.menu-top{
    top: 0;
  }
  &:hover::-webkit-scrollbar {
    display: block;
  }
  &::-webkit-scrollbar {
    display: none;
    width: 6px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    width: 6px;
    background: rgba(69, 90, 100, 0.2);
    border-radius: 3px;
  }
}
</style>
