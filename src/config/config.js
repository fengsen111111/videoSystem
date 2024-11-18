const config = {
    baseURL: 'http://118.178.230.2:89',//请求地址
}
if (import.meta.env.MODE === 'development') {
    // console.log('当前是开发环境');
    config.baseURL = 'http://118.178.230.2:89'
} else if (import.meta.env.MODE === 'production') {
    // console.log('当前是生产环境');
    config.baseURL = '127.0.0.1'
}
export {
    config
}