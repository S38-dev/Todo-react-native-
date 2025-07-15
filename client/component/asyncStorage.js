import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (value) => {
  try {
    await AsyncStorage.setItem( Date.now().toString(36),  JSON.stringify(value));
  } catch (e) {

    console.error('Failed to save the data to the storage');
  }
};

const getData = async () => {
  try {
      const keys = await AsyncStorage.getAllKeys();
    const value = await AsyncStorage.multiGet(keys);
    if (value !== null) {
      console.log("values",value)
      return value;
    }
  } catch (e) {
  
    console.error('Failed to fetch the data from storage');
  }
};
module.exports={
    storeData,
    getData,
}