"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "News", href: "/news" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem("isAuthenticated")
    setIsAuthenticated(authStatus === "true")
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    setIsAuthenticated(false)
    window.location.href = "/"
  }

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg pixel-pulse">
              <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-sm"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EtumLabs
              </h1>
              <p className="text-xs text-slate-500">Minecraft Events Platform</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  pathname === item.href ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-slate-600",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link href="/profile">
                  <Button variant="outline" className="border-slate-200 hover:bg-slate-50 rounded-xl bg-transparent">
                    Profile
                  </Button>
                </Link>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="border-red-200 hover:bg-red-50 hover:text-red-600 rounded-xl bg-transparent"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" className="border-slate-200 hover:bg-slate-50 rounded-xl bg-transparent">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div
                className={cn("w-full h-0.5 bg-slate-600 transition-all", isMenuOpen && "rotate-45 translate-y-1.5")}
              />
              <div className={cn("w-full h-0.5 bg-slate-600 transition-all", isMenuOpen && "opacity-0")} />
              <div
                className={cn("w-full h-0.5 bg-slate-600 transition-all", isMenuOpen && "-rotate-45 -translate-y-1.5")}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-600 px-2 py-1",
                    pathname === item.href ? "text-blue-600" : "text-slate-600",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                {isAuthenticated ? (
                  <>
                    <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        variant="outline"
                        className="w-full border-slate-200 hover:bg-slate-50 rounded-xl bg-transparent"
                      >
                        Profile
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        handleLogout()
                        setIsMenuOpen(false)
                      }}
                      variant="outline"
                      className="w-full border-red-200 hover:bg-red-50 hover:text-red-600 rounded-xl bg-transparent"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        variant="outline"
                        className="w-full border-slate-200 hover:bg-slate-50 rounded-xl bg-transparent"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl">
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
