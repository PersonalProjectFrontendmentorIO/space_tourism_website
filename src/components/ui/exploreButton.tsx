import * as motion from "motion/react-client";

const ExploreButton = () => {
	return (
		<div className="flex justify-center items-center relative">
			<motion.div
				whileHover={{ scale: 1.5, opacity: 0.1 }}
				whileTap={{ scale: 1.3, opacity: 0.2 }}
				transition={{ type: "spring", stiffness: 350, damping: 20 }}
				className="hidden md:hidden xl:block w-36 h-36 md:w-64 md:h-64 xl:h-[272px] xl:w-[272px] bg-space-white rounded-full absolute z-10"
			></motion.div>

			<motion.div
				whileTap={{ scale: 0.8, opacity: 0.8 }}
				className="w-36 h-36 md:w-64 md:h-64 xl:h-[272px] xl:w-[272px] bg-space-white rounded-full"
			></motion.div>

			<div className="absolute font-bellefair text-space-preset-9-size md:text-space-preset-4-size tracking-normal text-black z-20 pointer-events-none">
				EXPLORE
			</div>
		</div>
	);
};

export default ExploreButton;
