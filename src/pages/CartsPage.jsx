import { Cart, Navbar } from "../components"

const CartsPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Navbar/>
      <Cart />
    </div>
  )
}

export default CartsPage