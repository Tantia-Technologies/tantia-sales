import { describe, it, expect } from "vitest";
import { modules, categories, type ModuleCategory } from "./modules";

describe("modules catalog", () => {
  it("exposes 18 modules (no accidental deletions)", () => {
    expect(modules).toHaveLength(18);
  });

  it("declares unique module names", () => {
    const names = modules.map((m) => m.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it("populates all required fields on every module", () => {
    for (const mod of modules) {
      expect(mod.name.length).toBeGreaterThan(0);
      expect(mod.tagline.length).toBeGreaterThan(0);
      expect(mod.description.length).toBeGreaterThan(0);
      expect(typeof mod.icon).toBe("object");
      expect(mod.category.length).toBeGreaterThan(0);
    }
  });

  it("maps every module to a category that exists in `categories`", () => {
    const known = new Set<ModuleCategory>(
      Object.keys(categories) as ModuleCategory[],
    );
    for (const mod of modules) {
      expect(known.has(mod.category)).toBe(true);
    }
  });

  it("uses every declared category at least once (no orphan categories)", () => {
    const used = new Set(modules.map((m) => m.category));
    for (const cat of Object.keys(categories)) {
      expect(used.has(cat as ModuleCategory)).toBe(true);
    }
  });

  it("imports a valid Lucide icon component for every module", () => {
    for (const mod of modules) {
      // Lucide icons are React forwardRef components — they're either
      // functions or render objects with a $$typeof symbol.
      const t = typeof mod.icon;
      expect(t === "function" || t === "object").toBe(true);
      expect(mod.icon).not.toBeNull();
    }
  });
});

describe("categories dictionary", () => {
  it("exposes the four canonical categories", () => {
    expect(Object.keys(categories).sort()).toEqual([
      "finance",
      "intelligence",
      "operations",
      "people",
    ]);
  });

  it("has a non-empty label and description per category", () => {
    for (const value of Object.values(categories)) {
      expect(value.label.length).toBeGreaterThan(0);
      expect(value.description.length).toBeGreaterThan(0);
    }
  });
});
