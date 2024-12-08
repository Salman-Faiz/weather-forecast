import Header from './Components/Header/Header'
import WeatherBoard from './Components/Weather/WeatherBoard'

import { WeatherProvider, FavouriteProvider } from './provider'

const App = () => {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <div className='grid place-items-center h-screen'>
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavouriteProvider>
    </WeatherProvider>
  )
}

export default App
