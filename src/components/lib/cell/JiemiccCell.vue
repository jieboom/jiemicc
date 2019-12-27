<template>
  <div class="jiemicc-cell" ref="cell" style="--size: 14px;">
      <div class="jiemicc-cell-main d-flex jc-between">
          <span class="jiemicc-cell-main__title">
              <jiemicc-icon v-if="icon" :name="icon" :size="sizeMap[size]" style="margin-right: 5px;"></jiemicc-icon>
              <span v-if="title">{{title}}</span>
          </span>
          <span class="jiemicc-cell-main__value">
              {{value}}
          </span>
      </div>
      <div class="jiemicc-cell-desc" v-if="desc">
          {{desc}}
      </div>
  </div>
</template>

<script >
import JiemiccIcon from '@/components/lib/icon/JiemiccIcon.vue';

export default {
  name: 'JiemiccCell',
  components: {
    JiemiccIcon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'normal',
    },
    icon: {
      type: String,
      default: '',
    },
    isLink: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sizeMap: {
        normal: '14',
        large: '15',
      },
    };
  },
  mounted() {
    this.$refs.cell.style.setProperty('--size', `${this.sizeMap[this.size]}px`);
  },
  methods: {

  },
};
</script>
<style lang='scss' scoped>

.jiemicc-cell{

    padding: 10px 0 10px 15px ;
    font-size: var(--size);
    background: #fff;
    overflow: hidden;
    .jiemicc-cell-main{

        .jiemicc-cell-main__value{
            color: #969799;
            max-width: 70%;
            margin-right: 15px;
            font-size: 14px;
        }
    }
    .jiemicc-cell-desc{
         margin-top: 5px;
        color: #969799;
    }
}
</style>
