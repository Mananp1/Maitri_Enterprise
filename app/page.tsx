import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Industrial Manufacturing Solutions
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Specialized in conveyor systems, electrical panels, and pharmaceutical machinery for Pharma and FMCG
                  industries.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button className="bg-white text-blue-900 hover:bg-gray-100">
                    Explore Products
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-blue-800">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Industrial machinery"
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Our Services
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide comprehensive manufacturing solutions for pharmaceutical and FMCG industries
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-900">Conveyor Systems</CardTitle>
                <CardDescription>All types of industrial conveyors</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Conveyor system"
                  className="rounded-md object-cover mb-4"
                />
                <p className="text-sm text-gray-500">
                  We manufacture all types of conveyor systems customized for pharma and FMCG industries.
                </p>
                <Link
                  href="/products/conveyors"
                  className="inline-flex items-center text-blue-900 mt-4 text-sm font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-900">Electrical Panel Boards</CardTitle>
                <CardDescription>Custom power distribution solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Electrical panel board"
                  className="rounded-md object-cover mb-4"
                />
                <p className="text-sm text-gray-500">
                  High-quality electrical panel boards designed for efficient power distribution and protection.
                </p>
                <Link
                  href="/products/panels"
                  className="inline-flex items-center text-blue-900 mt-4 text-sm font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-900">Pharmaceutical Machinery</CardTitle>
                <CardDescription>Specialized refilling equipment</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Pharmaceutical machinery"
                  className="rounded-md object-cover mb-4"
                />
                <p className="text-sm text-gray-500">
                  Comprehensive range of pharmaceutical refilling machinery for diverse industry needs.
                </p>
                <Link
                  href="/products/pharma-machinery"
                  className="inline-flex items-center text-blue-900 mt-4 text-sm font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Industrial manufacturing"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Our Experience</h2>
                <p className="text-gray-500 md:text-xl">
                  We are experts in manufacturing for pharma and FMCG industries with a proven track record.
                </p>
              </div>
              <ul className="grid gap-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-900" />
                  <span>Working with major clients like McCain, Cadila, and Troikaa Pharmaceuticals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-900" />
                  <span>Expertise in pharmaceutical filling machines and labelling machines</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-900" />
                  <span>Custom fabrication including racks and industrial structures</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-900" />
                  <span>Manufacturing lab furniture and equipment as per requirements</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button className="bg-blue-900 text-white hover:bg-blue-800">
                    About Us
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Work Together?</h2>
              <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your industrial manufacturing needs
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-white text-blue-900 hover:bg-gray-100">
                  Get in Touch
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

