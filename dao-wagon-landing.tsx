import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Car, Route, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <Car className="h-8 w-8 text-red-500 mr-2" />
          <span className="text-xl font-bold text-gray-900">DAOワゴン</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-red-500 transition-colors">
            プロジェクトについて
          </Link>
          <Link href="#routes" className="text-sm font-medium hover:text-red-500 transition-colors">
            ルート情報
          </Link>
          <Link href="#support" className="text-sm font-medium hover:text-red-500 transition-colors">
            サポート
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <Badge variant="outline" className="text-red-500 border-red-500">
                  新地方DAO発のプロジェクト
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">
                  DAOワゴン
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl">
                  みんなで相乗りして日本各地を巡る
                  <br />
                  新しいコミュニティ体験プロジェクト
                </p>
              </div>

              <div className="w-full max-w-4xl">
                <Image
                  src="/images/dao-wagon-hero.png"
                  alt="DAOワゴン - 日本地図とルート"
                  width={800}
                  height={600}
                  className="mx-auto rounded-lg shadow-2xl"
                  priority
                />
              </div>

              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                  プロジェクト詳細を見る
                </Button>
                <Button size="lg" variant="secondary">
                  過去の実績を確認
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  プロジェクトについて
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                  DAOワゴンは、自家用車にみんなで相乗りをして各地方を巡る革新的なコミュニティプロジェクトです。
                  新地方DAOから生まれ、地域間の交流と新しい体験を創造します。
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 w-full max-w-6xl">
                <Card className="border-2 hover:border-red-200 transition-colors">
                  <CardHeader>
                    <MapPin className="h-8 w-8 text-red-500 mb-2" />
                    <CardTitle>地域探索</CardTitle>
                    <CardDescription>日本各地の魅力的な場所を仲間と一緒に発見</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-2 hover:border-red-200 transition-colors">
                  <CardHeader>
                    <Users className="h-8 w-8 text-red-500 mb-2" />
                    <CardTitle>コミュニティ</CardTitle>
                    <CardDescription>新しい仲間との出会いと深いつながりの構築</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-2 hover:border-red-200 transition-colors">
                  <CardHeader>
                    <Route className="h-8 w-8 text-red-500 mb-2" />
                    <CardTitle>冒険体験</CardTitle>
                    <CardDescription>計画されたルートで安全で楽しい旅の体験</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Routes Section */}
        <section id="routes" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  ルート情報
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                  第2回DAOワゴンは2つのコースが富山県舟橋村で合流する特別なルートです。
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 w-full max-w-6xl">
                {/* Course 1 */}
                <Card className="border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        コース1
                      </Badge>
                      静岡スタートルート
                    </CardTitle>
                    <CardDescription>静岡から始まり、各地を巡って東京まで</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">静岡</span>（スタート）
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">滋賀彦根</span>（乗車地点）
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-red-500" />
                        <span className="font-medium">富山県舟橋村</span>（合流地点）
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">大阪 → 滋賀彦根 → 長野松本 → 長野上田</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">栃木県宇都宮 → 東京あきる野</span>（ゴール）
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Course 2 */}
                <Card className="border-2 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        コース2
                      </Badge>
                      福島スタートルート
                    </CardTitle>
                    <CardDescription>福島から新潟を経由して合流地点へ</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-green-500" />
                        <span className="font-medium">福島浄土平</span>（スタート）
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-green-500" />
                        <span className="font-medium">新潟</span>（経由地）
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-red-500" />
                        <span className="font-medium">富山県舟橋村</span>（合流地点）
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Previous Route */}
              <Card className="w-full max-w-4xl border-2 border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      第1回
                    </Badge>
                    四国瀬戸内一周ルート（完了）
                  </CardTitle>
                  <CardDescription>記念すべき第1回DAOワゴンの成功ルート</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["岡山", "香川", "高知", "今治", "岡山"].map((location, index) => (
                      <div key={location} className="flex items-center gap-1">
                        <Badge variant="outline" className="text-orange-600 border-orange-300">
                          {location}
                        </Badge>
                        {index < 4 && <span className="text-orange-400">→</span>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  サポート・協力
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                  DAOワゴンプロジェクトは多くの方々と地域のご協力により実現しています。
                </p>
              </div>

              {/* Main Supporter */}
              <Card className="w-full max-w-2xl border-2 border-green-200">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/images/alyawmu-logo.png"
                      alt="Alyawmu ロゴ"
                      width={200}
                      height={60}
                      className="h-12 w-auto"
                    />
                  </div>
                  <CardTitle className="text-2xl">あるやうむ</CardTitle>
                  <CardDescription>DAOワゴンプロジェクトの公式サポーター</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">革新的なプロジェクトを支援し、コミュニティの成長を促進</p>
                  <Button variant="outline" asChild>
                    <Link href="https://alyawmu.com/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      公式サイトを見る
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Cooperation Partners */}
              <div className="w-full max-w-4xl">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">協力自治体・団体</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">地域おこし協力隊</CardTitle>
                      <CardDescription>地域活性化の推進</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">鳥取市佐治町</CardTitle>
                      <CardDescription>自然豊かな中山間地域</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">香川県琴平町</CardTitle>
                      <CardDescription>こんぴらさんの門前町</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">富山舟橋村</CardTitle>
                      <CardDescription>日本一小さな村</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-red-500">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  DAOワゴンの旅
                </h2>
                <p className="mx-auto max-w-[600px] text-red-100 md:text-xl">
                  新しい仲間との出会いと地域の魅力発見。 DAOワゴンプロジェクトで実現した特別な体験をご覧ください。
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-500"
                >
                  プロジェクト詳細
                </Button>
                <Button size="lg" variant="secondary" className="bg-white text-red-500 hover:bg-gray-100">
                  過去の実績を見る
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} DAOワゴンプロジェクト. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            利用規約
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            プライバシーポリシー
          </Link>
          <Link href="https://alyawmu.com/" className="text-xs hover:underline underline-offset-4 text-gray-500">
            サポーター
          </Link>
        </nav>
      </footer>
    </div>
  )
}
