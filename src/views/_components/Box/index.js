import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const box = props => {
  const [color, setColor] = useState(null);
  const setHeight = props.height ? props.height : hp('15%');

  const styled = {
    box: {
      margin: wp('1%'),
      padding: wp('2%'),
      color: '#fff',
      height: setHeight,
      borderRadius:10,
      backgroundColor: color,
      border: '1px solid black',
    }
  }

  useEffect(() => {
    if(props.type == 'success') {
      setColor('#4cd137');
    }else if(props.type == 'danger') {
      setColor('#d63031');
    }else if(props.type == 'warning') {
      setColor('#FEBA46');
    }else if(props.type == 'info'){
      setColor('#5DA0FF');
    }else if(props.type == 'add'){
      setColor(props.value);
    }else{
      setColor('#fff');
    }

  }, [props.type])

  return (
    <View 
      style={styled.box}
    >
     {props.children}
   </View>
  )
}

export default box;