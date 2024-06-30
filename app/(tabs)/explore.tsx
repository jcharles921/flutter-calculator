import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { TextInput, Button } from "react-native-paper";

export default function TabTwoScreen({ navigation }: { navigation: any }) {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <FontAwesome size={310} name="address-card-o" style={styles.headerImage} />
      }
    
    >
      <ThemedText type="title">Create an Account !</ThemedText>
      <View style={styles.formContainer}>
        <TextInput
          
          label="Username"
          mode="outlined"
          style={styles.input}
          textColor="white"
          theme={{ colors: { primary: "white" } }}
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          textColor="white"
          theme={{ colors: { primary: "white" } }}
        />
        <TextInput
          label=" Confirm Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          textColor="white"
          theme={{ colors: { primary: "white" } }}
        />

        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.button}
        >
          Sign Up
        </Button>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#e5e5e5",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  formContainer: {
    width: "100%",
    paddingTop: 16,
  },
  input: {
    marginBottom: 16,
    backgroundColor: "trasparent",
  },
  button: {
    marginTop: 8,
    backgroundColor: "#00d8ff",
  },
});
