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
/**
 * 获取员工列表
 * @param {*} params {page ,size} 
 * @returns 
 */
  export function getEmployeesListApi(params) {
    return request({
      url: '/sys/user',
      params
    })
  }
  export function getDeleteEmployeesApi(id) {
    return request({
      url: '/sys/user/'+id,
      method:"DELETE"
    })
  }


/** **
 *  新增员工的接口
 * **/
 export function addEmployeeApi(data) {
  return request({
    method: 'post',
    url: '/sys/user',
    data
  })
}
/**
 * 
 * @param {*} data 员工数组
 * @returns 
 */
export function importEmployeeApi(data){
  return request({
    method:'POST',
    url:'/sys/user/batch',
    data
  })
}