import React from 'react';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './track_map.scss';
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot
} from "firebase/firestore";
import { db } from "../../firebase";

function Track_Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBDaVwlGtXLaQvqk36lrFnnhIEcNHepgC8",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}


function Map() {
  
  const center = useMemo(() => ({ lat: 54.35036156245502, lng: 18.653247236602194}), []);
    
  const [data, setData] = ([]);
  const [cord, setCord] = useState({
    Cords: {
        lat: 0,
        lng: 0
    }
  });

  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //     console.log(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();

    // LISTEN (REALTIME)
    const location = () => onSnapshot(
        collection(db, "users"),
        (snapShot) => {
          let list = [];
          snapShot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          setData(list);
          list.forEach(function(e) {
            if (e.Type_of_worker == "Driver") {
                setCord( e.location_lat, e.location.lng);
            }
          })
        },
        (error) => {
          console.log(error);
        }
        );
  
      return () => {
        location();
      };
    }, []);


    // var user1 = <Marker className="marker1" position={{ lat:54.30464423711404, lng:18.630494403210474}}/>
    // var user2 = <Marker className="marker2" position={{ lat:54.34262510085353, lng:18.522959060482584}}/>
    // var user3 = <Marker className="marker3" position={{ lat:54.386050336555414, lng:18.655703356560114}}/>
    // var user4 = <Marker className="marker4" position={{ lat:54.31745672456575, lng:18.74592124417725}}/>
    return (
    
        <GoogleMap id="map" zoom={10} center={center} mapContainerClassName="map-container">
            <Marker position={cord}/>
            {/* <Marker position={center} />
            {user1}
            {user2}
            {user3}
            {user4} */}
        </GoogleMap>
  );
}

export default Track_Map