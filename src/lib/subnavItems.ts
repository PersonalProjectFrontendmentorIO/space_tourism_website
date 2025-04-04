interface SubnavItem {
  id: string;
  label: string;
  path: string;
}

export const subnavItems: SubnavItem[] = [
  {
    id: "MOON",
    label: "MOON",
    path: "/destination/moon",
  },
  {
    id: "MARS",
    label: "MARS",
    path: "/destination/mars",
  },
  {
    id: "EUROPA",
    label: "EUROPA",
    path: "/destination/europa",
  },
  {
    id: "TITAN",
    label: "TITAN",
    path: "/destination/titan",
  },
]