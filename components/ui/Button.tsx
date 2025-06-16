const Button = (title: string, icon: string ) => {


  return (
    <button className="font-primary text-white text-2xl md:text-3xl flex items-center gap-1 md:gap-2 bg-gray-600/10 backdrop-filter backdrop-blur-sm border border-gray-500 rounded-lg p-3 md:p-4 md:px-6 hover:bg-gray-400/25 transition-colors duration-300 absolute bottom-30 right-40 md:bottom-40 md:right-60 z-99">{title} {icon} </button>
  )
}

export default Button