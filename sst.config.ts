import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "next-sst",
      region: "ap-northeast-2",
    };
  },
  stacks(app) {
    app.stack(function Site(ctx) {
      const site = new NextjsSite(ctx.stack, "site", {
        path: ".",
      });

      ctx.stack.addOutputs({
        SiteUrl: site.url || "http://localhost:3000",
      });
    });
  },
} satisfies SSTConfig;
