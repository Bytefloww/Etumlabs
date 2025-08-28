import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & Lead Developer",
      description: "Passionate Minecraft player and developer with 8+ years of server management experience.",
    },
    {
      name: "Sarah Johnson",
      role: "Community Manager",
      description: "Dedicated to building and maintaining our amazing community of players worldwide.",
    },
    {
      name: "Mike Rodriguez",
      role: "Event Coordinator",
      description: "Creative mind behind our most popular events and competitions.",
    },
    {
      name: "Emma Wilson",
      role: "Technical Administrator",
      description: "Ensures our servers run smoothly and securely 24/7.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About EtumLabs
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Learn about our story, mission, and the passionate team behind the premier Minecraft events platform.
          </p>
        </div>

        {/* Story Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-800 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              EtumLabs was born from a simple idea: to create the most engaging and inclusive Minecraft events platform
              where players from around the world could come together, compete, and build lasting friendships.
            </p>
            <p>
              Founded in 2020 by a group of passionate Minecraft enthusiasts, we started with a single server and a
              dream to revolutionize how players experience multiplayer Minecraft. What began as weekend building
              competitions among friends has grown into a thriving community of over 1,200 active players across
              multiple servers.
            </p>
            <p>
              Today, EtumLabs hosts over 150 events annually, ranging from creative building competitions and PvP
              tournaments to collaborative community projects and educational workshops. Our commitment to fair play,
              creativity, and community building remains at the heart of everything we do.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-800 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg"></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-slate-800">Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We believe in fostering a welcoming, inclusive environment where every player feels valued and can
                  contribute to our shared experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg"></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-slate-800">Innovation & Creativity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We constantly push the boundaries of what's possible in Minecraft, creating unique events and
                  experiences that inspire creativity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg"></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-slate-800">Fair Play & Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We maintain the highest standards of fairness and transparency in all our events, ensuring everyone
                  has an equal opportunity to succeed.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm text-center hover:scale-[1.02]"
              >
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-slate-800">{member.name}</CardTitle>
                  <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
