import request from '@/utils/request'


export function getEmployeesSimpleApi() {
    return request({
      url: '/sys/user/simple'
    })
  }


export function getAddDepartmentApi(params) {
    return request({
      url: '/company/department',
      method:'POST',
      params
    })
  }
