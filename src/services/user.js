import axios from 'axios'
import AuthHeader from '../helpers/authHeader'
import { NotificationManager } from 'react-notifications';

const Notification = NotificationManager

export async function login(payload) {
      try {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, payload)

        if (res.data.status === 'success') {
          const localStore = {
            token: res.data.token,
            level: res.data.data.level,
            name: res.data.data.name,
          }
          
          localStorage.setItem('user', JSON.stringify(localStore))
          
          const resUser = {
            username: res.data.data.username,
            name: res.data.data.name,
            level: res.data.data.level,
            status: res.data.status,
          }
          
          Notification.success('Selamat datang kembali', 'Login berhasil')
          return resUser

        } else {
          Notification.error('Periksa kembali username dan password anda', 'Login gagal')
          return res.data
        }

      } catch (error) {
        return false
      }
}

export function fetchCurrent() {
  try {
    
  } catch (error) {
    
  }
}

export async function logout() {
      try {
        localStorage.removeItem('user')
        return true
      } catch (error) {
      //   notification.warning({
      //     message: 'Gagal Mengambil Data',
      //     description: error.message,
      //   })
        return false
      }
}