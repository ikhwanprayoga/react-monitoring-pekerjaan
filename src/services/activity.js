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
    
    return res.data
  } catch (error) {
      Notification.error(error.response.status, 'Gagal memuat data')
    return false
  }
}

export async function postActivity(payload) {

  const formData = new FormData();
  for (const key of Object.keys(payload.files)) {
      formData.append('files', payload.files[key])
  }

  formData.append('title', payload.title)
  formData.append('description', payload.description)
  formData.append('date', payload.date)
  formData.append('user_id', payload.userId)
  formData.append('is_work', payload.isWork)

  try {
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/activity`,
      formData,
      { ...AuthHeader() },
    )
    
    Notification.success("Data berhasil disubmit", 'Sukses')
    return res.data
  } catch (error) {
    console.log('err', error.response)

    Notification.error(error.response.data.errors.message || error.response.status, 'Gagal memuat data')
    return false
  }
}