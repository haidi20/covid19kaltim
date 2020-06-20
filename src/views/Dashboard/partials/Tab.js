import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

const tab = props => {
  let textColor   = '#fff';
  const mainColor = '#6843B0';
  const [state, setState] = useState({selectedIndex: 0});


  const buttons = [{ element: buttonOne }, { element: buttonTwo }];
  const { selectedIndex } = state;

  const updateIndex = (selectedIndex) => {
    props.changeLocal();
    setState({selectedIndex});
  }

  const styled = {
    textOne: {
      color: state.selectedIndex == 1 ? '#fff' : 'black',
    },
    textTwo: {
      color: state.selectedIndex == 0 ? '#fff' : 'black',
    },
    groupButton: {
      borderRadius: 25,
      borderColor: mainColor,
      backgroundColor: mainColor,
    },
    selectedButton: {
      // borderRadius: 25,
      borderColor: 'black',
      backgroundColor: 'white', 
    }
  }

  function buttonOne () { return <Text style={styled.textOne}>Kalimantan Timur</Text> }
  function buttonTwo () { return <Text style={styled.textTwo}>Indonesia</Text> }

  return (
    <ButtonGroup
      buttons={buttons}
      onPress={updateIndex}
      selectedIndex={selectedIndex}
      containerStyle={styled.groupButton} 
      selectedButtonStyle={styled.selectedButton}
    />
  )
}

export default tab;