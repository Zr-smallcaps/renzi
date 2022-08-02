import {login} from '@/api/user';

const getDefaultState = () => {
  return {
    token: ''
  }
}

const state = getDefaultState()

const mutations = {
  SETTOKEN(state,paylod){
    state.token=paylod

  }
}

const actions = {
 async setToken(context,paylod){
    const data = await login(paylod)
    console.log(data)
    context.commit('SETTOKEN',data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

