import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/background.png"
          alt="Rice background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">
            Gạo chuẩn cơm ngon Việt Nam
          </h1>
          <p className="text-xl mb-8">
            Gạo Hạt được sản xuất từ các giống lúa riêng, giống đặc sản và thuần chủng.
            Có nguồn gốc từ vùng nguyên liệu canh tác theo quy trình bền vững SRP.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero 