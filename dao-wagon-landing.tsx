"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Car, Route, ExternalLink, Instagram, Globe, ChevronDown, Compass, Heart, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Component() {
  const [openSeason, setOpenSeason] = useState<number | null>(null)

  const toggleSeason = (season: number) => {
    setOpenSeason(openSeason === season ? null : season)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-center">
          <Car className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">DAOワゴン</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
            プロジェクトについて
          </Link>
          <Link href="#season5" className="text-sm font-medium hover:text-orange-500 transition-colors">
            シーズン5
          </Link>
          <Link href="#support" className="text-sm font-medium hover:text-blue-600 transition-colors">
            サポート
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-transparent to-orange-100/50 pointer-events-none" />
          <div className="container px-4 md:px-6 mx-auto relative">
            <div className="flex flex-col items-center space-y-6 text-center">
              <Badge className="bg-gradient-to-r from-blue-600 to-orange-500 text-white border-0 px-4 py-1 text-sm">
                新地方DAO発のプロジェクト
              </Badge>
              
              <div className="w-full max-w-lg">
                <Image
                  src="/images/dao-wagon-2026.png"
                  alt="DAOワゴン - 車旅イラスト"
                  width={600}
                  height={600}
                  className="mx-auto drop-shadow-2xl"
                  priority
                />
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
                  DAOワゴン
                </span>
              </h1>
              
              <p className="mx-auto max-w-[600px] text-gray-700 text-lg md:text-xl leading-relaxed">
                みんなで相乗りして日本各地を巡る
                <br />
                <span className="font-semibold text-blue-600">新しいコミュニティ体験プロジェクト</span>
              </p>

              <div className="flex gap-4 mt-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg" asChild>
                  <Link href="#season5">
                    <Sparkles className="mr-2 h-5 w-5" />
                    シーズン5を見る
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
                  プロジェクトについて
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-600 md:text-lg">
                  DAOワゴンは、自家用車にみんなで相乗りをして各地方を巡る革新的なコミュニティプロジェクトです。
                  新地方DAOから生まれ、地域間の交流と新しい体験を創造します。
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3 w-full max-w-5xl">
                <Card className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all group">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Compass className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">地域探索</CardTitle>
                    <CardDescription className="text-base">日本各地の魅力的な場所を仲間と一緒に発見</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">コミュニティ</CardTitle>
                    <CardDescription className="text-base">新しい仲間との出会いと深いつながりの構築</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-2 border-red-100 hover:border-red-300 hover:shadow-lg transition-all group">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Route className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">冒険体験</CardTitle>
                    <CardDescription className="text-base">計画されたルートで安全で楽しい旅の体験</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Season 5 Feature Section */}
        <section id="season5" className="w-full py-12 md:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-400 rounded-full blur-3xl" />
          </div>
          <div className="container px-4 md:px-6 mx-auto relative">
            <div className="flex flex-col items-center space-y-8">
              <Badge className="bg-orange-500 text-white border-0 px-6 py-2 text-lg font-bold">
                NEW
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center">
                シーズン5：鳥取出発〜四国・九州縦断
                <br />
                <span className="text-orange-400">2,200kmの旅</span>
              </h2>
              <p className="mx-auto max-w-[800px] text-blue-100 md:text-lg text-center leading-relaxed">
                DAOワゴン史上最大スケール！鳥取を出発し、香川、高知、愛媛からフェリーで九州へ。
                宮崎、鹿児島（甑島）、熊本、福岡を経て山口から帰還する、
                <span className="text-orange-300 font-semibold">総移動距離2,200km、総運転時間32時間</span>の超大作ルートです。
              </p>

              {/* Route Map */}
              <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/season5-route-map.png"
                  alt="シーズン5 四国・九州縦断ルートマップ"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>

              {/* Route Badges */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl">
                {["鳥取", "兵庫", "香川", "高知", "愛媛", "大分", "宮崎", "鹿児島", "熊本", "福岡", "山口"].map((location, index) => (
                  <div key={location} className="flex items-center gap-1 md:gap-2">
                    <Badge className="bg-white/20 text-white border border-white/30 px-3 py-1 text-sm md:text-base font-medium backdrop-blur-sm">
                      {location}
                    </Badge>
                    {index < 10 && <span className="text-orange-400 font-bold text-lg">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Budou-chan Feature Section */}
        <section className="w-full py-12 md:py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8">
              <div className="text-center space-y-4">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-1">
                  Special Guest
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
                  シーズン5の仲間
                  <br />
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    多才なメディア人「ブドウちゃん」が参戦！
                  </span>
                </h2>
              </div>

              <Card className="w-full max-w-3xl border-4 border-orange-200 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-orange-300">
                      <Image
                        src="/images/budouchan-profile.png"
                        alt="ブドウちゃん"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">ブドウちゃん</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        月間最大<span className="font-bold text-orange-600">240万PV超</span>の地域メディア「姫路の種」運営編集長、
                        元お笑い芸人、路上1万人似顔絵師、
                        Web3 IPプロジェクト「グルコースマン」ファウンダー。
                      </p>
                      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <Button variant="outline" size="sm" className="border-pink-300 text-pink-600 hover:bg-pink-50" asChild>
                          <Link href="https://www.instagram.com/himejinotane" target="_blank" rel="noopener noreferrer">
                            <Instagram className="mr-1 h-4 w-4" />
                            @himejinotane
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="border-blue-300 text-blue-600 hover:bg-blue-50" asChild>
                          <Link href="https://x.com/budou_chan" target="_blank" rel="noopener noreferrer">
                            <svg className="mr-1 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            @budou_chan
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50" asChild>
                          <Link href="https://www.tiktok.com/@budouchanbudouchan" target="_blank" rel="noopener noreferrer">
                            <svg className="mr-1 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                            </svg>
                            TikTok
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="border-green-300 text-green-600 hover:bg-green-50" asChild>
                          <Link href="https://budou-chan.jp" target="_blank" rel="noopener noreferrer">
                            <Globe className="mr-1 h-4 w-4" />
                            budou-chan.jp
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Past Seasons Accordion */}
        <section id="routes" className="w-full py-12 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                  過去のルートアーカイブ
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600">
                  これまでのDAOワゴンの軌跡をご覧ください
                </p>
              </div>

              <div className="w-full max-w-3xl space-y-4">
                {/* Season 1 */}
                <Card className="border-2 border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleSeason(1)}
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">シーズン1</Badge>
                      <span className="font-semibold text-gray-900">四国周遊ルート</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openSeason === 1 ? 'rotate-180' : ''}`} />
                  </button>
                  {openSeason === 1 && (
                    <CardContent className="border-t bg-white">
                      <p className="text-gray-600">DAOワゴンプロジェクトの最初のシーズンとして、四国地域の各地を周遊しました。</p>
                    </CardContent>
                  )}
                </Card>

                {/* Season 2 */}
                <Card className="border-2 border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleSeason(2)}
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">シーズン2</Badge>
                      <span className="font-semibold text-gray-900">関西・北陸周遊ルート</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openSeason === 2 ? 'rotate-180' : ''}`} />
                  </button>
                  {openSeason === 2 && (
                    <CardContent className="border-t bg-white space-y-3">
                      <div>
                        <p className="font-medium text-sm text-gray-700">関西周遊ルート：</p>
                        <p className="text-gray-600 text-sm">新大阪 → 鳥取市佐治町 → 岡山 → 姫路 → 新大阪</p>
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gray-700">北陸・関西ルート：</p>
                        <p className="text-gray-600 text-sm">富山県舟橋村 → 姫路 → 岡山 → 鳥取市佐治町</p>
                      </div>
                    </CardContent>
                  )}
                </Card>

                {/* Season 3 */}
                <Card className="border-2 border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleSeason(3)}
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">シーズン3</Badge>
                      <span className="font-semibold text-gray-900">鳥取〜東京ルート</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openSeason === 3 ? 'rotate-180' : ''}`} />
                  </button>
                  {openSeason === 3 && (
                    <CardContent className="border-t bg-white">
                      <div className="flex flex-wrap gap-2">
                        {["鳥取市佐治町", "和歌山県白浜町", "長野県上田市", "長野県松本市", "東京"].map((location, index) => (
                          <div key={location} className="flex items-center gap-1">
                            <Badge variant="outline" className="text-gray-600 border-gray-300">{location}</Badge>
                            {index < 4 && <span className="text-gray-400">→</span>}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>

                {/* Season 4 */}
                <Card className="border-2 border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleSeason(4)}
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">シーズン4</Badge>
                      <span className="font-semibold text-gray-900">東京〜鳥取佐治ルート</span>
                      <span className="text-sm text-gray-500">11月12日〜15日</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openSeason === 4 ? 'rotate-180' : ''}`} />
                  </button>
                  {openSeason === 4 && (
                    <CardContent className="border-t bg-white">
                      <div className="flex flex-wrap gap-2">
                        {["東京", "愛知県小牧市", "滋賀県東近江市", "和歌山県橋本市", "兵庫県姫路市", "香川県琴平町", "香川県高松市", "岡山県岡山市", "岡山県西粟倉村", "鳥取市佐治町"].map((location, index) => (
                          <div key={location} className="flex items-center gap-1">
                            <Badge variant="outline" className="text-gray-600 border-gray-300">{location}</Badge>
                            {index < 9 && <span className="text-gray-400">→</span>}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Participants Section */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                  参加者紹介
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600">
                  シーズン5を一緒に走るメンバーをご紹介します
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl">
                {/* Suzuki Takumi */}
                <Card className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <Image
                        src="/images/suzuki-takumi-profile.jpg"
                        alt="鈴木匠"
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-blue-200"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">鈴木匠</h3>
                        <p className="text-blue-600 font-medium text-sm">鳥取佐治地域おこし協力隊</p>
                      </div>
                      <p className="text-gray-600 text-sm">
                        DAOワゴンプロジェクトの発起人。鳥取市佐治町を拠点に地域活性化に取り組む。
                      </p>
                      <Button variant="outline" size="sm" className="border-blue-300 text-blue-600 hover:bg-blue-50" asChild>
                        <Link href="https://x.com/Okirakukai" target="_blank" rel="noopener noreferrer">
                          <svg className="mr-1 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                          @Okirakukai
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Budou-chan */}
                <Card className="border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <Image
                        src="/images/budouchan-profile.png"
                        alt="ブドウちゃん"
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-orange-200"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">ブドウちゃん</h3>
                        <p className="text-orange-600 font-medium text-sm">姫路の種 運営編集長</p>
                      </div>
                      <p className="text-gray-600 text-sm">
                        月間最大240万PV超の地域メディア運営。元お笑い芸人、Web3プロジェクト「グルコースマン」ファウンダー。
                      </p>
                      <Button variant="outline" size="sm" className="border-orange-300 text-orange-600 hover:bg-orange-50" asChild>
                        <Link href="https://x.com/budou_chan" target="_blank" rel="noopener noreferrer">
                          <svg className="mr-1 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                          @budou_chan
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="w-full py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                  サポート・協力
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600">
                  DAOワゴンプロジェクトは多くの方々と地域のご協力により実現しています。
                </p>
              </div>

              {/* Main Supporter */}
              <Card className="w-full max-w-xl border-2 border-green-200 shadow-lg">
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
                  <Button variant="outline" className="border-green-300 text-green-600 hover:bg-green-50" asChild>
                    <Link href="https://alyawmu.com/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      公式サイトを見る
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Cooperation Partners */}
              <div className="w-full max-w-4xl">
                <h3 className="text-xl font-bold text-center mb-6 text-gray-900">協力自治体・団体</h3>
                <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                  {[
                    { name: "鳥取市佐治町", desc: "星の最もきれいな場所", url: "https://www.city.tottori.lg.jp/www/index.html" },
                    { name: "香川県琴平町", desc: "こんぴらさんの門前町", url: "https://www.town.kotohira.kagawa.jp/" },
                    { name: "富山県舟橋村", desc: "日本一小さな村", url: "https://www.vill.funahashi.toyama.jp/" },
                    { name: "和歌山県白浜町", desc: "南紀白浜の観光地", url: "https://www.town.shirahama.wakayama.jp/" },
                    { name: "和歌山県橋本市", desc: "高野山の玄関口", url: "https://www.city.hashimoto.wakayama.jp/" },
                    { name: "山梨県山中湖村", desc: "富士山麓の山中湖畔", url: "https://www.vill.yamanakako.lg.jp/" },
                    { name: "広島県神石高原町", desc: "中国山地の自然豊かな町", url: "https://www.town.jinsekikogen.lg.jp/" },
                    { name: "地域おこし協力隊", desc: "地域活性化の推進", url: null },
                  ].map((partner) => (
                    <Card key={partner.name} className="text-center border hover:border-blue-200 hover:shadow transition-all">
                      <CardHeader className="p-4">
                        <CardTitle className="text-sm font-semibold">
                          {partner.url ? (
                            <Link href={partner.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                              {partner.name}
                            </Link>
                          ) : (
                            partner.name
                          )}
                        </CardTitle>
                        <CardDescription className="text-xs">{partner.desc}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Car className="h-6 w-6 text-blue-400" />
              <span className="font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">DAOワゴン</span>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; 2026 DAOワゴン - 新地方DAO. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">
                プロジェクトについて
              </Link>
              <Link href="#season5" className="text-gray-400 hover:text-white text-sm transition-colors">
                シーズン5
              </Link>
              <Link href="#support" className="text-gray-400 hover:text-white text-sm transition-colors">
                サポート
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
