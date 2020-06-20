import React, {useEffect, useState} from 'react';
import { Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { ActivityIndicator } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import useDashboard from './useDashboard';

// components
import Box from '../_components/Box';
import MainLayout from '../_layouts';

// partials
import Tab from './partials/Tab';

const dashboard = props => {
  const {
    data, date, loading, local,
    changeLocal,
  } = useDashboard();
  
  // useEffect(() => {
  //   console.log(data);
  // }, [data])

  const styled = {
    body: {
      paddingTop: hp('5%'),
    },
    title: {
      fontSize: hp('4%'),
      color: '#fff',
    },
    information: {
      marginTop: hp('3%'),
    },
    data: {
      color: '#fff',
      fontSize: hp('3%'),
    },
    recovered: {
      paddingTop: hp('2%'),
    },
    odp: {
      paddingTop: hp('2%'),
    },
    date: {
      margin: wp('2%'),
    },
    textDate: {
      fontSize: hp('2%'),
      color: '#fff',
    },
    loading: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 10,
    }    
  }

  return (
    <MainLayout>
      <Grid style={styled.body}>
        <Tab 
          changeLocal={changeLocal}
        />
        <Row size={local ? hp('70%') : hp('50%')}>
          <Col>
            <Row size={30}>
              <Col>
                <Box type="warning">
                  <View>
                      <Text style={styled.title}>Positif</Text>
                      
                      <View style={styled.information}>
                        {loading 
                          ? <ActivityIndicator size='small' color="white" style={styled.loading} /> 
                          : <Text style={styled.data}>
                              {data.positif} Orang
                            </Text>
                        }
                      </View>
                    </View> 
                </Box>
              </Col>
              <Col>
                <Box type="danger">
                  <View>
                    <Text style={styled.title}>Meninggal</Text>
                    
                    <View style={styled.information}>
                      {loading 
                        ? <ActivityIndicator size='small' color="white" style={styled.loading} /> 
                        : <Text style={styled.data}>
                            {data.meninggal} Orang
                          </Text>
                      }
                    </View>
                  </View> 
                </Box>
              </Col>
            </Row>
            <Row size={30} style={styled.recovered}>
              <Col>
                <Box type="success">
                  <View>
                    <Text style={styled.title}>Sembuh</Text>
                    
                    <View style={styled.information}>
                      {loading 
                        ? <ActivityIndicator size='small' color="white" style={styled.loading} /> 
                        : <Text style={styled.data}>
                            {data.sembuh} Orang
                          </Text>
                      }
                    </View>
                  </View>
                </Box>
              </Col>
            </Row>
            { local
              &&  <Row size={30} style={styled.odp}>
                    <Col>
                      <Box type="info">
                        <View>
                            <Text style={styled.title}>ODP</Text>
                            
                            <View style={styled.information}>
                              {loading 
                                ? <ActivityIndicator size='small' color="white" style={styled.loading} /> 
                                : <Text style={styled.data}>
                                    {data.odp} Orang
                                  </Text>
                              }
                            </View>
                          </View> 
                      </Box>
                    </Col>
                    <Col>
                      <Box type="add" value="#A700FF">
                        <View>
                          <Text style={styled.title}>PDP</Text>
                          
                          <View style={styled.information}>
                            {loading 
                              ? <ActivityIndicator size='small' color="white" style={styled.loading} /> 
                              : <Text style={styled.data}>
                                  {data.pdp} Orang
                                </Text>
                            }
                          </View>
                        </View> 
                      </Box>
                    </Col>
                  </Row>
            }
            <Row size={10} style={styled.date}>
              <Col>
                <View>
                  <Text style={styled.textDate}>Pertanggal {date}</Text>
                </View>
              </Col>
            </Row>
          </Col>
        </Row> 
        <Row size={local ? hp('30%') : hp('50%')}></Row>            
      </Grid>
    </MainLayout>
  );
}

export default dashboard;

{/* <Box type="danger">
                <View>
                  <Text style={styled.title}>Meninggal</Text>  
                </View> 
              </Box> */}