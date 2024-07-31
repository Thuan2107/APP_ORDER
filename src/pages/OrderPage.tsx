import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import axiosInstance from '../utils/axiosInstance';
import { useEffect, useState } from 'react';
import { Order } from '../models/OrderModel';
import OrderItemCard from '../components/OrderItemCard';
import { ORDER_STATUS } from '../constants/OrderStatusConstants';
import { formatPriceVND } from '../utils/appUtils';

export type ItemCardProps = {
  backgroundColor?: string;
  textColor?: string;
  defaultColor?: string;
};

const OrderPage = ({backgroundColor, textColor, defaultColor}: ItemCardProps) => {
  const [orders, setOrders] = useState<Order[]>([]);
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
          branch_id: 3101,
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
  const styles = createStyles({backgroundColor, textColor, defaultColor});

  return (
    <ScrollView style={styles.orderPageWrapper}>
      { orders.length > 0 && (
        orders.map((order) => (
          <OrderItemCard 
            key={order.id}
            backgroundColor = '#CCE3F1'
            textColor = '#0071BB'
            defaultColor = '#C5C6C9'
            orderStatus = {ORDER_STATUS[order.order_status]}
            orderName = {order.table_name}
            orderTotalAmount = {formatPriceVND(order.total_amount)}
            orderId = {order.id}
            orderTime = {order.created_at}
            orderTotalPerson = {order.using_slot}
          />
        ))
      )
        
      }
    </ScrollView>
  )
  
}

const createStyles = ({ backgroundColor, textColor, defaultColor }: ItemCardProps) => StyleSheet.create({
  orderPageWrapper: {
    flex: 1,
  },
  
});



export default OrderPage

