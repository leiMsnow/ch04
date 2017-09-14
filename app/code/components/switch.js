import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Switch,
} from 'react-native';

export default class myswitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Switch
                    onTintColor='blue'
                    thumbTintColor='green'
                    tintColor='black'
                    onValueChange={() => this.setState({
                        isOn: !this.state.isOn
                    })}
                    value={this.state.isOn}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker: {
        width: 200,
        height: 200
    }

});