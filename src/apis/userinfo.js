// 导入axios实例
import httpRequest from '@/request/index'

// 获取用户信息
export function GetUserInfo() {
  return httpRequest({
    url: 'userinfo',
    method: 'get'
  })
}

// 获取单个用户信息
export function GetOneUser(param) {
  return httpRequest({
    url: 'userinfo/'+param,
    method: 'get'
  })
}

// 增加用户信息
export function PutUserInfo(param){
  return httpRequest({
    url:'userinfo',
    method:'post',
    data:param,
  })
}

// 获取验证码
export function GetCaptcha(){
  return httpRequest({
    url:'captcha',
    method:'get'
  })
}

// 获取城市信息
export function GetCity(){
  return httpRequest({
    url:'city',
    method:'get'
  })
}

// 获取兴趣爱好列表
export function GetHobbyList(){
  return httpRequest({
    url:'hobbylist',
    method:'get'
  })
}

export function GetHobbyUser(param) {
  return httpRequest({
    url: 'hobby/'+param,
    method: 'get'
  })
}

