import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@user_name', value);
  } catch (e) {

    console.error('Failed to save the data to the storage');
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@user_name');
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