import React from 'react'

function Foot() {
  return (
   <>
      
      <footer className="bg-black text-white px-8 lg:px-28 lg:h-[414px]">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
            {/* Quick Link Section */}
            <div className="mb-12 lg:mb-0 w-full lg:w-auto">
              <h3 className="text-xl font-semibold mb-6">Quick link</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">Services</a></li>
                <li><a href="#" className="hover:text-gray-300">About us</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>

            {/* Get in Touch Section */}
            <div className="mb-12 lg:mb-0 w-full lg:w-auto max-w-md">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-gray-400 mb-6">
                Amet minim mollit non deserunt ullamco est
                <br />sit aliqua dolor do amet sint.
              </p>
              <div className="flex justify-center lg:justify-start">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="bg-transparent border border-gray-600 rounded-l px-4 py-2 w-64"
                />
                <button className="bg-orange-500 text-white px-6 py-2 rounded-r hover:bg-orange-600">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Useful Section */}
            <div className="w-full lg:w-auto">
              <h3 className="text-xl font-semibold mb-6">Useful</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-gray-300">Privacy policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Legal</a></li>
                <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-300">Blogs</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
            
            <div className="text-sm text-gray-400 mb-6 lg:mb-0">
              <a href="#">Copyright goes to - saravanan</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300">Twitter</a>
              <a href="#" className="hover:text-gray-300">YouTube</a>
              <a href="#" className="hover:text-gray-300">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Foot