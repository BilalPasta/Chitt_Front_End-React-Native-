import { Navigation } from '../routes';
import { createAppContainer } from 'react-navigation';

class NavigationView extends Navigation {

  constructor() {
    super();
    return this.getMainAppContainer(this.getMainStackNavigation());
  };

  /**
   * @name getMainAppContainer
   * @param {object} appNavigator Application navigator that needs to be encapsulated
   *                              into view.
   * @desc Returns main application container
   * @return {any}
   */
  getMainAppContainer = (appNavigator) => {
    return createAppContainer(appNavigator);
  };
};

export default NavigationView;