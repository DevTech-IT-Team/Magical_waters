import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import Footer from './components/Footer'
import AudioToggle from './components/AudioToggle'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </main>
      <Footer />
      <div className="fixed right-4 bottom-4 z-50">
        <AudioToggle />
      </div>
    </div>
  )
}

export default App
