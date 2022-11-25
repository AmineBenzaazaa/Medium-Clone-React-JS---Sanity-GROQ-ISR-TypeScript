import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" 
                     alt="Medium Logo" 
                     className="w-44 object-contain cursor-pointer"/>
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5">
                <h3>
                    About
                </h3>
                <h3>
                    Contact
                </h3>
                <h3 className="text-white bg-green-600 px-4 py-2 rounded-full cursor-pointer">
                    Follow
                </h3>
            </div>
        </div>  
        <div className="flex items-center space-x-5 text-green-600 text-center">
            <h3 className="hover:cursor-pointer">Sign In</h3>
            <h3 className="border px-4 py-2 rounded-full border-green-600 hover:cursor-pointer">Get Started</h3>
        </div>
    </header>
  )
}

export default Header