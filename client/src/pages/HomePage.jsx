import { useEffect, useState } from "react"
import PoductCard from "../components/ProductCard"

const HomePage = ({onAdd}) => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);
  return (
    <div className="container mx-auto py-4 flex flex-wrap">
      {products && products.map(product => (
        <PoductCard key={product.id} product={product} onAdd={onAdd}/>
      ))}

    </div>
  )
}

export default HomePage;
