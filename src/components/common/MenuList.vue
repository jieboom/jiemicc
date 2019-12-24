<template>
  <div class="menu-list">
    <div
      class="doc-content-menu-container pt-20"
      :class="{'mobile-list':isMobile}"
      v-for="(menuUnit, index) in menuList"
      :key="index"
    >
      <p class="doc-content-menu__title py-10 pt-10 lh-30 fs-15">{{menuUnit.title}}</p>
      <ul class="doc-content-menu-wrapper">

        <router-link
          tag="li"
          :to="menu.link"
          class="doc-content-menu__item py-10 fs-13"
          v-for="(menu, index) in menuUnit.list"
          :key="index"
          @click="isMobile && $emit('linkToDemo')"
        >
          <span>{{menu.name}}</span>
          <span
            class="doc-content-menu__arrow"
            v-if="isMobile"
          > &gt;</span>
        </router-link>

      </ul>
    </div>
  </div>
</template>

<script >
export default {
  name: 'MenuList',
  props: {
    menuList: {
      type: Array,
    },
    type: {
      type: String,
      default: 'pc',
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
};
</script>
<style lang='scss' scoped>
.mobile-list {
  font-size: 14px;
  color: #323233;
  .doc-content-menu__title {
    padding-left: 20px;
    color: rgba(69, 90, 100, 0.6);
  }
  .doc-content-menu__item {
    padding-left: 20px;
    line-height: 20px;
    border-radius: 20px;
    background: #f7f8fa;
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  .doc-content-menu__arrow {
    color: rgb(182, 195, 210);
    float: right;
    margin-right: 10px;
    transform: scaleY(2);
  }
}
</style>
