import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (value) => {
  try {
    await AsyncStorage.setItem( Date.now().toString(36), value);
  } catch (e) {

    console.error('Failed to save the data to the storage');
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem();
    if (value !== null) {
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