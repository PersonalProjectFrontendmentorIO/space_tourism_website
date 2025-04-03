interface NavItem {
  id: string;
  label: string;
  path: string;
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
		path: "/destination/moon",
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
