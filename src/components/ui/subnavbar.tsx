"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { subnavItems } from "@/lib/subnavItems";

const Subnavbar = () => {
  const currentPath = usePathname();
  
	return (
		<div className="left-0 max-w-full items-center">
			<div className="flex items-center justify-center">
				<div className="flex items-center content-center h-8">
					{subnavItems.map((item) => {
						return (
							<Link
								key={item.id}
                href={item.path}
								className="font-barlow-condensed tracking-space-wider flex cursor-pointer h-full items-center justify-center mx-4"
                passHref prefetch
							>
								<div className="flex relative h-full xl:text-space-preset-9-size items-center justify-center">
									<div className="flex gap-x-8 h-full items-center justify-center">
										<div className="mb-3.5 text-center">{item.label}</div>
									</div>
									{currentPath === item.path && (
										<div className="absolute bottom-0 w-full h-[3px] bg-space-white rounded-full"></div>
									)}
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Subnavbar;
