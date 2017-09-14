import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TextInput,
    Button,
    ScrollView,
    Dimensions,
    ListView,
    Alert,
    TouchableHighlight,
    StatusBar,
    Image,
    RefreshControl,
} from 'react-native';
import Detail from './detail';
import Banner from './components/swiper';

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            dataSource: ds.cloneWithRows([
                {
                    image: require('../res/images/phone.jpg'),
                    title: '商品1',
                    subTitle: '描述1',
                },
                {
                    image: require('../res/images/phone.jpg'),
                    title: '商品1',
                    subTitle: '描述1',
                },
                {
                    image: require('../res/images/phone.jpg'),
                    title: '商品1',
                    subTitle: '描述1',
                },
                {
                    image: require('../res/images/phone.jpg'),
                    title: '商品1',
                    subTitle: '描述1',
                },
                {
                    image: require('../res/images/phone.jpg'),
                    title: '商品1',
                    subTitle: '描述1',
                },
                {
                    image: require('../res/images/phone.jpg'),
                    title: '商品1',
                    subTitle: '描述1',
                },
                {
                    image: require('../res/images/phone.jpg'),
                    title: '商品1',
                    subTitle: '描述1',
                }
            ]),
            advertisements: [
                {
                    // url: 'https://img12.360buyimg.com/babel/jfs/t7498/194/2982159482/95724/7ddf2ca5/59b773aaNe4fe32e6.jpg'
                    url: require('../res/images/ad_image_01.jpg')
                },
                {
                    // url: 'https://img10.360buyimg.com/babel/jfs/t8026/91/1216032048/194119/eaef445a/59b64accN676ce1f9.jpg'
                    url: require('../res/images/ad_image_02.jpg')
                },
                {
                    // url: 'https://img11.360buyimg.com/babel/jfs/t9427/155/1237940095/119440/7a97ca27/59b65b92N06349ee1.jpg'
                    url: require('../res/images/ad_image_03.jpg')
                }
            ],
            searchText: '',
            isRefreshing: false,
        };
    }

    render() {
        const advertisementCount = this.state.advertisements.length;
        const indicatorWidth = circleSize * advertisementCount + circleMargin * advertisementCount * 2;
        const left = (Dimensions.get('window').width - indicatorWidth) / 2;
        return (
            <View style={styles.container}>
                {/* statusBar */}
                <View>
                    <StatusBar
                        backgroundColor={'lightcoral'}
                        barStyle={'default'}
                        networkActivityIndicatorVisible={true}
                    />
                </View>
                {/* searchBar */}
                <View style={styles.searchBar}>
                    <TextInput style={styles.input} placeholder='搜索商品'
                               onChangeText={(text) => {
                                   this.setState({searchText: text});
                               }}
                    />
                    <Button style={styles.button} title='搜索'
                            onPress={() => Alert.alert('搜索了' + this.state.searchText, null, null)}
                    />
                </View>
                {/* 轮播图 */}
                <View style={styles.advertisement}>
                    <Banner advertisements={this.state.advertisements}/>
                </View>
                {/* 商品列表 */}
                <View style={styles.products}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                        renderSeparator={this._renderSeparator}
                        refreshControl={this._renderRefreshControl()}
                    />
                </View>
            </View>
        );
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <TouchableHighlight onPress={() => {
                const {navigator} = this.props;
                if (navigator) {
                    navigator.push({
                        name: 'detail',
                        component: Detail,
                        params: {
                            productTitle: rowData.title,
                        }
                    });
                }
            }}>
                <View style={styles.row}>
                    <Image
                        source={rowData.image}
                        style={styles.productImage}
                    />
                    <View style={styles.productItem}>
                        <Text style={styles.productTitle}>
                            {rowData.title}
                        </Text>
                        <Text style={styles.productSubTitle}>
                            {rowData.subTitle}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    _renderSeparator(sectionID, rowID, adjacentRowHightlighted) {
        return (
            <View key={`${sectionID}-${rowID}`} style={styles.divider}>
            </View>
        )
    }

    _renderRefreshControl() {
        return (
            <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this._onRefresh}
                tintColor={'gray'}
                title={'正在刷新数据，请稍后...'}
                titleColor={'black'}
            />
        );
    }

    _onRefresh = () => {
        this.setState({
            isRefreshing: true
        });
        setTimeout(() => {
            const products = Array.from(new Array(10)).map((value, index) => ({
                image: require('../res/images/phone.jpg'),
                title: '商品' + index,
                subTitle: '描述' + index,
            }));
            this.setState({
                isRefreshing: false,
                dataSource: ds.cloneWithRows(products)
            });
        }, 2000);
    }
}

const circleSize = 8;
const circleMargin = 5;

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        height: 40,
        flexDirection: 'row',
    },
    advertisement: {
        height: 180,
    },
    advertisementContent: {
        width: Dimensions.get('window').width,
        height: 180,
    },
    products: {
        flex: 1,
    },
    input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
    button: {
        flex: 1,
    },
    row: {
        height: 100,
        flexDirection: 'row',
        backgroundColor: 'white',

    },
    productImage: {
        marginLeft: 10,
        marginRight: 10,
        width: 80,
        height: 80,
        alignSelf: 'center',
    },
    productItem: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    productTitle: {
        flex: 3,
        fontSize: 16,
    },
    productSubTitle: {
        flex: 2,
        fontSize: 14,
        color: 'gray',
    },
    indicator: {
        position: 'absolute',
        top: 160,
        flexDirection: 'row',
    },
    circle: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: 'gray',
        marginHorizontal: circleMargin,
    },
    circleSelected: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: 'white',
        marginHorizontal: circleMargin,
    },
    divider: {
        height: 1,
        width: Dimensions.get('window').width - 5,
        marginLeft: 5,
        backgroundColor: 'lightgray',
    }

});
