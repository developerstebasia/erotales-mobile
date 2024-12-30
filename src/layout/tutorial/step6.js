import React from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {code_color} from '../../utils/colors';
import i18n from '../../i18n/index';
import Button from '../../components/buttons/Button';
import AnimatedLottieView from 'lottie-react-native';
import themeAnimate from '../../assets/lottie/theme.json';
import {hp} from '../../utils/screen';
import {moderateScale} from 'react-native-size-matters';

const Step6 = ({}) => {
  // return <></>;
  return (
    <View
      style={{
        backgroundColor: '#3F58DD',
        borderRadius: 20,
        padding: 10,
        marginHorizontal: '17%',
        alignItems: 'center',
        marginTop: '64%',
        width: '66%',
        paddingTop: hp(50),
      }}>
      <View
        style={{
          width: hp(80),
          height: hp(80),
          position: 'absolute',
          top: hp(-40),
          backgroundColor: code_color.white,
          borderRadius: hp(50),
          borderColor: '#3F58DD',
          borderWidth: hp(4),
        }}>
        <AnimatedLottieView
          source={themeAnimate}
          autoPlay={true}
          duration={2000}
          loop={false}
        />
      </View>
      <Animatable.Text
        delay={0}
        duration={1000}
        animation={'fadeIn'}
        style={{
          color: code_color.white,
          textAlign: 'center',
          fontSize: moderateScale(17),
          fontWeight: 'bold',
          marginBottom: hp(20),
          marginTop: hp(10),
          lineHeight: hp(24),
        }}>
        {
          'Customize your selected\ntext, change the font and\nadd a background.'
        }
      </Animatable.Text>
      {/* <Animatable.View
        delay={2500}
        animation={'fadeIn'}
        duration={1000}
        style={{flexDirection: 'row'}}>
        <Button
          style={{
            backgroundColor: code_color.yellow,
            padding: 10,
            paddingHorizontal: 30,
            borderRadius: 20,
            marginVertical: 10,
          }}
          title={i18n.t('Next')}
          onPress={handleNext}
        />
      </Animatable.View> */}
    </View>
  );
};

export default Step6;
