"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (username === "etumlabadmin" && password === "california") {
      // Store auth in localStorage (simple implementation)
      localStorage.setItem("isAuthenticated", "true")
      router.push("/admin")
    } else {
      setError("Invalid credentials. Access denied.")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
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
              EtumLabs
            </h1>
            <p className="text-slate-600 text-lg">Minecraft Events Platform</p>
            <p className="text-slate-500 text-sm">Admin Access Portal</p>
          </div>
        </div>

        {/* Loading Animation */}
        {isLoading && (
          <div className="text-center space-y-4">
            <div className="inline-block w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl block-spin shadow-lg"></div>
            <p className="text-slate-600 font-medium">Authenticating...</p>
          </div>
        )}

        {/* Login Form */}
        {!isLoading && (
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-2 pb-6">
              <CardTitle className="text-2xl text-center font-bold text-slate-800">Admin Login</CardTitle>
              <CardDescription className="text-center text-slate-600">
                Enter your credentials to access the event management dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-slate-700 font-medium">
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-700 font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl transition-all duration-200"
                    required
                  />
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
                  Access Dashboard
                </Button>
              </form>

              <div className="text-center">
                <Link href="/" className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
                  ← Back to Homepage
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
          </div>
          <p className="text-sm text-slate-500">Powered by EtumLabs Platform</p>
        </div>
      </div>
    </div>
  )
}
