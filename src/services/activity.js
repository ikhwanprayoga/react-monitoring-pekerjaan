import axios from 'axios'
import AuthHeader from '../helpers/authHeader'
import { NotificationManager } from 'react-notifications';

const Notification = NotificationManager

export async function fetchAllActivities() {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/activities`,
          { ...AuthHeader() },
        )
        
        return res.data
      } catch (error) {
        
        Notification.error(error.response.status, 'Gagal memuat data')
        return false
      }
}

export async function fetchActivty(id) {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/activity/${id}`,
          { ...AuthHeader() },
        )
        console.log('ress service', res)
        return res.data.data
      } catch (error) {
      //   notification.warning({
      //     message: 'Gagal Mengambil Data',
      //     description: error.message,
      //   })
        return false
      }
}