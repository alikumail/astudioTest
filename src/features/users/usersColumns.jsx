const USERS_COLUMNS = [
    {
      Header: "First Name",
      accessor: "firstName",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Last Name",
      accessor: "lastName",
      Cell: (row) => {
        return <span>#{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Maiden Name",
      accessor: "maidenName",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Age",
      accessor: "age",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Birth Date",
      accessor: "birthDate",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Gender",
      accessor: "gender",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
        Header: "Email",
        accessor: "email",
        Cell: (row) => {
          return <span>{row?.cell?.value}</span>;
        },
      },
      {
        Header: "Username",
        accessor: "username",
        Cell: (row) => {
          return <span>{row?.cell?.value}</span>;
        },
      },
      {
        Header: "Blood Group",
        accessor: "bloodGroup",
        Cell: (row) => {
          return <span>{row?.cell?.value}</span>;
        },
      },
      {
        Header: "Eye Color",
        accessor: "eyeColor",
        Cell: (row) => {
          return <span>{row?.cell?.value}</span>;
        },
      },
      {
        Header: "Height",
        accessor: "height",
        Cell: (row) => {
          return <span>{row?.cell?.value}</span>;
        },
      },
      {
        Header: "Weight",
        accessor: "weight",
        Cell: (row) => {
          return <span>{row?.cell?.value}</span>;
        },
      },
  
  ];

  export const getUsersAccessors = () => {
    const accessors = USERS_COLUMNS.map((column) => column.accessor);
    return accessors.join(',');
  };
  
  export { USERS_COLUMNS };