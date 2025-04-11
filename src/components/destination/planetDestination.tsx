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
		<div className="flex flex-col pt-[88px] m-6 items-center space-y-8">
			<div className="flex flex-col items-center space-y-6 uppercase font-barlow-condensed tracking-space-wider text-base">
				<div className="flex space-x-6">
					<h1 className="font-bold opacity-25">01</h1>
					<h1>PICK YOUR DESTINATION</h1>
				</div>
				<DestinationImage planetImage={planetImage} planetName={planetName} />
			</div>
			<div className="flex flex-col space-y-6 items-center">
				<Subnavbar />
				<div className="flex flex-col items-center text-center">
					<h1 className="font-bellefair text-[56px] uppercase">{planetName}</h1>
					<p className="font-barlow text-[15px] leading-space-preset-9 tracking-space-normal text-space-blue-300">
						{planetDescription}
					</p>
				</div>

				<div className="w-full h-[2px] bg-space-white opacity-25" />

				<div className="flex flex-col items-center text-center uppercase space-y-6">
					<div>
						<h3 className="font-barlow-condensed text-sm tracking-space-wide text-space-blue-300">
							AVG. Distance
						</h3>
						<h2 className="font-bellefair text-[28px] tracking-space-normal">{planetDistance}</h2>
          </div>
          <div>
						<h3 className="font-barlow-condensed text-sm tracking-space-wide text-space-blue-300">
							EST. Travel Time
						</h3>
						<h2 className="font-bellefair text-[28px] tracking-space-normal">{planetTravelTime}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlanetDestination;
