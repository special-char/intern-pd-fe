
import ProductCard from './ProductCard';

interface ProductColor {
  name: string;
  value: string;
}

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  colors: ProductColor[];
  sizes: string[];
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard 
          key={product.id} 
          product={product}
          isHovered={index === 1} // Second card shows hover state by default
        />
      ))}
    </div>
  );
};

export default ProductGrid;
