import axios from 'axios'
import AuthHeader from '../helpers/authHeader'
import { NotificationManager } from 'react-notifications';

const Notification = NotificationManager

export async function fetchAllProjects() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/projects`,
        { ...AuthHeader() },
      )
      
      return res.data
    } catch (error) {
      
      Notification.error(error.response.status, 'Gagal memuat data')
      return false
    }
}

export async function postProject(payload) {
  
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/project`,
        payload,
        { ...AuthHeader() },
      )
      
      Notification.success("Data berhasil disubmit", 'Sukses')
      return true
    } catch (error) {
      console.log('err', error)
  
      Notification.error(error.response.data.errors.message || error.response.status, 'Gagal memuat data')
      return false
    }
  }

export async function fetchAllActivityProject(id) {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/project/${id}/activity`,
        { ...AuthHeader() },
      )
      
      return res.data
    } catch (error) {
      Notification.error(error.response.status, 'Gagal memuat data')
      return false
    }
}