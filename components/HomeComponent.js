import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card} from 'react-native-elements';
import { CAMPSITES, Campsites } from '../shared/campsites';
import { PARTNERS, Partners } from '../shared/partners';
import { PROMOTIONS, Promotions } from '../shared/promotions';

function RenderItem({item}){
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/react-lake.jpg')}>
                <Text
                    style={{maargin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.state.campsites.filter(campsite => campsite.featured)[0]} />
                <RenderItem
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]} />
                <RenderItem
                    item={this.state.partners.filter(partner => partner.featured)[0]} />
            </ScrollView>
        );
    }
}

export default Home;