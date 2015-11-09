/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  StatusBarIOS
} = React;

import TabBarNavigator from 'react-native-tabbar-navigator';

const iconData = {
  speedGameLogo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAMAAAAPkIrYAAABAlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////95EvdTAAAAVXRSTlMAAQIDBQYHCQoTGhsgISIjJykqKy4vRkdJS1BUVVZcXV5iY2ZnbH+AjpqbnZ6goqOlpqqtr7CytLW5vL7AxcjMztPV19na3N7g4ubr7e/x8/X3+fv9dz8tXAAAAbxJREFUWMPV1tdSwlAQBuANwY4VbNjAXkDBLhbEQqyo4P/+r+IFoAIhp+QfZ9ybZGbPfJOcs9msSGA4qWe8rzhCiOgFACBHwNxL1CMfGnMOARY2D9AwDzwM4GEFIpYAEVumYaNl742ExT/RGXaYL2WHdaFssIlulDkWQJligZQZpqBMMCWl3xw1KCDNo1DRoca1KMDlUQ88CkkedaQ8x2EVVWlcTwN2y5kr4zwu96rHuUkDADKR7pR7BABY8lRWUeIntevpgFeLXjWWviqo6pBql5yC5oZXY8rDS/EoeeVRUR4lzoeWNaLVGFa1LL0m4+SYWP5fYtWRNAurxkRIWL2uKFizRAnYT7WHxF5KxcGf9C9sYP3uKTtphi22pL+xxti/EzHCxnyxZhwbYcfCw2rCw4rCw6baswuwxTLtuYHOCtTEzjqWbcAYqzfHg84ffRnm2PIbHpM+48cTzDER/+FjF1aYbyRAxDaJmLPFxLaZ2M5fYPtCxGZssIy/5YkNlvXHhIgJD6uIJebzaa6JLbbXTpVcYWH3fSIkrByGah1OvXDU79+M1y9ho1kat+EpEZl9ACprrnCip/f79gs9sY6XrJca5QAAAABJRU5ErkJggg==',
  oneSecondGameLogo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAMAAAAPkIrYAAAAwFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Do+ZMAAAAP3RSTlMAAQIDBAYPEBESExkaHB0jJDo7P0BBQ0RFT1JUWFlbXF1eX2hpa2x4eXt+f4C0tbfFx8jX2drc3uDk5vX3+fs5WkftAAABwElEQVRYw+2X2XaCMBCGAyqg2Fp3bKWtu4LiVgXFmvd/q1oDOWFJbSLe5bsi45z/MOTPTARAIBAIBDG0puW4PryN7zpWU6MLFcw9ZGPXLaQqycMzZOc8kJNSlQPk41CJS/UgP59RqTm8Bzs7qYhYnwivjcYFY8NZ5gsZ1VGszPhmwQbkjmRQRUGVdTeRNUaQS2umSJIyxcvB1e1nLq0ayqth0/6eABPyaE3Cj43frHtZuFxaSqil4LMJQBFyaWE/STikgVZmWk1gBxbVVYQUpATL8ua/NUILLNGDQWtqRrrWNPx9hkMO8NBDg6bVoBRZjXkCQhf4nFpweilTmZBtm1Ur5vbICGCssZaojKyR6dsn3U7ghJ5YUTyhr284ARKeaLN4NcWhkPBqKTMtje1s/1XjnrHnpLgdY7L2wirVE9deCMYsfSLh9pBh5rMjdabpfDMtOmtXaNau2aR6D7kD3Cs2jx7hPi3vFae8/aPAYAOOaWlfT0TK8y4t5VhJNpfcOHHHPL1HL5Dyx3fCoiOZcveNnM1tJ59IyXe2kfZnFuhX6VLbXnr+yVtYdZWSotathXfyvaXdKoo/MQKBQPBIfgBS1P1cd6y0GAAAAABJRU5ErkJggg==',
  settingsLogo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAMAAAAPkIrYAAABm1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8scpb8AAAAiHRSTlMAAQIDBAUGBwgJCgsMDg8REhMUFRcYGRobHB0eICEiIyQlJicoKistLzAzNDY4O0BBQ0RFR0lKS0xOT1BSVVhZW1xeX2JjZ2xwd3h7fH6Cg4WGiImLjI+UlZeYmpueoqutr7C0tbe5ury+wMHFx8jKzM7P0dPV2dze4uTm6Onr7e/x8/X3+fv9zf6ooQAAAspJREFUGBndwelbjFEcBuDnzMzbDEXTNlIoCVkqRJaQZM+SRJElayQptNA0CjPv82dzdcU45/2dU+eDL+4b/97WwTAD2Y5CXwXWb88UyU9xSIJ5kk+qsT47J7jiqUJU7DVX3C/D2kqG+NvzBEzBOFcVTmItrcssmtsG3a4vLHpdChd1nbqhNIoqH1Kz3AiHMUa8PbElUFBB7ckJRrTC7ir91MAuSS8TcBmmjy647KWPDFxS9BHA6Ts9KDi9owe4jdKDgtMLekjBaYYeGuGi6OMyXKroIwuXbnrZD4c5evmoYLWXEZNdmRIFVZLpmmTUWdioGRpGMyjKjNIU1sLiEnX5Nuja8jTkNkN0gLqFNEzpBRqWaiHYV6AmW4qoskWaehUM6jx1YRUkVSFNnw8n8LfmaRqOQnaMgsdndtcp/BLUdM/QNA6bccrSaAtDShpg00BZC3opmoXdLEXdGKToHOx6KLqHVxTVw66eomf4SFESdkmKJpGlSMFOUfQZBYrgQlEeXymCC0U5zFKUgF2Cok+YoKgSdpUUvcQTijpg10HRAK5R9AJ2LynqQSdl5bAppyAcu7sVTUtzeQqGYDNMU3ijTmFVvP7CIk1NkDXRdCMJjWrNUpdLQZLKUZfbjoh4P3VTCUQlpqmbLYXkNHXTKZhS09TlSiHrpS7XDF1zjoYG2DyiYaQCRRUjNN2EVfIbTW86qwMAQXXnG0ZtgN05eumHQ1Cgj0a43KePGFwO0sMHOKXp4SGc4vQwCCdFDw/gpOjhLZyS9BAquNTQRw1cTtHHFbiM0cdyHHZp+rkIu2FGfL/eUhYDYptabv+g4Us5rDaGNGTbY/gjdnyRf5tKwaFyhpq+GDTxARYNx+EUu8Wi8AAi2rmqcBhrqnvPVWETBC1c8XQT1uPIAld0QNRFcmE/1km1z5McgcXo/CEFD9vv5MtgkVDwpPC/+AkPVK3L992NwwAAAABJRU5ErkJggg=='
};

var style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

StatusBarIOS.setStyle(1, true);

import FingerSpeed from './FingerSpeed.js';
import OneSecond from './OneSecond.js';
import Settings from './Settings.js';

class FingersOn extends Component {
  render() {
    return (
      <TabBarNavigator
        navTintColor='ffffff'
        navBarTintColor='333333'
        tabTintColor='orange'
        tabBarTintColor='333333'>
        <TabBarNavigator.Item title='手速' icon={{uri: iconData.speedGameLogo, scale: 3}} defaultTab>
          <FingerSpeed/>
        </TabBarNavigator.Item>
        <TabBarNavigator.Item title='续命游戏' icon={{uri: iconData.oneSecondGameLogo, scale: 3}} >
          <OneSecond/>
        </TabBarNavigator.Item>
        <TabBarNavigator.Item title='设置' icon={{uri: iconData.settingsLogo, scale: 3}}>
          <Settings/>
        </TabBarNavigator.Item>
      </TabBarNavigator>
    );
  }
}

AppRegistry.registerComponent('FingersOn', () => FingersOn);
