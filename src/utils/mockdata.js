import Mock from 'mockjs'

var testData = () => {
    var data;
    return {
        data: data || 'test'
    }
}


const users = {
    admin: {
        name: "admin",
        token: "admin"
    },
    test: {
        name: "test",
        token: "test"
    }
}


const loginInData = (config) => {
    const { username } = JSON.parse(config.body); 
    return users[username]
}
const loginUpData = () => {
    return "sucess"
}


// url为要拦截的请求地址  请求方式  请求数据（规则） （此处api会被mockjs拦截）
// Mock.mock('URL', /post|get/i, mockData)
Mock.mock(/\/Test\/test_post/, 'post', testData)
Mock.mock(/\/Login\/loginIn/, 'post', loginInData)
Mock.mock(/\/Login\/loginUp/, 'post', loginUpData)

export default Mock