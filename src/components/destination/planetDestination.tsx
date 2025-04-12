import Subnavbar from "../ui/subnavbar";
import DestinationImage from "./destinationImage";

interface PlanetDestinationProps {
	planetName: string;
	planetDescription: string;
	planetDistance: string;
	planetTravelTime: string;
	planetImage: string;
}

const PlanetDestination = ({
	planetName,
	planetDescription,
	planetDistance,
	planetTravelTime,
	planetImage,
}: PlanetDestinationProps) => {
	return (
		<div className="pt-[88px] md:pt-space-preset-1200 xl:pt-[160px]">
			<div className="flex flex-col xl:items-center xl:grid xl:grid-cols-2 xl:gap-8 m-6 md:m-10 xl:my-12 xl:mx-40 items-center space-y-8 max-w-screen">
				<div className="flex flex-col justify-center items-center md:items-start md:text-left space-y-6 uppercase font-barlow-condensed tracking-space-wider text-base w-full">
					<div className="flex space-x-6 items-center md:text-[20px] xl:text-[28px]">
						<h1 className="font-bold opacity-25">01</h1>
						<h1>PICK YOUR DESTINATION</h1>
					</div>
					<div className="w-full flex justify-center py-7 px-20 md:py-11 md:px-48 xl:px-7 xl:py-28">
						<DestinationImage
							planetImage={planetImage}
							planetName={planetName}
						/>
					</div>
				</div>
				<div className="flex flex-col space-y-6 xl:space-y-10 items-center md:w-[514px] xl:px-7 xl:py-28">
					<Subnavbar />
					<div className="flex flex-col xl:space-y-4 items-center text-center">
						<h1 className="font-bellefair text-[56px] md:text-[80px] xl:text-8xl uppercase">
							{planetName}
						</h1>
						<p className="font-barlow text-[15px] md:text-base xl:text-lg xl:text-left leading-space-preset-9 tracking-space-normal text-space-blue-300">
							{planetDescription}
						</p>
					</div>

					<div className="w-full h-[2px] bg-space-white opacity-25" />

					<div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-6 justify-between items-center text-center uppercase space-y-6 md:space-y-0 w-full">
						<div className="space-y-3">
							<h3 className="font-barlow-condensed text-sm tracking-space-wide text-space-blue-300">
								AVG. Distance
							</h3>
							<h2 className="font-bellefair text-[28px] tracking-space-normal">
								{planetDistance}
							</h2>
						</div>
						<div className="space-y-3">
							<h3 className="font-barlow-condensed text-sm tracking-space-wide text-space-blue-300">
								EST. Travel Time
							</h3>
							<h2 className="font-bellefair text-[28px] tracking-space-normal">
								{planetTravelTime}
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlanetDestination;
