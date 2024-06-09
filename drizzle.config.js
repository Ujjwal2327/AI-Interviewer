/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-interviewer_owner:0jHdZ3PngxWO@ep-bold-brook-a547acli.us-east-2.aws.neon.tech/ai-interviewer?sslmode=require",
  },
};
