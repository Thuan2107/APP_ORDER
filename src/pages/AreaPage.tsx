import { View, Text, StyleSheet, Image, ListRenderItem, FlatList, ToastAndroid } from 'react-native';
import TableItemCard from '../components/TableItemCard';
import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { TABLE_STATUS } from '../constants/TableStatusConstants';
import { useNavigation } from '@react-navigation/native';
import { TableRequestParams, getTableApi } from '../modules/area/api/getTablesApi';
import { setAuthToken, setProjectId } from '../utils/config';
import { showToast } from '../utils/showToastMessage';



export type ItemCardProps = {
  backgroundColor?: string;
  textColor?: string;
  defaultColor?: string;
};

const AreaPage = ({backgroundColor, textColor, defaultColor}: ItemCardProps) => {
  setAuthToken('ba1c572e-751f-4899-a2b9-643a82f2193b');

  const navigation = useNavigation<any>();
  const [tables, setTables] = useState<TableModel[]>([]);
  useEffect(() => {
    const loadTables = async () => {
      try {
        const data = await fetchTables();
        setTables(data?.data ?? [])
      } catch (err) {
      }
    };

    loadTables();
  }, []);
  
  const fetchTables = async () => {
    const params: TableRequestParams = {
      area_id: -1,
      branch_id: 2879,
      buffet_ticket_id: 0,
    };
    try {
        const response = await getTableApi(params);
        return response.data;
    } catch (error) {
        console.error(error); // Handle the error
    }
};
  const onTableItemClick = (orderId: number, orderName: string, tableId: number) => {
    if(orderId){
      navigation.navigate('OrderDetail', { orderId });
    }else{
      navigation.navigate('FoodMenu', { orderId, orderName, tableId });
    }
  }


  const styles = createStyles({backgroundColor, textColor, defaultColor});

  const renderItem = ({ item }: { item: TableModel }) => (
    <View style={styles.tableItem}>
      <TableItemCard
        backgroundColor={TABLE_STATUS[item.status].color}
        tableName={item.name}
        onTableClick={() => onTableItemClick(item.order_id, item.name, item.id)}
      />
    </View>
  );

  return (
    <View style={styles.tablePage}>
      <View style={styles.tableWrapper}>
        <FlatList
          data={tables}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={3} // Adjust the number of columns as needed
        />
      </View>
    </View>
    
  )
  
}

const createStyles = ({ backgroundColor, textColor, defaultColor }: ItemCardProps) => StyleSheet.create({
  tablePage: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  tableWrapper: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  tableItem: {
    display: 'flex',
    minWidth: '33%',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});



export default AreaPage

