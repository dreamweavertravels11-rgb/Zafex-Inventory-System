import { Router, type IRouter } from "express";
import { PRODUCTS } from "../data/products";

const router: IRouter = Router();

/**
 * GET /api/products
 * Returns the full product catalogue. Supports optional query filters:
 *   ?cat=weaponry|armour|clothing|accessories
 *   ?sub=swords|chainmail|...
 *   ?badge=new|limited
 *   ?inStock=true|false
 *   ?q=search+term
 */
router.get("/products", (req, res) => {
  const { cat, sub, badge, inStock, q } = req.query as Record<string, string | undefined>;

  let results = [...PRODUCTS];

  if (cat) results = results.filter((p) => p.cat === cat);
  if (sub) results = results.filter((p) => p.sub === sub);
  if (badge) results = results.filter((p) => p.badge === badge);
  if (inStock !== undefined)
    results = results.filter((p) => String(p.inStock !== false) === inStock);
  if (q) {
    const query = q.toLowerCase();
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.cat.toLowerCase().includes(query) ||
        (p.desc ?? "").toLowerCase().includes(query) ||
        (p.tags ?? []).some((t) => t.toLowerCase().includes(query)),
    );
  }

  res.json({ products: results, total: results.length });
});

/**
 * GET /api/products/:id
 * Returns a single product by its ID.
 */
router.get("/products/:id", (req, res) => {
  const product = PRODUCTS.find((p) => p.id === req.params.id);
  if (!product) {
    res.status(404).json({ error: "Product not found" });
    return;
  }
  res.json(product);
});

export default router;
