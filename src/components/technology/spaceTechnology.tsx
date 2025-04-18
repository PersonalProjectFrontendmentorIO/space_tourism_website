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
			<div className="flex flex-col space-y-8 xl:justify-center xl:items-end xl:mt-12 xl:ml-40 xl:mr-0">
				<div className="w-full">
					<div className="flex flex-col md:flex-row md:space-x-8 items-center font-barlow-condensed text-base md:text-xl xl:text-[28px] uppercase tracking-space-wider justify-center md:justify-start xl:justify-start md:mx-10 md:mt-10 xl:mt-12">
						<h1 className="font-bold opacity-25">03</h1>
						<h1>Space Launch 101</h1>
					</div>
				</div>

				<div className="flex flex-col xl:flex-row-reverse xl:items-start xl:mt-6 xl:pl-40 xl:pr-0 w-full space-y-8 xl:space-y-0 xl:gap-x-8">
					<div className="w-full xl:w-[608px] xl:flex-shrink-0">
						<Carousel
							setApi={setApiImage}
							opts={{ loop: true }}
							className="w-full h-[258px] md:h-[768px] xl:h-[600px] overflow-hidden mt-16 xl:mt-0"
						>
							<CarouselContent>
								{technology.map((tech, index) => (
									<CarouselItem
										key={index}
										className="w-full h-[258px] md:h-[768px] xl:h-[600px] xl:w-[608px]"
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
					</div>

					<div className="flex flex-col xl:flex-row flex-1 space-y-10 xl:space-y-0 xl:ml-40 items-center xl:items-center mb-10 xl:mb-12 xl:gap-x-20 xl:justify-center xl:h-[600px] text-white">
						{/* Dot Navigation */}
						<div className="flex flex-row xl:flex-col justify-center xl:justify-start items-center gap-x-4 xl:gap-x-0 xl:gap-y-8 font-bellefair text-lg xl:text-[32px] text-center">
							{technology.map((_, dotIndex) => (
								<button
									key={dotIndex}
									onClick={() => {
										apiText?.scrollTo(dotIndex);
										apiImage?.scrollTo(dotIndex);
									}}
									className={`flex items-center justify-center h-10 w-10 md:w-14 md:h-14 xl:w-20 xl:h-20 rounded-full border-1 transition-colors duration-300 ${
										current === dotIndex
											? "bg-white text-black border-white"
											: "bg-transparent text-white border-gray-500"
									}`}
								>
									{dotIndex + 1}
								</button>
							))}
						</div>

						<div className="flex flex-col space-y-4 text-center xl:text-left md:max-w-[512px] xl:max-w-[491px]">
							<div className="font-bellefair uppercase">
								<h2 className="opacity-50 text-lg md:text-2xl xl:text-[32px]">
									THE TERMINOLOGY...
								</h2>
							</div>
							<Carousel setApi={setApiText} opts={{ loop: true }}>
								<CarouselContent>
									{technology.map((tech, index) => (
										<CarouselItem key={index} className="space-y-6">
											<div className="font-bellefair uppercase">
												<h1 className="text-2xl md:text-[40px] xl:text-[56px]">
													{tech.technologyName}
												</h1>
											</div>
											<div className="font-barlow text-[15px] md:text-base xl:text-lg leading-space-preset-9 text-space-blue-300">
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
