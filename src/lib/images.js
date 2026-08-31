const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const IMG = {
  arrayField:   u("1509391366360-2e959784a276"),
  panelsSky:    u("1508514177221-188b1cf16e9d"),
  aerialGrass:  u("1497440001374-f26997328c1b"),
  panelCloseup: u("1545209463-e2825498edbf"),
  roofSunset:   u("1613665813446-82a78c468a1d"),
  roofTurbine:  u("1595437193398-f24279553f4f"),
  buildingDusk: u("1611365892117-00ac5ef43c90"),
  hillsideRows: u("1592833159155-c62df1b65634"),
  arrayBlue:    u("1558449028-b53a39d100fc"),
  turbineSun:   u("1466611653911-95081537e5b7"),
};

export const GALLERY = [
  { src: IMG.roofSunset,   title: "Rooftop array, commissioning day", meta: "Commercial rooftop • Bhubaneswar" },
  { src: IMG.panelsSky,    title: "Ground-mount rows under clear sky", meta: "Ground mount • Odisha" },
  { src: IMG.aerialGrass,  title: "Aerial view of a completed array",  meta: "Site survey • Khordha" },
  { src: IMG.roofTurbine,  title: "Residential rooftop panels",        meta: "Residential • 3 kW" },
  { src: IMG.panelCloseup, title: "Module close-up after cleaning",    meta: "Maintenance visit" },
  { src: IMG.buildingDusk, title: "Institutional rooftop at dusk",     meta: "Institutional • 10 kW" },
  { src: IMG.hillsideRows, title: "Structure alignment and tilt",      meta: "Installation • Cuttack" },
  { src: IMG.arrayBlue,    title: "Array ready for grid connection",   meta: "Commissioning support" },
  { src: IMG.arrayField,   title: "Completed generation site",         meta: "Commercial • Odisha" },
];
