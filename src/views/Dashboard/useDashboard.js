import React, {useEffect, useState} from 'react';

//third party
import axios from 'axios';
import moment from 'moment';
import localization from 'moment/locale/id';

const useDashboard = props => {
  const [local, setLocal]     = useState(true);
  const [loading, setLoading] = useState(false);

  const date            = moment().locale('id', localization).format('LL');
  const [data, setData] = useState({
    odp: 0,
    dpd: 0,
    sembuh: 0,
    positif: 0,
    meninggal: 0,
  });

  useEffect(() => {
    fetchData();
  }, [local])

  const changeLocal = e => {
    console.log('click tab');
    setLocal(!local);
  }

  const source = props => {
    if(local) {
      return 'https://covid19.kaltimprov.go.id/api/kasus';
    }else{
      return 'https://api.kawalcorona.com/indonesia';
    }
  }

  const fetchData = async () => {
    console.log(local);
    setLoading(true);
    await axios({
      method: 'get',
      url: source(),
    }).then(res => {
      let source;
      // console.log(res.data.filter(item => item.KabKota == "Kalimantan Timur")[0]);

      if(local){
        source = res.data.filter(item => item.KabKota == "Kalimantan Timur")[0];

        setData({
          ...data,
          sembuh: source['Sembuh'],
          positif: source['Confirmed'],
          meninggal: source['Meninggal'],
          odp: source['ODP'], 
          pdp: source['PDP'],
        });
      }else{
        source = res.data[0];

        setData({
          ...data,
          sembuh: source.sembuh,
          positif: source.positif,
          meninggal: source.meninggal,
        });
      }
      setLoading(false);
    }).catch(function (response) {
        console.log(response);
        setLoading(false);
    });
  }

  return {
    data: data,
    date: date,
    local: local,
    loading: loading,
    changeLocal: changeLocal,
  }
}

export default useDashboard;