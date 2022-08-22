<template>
  <el-dialog title="提示" :visible="AssignRoleVisible" width="30%">

  </el-dialog>
</template>
<script>
export default {
  name: '',
  data() {
    return {}
  },
  props: {
    AssignRoleVisible: {
      type: Boolean,
      required: true,
    },
  },
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  watch: {},
}
</script>
<style lang='less' scoped>
</style>
