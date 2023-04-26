import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IstanbulBoxItem from '../../components/shared/IstanbulBoxItem';
import PopulerBoxItem from '../../components/shared/PopulerBoxItem';


const Explore = () => {

    const [searchText, setsearchText] = useState('');


    const istanbulItems = [
        {

            title: 'Istanbul Archeology Museum',
            path: 'https://muze.gov.tr/s3/SectionPicture/SP_e75c08c5-32be-419b-9e5d-fcce4b6fdd72.jpg'
        },
        {

            title: 'Istanbul Pera Museum',
            path: 'https://istanbultourstudio.s3.amazonaws.com/uploads/media_content/picture/13/medium_istanbul_pera_museum_interior4.jpg'
        }
        ,
        {

            title: 'Istanbul Pera Museum',
            path: 'https://istanbultourstudio.s3.amazonaws.com/uploads/media_content/picture/13/medium_istanbul_pera_museum_interior4.jpg'
        },
        {

            title: 'Istanbul Pera Museum',
            path: 'https://istanbultourstudio.s3.amazonaws.com/uploads/media_content/picture/13/medium_istanbul_pera_museum_interior4.jpg'
        },
        {

            title: 'Istanbul Pera Museum',
            path: 'https://istanbultourstudio.s3.amazonaws.com/uploads/media_content/picture/13/medium_istanbul_pera_museum_interior4.jpg'
        },
        {

            title: 'Istanbul Pera Museum',
            path: 'https://istanbultourstudio.s3.amazonaws.com/uploads/media_content/picture/13/medium_istanbul_pera_museum_interior4.jpg'
        }
    ]


    const renderIstanbulItem = ({ item }: any) => {
        return <IstanbulBoxItem item={item}></IstanbulBoxItem>
    }

    const renderPopulerItem = ({ item }: any) => {
        return <PopulerBoxItem item={item}></PopulerBoxItem>
    }

    return (<>
        <View style={{ flex: 2, justifyContent: 'space-between', flexDirection: 'row' }}>
            <View>
                <Text style={styles.name}>Hey Cagatay,</Text>
                <Text style={styles.title}>Where to next?</Text>
            </View>
            <View>
                <Icon name="bell-outline" size={40} color="#100F0F" />
            </View>
        </View>

        <View style={{ flex: 1 }}>
            <TextInput
                style={styles.input}
                onChangeText={setsearchText}
                value={searchText}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
        </View>

        <View style={{ flex: 3 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Trending Destinations</Text>
                <Text>View All</Text>
            </View>
            <View>
                <FlatList
                    horizontal={true}
                    data={istanbulItems}
                    renderItem={renderIstanbulItem}
                />
            </View>
        </View>

        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Populer Destinations</Text>
                <Text>View All</Text>
            </View>
            <View>
                <FlatList
                    horizontal={true}
                    data={istanbulItems}
                    renderItem={renderPopulerItem}
                />
            </View>
        </View>

    </>)
}


const styles = StyleSheet.create({
    name: {
        color: '#100F0F',
        fontSize: 14
    },
    title: {
        color: '#100F0F',
        fontSize: 24
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})

export default Explore