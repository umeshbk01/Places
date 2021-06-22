import React, { useState, Fragment} from "react";
import { Link } from "react-router-dom";
import { Card, Button } from '@material-ui/core'
import './PlaceItem.css';
import Map from "../../Utils/Map";
import Modal from "../../Utils/Modal";


const PlaceItem = props => {
    const [showMap, setShowMap] = useState(false);
    const openMapHandler = () => {
        setShowMap(true);
    }
    const closeMapHandler = () => {
        setShowMap(false)
    }
    return (
    <Fragment>
       {console.log(props)}
        <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address1}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
          <Map lat={props.lat} lng={props.lng} zoomVal={15}/>
      </Modal>
    <li className="place-item">
        <Card className="place-item__content">
        <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address1}</h3>
            <p>{props.description1}</p>
        </div>
        <div className="place-item__actions">
            <Button variant="contained" onClick={openMapHandler}>
                View On Map
            </Button>
            <Button variant="contained" color="primary" href="/place">
                Update
            </Button>
            <Button variant="contained" color="secondary">
                Delete
            </Button>
        </div>
        </Card>
    </li>

</Fragment>);
    
}

export default PlaceItem;