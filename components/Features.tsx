import { Dancing_Script } from "next/font/google";
import Image from "next/image";

const dancingScript = Dancing_Script({ subsets: ["vietnamese"] });

const features = [
  {
    title: "Gạo thiên nhiên",
    description:
      "Handicraft items are made by the craftsman's skilled hands and imaginative thinking.",
    icon: "/icons/natural-rice.svg",
  },
  {
    title: "Giao hàng tận tay",
    description:
      "Handicraft items are made by the craftsman's skilled hands and imaginative thinking.",
    icon: "/icons/delivery.svg",
  },
  {
    title: "Giao hàng tận tay",
    description:
      "Handicraft items are made by the craftsman's skilled hands and imaginative thinking.",
    icon: "/icons/delivery.svg",
  },
  {
    title: "Giao hàng tận tay",
    description:
      "Handicraft items are made by the craftsman's skilled hands and imaginative thinking.",
    icon: "/icons/delivery.svg",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-dancing text-green-600 mb-4 ${dancingScript.className}`}
          >
            Cơm ngon đến từ hạt gạo
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hệ thống phân phối Gạo bằng ứng dụng công nghệ, mang đến cho khách
            hàng sản phẩm an toàn, chất lượng cao, với dịch vụ nhanh chóng và
            giá cả cạnh tranh
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-green-600 rounded-lg p-6 text-center text-white relative"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-green-600 rounded-t-[100px] pt-32 pb-16 px-8 relative">
          {/* Rice Image */}
          <Image
            src="/images/products/rice-bag.png"
            alt="Rice products"
            width={400}
            height={300}
            priority
          />
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-24"></div>

          {/* Stats Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-white max-w-4xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold mb-6">Mục tiêu</h3>
              <p className="mb-4">
                Phát triển mạng lưới giao hàng và chiếm lĩnh thị trường
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">★</span>
                  Điểm giao hàng khắp cả nước
                </li>
                <li className="flex items-center">
                  <span className="mr-2">★</span>
                  Đội ngũ bán hàng chuyên nghiệp
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">Gặt hái</h3>
              <p className="mb-4">Điểm giao trên khắp TP HCM</p>
              <div className="text-6xl font-bold">
                3%
                <span className="text-xl font-normal ml-2">Market size</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
