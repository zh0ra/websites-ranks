import { WebsitesRanksPage } from './app.po';

describe('websites-ranks App', () => {
  let page: WebsitesRanksPage;

  beforeEach(() => {
    page = new WebsitesRanksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
