import PlanetDestination from "@/components/destination/planetDestination";
import { DestinationDetails } from "@/lib/destinationDetail";

const PlanetDescription = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;

	const destination = DestinationDetails.find(
		(item) => item.id.toLowerCase() === slug.toLowerCase(),
	);

	if (!destination) {
		return <div>Destination not found</div>;
	}

	return (
		<div className="bg-[url('../assets/images/Destination/DesktopDestinationBackground.svg')] bg-cover min-h-screen h-full">
			<div className="flex flex-col">
				<PlanetDestination
					planetName={destination.name}
					planetImage={destination.image}
					planetDescription={destination.description}
          planetDistance={destination.distance}
          planetTravelTime={destination.travelTime}
				/>
			</div>
		</div>
	);
};

export default PlanetDescription;
