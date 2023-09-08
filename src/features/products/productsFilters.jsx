import { useProducts } from "../../contexts/ProductsContext";

export const GetCategories = () => {
  const { categories } = useProducts();
  return categories;
};

const GetProductFilters = () => {
  const categories = GetCategories();
  
  const PRODUCTS_FILTERS = [
    { label: 'ID', filterName: 'id', type: 'text' },
    { label: 'Title', filterName: 'title', type: 'text' },
    { label: 'Brand', filterName: 'brand', type: 'text' },
    { label: 'Category', filterName: 'category', type: 'select', options: categories },
  ];

  return PRODUCTS_FILTERS;
};

export { GetProductFilters as PRODUCTS_FILTERS }; 
