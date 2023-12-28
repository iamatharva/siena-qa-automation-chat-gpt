
const landingPage = process.env.URL_UNDER_TEST || `https://chat.openai.com/`
const username = process.env.USERNAME
const password = process.env.PASSWORD

type envReturnType = {
  URL_UNDER_TEST: string
  username: string
  password: string
}

export function envVariable(): envReturnType {
  return {
    URL_UNDER_TEST: landingPage,
    username,
    password
  }
}
