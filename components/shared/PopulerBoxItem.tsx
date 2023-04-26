import { View, Text, Image } from 'react-native'
import React from 'react'

const PopulerBoxItem = (props: any) => {
    return (<View>
        <Image
            style={{
                width: 200,
                height: 200
            }}
            source={{
                uri: props.item.path,
            }}
        />
        <Text>{props.item.title}</Text>

    </View>
    )
}

export default PopulerBoxItem