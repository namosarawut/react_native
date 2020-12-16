import React, { Component } from 'react';
import {SafeAreaView,View} from 'react-native'
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Tab1 from './Prof';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
       <View
       style={{height:20}}
       />
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="person" /><Text>Profile</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="camera" /></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="map" /></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}