<template>
  <div class="calendar">
    <el-row type="flex" justify="end">
      <el-col :span="5">
        <el-select v-model="currentYear" placeholder="请选择" @change="updateCalendar">
          <el-option v-for="item in years" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="5">
        <el-select v-model="currentMonth" placeholder="请选择" @change="updateCalendar">
          <el-option v-for="item in 12" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <div>
      <el-calendar v-model="currentDate">
        <template v-slot:dateCell='{date}'>
          <div class="cell-box">
            {{date.getDate()}}
            <span v-if='isWeek(date)'>休</span>
          </div>
        </template>
      </el-calendar>
    </div>

  </div>

</template>
<script>
export default {
  name: 'Calendar',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: 8,
      years: [],
      value: '',
      currentDate: new Date(),
    }
  },
  components: {},
  computed: {},
  created() {
    this.initCalendar()
  },
  mounted() {},
  methods: {
    initCalendar() {
      const data = new Date()
      this.currentYear = data.getFullYear()
      this.currentMonth = data.getMonth() + 1
      this.years = Array(11)
        .fill(this.currentYear - 5)
        .map((year, index) => {
          return year + index
        })
    },
    isWeek(date) {
      return date.getDay() === 0 || date.getDay() === 6
    },
    updateCalendar() {
      this.currentDate = this.currentYear + '-' + this.currentMonth
    },
  },
  watch: {},
}
</script>
<style lang='scss' scoped>
::v-deep .el-calendar {
  .el-calendar__header {
    display: none;
  }
  .el-calendar__header {
    border: none !important;
  }
}
</style>