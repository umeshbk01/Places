import React, { useState } from 'react'
import {v4 as uuidv4 } from 'uuid';
import { useSendPlace } from '../../actions/PlaceService';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './NewPlace.css'

const initialState = {
    id: uuidv4(),
    title: '',
    description: '',
    address: '',

};

const NewPlace = () => {
    const [formData, setFormData] = useState(initialState);

    const {
    id,
    title,
    description,
    address
    } = formData;

    const onChange = e =>
            setFormData({ ...formData, [e.target.name]: e.target.value });
   const newPlace = useSendPlace();
    console.log(formData);
    const onSubmit = e => {
        e.preventDefault();
        
        newPlace({ id, title,description, address })
    }

  return (
      <Card className="card2">
          <CardContent>
          <div className='dash2'>
              Add Place
              </div>
              <br />
              <form className="form-group-ADDEXP" onSubmit={onSubmit}>
                  <div className="form-group">
                      
                      <input type="string" placeholder="Title" name="title" value={title} onChange={onChange} />
                  </div>
                  <br/>
                        <textarea 
                        placeholder="Description"
                        name="description"
                        value={description}
                        onChange={onChange}
                    />
                    <br/>
                    <textarea 
                        placeholder="Address"
                        name="address"
                        value={address}
                        onChange={onChange}
                    />
                    <br/>
                <input type="submit" className="btn btn-primary my-1" />
              </form>
          </CardContent>
      </Card>
  )  
}

export default NewPlace;