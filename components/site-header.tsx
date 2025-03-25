"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-900">IndusTech</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-900 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-blue-900 transition-colors">
            About
          </Link>
          <Link href="/products" className="text-sm font-medium hover:text-blue-900 transition-colors">
            Products
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-blue-900 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-blue-900 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link href="/contact">
            <Button className="bg-blue-900 hover:bg-blue-800">Get a Quote</Button>
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className="text-lg font-medium hover:text-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium hover:text-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/products"
                className="text-lg font-medium hover:text-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/services"
                className="text-lg font-medium hover:text-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="mt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">Get a Quote</Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

