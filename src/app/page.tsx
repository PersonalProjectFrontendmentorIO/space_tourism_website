import ExploreButton from "@/components/ui/exploreButton";

export default function Home() {
	return (
		<div className="bg-[url('../assets/images/Home/MobileHomeBackground.svg')] md:bg-[url('../assets/images/Home/TabletHomeBackground.svg')] xl:bg-[url('../assets/images/Home/DesktopHomeBackground.svg')] bg-cover min-h-screen h-full">
			<main className="flex flex-col pt-[88px] md:pt-space-preset-1200 xl:pt-[136px] justify-center items-center h-full text-center">
				<div className="xl:my-space-preset-1600 xl:mx-[165px] xl:w-full xl:flex xl:justify-center">
					<div className="xl:flex xl:flex-row xl:justify-between m-space-preset-300 md:my-space-preset-1600 md:mx-space-preset-500 xl:pt-72 xl:my-0 xl:px-[165px] h-full xl:w-full">
						<div className="md:mx-[88px] xl:mx-0 xl:text-left xl:max-w-[450px]">
							<div className="space-y-space-preset-300">
								<h1 className="font-barlow-condensed text-space-preset-8-size md:text-space-preset-5-size tracking-[15%] md:tracking-space-wider uppercase">
									SO, YOU WANT TO TRAVEL TO
								</h1>
								<h1 className="font-bellefair text-[80px] md:text-space-preset-1-size tracking-normal">
									SPACE
								</h1>
								<div className="font-barlow text-space-preset-8-size xl:text-space-preset-9-size tracking-normal leading-space-preset-9">
									Let’s face it; if you want to go to space, you might as well
									genuinely go to outer space and not hover kind of on the edge
									of it. Well sit back, and relax because we’ll give you a truly
									out of this world experience!
								</div>
							</div>
						</div>
						<div className="my-[119px]">
							<ExploreButton />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
