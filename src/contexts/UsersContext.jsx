import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useDataTable } from './DataTableContext';
import {getUsersAccessors } from '../features/users/usersColumns';

const UsersContext = createContext();


const UsersProvider = ({ children }) => {
  const {skip,limit,filter } = useDataTable();
  const usersAccessors = getUsersAccessors();
  const [state, setState] = useState({
    data: [],
    total: 0,
  });

  const { data, total } = state;

    const updateState = (updates) => {
    setState((prevState) => ({
      ...prevState,
      ...updates,
    }));
   
  };

  const fetchData = async (url) => {
    try {
      
      const response = await axios.get(url);
        updateState({
          data: response.data.users,
          total: Math.ceil(response.data.total / limit),
        });  
    } catch (error) {
      console.error("Error fetching data:", error);
    } 
  };

  useEffect(() => {

      if (filter.value !== '') {
        const url =`https://dummyjson.com/users/filter?key=${filter.key}&value=${filter.value}&limit=${limit}&skip=${skip}&select=${usersAccessors}`;
        fetchData(url);
    } else {
      const url = `https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=${usersAccessors}`;
      fetchData(url);
    }
  
  }, [filter, skip, limit]);

  return (
    <UsersContext.Provider
      value={{
        data,
        total,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

const useUsers = () => {
  const context = React.useContext(UsersContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UsersProvider');
  }
  return context;
};

export default UsersProvider;
export { useUsers };
