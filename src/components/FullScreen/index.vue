<template>
  <div style="margin: 0 8px">
    <svg-icon @click="changeScreen" className="fillSreen" iconClass='fullscreen'></svg-icon>
  </div>
</template>
<script>
import ScreenFull from 'screenfull'
export default {
  name: '',
  data() {
    return {}
  },
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
       //   改变全屏
    changeScreen() {
      if (!ScreenFull.isEnabled) {
        // 此时全屏不可用
        this.$message.warning('此时全屏组件不可用')
        return
      }
      // document.documentElement.requestFullscreen()  原生js调用
      //   如果可用 就可以全屏
      ScreenFull.toggle()
  }
}
}

</script>
<style lang='scss' scoped>
.fillSreen {
  color: #fff;
}
</style>