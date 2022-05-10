import {get} from "./request"
// import axios from 'axios'
export const sayHello = () => {
  // return axios.get('https://q-music-1910740-1311814359.ap-shanghai.run.tcloudbase.com/hello')
  return get('/hello')
}