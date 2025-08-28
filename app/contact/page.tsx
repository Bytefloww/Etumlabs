import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help with any questions or feedback you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-slate-700 font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-slate-700 font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-slate-700 font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl resize-none"
                  />
                </div>
                <Button className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <div className="w-5 h-5 bg-white rounded-lg"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Email Support</h3>
                      <p className="text-slate-600">support@etumlabs.com</p>
                      <p className="text-sm text-slate-500">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <div className="w-5 h-5 bg-white rounded-lg"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Discord Community</h3>
                      <p className="text-slate-600">Join our Discord server</p>
                      <p className="text-sm text-slate-500">Real-time chat with our community</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <div className="w-5 h-5 bg-white rounded-lg"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Social Media</h3>
                      <p className="text-slate-600">Follow us for updates</p>
                      <p className="text-sm text-slate-500">Twitter, Instagram, YouTube</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800">How do I join events?</h4>
                  <p className="text-sm text-slate-600">
                    Create an account, browse our events calendar, and click "Register Now" on any event you'd like to
                    join.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800">What Minecraft versions do you support?</h4>
                  <p className="text-sm text-slate-600">
                    We support Minecraft Java Edition versions 1.19+ across all our servers.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800">Are events free to join?</h4>
                  <p className="text-sm text-slate-600">
                    Yes! All our events are completely free. We believe in making Minecraft fun accessible to everyone.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
