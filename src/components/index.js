import PageTools from '@/components/PageTools'
import MyTest from '@/components/MyTest'
import UploadExcel from '@/components/UploadExcel'
import UploadImg from '@/components/UploadImg'
import Calendar from '@/components/Calendar'
import ToggleLang from '@/components/ToggleLang'
const components = [PageTools, MyTest, UploadExcel, UploadImg,Calendar, ToggleLang]
export default {
  install(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}
