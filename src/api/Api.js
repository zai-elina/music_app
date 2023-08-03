export async function getTracks() {
  try {
    const response = await fetch(
      'https://painassasin.online/catalog/track/all/'
    )
    const data = await response.json()

    return data
  } catch {
    throw new Error('Не удалось загрузить плейлист, попробуйте позже')
  }
}

export async function registerUser({ email, password }) {
  try {
    const response = await fetch('https://painassasin.online/user/signup/', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        username: email,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })

    if (response.status === 500) {
      throw new Error('Сервер сломался')
    }

    if (response.status === 400) {
      const errorData = await response.json()
      let errorMessage = ''

      if (errorData.hasOwnProperty('username')) {
        errorMessage = errorData.username[0]
      } else if (errorData.hasOwnProperty('email')) {
        errorMessage = errorData.email[0]
      } else if (errorData.hasOwnProperty('password')) {
        errorMessage = errorData.password[0]
      }

      throw new Error(errorMessage)
    }

    const data = await response.json()

    return data
  } catch (error) {
    throw error
  }
}

export async function loginUser({ email, password }) {
  try {
    const response = await fetch('https://painassasin.online/user/login/', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })

    if (response.status === 400) {
      throw new Error('Неккоректный запрос')
    }

    if (response.status === 401) {
      const errorData = await response.json()
      let errorMessage = ''

      if (errorData.hasOwnProperty('detail')) {
        errorMessage = errorData.detail
      }

      throw new Error(errorMessage)
    }

    if (response.status === 500) {
      throw new Error('Сервер сломался')
    }

    const data = await response.json()

    return data
  } catch (error) {
    throw error
  }
}
