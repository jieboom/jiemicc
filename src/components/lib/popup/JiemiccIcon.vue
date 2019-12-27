<template>
    <div >

    </div>
</template>

<script >
export default {
  name: '',
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#000',
    },
    size: {
      type: String,
      default: '16px',
    },
    dot: {
      type: Boolean,
      default: false,
    },
    info: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      nameClass: `icon-${this.name}`,
      colorStyle: this.color,
      fsStyle: Number(this.size) ? `${this.size}px` : this.size,
      tipClass: this.dot || this.info ? 'jiemicc-icon-tip' : '',
    };
  },
  mounted() {
    if (this.info) {
      this.$refs.icon.style.setProperty('--content', `'${this.info}'`);
      this.$refs.icon.style.setProperty('--min-width', '10px');
    }
  },
  methods: {

  },
};
</script>
<style lang='scss' scoped>
.jiemicc-icon-tip{
  position: relative;

   &::after{
     position: absolute;
     display: inline-block;
     content: var(--content);
     left: 100%;
     bottom: 100%;
     min-width:var(--min-width);
     min-height: 6px;

     line-height: 14px;
     padding: 0 2px;
     text-align: center;
     color: #fff;
     background: red;
     font-size: 12px;
     border-radius: 1em;
     vertical-align: middle;
     font-family:  PingFang SC, Helvetica Neue, Arial, sans-serif;
   }
}
</style>
