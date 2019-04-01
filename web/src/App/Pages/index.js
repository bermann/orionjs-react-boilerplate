import React, {lazy, Suspense} from 'react'
import authRouteRegex from './Auth/routeRegex'
import useRouter from 'App/hooks/useRouter'
import LoadingPage from './LoadingPage'

const Auth = lazy(() => import('./Auth'))
const App = lazy(() => import('./App'))

function Pages(props) {
  const {location} = useRouter()

  const getContent = () => {
    if (authRouteRegex.test(location.pathname)) {
      return <Auth />
    }

    return <App />
  }

  return <Suspense fallback={<LoadingPage />}>{getContent()}</Suspense>
}

export default Pages
