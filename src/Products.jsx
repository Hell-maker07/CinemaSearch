import useFetch from "./hooks/useFetch"
function Products() {
  const { data, isLoading, error } = useFetch('/api/products')
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <div>
      {data?.map(product => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  )
}