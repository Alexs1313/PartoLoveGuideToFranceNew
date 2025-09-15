import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MainBackground from '../components/MainBackground';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';

const entryInfo = [
  {
    label:
      'Bonjour, lovers! I am your guide on a journey through France - the country of romance, tenderness and magical moments. ',
    description:
      'Are you ready to discover the best places just for the two of you?',
    btn: 'Next',
    img: require('../assets/images/entry/1.png'),
  },
  {
    label:
      'I will show you cozy restaurants, cafes and terraces, where a real atmosphere of love reigns. ',
    description: 'Here, every moment will become special.',
    btn: 'Continue',
    img: require('../assets/images/entry/2.png'),
  },
  {
    label:
      'You will be able to discover routes for walks together and catch magical moments - sunsets, starry nights and city panoramas that will be remembered forever.',
    description: '',
    btn: 'Go',
    img: require('../assets/images/entry/3.png'),
  },
  {
    label:
      'And you will also have your own diary - add photos, notes and save every moment of your love story in France. ',
    description: 'Together we will make it unforgettable.',
    btn: 'Start',
    img: require('../assets/images/entry/4.png'),
  },
];

const EntryScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation();

  const nextStep = () => {
    currentStep === 3
      ? navigation.replace('PartoMainScreen')
      : setCurrentStep(currentStep + 1);
  };

  return (
    <MainBackground>
      <View style={styles.container}>
        <Image source={entryInfo[currentStep].img} style={{ top: 40 }} />
      </View>
      <View style={styles.entryContainer}>
        <BlurView
          style={{
            width: '106%',
            height: '100%',
            borderRadius: 22,
            position: 'absolute',
          }}
          blurType="dark"
          blurAmount={1}
        />
        <Text style={styles.label}>{entryInfo[currentStep].label}</Text>
        <Text style={styles.description}>
          {entryInfo[currentStep].description}
        </Text>

        <TouchableOpacity
          style={{ width: '80%' }}
          activeOpacity={0.7}
          onPress={nextStep}
        >
          <LinearGradient
            colors={['#9F0505', '#6B0404']}
            style={styles.gradBtn}
          >
            <Text
              style={{
                fontWeight: '700',
                fontSize: 24,
                color: '#fff',
              }}
            >
              {entryInfo[currentStep].btn}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </MainBackground>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 53, alignItems: 'center' },
  entryContainer: {
    width: '100%',
    padding: 50,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 22,
    paddingHorizontal: 13,
    alignItems: 'center',
    overflow: 'hidden',
  },
  label: {
    fontWeight: '600',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    fontWeight: '400',
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 37,
  },
  gradBtn: {
    width: '100%',
    height: 65,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EntryScreen;
