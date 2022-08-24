import enLocale from 'element-ui/lib/locale/lang/en'
export default {
  name:'English',
    dashboard:{
    calendar:'calendar',
    progress:'progress'
    },
    route:{
      员工:'employees'
    },
    ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
  }