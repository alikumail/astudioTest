const PRODUCTS_COLUMNS = [
    {
      Header: "Id",
      accessor: "id",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Title",
      accessor: "title",
      Cell: (row) => {
        return <span>#{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Price",
      accessor: "price",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Rating",
      accessor: "rating",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Stock",
      accessor: "stock",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Brand",
      accessor: "brand",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
        Header: "Category",
        accessor: "category",
        Cell: (row) => {
          return <span>{row?.cell?.value}</span>;
        },
    },
  ];

  export const getProductsAccessors = () => {
    const accessors = PRODUCTS_COLUMNS.map((column) => column.accessor);
    return accessors.join(',');
  };
  
  export { PRODUCTS_COLUMNS };