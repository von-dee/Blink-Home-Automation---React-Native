import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './pages/Home';
import Stream from './pages/Stream';
import Cameras from './pages/Cameras';
import Lights from './pages/Lights';
import Fans from './pages/Fans';

const AppNavigator = createStackNavigator({
        Home: { screen: Home },
        Stream: { screen: Stream },
        Cameras: { screen: Stream },
        Lights: { screen: Stream },
        Fans: { screen: Stream },
    },
    {
        headerMode: 'none',
        navigationOptions: {
        headerVisible: false,
    }
   }
);


const AppNav = createAppContainer(AppNavigator);

export default AppNav;