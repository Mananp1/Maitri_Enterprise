import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PharmaMachineryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pharmaceutical Machinery</h1>
              <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive range of pharmaceutical refilling machinery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                  Our Pharmaceutical Solutions
                </h2>
                <p className="text-gray-500 md:text-xl">
                  We specialize in manufacturing and supplying a comprehensive range of pharmaceutical refilling
                  machinery tailored to meet diverse industry needs.
                </p>
              </div>
              <p className="text-gray-500">
                Our pharmaceutical machinery is built with precision, GMP compliance, and innovative technology to
                ensure reliability, efficiency, and ease of use in pharmaceutical production processes.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Pharmaceutical machinery"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Our Machinery Range</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our diverse range of pharmaceutical machinery
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-900">Liquid Filling Machines</CardTitle>
                <CardDescription>Precise and contamination-free filling</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Liquid filling machine"
                  className="rounded-md object-cover mb-4"
                />
                <p className="text-sm text-gray-500">
                  For precise and contamination-free filling of liquids into bottles, vials, or ampoules, suitable for
                  various viscosities.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-900">Powder Filling Machines</CardTitle>
                <CardDescription>Accurate dosing and filling</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Powder filling machine"
                  className="rounded-md object-cover mb-4"
                />
                <p className="text-sm text-gray-500">
                  Designed for accurate dosing and filling of dry powders into containers or capsules with precision and
                  efficiency.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-900">Syringe Filling Machines</CardTitle>
                <CardDescription>Sterile and accurate filling</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Syringe filling machine"
                  className="rounded-md object-cover mb-4"
                />
                <p className="text-sm text-gray-500">
                  Ensures sterile and accurate filling of syringes for pharmaceutical applications with high precision.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-900">Capsule Filling Machines</CardTitle>
                <CardDescription>Automatic and semi-automatic solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Capsule filling machine"
                  className="rounded-md object-cover mb-4"
                />
                <p className="text-sm text-gray-500">
                  Automatic and semi-automatic machines for filling powders, granules, or pellets into capsules of
                  various sizes.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-900">Ampoule Filling Machines</CardTitle>
                <CardDescription>High-speed filling and sealing</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Ampoule filling machine"
                  className="rounded-md object-cover mb-4"
                />
                <p className="text-sm text-gray-500">
                  High-speed solutions for liquid filling, sealing, and capping of ampoules with precision and
                  sterility.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-900">Vial Filling Machines</CardTitle>
                <CardDescription>Precise filling and capping</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Vial filling machine"
                  className="rounded-md object-cover mb-4"
                />
                <p className="text-sm text-gray-500">
                  High-speed solutions for liquid filling, sealing, and capping of vials with precision and reliability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Need Custom Machinery?</h2>
              <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your specific pharmaceutical machinery requirements
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

