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
                <img src="/images/footer.png" alt="IWTBF" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif text-2xl">国际武术太极球联合会</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              传承太极文化精髓，推广太极球运动。以球演道，动静圆融，在旋转中感悟生命的韵律与和谐。
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
                <Link href="/videos" className="text-gray-300 hover:text-accent transition-colors">
                  视频教程
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-accent transition-colors">
                  活动公告
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