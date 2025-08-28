import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// Sample event data - in a real app this would come from a database
const eventData = {
  "1": {
    id: 1,
    title: "Castle Building Competition",
    description:
      "Build the most impressive medieval castle in 3 hours using only the provided materials. Judges will evaluate based on creativity, architectural accuracy, and attention to detail.",
    longDescription: `Join us for an epic castle building competition where creativity meets medieval architecture! 

This event challenges builders to construct the most impressive castle within a 3-hour time limit. You'll have access to a curated selection of medieval building materials including various stone types, wood, and decorative blocks.

**Judging Criteria:**
- Architectural accuracy and historical inspiration
- Creative use of materials and space
- Attention to detail in both exterior and interior design
- Overall visual impact and storytelling

**Rules:**
- Maximum build area: 100x100 blocks
- No flying or creative mode advantages
- All materials must be obtained from the provided chests
- Teamwork is allowed (max 3 players per team)
- No griefing or interfering with other builds

**Prizes:**
- 1st Place: Custom castle schematic + 500 server coins
- 2nd Place: Medieval building pack + 300 server coins  
- 3rd Place: Stone mason kit + 200 server coins
- Participation: Castle builder badge + 50 server coins`,
    date: "2024-01-15",
    time: "14:00 UTC",
    server: "Creative Server",
    participants: 24,
    maxParticipants: 50,
    status: "open" as const,
    type: "competition" as const,
    organizer: "BuildMaster_Alex",
    rules: [
      "Maximum build area: 100x100 blocks",
      "3-hour time limit strictly enforced",
      "No flying or creative mode advantages",
      "Teams of up to 3 players allowed",
      "All materials from provided chests only",
    ],
    prizes: [
      "1st Place: Custom schematic + 500 coins",
      "2nd Place: Building pack + 300 coins",
      "3rd Place: Stone kit + 200 coins",
      "All participants: Builder badge + 50 coins",
    ],
  },
}

interface PageProps {
  params: {
    id: string
  }
}

export default function EventDetailPage({ params }: PageProps) {
  const event = eventData[params.id as keyof typeof eventData]

  if (!event) {
    notFound()
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "competition":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "tournament":
        return "bg-red-100 text-red-700 border-red-200"
      case "adventure":
        return "bg-green-100 text-green-700 border-green-200"
      case "workshop":
        return "bg-purple-100 text-purple-700 border-purple-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap gap-4 items-center">
            <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
            <Badge
              className={
                event.status === "open"
                  ? "bg-green-100 text-green-700 border-green-200"
                  : "bg-red-100 text-red-700 border-red-200"
              }
            >
              {event.status === "open" ? "Registration Open" : "Event Full"}
            </Badge>
            <Badge variant="outline" className="text-slate-600">
              {event.server}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {event.title}
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed">{event.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Details */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-slate max-w-none">
                  {event.longDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-slate-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rules */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Rules & Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Prizes */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Prizes & Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {event.prizes.map((prize, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-slate-600 font-medium">{prize}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Date:</span>
                    <span className="font-medium text-slate-800">{event.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Time:</span>
                    <span className="font-medium text-slate-800">{event.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Server:</span>
                    <span className="font-medium text-slate-800">{event.server}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Organizer:</span>
                    <span className="font-medium text-slate-800">{event.organizer}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Participants</span>
                    <span className="font-medium text-slate-800">
                      {event.participants}/{event.maxParticipants}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl"
                  disabled={event.status === "full"}
                >
                  {event.status === "open" ? "Register for Event" : "Event Full"}
                </Button>

                <p className="text-xs text-slate-500 text-center">Registration closes 1 hour before the event starts</p>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-600">Duration: 3 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600">Skill Level: All levels welcome</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-600">Team Size: 1-3 players</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-slate-600">Materials: Provided</span>
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
