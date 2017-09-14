import React, {Component} from 'react';
import {TabBarIOS} from 'react-native';
import Home from './home';
import More from './more';

export default class main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <TabBarIOS
                unselectedTintColor='gray'
                tintColor='white'
                barTintColor='orange'>
                <TabBarIOS.Item
                    title='首页'
                    icon={require('../res/images/ic_home.png')}
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => {
                        this.setState({selectedTab: 'home'});
                    }}>
                    <Home navigator={this.props.navigator}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='更多'
                    systemIcon='more'
                    badge={2}
                    selected={this.state.selectedTab === 'more'}
                    onPress={() => {
                        this.setState({selectedTab: 'more'});
                    }}>
                    <More navigator={this.props.navigator}/>
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
}