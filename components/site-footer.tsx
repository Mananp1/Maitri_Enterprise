import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold mb-4">IndusTech</h3>
            <p className="text-gray-300 mb-4">
              Specialized in manufacturing solutions for pharmaceutical and FMCG industries.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/conveyors" className="text-gray-300 hover:text-white transition-colors">
                  Conveyor Systems
                </Link>
              </li>
              <li>
                <Link href="/products/panels" className="text-gray-300 hover:text-white transition-colors">
                  Electrical Panel Boards
                </Link>
              </li>
              <li>
                <Link href="/products/pharma-machinery" className="text-gray-300 hover:text-white transition-colors">
                  Pharmaceutical Machinery
                </Link>
              </li>
              <li>
                <Link href="/products/fabrication" className="text-gray-300 hover:text-white transition-colors">
                  Custom Fabrication
                </Link>
              </li>
              <li>
                <Link href="/products/lab-furniture" className="text-gray-300 hover:text-white transition-colors">
                  Lab Furniture
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span className="text-gray-300">
                  Industrial Area, Sector 1,
                  <br />
                  Ahmedabad, Gujarat, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-gray-300">info@industech.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-800 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} IndusTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

