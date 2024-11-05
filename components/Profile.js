import { StyleSheet, Text, View, Image } from 'react-native';
import styles from '../styles/styles';

const Profile = ({ isDarkMode }) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profilePictureContainer}>
        <Image source={require('../assets/profile.jpg')} style={styles.profilePicture} />
      </View>
      <Text style={[styles.profileName, isDarkMode ? styles.darkText : styles.lightText]}>
        Takahashi Ryosuke
      </Text>
      <Text style={[styles.joinedDate, isDarkMode ? styles.darkText : styles.lightText]}>
        Project D Leader
      </Text>
    </View>
  );
};

export default Profile;
