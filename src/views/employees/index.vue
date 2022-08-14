<template>
  <div class="dashboard-container">
    <div class="app-container">
      <PageTools>
        <span slot="left-tag">共166条记录</span>
        <template slot="right">
          <el-button size="small" type="warning" @click="$router.push('/import')">导入</el-button>
          <el-button size="small" type="danger">导出</el-button>
          <el-button size="small" type="primary" @click="addEmployees">新增员工</el-button>
        </template>
      </PageTools>
      <!-- 放置表格和分页 -->
      <el-card>
        <el-table border :data="emloyeesList">
          <el-table-column label="序号" type="index" sortable="" />
          <el-table-column label="姓名" prop="username" sortable="" />
          <el-table-column label="员工">
            <template slot-scope="{row}">
              <img v-imgError='require("@/assets/smallcaps.jpg")' :style='{width:"100px",height:"100px",borderRadius:"50%"}' :src="row.staffPhoto" alt="">
            </template>
          </el-table-column>

          <el-table-column label="工号" prop="workNumber" sortable="" />
          <el-table-column label="聘用形式" prop="formOfEmployment" :formatter="formatterOfEmployment" sortable="" />
          <el-table-column label="部门" prop="departmentName" sortable="" />
          <el-table-column label="入职时间" sortable="">
            <template slot-scope="{row}">
              {{row.timeOfEntry|fromatTime}}
            </template>
          </el-table-column>
          <el-table-column label="账户状态" prop="enableState" sortable="">
            <template slot-scope="{row}">
              <el-switch :value="row.enableState===1" active-color="#13ce66" inactive-color="#ff4949">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" sortable="" fixed="right" width="280">
            <template slot-scope="{row}">
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">转正</el-button>
              <el-button type="text" size="small">调岗</el-button>
              <el-button type="text" size="small">离职</el-button>
              <el-button type="text" size="small">角色</el-button>
              <el-button type="text" size="small" @click="removeEmployee(row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页组件 -->
        <el-row type="flex" justify="center" align="middle" style="height: 60px">
          <el-pagination layout="prev, pager, next" :total="total" :page-size="pages.size" @current-change="changePage" />
        </el-row>
      </el-card>
    </div>
    <AddEmployees :addEmployeesVisible.sync='addEmployeesVisible' @add-success='getEmployeesList'></AddEmployees>
  </div>
</template>

<script>
import { getEmployeesListApi, getDeleteEmployeesApi } from '@/api/employees'
import emloyees from '@/constant/employees'
import AddEmployees from './components/AddEmployees.vue'
export default {
  data() {
    return {
      emloyeesList: [],
      pages: {
        page: 1,
        size: 10,
      },
      total: 0,
      addEmployeesVisible: false,
    }
  },
  components: { AddEmployees },
  created() {
    this.getEmployeesList()
  },

  methods: {
    async getEmployeesList() {
      const { rows, total } = await getEmployeesListApi(this.pages)
      this.emloyeesList = rows
      this.total = total
    },
    changePage(page) {
      this.pages.page = page
      this.getEmployeesList()
    },
    formatterOfEmployment(row, column, cellValue, index) {
      const formatter = emloyees.hireType.find((item) => {
        return item.id === cellValue
      })
      return formatter ? formatter.value : '未知'
    },
    async removeEmployee(id) {
      await this.$confirm('确认删除吗')
      await getDeleteEmployeesApi(id)
      this.$message.success('删除成功')
    },
    addEmployees() {
      this.addEmployeesVisible = true
    },
  },
}
</script>

<style scoped lang="less">
</style>
