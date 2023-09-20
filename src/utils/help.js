export const searchMusic = (searchValue, list) =>
  list.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  )

export function compare(a, b) {
  var dateA = new Date(a.release_date)
  var dateB = new Date(b.release_date)

  return dateB - dateA
}

export const createArrayOfAuthors = (tracks) => {
  let arrayOfAuthors = [...new Set(tracks.map(({ author }) => author).sort())]

  arrayOfAuthors = arrayOfAuthors.map((item, index) => ({
    id: index,
    author: item,
    isActive: false,
  }))
  return arrayOfAuthors
}

export function formatTime(number) {
  let str = String(number)
  if (str.length < 2) return `0${str}`
  return str
}
