import React, { useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/logoWeon.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPress = () => {
    console.warn('Sign In');
  };

  const onForgotPasswordPress = () => {
    console.warn('Forgot');
  };

  const onSignWithFacebook = () => {
    console.warn('Facebook');
  };

  const onSignWithGoogle = () => {
    console.warn('Google');
  };

  const onSignWithApple = () => {
    console.warn('Apple');
  };

  const onClickSignUp = () => {
    console.warn('Register');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.root}>
        <Image source={Logo} resizeMode="contain" 
        style={[styles.logo, {height: height * 0.3}]} />

        <CustomInput 
          placeholder="Username" 
          value={username} 
          setValue={setUsername} 
        />
        <CustomInput 
          placeholder="Password" 
          value={password} 
          setValue={setPassword} 
          secureTextEntry 
        />
        
        <CustomButton text="Sign In" 
          onPress={onSignInPress} type="PRIMARY"/>
        
        <CustomButton text="Forgot Password ?" 
          onPress={onForgotPasswordPress} type="TERTIARY" 
        />

        <CustomButton 
          text="Sign In with Facebook" 
          onPress={onSignWithFacebook} 
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton 
          text="Sign In Google" 
          onPress={onSignWithGoogle} 
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton 
          text="Sign In Apple" 
          onPress={onSignWithApple} 
          bgColor="#E3E3E3"
          fgColor="#363636"
        />
        
        <CustomButton 
          text="Don't have an account? Create one" 
          onPress={onClickSignUp} 
          type="TERTIARY" 
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    marginTop: -25,
  },
  logo:{
    with: '70%',
    maxWidth: 300,
    maxHeight: 200,
  } 
});

export default SignInScreen;
