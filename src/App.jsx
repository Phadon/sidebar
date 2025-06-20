import { Home, Modal, Sidebar } from './components'

const App = ({ children }) => {
  return (
    <main>
      <Home />
      <Modal />
      <Sidebar />
    </main>
  )
}

export default App
