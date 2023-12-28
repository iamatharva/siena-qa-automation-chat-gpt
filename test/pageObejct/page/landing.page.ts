import { LandingSelector } from '../selectors/landing.selector'
import ElementService  from '../../service/elementService'
import { attach } from 'webdriverio'

const LandingPageSelectors = LandingSelector()

class HomePage {

  public async open(path: string): Promise<void> {
    await browser.navigateTo(path)
    await browser.waitUntil(async() => {
      const url = await browser.getUrl()
      return !!url.includes(path)
    })
  }

  public get loginButton(): Promise<WebdriverIO.Element> {
    return $(LandingPageSelectors.loginButton)
  }

  public get emailInput(): Promise<WebdriverIO.Element> {
    return $(LandingPageSelectors.email)
  }

  public get passwordInput(): Promise<WebdriverIO.Element> {
    return $(LandingPageSelectors.password)
  }

  public async continueButton(): Promise<WebdriverIO.Element> {
    const selector = LandingPageSelectors.continueButton;
    const result = await ElementService.multipleElementSearch(selector, 'Continue', false) as { index?: number, list: number[] };
    const index = result.index;
    const element = await browser.$$(selector);
    return element[index];
  }

  public async loginWithValidCredentials(userName: string, password: string): Promise<void> {
    await (await this.loginButton).click();
    await (await this.emailInput).setValue(userName)
    await (await this.continueButton()).click()
    await (await this.passwordInput).setValue(password)
    await (await this.continueButton()).click()
  }
}
export default new HomePage()