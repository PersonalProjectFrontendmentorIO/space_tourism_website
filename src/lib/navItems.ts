interface NavItem {
	id: string;
	label: string;
	path: string;
	matchStrategy?: "exact" | "startsWith";
}

export const navItems: NavItem[] = [
	{
		id: "HOME",
		label: "HOME",
		path: "/",
	},
	{
		id: "DESTINATION",
		label: "DESTINATION",
		path: "/destination",
	},
	{
		id: "CREW",
		label: "CREW",
		path: "/crew",
	},
	{
		id: "TECHNOLOGY",
		label: "TECHNOLOGY",
		path: "/technology",
	},
];

export const isNavActive = (navItem: NavItem, currentPath: string) => {
	const strategy =
		navItem.matchStrategy ??
		(navItem.path === "/destination" ? "startsWith" : "exact");

	return strategy === "startsWith"
		? currentPath.startsWith(navItem.path)
		: currentPath === navItem.path;
};