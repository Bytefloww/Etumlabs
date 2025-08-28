"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Welcome to EtumLabs
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The premier Minecraft events platform where creativity meets competition. Join our community and
              participate in epic adventures across multiple servers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg shimmer"
              >
                Join the Adventure
              </Button>
            </Link>
            <Link href="/events">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-200 hover:bg-slate-50 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] bg-transparent"
              >
                View Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              To create unforgettable Minecraft experiences that bring players together, foster creativity, and build
              lasting friendships in our gaming community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-[1.02]">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg"></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-slate-800">Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Building a welcoming and inclusive environment where every player can thrive and make lasting
                  connections.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-[1.02]">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg"></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-slate-800">Creative Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Encouraging innovation and creativity through unique events, challenges, and collaborative building
                  projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-[1.02]">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg"></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-slate-800">Fair Play</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Maintaining integrity and fairness in all our events with transparent rules and dedicated moderation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Platform Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to participate in and manage Minecraft events across multiple servers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Event Calendar</h3>
              <p className="text-slate-600">
                Stay updated with upcoming events, competitions, and special activities across all our servers.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Easy Registration</h3>
              <p className="text-slate-600">
                Quick and simple event registration system with automatic server coordination and notifications.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Achievement System</h3>
              <p className="text-slate-600">
                Earn badges and recognition for your participation and achievements in various events and challenges.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Media Gallery</h3>
              <p className="text-slate-600">
                Browse event highlights, screenshots, and videos from our community's greatest moments.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Community News</h3>
              <p className="text-slate-600">
                Stay informed with the latest announcements, updates, and community highlights.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Multi-Server Support</h3>
              <p className="text-slate-600">
                Seamlessly participate in events across multiple Minecraft servers with unified account management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                1,200+
              </div>
              <p className="text-slate-600 font-medium">Active Players</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                150+
              </div>
              <p className="text-slate-600 font-medium">Events Hosted</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                5
              </div>
              <p className="text-slate-600 font-medium">Game Servers</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                99.8%
              </div>
              <p className="text-slate-600 font-medium">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Join the Adventure?
          </h2>
          <p className="text-xl text-slate-600">
            Create your account today and become part of the EtumLabs community. Your next great Minecraft adventure
            awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg shimmer"
              >
                Get Started Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-200 hover:bg-slate-50 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
