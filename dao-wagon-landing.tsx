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
                  DAOワゴンプロジェクトの現在実施中のルートと、未来に向けた構想ルートをご紹介します。
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 w-full max-w-6xl">
                {/* Route 1 - Season 1 */}
                <Card className="border-2 border-gray-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                        シーズン1（過去）
                      </Badge>
                      四国周遊ルート
                    </CardTitle>
                    <CardDescription>四国地域を周遊するプロジェクトの最初のシーズン</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">四国各地</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-4">
                        DAOワゴンプロジェクトの最初のシーズンとして、四国地域の各地を周遊しました。
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Route 2 - Season 2 */}
                <Card className="border-2 border-gray-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                        シーズン2（過去）
                      </Badge>
                      関西・北陸周遊ルート
                    </CardTitle>
                    <CardDescription>関西・北陸エリアの2つのルート</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="font-medium text-sm">関西周遊ルート：</p>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>新大阪 → 鳥取市佐治町 → 岡山 → 姫路 → 新大阪</span>
                      </div>
                      <p className="font-medium text-sm mt-4">北陸・関西ルート：</p>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>富山県舟橋村 → 姫路 → 岡山 → 鳥取市佐治町</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Season 3 */}
                <Card className="border-2 border-yellow-200 lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        シーズン3（現在実施中）
                      </Badge>
                      鳥取～東京ルート
                    </CardTitle>
                    <CardDescription>鳥取から長野を経由して東京へ至る壮大なルート</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["鳥取市佐治町", "和歌山県白浜町", "長野県上田市", "長野県松本市", "東京"].map(
                        (location, index) => (
                          <div key={location} className="flex items-center gap-1">
                            {index === 0 && <span className="text-yellow-600 font-semibold text-sm">スタート：</span>}
                            <Badge variant="outline" className="text-yellow-600 border-yellow-300">
                              {location}
                            </Badge>
                            {index < 4 && <span className="text-yellow-400">→</span>}
                            {index === 4 && <span className="text-yellow-600 font-semibold text-sm ml-1">ゴール</span>}
                          </div>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Season 4 */}
                <Card className="border-2 border-red-200 lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-red-100 text-red-800">
                        シーズン4（11月12日～15日）
                      </Badge>
                      東京～鳥取佐治ルート
                    </CardTitle>
                    <CardDescription>東京から中部・関西・四国を経由して鳥取佐治へ至る新しいルート</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "東京",
                        "愛知県小牧市",
                        "滋賀県東近江市",
                        "和歌山県橋本市",
                        "兵庫県姫路市",
                        "香川県琴平町",
                        "香川県高松市",
                        "岡山県岡山市",
                        "岡山県西粟倉村",
                        "鳥取市佐治町",
                      ].map((location, index) => (
                        <div key={location} className="flex items-center gap-1">
                          {index === 0 && <span className="text-red-600 font-semibold text-sm">スタート：</span>}
                          <Badge variant="outline" className="text-red-600 border-red-300">
                            {location}
                          </Badge>
                          {index < 9 && <span className="text-red-400">→</span>}
                          {index === 9 && <span className="text-red-600 font-semibold text-sm ml-1">ゴール</span>}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="w-full max-w-4xl border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      将来構想1
                    </Badge>
                    鳥取佐治～九州ルート
                  </CardTitle>
                  <CardDescription>鳥取から九州へ向かう壮大なルート（構想中）</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["鳥取市佐治町", "兵庫県", "岡山県", "広島県", "福岡県", "大分県", "宮崎県"].map(
                      (location, index) => (
                        <div key={location} className="flex items-center gap-1">
                          <Badge variant="outline" className="text-purple-600 border-purple-300">
                            {location}
                          </Badge>
                          {index < 6 && <span className="text-purple-400">→</span>}
                        </div>
                      ),
                    )}
                  </div>
                  <p className="text-gray-600 mt-4 text-center">構想中</p>
                </CardContent>
              </Card>

              {/* Future Route 2 */}
              <Card className="w-full max-w-4xl border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      将来構想2
                    </Badge>
                    東京～新潟～仙台ルート
                  </CardTitle>
                  <CardDescription>東京から新潟・東北エリアを巡るルート（構想中）</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["東京", "山梨県", "長野県", "新潟県", "秋田県", "宮城県仙台市"].map((location, index) => (
                      <div key={location} className="flex items-center gap-1">
                        <Badge variant="outline" className="text-amber-600 border-amber-300">
                          {location}
                        </Badge>
                        {index < 5 && <span className="text-amber-400">→</span>}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 mt-4 text-center">構想中</p>
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
                      <CardTitle className="text-lg">
                        <Link
                          href="https://www.town.shirahama.wakayama.jp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition-colors"
                        >
                          和歌山県白浜町
                        </Link>
                      </CardTitle>
                      <CardDescription>南紀白浜の観光地</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        <Link
                          href="https://www.city.hashimoto.wakayama.jp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition-colors"
                        >
                          和歌山県橋本市
                        </Link>
                      </CardTitle>
                      <CardDescription>高野山の玄関口</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        <Link
                          href="https://www.vill.yamanakako.lg.jp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition-colors"
                        >
                          山梨県山中湖村
                        </Link>
                      </CardTitle>
                      <CardDescription>富士山麓の山中湖畔</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        <Link
                          href="https://www.town.jinsekikogen.lg.jp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition-colors"
                        >
                          広島県神石高原町
                        </Link>
                      </CardTitle>
                      <CardDescription>中国山地の自然豊かな町</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">地域おこし協力隊</CardTitle>
                      <CardDescription>地域活性化の推進</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        <Link
                          href="https://www.city.tottori.lg.jp/www/index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition-colors"
                        >
                          鳥取市佐治町
                        </Link>
                      </CardTitle>
                      <CardDescription>星の最もきれいな場所</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        <Link
                          href="https://www.town.kotohira.kagawa.jp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition-colors"
                        >
                          香川県琴平町
                        </Link>
                      </CardTitle>
                      <CardDescription>こんぴらさんの門前町</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        <Link
                          href="https://www.vill.funahashi.toyama.jp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition-colors"
                        >
                          富山県舟橋村
                        </Link>
                      </CardTitle>
                      <CardDescription>日本一小さな村</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>

              {/* Participants Section */}
              <div className="w-full max-w-4xl">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">参加者紹介</h3>
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-2 hover:border-green-200 transition-colors">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        <Image
                          src="/images/suzuki-takumi-profile.jpg"
                          alt="鈴木匠のプロフィール画像"
                          width={64}
                          height={64}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl">鈴木匠</CardTitle>
                      <CardDescription>鳥取佐治地域おこし協力隊</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 mb-4">鳥取市佐治町で地域活性化に取り組む地域おこし協力隊</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://x.com/Okirakukai" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Twitter
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-green-200 transition-colors">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        <Image
                          src="/images/nishimura-kento-profile.jpg"
                          alt="西村賢人のプロフィール画像"
                          width={64}
                          height={64}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl">西村賢人</CardTitle>
                      <CardDescription>富山県舟橋村地域おこし協力隊</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 mb-4">富山県舟橋村で地域活性化に取り組む地域おこし協力隊</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://x.com/nishiken_san" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Twitter
                        </Link>
                      </Button>
                    </CardContent>
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
