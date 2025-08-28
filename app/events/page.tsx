import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EventCalendar } from "@/components/event-calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
  const pastEvents = [
    {
      id: 4,
      title: "Winter Festival Build-off",
      description: "Holiday-themed building competition",
      date: "2023-12-20",
      winner: "SnowBuilder123",
      participants: 45,
      type: "competition",
    },
    {
      id: 5,
      title: "Redstone Engineering Challenge",
      description: "Create the most complex redstone contraption",
      date: "2023-12-15",
      winner: "RedstoneWizard",
      participants: 28,
      type: "competition",
    },
    {
      id: 6,
      title: "Survival Games Tournament",
      description: "Last player standing wins the ultimate prize",
      date: "2023-12-10",
      winner: "SurvivalKing",
      participants: 32,
      type: "tournament",
    },
  ]

  const serverInfo = [
    {
      name: "Creative Server",
      description: "Unlimited resources for building competitions and creative events",
      status: "online",
      players: 45,
      maxPlayers: 100,
    },
    {
      name: "PvP Arena",
      description: "Competitive combat tournaments and dueling events",
      status: "online",
      players: 28,
      maxPlayers: 50,
    },
    {
      name: "Adventure World",
      description: "Custom maps and adventure events with unique challenges",
      status: "online",
      players: 32,
      maxPlayers: 75,
    },
    {
      name: "Education Server",
      description: "Learning workshops and collaborative building projects",
      status: "maintenance",
      players: 0,
      maxPlayers: 40,
    },
    {
      name: "Survival Plus",
      description: "Enhanced survival experience with community events",
      status: "online",
      players: 67,
      maxPlayers: 120,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Events Calendar
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join exciting Minecraft events, competitions, and community activities across our servers.
          </p>
        </div>

        <section className="space-y-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-800">Upcoming Events</h2>
          <EventCalendar />
        </section>

        <section className="space-y-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-800">Server Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serverInfo.map((server, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-[1.02]"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      className={
                        server.status === "online"
                          ? "bg-green-100 text-green-700 border-green-200"
                          : "bg-orange-100 text-orange-700 border-orange-200"
                      }
                    >
                      {server.status}
                    </Badge>
                    <span className="text-sm text-slate-600">
                      {server.players}/{server.maxPlayers}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-slate-800">{server.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{server.description}</p>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-slate-600 mb-2">
                      <span>Players Online</span>
                      <span className="font-medium">
                        {server.players}/{server.maxPlayers}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(server.players / server.maxPlayers) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-800">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Card
                key={event.id}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-slate-100 text-slate-700 border-slate-200">{event.type}</Badge>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200">Completed</Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-800">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{event.description}</p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Winner:</span>
                      <span className="font-medium text-blue-600">{event.winner}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Participants:</span>
                      <span className="font-medium">{event.participants}</span>
                    </div>
                  </div>
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
