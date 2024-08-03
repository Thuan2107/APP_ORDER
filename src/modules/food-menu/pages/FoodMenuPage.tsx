import { View, Text, StyleSheet, Image, ListRenderItem, FlatList, TouchableOpacity} from "react-native"
import IconChecked from '../../../../assets/icon-check-avtive.svg'
import IconUncheck from '../../../../assets/icon-uncheck.svg'
import IconPlus from '../../../../assets/icon-plus.svg';
import IconMinus from '../../../../assets/icon-minus.svg';
import IconCheck24 from '../../../../assets/icon-check-24.svg'
import IconCancel24 from '../../../../assets/icon-cancel-24.svg'

import imageFoodDefault from '../../../../assets/food-default.png'
import { useEffect, useState } from "react";
import { Food } from "../models/FoodModel";
import axiosInstance from "../../../utils/axiosInstance";
import { formatPriceVND } from "../../../utils/appUtils";
import Toast from 'react-native-toast-message';
import HeaderBackPress from "../../../components/HeaderBackPress";
import { ORDER_STATUS } from "../../../constants/OrderStatusConstants";
import { useRoute } from "@react-navigation/native";
import { MenuRequestParams, getMenu } from "../api/getFoodMenuApi";
import { showToast } from "../../../utils/showToastMessage";
import { AddFoodRequestBody, FoodModelToAdd, addFoodApi } from "../api/addFoodApi";
const FoodMenuPage = () => {
    const route = useRoute<any>();
    const { orderId, orderName } = route.params;
    const [listFood, setListFood] = useState<Food[]>([])
    const [isChecked, setIsChecked] = useState(false);
    const isAddFood = listFood.find((food) => food.isChecked)
    const orderStatusColor = ORDER_STATUS[0].colorText
    const [listFoodToAdd, setListFoodToAdd] = useState<FoodModelToAdd[]>([])
    const handleCheckToggle = (id: number) => {
        setListFood(prevList =>
            prevList.map(item =>
                item.id === id 
                ? { ...item,
                    isChecked: !item.isChecked,
                    quantity: !item.isChecked ? 1 : item.quantity,  
                } 
                : item
            )
        );
    };

    const handleItemPlus = (id: number) => {
        setListFood(prevList =>
            prevList.map(item =>
                item.id === id ? { ...item, quantity: (item.quantity ?? 0) + 1, isChecked: true } : item
            )
        );
    };

    const handleItemMinus = (id: number) => {
        setListFood(prevList => {
            const updatedList = prevList.map(item => {
                if (item.id === id) {
                    const newQuantity = Math.max((item.quantity ?? 0) - 1, 0);
                    // Set isCheck to 0 if quantity is 0
                    return { ...item, quantity: newQuantity, isChecked: newQuantity !== 0};
                }
                return item;
            });
            
            return updatedList;
        });
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchMenu();
                setListFood(data?.data.list || [])
                
            } catch (err) {
                
            }
        };

        loadData();
        
    }, []);
    
    const handleListFoodToAdd = (listFoodMenu: Food[]): FoodModelToAdd[] => {
        const foodToAdd: FoodModelToAdd[]  = listFoodMenu.filter(foodMenu => foodMenu.isChecked).map(foodMenu => ({
            food_name: foodMenu.name,
            note: '',
            buy_one_get_one_foods: [], 
            quantity: foodMenu.quantity,
            is_allow_print: 0,
            restaurant_kitchen_place_id: 0,
            addition_foods: [], 
            is_gift: 0,
            restaurant_vat_config_id: 0,
            price: foodMenu.price,
            name: "",
            id: foodMenu.id,
            discount_percent: 0,
        }))

        return foodToAdd
    }

      
    const fetchMenu = async () => {
        const params: MenuRequestParams = {
            key_search: "",
            category_id: -1,
            branch_id: 2879,
            is_allow_employee_gift: -1,
            is_get_restaurant_kitchen_place: -1,
            limit: 50,
            category_type: -1,
            is_out_stock: -1,
            page: 1,
            area_id: 5897,
            status: 1,
        };
        
        try {
            const response = await getMenu(params);
            return response.data;
        } catch (error) {
            console.error(error); // Handle the error
        }
    };

    const callApiAddFood = async (orderId: number) => {
        const body: AddFoodRequestBody = {
            foods: listFoodToAdd,
            branch_id: 2879
        }

        try {
            const response = await addFoodApi(orderId, body);
            return response.data;
        } catch (error) {
            console.error(error); // Handle the error
        }
    }



    const renderItem: ListRenderItem<Food> = ({ item }) => (
        <ItemFood
            name={item.name}
            price={item.price}
            unit={item.unit_type}
            quantity={item.quantity ?? 0}
            isChecked={item.isChecked}
            onCheckToggle={() => handleCheckToggle(item.id)}
            handlePlus={() => handleItemPlus(item.id)}
            handleMinus={() => handleItemMinus(item.id)}
        />
    );

    return (
        <View style={styleItemFood.foodMenuPageWrapper}>
            <HeaderBackPress color={orderStatusColor} title={`Gọi món - ${orderName}`} />

            <View style={styleItemFood.listFoodWrapper}>
                <FlatList
                    data={listFood}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    />
            </View>
            {isAddFood && <ActionBottom />}
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
    handlePlus: () => void;
    handleMinus: () => void;
  };

const ItemFood = ({
        name, 
        price, 
        unit, 
        quantity, 
        isChecked, 
        onCheckToggle,
        handlePlus,
        handleMinus} : ItemFoodProps) => {
    return (
        <TouchableOpacity onPress={handlePlus} style={styleItemFood.foodItemWrapper}>
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
                {
                    isChecked && 
                    <View style={styleItemFood.foodQuantityWrapper}>
                        <TouchableOpacity onPress={handleMinus} style={styleItemFood.foodQuantityButton}>
                            <IconMinus style={styleItemFood.foodQuantityIcon} />
                        </TouchableOpacity>
                        <Text style={styleItemFood.foodQuantityValue}>{quantity}</Text>
                        <TouchableOpacity onPress={handlePlus} style={styleItemFood.foodQuantityButton}>
                            <IconPlus style={styleItemFood.foodQuantityIcon}/>
                        </TouchableOpacity>
                    </View>
                }
                </View>
        </TouchableOpacity>
    )
}

const ActionBottom = () => {
    return (
        <View style={styleItemFood.actionBottomWrapper}>
            <TouchableOpacity style={[styleItemFood.actionButton, {backgroundColor: '#F1F2F5'}]}>
                <IconCancel24 style={styleItemFood.actionIcon} />
                <Text style={[styleItemFood.actionName, {color: '#F7002E'}]}>huỷ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styleItemFood.actionButton, {backgroundColor: '#FF8B00'}]}>
                <IconCheck24 style={styleItemFood.actionIcon} />
                <Text style={[styleItemFood.actionName, {color: '#FFFFFF'}]}>đồng ý</Text>
            </TouchableOpacity>
        </View>
    )
}

const styleItemFood = StyleSheet.create({
    foodMenuPageWrapper:{
        position: 'relative',
        height: '100%'
    },
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
    },
    actionBottomWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        shadowColor: '#000000', // shadow color
        shadowOffset: { width: 0, height: -4 }, // offset
        shadowOpacity: 0.1, // opacity
        shadowRadius: 8, 
        padding: 12,
        borderRadius: 10
    },
    actionButton:{
        width: 160,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#F1F2F5',
        paddingHorizontal: 20,
        paddingVertical: 12
    },
    actionIcon: {
        width: 24,
        height: 24,
    },
    actionName: {
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'uppercase'
    }

})

export default FoodMenuPage

