import { Navbar, ProductList } from "../components"

const ListingPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Navbar/>
      <ProductList />
    </div>
  )
}

export default ListingPage