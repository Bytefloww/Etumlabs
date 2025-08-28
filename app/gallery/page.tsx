"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface MediaItem {
  id: number
  title: string
  description: string
  type: "image" | "video" | "trailer"
  category: "event" | "build" | "community" | "server"
  eventName?: string
  author: string
  date: string
  likes: number
  views: number
  featured: boolean
  thumbnail: string
}

const sampleMedia: MediaItem[] = [
  {
    id: 1,
    title: "Epic Castle Competition Winner",
    description:
      "The winning castle from our medieval building competition featuring intricate details and massive scale",
    type: "image",
    category: "event",
    eventName: "Castle Building Competition",
    author: "CastleBuilder123",
    date: "2024-01-10",
    likes: 245,
    views: 1520,
    featured: true,
    thumbnail: "/medieval-castle-minecraft-build-winner.png",
  },
  {
    id: 2,
    title: "PvP Tournament Highlights",
    description: "Best moments from the intense PvP tournament finals with epic battles and amazing plays",
    type: "video",
    category: "event",
    eventName: "PvP Tournament Finals",
    author: "EventRecorder",
    date: "2024-01-08",
    likes: 189,
    views: 2340,
    featured: true,
    thumbnail: "/minecraft-pvp-tournament-battle-arena.png",
  },
  {
    id: 3,
    title: "Community Build Showcase",
    description: "Amazing collaborative build created by our community members over several weeks",
    type: "image",
    category: "community",
    author: "CommunityTeam",
    date: "2024-01-05",
    likes: 156,
    views: 980,
    featured: false,
    thumbnail: "/minecraft-community-collaborative-build-showcase.png",
  },
  {
    id: 4,
    title: "Treasure Hunt Adventure Trailer",
    description: "Exciting preview of our upcoming treasure hunt event with custom maps and challenges",
    type: "trailer",
    category: "event",
    eventName: "Treasure Hunt Adventure",
    author: "EtumLabs",
    date: "2024-01-12",
    likes: 312,
    views: 1890,
    featured: true,
    thumbnail: "/minecraft-treasure-hunt-adventure-map-preview.png",
  },
  {
    id: 5,
    title: "Creative Server Masterpiece",
    description: "Stunning architectural creation showcasing advanced building techniques and artistic vision",
    type: "image",
    category: "build",
    author: "ArchitectPro",
    date: "2024-01-07",
    likes: 203,
    views: 1245,
    featured: false,
    thumbnail: "/minecraft-creative-architecture-masterpiece-buildi.png",
  },
  {
    id: 6,
    title: "Server Tour: Adventure World",
    description: "Complete walkthrough of our custom adventure world with all its secrets and challenges",
    type: "video",
    category: "server",
    author: "ServerGuide",
    date: "2024-01-03",
    likes: 167,
    views: 1678,
    featured: false,
    thumbnail: "/minecraft-adventure-world-server-tour-landscape.png",
  },
  {
    id: 7,
    title: "Redstone Engineering Marvel",
    description: "Complex redstone contraption from our engineering workshop demonstrating advanced mechanics",
    type: "image",
    category: "build",
    author: "RedstoneWizard",
    date: "2024-01-09",
    likes: 134,
    views: 876,
    featured: false,
    thumbnail: "/minecraft-redstone-engineering-complex-contraption.png",
  },
  {
    id: 8,
    title: "Winter Festival Recap",
    description: "Highlights from our amazing winter festival with snow builds, competitions, and community fun",
    type: "video",
    category: "event",
    eventName: "Winter Festival",
    author: "FestivalTeam",
    date: "2023-12-25",
    likes: 298,
    views: 2156,
    featured: false,
    thumbnail: "/minecraft-winter-festival-snow-builds-celebration.png",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)

  const filteredMedia =
    selectedCategory === "all" ? sampleMedia : sampleMedia.filter((item) => item.category === selectedCategory)

  const featuredMedia = sampleMedia.filter((item) => item.featured)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return "▶️"
      case "trailer":
        return "🎬"
      default:
        return "📸"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "event":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "build":
        return "bg-green-100 text-green-700 border-green-200"
      case "community":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "server":
        return "bg-orange-100 text-orange-700 border-orange-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Gallery & Media
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore amazing builds, event highlights, and community creations from our Minecraft servers.
          </p>
        </div>

        <Tabs defaultValue="featured" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl">
            <TabsTrigger value="featured" className="rounded-xl">
              Featured
            </TabsTrigger>
            <TabsTrigger value="events" className="rounded-xl">
              Events
            </TabsTrigger>
            <TabsTrigger value="builds" className="rounded-xl">
              Builds
            </TabsTrigger>
            <TabsTrigger value="all" className="rounded-xl">
              All Media
            </TabsTrigger>
          </TabsList>

          {/* Featured Tab */}
          <TabsContent value="featured" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Hero Featured Item */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-3xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={featuredMedia[0]?.thumbnail || "/placeholder.svg"}
                      alt={featuredMedia[0]?.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Featured</Badge>
                      <Badge className={getCategoryColor(featuredMedia[0]?.category || "")}>
                        {featuredMedia[0]?.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="text-2xl">{getTypeIcon(featuredMedia[0]?.type || "")}</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">{featuredMedia[0]?.title}</h2>
                    <p className="text-slate-600 mb-4">{featuredMedia[0]?.description}</p>
                    <div className="flex justify-between items-center text-sm text-slate-500">
                      <span>By {featuredMedia[0]?.author}</span>
                      <div className="flex space-x-4">
                        <span>❤️ {featuredMedia[0]?.likes}</span>
                        <span>👁️ {featuredMedia[0]?.views}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Other Featured Items */}
              {featuredMedia.slice(1, 3).map((item) => (
                <Card
                  key={item.id}
                  className="border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  onClick={() => setSelectedMedia(item)}
                >
                  <div className="relative">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3 flex space-x-2">
                      <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Featured</Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="text-xl">{getTypeIcon(item.type)}</div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex justify-between items-center text-xs text-slate-500">
                      <span>By {item.author}</span>
                      <div className="flex space-x-3">
                        <span>❤️ {item.likes}</span>
                        <span>👁️ {item.views}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleMedia
                .filter((item) => item.category === "event")
                .map((item) => (
                  <Card
                    key={item.id}
                    className="border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    onClick={() => setSelectedMedia(item)}
                  >
                    <div className="relative">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="text-xl">{getTypeIcon(item.type)}</div>
                      </div>
                      {item.featured && (
                        <div className="absolute bottom-3 left-3">
                          <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Featured</Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                      {item.eventName && <p className="text-blue-600 text-sm font-medium mb-2">{item.eventName}</p>}
                      <p className="text-slate-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                      <div className="flex justify-between items-center text-xs text-slate-500">
                        <span>By {item.author}</span>
                        <div className="flex space-x-3">
                          <span>❤️ {item.likes}</span>
                          <span>👁️ {item.views}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* Builds Tab */}
          <TabsContent value="builds" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleMedia
                .filter((item) => item.category === "build" || item.category === "community")
                .map((item) => (
                  <Card
                    key={item.id}
                    className="border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    onClick={() => setSelectedMedia(item)}
                  >
                    <div className="relative">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="text-xl">{getTypeIcon(item.type)}</div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                      <div className="flex justify-between items-center text-xs text-slate-500">
                        <span>By {item.author}</span>
                        <div className="flex space-x-3">
                          <span>❤️ {item.likes}</span>
                          <span>👁️ {item.views}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* All Media Tab */}
          <TabsContent value="all" className="space-y-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className={`rounded-xl ${
                  selectedCategory === "all"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "border-slate-200 hover:bg-slate-50 bg-transparent"
                }`}
              >
                All
              </Button>
              <Button
                variant={selectedCategory === "event" ? "default" : "outline"}
                onClick={() => setSelectedCategory("event")}
                className={`rounded-xl ${
                  selectedCategory === "event"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "border-slate-200 hover:bg-slate-50 bg-transparent"
                }`}
              >
                Events
              </Button>
              <Button
                variant={selectedCategory === "build" ? "default" : "outline"}
                onClick={() => setSelectedCategory("build")}
                className={`rounded-xl ${
                  selectedCategory === "build"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "border-slate-200 hover:bg-slate-50 bg-transparent"
                }`}
              >
                Builds
              </Button>
              <Button
                variant={selectedCategory === "community" ? "default" : "outline"}
                onClick={() => setSelectedCategory("community")}
                className={`rounded-xl ${
                  selectedCategory === "community"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "border-slate-200 hover:bg-slate-50 bg-transparent"
                }`}
              >
                Community
              </Button>
              <Button
                variant={selectedCategory === "server" ? "default" : "outline"}
                onClick={() => setSelectedCategory("server")}
                className={`rounded-xl ${
                  selectedCategory === "server"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "border-slate-200 hover:bg-slate-50 bg-transparent"
                }`}
              >
                Servers
              </Button>
            </div>

            {/* Media Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMedia.map((item) => (
                <Card
                  key={item.id}
                  className="border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  onClick={() => setSelectedMedia(item)}
                >
                  <div className="relative">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <div className="text-lg">{getTypeIcon(item.type)}</div>
                    </div>
                    {item.featured && (
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 text-xs">Featured</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-3">
                    <h3 className="text-sm font-semibold text-slate-800 mb-1 line-clamp-1">{item.title}</h3>
                    <p className="text-slate-600 text-xs mb-2 line-clamp-2">{item.description}</p>
                    <div className="flex justify-between items-center text-xs text-slate-500">
                      <span className="truncate">{item.author}</span>
                      <div className="flex space-x-2">
                        <span>❤️ {item.likes}</span>
                        <span>👁️ {item.views}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Media Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto border-0 shadow-2xl bg-white">
              <div className="relative">
                <img
                  src={selectedMedia.thumbnail || "/placeholder.svg"}
                  alt={selectedMedia.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <Button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 p-0"
                >
                  ✕
                </Button>
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <Badge className={getCategoryColor(selectedMedia.category)}>{selectedMedia.category}</Badge>
                  {selectedMedia.featured && (
                    <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Featured</Badge>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">{selectedMedia.title}</h2>
                    {selectedMedia.eventName && (
                      <p className="text-blue-600 font-medium mb-2">From: {selectedMedia.eventName}</p>
                    )}
                    <p className="text-slate-600">{selectedMedia.description}</p>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                    <div className="space-y-1">
                      <p className="text-sm text-slate-600">
                        Created by: <span className="font-medium">{selectedMedia.author}</span>
                      </p>
                      <p className="text-sm text-slate-500">
                        Published: {new Date(selectedMedia.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex space-x-6 text-slate-600">
                      <div className="text-center">
                        <div className="text-lg font-bold">❤️ {selectedMedia.likes}</div>
                        <div className="text-xs">Likes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold">👁️ {selectedMedia.views}</div>
                        <div className="text-xs">Views</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
