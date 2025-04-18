"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "../ui/carousel";
import { technology } from "@/lib/technology";

const SpaceTechnology = () => {
	const [apiText, setApiText] = useState<CarouselApi>();
	const [apiImage, setApiImage] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!apiText || !apiImage) return;

		setCurrent(apiImage.selectedScrollSnap());

		const onSelect = () => {
			const index = apiImage.selectedScrollSnap();
			setCurrent(index);
			apiText.scrollTo(index);
		};

		apiImage.on("select", onSelect);
	}, [apiText, apiImage]);

	return (
		<div className="pt-[88px] md:pt-space-preset-1200 xl:pt-[88px]">
			<div className="flex flex-col space-y-8 xl:min-h-screen xl:justify-center xl:items-center">
				<div className="w-full">
					<div className="flex space-x-8 items-center font-barlow-condensed text-base md:text-xl xl:text-[28px] uppercase tracking-space-wider justify-center xl:justify-start">
						<h1 className="font-bold opacity-25">03</h1>
						<h1>Space Launch 101</h1>
					</div>
				</div>

				<div className="flex flex-col space-y-8">
					<Carousel
						setApi={setApiImage}
						opts={{ loop: true }}
						className="w-full h-[258px] md:h-[400px] xl:h-[500px] overflow-hidden mt-16"
					>
						<CarouselContent>
							{technology.map((tech, index) => (
								<CarouselItem
									key={index}
									className="w-full h-[258px] md:h-[400px] xl:h-[500px]"
								>
									<Image
										src={tech.technologyImage}
										alt={tech.technologyImage}
										width={1000}
										height={600}
										className="w-full h-full object-cover object-[center_bottom]"
										priority
									/>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>

					{/* Dot Navigation */}
					<div className="flex flex-col space-y-10 max-w-[327px] items-center mx-auto">
						<div className="flex justify-center xl:justify-start font-bellefair text-lg text-center gap-x-4 w-full">
							{technology.map((_, dotIndex) => (
								<button
									key={dotIndex}
									onClick={() => {
										apiText?.scrollTo(dotIndex);
										apiImage?.scrollTo(dotIndex);
									}}
									className={`flex items-center justify-center h-10 w-10 rounded-full border-1 transition-colors duration-300 ${
										current === dotIndex
											? "bg-white text-black border-white"
											: "bg-transparent text-white border-gray-500"
									}`}
								>
									{dotIndex + 1}
								</button>
							))}
						</div>

						<div className="flex flex-col space-y-4 text-center">
							<div className="font-bellefair uppercase">
								<h2 className="opacity-50 text-lg">THE TERMINOLOGY...</h2>
							</div>
							<Carousel setApi={setApiText} opts={{ loop: true }}>
								<CarouselContent>
									{technology.map((tech, index) => (
										<CarouselItem key={index} className="space-y-6">
											<div className="font-bellefair uppercase">
												<h1 className="text-2xl">{tech.technologyName}</h1>
											</div>
											<div className="font-barlow text-[15px]">
												<span>{tech.technologyDescription}</span>
											</div>
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpaceTechnology;
