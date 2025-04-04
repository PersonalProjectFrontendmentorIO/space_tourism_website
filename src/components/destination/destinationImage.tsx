"use client";

import { DESTINATION_IMAGES } from "@/lib/destinationImages";
import { getCurrentDestination } from "@/lib/subnavItems";
import Image from "next/image";
import { usePathname } from "next/navigation";

const DestinationImage = () => {
	const pathName = usePathname();
	const destination = getCurrentDestination(pathName);
  const imageSrc = DESTINATION_IMAGES[destination];

	return (
		<div className="mb-8">
			<Image src={imageSrc} alt={`Image of ${destination}`} width={480} height={480} className="w-[150px] h-[150px]" />
		</div>
	);
};

export default DestinationImage;
