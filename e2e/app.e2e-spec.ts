import { TestprojforscottPage } from './app.po';

describe('testprojforscott App', () => {
  let page: TestprojforscottPage;

  beforeEach(() => {
    page = new TestprojforscottPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
