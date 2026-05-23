import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("leads", {
      ...args,
      status: args.botSignal?.isBot ? "spam" : "new",
      createdAt: Date.now(),
    });
    return id;
  },
});

export const list = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("leads")
      .withIndex("by_createdAt")
      .order("desc")
      .take(args.limit ?? 50);
  },
});
