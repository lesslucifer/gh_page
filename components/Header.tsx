import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image 
            src="/images/logos/logo.png" 
            alt="Gao Hat Logo" 
            width={150} 
            height={80}
            priority
          />
        </Link>
        <nav className="space-x-8">
          <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link href="/thong-tin" className="text-gray-700 hover:text-green-600">Thông tin</Link>
          <Link href="/lien-he" className="text-gray-700 hover:text-green-600">Liên hệ</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header 