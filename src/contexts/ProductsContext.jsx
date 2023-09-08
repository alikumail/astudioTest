import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useDataTable } from './DataTableContext';
import { getProductsAccessors } from '../features/products/productsColumns';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const { skip, limit, page, filter } = useDataTable();
  const productsAccessors = getProductsAccessors();
  const [state, setState] = useState({
    data: [],
    categories: [],
    total: 0,
  });

  const { data,categories, total } = state;

  const updateState = (updates) => {
    setState((prevState) => ({
      ...prevState,
      ...updates,
    }));
  };

  const filterData = (mainData) => {
    const filteredData = mainData.filter((item) => {
      return item[String(filter.key)].toLowerCase().includes(filter.value.toLowerCase());
    });
    updateState({
      data: filteredData.slice(page * limit, (page + 1) * limit), // Fix pagination
      total: Math.ceil(filteredData.length / limit),
    });
  };

  const fetchData = async (url, isFiltered) => {
    try {
      const response = await axios.get(url);
      if (isFiltered) {
        filterData(response.data.products);
      } else {
        updateState({
          data: response.data.products,
          total: Math.ceil(response.data.total / limit),
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {

    if (filter.value !== '') {
    if(filter.key === 'category')
    {
        const url = `https://dummyjson.com/products/category/${filter.value}?limit=${limit}&skip=${skip * limit}&select=${productsAccessors}`;
        fetchData(url, false);
    } else {
        const url = `https://dummyjson.com/products/search?q=${filter.value}&select=${productsAccessors}`;
        fetchData(url, true);
    }

    } else {
      const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip * limit}&select=${productsAccessors}`; 
      fetchData(url, false);
    }
        
  }, [filter, skip, limit, productsAccessors]);

  useEffect(() => {
    const url = `https://dummyjson.com/products/categories`;
    axios.get(url).then((response) => {
      updateState({
        categories: response.data,
      });
    });
  }, []); 

  return (
    <ProductsContext.Provider
      value={{
        data,
        total,
        categories
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const context = React.useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};

export default ProductsProvider;
export { useProducts };
