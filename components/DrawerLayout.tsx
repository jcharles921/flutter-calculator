import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "@/constants/Colors"; // Adjust path as per your setup
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import TabTwoScreen from "@/app/(tabs)/explore";
import TabLayout from "@/app/(tabs)/_layout";
import HomeScreen from "@/app/(tabs)";

const Drawer = createDrawerNavigator();

const DrawerLayout: React.FC = () => {
  const dimensions = useWindowDimensions();

  return (
    <NavigationContainer>
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
            drawerLabel: "Login", // Label for the drawer item
            drawerIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "log-in" : "log-in-outline"}
                color={color}
                size={20}
              /> // Adjust as per your TabBarIcon component
            ),
          }}
        />
        <Drawer.Screen
          name="explore"
          component={TabTwoScreen}
          options={{
            drawerLabel: "Sign up", // Label for the drawer item
            drawerIcon: ({ color, focused }) => (
              <MaterialIcons
                name={focused ? "person-add-alt-1" : "person-add-alt"}
                color={color}
              /> // Adjust as per your TabBarIcon component
            ),
          }}
        />
        <Drawer.Screen
          name="calculator"
          component={HomeScreen}
          options={{
            drawerLabel: "Calculator", // Label for the drawer item
            drawerIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "calculator" : "calculator-outline"}
                color={color}
              /> // Adjust as per your TabBarIcon component
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerLayout;
