import React from 'react'
import { View, Text ,SafeAreaView, Image,StyleSheet} from 'react-native'
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default props => {
    let [fontsLoaded] = useFonts({
      'Nerko_One': require('./assets/Nerko_One/NerkoOne-Regular.ttf'),
      'NEast_Sea_Dokdo': require('./assets/East_Sea_Dokdo/EastSeaDokdo-Regular.ttf'),
      'Kanit': require('./assets/Kanit/Kanit-Black.ttf')
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {

    return (
        <SafeAreaView style={{backgroundColor:'#596755',flex:1,}}>
            <View style={styles.container}>
                <Image
                style = {styles.profile}
                source = {require('./assets/pf.jpg')}
                />
                 <View
                 style = {{height:85}}
               />
            <Text style={{ fontFamily: 'Nerko_One', fontSize: 40 }}>SARAWUT SAENGCHAN</Text>
            <Text style={{ fontFamily: 'NEast_Sea_Dokdo', fontSize: 40}}>Web Developerss</Text>
            <View
                 style = {{height:65}}
             />
            <Text style={{ fontFamily: 'Kanit', fontSize:20 }}>ประวัติ</Text>
        
            </View>
            


            <View style={styles.Lift}>
              <Text  style={{ fontFamily: 'Nerko_One', fontSize: 20 }}>A proven job specific resume sample for landing your next job in 2020. You can edit this Web Developer resume example to get a quick start and easily build a perfect resume in just a few minutes. Just fill in your details, download your new resume & start your job application today!
              A proven job specific resume sample for landing your next job in 2020. You can edit this Web Developer resume example to get a quick start and easily build a perfect resume in just a few minutes. Just fill in your details, download your new resume & start your job application today!</Text>
            </View>
 

            </SafeAreaView>
        
    )
}
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems:"center",
        
        
      },
    profile:{
        width:180,
        height:180,
        borderRadius:50

        
        
    },
    Lift:{
      width:150,
      
     
    },




  });
  
