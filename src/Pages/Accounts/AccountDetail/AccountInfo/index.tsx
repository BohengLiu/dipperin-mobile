import { View, Text, Image } from "react-native"
import React, { Fragment } from "react"
import AccountModel from 'Models/account'
interface Props {
    account: AccountModel
}

const AccountInfo = (props: Props) => {

    return (
        <View>
            {/* <Image/> */}
            <Text>555555555.3333 DIP</Text>
        </View>
    )

}

export default AccountInfo 