import React from 'react';
import {
  Text, View, TouchableOpacity, Image,
} from 'react-native';
import styles from './Style';
import Fade from './Fade';

const data = require('./data.json')[0];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeFlag: true,
      info: data,
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
    const { homeFlag, info } = this.state;
    if (homeFlag) {
      return (
        <View style={styles.container}>
          <Fade>
            <Image style={styles.avatar} source={{ uri: info.avatar }} />
          </Fade>
          <Text style={styles.name}>{`${info.name.first_name} ${info.name.last_name}`}</Text>
          <TouchableOpacity style={styles.button} onPress={this.changeFlag}>
            <Text style={styles.buttonText}>Show work Info</Text>
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>{info.home.address}</Text>
            <Text style={styles.text}>{info.home.email}</Text>
            <Text style={styles.text}>{info.home.phone_number}</Text>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Fade>
          <Image style={styles.avatar} source={{ uri: info.avatar }} />
        </Fade>
        <Text style={styles.name}>{`${info.name.first_name} ${info.name.last_name}`}</Text>
        <TouchableOpacity style={styles.button} onPress={this.changeFlag}>
          <Text style={styles.buttonText}>Show home Info</Text>
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>{info.work.address}</Text>
          <Text style={styles.text}>{info.work.email}</Text>
          <Text style={styles.text}>{info.work.phone_number}</Text>
          <Text style={styles.text}>{info.work.company}</Text>
          <Text style={styles.text}>{`${info.work.department}, ${info.work.job_title}`}</Text>
        </View>
      </View>
    );
  }
}
