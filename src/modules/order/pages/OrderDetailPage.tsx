import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import HeaderBackPress from '../../../components/HeaderBackPress';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import IconCoin from '../../../../assets/icon-coins.svg';
import { ORDER_STATUS } from '../../../constants/OrderStatusConstants';
import imageFoodDefault from '../../../../assets/food-default.png'
import IconPlus from '../../../../assets/icon-plus.svg';
import IconMinus from '../../../../assets/icon-minus.svg';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import { OrderDetail } from '../models/OrderDetail';
import { FoodOrderDetail } from '../models/FoodOrderDetail';
import { formatPriceVND } from '../../../utils/appUtils';
import IconPayment from '../../../../assets/icon-document.svg';
import IconGift from '../../../../assets/icon-gift.svg'
import IconFire from '../../../../assets/icon-fire.svg'
import IconAddFood from '../../../../assets/icon-add-food.svg'
import IconSplit from '../../../../assets/icon-split.svg'
import { FOOD_STATUS } from '../../../constants/FoodStatusConstants';
import { TYPE_ACTION_ORDER_DETAIL } from '../constants/TypeActionOrderDetailConstants';
import { Order } from '../../../models/OrderModel';



const OrderDetailPage = () => {
  const route = useRoute<any>();
  const { orderId } = route.params;
  const [orderDetail, setOrderDetail] = useState<OrderDetail>(new OrderDetail)

  const [foodsOrderDetail, setFoodOrderDetail] = useState<FoodOrderDetail[]>([])
  const [orderStatus, setOrderStatus] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const orderStatusColor = ORDER_STATUS[orderStatus].colorText
  const backgroundStatusColor = ORDER_STATUS[orderStatus].colorBackground
  
  const styles = createStyles({orderStatusColor, });


  useEffect(() => {

    
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      // Fetch data and dispatch to Redux store
      getOrderDetail().then(data => {
        console.log('detail')
        setOrderDetail(data.data)
      }
      );
    }, [])
  );

  useEffect(() => {
    initOrderDetailData(orderDetail)
  }, [orderDetail]);

  const initOrderDetailData = (data: OrderDetail) => {
    setFoodOrderDetail(data.order_details)
    setOrderStatus(data.status)
    setTotalAmount(data.total_amount)
  }
  
  const getOrderDetail = async () => {
    try {
      const response = await axiosInstance.get(`/orders/${orderId}`, {
        params: {
          branch_id: 2879,
          food_status: -1,
          is_print_bill: 0,
        },
        headers: {
          Method: '0', // Custom header for Method
        },
      });
      return response.data;
    } catch (error) {
      // Handle error as needed
      console.error('API call error:', error);
      throw error;
    }
  };

  return (
    <View style={styles.orderDetailWrapper} >
      <HeaderBackPress color={orderStatusColor} title={`#${orderDetail.id} - ${orderDetail.table_name}`} />
      <View style={styles.totalTemporary}>
        <IconCoin />
        <View>
          <Text style={styles.totalTemporaryLabel}>Tổng tạm tính</Text>
          <Text style={styles.totalTemporaryPrice}>{formatPriceVND(totalAmount)}</Text>
        </View>
      </View>
      <ScrollView style={styles.foodsWrapper}>
        {
          foodsOrderDetail.map((food) => (
            <FoodItemCard
              key = {food.id}
              name = {food.name}
              orderStatusColor = {orderStatusColor}
              foodStatusColor = {FOOD_STATUS[food.status].color}
              totalPrice = {formatPriceVND(food.total_price)}
              foodQuantity = {food.quantity}
              foodStatusText = {ORDER_STATUS[food.status].text}
            />
          ))
        }
      </ScrollView>
      <ActionBottom 
        orderDetailData={orderDetail}
        backgroundStatusColor={backgroundStatusColor} 
        orderStatusColor={orderStatusColor} />

    </View>
  )
  
}

type ItemOrderDetailProps = {
  name?: string;
  orderStatusColor?: string;
  backgroundStatusColor?: string;
  foodStatusColor?: string;
  totalPrice?: string;
  foodQuantity?: number;
  foodStatusText?: string;
  orderDetailData?: OrderDetail;
};

const FoodItemCard = ({
  name,
  orderStatusColor,
  backgroundStatusColor,
  foodStatusColor,
  totalPrice,
  foodQuantity,
  foodStatusText
}: ItemOrderDetailProps) => {
  const styles = createStyles({orderStatusColor, foodStatusColor});
  
  return (
    <View style={styles.foodItem}>
        <Image style={styles.foodImage} source={imageFoodDefault} />
        <View style={styles.foodInfo}>
          <View>
            <Text style={styles.foodInfoName}>{name}</Text>
            <Text style={styles.foodInfoStatus}>{foodStatusText}</Text>
          </View>
          <View>
            <Text style={styles.foodPrice}>{totalPrice}</Text>
            <View style={styles.foodQuantityWrapper}>
              <View style={styles.foodQuantityButton}>
                <IconMinus style={styles.foodQuantityIcon} />
              </View>
              <Text style={styles.foodQuantityValue}>{foodQuantity}</Text>
              <View style={styles.foodQuantityButton}>
                <IconPlus style={styles.foodQuantityIcon}/>
              </View>
            </View>
          </View>
        </View>
        {/* <SwipeActionFood /> */}
    </View>
  )
}

