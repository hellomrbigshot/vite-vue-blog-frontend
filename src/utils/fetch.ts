import axios from 'axios'

interface IParams {
  [key:string]: unknown
}

const service = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

const fetch = async (url: string, params: IParams) => {
  const { data: { data, code } } = await service({
    url,
    data: params,
    method: 'POST'
  })
  if (code === 'OK') {
    return data
  } else {
    console.error('请求发送失败', url)
  }
}

export default fetch
