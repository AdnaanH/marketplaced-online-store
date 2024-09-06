import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "sm2vj71p",
    dataset: "production",
    title: "Marketplaced Online Store",
    apiVersion: "2024-08-28",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {
        types: schemas,
    }
})


export default config