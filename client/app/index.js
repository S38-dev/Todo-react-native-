import { Text, View, StyleSheet } from "react-native";
import AddTodo from "../component/AddTodo"
export default function Index() {
  return (
    <>
    <View>
      {/* <Schedules/> */}
    </View>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
         backgroundColor: '#1e1e1e'
      }}
    >
      <Text style={styles.text}>Add a Todo</Text>
      <AddTodo/>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  text:{
    color:'white',
     fontSize: 20,
     position: 'relative',
      top: -40,
       left:5,


  }
})