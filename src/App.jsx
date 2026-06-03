import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import AudioToggle from './components/AudioToggle'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
      <div className="fixed right-4 bottom-4 z-50">
        <AudioToggle />
      </div>
    </div>
  )
}

export default App
