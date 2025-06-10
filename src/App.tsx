import { I18nextProvider } from "react-i18next"
import i18n from './i18n'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </I18nextProvider>
  )
}

export default App