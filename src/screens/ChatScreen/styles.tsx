import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90E2',
    paddingHorizontal: 15,
  },
  chatContainer: {
    padding: 16,
  },
  messageContainer: {
    marginBottom: 30,
  },
  messageImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 10,
  },
  senderName: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    fontSize: 18,
    marginLeft: 10,
  },
  messageTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    position: 'relative',
  },
  messageText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  volumeIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  footer: {
    backgroundColor: '#4A90E2',
    padding: 20,
    alignItems: 'center',
  },
  speakingStatusContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  speakingStatus: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  iconButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    // Optionally add shadow for better visibility
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  hangupIconButton: {
    backgroundColor: '#e15041',
  },
  wd20: {
    width: 20,
  },
});

export default styles;
