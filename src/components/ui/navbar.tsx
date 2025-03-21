"use client";

import Image from "next/image";

import { Menu } from "lucide-react";

import SpaceTourismLogo from "@/assets/images/SpaceTourismLogo.svg";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./sheet";

const Navbar = () => {
	return (
		<div className="fixed top-0 left-0 w-full z-50">
			<div className="flex items-center justify-between w-full p-6 md:p-0 xl:py-10">
				<div className="flex items-center justify-between w-full">
					<div className="md:mx-10 xl:ml-16">
						<Image
							src={SpaceTourismLogo}
							alt=""
							width={48}
							height={48}
							className="w-10 h-10 md:w-12 md:h-12"
						/>
					</div>

					<div className="hidden md:hidden xl:block absolute top-1/2 left-[12%] w-[40%] h-[2px] bg-space-white opacity-25 z-20"></div>

					<div className="hidden md:flex md:pl-[117px] xl:pl-0 justify-end backdrop-blur-2xl text-space-white bg-space-white/10 items-center content-center md:w-[640px] xl:w-[50%] h-24">
						<a
							href="#"
							className="font-barlow-condensed tracking-space-wide flex gap-x-space-preset-600 2xl:gap-x-space-preset-1000 cursor-pointer h-full items-center align-middle content-center md:mr-10 md:ml-[87px] 2xl:mr-16 2xl:ml-auto"
						>
							<div className="flex relative h-full xl:text-space-preset-9-size">
								<div className="flex gap-3 h-full items-center">
									<div className="font-bold">00</div>
									<div>HOME</div>
								</div>
								<div className="absolute left-0 bottom-0 w-full h-[3px] bg-space-white rounded-full"></div>
							</div>
							<div className="flex relative h-full xl:text-space-preset-9-size">
								<div className="flex gap-3 h-full items-center">
									<div className="font-bold">01</div>
									<div>DESTINATION</div>
								</div>
							</div>
							<div className="flex relative h-full xl:text-space-preset-9-size">
								<div className="flex gap-3 h-full items-center">
									<div className="font-bold">02</div>
									<div>CREW</div>
								</div>
							</div>
							<div className="flex relative h-full xl:text-space-preset-9-size">
								<div className="flex gap-3 h-full items-center">
									<div className="font-bold">03</div>
									<div>TECHNOLOGY</div>
								</div>
							</div>
						</a>
					</div>
				</div>

				<div className="md:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<button>
								<Menu className="w-8 h-8" />
							</button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle className="sr-only">Test Sheet</SheetTitle>
								<SheetDescription className="sr-only" />
							</SheetHeader>
							<div className="my-space-preset-600">
								<a
									href="#"
									className="font-barlow-condensed flex gap-3 cursor-pointer flex-col tracking-space-wide gap-y-space-preset-600"
								>
									<div className="flex flex-col w-full relative">
										<div className="flex gap-x-3 ml-8">
											<div className="font-bold">00</div>
											<div>HOME</div>
										</div>
										<div className="absolute right-0 top-0 h-full w-[4px] rounded-full bg-space-white"></div>
									</div>
									<div className="flex flex-col w-full relative">
										<div className="flex gap-x-3 ml-8">
											<div className="font-bold">01</div>
											<div>DESTINATION</div>
										</div>
									</div>
									<div className="flex flex-col w-full relative">
										<div className="flex gap-x-3 ml-8">
											<div className="font-bold">02</div>
											<div>CREW</div>
										</div>
									</div>
									<div className="flex flex-col w-full relative">
										<div className="flex gap-x-3 ml-8">
											<div className="font-bold">03</div>
											<div>TECHNOLOGY</div>
										</div>
									</div>
								</a>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
