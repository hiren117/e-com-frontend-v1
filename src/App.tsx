import './App.css'
import Navigation from '@/customers/components/Navigation/Navigation'
import Product from '@/customers/components/Product/Product';
import HomePage from './customers/pages/HomePage/HomePage'
import Footer from '@/customers/components/Footer/Footer';

function App() {

  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
      <HomePage />   
      <Product />
      </div>
      <div>
        <Footer />
      </div>



    </>
  )
}

export default App
