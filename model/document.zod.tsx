import { z } from "zod";
import { jsonSchema7Schema } from "./jsonSchema.zod";
import {
  categorizationSchema,
  categorySchema,
  layoutSchema,
  uISchemaElementSchema,
} from "./uischema.zod";

const UserLikeSchema = z.object({
  id: z.string(),
});

const ImageSchema = z.object({
  type: z.literal("image"),
  url: z.string(),
});

const RichTextElementSchema = uISchemaElementSchema.extend({
  content: z.string(),
});

const DocumentSchema = z.object({
  id: z.string(),
  type: z.string(),
  title: z.string(),
  owner: UserLikeSchema,
  privacy: z.enum(["restricted", "public"]),
  state: z.enum(["draft", "published"]),
  contributors: z.array(UserLikeSchema),
  featuredImage: z.nullable(ImageSchema),
  data: jsonSchema7Schema,
  schema: jsonSchema7Schema,
  structure: uISchemaElementSchema,
});

export type Document = z.infer<typeof DocumentSchema>;
export type UISchemaElement = z.infer<typeof uISchemaElementSchema>;
export type LayoutSchema = z.infer<typeof layoutSchema>;
export type RichTextElement = z.infer<typeof RichTextElementSchema>;
export type Categorization = z.infer<typeof categorizationSchema>;
export type Category = z.infer<typeof categorySchema>;
