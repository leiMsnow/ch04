import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Slider,
    Text,
} from 'react-native';

export default class slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderValue: 5
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Slider
                    minimumValue={0}
                    maximumValue={10}
                    style={{width: 200}}
                    step={1}
                    maximumTrackTintColor='cornflowerblue'
                    minimumTrackTintColor='aliceblue'
                    value={this.state.sliderValue}
                    onValueChange={(value) => {
                        this.setState({
                            sliderValue: value
                        })
                    }}
                />
                <Text>Slider value : {this.state.sliderValue}</Text>
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