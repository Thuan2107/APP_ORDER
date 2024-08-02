import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import IconBack from '../../assets/icon-back.svg'
import { useNavigation } from '@react-navigation/native';




export type HeaderProps = {
  color?: string;
  title?: string;
};

const HeaderBackPress = ({
  color, 
  title
}: HeaderProps) => {
  const navigation = useNavigation<any>();
  const styles = createStyles({color});
  const handleBackPress = () => {
    console.log('Back button pressed');
    navigation.goBack();
  };


  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity style={styles.headerIconBack} onPress={handleBackPress}>
        <IconBack color={color} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
  
}

const createStyles = ({color}: HeaderProps) => StyleSheet.create({
  headerWrapper: {
    position: 'relative',
    height: 52,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F6FA',
  },

  headerIconBack: {
    position: 'absolute',
    left: 10
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: color,
    textAlign: 'center',
    textTransform: 'uppercase'
  }
  
});



export default HeaderBackPress

