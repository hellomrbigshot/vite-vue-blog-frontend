import fetch from '../utils/fetch'
import { loginFormInterface } from '../interfaces'

export const login = async (loginForm: loginFormInterface) =>{
  return fetch('/api/signin', { ...loginForm })
}

export const register = async (registerForm: loginFormInterface) => {
  return fetch('/api/api/signup', { ...registerForm })
}
