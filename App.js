import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TelaJavaScript from "./componentes/TelaJavaScript";
import TelaReact from "./componentes/TelaReact";
import TelaNode from "./componentes/TelaNode";

const MenuNav = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MenuNav.Navigator>
        <MenuNav.Screen name="Tela Java Script" component={ TelaJavaScript } /> 
        <MenuNav.Screen name="Tela React" component={ TelaReact } /> 
        <MenuNav.Screen name="Tela Node" component={ TelaNode } /> 
      </MenuNav.Navigator>
    </NavigationContainer>
  );
}

