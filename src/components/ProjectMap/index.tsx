'use client'
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Solución para los íconos de Leaflet
const iconRetinaUrl = require('leaflet/dist/images/marker-icon-2x.png').default;
const iconUrl = require('leaflet/dist/images/marker-icon.png').default;
const shadowUrl = require('leaflet/dist/images/marker-shadow.png').default;

const defaultIcon = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const empresasPorPais = {
  Argentina: ['ZonaMed', 'Posada Waikiki', 'BIG DATA & Analytics'],
  USA: ['Your Last Day', 'MindLab'],
  Francia: ['The BrotherRockers'],
  CostaRica: ['ONVO', 'MLH - Multilingual HUB APP', 'Hospital internacional la Catolica'],
};

const posiciones = {
  Argentina: [-34.6037, -58.3816],
  USA: [37.0902, -95.7129],
  Francia: [46.2276, 2.2137],
  CostaRica: [9.7489, -83.7534],
};

const MapProyects = () => {
  return (
    <MapContainer center={[20, 0] as L.LatLngExpression} zoom={2} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {Object.keys(empresasPorPais).map((pais) => (
        <Marker key={pais} position={posiciones[pais] as L.LatLngExpression}>
          <Popup>
            <strong>{pais}</strong>
            <ul>
              {empresasPorPais[pais].map((empresa) => (
                <li key={empresa}>{empresa}</li>
              ))}
            </ul>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapProyects;