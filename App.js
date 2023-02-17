import React from "react";
import {Text,View, Button, TextInput, StyleSheet, Image, TouchableOpacity} from "react-native";
import profile from "./assets/profile2.jpg";
function App(){
  return <View style={styles.container}>
    
    
    <Image source={profile} style={styles.image}/>
    <View style={styles.detailsContainer}>
      <Text style={styles.detailHeader}>School </Text>
      <Text style={[styles.details]}> Codetrain campus</Text>
    </View>

    <View style={styles.detailsContainer}>
      <Text style={styles.detailHeader}>Email Address </Text>
      <Text style={[styles.details]}> Sundayconfidence@gmail.com</Text>
    </View>

    <View style={styles.detailsContainer}>
      <Text style={styles.detailsHead}>Name </Text>
      <Text style={[styles.borders,styles.details]}> Sunday Confidence</Text>
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsHead}>Nick name </Text>
      <Text style={[styles.borders,styles.details]}> Eldee</Text>
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsHead}>Emergency Contact </Text>
      <Text style={[styles.borders, styles.details]}> +2330588568811</Text>
    </View>
    
    <TouchableOpacity style={[styles.buttons]}>
        <Text style={styles.textColor}>UPDATE PROFILE</Text>
      </TouchableOpacity>
    </View>

}
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: "white",
  marginHorizontal: 5
},
image:{
  marginTop: 100,
  width: 100,
  height:100,
  marginBottom: 30,
  alignSelf: "center",
  borderRadius: 100

},
detailsContainer:{
  flexDirection: "column",
  marginVertical: 15
},
borders:{
borderWidth: 0.4,
borderColor: "gray",
borderTopWidth: 0,
borderLeftWidth:0,
borderRightWidth:0,
fontSize: 15,
},
buttons:{
backgroundColor: "#0091E7",
alignItems: 'center',
padding: 20,
color: "#fff",
borderRadius:75,
width: 300,
alignSelf: "center",
marginVertical: 30
},
textColor:{
color: "white",
fontSize: 15
},
detailsHead:{
  color:"#0091E7",
  fontWeight: "bold"
},
detailHeader:{
color: "gray",
opacity: 0.5,
fontSize: 17
},
details:{
  color: "black",
  fontWeight: "bold",
  paddingVertical: 5,
}
});
export default App;