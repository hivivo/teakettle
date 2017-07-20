import { browser, by, element } from 'protractor';

export class AppMainPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root md-toolbar h2')).getText();
  }

}
