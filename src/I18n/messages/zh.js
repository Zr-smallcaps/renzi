
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
export default {
  name:'简体中文',
  dashboard:{
  calendar:'工作日历',
  progress:'工作流程'
  },
  route:{
    员工:'员工'
  },
  ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
}