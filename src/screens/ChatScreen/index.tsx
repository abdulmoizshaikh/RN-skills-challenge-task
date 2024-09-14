import React, {useState, useRef} from 'react';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {dummyMessages} from '../../config/constants';
import {Header} from '../../components';
import styles from './styles';

const ChatScreen = () => {
  const [isMicActive, setMicActive] = useState(true);
  const [isPhoneAcive, setPhoneAcive] = useState(true);
  const [isSpeakerActive, setSpeakerActive] = useState({
    value: false,
    index: 0,
  });

  const scrollY = useRef(new Animated.Value(0)).current;

  // Determine the opacity for the first and last elements based on scroll position
  const firstItemOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.5],
    extrapolate: 'clamp',
  });

  const lastItemOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.5],
    extrapolate: 'clamp',
  });

  const toggleMic = () => {
    setMicActive(!isMicActive);
  };

  const togglePhone = () => {
    setPhoneAcive(!isPhoneAcive);
  };

  const toggleVolume = (index: number) => {
    setSpeakerActive({value: !isSpeakerActive.value, index});
  };

  return (
    <View style={styles.container}>
      <Header />

      {/* Chat Section */}
      <Animated.ScrollView
        contentContainerStyle={styles.chatContainer}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        {dummyMessages.map((message, index) => (
          <View style={styles.messageContainer} key={message.id}>
            <View style={styles.messageImageContainer}>
              <Image
                source={{uri: message.image}}
                style={styles.profileImage}
              />
              <Text style={styles.senderName}>{message.name}</Text>
            </View>
            <View style={styles.messageTextContainer}>
              {index === 0 ? (
                <Animated.Text
                  style={[styles.messageText, {opacity: firstItemOpacity}]}>
                  {message.message}
                </Animated.Text>
              ) : index === dummyMessages.length - 1 ? (
                <Animated.Text
                  style={[styles.messageText, {opacity: lastItemOpacity}]}>
                  {message.message}
                </Animated.Text>
              ) : (
                <Text style={styles.messageText}>{message.message}</Text>
              )}
              <View style={styles.volumeIconContainer}>
                <MaterialIcon
                  name={
                    isSpeakerActive.value && isSpeakerActive.index === index
                      ? 'volume-mute'
                      : 'volume-high'
                  }
                  size={30}
                  color="#fff"
                  onPress={() => toggleVolume(index)}
                />
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.speakingStatusContainer}>
          <Text style={[styles.speakingStatus, styles.boldText]}>...Joe</Text>
          <Text style={styles.speakingStatus}> is Speaking</Text>
        </View>

        <View style={styles.footerButtons}>
          <TouchableOpacity style={styles.iconButton} onPress={toggleMic}>
            <FontAwesomeIcon
              name={isMicActive ? 'microphone-slash' : 'microphone'}
              size={35}
              color="#4A90E2"
            />
          </TouchableOpacity>
          <View style={styles.wd20} />
          <TouchableOpacity
            style={[styles.iconButton, styles.hangupIconButton]}
            onPress={togglePhone}>
            <MaterialIcon
              name={isPhoneAcive ? 'phone-hangup' : 'phone-ring'}
              size={35}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
