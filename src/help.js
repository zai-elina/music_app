export const searchMusic = (searchValue, list) =>
  list.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  )

export function compare(a, b) {
  var dateA = new Date(a.release_date)
  var dateB = new Date(b.release_date)

  return dateB - dateA
}
