import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="py-4 md:py-6 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <Link href="/" className="w-[120px] md:w-[130px] lg:w-[150px]">
            <Image 
              src="/images/logos/logo.svg" 
              alt="Gao Hat Logo" 
              width={150} 
              height={80}
              className="font-mona-sans font-[400] text-[16px] md:text-[18px] lg:text-[20px] leading-[18px] md:leading-[20px] lg:leading-[22px] w-full h-auto"
            />
          </Link>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 lg:gap-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 text-[14px] md:text-[16px] lg:text-[18px]">Home</Link>
            <Link href="/thong-tin" className="text-gray-700 hover:text-green-600 text-[14px] md:text-[16px] lg:text-[18px]">Thông tin</Link>
            <Link href="/lien-he" className="text-gray-700 hover:text-green-600 text-[14px] md:text-[16px] lg:text-[18px]">Liên hệ</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header