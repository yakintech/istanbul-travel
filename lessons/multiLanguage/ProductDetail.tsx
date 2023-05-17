import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const ProductDetail = ({ route } : any) => {

    let { id } = route.params;
    const [detail, setdetail] = useState<any>({});
    const { t } = useTranslation();


    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products/' + id)
            .then(res => {
                setdetail(res.data);
            })

    }, [])


    return (
        <View>
            <Text style={{fontSize:35}}>{t("name")}: {detail.name}</Text>
            <Text style={{fontSize:35}}>{t("unitprice")}: {detail.unitPrice}</Text>
            <Text style={{fontSize:35}}>{t("stock")}: {detail.unitsInStock}</Text>

        </View>
    )
}

export default ProductDetail