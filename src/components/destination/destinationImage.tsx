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
				width={480}
				height={480}
				className="w-[150px] h-[150px]"
			/>
		</div>
	);
};

export default DestinationImage;
