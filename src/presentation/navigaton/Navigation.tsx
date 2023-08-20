import React, { useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { AuthenNavigator } from './Authen/AuthenNavigator'

import Footer from '../component/footer/Footer'


const Navigation = () => {
  

  return (
    <NavigationContainer>
        <AuthenNavigator/>
    </NavigationContainer>

    //<PureGift/>
    //<PureWorld/>
  )
}

export default Navigation