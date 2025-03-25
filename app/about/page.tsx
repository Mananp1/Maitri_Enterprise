import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About IndusTech</h1>
              <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experts in manufacturing solutions for pharmaceutical and FMCG industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Our Experience</h2>
                <p className="text-gray-500 md:text-xl">
                  We are experts in the manufacturing of conveyor systems, change parts, SS control panels for all types
                  of pharma and FMCG industries.
                </p>
              </div>
              <p className="text-gray-500">
                We are working with many Pharma and FMCG industries like McCain, Cadila, Niche Pharma (Dehradun) and
                Troikaa Pharmaceuticals Ltd. We have huge experience in different types of pharmaceutical filling
                machines, labelling machines, Inspection table, Conveyor Systems etc.
              </p>
              <p className="text-gray-500">
                We also manufacture lab stool tables, dust bin and chairs for the labs as per the requirement. We are
                demonstrating our versatility and commitment to quality workmanship.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Manufacturing facility"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Our Clients</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Trusted by leading pharmaceutical and FMCG companies
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4 mt-12">
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <Image
                src="/placeholder.svg?height=80&width=160"
                width={160}
                height={80}
                alt="McCain logo"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <Image
                src="/placeholder.svg?height=80&width=160"
                width={160}
                height={80}
                alt="Cadila logo"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <Image
                src="/placeholder.svg?height=80&width=160"
                width={160}
                height={80}
                alt="Niche Pharma logo"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <Image
                src="/placeholder.svg?height=80&width=160"
                width={160}
                height={80}
                alt="Troikaa Pharmaceuticals logo"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-900 text-white">
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

