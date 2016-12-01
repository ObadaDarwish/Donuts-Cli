import { DonutsCliPage } from './app.po';

describe('donuts-cli App', function() {
  let page: DonutsCliPage;

  beforeEach(() => {
    page = new DonutsCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
