import { CliTourOfHeroesPage } from './app.po';

describe('cli-tour-of-heroes App', function() {
  let page: CliTourOfHeroesPage;

  beforeEach(() => {
    page = new CliTourOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
