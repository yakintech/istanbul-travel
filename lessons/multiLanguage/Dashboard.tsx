import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import './../../assets/i18n/i18n'
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';
import i18n from './../../assets/i18n/i18n';
import axios from 'axios';

const Dashboard = ({ navigation }: any) => {
    const [currentLanguage, setcurrentLanguage] = useState('en')
    const [products, setproducts] = useState([]);


    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            })


    }, [])


    const { t } = useTranslation();

    const changeEn = () => {

        i18n.changeLanguage('en')
            .then(res => {
                setcurrentLanguage('en')
            })
    }

    const changeTr = () => {

        i18n.changeLanguage('tr')
            .then(res => {
                setcurrentLanguage('tr')
            })
    }

    return (<>
        <Text>{currentLanguage}</Text>
        <Text style={{ fontSize: 40 }}>{t("hello")}</Text>
        <Button onPress={changeEn}>English</Button>
        <Button onPress={changeTr}>Turkish</Button>

        <FlatList
            data={products}
            renderItem={({ item }: any) => <Pressable onPress={() => navigation.navigate('Detail', { id: item.id })}><Text style={{ fontSize: 30 }}>{item.name}</Text></Pressable>}
        />

    </>
    )
}

export default Dashboard