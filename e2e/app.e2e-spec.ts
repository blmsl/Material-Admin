import { MaterialAdminPage } from './app.po';

describe('material-admin App', () => {
  let page: MaterialAdminPage;

  beforeEach(() => {
    page = new MaterialAdminPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
