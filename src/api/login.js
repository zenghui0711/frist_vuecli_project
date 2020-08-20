import request from "@/utils/request";



export function testApi(data) {
    return request({
        url: '/Test/test_post',
        method: 'post',
        data
    })
}


export function loginIn(data){
    return request({
        url: '/Login/loginIn',
        method: 'post',
        data
    })
}

export function loginUp(){
    return request({
        url: '/Login/loginUp',
        method: 'post',
    })
}