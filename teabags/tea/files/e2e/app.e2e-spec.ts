import { AppMainPage } from './app.po';

describe('Main App', () => {
  let page: AppMainPage;

  beforeEach(() => {
    page = new AppMainPage();
  });

  it('should display project name in header', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('<%= projectName %>');
  });
});
