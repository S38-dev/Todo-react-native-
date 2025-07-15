
import React, { useState } from 'react';
import { View } from 'react-native';


import Index from './index.js';
import Add from './add.js';


const MainScreen = () => {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh((prev) => !prev); // toggle
 
  return (
    <View style={{ flex: 1 }}>
      <Index refresh={refresh} />
      <Add setRefresh={setRefresh} />
    </View>
  );
};

export default MainScreen;
