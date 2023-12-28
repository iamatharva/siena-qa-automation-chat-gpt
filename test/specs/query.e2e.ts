import LandingPage from '../pageObejct/page/landing.page'
import { envVariable } from '../../env'

const env = envVariable()
const city = 'Dublin', filterKeyword = 'garage'

describe('New Chat (Request)', function () {
  beforeEach(async () => {
    await LandingPage.open(env.URL_UNDER_TEST);
    await LandingPage.loginWithValidCredentials(env.username, env.password)
  });
  
  it(`User is able to send chatgpt query and a response against that is being provided`, async () => {

  })

  it(`User is able to provide feedback to the chatgpt response`, async () => {

  })
})