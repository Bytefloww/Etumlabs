"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface UserProfile {
  username: string
  email: string
  minecraftUsername: string
  joinDate: string
  eventsParticipated: number
  eventsWon: number
  badges: any[]
  stats: {
    totalPlaytime: string
    favoriteServer: string
    lastSeen: string
  }
}

const sampleUserProfile: UserProfile = {
  username: "MinecraftPro2024",
  email: "player@example.com",
  minecraftUsername: "BuilderMaster",
  joinDate: "2023-06-15",
  eventsParticipated: 23,
  eventsWon: 5,
  badges: [
    {
      id: "first-event",
      name: "First Steps",
      description: "Participated in your first event",
      icon: "🎯",
      rarity: "common",
      earnedDate: "2023-06-20",
    },
    {
      id: "castle-builder",
      name: "Castle Architect",
      description: "Won a castle building competition",
      icon: "🏰",
      rarity: "rare",
      earnedDate: "2023-08-12",
    },
    {
      id: "pvp-champion",
      name: "PvP Champion",
      description: "Won 3 PvP tournaments in a row",
      icon: "⚔️",
      rarity: "epic",
      earnedDate: "2023-10-05",
    },
    {
      id: "community-hero",
      name: "Community Hero",
      description: "Helped organize 10+ community events",
      icon: "🌟",
      rarity: "legendary",
      earnedDate: "2023-12-01",
    },
    {
      id: "redstone-master",
      name: "Redstone Master",
      description: "Completed advanced redstone workshop",
      icon: "🔴",
      rarity: "rare",
      earnedDate: "2023-09-18",
    },
    {
      id: "explorer",
      name: "World Explorer",
      description: "Completed 5 adventure events",
      icon: "🗺️",
      rarity: "common",
      earnedDate: "2023-11-22",
    },
  ],
  stats: {
    totalPlaytime: "127 hours",
    favoriteServer: "Creative Server",
    lastSeen: "2024-01-10",
  },
}

