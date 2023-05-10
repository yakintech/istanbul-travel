import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import { launchImageLibrary } from 'react-native-image-picker'
import { SafeAreaView } from 'react-native-safe-area-context'

const ImageLibrarySample = () => {

    const [imageUri, setimageUri] = useState('')

    const select = () => {
        launchImageLibrary({
            mediaType: 'photo',
        })
            .then((response) => {
                console.log(response)
                if (response.assets != undefined && response.assets.length > 0)
                    setimageUri(response?.assets[0]?.uri!)
            })
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={select}>Select Image From Library</Button>
            <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
        </SafeAreaView>
    )
}

export default ImageLibrarySample