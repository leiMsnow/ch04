import React, {Component} from 'react';
import {
    StyleSheet,
    WebView,
    View,
} from 'react-native';


export default class webview extends Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri: 'https://www.baidu.com'}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    web: {
        flex: 1
    }
});