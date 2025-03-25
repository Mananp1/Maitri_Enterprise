import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h1>
              <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive range of industrial manufacturing solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  We manufacture all types of conveyor systems customized for pharma and FMCG industries. Our conveyors
                  are designed for efficiency and durability.
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
                  High-quality electrical panel boards designed for efficient power distribution and protection. Our
                  panels are custom-built to meet specific client requirements.
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
                  Comprehensive range of pharmaceutical refilling machinery including liquid filling machines, powder
                  filling machines, and syringe filling machines.
                </p>
                <Link
                  href="/products/pharma-machinery"
                  className="inline-flex items-center text-blue-900 mt-4 text-sm font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-900">Custom Fabrication</CardTitle>
                <CardDescription>Industrial structures and racks</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Custom fabrication"
                  className="rounded-md object-cover mb-4"
                />
                <p className="text-sm text-gray-500">
                  We specialize in all types of fabrication, including racks and custom industrial structures. Our
                  expertise ensures high-quality, durable solutions.
                </p>
                <Link
                  href="/products/fabrication"
                  className="inline-flex items-center text-blue-900 mt-4 text-sm font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-900">Lab Furniture</CardTitle>
                <CardDescription>Custom laboratory equipment</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Lab furniture"
                  className="rounded-md object-cover mb-4"
                />
                <p className="text-sm text-gray-500">
                  We manufacture lab stool tables, dust bins, and chairs for laboratories as per specific requirements,
                  ensuring quality and functionality.
                </p>
                <Link
                  href="/products/lab-furniture"
                  className="inline-flex items-center text-blue-900 mt-4 text-sm font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-900">Change Parts</CardTitle>
                <CardDescription>Specialized machine components</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Change parts"
                  className="rounded-md object-cover mb-4"
                />
                <p className="text-sm text-gray-500">
                  We manufacture high-quality change parts for various pharmaceutical and FMCG machinery, ensuring
                  optimal performance and longevity.
                </p>
                <Link
                  href="/products/change-parts"
                  className="inline-flex items-center text-blue-900 mt-4 text-sm font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

