"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    minecraftUsername: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Enhanced validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.")
      setIsLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.")
      setIsLoading(false)
      return
    }

    if (!formData.agreeToTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy.")
      setIsLoading(false)
      return
    }

    if (formData.username.length < 3) {
      setError("Username must be at least 3 characters long.")
      setIsLoading(false)
      return
    }

    if (formData.minecraftUsername.length < 3) {
      setError("Minecraft username must be at least 3 characters long.")
      setIsLoading(false)
      return
    }

    // Simulate registration process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSuccess(true)
    setIsLoading(false)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg"></div>
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-slate-800">Welcome to EtumLabs!</CardTitle>
            <CardDescription className="text-slate-600">
              Your account has been created successfully. Check your email for verification instructions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-4">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="font-semibold text-slate-800 mb-2">Next Steps:</h3>
                <ul className="text-sm text-slate-600 space-y-1 text-left">
                  <li>• Check your email and verify your account</li>
                  <li>• Complete your profile setup</li>
                  <li>• Browse upcoming events</li>
                  <li>• Join our Discord community</li>
                </ul>
              </div>
              <Link href="/login">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl">
                  Go to Login
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6">
          <Link href="/" className="inline-block">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center pixel-pulse shadow-2xl float">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-inner">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              </div>
            </div>
          </Link>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join EtumLabs
            </h1>
            <p className="text-slate-600 text-lg">Create your account</p>
            <p className="text-slate-500 text-sm">Start your Minecraft adventure today</p>
          </div>
        </div>

        {/* Registration Form */}
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-2 pb-6">
            <CardTitle className="text-2xl text-center font-bold text-slate-800">Create Account</CardTitle>
            <CardDescription className="text-center text-slate-600">
              Fill in your details to join our Minecraft community
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-slate-700 font-medium">
                  Username *
                </Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Choose a unique username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl transition-all duration-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl transition-all duration-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="minecraftUsername" className="text-slate-700 font-medium">
                  Minecraft Username *
                </Label>
                <Input
                  id="minecraftUsername"
                  name="minecraftUsername"
                  type="text"
                  placeholder="Your Minecraft Java Edition username"
                  value={formData.minecraftUsername}
                  onChange={handleInputChange}
                  className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl transition-all duration-200"
                  required
                />
                <p className="text-xs text-slate-500">This will be used to identify you on our servers</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-700 font-medium">
                  Password *
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl transition-all duration-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-slate-700 font-medium">
                  Confirm Password *
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl transition-all duration-200"
                  required
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                    className="mt-1"
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm text-slate-600 leading-relaxed">
                    I agree to the{" "}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-700 underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="subscribeNewsletter"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onCheckedChange={(checked) => setFormData({ ...formData, subscribeNewsletter: checked as boolean })}
                    className="mt-1"
                  />
                  <Label htmlFor="subscribeNewsletter" className="text-sm text-slate-600 leading-relaxed">
                    Subscribe to our newsletter for event updates and community news
                  </Label>
                </div>
              </div>

              {error && (
                <Alert className="border-red-200 bg-red-50 rounded-xl">
                  <AlertDescription className="text-red-700">{error}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg shimmer"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="text-center space-y-2">
              <p className="text-sm text-slate-600">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign in
                </Link>
              </p>
              <Link href="/" className="text-sm text-slate-500 hover:text-slate-700 transition-colors block">
                ← Back to Homepage
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
