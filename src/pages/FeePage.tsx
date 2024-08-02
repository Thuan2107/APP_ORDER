import { View, Text, StyleSheet, Image } from 'react-native';


import HeaderBackPress from '../components/HeaderBackPress';
export type ItemCardProps = {
  backgroundColor?: string;
  textColor?: string;
  defaultColor?: string;
};

const FeePage = ({backgroundColor, textColor, defaultColor}: ItemCardProps) => {


  const styles = createStyles({backgroundColor, textColor, defaultColor});

  return (
    <View style={styles.orderWrapper} >
      <HeaderBackPress color='blue' title='chi phí' />
    </View>
  )
  
}

const createStyles = ({ backgroundColor, textColor, defaultColor }: ItemCardProps) => StyleSheet.create({
  orderWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
});



export default FeePage

