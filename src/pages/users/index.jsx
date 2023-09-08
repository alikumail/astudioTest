import React from "react";
import { useUsers } from "../../contexts/UsersContext";
import { USERS_COLUMNS } from "../../features/users/usersColumns"
import { USER_FILTERS } from "../../features/users/userFilters"
import DataTable from "../../componentes/DataTable";
import Breadcrumbs from "../../componentes/Common/Breadcrumbs";

const Users = () => {
  const { data,total } = useUsers();

  return (
    <>
    <div className="container ">

    <div className="flex flex-col">
    <Breadcrumbs pageTitle = {"Users"}/>
    <DataTable data={data} total={total} COLUMNS={USERS_COLUMNS} FILTERS_COL = {USER_FILTERS} module="users"/>
    </div>
    </div>
    </>
  );
};

export default Users;
