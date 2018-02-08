import React,{Component} from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { backScreen } from './actions/navigation';

class test extends Component {

  _onBacktScreen = () => this.props.backScreen();

    render() {
        return (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> ini adalah test</Text>
            <Button
              title="backScreen"
              backgroundColor="green"
              onPress={this._onBacktScreen}
            />
          </View>
        );
    }
}

export default connect(null,{backScreen}) (test)
