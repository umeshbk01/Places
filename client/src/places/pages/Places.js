import React, { useState, useEffect} from 'react';
import PlaceList from '../components/PlaceList';
import { useGetPlaces } from '../../actions/PlaceService';
import axios from 'axios';
// const DUMMY_PLACE = [
//     {
//         id: 'p1',
//         title: 'Taj Mahal',
//         description: '7 wonders',
//         address: 'agra',
//         coordinates: {
//             lat: 40.74844,
//             lng: -73.9878584
//         }
//     }
// ]

const Places = () => {
    const [loadedPlaces, setLoadedPlaces] = useState([{
      id:'',
      title:'',
      description1:'',
      address1:'',
      lat:0,
      lng:0,
    }]);
   
    useEffect(() => {
        const fetchPlaces = async () => {
          try {
            const responseData = await axios.get(
              `/api/places/all`
            );
            //console.log(responseData.data);
            setLoadedPlaces(JSON.parse(responseData.data));
          } catch (err) {}
        };
        fetchPlaces();
      }, []);
    
    console.log(loadedPlaces);
    return <div>
      <PlaceList items={loadedPlaces}/>
    </div>
    
}

export default Places;