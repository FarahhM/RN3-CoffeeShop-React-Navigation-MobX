import { createStackNavigator } from "react-navigation";

// component

import Login from "../Login";
import CoffeeList from "../CoffeeList";
import CoffeeDetail from "../CoffeeDetail";
import CoffeeCart from "..//CoffeeCart";

const OurStack = createStackNavigator(
  {
    Login: Login,
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail,
    CoffeeCart: CoffeeCart
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTextStyle: {
        fontWieght: "bold"
      },
      headerTintColor: "white"
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

export default OurStack;
