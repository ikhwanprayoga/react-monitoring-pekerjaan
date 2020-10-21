import axios from 'axios'
import AuthHeader from '../helpers/authHeader'

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