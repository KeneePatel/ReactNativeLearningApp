import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import appScreen from "./screens/app";
import BoxScreen from './screens/BoxScreen';
import ColorChangeScreen from './screens/ColorChangeScreen';
import ColorScreen from './screens/ColorScreen';
import componentsScreen from "./screens/components";
import CounterScreen from './screens/CounterScreen';
import ImageScreen from './screens/ImageScreen';
import ListScreen from './screens/ListScreen';
import TextScreen from './screens/TextScreen';

const navigator = createStackNavigator(
  {
    App: appScreen,
    Components: componentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    ColorChanger: ColorChangeScreen,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName:'App',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);