import { Route, Routes } from 'react-router-dom'
import Login from './Login'

const Router = () => (
  <Routes>
    <Route path='/' element={<Login />} />
  </Routes>
)

export default Router
