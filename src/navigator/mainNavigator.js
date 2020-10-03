import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial2123696Navigator from '../features/Tutorial2123696/navigator';
import BlankScreen1123695Navigator from '../features/BlankScreen1123695/navigator';
import BlankScreen0123694Navigator from '../features/BlankScreen0123694/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial2123696: { screen: Tutorial2123696Navigator },
BlankScreen1123695: { screen: BlankScreen1123695Navigator },
BlankScreen0123694: { screen: BlankScreen0123694Navigator },

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
