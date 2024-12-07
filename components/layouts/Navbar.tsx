import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white font-[200] text-[12px] md:text-[13px] lg:text-[14px] leading-[13.4px] md:leading-[14.4px] lg:leading-[15.4px] font-mona-sans">
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="mailto:cskh.gaohat@gmail.com"
              className="flex items-center"
            >
              <Image
                src="/icons/at.svg"
                alt="Email"
                width={16}
                height={16}
                className="mr-1 md:mr-2 w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              />
              cskh.gaohat@gmail.com
            </a>
            <a href="tel:+84988745690" className="flex items-center">
              <Image
                src="/icons/phone.svg"
                alt="Phone"
                width={16}
                height={16}
                className="mr-1 md:mr-2 w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              />
              (+84) 98 874 56 90
            </a>
          </div>
          <div className="flex gap-3 md:gap-4 items-center">
            <Link href="#">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/youtube.svg"
                alt="YouTube"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
