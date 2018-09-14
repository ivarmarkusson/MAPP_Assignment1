//GLOBAL.self = GLOBAL; // eslint-disable-line
import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeFlag: true,
      info: require("./data.json")[0]
    };
  }

  changeFlag = () => {
    const { homeFlag } = this.state;
    if (homeFlag) {
      this.setState({ homeFlag: false });
    } else {
      this.setState({ homeFlag: true });
    }
  };

  render() {
    if (this.state.homeFlag) {
      return (
        <View style={styles.container}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: this.state.info.avatar }}
          />
          <Text>
            {this.state.info.name.first_name} {this.state.info.name.last_name}
          </Text>
          {<Button title="Show work Info" onPress={this.changeFlag} />}
          <Text>{this.state.info.home.address}</Text>
          <Text>{this.state.info.home.email}</Text>
          <Text>{this.state.info.home.phone_number}</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: this.state.info.avatar }}
        />
        <Text>
          {this.state.info.name.first_name} {this.state.info.name.last_name}
        </Text>
        {<Button title="Show home Info" onPress={this.changeFlag} />}
        <Text>{this.state.info.work.address}</Text>
        <Text>{this.state.info.work.email}</Text>
        <Text>{this.state.info.work.phone_number}</Text>
        <Text>{this.state.info.work.company}</Text>
        <Text>
          {this.state.info.work.department}, {this.state.info.work.job_title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  } /*,
  TextStyle: {
    padding: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: "10%",
    width: "70%",
    alignItems: "center",
    justifyContent: "center"
  }*/
});
