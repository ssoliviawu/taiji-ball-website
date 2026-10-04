import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-20">
      {/* 流线型装饰 */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & 简介 */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/footer.png" alt="IWTBF" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif text-2xl">国际武术太极球联合会</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              球转乾坤，循阴阳大道；拳承文脉，守华夏根魂。
            </p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md mt-3">
              国际武术太极球联合会将始终坚守初心，以28式太极球、新编精炼9式太极球为两大核心载体，严守正统、科学、实用三大准则，深耕教学、赛事、文化、数字化传承四大领域，让古老太极球功法褪去神秘面纱，走进大众、走向世界，以武道康养惠及万千民众，以中华文脉助力世界文明健康共生，生生不息，薪火永续。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-accent">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  协会介绍
                </Link>
              </li>
              <li>
                <Link href="/practice" className="text-gray-300 hover:text-accent transition-colors">
                  功法介绍
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-gray-300 hover:text-accent transition-colors">
                  视频中心
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-accent transition-colors">
                  新闻活动
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-300 hover:text-accent transition-colors">
                  加入我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-accent">联系方式</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>地址：北京市昌平区小汤山龙脉</li>
              <li>电话：+86 18410409515 </li>
              <li>邮箱：iwtbf_secretariat@163.com</li>
            </ul>
            <div className="mt-4 flex space-x-3">
              {/* 社交媒体图标 */}
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent/50 transition-colors cursor-pointer">
                <span className="text-xs">微</span>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent/50 transition-colors cursor-pointer">
                <span className="text-xs">视</span>
              </div>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} 国际武术太极球联合会 版权所有</p>
          <p className="mt-1 text-xs text-gray-500">以球演道 · 动静圆融</p>
        </div>
      </div>
    </footer>
  )
}