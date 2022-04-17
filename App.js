import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import AudioProvider from "./app/context/AudioProvider";
import AppNavigator from "./app/navigation/AppNavigator";
import color from "./app/misc/color";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: color.APP_BG,
  },
};

function App() {
  return (
    <AudioProvider>
      <NavigationContainer theme={MyTheme}>
        <AppNavigator />
      </NavigationContainer>
    </AudioProvider>
  );
  // return (
  //   <View style={{marginTop: 50}}>
  //     <AudioListItem/>
  //   </View>
  // )
}

export default App;
