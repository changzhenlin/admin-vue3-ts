import axois from 'axios'

// 创建axios实例
const service = axois.create({
  baseURL: 'https://www.fastmock.site/mock/5fb165a553345245a74e02a83687b205/vuetsadmin/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 请求拦截器
service.interceptors.request.use((config) => {
  config.headers = config.headers || {}
  if (localStorage.getItem('token')) {
    config.headers.Authorization = localStorage.getItem('token')
  }
  return config
})

// 响应拦截器
service.interceptors.response.use((response) => {
  const code: number = response.data.code
  if (code === 200) {
  return response.data
  } else if (code === 403) {
    // 无权限
    window.location.href = '/403'
  } else if (code === 500) {
    // 服务器错误
    window.location.href = '/500'
  }
  return Promise.reject(response.data)
})

export default service