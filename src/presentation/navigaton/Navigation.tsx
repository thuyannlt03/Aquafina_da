import React, { useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { AuthenNavigator } from './Authen/AuthenNavigator'
import PureMap from '../container/Author/pure_map/PureMap'
import PureWorld from '../container/Author/pure_world/PureWorld'

import Home from '../container/Author/home/Home'


const Navigation = () => {
  

  return (
    // <NavigationContainer>
    //     <AuthenNavigator/>
    // </NavigationContainer>

   
    //<PureWorld/>
    //<PureMap/>
    <Home/>
  )
}

export default Navigation