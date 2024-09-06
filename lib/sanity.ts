import { createClient } from "next-sanity";

const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string, 
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string, 
    apiVersion: "2024-08-28", 
    useCdn: process.env.NODE_ENV === 'production', 
});

export default sanityClient