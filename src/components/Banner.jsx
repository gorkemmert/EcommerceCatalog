
const Banner = () => {
  return (
    <div className="relative w-full h-[400px] bg-cover bg-center flex items-center" style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-[1240px] mx-auto px-4">
          <h2 className="text-white text-sm uppercase mb-2">Bedroom Furniture</h2>
          <h1 className="text-white text-4xl font-bold mb-4">Find Comfort That Suits You.</h1>
          <button className="text-white bg-black hover:bg-gray-700 px-6 py-2 rounded-full mt-4">
            Shop Now →
          </button>
        </div>
    </div>
  )
}

export default Banner