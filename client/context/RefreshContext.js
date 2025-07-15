
import React, { createContext, useState } from 'react';

export const RefreshContext = createContext({
  refresh: false,
  setRefresh: () => {}
});

export function RefreshProvider({ children }) {
  const [refresh, setRefresh] = useState(false);

  return (
    <RefreshContext.Provider value={{ refresh, setRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
}
