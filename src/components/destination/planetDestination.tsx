import Subnavbar from "../ui/subnavbar";
import DestinationImage from "./destinationImage";

interface PlanetDestinationProps {
	planetName: string;
}

const PlanetDestination = ({ planetName }: PlanetDestinationProps) => {
	return (
		<div className="flex flex-col pt-[88px] m-6 items-center space-y-6">
			<div className="flex space-x-6 uppercase font-barlow-condensed tracking-space-wider text-base">
				<h1 className="font-bold opacity-25">01</h1>
				<h1>PICK YOUR DESTINATION</h1>
			</div>
			<DestinationImage />
			<Subnavbar />
			<h1>Component {planetName}</h1>
		</div>
	);
};

export default PlanetDestination;
