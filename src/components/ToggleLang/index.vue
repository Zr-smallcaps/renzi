<template>
  <el-dropdown @command='onCommand'>
    <span class="el-dropdown-link">
      语言
      <svg-icon style="color:#fff;font-size:20px" icon-class="language" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled='key===$i18n.locale' v-for="(value,key) in messages" :key="key" :command='key'>{{value.name}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
import { messages } from '@/I18n/index'
import Cookie from 'js-cookie'
export default {
  name: 'ToggleLang',
  data() {
    return {
      messages,
    }
  },
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    onCommand(val) {
      this.$i18n.locale = val
      this.$router.go(0)
      Cookie.set('lang', val)
    },
  },
  watch: {},
}
</script>
<style lang='less' scoped>
</style>