import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import IconTable from '../../assets/icon-table.svg'




export type ItemCardProps = {
  backgroundColor?: string;
  tableName?: string;
  onTableClick?: () => void;
};

const TableItemCard = ({
  backgroundColor, 
  tableName,
  onTableClick
}: ItemCardProps) => {


  const styles = createStyles();

  return (
    <TouchableOpacity style={styles.tableWrapper} onPress={onTableClick}>
      <IconTable style={styles.tableIcon} color={backgroundColor} />
      <View style={styles.tableNameBox} >
        <Text style={styles.tableName}>{tableName}</Text>
      </View>
    </TouchableOpacity>
    
  )
  
}

const createStyles = () => StyleSheet.create({
  tableWrapper: {
    width: 80,
    height: 80,
    position: 'relative'
  },
  tableIcon: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  tableNameBox: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  tableName: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 14
  }
});



export default TableItemCard

