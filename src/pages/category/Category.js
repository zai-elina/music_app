import { useParams } from 'react-router-dom'

const Category = () => {
  const params = useParams()
  return (
    <div>
      <h1>Category {params.id}</h1>
    </div>
  )
}

export default Category
