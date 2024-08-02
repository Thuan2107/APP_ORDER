import { View, Text, StyleSheet, Image, ScrollView, FlatList, ListRenderItem } from 'react-native';
import axiosInstance from '../utils/axiosInstance';
import React, { useEffect, useState } from 'react';
import { Order } from '../models/OrderModel';
import OrderItemCard from '../components/OrderItemCard';
import { ORDER_STATUS } from '../constants/OrderStatusConstants';
import { formatPriceVND } from '../utils/appUtils';
import { useNavigation } from '@react-navigation/native';

export type ItemCardProps = {
  backgroundColor?: string;
  textColor?: string;
  defaultColor?: string;
};

const OrderPage = ({backgroundColor, textColor, defaultColor}: ItemCardProps) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const navigation = useNavigation<any>();
  const styles = createStyles({backgroundColor, textColor, defaultColor});

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data.data)
      } catch (err) {
      }
    };

    loadOrders();
  }, []);
  
  const fetchOrders = async () => {
    try {
      const response = await axiosInstance.get('/orders', {
        params: {
          employee_id: 0,
          branch_id: 2879,
          order_status: '0,1,4',
          is_take_away: -1,
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

  const onOrderItemClick = (orderId: number) => {
    navigation.navigate('OrderDetail', { orderId: orderId });

  }

  const renderItem: ListRenderItem<Order> = ({ item }) => (
    <OrderItemCard
      backgroundColor={ORDER_STATUS[item.order_status].colorBackground}
      textColor={ORDER_STATUS[item.order_status].colorText}
      defaultColor='#C5C6C9'
      orderStatus={ORDER_STATUS[item.order_status].text}
      orderName={item.table_name}
      orderTotalAmount={formatPriceVND(item.total_amount)}
      orderId={item.id}
      orderTime={item.created_at}
      orderTotalPerson={item.using_slot}
      onOrderItemClick={() => onOrderItemClick(item.id)}
    />
  );

  return (
    <View style={styles.orderPageWrapper}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
  
}

const createStyles = ({ backgroundColor, textColor, defaultColor }: ItemCardProps) => StyleSheet.create({
  orderPageWrapper: {
    flex: 1,
  },
  
});



export default OrderPage

