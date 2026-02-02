import ProductGrid from './ProductGrid';
import CategoryBrowser from './CategoryBrowser';

export default function Shop({ onAddToWishlist, wishlistItems = [] }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop</h1>
      <CategoryBrowser />
      <ProductGrid onAddToWishlist={onAddToWishlist} wishlistItems={wishlistItems} />
    </div>
  );
}
