import getEnv from './getEnv'

const urls = {
  local: `http://${window.location.hostname}:3000`
}

const env = getEnv()

export default urls[env]
