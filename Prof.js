import React from 'react';
import {
  View,
  Image,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
  Share,
  onShare
} from 'react-native';
import {  Footer, FooterTab, Button, Icon, Header, Left, Body, Right, Title,Tab} from "native-base";
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { useLinkTo } from '@react-navigation/native';






const Separator = () => (
  <View style={styles.separator} />
);


const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const Resumulay = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));

  }, []);

  
  
  let [fontsLoaded] = useFonts({
    'Nerko_One': require('./assets/Nerko_One/NerkoOne-Regular.ttf'),
    'NEast_Sea_Dokdo': require('./assets/East_Sea_Dokdo/EastSeaDokdo-Regular.ttf'),
    'Kanit': require('./assets/Kanit/Kanit-Black.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    const onShare = async () => {
      try {
        const result = await Share.share({
         url : 'https://expo.io/dashboard/namoprojectapp/builds/8a9d10f1-adb1-42f7-815f-a7e340921199',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    }

  return (
    
    <SafeAreaView  style={{backgroundColor:'#D6EAF8',flex:1}}>
      {/* <Header>
          <Left />
          <Body>
            <Title  style={{ fontFamily: 'Nerko_One'}}>My Resume</Title>
            
          </Body>
          <Right />
        </Header> */}
                 
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        
         <View style={styles.header}>
                <Image
                style = {styles.profile}
              
                source = {require('./assets/pf.jpg')}
                />
                 <View
                 style = {{height:30}}
             />   
               
            <Text style={{ fontFamily: 'Nerko_One', fontSize: 40 }}>SARAWUT SAENGCHAN</Text>
            <Text style={{ fontFamily: 'NEast_Sea_Dokdo', fontSize: 35}}>Mobile Application Developer</Text>
            <Text style={{ fontFamily: 'NEast_Sea_Dokdo', fontSize: 35}}>Web Developer</Text>
            
            <View
                 style = {{height:65}}
             />       
            </View>
            <View style={styles.Lift}>
              <Text  style={{ fontFamily: 'Nerko_One', fontSize: 30 }}>INFO</Text>
              <Separator />
              <Text  style={{ fontFamily: 'Kanit', fontSize: 19 }}>ADDRESS</Text>
              <Text style={{ fontFamily: 'Nerko_One', fontSize: 16 }}>467 Lat Phrao 107 Alley, Lane 11, Khlong Chan, Bang Kapi District, Bangkok 10240</Text>
              <View
                 style = {{height:10}}
             />
              <Text  style={{ fontFamily: 'Kanit', fontSize: 19 }}>PHONE</Text>
              <Text style={{ fontFamily: 'Nerko_One', fontSize: 16 }}>(+66)61-3804-955</Text>
              <View
                 style = {{height:10}}
             />
              <Text  style={{ fontFamily: 'Kanit', fontSize: 19 }}>EMAIL</Text>
              <Text style={{ fontFamily: 'Nerko_One', fontSize: 16 }}>namosarawut02@gmail.com</Text>
              <View
                 style = {{height:50}}
             />
              <Text  style={{ fontFamily: 'Nerko_One', fontSize: 30 }}>SKILLS</Text>
              <Separator />
              <Text  style={{ fontFamily: 'Kanit', fontSize: 19 }}>-HTML 5</Text>
              <Text  style={{ fontFamily: 'Kanit', fontSize: 19 }}>-CSS 3</Text>
              <Text  style={{ fontFamily: 'Kanit', fontSize: 19 }}>-JAVASCRIPT </Text>
              <Text  style={{ fontFamily: 'Kanit', fontSize: 19 }}>-REACT JS </Text>
              <Text  style={{ fontFamily: 'Kanit', fontSize: 19 }}>-REACT NATIVE </Text>
              <Text  style={{ fontFamily: 'Kanit', fontSize: 19 }}>-DATABASE MANAGEMANT </Text>
              <View
                 style = {{height:50}}
             />
              <Text  style={{ fontFamily: 'Nerko_One', fontSize: 30 }}>PROFILE</Text>
              <Separator />
              <Text  style={{ fontFamily: 'Kanit', fontSize: 16 ,textAlign:'justify'}}>นักศึกษาวิศวกรรมคอมพิวเตอร์ชั้นปีที่ 3 อายุ 21 ปี เกิดเมื่อวันที่ 28 ธันวาคม พ.ศ. 2542 ส่วนสูง 175 ซม. น้ำหนัก 60 กก. เริ่มสนใจการเขียนโปรแกรมเมื่อตอนอายุ 17 จากการได้เรียนวิชาคอมช่วงมัธยมปลายได้เรียนเขียนเว็บด้วยภาษา HTML จึงทำให้เริ่มสนใจในการเขียนโปรแกรมตั้งแต่นั้นเป็นต้นมา ต่อมาได้ฝึกเขียนภาษาต่างๆตามมาอาทิเช่น C,C++,CSS,JAVASCRIPT,SQL</Text>
              <View
                 style = {{height:50}}
             />
              <Text  style={{ fontFamily: 'Nerko_One', fontSize: 30 }}>EDUCATION</Text>
              <Separator />
              <Text  style={{ fontFamily: 'Kanit', fontSize: 16 }}>Since,Bankaeng wittaya school</Text>
              <Text  style={{ fontFamily: 'Kanit', fontSize: 10 }}>2012-2018</Text>
              <Text  style={{ fontFamily: 'Kanit', fontSize: 16 }}>(B.Eng)Computer and information Engineering ,Ratana Bundit University </Text>
              <Text  style={{ fontFamily: 'Kanit', fontSize: 10 }}>2018-now</Text>
              <View
                 style = {{height:50}}
             />
              <Text  style={{ fontFamily: 'Nerko_One', fontSize: 30 }}>CERTIFICATE</Text>
              <Separator />
              <Image
               style={styles.cer}
              
                source = {require('./assets/certificate/c1.jpg')}
                />
                 <View
                 style = {{height:20}}
             />
                <Image
               style={styles.cer}
              
                source = {require('./assets/certificate/c_js1.jpg')}
                />
                 <View
                 style = {{height:20}}
             />
                <Image
               style={styles.cer}
              
                source = {require('./assets/certificate/c_js2.png')}
                />
                 <View
                 style = {{height:20}}
             />
                 <Image
               style={styles.cer}
              
                source = {require('./assets/certificate/c_java.png')}
                />
                 <View
                 style = {{height:20}}
             />
                 <Image
               style={styles.cer}
               
              
                source = {require('./assets/certificate/c_html.png')}
                />
                
            
            </View>
      </ScrollView>
      


     {/* Footer */}
      <Footer>
          <FooterTab>
            <Button vertical  onPress={onShare}>
              <Icon name="share" />
              <Text style={{ fontFamily: 'NEast_Sea_Dokdo'}}>Share</Text>
            </Button>

          </FooterTab>
        </Footer>

    </SafeAreaView>
    
    
  );
}
};
  
const styles = StyleSheet.create({

  header: {
      paddingTop: 50,
      alignItems:"center",
      
      
    },
  profile:{
      width:180,
      height:180,
      borderRadius:50,    
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#B652E6',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  Right: {
    alignItems:'center'
  },
  cer:{
    width:400,
    height:300,
    
  }
});



export default Resumulay;