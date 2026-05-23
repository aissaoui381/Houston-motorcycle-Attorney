import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    description: v.string(),
    practiceArea: v.string(),
    sourcePath: v.optional(v.string()),
    userAgent: v.optional(v.string()),
    ip: v.optional(v.string()),
    botSignal: v.optional(
      v.object({
        isBot: v.boolean(),
        isVerifiedBot: v.boolean(),
        bypassed: v.boolean(),
      }),
    ),
    status: v.union(
      v.literal("new"),
      v.literal("contacted"),
      v.literal("retained"),
      v.literal("declined"),
      v.literal("spam"),
    ),
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_createdAt", ["createdAt"]),
});
