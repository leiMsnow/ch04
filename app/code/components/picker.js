import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Picker,
} from 'react-native';

export default class picker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'java'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.language}
                    onValueChange={(language) => {
                        this.setState({
                            language: language
                        })
                    }}>
                    <Picker.Item label='Java' value='java'/>
                    <Picker.Item label='JavaScript' value='javascript'/>
                </Picker>
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