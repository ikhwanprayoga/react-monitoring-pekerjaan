import axios from 'axios'
import AuthHeader from '../helpers/authHeader'
import { NotificationManager } from 'react-notifications';

const Notification = NotificationManager

export async function fetchAllDocuments(id) {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/document/${id}`,
      { ...AuthHeader() },
    )
    return res.data
  } catch (error) {
    console.log('errr', error)
    Notification.error(error.response.status, 'Gagal memuat data')
    return false
  }
}

export async function postDocument(payload) {
  const formData = new FormData();
  formData.append('file', payload.file)
  formData.append('title', payload.title)
  formData.append('description', payload.description)
  formData.append('project_id', payload.projectId)
  formData.append('user_id', payload.userId)

  try {
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/document`,
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