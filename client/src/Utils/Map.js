import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoidW1lc2hiIiwiYSI6ImNrcTNxcHVnNjBxMDYyb2xuY2h5bjl3NjMifQ.lKx2T2DBAbkXB16Z_6wM0A';
 
const Map = props => {
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(props.lng);
const [lat, setLat] = useState(props.lat);
const [zoom, setZoom] = useState(props.zoomVal);
 
useEffect(() => {
if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/mapbox/streets-v11',
center: [lng, lat],
zoom: zoom
});
});
 
useEffect(() => {
if (!map.current) return; // wait for map to initialize
map.current.on('move', () => {
setLng(map.current.getCenter().lng.toFixed(4));
setLat(map.current.getCenter().lat.toFixed(4));
setZoom(map.current.getZoom().toFixed(2));
});
});
 
return (
<div>
<div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
<div ref={mapContainer} className="map-container" />
</div>
);
}

export default Map;