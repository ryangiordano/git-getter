import { GitGetterPage } from './app.po';

describe('git-getter App', () => {
  let page: GitGetterPage;

  beforeEach(() => {
    page = new GitGetterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
