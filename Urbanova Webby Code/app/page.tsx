import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Home,
  CheckCircle,
  Star,
  ArrowRight,
  Building,
  TrendingUp,
  Shield,
} from "lucide-react"
import Image from "next/image"

export default function UrbanovaVentures() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/urbanova-logo.png"
              alt="Urbanova Ventures Logo"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">URBANOVA VENTURES</h1>
              <p className="text-sm text-gray-600">Cleveland Real Estate Investment</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#investments" className="text-gray-700 hover:text-red-600 font-medium">
              Available Properties
            </a>
            <a href="#success" className="text-gray-700 hover:text-red-600 font-medium">
              Success Stories
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium">
              Contact
            </a>
            <Button className="bg-red-600 hover:bg-red-700">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800">
                Cleveland's Premier Real Estate Investment Company
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Turn Distressed Properties Into
                <span className="text-red-600 block">Profitable Investments</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We connect motivated sellers with serious investors in Cleveland, OH. Whether you need to sell fast or
                looking for your next investment opportunity, we have the solutions you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Home className="mr-2 h-5 w-5" />
                  Sell Your Property Fast
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  <DollarSign className="mr-2 h-5 w-5" />
                  View Investment Opportunities
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/cleveland-skyline.png"
                alt="Cleveland Real Estate Market"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Fast Closings</p>
                    <p className="text-sm text-gray-600">7-14 days average</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Showcase */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <Image
            src="/images/urbanova-logo.png"
            alt="Urbanova Ventures - Cleveland Real Estate Investment"
            width={300}
            height={300}
            className="mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Urbanova Ventures?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating win-win solutions for property sellers and investors in the Cleveland market
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center">
                <TrendingUp className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>For Sellers</CardTitle>
                <CardDescription>Quick, hassle-free property sales</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    No repairs needed
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cash offers within 24 hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Close in 7-14 days
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    No realtor commissions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    We handle all paperwork
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center">
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>For Investors</CardTitle>
                <CardDescription>Vetted investment opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Pre-screened properties
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Market analysis included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Renovation estimates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Profit projections
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ongoing deal flow
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle>Professional Standards</CardTitle>
                <CardDescription>Ethical and transparent</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ohio real estate professional
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Proper contract assignments
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Full disclosure practices
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ethical marketing standards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Transparent transactions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Investments */}
      <section id="investments" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Investment Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked properties in Cleveland's most promising neighborhoods. All properties are under contract and
              available for assignment to qualified investors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/distressed-house-1.png"
                  alt="Distressed Property Investment Opportunity"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-600">Investment Opportunity</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  Single Family Home
                  <span className="text-red-600">$45,000</span>
                </CardTitle>
                <CardDescription>3 bed, 2 bath • 1,200 sq ft • East Cleveland</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>ARV (After Repair Value):</span>
                    <span className="font-semibold">$85,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Repairs:</span>
                    <span className="font-semibold">$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Potential Profit:</span>
                    <span className="font-semibold text-green-600">$15,000</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">Request Details</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/distressed-house-2.png"
                  alt="Multi-Family Investment Property"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-600">Investment Opportunity</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  Multi-Family Duplex
                  <span className="text-red-600">$75,000</span>
                </CardTitle>
                <CardDescription>2 units • 2 bed each • 2,000 sq ft • West Side</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>ARV (After Repair Value):</span>
                    <span className="font-semibold">$140,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Repairs:</span>
                    <span className="font-semibold">$35,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Potential Profit:</span>
                    <span className="font-semibold text-green-600">$30,000</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">Request Details</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/distressed-house-3.png"
                  alt="Commercial Building Investment"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-600">Investment Opportunity</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  Commercial Building
                  <span className="text-red-600">$120,000</span>
                </CardTitle>
                <CardDescription>Mixed Use • 3,500 sq ft • Downtown Cleveland</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>ARV (After Repair Value):</span>
                    <span className="font-semibold">$220,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Repairs:</span>
                    <span className="font-semibold">$50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Potential Profit:</span>
                    <span className="font-semibold text-green-600">$50,000</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">Request Details</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-600 mb-4">
              * All properties are under contract and available for assignment to qualified investors. Profit estimates
              are based on current market conditions and may vary.
            </p>
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
              View All Available Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="py-20 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who found solutions through Urbanova Ventures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <div className="relative">
                <Image
                  src="/images/success-story-1.png"
                  alt="Foreclosure Avoidance Success Story"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle>Avoided Foreclosure</CardTitle>
                <CardDescription>Sarah M. - Lakewood</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  "I was facing foreclosure and didn't know what to do. Isaiah and his team at Urbanova Ventures bought
                  my house in just 10 days, allowing me to pay off my mortgage and start fresh. They were professional,
                  honest, and truly cared about helping me through a difficult time."
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Closed in 10 days
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <div className="relative">
                <Image
                  src="/images/success-story-2.png"
                  alt="Inherited Property Solution"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle>Inherited Property Solution</CardTitle>
                <CardDescription>Michael R. - Cleveland Heights</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  "When I inherited my grandmother's house, I didn't want to deal with repairs and listing it. Urbanova
                  Ventures made the process so easy. They handled everything and I got a fair cash offer. I would
                  definitely recommend them to anyone in a similar situation."
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  No repairs needed
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <div className="relative">
                <Image
                  src="/images/success-story-3.png"
                  alt="Real Estate Investor Success"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle>Investor Success</CardTitle>
                <CardDescription>Jennifer L. - Parma</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  "As a new investor, I was nervous about my first deal. Isaiah walked me through everything and
                  provided accurate repair estimates and market analysis. The property performed exactly as projected.
                  I've now done 3 deals with Urbanova Ventures and made great returns on each one."
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  $22,000 profit on first deal
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Whether you need to sell your property fast or you're looking for your next investment opportunity,
                Isaiah Harris-Ware and the Urbanova Ventures team are here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Call or Text</p>
                    <a href="tel:+12164527381" className="text-lg hover:underline">
                      (216) 452-7381
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:isaiahharrisw@gmail.com" className="text-lg hover:underline">
                      isaiahharrisw@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-lg">Cleveland, OH & Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-100/10 backdrop-blur-sm p-8 rounded-2xl border border-amber-200/20">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Property Analysis</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  placeholder="Property Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">I'm interested in...</option>
                  <option value="selling">Selling my property</option>
                  <option value="buying">Investment opportunities</option>
                  <option value="both">Both selling and investing</option>
                </select>
                <Button size="lg" className="w-full bg-red-600 text-white hover:bg-red-700">
                  Get My Free Analysis
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/urbanova-logo.png"
                  alt="Urbanova Ventures Logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <div>
                  <h3 className="font-bold text-amber-100">URBANOVA VENTURES</h3>
                  <p className="text-sm text-gray-400">Real Estate Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for real estate investment opportunities in Cleveland, Ohio.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-amber-100">For Sellers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Fast Cash Offers</li>
                <li>No Repairs Needed</li>
                <li>Quick Closings</li>
                <li>No Commissions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-amber-100">For Investors</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Vetted Properties</li>
                <li>Market Analysis</li>
                <li>Profit Projections</li>
                <li>Deal Flow</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-amber-100">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Isaiah Harris-Ware</p>
                <p>(216) 452-7381</p>
                <p>isaiahharrisw@gmail.com</p>
                <p>Cleveland, OH</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Urbanova Ventures. All rights reserved.</p>
            <p className="mt-2">
              Disclaimer: All investment opportunities are subject to availability. Past performance does not guarantee
              future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
