import { JsonSchema7, UISchemaElement } from "@jsonforms/core";

export interface ImageAsset {
  type: "image",
  url: string
}

export interface Document {
  id: string,
  title: string,
  // owner
  privacy: "restricted" | "public",
  state: "draft" | "published",
  // contributors
  featuredImage?: ImageAsset,
  data?: JsonSchema7,
  schema?: JsonSchema7,
  structure: UISchemaElement,
};