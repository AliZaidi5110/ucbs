export type PartnerLogo = {
  id: string;
  src: string;
  alt: string;
};

const EXTENSIONS: Record<string, string> = {
  "106": ".jpg",
};

function partnerSrc(id: string) {
  return `/${id}${EXTENSIONS[id] ?? ".png"}`;
}

/** Partner logo order as provided */
const PARTNER_IDS = [
  "104",
  "111",
  "112",
  "113",
  "116",
  "105",
  "106",
  "107",
  "108",
  "109",
  "110",
  "120",
  "121",
  "125",
  "126",
  "127",
  "115",
  "118",
  "119",
] as const;

export const PARTNER_LOGOS: PartnerLogo[] = PARTNER_IDS.map((id) => ({
  id,
  src: partnerSrc(id),
  alt: `UCBS partner ${id}`,
}));
