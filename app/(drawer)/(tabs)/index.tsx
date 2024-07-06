import { Image, StyleSheet, View } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TextInput, Button } from "react-native-paper";

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
     
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText  type="title">Welcome to my App!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">We are happy to see you back !</ThemedText>
        <View style={styles.formContainer}>
          <TextInput
            label="Username"
            mode="outlined"
            style={styles.input}
            textColor="white"
            theme={{ colors: {primary:"white" } }}
          />
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            style={styles.input}
            textColor="white"
            theme={{ colors: {primary:"white" } }}
          />

          <Button
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={styles.button}
          >
            Login
          </Button>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
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
