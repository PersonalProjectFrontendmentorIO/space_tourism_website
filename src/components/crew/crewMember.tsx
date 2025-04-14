"use client";

import { useEffect, useState } from "react";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "../ui/carousel";
import { crew } from "@/lib/crew";
import Image from "next/image";

const CrewMember = () => {
	const [apiText, setApiText] = useState<CarouselApi>();
	const [apiImage, setApiImage] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!apiText || !apiImage) return;

		setCurrent(apiText.selectedScrollSnap());

		const onSelect = () => {
			const index = apiText.selectedScrollSnap();
			setCurrent(index);
			apiImage.scrollTo(index);
		};

		apiText.on("select", onSelect);
	}, [apiText, apiImage]);

	return (
		<div className="pt-[88px] md:pt-space-preset-1200 xl:pt-[88px]">
			<div className="flex flex-col space-y-8 xl:min-h-screen xl:justify-center xl:items-center">
				<div className="w-full my-6 px-10 xl:items-start xl:max-w-screen-xl">
					<div className="flex space-x-6 items-center font-barlow-condensed text-base md:text-xl xl:text-[28px] uppercase tracking-space-wider justify-center xl:justify-start">
						<h1 className="font-bold opacity-25">02</h1>
						<h1>MEET YOUR CREW</h1>
					</div>
				</div>

				{/* Main Content */}
				<div className="flex flex-col xl:flex-row xl:items-end xl:justify-center space-y-6 xl:space-y-0 xl:space-x-20 mx-6 md:mx-10 xl:mx-40 xl:max-w-screen-xl">
					{/* Left Side - Text + Dots */}
					<div className="flex flex-col items-center text-center xl:items-start xl:text-left space-y-6 xl:space-y-12 xl:max-w-xl">
						{/* Text Carousel */}
						<Carousel
							setApi={setApiText}
							opts={{ loop: true }}
							className="w-full max-w-3xl my-10"
						>
							<CarouselContent>
								{crew.map((member, index) => (
									<CarouselItem key={index}>
										<div className="flex flex-col text-center space-y-6 md:mx-24 xl:mx-0 xl:items-start xl:text-left">
											<div className="font-bellefair space-y-2 uppercase">
												<h2 className="text-lg opacity-50 md:text-2xl xl:text-[32px]">
													{member.crewRole}
												</h2>
												<h1 className="text-2xl md:text-[40px] xl:text-[56px]">
													{member.crewName}
												</h1>
											</div>
											<p className="font-barlow text-[15px] md:text-base xl:text-lg leading-space-preset-9 text-space-blue-300">
												{member.crewDescription}
											</p>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>

						{/* Dot Navigation */}
						<div className="flex justify-center xl:justify-start space-x-4 w-full">
							{crew.map((_, dotIndex) => (
								<button
									key={dotIndex}
									onClick={() => {
										apiText?.scrollTo(dotIndex);
										apiImage?.scrollTo(dotIndex);
									}}
									className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
										current === dotIndex ? "bg-white" : "bg-gray-500"
									}`}
								/>
							))}
						</div>
					</div>

					{/* Right Side - Image Carousel */}
					<div className="flex justify-center xl:justify-end w-full">
						<Carousel
							setApi={setApiImage}
							opts={{ loop: true }}
							className="w-full max-w-3xl md:w-[447px] md:h-[527px] xl:w-[540px] xl:h-[676px]"
						>
							<CarouselContent>
								{crew.map((member, index) => (
									<CarouselItem key={index}>
										<div className="flex justify-center mt-4 xl:mt-0">
											<Image
												src={member.crewImage}
												alt={member.crewName}
												width={272}
												height={340}
												className="object-contain md:w-[447px] md:h-[527px] xl:w-[540px] xl:h-[676px]"
											/>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CrewMember;
