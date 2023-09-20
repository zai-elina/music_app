export async function registerUser({ email, password }) {
  try {
    const response = await fetch(
      'https://skypro-music-api.skyeng.tech/user/signup/',
      {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          username: email,
        }),
        headers: {
          'content-type': 'application/json',
        },
      }
    )

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
    const response = await fetch(
      'https://skypro-music-api.skyeng.tech/user/login/',
      {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          'content-type': 'application/json',
        },
      }
    )

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

function saveToken(token) {
  const tokenObject = JSON.parse(token)

  sessionStorage.setItem('access', JSON.stringify(tokenObject.access))
  sessionStorage.setItem('refresh', JSON.stringify(tokenObject.refresh))
}

export async function getToken({ email, password }) {
  try {
    const response = await fetch(
      'https://skypro-music-api.skyeng.tech/user/token/',
      {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          'content-type': 'application/json',
        },
      }
    )

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
    saveToken(JSON.stringify(data))

    return data
  } catch (error) {
    throw error
  }
}

export async function refreshToken(tokenRefresh) {
  try {
    const response = await fetch(
      'https://skypro-music-api.skyeng.tech/user/token/refresh/',
      {
        method: 'POST',
        body: JSON.stringify({
          refresh: tokenRefresh,
        }),
        headers: {
          'content-type': 'application/json',
        },
      }
    )

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
    saveToken(JSON.stringify(data))

    return data
  } catch (error) {
    throw error
  }
}
