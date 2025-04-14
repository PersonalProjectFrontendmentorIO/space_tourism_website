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
		<div className="pt-[88px] md:pt-space-preset-1200 xl:pt-[160px]">
			<div className="flex flex-col">
				<div className="flex flex-col justify-center items-center space-y-6 m-6">
					{/* Title */}
					<div className="flex space-x-6 justify-center items-center font-barlow-condensed text-base uppercase w-full tracking-space-wider">
						<h1 className="font-bold opacity-25">02</h1>
						<h1>MEET YOUR CREW</h1>
					</div>

					{/* Text Carousel */}
					<Carousel
						setApi={setApiText}
						opts={{ loop: true }}
						className="w-full max-w-3xl pt-10"
					>
						<CarouselContent>
							{crew.map((member, index) => (
								<CarouselItem key={index}>
									<div className="flex flex-col text-center md:text-left space-y-6">
										<div className="font-bellefair space-y-2 uppercase">
											<h2 className="text-lg opacity-50">{member.crewRole}</h2>
											<h1 className="text-2xl">{member.crewName}</h1>
										</div>
										<p className="font-barlow text-[15px] leading-space-preset-9 text-space-blue-300">
											{member.crewDescription}
										</p>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>

					{/* Dot Navigation (FIXED) */}
					<div className="flex justify-center space-x-4 w-full">
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

					{/* Image Carousel */}
					<Carousel
						setApi={setApiImage}
						opts={{ loop: true }}
						className="w-full max-w-3xl"
					>
						<CarouselContent>
							{crew.map((member, index) => (
								<CarouselItem key={index}>
									<div className="flex justify-center mt-4">
										<Image
											src={member.crewImage}
											alt={member.crewName}
											width={272}
											height={340}
											className="object-contain max-h-[400px]"
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default CrewMember;
