import { View, Text, StyleSheet, Image } from 'react-native';


import Icon from '../../assets/icon-document.svg'; 
export type ItemCardProps = {
  backgroundColor?: string;
  textColor?: string;
  defaultColor?: string;
};

const FeePage = ({backgroundColor, textColor, defaultColor}: ItemCardProps) => {


  const styles = createStyles({backgroundColor, textColor, defaultColor});

  return (
    <View style={styles.orderWrapper} >
      <Text style={styles.orderLeftStatus}>Chi phí</Text>
      <Icon width={100} height={100} />
    </View>
  )
  
}

const createStyles = ({ backgroundColor, textColor, defaultColor }: ItemCardProps) => StyleSheet.create({
  orderWrapper: {
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
  orderLeft: {
    flex: 7
  },
  orderLeftStatus: {
    backgroundColor: backgroundColor,
    fontSize: 12,
    paddingVertical: 7,
    paddingHorizontal: 0,
    marginBottom: 2,
    borderRadius: 4,
    textTransform: 'uppercase',
    color: textColor,
    textAlign: 'center'
  },
  orderLeftName: {  
    backgroundColor: backgroundColor,
    fontSize: 24,
    paddingVertical: 18,
    paddingHorizontal: 0,
    borderRadius: 4,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: textColor,
    textAlign: 'center'
  },
  orderLeftAction: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'space-between',
    marginTop: 4
  },
  orderLeftActionItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    backgroundColor: backgroundColor,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  orderRight: {
    flex: 5,
  },
  orderRightTotalAmount: {
    flex: 5,
    fontSize: 24,
    color: textColor,
    fontWeight: '600',
    textAlign: 'right'
  },
  orderRightInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6
  },
  orderRightItemRow: {
    display: 'flex',
    gap: 4,
    color: '#C5C6C9',
    flexDirection: 'row',
    alignItems: 'center'
  },
  orderRightItemIcon: {
    width: 16,
    height: 16,
  },
  orderRightItemText: {
   fontSize: 14,
   fontWeight: '500',
   color: defaultColor,
   alignItems: 'center'
  },
  iconAction: {
    color: 'red'
  }
});



export default FeePage

