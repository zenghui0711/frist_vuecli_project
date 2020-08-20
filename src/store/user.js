import {
    getToken,
    setToken,
    removeToken
} from "@/utils/auth";

import {
    testApi,
    loginIn,
    loginUp

} from "@/api/login";


const state={

}
const mutations={
    ADD_TOKEN(state,TOKEN){
        setToken(TOKEN)
    }
}

const actions={
    LoginByUserName({commit},userInfo){
        return new Promise((resolve, reject) => {
           
            loginIn(userInfo).then((result) => {
                console.log('user then.result', result)
                commit('ADD_TOKEN',result.data.token)

                resolve();
            }).catch((err) => {
                console.log('user catch.err', err)
                reject(error);
            });

        })
    }
}
export default {
    namespaced:true,//使其成为带命名空间的模块
    state,
    mutations,
    actions,
}