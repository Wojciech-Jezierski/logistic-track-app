import React from 'react';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './track_map.scss';
import { useEffect, useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {
  collection,
  onSnapshot
} from "firebase/firestore";
import { db } from "../../firebase";

function Track_Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB6T98ntMDtr4r0f_fmBuL-2kjoTJzJNTo",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}


function Map() {
  
  const center = useMemo(() => ({ lat: 54.35036156245502, lng: 18.653247236602194}), []);

  const [ markering, setMarkering ] = useState([]);
    // LISTEN (REALTIME)
    useEffect(() => {
    const sub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let markers = [];
        snapShot.docs.forEach((doc) => {
            markers.push({ location_lat: doc.location_lat, location_lng: doc.location_lng, username: doc.username, Type_of_worker: doc.Type_of_worker, ...doc.data() });
        });
        setMarkering(markers);
        console.log(markers);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      sub();
    };
  }, []);


  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  // const database = doc(db, "users".toString(Gb6JiRKJZAQMlb8xKbjE6PxbzYn2), "location_lat");
  const currentUserId = JSON.parse(localStorage.getItem("user")).uid
  const firebaseConfig = {
    apiKey: "AIzaSyB21itJ83FuzsHb6KiVuopZz2vWhssbKTY",
    authDomain: "logistic-track-app.firebaseapp.com",
    projectId: "logistic-track-app",
    storageBucket: "logistic-track-app.appspot.com",
    messagingSenderId: "283581085353",
    appId: "1:283581085353:web:962177e4c11ed3f6069bb8"
  };
  firebase.initializeApp(firebaseConfig);
  var useRef = firebase.firestore().collection("users").doc(currentUserId);

        useEffect(() => {
          navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
          useRef.update({
            ["location_lat"]: position.coords.latitude,
            ["location_lng"]: position.coords.longitude,
          })
          
      })
  
    }, [])

    const [selectedMarker, setSelectedMarker] = useState("");
    return (
        <GoogleMap id="map" zoom={10} center={center} mapContainerClassName="map-container">
            {markering.map((markering) => {
              if(markering.Type_of_worker === "Kierowca") {

                return (
                  <div key={markering.username}>
                    <Marker
                      position={{ lat: markering.location_lat, lng: markering.location_lng}}
                      onClick={() => {
                        setSelectedMarker(markering);
                      }}
                    />
                  </div>
                )
              }
            })}
            
            {selectedMarker && (
              <InfoWindow position={{lat: selectedMarker.location_lat, lng: selectedMarker.location_lng}} onCloseClick={() => {setSelectedMarker("")}}>
                <h2>Imię i nazwisko: {selectedMarker.displayName}</h2>
              </InfoWindow>
            )}
        </GoogleMap>
  );
}

export default Track_Map