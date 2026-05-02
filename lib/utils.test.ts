import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn (class merge utility)", () => {
  it("concatenates simple class strings", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("ignores null, undefined, and false", () => {
    expect(cn("foo", null, undefined, false, "bar")).toBe("foo bar");
  });

  it("flattens array inputs", () => {
    expect(cn(["foo", "bar"], "baz")).toBe("foo bar baz");
  });

  it("resolves Tailwind conflicts so the last class wins", () => {
    // p-2 and p-4 conflict (both set padding); twMerge keeps the last one.
    expect(cn("p-2", "p-4")).toBe("p-4");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("preserves non-conflicting classes in original order", () => {
    expect(cn("flex", "items-center", "gap-2")).toBe("flex items-center gap-2");
  });

  it("supports the clsx object form for conditional classes", () => {
    expect(cn({ active: true, disabled: false })).toBe("active");
  });
});
