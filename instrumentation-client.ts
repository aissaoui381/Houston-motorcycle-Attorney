import { initBotId } from "botid/client/core";

// Routes that host the contact form. BotID instruments Server Action POSTs
// originating from these pages, so submissions are gated at the client side
// and verified on the server in app/actions/contact.ts via checkBotId().
initBotId({
  protect: [
    { path: "/contact", method: "POST" },
    { path: "/practice-areas/*", method: "POST" },
    { path: "/locations/*", method: "POST" },
  ],
});
