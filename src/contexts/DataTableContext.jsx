import React, { createContext, useState } from 'react';

const DataTableContext = createContext();

const DataTableProvider = ({ children }) => {
  const initialFilter = { key: '', value: '' };
  const [state, setState] = useState({
    limit: 5,
    skip: 0,
    page: 0,
    loading:false,
    filter: initialFilter,
    modulePage: '',
  });

  const { limit, skip, page, filter,loading,modulePage } = state;

  const updateState = (updates) => {
    setState((prevState) => ({
      ...prevState,
      ...updates,
    }));
  };

  const setLimit = (newLimit) => {
    updateState({ limit: newLimit });
  };

  const setModulePage = (newModulePage) => {
    updateState({ moduleType: newModulePage });
  };

  const setLoading = (newLoading) => {
    updateState({ loading: newLoading });
  };

  const setSkip = (newSkip) => {
    updateState({ skip: newSkip });
  };

  const setPagination = (newPage) => {
    updateState({
      page: newPage,
      skip: newPage * limit,
    });
  };

  const setFilter = (newFilterKey, newFilterValue) => {
    updateState({
      filter: { key: newFilterKey, value: newFilterValue },
    });
  };

  const setFilterReset = () => {
    updateState({ filter: initialFilter });
  };

  const contextValue = {
    setPage: setPagination,
    setLimit,
    setFilter,
    setFilterReset,
    setSkip,
    setLoading,
    setModulePage,
    modulePage,
    loading,
    skip,
    limit,
    page,
    filter,
  };

  return (
    <DataTableContext.Provider value={contextValue}>
      {children}
    </DataTableContext.Provider>
  );
};

const useDataTable = () => {
  const context = React.useContext(DataTableContext);
  if (context === undefined) {
    throw new Error('useDataTable must be used within a DataTableProvider');
  }
  return context;
};

export default DataTableProvider;
export { useDataTable };
