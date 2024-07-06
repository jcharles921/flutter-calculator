import { Drawer } from 'expo-router/drawer';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

export default function DrawerLayout() {
  const navigation:any = useNavigation();

  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{
                headerLeft: () => (
          <Ionicons
            name="menu"
            size={24}
            color="white"  // Always white
            style={{ marginLeft: 10 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        ),
          drawerLabel: "Home",
          title: "",
        }}
      />

      {/* Add other drawer screens here if needed */}
    </Drawer>
  );
}