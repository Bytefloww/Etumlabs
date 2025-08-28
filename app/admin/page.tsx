"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const [serverStats, setServerStats] = useState({
    totalPlayers: 1247,
    activeEvents: 12,
    completedEvents: 156,
    totalServers: 5,
    onlineServers: 4,
    totalPlaytime: "15,432 hours",
    newRegistrations: 23,
    pendingApplications: 8,
  })

  const [teamApplications, setTeamApplications] = useState([
    {
      id: 1,
      username: "EventMaster99",
      email: "eventmaster@example.com",
      minecraftUsername: "EventMaster99",
      role: "Event Coordinator",
      experience: "3 years organizing Minecraft events",
      motivation: "I want to help create amazing experiences for the community",
      appliedDate: "2024-01-08",
      status: "pending",
    },
    {
      id: 2,
      username: "ModeratorPro",
      email: "modpro@example.com",
      minecraftUsername: "ModeratorPro",
      role: "Community Moderator",
      experience: "2 years moderating Discord servers and Minecraft communities",
      motivation: "I believe in maintaining a positive and inclusive environment",
      appliedDate: "2024-01-07",
      status: "pending",
    },
  ])

  const [moderationQueue, setModerationQueue] = useState([
    {
      id: 1,
      type: "report",
      reporter: "PlayerOne",
      reported: "GrieferUser",
      reason: "Griefing in creative server",
      description: "User destroyed multiple builds in the creative server",
      server: "Creative Server",
      timestamp: "2024-01-10 14:30",
      status: "pending",
      priority: "high",
    },
    {
      id: 2,
      type: "appeal",
      username: "BannedPlayer",
      reason: "Ban appeal for inappropriate chat",
      description: "I apologize for my behavior and promise to follow the rules",
      originalBan: "2024-01-05",
      timestamp: "2024-01-09 16:45",
      status: "pending",
      priority: "medium",
    },
  ])

  useEffect(() => {
    // Check authentication
    const authStatus = localStorage.getItem("isAuthenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/")
    }
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    router.push("/")
  }

  const handleApplicationAction = (id: number, action: "approve" | "reject") => {
    setTeamApplications(
      teamApplications.map((app) =>
        app.id === id ? { ...app, status: action === "approve" ? "approved" : "rejected" } : app,
      ),
    )
  }

  const handleModerationAction = (id: number, action: "resolve" | "escalate" | "dismiss") => {
    setModerationQueue(
      moderationQueue.map((item) =>
        item.id === id
          ? { ...item, status: action === "resolve" ? "resolved" : action === "escalate" ? "escalated" : "dismissed" }
          : item,
      ),
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="inline-block w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl block-spin shadow-lg"></div>
          <p className="text-slate-600 font-medium">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-sm"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EtumLabs
                </h1>
                <p className="text-xs text-slate-500">Admin Dashboard</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-slate-200 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-200 rounded-xl bg-transparent"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Admin Control Panel
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Manage your Minecraft events platform, monitor server activity, and coordinate with your team.
            </p>
          </div>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl">
              <TabsTrigger value="overview" className="rounded-xl">
                Overview
              </TabsTrigger>
              <TabsTrigger value="statistics" className="rounded-xl">
                Statistics
              </TabsTrigger>
              <TabsTrigger value="team" className="rounded-xl">
                Team Management
              </TabsTrigger>
              <TabsTrigger value="moderation" className="rounded-xl">
                Moderation
              </TabsTrigger>
              <TabsTrigger value="servers" className="rounded-xl">
                Servers
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:scale-[1.02]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-blue-100">Active Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{serverStats.activeEvents}</div>
                    <Badge className="mt-2 bg-white/20 text-white border-0">3 starting today</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-500 to-purple-600 text-white hover:scale-[1.02]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-purple-100">Total Players</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{serverStats.totalPlayers.toLocaleString()}</div>
                    <Badge className="mt-2 bg-white/20 text-white border-0">
                      ↗ +{serverStats.newRegistrations} today
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-500 to-green-600 text-white hover:scale-[1.02]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-green-100">Server Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {serverStats.onlineServers}/{serverStats.totalServers}
                    </div>
                    <Badge className="mt-2 bg-white/20 text-white border-0">98% uptime</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-500 to-red-500 text-white hover:scale-[1.02]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-orange-100">Pending Items</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{serverStats.pendingApplications + moderationQueue.length}</div>
                    <Badge className="mt-2 bg-white/20 text-white border-0">Needs attention</Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-slate-800">Quick Actions</CardTitle>
                  <CardDescription className="text-slate-600">
                    Common administrative tasks for managing your platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Button className="h-auto p-6 flex flex-col items-center space-y-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02] rounded-xl shadow-lg">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-inner">
                        <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                      </div>
                      <span className="font-medium">Create Event</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto p-6 flex flex-col items-center space-y-3 border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02] rounded-xl shadow-lg"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <div className="w-5 h-5 bg-white rounded-lg"></div>
                      </div>
                      <span className="font-medium text-slate-700">Manage Users</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto p-6 flex flex-col items-center space-y-3 border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02] rounded-xl shadow-lg"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                        <div className="w-5 h-5 bg-white rounded-lg"></div>
                      </div>
                      <span className="font-medium text-slate-700">Server Control</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto p-6 flex flex-col items-center space-y-3 border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02] rounded-xl shadow-lg"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <div className="w-5 h-5 bg-white rounded-lg"></div>
                      </div>
                      <span className="font-medium text-slate-700">View Reports</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-slate-800">Recent Activity</CardTitle>
                  <CardDescription className="text-slate-600">
                    Latest platform events and administrative actions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                      <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                      <span className="text-sm text-slate-700 flex-1">New team application from EventMaster99</span>
                      <span className="text-xs text-slate-500 font-medium">5 minutes ago</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                      <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
                      <span className="text-sm text-slate-700 flex-1">Castle Building Competition event created</span>
                      <span className="text-xs text-slate-500 font-medium">15 minutes ago</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100">
                      <div className="w-3 h-3 bg-orange-500 rounded-full shadow-lg"></div>
                      <span className="text-sm text-slate-700 flex-1">
                        Moderation report submitted for Creative Server
                      </span>
                      <span className="text-xs text-slate-500 font-medium">30 minutes ago</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                      <div className="w-3 h-3 bg-purple-500 rounded-full shadow-lg"></div>
                      <span className="text-sm text-slate-700 flex-1">
                        Server maintenance completed - all systems operational
                      </span>
                      <span className="text-xs text-slate-500 font-medium">1 hour ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Statistics Tab */}
            <TabsContent value="statistics" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">Platform Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center space-y-2">
                        <div className="text-3xl font-bold text-blue-600">
                          {serverStats.totalPlayers.toLocaleString()}
                        </div>
                        <p className="text-slate-600">Total Players</p>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-3xl font-bold text-purple-600">{serverStats.completedEvents}</div>
                        <p className="text-slate-600">Events Completed</p>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-3xl font-bold text-green-600">{serverStats.totalPlaytime}</div>
                        <p className="text-slate-600">Total Playtime</p>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-3xl font-bold text-orange-600">{serverStats.totalServers}</div>
                        <p className="text-slate-600">Game Servers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">Growth Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">New Registrations (Today)</span>
                        <span className="font-bold text-slate-800">{serverStats.newRegistrations}</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Active Events</span>
                        <span className="font-bold text-slate-800">{serverStats.activeEvents}</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Server Uptime</span>
                        <span className="font-bold text-slate-800">98.5%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Team Management Tab */}
            <TabsContent value="team" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Team Applications</CardTitle>
                  <CardDescription className="text-slate-600">
                    Review and manage applications from users wanting to join the team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {teamApplications.map((application) => (
                    <div
                      key={application.id}
                      className="p-6 border border-slate-200 rounded-xl bg-gradient-to-r from-slate-50 to-white"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-800">{application.username}</h3>
                          <p className="text-slate-600">{application.email}</p>
                          <Badge className="mt-2 bg-blue-100 text-blue-700 border-blue-200">{application.role}</Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-500">Applied: {application.appliedDate}</p>
                          <Badge
                            className={
                              application.status === "pending"
                                ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                                : application.status === "approved"
                                  ? "bg-green-100 text-green-700 border-green-200"
                                  : "bg-red-100 text-red-700 border-red-200"
                            }
                          >
                            {application.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <Label className="text-sm font-medium text-slate-700">Minecraft Username:</Label>
                          <p className="text-slate-600">{application.minecraftUsername}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-slate-700">Experience:</Label>
                          <p className="text-slate-600">{application.experience}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-slate-700">Motivation:</Label>
                          <p className="text-slate-600">{application.motivation}</p>
                        </div>
                      </div>
                      {application.status === "pending" && (
                        <div className="flex space-x-3 mt-4">
                          <Button
                            onClick={() => handleApplicationAction(application.id, "approve")}
                            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-xl"
                          >
                            Approve
                          </Button>
                          <Button
                            onClick={() => handleApplicationAction(application.id, "reject")}
                            variant="outline"
                            className="border-red-200 hover:bg-red-50 hover:text-red-600 rounded-xl"
                          >
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Moderation Tab */}
            <TabsContent value="moderation" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Moderation Queue</CardTitle>
                  <CardDescription className="text-slate-600">
                    Handle reports, appeals, and other moderation tasks
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {moderationQueue.map((item) => (
                    <div
                      key={item.id}
                      className={`p-6 border rounded-xl ${
                        item.priority === "high"
                          ? "border-red-200 bg-gradient-to-r from-red-50 to-white"
                          : item.priority === "medium"
                            ? "border-orange-200 bg-gradient-to-r from-orange-50 to-white"
                            : "border-slate-200 bg-gradient-to-r from-slate-50 to-white"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge className="bg-blue-100 text-blue-700 border-blue-200">{item.type}</Badge>
                            <Badge
                              className={
                                item.priority === "high"
                                  ? "bg-red-100 text-red-700 border-red-200"
                                  : item.priority === "medium"
                                    ? "bg-orange-100 text-orange-700 border-orange-200"
                                    : "bg-gray-100 text-gray-700 border-gray-200"
                              }
                            >
                              {item.priority} priority
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-800">
                            {item.type === "report" ? `Report: ${item.reported}` : `Appeal: ${item.username}`}
                          </h3>
                          {item.type === "report" && <p className="text-slate-600">Reported by: {item.reporter}</p>}
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-500">{item.timestamp}</p>
                          <Badge
                            className={
                              item.status === "pending"
                                ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                                : item.status === "resolved"
                                  ? "bg-green-100 text-green-700 border-green-200"
                                  : "bg-gray-100 text-gray-700 border-gray-200"
                            }
                          >
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <Label className="text-sm font-medium text-slate-700">Reason:</Label>
                          <p className="text-slate-600">{item.reason}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-slate-700">Description:</Label>
                          <p className="text-slate-600">{item.description}</p>
                        </div>
                        {item.server && (
                          <div>
                            <Label className="text-sm font-medium text-slate-700">Server:</Label>
                            <p className="text-slate-600">{item.server}</p>
                          </div>
                        )}
                      </div>
                      {item.status === "pending" && (
                        <div className="flex space-x-3 mt-4">
                          <Button
                            onClick={() => handleModerationAction(item.id, "resolve")}
                            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-xl"
                          >
                            Resolve
                          </Button>
                          <Button
                            onClick={() => handleModerationAction(item.id, "escalate")}
                            variant="outline"
                            className="border-orange-200 hover:bg-orange-50 hover:text-orange-600 rounded-xl"
                          >
                            Escalate
                          </Button>
                          <Button
                            onClick={() => handleModerationAction(item.id, "dismiss")}
                            variant="outline"
                            className="border-slate-200 hover:bg-slate-50 rounded-xl"
                          >
                            Dismiss
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Servers Tab */}
            <TabsContent value="servers" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">Server Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Creative Server", status: "online", players: 45, maxPlayers: 100, uptime: "99.2%" },
                      { name: "PvP Arena", status: "online", players: 28, maxPlayers: 50, uptime: "98.8%" },
                      { name: "Adventure World", status: "online", players: 32, maxPlayers: 75, uptime: "99.5%" },
                      { name: "Education Server", status: "maintenance", players: 0, maxPlayers: 40, uptime: "97.1%" },
                      { name: "Survival Plus", status: "online", players: 67, maxPlayers: 120, uptime: "99.8%" },
                    ].map((server, index) => (
                      <div
                        key={index}
                        className="p-4 border border-slate-200 rounded-xl bg-gradient-to-r from-slate-50 to-white"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold text-slate-800">{server.name}</h3>
                          <Badge
                            className={
                              server.status === "online"
                                ? "bg-green-100 text-green-700 border-green-200"
                                : "bg-orange-100 text-orange-700 border-orange-200"
                            }
                          >
                            {server.status}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Players:</span>
                            <span className="font-medium">
                              {server.players}/{server.maxPlayers}
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                              style={{ width: `${(server.players / server.maxPlayers) * 100}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Uptime:</span>
                            <span className="font-medium text-green-600">{server.uptime}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">Server Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-3">
                      <Button className="justify-start h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl">
                        Restart All Servers
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-start h-12 border-slate-200 hover:bg-slate-50 rounded-xl bg-transparent"
                      >
                        Update Server Configurations
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-start h-12 border-slate-200 hover:bg-slate-50 rounded-xl bg-transparent"
                      >
                        View Server Logs
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-start h-12 border-slate-200 hover:bg-slate-50 rounded-xl bg-transparent"
                      >
                        Backup All Worlds
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-start h-12 border-orange-200 hover:bg-orange-50 hover:text-orange-600 rounded-xl bg-transparent"
                      >
                        Emergency Shutdown
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
