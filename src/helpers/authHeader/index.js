export default function AuthHeader() {
      const sess = JSON.parse(localStorage.getItem('user'))
      return {
        headers: {
          role: sess.token,
      //     permission: 'admin-sekolah',
          Authorization: `Bearer ${sess.token}`,
      //     zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      }
    }