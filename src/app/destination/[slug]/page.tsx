import PlanetDestination from "@/components/destination/planetDestination";

const PlanetDescription = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;
	return (
		<div className="bg-[url('../assets/images/Destination/DesktopDestinationBackground.svg')] bg-cover min-h-screen h-full">
			<div className="flex flex-col">
				<PlanetDestination planetName={slug} />
			</div>
		</div>
	);
};

export default PlanetDescription;
