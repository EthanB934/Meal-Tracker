import { StyleSheet, Text, View } from 'react-native';
import '../../global.css';
const HomeScreenHeader = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff'
  },
  font: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 20,
    color: '#2d2d2d',
    fontWeight: 'semibold'
  }
});

export default HomeScreenHeader