import fetch from '../utils/fetch'

export const getPageList = async (page: String | Number = 1, pageSize: String | Number = 10) =>{
  return fetch('/api/page/pagelist', { page, pageSize })
}
