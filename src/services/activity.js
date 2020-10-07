import axios from 'axios'
import AuthHeader from '../helpers/authHeader'

export async function fetchAllActivities() {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/activities`,
          { ...AuthHeader() },
        )
        return res.data.data
      } catch (error) {
      //   notification.warning({
      //     message: 'Gagal Mengambil Data',
      //     description: error.message,
      //   })
        return false
      }
}

export async function fetchActivty(payload) {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/activities`,
          { ...AuthHeader() },
        )
        return res.data.data
      } catch (error) {
      //   notification.warning({
      //     message: 'Gagal Mengambil Data',
      //     description: error.message,
      //   })
        return false
      }
}