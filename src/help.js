export const searchMusic = (searchValue, list) =>
  list.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  )
