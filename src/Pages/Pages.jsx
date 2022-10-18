import Home from './Home'
import Buy from './Buy/Buy'
import Sell from './Sell/Sell'
import ViewProduct from './Buy/ViewProduct'
import { Route, Routes, BrowserRouter} from 'react-router-dom'

const Pages = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/buy' element={<Buy />} />
                <Route path='/sell' element={<Sell />} />
                <Route path='/viewProduct' element={<ViewProduct />} />
            </Routes>
        </BrowserRouter>
  )
}

export default Pages