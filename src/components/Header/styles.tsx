import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#4A90E2',
  },
  backButton: {
    marginRight: 20,
    borderRadius: 5,
    borderWidth: 0.25,
    borderColor: '#fff',
    padding: 5,
  },
  profileIconContainer: {
    marginLeft: 'auto',
  },
  profileIcon: {
    backgroundColor: '#fff',
    color: '#4A90E2',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default styles;
