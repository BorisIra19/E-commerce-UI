import HeroSection from './HeroSection';
import ProductCategories from './ProductCategories';
import ProductGrid from './ProductGrid';

export default function Home({ onAddToWishlist, wishlistItems = [] }) {
  return (
    <div>
      <HeroSection />
      <ProductCategories />
      <ProductGrid onAddToWishlist={onAddToWishlist} wishlistItems={wishlistItems} />
    </div>
  );
}
