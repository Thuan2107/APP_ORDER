import { View, Text, StyleSheet, Image, ListRenderItem, FlatList, TouchableOpacity} from "react-native"
import IconChecked from '../../../../assets/icon-check-avtive.svg'
import IconUncheck from '../../../../assets/icon-uncheck.svg'
import IconPlus from '../../../../assets/icon-plus.svg';
import IconMinus from '../../../../assets/icon-minus.svg';
import imageFoodDefault from '../../../../assets/food-default.png'
import { useEffect, useState } from "react";
import { Food } from "../models/FoodModel";
import axiosInstance from "../../../utils/axiosInstance";
import { formatPriceVND } from "../../../utils/appUtils";


const FoodMenuPage = () => {
    const [listFood, setListFood] = useState<Food[]>([])
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckToggle = (id: number) => {
        setListFood(prevList =>
            prevList.map(item =>
                item.id === id ? { ...item, isChecked: !item.isChecked } : item
            )
        );
    };

    useEffect(() => {
        const loadData = async () => {
          try {
            const data = await getOrderDetail();
            setListFood(data.data.list)
          } catch (err) {
          }
        };
    
        loadData();
      }, []);
    
      
      
      const getOrderDetail = async () => {
        try {
          const response = await axiosInstance.get(`/foods/menu`, {
            params: {
                key_search : "",
                category_id : -1,
                branch_id : 2879,
                is_allow_employee_gift : -1,
                is_get_restaurant_kitchen_place : -1,
                limit : 50,
                category_type : -1,
                is_out_stock : -1,
                page : 1,
                area_id : 5897,
                status : 1
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
    const renderItem: ListRenderItem<Food> = ({ item }) => (
        <ItemFood
            name={item.name}
            price={item.price}
            unit={item.unit_type}
            quantity={item.quantity}
            isChecked={item.isChecked}
            onCheckToggle={() => handleCheckToggle(item.id)}
    />
    );

    return (
        <View style={styleItemFood.listFoodWrapper}>
           <FlatList
            data={listFood}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}


type ItemFoodProps = {
    name?: string;
    price?: number;
    unit?: string;
    quantity?: number;
    isChecked?: boolean;
    onCheckToggle: () => void;
  };

const ItemFood = ({name, price, unit, quantity, isChecked, onCheckToggle} : ItemFoodProps) => {
    return (
        <View style={styleItemFood.foodItemWrapper}>
            <TouchableOpacity style={styleItemFood.iconCheck} onPress={onCheckToggle}>
                {isChecked ? 
                    <IconChecked />
                 : 
                    <IconUncheck />
                }

            </TouchableOpacity>
            <Image style={styleItemFood.foodImage} source={imageFoodDefault} />
            <View style={styleItemFood.foodInfo}>
                <View>
                    <Text style={styleItemFood.foodInfoName}>{name}</Text>
                    <View style={styleItemFood.foodPriceWrapper}>
                        <Text style={styleItemFood.foodPrice}>{formatPriceVND(price!)}</Text>
                        <Text style={styleItemFood.foodUnit}> / {unit}</Text>
                    </View>
                </View>
                <View style={styleItemFood.foodQuantityWrapper}>
                    <View style={styleItemFood.foodQuantityButton}>
                        <IconMinus style={styleItemFood.foodQuantityIcon} />
                    </View>
                    <Text style={styleItemFood.foodQuantityValue}>{quantity}</Text>
                    <View style={styleItemFood.foodQuantityButton}>
                        <IconPlus style={styleItemFood.foodQuantityIcon}/>
                    </View>
                </View>
        </View>
        </View>
    )
}

const styleItemFood = StyleSheet.create({
    listFoodWrapper: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginBottom: 20
    },
    foodItemWrapper: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F6FA',
        alignItems: 'center'
    },
    iconCheck: {
        width: 20,
        height: 20,
        borderRadius: 4
    },
    foodImage: {
        width: 50,
        height: 50,
        borderRadius: 4,
        marginHorizontal: 8
    },
    foodInfo: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    foodPriceWrapper: {
        display: 'flex',
        flexDirection: 'row'
    },
    foodPrice: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FF8B00',
      },
    foodUnit: {
        fontSize: 14,
        fontWeight: '400',
        color: '#28282B',
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
        color: '#000',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center'
    }

})

export default FoodMenuPage