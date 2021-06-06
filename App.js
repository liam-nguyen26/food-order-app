import React, { useState } from "react";

import { enableScreens } from "react-native-screens";

import MealsNavigator from "./navigation/MealsNavigator";

// const fechFonts = () => {
//   Font.loadAsync({
//     "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//     "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
//   });
// };

enableScreens();

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fechFonts}
  //       onFinish={() => setFontLoaded(true)}
  //     />
  //   );
  // }

  return <MealsNavigator />;
}
