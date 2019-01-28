import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getRouterOutletHtml() {
    return element(by.css('router-outlet')).getText();
  }
}
