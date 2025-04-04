import { ReactNode } from "react";

const DestinationLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<main>{children}</main>
		</div>
	);
};

export default DestinationLayout;
