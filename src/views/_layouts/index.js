import React from 'react';
import {View, Text} from 'react-native';
import { Header } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// import styled from './styles.scss';

const mainLayout = props => {

  const mainColor = '#550099';

  const styled = {
    header: {
      margin: 0,
      padding: 0,
      height: hp('14%'),
      // shadowColor: 'transparent',
      shadowRadius: 0,
      borderBottomWidth: 0,
      shadowOffset: {
          height: 0,
      },
      backgroundColor: mainColor,
    },
    titleHeader: {
      fontSize: hp('4%'),
      color: '#fff',
    },
    body: {
      border: 0,
      padding: wp('3%'),
      height: hp('100%'),
      backgroundColor: mainColor,
    }
  }

  return(
    <View>
      <Header
        // style={styled.header}
        containerStyle={styled.header}
        leftComponent={null}
        centerComponent={{ text: 'Covid-19 KALTIM', style: styled.titleHeader}}
        rightComponent={null}
      />
      
      <View style={styled.body}>
        {props.children}
      </View>
    </View>
  )
}

export default mainLayout;

// custom header
// containerStyle={{
//   backgroundColor: '#3D6DCC',
//   justifyContent: 'space-around',
// }}
// leftComponent={{ icon: 'menu', color: '#fff', onPress: handleClick}}
// rightComponent={{ icon: 'home', color: '#fff' }}