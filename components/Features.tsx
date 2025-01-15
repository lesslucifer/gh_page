import Image from "next/image";
import { greatVibes } from "@/app/fonts";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Gạo thiên nhiên",
    description:
      "Handicraft items are made by the craftsman's skilled hands and imaginative thinking.",
    icon: "/icons/like-heart.svg",
  },
  {
    title: "Giao hàng tận tay",
    description:
      "Handicraft items are made by the craftsman's skilled hands and imaginative thinking.",
    icon: "/icons/like-heart.svg",
  },
  {
    title: "Giao hàng tận tay",
    description:
      "Handicraft items are made by the craftsman's skilled hands and imaginative thinking.",
    icon: "/icons/like-heart.svg",
  },
  {
    title: "Giao hàng tận tay",
    description:
      "Handicraft items are made by the craftsman's skilled hands and imaginative thinking.",
    icon: "/icons/like-heart.svg",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none mt-[350px] md:mt-[230px]">
        <Image
          src="/images/backgrounds/brown-line.png"
          alt="Decorative background"
          width={1920}
          height={1080}
          className="object-cover"
        />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-[72px] font-normal leading-[72px] text-center text-green-600 mb-4 ${greatVibes.variable} font-great-vibes`}
          >
            Cơm ngon đến từ hạt gạo
          </h2>
          <div className="w-[40px] h-[2px] bg-green-600 mx-auto mb-4"></div>
          <p className="text-base leading-[20.8px] mb-6 md:mb-8 font-light text-gray-custom">
            Hệ thống phân phối Gạo bằng ứng dụng công nghệ, mang đến cho khách
            hàng sản phẩm an toàn,
            <br /> chất lượng cao, với dịch vụ nhanh chóng và giá cả cạnh tranh
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col  md:flex-row md:flex-wrap lg:flex-row gap-6 mt-20 mb-[90px] justify-center items-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="pt-32 pb-16 px-8 relative bg-[url(/images/backgrounds/green-background.png)] bg-cover bg-center bg-no-repeat lg:h-[600px]">
        {/* Rice Image */}
        <Image
          className="absolute left-1/2 transform -translate-x-1/2 top-[80px] lg:top-[-20px]"
          src="/images/backgrounds/rice-bag.png"
          alt="Rice products"
          width={1040}
          height={400}
          priority
        />

        {/* Stats Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-white max-w-4xl mx-auto mt-[270px] px-4 md:px-0">
          <div>
            <div className="w-full md:w-[335px] h-[8px] bg-white mb-4"></div>

            <h3 className="text-[28px] md:text-[36px] font-semibold leading-tight md:leading-[36px] mb-4">
              Mục tiêu
            </h3>
            <div className="text-sm leading-[20.8px] mb-6 md:mb-8 font-light">
              <p className="mb-4">
                Phát triển mạng lưới giao hàng và chiếm lĩnh thị trường
              </p>
              <ul className="space-y-2 pl-4">
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
          </div>

          <div>
            <div className="w-full md:w-[335px] h-[8px] bg-white mb-4"></div>

            <h3 className="text-[28px] md:text-[36px] font-semibold leading-tight md:leading-[36px] mb-4">
              Gặt hái
            </h3>
            <p className="text-sm leading-[20.8px] mb-6 md:mb-8 font-light">
              Điểm giao trên khắp TP HCM
            </p>
            <div className="text-4xl md:text-6xl font-bold">
              3%
              <span className="text-sm leading-[20.8px] mb-6 md:mb-8 font-light ml-2">
                Market size
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
