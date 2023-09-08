import React,{useEffect} from "react";

import { useProducts } from "../../contexts/ProductsContext";
import { PRODUCTS_COLUMNS } from "../../features/products/productsColumns"
import { PRODUCTS_FILTERS } from "../../features/products/productsFilters"

import DataTable from "../../componentes/DataTable";
import Breadcrumbs from "../../componentes/Common/Breadcrumbs";

const Products = () => {
  const { data,total } = useProducts();
const productsFilters = PRODUCTS_FILTERS();




  return (
    <>
    <div className="container flex-col">
    <Breadcrumbs pageTitle = {"Products"}/>
    <DataTable data={data} total={total} COLUMNS={PRODUCTS_COLUMNS} FILTERS_COL = {productsFilters} module="products"/>
    </div>
    </>
  );
};

export default Products;
