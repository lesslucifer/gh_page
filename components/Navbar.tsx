import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href="mailto:cskh.gaohat@gmail.com"
              className="flex items-center"
            >
              <span className="mr-2">✉️</span>
              cskh.gaohat@gmail.com
            </a>
            <a href="tel:+84988745690" className="flex items-center">
              <span className="mr-2">📞</span>
              (+84) 98 874 56 90
            </a>
          </div>
          <div className="flex space-x-4">
            <Link href="#">
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
