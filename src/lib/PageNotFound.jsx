import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1F2E] to-[#2A2F45] p-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <p className="text-2xl text-[#D48C2E] font-heading">الصفحة غير موجودة</p>
        <p className="text-gray-400">عذراً، الصفحة التي تبحث عنها غير موجودة</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-[#D48C2E] hover:bg-[#B36D25] text-white px-6 py-3 rounded-xl font-semibold transition">
          <Home className="w-5 h-5" />
          العودة للرئيسية
        </Link>
      </div>
    </div>
  )
}
