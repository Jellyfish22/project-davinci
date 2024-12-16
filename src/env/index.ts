import local from './local'
import production from './production'

const getConfig = () => {
  if (['localhost', '127.0.0.1'].includes(location.hostname)) {
    return local
  }
  // TODO: Change to production URL
  if (location.hostname.includes('https://project-davinci-six.vercel.app')) {
    return production
  }
  throw new Error("env: There's no config for this environment, please check your env config files.")
}

const config = getConfig()

export default config
