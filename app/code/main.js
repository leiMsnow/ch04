import React, {Component} from 'react';
import {
    Container,
    Content,
    Footer,
    FooterTab,
    Badge,
    Button,
    Icon,
    Text,
} from 'native-base';
import Home from './home';
import More from './more';

export default class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <Container>
                {this._renderContent()}
                <Footer>
                    <FooterTab>
                        <Button active={this.state.selectedTab === 'home'}
                                onPress={() => this.setState({
                                    selectedTab: 'home'
                                })}>
                            <Text>首页</Text>
                            <Icon name="ios-apps-outline"/>
                        </Button>
                        <Button active={this.state.selectedTab === 'more'}
                                onPress={() => this.setState({
                                    selectedTab: 'more'
                                })}>
                            <Text>更多</Text>
                            <Icon name="ios-compass-outline"/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }

    _renderContent = () => {
        if (this.state.selectedTab === 'home') {
            return (
                <Content>
                    <Home navigator={this.props.navigator}/>
                </Content>
            );
        } else {
            return (
                <Content>
                    <More navigator={this.props.navigator}/>
                </Content>
            );
        }

    }
}