export default function ProfilePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [profile, setProfile] = useState<UserProfile>(sampleUserProfile)
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    email: profile.email,
    minecraftUsername: profile.minecraftUsername,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [updateMessage, setUpdateMessage] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Check authentication - in a real app this would verify JWT token
    const authStatus = localStorage.getItem("isAuthenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/login")
    }
    setIsLoading(false)
  }, [router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleSaveProfile = async () => {
    setUpdateMessage("")

    // Basic validation
    if (editForm.newPassword && editForm.newPassword !== editForm.confirmPassword) {
      setUpdateMessage("New passwords do not match.")
      return
    }

    if (editForm.newPassword && editForm.newPassword.length < 6) {
      setUpdateMessage("New password must be at least 6 characters long.")
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Update profile
    setProfile({
      ...profile,
      email: editForm.email,
      minecraftUsername: editForm.minecraftUsername,
    })

    setIsEditing(false)
    setUpdateMessage("Profile updated successfully!")
    setEditForm({ ...editForm, currentPassword: "", newPassword: "", confirmPassword: "" })
  }

  const getBadgeRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-100 text-gray-700 border-gray-200"
      case "rare":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "epic":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "legendary":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="inline-block w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl block-spin shadow-lg"></div>
          <p className="text-slate-600 font-medium">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl font-bold">{profile.username.charAt(0)}</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {profile.username}
            </h1>
            <p className="text-slate-600 mt-2">Member since {new Date(profile.joinDate).toLocaleDateString()}</p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl">
            <TabsTrigger value="overview" className="rounded-xl">
              Overview
            </TabsTrigger>
            <TabsTrigger value="badges" className="rounded-xl">
              Badges
            </TabsTrigger>
            <TabsTrigger value="events" className="rounded-xl">
              Events
            </TabsTrigger>
            <TabsTrigger value="settings" className="rounded-xl">
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stats Cards */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-100">Events Participated</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{profile.eventsParticipated}</div>
                  <div className="mt-2 bg-white/20 text-white border-0 rounded-xl px-4 py-2">Active participant</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-purple-100">Events Won</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{profile.eventsWon}</div>
                  <div className="mt-2 bg-white/20 text-white border-0 rounded-xl px-4 py-2">Champion</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-100">Badges Earned</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{profile.badges.length}</div>
                  <div className="mt-2 bg-white/20 text-white border-0 rounded-xl px-4 py-2">Collector</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Badges */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {profile.badges.slice(0, 3).map((badge) => (
                    <div
                      key={badge.id}
                      className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl border border-slate-200"
                    >
                      <div className="text-3xl">{badge.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800">{badge.name}</h3>
                        <p className="text-sm text-slate-600">{badge.description}</p>
                        <div
                          className={`mt-1 ${getBadgeRarityColor(badge.rarity)}`}
                          style={{ padding: "4px 8px", borderRadius: "4px" }}
                        >
                          {badge.rarity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Player Stats */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Player Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-slate-800">{profile.stats.totalPlaytime}</div>
                    <p className="text-slate-600">Total Playtime</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-slate-800">{profile.stats.favoriteServer}</div>
                    <p className="text-slate-600">Favorite Server</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-slate-800">
                      {new Date(profile.stats.lastSeen).toLocaleDateString()}
                    </div>
                    <p className="text-slate-600">Last Seen</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Badges Tab */}
          <TabsContent value="badges" className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Badge Collection</CardTitle>
                <p className="text-slate-600">Showcase your achievements and milestones</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {profile.badges.map((badge) => (
                    <div
                      key={badge.id}
                      className="p-6 bg-gradient-to-br from-white to-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="text-center space-y-4">
                        <div className="text-5xl">{badge.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-800">{badge.name}</h3>
                          <p className="text-slate-600 mt-2">{badge.description}</p>
                        </div>
                        <div className="space-y-2">
                          <div
                            className={getBadgeRarityColor(badge.rarity)}
                            style={{ padding: "4px 8px", borderRadius: "4px" }}
                          >
                            {badge.rarity}
                          </div>
                          <p className="text-sm text-slate-500">
                            Earned on {new Date(badge.earnedDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-slate-800">Castle Building Competition</h4>
                    <p className="text-sm text-slate-600 mt-1">January 15, 2024 at 14:00 UTC</p>
                    <div className="mt-2 bg-green-100 text-green-700 border-green-200 rounded-xl px-4 py-2">
                      Registered
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                    <h4 className="font-semibold text-slate-800">Redstone Workshop</h4>
                    <p className="text-sm text-slate-600 mt-1">January 25, 2024 at 18:00 UTC</p>
                    <div className="mt-2 bg-blue-100 text-blue-700 border-blue-200 rounded-xl px-4 py-2">Available</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Recent Participation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-slate-800">Winter Festival Build-off</h4>
                    <p className="text-sm text-slate-600 mt-1">December 20, 2023</p>
                    <div className="mt-2 bg-yellow-100 text-yellow-700 border-yellow-200 rounded-xl px-4 py-2">
                      2nd Place
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100">
                    <h4 className="font-semibold text-slate-800">PvP Tournament</h4>
                    <p className="text-sm text-slate-600 mt-1">December 10, 2023</p>
                    <div className="mt-2 bg-gold-100 text-gold-700 border-gold-200 rounded-xl px-4 py-2">1st Place</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Account Settings</CardTitle>
                <p className="text-slate-600">Manage your account information and preferences</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {updateMessage && (
                  <div className="border-green-200 bg-green-50 rounded-xl p-4">
                    <p className="text-green-700">{updateMessage}</p>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-slate-700 font-medium">
                      Username
                    </Label>
                    <Input
                      id="username"
                      value={profile.username}
                      disabled
                      className="h-12 border-slate-200 rounded-xl bg-slate-50"
                    />
                    <p className="text-sm text-slate-500">Username cannot be changed</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={isEditing ? editForm.email : profile.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="minecraftUsername" className="text-slate-700 font-medium">
                      Minecraft Username
                    </Label>
                    <Input
                      id="minecraftUsername"
                      name="minecraftUsername"
                      value={isEditing ? editForm.minecraftUsername : profile.minecraftUsername}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl"
                    />
                  </div>

                  {isEditing && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword" className="text-slate-700 font-medium">
                          Current Password
                        </Label>
                        <Input
                          id="currentPassword"
                          name="currentPassword"
                          type="password"
                          value={editForm.currentPassword}
                          onChange={handleInputChange}
                          className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl"
                          placeholder="Enter current password to make changes"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="newPassword" className="text-slate-700 font-medium">
                          New Password (Optional)
                        </Label>
                        <Input
                          id="newPassword"
                          name="newPassword"
                          type="password"
                          value={editForm.newPassword}
                          onChange={handleInputChange}
                          className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl"
                          placeholder="Leave blank to keep current password"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-slate-700 font-medium">
                          Confirm New Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={editForm.confirmPassword}
                          onChange={handleInputChange}
                          className="h-12 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl"
                          placeholder="Confirm new password"
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="flex space-x-4">
                  {!isEditing ? (
                    <Button
                      onClick={() => setIsEditing(true)}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl"
                    >
                      Edit Profile
                    </Button>
                  ) : (
                    <>
                      <Button
                        onClick={handleSaveProfile}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-xl"
                      >
                        Save Changes
                      </Button>
                      <Button
                        onClick={() => {
                          setIsEditing(false)
                          setEditForm({
                            email: profile.email,
                            minecraftUsername: profile.minecraftUsername,
                            currentPassword: "",
                            newPassword: "",
                            confirmPassword: "",
                          })
                          setUpdateMessage("")
                        }}
                        variant="outline"
                        className="border-slate-200 hover:bg-slate-50 rounded-xl"
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
