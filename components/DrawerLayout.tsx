import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Colors } from "@/constants/Colors"; // Adjust path as per your setup
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import TabTwoScreen from "@/app/(drawer)/(tabs)/explore";
import TabLayout from "@/app/(drawer)/(tabs)/_layout";
import HomeScreen from "@/app/(drawer)/(tabs)";

const Drawer = createDrawerNavigator();

const DrawerLayout: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Close drawer"
            onPress={() => props.navigation.closeDrawer()}
          />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name="index"
        component={TabLayout}
        options={{
          drawerLabel: "Login",
          drawerIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "log-in" : "log-in-outline"}
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="explore"
        component={TabTwoScreen}
        options={{
          drawerLabel: "Sign up",
          drawerIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? "person-add-alt-1" : "person-add-alt"}
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="calculator"
        component={HomeScreen}
        options={{
          drawerLabel: "Calculator",
          drawerIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "calculator" : "calculator-outline"}
              color={color}
              size={20}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerLayout;
