import { View, Text, StyleSheet, Image } from 'react-native';

import iconDocument from '../../assets/icon-document.png';
import iconGift from '../../assets/icon-gift.png';
import iconBill from '../../assets/icon-bill.png';
import iconScan from '../../assets/icon-scan.png';
import iconBillGray from '../../assets/icon-bill-gray.png';
import iconClockGray from '../../assets/icon-clock-gray.png';
import iconPersonGray from '../../assets/icon-double-person-gray.png';
import iconTicketGray from '../../assets/icon-ticket-gray.png';

export type ItemCardProps = {
  backgroundColor?: string;
  textColor?: string;
  defaultColor?: string;
  orderStatus?: string;
  orderName?: string;
  orderTotalAmount?: string;
  orderId?: number;
  orderTime?: string;
  orderTotalPerson?: number;
};

const OrderItemCard = ({
  backgroundColor, 
  textColor, 
  defaultColor,
  orderStatus,
  orderName,
  orderTotalAmount,
  orderId,
  orderTime,
  orderTotalPerson}: ItemCardProps) => {


  const styles = createStyles({backgroundColor, textColor, defaultColor});

  return (
    <View style={styles.orderWrapper} >
        <View style={styles.orderLeft}>
            <Text style={styles.orderLeftStatus}>{orderStatus}</Text>
            <Text style={styles.orderLeftName}>{orderName}</Text>
            <View style={styles.orderLeftAction}>
            

                <View style={styles.orderLeftActionItem}>
                  <Image
                    source={iconDocument}
                  />
                </View>
                <View style={styles.orderLeftActionItem}>
                  <Image
                    source={iconGift}
                  />
                </View>
                <View style={styles.orderLeftActionItem}>
                  <Image
                    source={iconBill}
                  />
                </View>
                <View style={styles.orderLeftActionItem}>
                  <Image
                    source={iconScan}
                  />
                </View>
            </View>
        </View>
        <View style={styles.orderRight}>
            <Text style={styles.orderRightTotalAmount}>{orderTotalAmount}</Text>
            <View style={styles.orderRightInfo}>
            <View style={styles.orderRightItemRow}>
                <View style={styles.orderRightItemIcon}>
                  <Image
                    source={iconBillGray}
                  />
                </View>
                <Text style={styles.orderRightItemText}>#{orderId}</Text>
                
            </View>
            <View style={styles.orderRightItemRow}>
              <View style={styles.orderRightItemIcon}>
                <Image
                  source={iconClockGray}
                />
              </View>
              <Text style={styles.orderRightItemText}>{orderTime}</Text>
                
            </View>
            {/* <View style={styles.orderRightItemRow}>
              <View style={styles.orderRightItemIcon}>
                <Image
                  source={iconTicketGray}
                />
              </View>
              <Text style={styles.orderRightItemText}>Frame 197</Text>
                
            </View> */}
            <View style={styles.orderRightItemRow}>
              <View style={styles.orderRightItemIcon}>
                <Image
                  source={iconPersonGray}
                />
              </View>
              <Text style={styles.orderRightItemText}>{orderTotalPerson}</Text>
            </View>
            </View>
            
        </View>
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
    textAlign: 'center',
    fontWeight: '700'
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



export default OrderItemCard

