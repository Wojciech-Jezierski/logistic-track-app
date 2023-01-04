import React from 'react';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './track_map.scss';
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { createElement } from 'react';
import { render } from 'react-dom';

function Track_Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBDaVwlGtXLaQvqk36lrFnnhIEcNHepgC8",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

const Mark = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sark = () => onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        list.forEach(function(e) {
          if (e.Type_of_worker == "Driver") {
            console.log("To jest kierowca!");
            React.createElement('h1', null, 'GoogleMap')
            console.log(e.location_lat);
            console.log(e.location_lng);
            var locat = e.location_lat;
          }
        })
      },
      (error) => {
        console.log(error);
      }
      );

    return () => {
      sark();
    };
  }, []);

  return (
    <div>
      <span>Oto dane: <p>{data[1]}</p></span>
    </div>
  )
}


// const unsub = () => onSnapshot(
//   collection(db, "users"),
//   (snapShot) => {
//     snapShot.docs.forEach((doc) => {
//       console.log({ ...doc.data(), typeing: doc.Type_of_worker });
//     });
    
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// unsub();

// const check = () => {
//   collection(db)
// }
function Map() {
  const center = useMemo(() => ({ lat: 54.35036156245502, lng: 18.653247236602194}), []);
  const driver1 = useMemo(() => ({ lat: 54.34291745084651, lng: 18.616165406280462}), []);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

    // LISTEN (REALTIME)
    // var unsub = onSnapshot(
    //   collection(db, "users"),
    //   (snapShot) => {
    //     let list = [];
    //     snapShot.docs.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
        
          
        
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    //   );
    //   return () => {
    //     unsub();
    //     // return back = <Marker position={{lat: 54, lng: 17}} />
    //   };
      
      
    }, []);
    
    


    var user1 = <Marker className="marker1" position={{ lat:54.30464423711404, lng:18.630494403210474}}/>
    var user2 = <Marker className="marker2" position={{ lat:54.34262510085353, lng:18.522959060482584}}/>
    var user3 = <Marker className="marker3" position={{ lat:54.386050336555414, lng:18.655703356560114}}/>
    var user4 = <Marker className="marker4" position={{ lat:54.31745672456575, lng:18.74592124417725}}/>
    return (
    
        <GoogleMap id="map" zoom={10} center={center} mapContainerClassName="map-container">
            <Marker position={center} />
            {user1}
            {user2}
            {user3}
            {user4}
        </GoogleMap>

      // <div>
        
      //   <span>Oto dane: {data[1].id}</span>
      // </div>
  );
}

export default Track_Map