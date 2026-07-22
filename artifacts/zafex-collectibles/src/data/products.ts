export type Product = {
  id: string;
  name: string;
  cat: string;
  sub: string;
  price: number;
  badge?: string;
  image: string;
  desc?: string;
  tags?: string[];
};

export const CATEGORIES = [
  'Weaponry',
  'Armour',
  'Clothing',
  'Accessories',
] as const;

export const PRODUCTS: Product[] = [
  { id: "sw-1", name: "Duelist Sword – Vanguard Black", cat: "weaponry", sub: "swords", price: 4800, badge: "new", image: "/images/sword.png", desc: "A sleek duelist blade forged for collectors and LARP enthusiasts. Durable polypropylene construction with a steel-grey finish. Perfect for display or reenactment.", tags: ["sword","larp","duelist"] },
  { id: "sw-2", name: "Duelist Sword – Vanguard Gold", cat: "weaponry", sub: "swords", price: 4800, badge: "new", image: "/images/swords.png", desc: "Gold-finished variant of the Vanguard series. An elegant display piece with balanced weight.", tags: ["sword","display"] },
  { id: "sw-3", name: "Imperial Sword – Gold Edition", cat: "weaponry", sub: "swords", price: 9200, badge: "limited", image: "/images/sword.png", desc: "Museum-grade imperial longsword with ornamental gold crossguard. Limited collector's run.", tags: ["sword","limited","imperial"] },
  { id: "ax-1", name: "Viking Bearded Broadaxe", cat: "weaponry", sub: "axes-hammers", price: 7200, badge: "new", image: "/images/axe.png", desc: "Forged steel head on a solid ash handle. Based on Norse archaeological finds.", tags: ["axe","viking"] },
  { id: "ax-2", name: "Battle Hammer – Iron Shod", cat: "weaponry", sub: "axes-hammers", price: 8000, image: "/images/hammers.png", desc: "Heavyweight flanged mace. German design, 14th century." },
  { id: "bow-1", name: "Ranger's Elven Bow", cat: "weaponry", sub: "bows-arrows", price: 5500, badge: "new", image: "/images/axes.png", desc: "Elegant longbow crafted from laminated wood with engraved elven motifs. A must-have for LARP archers and fantasy collectors.", tags: ["bow","larp","elven"] },
  { id: "sp-1", name: "Ashwood Tournament Spear", cat: "weaponry", sub: "training-weapons", price: 4200, image: "/images/spears.png", desc: "Balanced training spear for reenactors. Safe rounded tip." },
  { id: "bp-1", name: "Gothic Fluted Steel Breastplate", cat: "armour", sub: "breastplates", price: 20000, badge: "new", image: "/images/breastplates.png" },
  { id: "bp-2", name: "Leather Breastplate – Ranger", cat: "armour", sub: "breastplates", price: 12000, image: "/images/leather-breastplates.png" },
  { id: "hm-1", name: "Norman Spangenhelm Helmet", cat: "armour", sub: "helmets", price: 14500, image: "/images/norman-helmet.png" },
  { id: "hm-2", name: "Barbuta Open-Face Helm", cat: "armour", sub: "helmets", price: 9800, image: "/images/gladitor-helmet.png" },
  { id: "hm-3", name: "Viking Spectacle Helmet", cat: "armour", sub: "helmets", price: 11200, image: "/images/viking-helmet.png" },
  { id: "cm-1", name: "Riveted Chainmail Hauberk", cat: "armour", sub: "chainmail", price: 15500, badge: "new", image: "/images/chainmail-shirt.png" },
  { id: "cm-2", name: "Steel Chainmail Coif", cat: "armour", sub: "chainmail", price: 6500, image: "/images/chainmail-coif.png" },
  { id: "sh-1", name: "Viking Round Shield", cat: "armour", sub: "shields", price: 9500, image: "/images/round-shields.png" },
  { id: "sh-2", name: "Templar Heater Shield", cat: "armour", sub: "shields", price: 11000, image: "/images/tamplar-crusader-shields.png" },
  { id: "sh-3", name: "Viking Kite Shield", cat: "armour", sub: "shields", price: 8800, image: "/images/viking-shield.png" },
  { id: "cl-1", name: "Classic Padded Cotton Gambeson", cat: "clothing", sub: "tabards", price: 9500, badge: "new", image: "/images/gambeson.png" },
  { id: "cl-2", name: "Viking Merchant Tunic", cat: "clothing", sub: "tunics", price: 4000, image: "/images/viking-tunic.png" },
  { id: "cl-3", name: "Medieval Duchess Gown", cat: "clothing", sub: "cloaks-robes", price: 10000, image: "/images/1781973392758_gown.jpeg" },
  { id: "ac-1", name: "Medieval Linen Tunic", cat: "accessories", sub: "belts", price: 2200, badge: "new", image: "/images/leather-belt.png" },
  { id: "ac-2", name: "Carved Drinking Horn", cat: "accessories", sub: "bags-pouches", price: 3200, image: "/images/drinking-horn.png" },
  { id: "ac-3", name: "Knight's Pendant – Sterling", cat: "accessories", sub: "jewellery", price: 2400, badge: "new", image: "/images/horn-mug.png" },
  { id: "ac-4", name: "Leather Sword Belt", cat: "accessories", sub: "belts", price: 1800, image: "/images/leather-belt.png" },
  { id: "ac-5", name: "Embossed Leather Bracer", cat: "accessories", sub: "bags-pouches", price: 3900, image: "/images/leather-bracer.png" }
];