const createStyles = ({orderStatusColor, foodStatusColor}: ItemOrderDetailProps) => StyleSheet.create({
  orderDetailWrapper: {
    display: 'flex',
    position: 'relative',
    height: '100%'
  },
  totalTemporary: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 8,
    borderBottomColor: '#F5F6FA',
    backgroundColor: '#fff'
  },
  totalTemporaryLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#696A6C',
    textTransform: 'uppercase'
  },
  totalTemporaryPrice: {
    fontSize: 24,
    fontWeight: '600',
    color: orderStatusColor
  },
  foodsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginBottom: 20
  },
  foodItem: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F6FA'
  },
  foodImage: {
    width: 50,
    height: 50,
    borderRadius: 4
  },
  foodInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6
  },
  foodInfoName: {
    width: 150,
    fontSize: 14,
    fontWeight: '400',
    color: '#28282B',
    overflow: 'hidden',        
    textAlign: 'left',     
  },
  foodInfoStatus: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: foodStatusColor,
    fontWeight: '700'
  },
  foodPrice: {
    fontSize: 14,
    fontWeight: '400',
    color: '#28282B',
    textAlign: 'right'
  },
  foodQuantityWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  foodQuantityButton: {
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7D7E81',
    borderRadius: 4,
    padding: 8
  },
  foodQuantityIcon: {
    width: 12,
    height: 12,
  },
  foodQuantityValue: {
    width: 35,
    color: '#F7002E',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center'
  }
});

const actionBottomStyle = ({backgroundStatusColor, orderStatusColor}: ItemOrderDetailProps) => StyleSheet.create({
  actionWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    shadowColor: '#000000', // shadow color
    shadowOffset: { width: 0, height: -4 }, // offset
    shadowOpacity: 0.1, // opacity
    shadowRadius: 8, 
    padding: 6,
    borderRadius: 10
  },
  actionRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionItemWrapper: {
    width: 64,
    height: 64,
    display: 'flex',
    gap: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: backgroundStatusColor,
  },
  actionItemIcon: {
    width: 24,
    height: 24
  },
  actionItemName: {
    fontWeight: '700',
    fontSize: 10,
    color: orderStatusColor
  }

})

const ActionBottom = ({backgroundStatusColor, orderStatusColor, orderDetailData}: ItemOrderDetailProps) => {
  const styles = actionBottomStyle({backgroundStatusColor, orderStatusColor});
  const navigation = useNavigation<any>();

  const actionFromOrderDetail = (type: number) => {
    switch(type){
      case TYPE_ACTION_ORDER_DETAIL.ADD_FOOD: {
        navigation.navigate('FoodMenu', { orderId: orderDetailData?.id, orderName: orderDetailData?.table_name, tableId: orderDetailData?.table_id });
        break;
      }
      // case TYPE_ACTION_ORDER_DETAIL.ADD_FOOD: {
      //   navigation.navigate('FoodMenu', { orderId: orderDetailData?.id, orderName: orderDetailData?.table_name });
      //   break;
      // }
    }
  }
  return (
    <View style={styles.actionWrapper}>
      <View style={styles.actionRow}>
        <TouchableOpacity onPress={() => actionFromOrderDetail(TYPE_ACTION_ORDER_DETAIL.ADD_OTHER_FOOD)} style={styles.actionItemWrapper}>
          <IconFire style={styles.actionItemIcon} color={orderStatusColor} />
          <Text style={styles.actionItemName}>Thêm khác</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => actionFromOrderDetail(TYPE_ACTION_ORDER_DETAIL.ADD_FOOD)} style={styles.actionItemWrapper}>
          <IconAddFood style={styles.actionItemIcon} color={orderStatusColor} />
          <Text style={styles.actionItemName}>Thêm món</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => actionFromOrderDetail(TYPE_ACTION_ORDER_DETAIL.SPLIT_FOOD)} style={styles.actionItemWrapper}>
          <IconSplit style={styles.actionItemIcon} color={orderStatusColor} />
          <Text style={styles.actionItemName}>Tách món</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => actionFromOrderDetail(TYPE_ACTION_ORDER_DETAIL.GIFT_FOOD)} style={styles.actionItemWrapper}>
          <IconGift style={styles.actionItemIcon} color={orderStatusColor} />
          <Text style={styles.actionItemName}>Quà tặng</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => actionFromOrderDetail(TYPE_ACTION_ORDER_DETAIL.PAYMENT)} style={styles.actionItemWrapper}>
          <IconPayment style={styles.actionItemIcon} color={orderStatusColor} />
          <Text style={styles.actionItemName}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default OrderDetailPage

