import { describe, it, expect } from "vitest";
import { pricingTiers } from "./pricing";

describe("pricingTiers catalog", () => {
  it("exposes the four expected tiers in canonical order", () => {
    expect(pricingTiers.map((t) => t.name)).toEqual([
      "Developer",
      "Starter",
      "Professional",
      "Enterprise",
    ]);
  });

  it("marks exactly one tier as featured (the upsell tier)", () => {
    const featured = pricingTiers.filter((t) => t.featured === true);
    expect(featured).toHaveLength(1);
    expect(featured[0]!.name).toBe("Professional");
  });

  it("populates every tier with a non-empty features list", () => {
    for (const tier of pricingTiers) {
      expect(tier.features.length).toBeGreaterThan(0);
      for (const feat of tier.features) {
        expect(feat.length).toBeGreaterThan(0);
      }
    }
  });

  it("uses a recognized price format on every tier (Free or $NN)", () => {
    for (const tier of pricingTiers) {
      expect(tier.price === "Free" || /^\$\d+$/.test(tier.price)).toBe(true);
    }
  });

  it("aligns CTA labels with the commercial intent of each tier", () => {
    const ctaByName = Object.fromEntries(
      pricingTiers.map((t) => [t.name, t.cta]),
    );
    expect(ctaByName.Developer).toBe("Get Started");
    expect(ctaByName.Starter).toBe("Start Free Trial");
    expect(ctaByName.Professional).toBe("Start Free Trial");
    expect(ctaByName.Enterprise).toBe("Contact Sales");
  });

  it("has a non-empty description and period on every tier", () => {
    for (const tier of pricingTiers) {
      expect(tier.description.length).toBeGreaterThan(0);
      expect(tier.period.length).toBeGreaterThan(0);
    }
  });
});
