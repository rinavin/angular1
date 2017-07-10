import { MagicNgPage } from './app.po';

describe('magic-ng App', () => {
  let page: MagicNgPage;

  beforeEach(() => {
    page = new MagicNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
