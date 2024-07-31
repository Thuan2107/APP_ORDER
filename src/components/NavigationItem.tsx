import {ImageSourcePropType, View, Text, StyleSheet, Image } from 'react-native';
import { SvgProps } from 'react-native-svg';

export type NavigationItemProps = {
  name?: string;
  icon?: React.FC<SvgProps>;
  isFocused?: boolean;
};

const NavigationItem: React.FC<NavigationItemProps> = ({name, icon: Icon, isFocused}: NavigationItemProps) => {


  const styles = createStyles({isFocused});

  return (
    <View style={styles.itemWrapper} >
      <View style={styles.itemIcon}>
        {Icon && <Icon width={24} height={24} fill={isFocused ? 'blue' : 'gray'} />}
      </View>
      <Text style={styles.itemName}>{name}</Text>
    </View>
  )
  
}

const createStyles = ({isFocused}: NavigationItemProps) => StyleSheet.create({
  itemWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    gap: 4
  },
  itemIcon: {
    width: 24,
    height: 24

  },
  itemName: {
    fontSize: 10,
    color: isFocused ? '#1462B0' : '#C5C6C9',
    fontWeight: '700'
  }

  
});



export default NavigationItem

