import { KiitclientPage } from './app.po';

describe('kiitclient App', function() {
  let page: KiitclientPage;

  beforeEach(() => {
    page = new KiitclientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
