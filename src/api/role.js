import request from '@/utils/request'

// 获取所有角色列表
export function getAllRolesApi (params){
    return request({
        url:'/sys/role',
        params
    })
}

// 根据ID删除角色
export function deleteRolesApi (id){
    return request({
        url:`/sys/role/${id}`,
        method:'DELETE',
        
    })
}
//添加角色
export function addRolesApi (data){
    return request({
        url:`/sys/role`,
        method:'POST',
        data
    })
}