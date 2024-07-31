import { View, Text, StyleSheet, Image } from 'react-native';

export type ItemOrderDetailProps = {
  backgroundColor?: string;
  textColor?: string;
  defaultColor?: string;
};

const AreaPage = ({backgroundColor, textColor, defaultColor}: ItemOrderDetailProps) => {


  const styles = createStyles({backgroundColor, textColor, defaultColor});

  return (
    <View style={styles.orderDetailWrapper} >
      <Text >Khu vực</Text>
    </View>
  )
  
}

const createStyles = ({ backgroundColor, textColor, defaultColor }: ItemOrderDetailProps) => StyleSheet.create({
    orderDetailWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.08, // 14 in hex is about 8% in decimal
    shadowRadius: 8,
    elevation: 8,
  },
  
});



export default AreaPage

