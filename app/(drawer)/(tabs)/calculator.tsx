import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons"; // Import FontAwesome5 from Expo vector icons
import Row from "../../../components/Row";
import calculator, { initialState } from "../../../components/calculator";

export default class App extends Component {
  state = initialState;

  HandleTap = (type: any, value: any) => {
    this.setState((state) => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <MaterialCommunityIcons
          style={{ position: "absolute", top: 0, alignSelf: "center" }}
          size={310}
          name="calculator-variant"
          color={"white"}
        />
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

          <Row>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("clear", null)}
            >
              <FontAwesome5 name="backspace" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("posneg", null)}
            >
              <FontAwesome5 name="minus" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("percentage", null)}
            >
              <FontAwesome5 name="percent" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("operator", "/")}
            >
              <FontAwesome5 name="divide" size={24} color="#fff" />
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("number", 7)}
            >
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("number", 8)}
            >
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("number", 9)}
            >
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("operator", "*")}
            >
              <FontAwesome5 name="times" size={24} color="#fff" />
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("number", 5)}
            >
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("number", 6)}
            >
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("number", 7)}
            >
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("operator", "-")}
            >
              <FontAwesome5 name="minus" size={24} color="#fff" />
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("number", 1)}
            >
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("number", 2)}
            >
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("number", 3)}
            >
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("operator", "+")}
            >
              <FontAwesome5 name="plus" size={24} color="#fff" />
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("number", 0)}
            >
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("number", ".")}
            >
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.HandleTap("equal", "=")}
            >
              <FontAwesome5 name="equals" size={24} color="#fff" />
            </TouchableOpacity>
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
