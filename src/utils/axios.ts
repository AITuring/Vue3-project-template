import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时20s
})

// 前置拦截器(发起请求之前的拦截)
axios.interceptors.request.use(
  (response: any) => {
    /**
     * 根据实际情况对config做处理
     * 这里没有做任何处理，直接返回了
     */
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// 后置拦截器(获取到响应时的拦截)
axios.interceptors.response.use(
  (response: any) => {
    /**
     * 根据实际情况对responce和error处理
     * 此处没有处理，直接返回
     */
    return response
  },
  (error: { response: { data: { message: any }; status: any } }) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const message = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${message}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
