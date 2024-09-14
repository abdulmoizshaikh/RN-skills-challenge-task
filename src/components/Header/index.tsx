import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import styles from './styles';

const Header = () => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.backButton}>
      <FeatherIcon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
    <View style={styles.profileIconContainer}>
      <Text style={styles.profileIcon}>A</Text>
    </View>
  </View>
);

export default Header;
