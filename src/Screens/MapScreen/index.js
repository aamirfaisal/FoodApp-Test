import { View, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../Enums/StyleGuide'
import MapView, { Marker } from 'react-native-maps';
import { BackButton, SwipeButton } from '../../Components';
import Geolocation from 'react-native-geolocation-service';
import { styles } from './style';

const MapScreen = ({navigation}) => {
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'FoodApp',
          'message': 'FoodApp access to your location '
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    )
  }

  useEffect(() => {
    requestPermission()
    getLocation()
  }, [])

  return (
    <View style={styles.Container}>
      {/* Back Button */}
      <BackButton style={styles.TopButton} iconColor={COLORS.BLACK}
        onPress={() => navigation.goBack()} />
      <MapView
        style={styles.MapStyle}
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={{ latitude: lat, longitude: long }} />
      </MapView>
      {/* Swipe Button */}
      <View style={styles.BottomContainer}>
        <SwipeButton />
      </View>
    </View>
  )
}

export default MapScreen
