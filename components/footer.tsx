import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold">EtumLabs</span>
            </div>
            <p className="text-slate-400">The premier Minecraft events platform connecting players worldwide.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Platform</h4>
            <div className="space-y-2 text-slate-400">
              <Link href="/events" className="block hover:text-white transition-colors">
                Events
              </Link>
              <Link href="/gallery" className="block hover:text-white transition-colors">
                Gallery
              </Link>
              <Link href="/news" className="block hover:text-white transition-colors">
                News
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Community</h4>
            <div className="space-y-2 text-slate-400">
              <Link href="/about" className="block hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block hover:text-white transition-colors">
                Contact
              </Link>
              <a href="#" className="block hover:text-white transition-colors">
                Discord
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Account</h4>
            <div className="space-y-2 text-slate-400">
              <Link href="/login" className="block hover:text-white transition-colors">
                Login
              </Link>
              <Link href="/register" className="block hover:text-white transition-colors">
                Register
              </Link>
              <Link href="/profile" className="block hover:text-white transition-colors">
                Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 EtumLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
