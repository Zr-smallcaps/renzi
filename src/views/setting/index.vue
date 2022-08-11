<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="角色管理" name="first">
          <el-button type="primary" @click="addRoleFn">新增角色</el-button>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="序号" width="180">
            </el-table-column>
            <el-table-column prop="name" label="角色" width="180">
            </el-table-column>
            <el-table-column prop="description" label="描述">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="small" type="primary">分配权限</el-button>
                <el-button size="small" type="success">编辑</el-button>
                <el-button size="small" type="danger" @click="deleteRoleFn(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination layout="prev, pager, next ,sizes" :page-size='pageSize' @size-change="handleSizeChange" :page-sizes='[1,2,3,4,5]' :total="total" @current-change="handleCurrentChange">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <el-alert title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改" type="info" show-icon :closable="false">
          </el-alert>
          <el-form ref="form" label-width="80px">
            <el-form-item label="公司名称">
              <el-input v-model="CompanyInfo.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input v-model="CompanyInfo.companyAddress" disabled></el-input>
            </el-form-item>
            <el-form-item label="公司邮箱">
              <el-input v-model="CompanyInfo.mailbox" disabled></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input v-model="CompanyInfo.remarks" disabled></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 添加角色 -->
    <el-dialog title="新增角色" :visible="addDialogVisible" width="30%" @close='onClose'>
      <el-form ref="roleForm" :model="roleForm" label-width="80px" :rules="roleFormRules">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="roleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="description">
          <el-input v-model="roleForm.description"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="comfirmAddRole">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { addRolesApi, deleteRolesApi, getAllRolesApi } from '@/api/role'
import { getCompanyInfoApi } from '@/api/company'

export default {
  data() {
    return {
      activeName: 'first',
      tableData: [],
      pageSize: 3,
      total: 0,
      page: 1,
      addDialogVisible: false,
      roleForm: {
        name: '',
        description: '',
      },
      roleFormRules: {
        name: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },

          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        description: [
          { required: true, message: '请输入角色描述', trigger: 'blur' },
          {
            min: 5,
            max: 10,
            message: '长度在 5 到 10 个字符',
            trigger: 'blur',
          },
        ],
      },
      CompanyInfo: {},
    }
  },

  created() {
    this.getCurrentRoles()
    this.getCompanyInfo()
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    async getCurrentRoles() {
      const { rows, total } = await getAllRolesApi({
        page: this.page,
        pagesize: this.pageSize,
      })
      //  console.log(rows)
      this.total = total
      this.tableData = rows
    },
    handleCurrentChange(page) {
      this.page = page
      this.getCurrentRoles()
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.getCurrentRoles()
    },
    onClose() {
      this.addDialogVisible = false
      // 只能重置有表单校验的input框
      this.$refs.roleForm.resetFields()
      // 未表单校验的需要手动重置
      this.roleForm = {
        name: '',
        region: '',
      }
    },
    addRoleFn() {
      this.addDialogVisible = true
    },
    async comfirmAddRole() {
      await this.$refs.roleForm.validate(async (success, error) => {
        if (success) {
          try {
            const res = await addRolesApi(this.roleForm)
            this.$message.success('添加成功')
          } catch (error) {
            this.$message.error('添加失败')
          }
        }
      })
      this.addDialogVisible = false
    },
    async deleteRoleFn(value) {
      console.log(value)
      const res = await deleteRolesApi(value.id)
    },
    //获取公司用户信息
    async getCompanyInfo() {
      const res = await getCompanyInfoApi(
        this.$store.state.user.userInfo.companyId
      )
      this.CompanyInfo = res
      console.log(res)
    },
  },
}
</script>

<style scoped lang="less"></style>
