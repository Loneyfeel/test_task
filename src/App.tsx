import './App.css'
import {Header} from './layout'
import {AppRouter} from './routes/router.tsx'

function App() {

  return (
    <>
      <div style={{position: 'relative'}}>

        <Header />

        <AppRouter />

      </div>

    </>
  )
}

export default App
