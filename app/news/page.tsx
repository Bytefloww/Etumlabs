import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface NewsArticle {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: "announcement" | "event" | "update" | "community"
  featured: boolean
  readTime: string
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "New Adventure World Server Now Live!",
    excerpt:
      "Explore our brand new custom adventure world featuring unique quests, hidden treasures, and challenging dungeons.",
    content:
      "We're excited to announce the launch of our newest server: Adventure World! This custom-built world features over 50 unique quests, hidden treasure chambers, challenging dungeons, and epic boss battles. Players can embark on solo adventures or team up with friends to tackle the most difficult challenges. The world includes custom NPCs, unique items, and a progression system that rewards exploration and skill.",
    author: "EtumLabs Team",
    date: "2024-01-12",
    category: "announcement",
    featured: true,
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "Castle Building Competition Results",
    excerpt:
      "Congratulations to all participants in our medieval castle building competition. See the amazing winning builds!",
    content:
      "Our Castle Building Competition has concluded with incredible results! Over 50 participants showcased their architectural skills, creating stunning medieval fortresses. First place goes to CastleBuilder123 with their massive fortress featuring working drawbridge and detailed interior. Second place winner ArchitectPro impressed judges with historical accuracy, while third place BuildMaster99 created an innovative floating castle design.",
    author: "Event Team",
    date: "2024-01-10",
    category: "event",
    featured: true,
    readTime: "2 min read",
  },
  {
    id: 3,
    title: "Platform Update: New Features & Improvements",
    excerpt:
      "Latest platform update brings enhanced user profiles, improved event registration, and better server performance.",
    content:
      "We've rolled out a major platform update with several new features and improvements. User profiles now include achievement badges, detailed statistics, and customizable settings. Event registration has been streamlined with better notifications and calendar integration. Server performance has been optimized for better stability and reduced lag. We've also added new moderation tools and improved the admin dashboard.",
    author: "Development Team",
    date: "2024-01-08",
    category: "update",
    featured: false,
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Community Spotlight: RedstoneWizard",
    excerpt:
      "Meet RedstoneWizard, our featured community member who creates incredible redstone contraptions and helps newcomers.",
    content:
      "This month's community spotlight features RedstoneWizard, a talented builder known for creating complex redstone contraptions and helping new players learn advanced techniques. With over 2 years in our community, RedstoneWizard has won multiple engineering competitions and regularly hosts workshops. Their latest creation, a fully automated sorting system, has amazed players and inspired many to explore redstone engineering.",
    author: "Community Team",
    date: "2024-01-05",
    category: "community",
    featured: false,
    readTime: "3 min read",
  },
  {
    id: 5,
    title: "Upcoming Events: February 2024",
    excerpt:
      "Get ready for an exciting month with PvP tournaments, building competitions, and special community events.",
    content:
      "February is packed with exciting events! We're hosting a Valentine's themed building competition (Feb 10-14), a massive PvP tournament with prizes (Feb 18-20), and our monthly community build project (Feb 25-28). Special events include a speed building challenge, treasure hunt adventure, and collaborative city building project. Registration opens January 20th for all events.",
    author: "Event Coordinators",
    date: "2024-01-03",
    category: "event",
    featured: false,
    readTime: "2 min read",
  },
]

export default function NewsPage() {
  const featuredArticles = newsArticles.filter((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "announcement":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "event":
        return "bg-green-100 text-green-700 border-green-200"
      case "update":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "community":
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
            News & Updates
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay up to date with the latest announcements, event summaries, and community highlights from EtumLabs.
          </p>
        </div>

        {/* Featured Articles */}
        <section className="space-y-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-800">Featured News</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Card
                key={article.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-[1.02]"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Featured</Badge>
                    <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-800 leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-slate-500">
                    <div className="space-y-1">
                      <p>By {article.author}</p>
                      <p>
                        {new Date(article.date).toLocaleDateString()} • {article.readTime}
                      </p>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Regular Articles */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-800">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Card
                key={article.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-[1.02]"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-center mb-3">
                    <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                    <span className="text-xs text-slate-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg text-slate-800 leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <div>
                      <p>By {article.author}</p>
                      <p>{new Date(article.date).toLocaleDateString()}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-200 hover:bg-slate-50 rounded-xl bg-transparent"
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to get the latest news, event announcements, and community updates delivered
                directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl text-slate-800 border-0 focus:ring-2 focus:ring-white/50"
                />
                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl px-6">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
