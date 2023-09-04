import { Image, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';
import { COLORS, SCREEN } from '../../Enums/StyleGuide';
import { LogoImage } from '../../Enums/Images';
import { styles } from './style';

const Splash = ({ navigation }) => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashVisible(false);
      navigation.replace(SCREEN.Home);
    }, 2500);
  }, [navigation]);

  return (
    <AnimatedSplash
      isLoaded={!isSplashVisible}
      logoImage={LogoImage}
      backgroundColor={COLORS.RED}
      duration={2000}
      logoHeight={203}
      logoWidth={203}
      translucent={true}>
      {/* Image */}
      <View style={styles.Container}>
        <Image source={LogoImage} />
      </View>
    </AnimatedSplash>
  )
}

export default Splash
