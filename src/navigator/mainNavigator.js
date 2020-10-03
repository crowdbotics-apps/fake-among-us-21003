import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp11123697Navigator from '../features/SignUp11123697/navigator';
import Tutorial2123696Navigator from '../features/Tutorial2123696/navigator';
import BlankScreen1123695Navigator from '../features/BlankScreen1123695/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp11123697: { screen: SignUp11123697Navigator },
Tutorial2123696: { screen: Tutorial2123696Navigator },
BlankScreen1123695: { screen: BlankScreen1123695Navigator },

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
