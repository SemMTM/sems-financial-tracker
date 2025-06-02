/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';


const FinancialDataContext = createContext();

export const FinancialDataProvider = ({ children }) => {
  const [dataVersion, setDataVersion] = useState(0);

  // This function can be called by any component after a financial update
  const notifyChange = () => setDataVersion(prev => prev + 1);

  return (
    <FinancialDataContext.Provider value={{ dataVersion, notifyChange }}>
      {children}
    </FinancialDataContext.Provider>
  );
};

export const useFinancialData = () => useContext(FinancialDataContext);
