import React, {
    Component
} from 'react';
import {
    View,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import Main from './main';

export default class app extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{
                    name: 'main',
                    component: Main
                }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    const Component = route.component;
                    return <Component {...route.params}
                                      navigator={navigator}/>
                }}

            />
        );
    }
}