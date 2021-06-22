import React from 'react'
import { Card } from '@material-ui/core'
import './PlaceList.css'

import PlaceItem from './PlaceItem';

const PlaceList = props => {
    if (props.items.length === 0){
        return (<div className="Place-list center">
            <Card>
                <h2>No Places found.</h2>
                <button>Add a Place</button>
            </Card>
        </div>
    );
    }
    return (
        <ul className="place-list">
            {console.log(props.items)}
          {props.items.map((place, index) => {
              console.log(place);
            return <PlaceItem
              key={index}
              id={place.id}
              title={place.title}
              description1={place.description1}
              address1={place.address1}
              lat ={place.lat}
              lng={place.lng}
            />
})}
        </ul>
      );
}
export default PlaceList;