import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps81538Navigator from '../features/Maps81538/navigator';
import Add-Item81537Navigator from '../features/Add-Item81537/navigator';
import Maps81533Navigator from '../features/Maps81533/navigator';
import UserProfile81529Navigator from '../features/UserProfile81529/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps81538: { screen: Maps81538Navigator },
Add-Item81537: { screen: Add-Item81537Navigator },
Maps81533: { screen: Maps81533Navigator },
UserProfile81529: { screen: UserProfile81529Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
