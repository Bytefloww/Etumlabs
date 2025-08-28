"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  server: string
  participants: number
  maxParticipants: number
  status: "open" | "full" | "completed"
  type: "competition" | "tournament" | "adventure" | "workshop"
}

const sampleEvents: Event[] = [
  {
    id: 1,
    title: "Castle Building Competition",
    description: "Build the most impressive medieval castle in 3 hours",
    date: "2024-01-15",
    time: "14:00 UTC",
    server: "Creative Server",
    participants: 24,
    maxParticipants: 50,
    status: "open",
    type: "competition",
  },
  {
    id: 2,
    title: "PvP Tournament Finals",
    description: "The ultimate showdown between our top warriors",
    date: "2024-01-18",
    time: "19:00 UTC",
    server: "PvP Arena",
    participants: 16,
    maxParticipants: 16,
    status: "full",
    type: "tournament",
  },
  {
    id: 3,
    title: "Treasure Hunt Adventure",
    description: "Solve puzzles and find hidden treasures across multiple worlds",
    date: "2024-01-22",
    time: "16:00 UTC",
    server: "Adventure World",
    participants: 8,
    maxParticipants: 30,
    status: "open",
    type: "adventure",
  },
  {
    id: 4,
    title: "Redstone Workshop",
    description: "Learn advanced redstone techniques from our experts",
    date: "2024-01-25",
    time: "18:00 UTC",
    server: "Education Server",
    participants: 12,
    maxParticipants: 25,
    status: "open",
    type: "workshop",
  },
]

export function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar")

  // Generate calendar days for current month
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const firstDay = new Date(currentYear, currentMonth, 1)
  const lastDay = new Date(currentYear, currentMonth + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  const calendarDays = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return sampleEvents.filter((event) => event.date === dateStr)
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
    <div className="space-y-6">
      {/* View Toggle */}
      <div className="flex justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-slate-200">
          <Button
            variant={viewMode === "calendar" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("calendar")}
            className={cn(
              "rounded-lg",
              viewMode === "calendar" && "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
            )}
          >
            Calendar View
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
            className={cn(
              "rounded-lg",
              viewMode === "list" && "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
            )}
          >
            List View
          </Button>
        </div>
      </div>

      {viewMode === "calendar" ? (
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-800 text-center">
              {new Date(currentYear, currentMonth).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center font-semibold text-slate-600 py-2">
                  {day}
                </div>
              ))}
              {calendarDays.map((day, index) => {
                if (day === null) {
                  return <div key={index} className="h-20"></div>
                }

                const events = getEventsForDate(day)
                const isToday =
                  day === currentDate.getDate() &&
                  currentMonth === currentDate.getMonth() &&
                  currentYear === currentDate.getFullYear()

                return (
                  <div
                    key={day}
                    className={cn(
                      "h-20 p-1 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors",
                      isToday && "bg-blue-50 border-blue-200",
                      events.length > 0 && "bg-gradient-to-br from-blue-50 to-purple-50",
                    )}
                    onClick={() =>
                      setSelectedDate(
                        `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
                      )
                    }
                  >
                    <div className="font-medium text-slate-800">{day}</div>
                    <div className="space-y-1">
                      {events.slice(0, 2).map((event) => (
                        <div key={event.id} className="text-xs px-1 py-0.5 bg-blue-100 text-blue-700 rounded truncate">
                          {event.title}
                        </div>
                      ))}
                      {events.length > 2 && <div className="text-xs text-slate-500">+{events.length - 2} more</div>}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Selected Date Events */}
            {selectedDate && (
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">
                  Events on {new Date(selectedDate).toLocaleDateString()}
                </h3>
                {getEventsForDate(Number.parseInt(selectedDate.split("-")[2])).map((event) => (
                  <Card key={event.id} className="border border-slate-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-slate-800">{event.title}</h4>
                        <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                      </div>
                      <p className="text-slate-600 text-sm mb-2">{event.description}</p>
                      <div className="flex justify-between items-center text-sm text-slate-600">
                        <span>
                          {event.time} • {event.server}
                        </span>
                        <span>
                          {event.participants}/{event.maxParticipants} players
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleEvents.map((event) => (
            <Card
              key={event.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-[1.02]"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                  <Badge
                    className={
                      event.status === "open"
                        ? "bg-green-100 text-green-700 border-green-200"
                        : "bg-red-100 text-red-700 border-red-200"
                    }
                  >
                    {event.status === "open" ? "Open" : "Full"}
                  </Badge>
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
                    <span>Time:</span>
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Server:</span>
                    <span className="font-medium">{event.server}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Participants:</span>
                    <span className="font-medium">
                      {event.participants}/{event.maxParticipants}
                    </span>
                  </div>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl"
                  disabled={event.status === "full"}
                >
                  {event.status === "open" ? "Register Now" : "Event Full"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
