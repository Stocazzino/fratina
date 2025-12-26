import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const catalogo = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/catalogo" }),
  schema: z.object({
    nome: z.string(),
    descrizione: z.string(),
    prezzo: z.number(),
    valuta: z.string().default("€"),
    imageUrls: z.array(z.string()).min(1),
    categoria: z.string(),
    stato: z.string(),
    dimensioni: z.string().optional(),
    anno: z.number().optional(),
    disponibile: z.boolean().default(true),
  }),
});

const eventi = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/eventi" }),
  schema: z.object({
    titolo: z.string(),
    data: z.date({ coerce: true }), // Zod trasforma stringhe ISO in oggetti Date
    orario: z.string(),
    luogo: z.string(),
    descrizione: z.string(),
  }),
});

export const collections = { catalogo, eventi };
