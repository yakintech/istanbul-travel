import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Contacts from 'react-native-contacts'
import { Button, List } from 'react-native-paper';


const ContactList = () => {

    const [contactList, setcontactList] = useState<any[]>([]);

    useEffect(() => {

        Contacts.getAll().then(contacts => {
            setcontactList(contacts)
        })

    }, [])

    const deleteContact = (item: any) => {
        
        Contacts.deleteContact(item).then(() => {
            Contacts.getAll().then(contacts => {
                setcontactList(contacts)
            })
        })
        
    }

    const renderItem = ({ item }: any) => {
        return  <>
         <List.Item title={item.givenName}
                description={item.phoneNumbers[0].number}
                left={(props) => <List.Icon {...props} icon="folder" />
                }
            />
            <Button onPress={() => deleteContact(item)}>Delete</Button>
        </>
           
        
      

    }

    return (
        <>
            <FlatList
                data={contactList}
                renderItem={renderItem}
            />
        </>
    )
}

export default ContactList