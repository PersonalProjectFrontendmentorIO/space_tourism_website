export const DESTINATION_IMAGES = {
	moon: "/images/destination/Destination-A-Moon.svg",
	mars: "/images/destination/Destination-B-Mars.svg",
	europa: "/images/destination/Destination-C-Europa.svg",
	titan: "/images/destination/Destination-D-Titan.svg",
} as const;

export type DestinationKey = keyof typeof DESTINATION_IMAGES;
