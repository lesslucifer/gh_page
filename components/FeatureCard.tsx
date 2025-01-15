import Image from "next/image";
import { Card } from "@/components/ui/card"

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="bg-brown-1 rounded-lg p-6 text-center text-white relative w-[270px] h-[278px]">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
        <Image src={icon} alt={title} width={32} height={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </Card>
  );
};

export default FeatureCard;
