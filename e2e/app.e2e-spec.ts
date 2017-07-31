import { SpcNg2Page } from './app.po';

describe('spc-ng2 App', () => {
  let page: SpcNg2Page;

  beforeEach(() => {
    page = new SpcNg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
