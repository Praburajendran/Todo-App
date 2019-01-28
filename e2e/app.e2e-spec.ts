import { AppPage } from './app.po';

describe('Todo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display content in router-outlet', () => {
    page.navigateTo();
	expect(page.getRouterOutletHtml()).not.toEqual(null);
  });
});
