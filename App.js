import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated
} from "react-native";

class Fade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnimation: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 5000
    }).start();
  }

  render() {
    let { fadeAnimation } = this.state;
    return (
      <Animated.Text
        style={{
          ...this.props.style,
          opacity: fadeAnimation
        }}
      >
        {this.props.children}
      </Animated.Text>
    );
  }
}

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
          <Fade>
            <Text style={styles.name}>
              {this.state.info.name.first_name} {this.state.info.name.last_name}
            </Text>
          </Fade>
          <TouchableOpacity
            style={styles.button}
            title="Show work Info"
            onPress={this.changeFlag}
          >
            <Text style={styles.buttonText}>show work Info</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{this.state.info.home.address}</Text>
          <Text style={styles.text}>{this.state.info.home.email}</Text>
          <Text style={styles.text}>{this.state.info.home.phone_number}</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: this.state.info.avatar }}
        />
        <Fade>
          <Text style={styles.name}>
            {this.state.info.name.first_name} {this.state.info.name.last_name}
          </Text>
        </Fade>
        <TouchableOpacity
          style={styles.button}
          title="Show home Info"
          onPress={this.changeFlag}
        >
          <Text style={styles.buttonText}>show home Info</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{this.state.info.work.address}</Text>
        <Text style={styles.text}>{this.state.info.work.email}</Text>
        <Text style={styles.text}>{this.state.info.work.phone_number}</Text>
        <Text style={styles.text}>{this.state.info.work.company}</Text>
        <Text style={styles.text}>
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
  },
  text: {
    fontSize: 18,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "80%",
    textAlign: "center",
    margin: 10
  },
  button: {
    marginTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#00BCD4",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },
  name: {
    fontSize: 20,
    margin: 20
  }
});
