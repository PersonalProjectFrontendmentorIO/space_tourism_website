import { ReactNode } from "react";

const CrewLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<main>{children}</main>
		</div>
	);
};

export default CrewLayout;
