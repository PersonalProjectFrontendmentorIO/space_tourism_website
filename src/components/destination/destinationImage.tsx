import Image from "next/image";

interface DestinationImageProps {
	planetName: string;
	planetImage: string;
}

const DestinationImage = ({
	planetName,
	planetImage,
}: DestinationImageProps) => {
	return (
		<div className="mb-8">
			<Image
				src={planetImage}
				alt={`Image of ${planetName}`}
				width={150}
				height={150}
				className="md:w-[300px] md:h-[300px] xl:w-[480px] xl:h-[450px]"
			/>
		</div>
	);
};

export default DestinationImage;
