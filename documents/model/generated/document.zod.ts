// Generated by ts-to-zod
import { z } from "zod";
import { RuleEffect, JsonSchema7, Categorization } from "./../build/combined";

export const scopableSchema = z.object({
  scope: z.string().optional(),
});

export const scopedSchema = scopableSchema.extend({
  scope: z.string(),
});

export const labelableSchema = z.object({
  label: z.string().optional(),
});

export const labeledSchema = labelableSchema.extend({
  label: z.string(),
});

export const internationalizableSchema = z.object({
  i18n: z.string().optional(),
});

export const ruleEffectSchema = z.nativeEnum(RuleEffect);

export const conditionSchema = z.object({
  type: z.string().optional(),
});

export const leafConditionSchema = conditionSchema
  .extend(scopedSchema.shape)
  .extend({
    type: z.literal("LEAF"),
    expectedValue: z.any(),
  });

export const composableConditionSchema = conditionSchema.extend({
  conditions: z.array(conditionSchema),
});

export const orConditionSchema = composableConditionSchema.extend({
  type: z.literal("OR"),
});

export const andConditionSchema = composableConditionSchema.extend({
  type: z.literal("AND"),
});

export const labelDescriptionSchema = z.object({
  text: z.string().optional(),
  show: z.boolean().optional(),
});

export const jsonSchema7Schema: z.ZodSchema<JsonSchema7> = z.lazy(() =>
  z.object({
    $ref: z.string().optional(),
    $id: z.string().optional(),
    $schema: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    default: z.any().optional(),
    multipleOf: z.number().optional(),
    maximum: z.number().optional(),
    exclusiveMaximum: z.number().optional(),
    minimum: z.number().optional(),
    exclusiveMinimum: z.number().optional(),
    maxLength: z.number().optional(),
    minLength: z.number().optional(),
    pattern: z.string().optional(),
    additionalItems: z.union([z.boolean(), jsonSchema7Schema]).optional(),
    items: z.union([jsonSchema7Schema, z.array(jsonSchema7Schema)]).optional(),
    maxItems: z.number().optional(),
    minItems: z.number().optional(),
    uniqueItems: z.boolean().optional(),
    maxProperties: z.number().optional(),
    minProperties: z.number().optional(),
    required: z.array(z.string()).optional(),
    additionalProperties: z.union([z.boolean(), jsonSchema7Schema]).optional(),
    definitions: z.record(jsonSchema7Schema).optional(),
    properties: z.record(jsonSchema7Schema).optional(),
    patternProperties: z.record(jsonSchema7Schema).optional(),
    dependencies: z
      .record(z.union([jsonSchema7Schema, z.array(z.string())]))
      .optional(),
    enum: z.array(z.any()).optional(),
    type: z.union([z.string(), z.array(z.string())]).optional(),
    allOf: z.array(jsonSchema7Schema).optional(),
    anyOf: z.array(jsonSchema7Schema).optional(),
    oneOf: z.array(jsonSchema7Schema).optional(),
    not: jsonSchema7Schema.optional(),
    format: z.string().optional(),
    readOnly: z.boolean().optional(),
    writeOnly: z.boolean().optional(),
    examples: z.array(z.any()).optional(),
    contains: jsonSchema7Schema.optional(),
    propertyNames: jsonSchema7Schema.optional(),
    const: z.any().optional(),
    if: jsonSchema7Schema.optional(),
    then: jsonSchema7Schema.optional(),
    else: jsonSchema7Schema.optional(),
    errorMessage: z.any().optional(),
  }),
);

export const imageAssetSchema = z.object({
  type: z.literal("image"),
  url: z.string(),
});

export const ruleSchema = z.object({
  effect: ruleEffectSchema,
  condition: conditionSchema,
});

export const uISchemaElementSchema = z.object({
  type: z.string(),
  rule: ruleSchema.optional(),
  options: z.record(z.any()).optional(),
});

export const layoutSchema = uISchemaElementSchema.extend({
  elements: z.array(uISchemaElementSchema),
});

export const verticalLayoutSchema = layoutSchema.extend({
  type: z.literal("VerticalLayout"),
});

export const horizontalLayoutSchema = layoutSchema.extend({
  type: z.literal("HorizontalLayout"),
});

export const groupLayoutSchema = layoutSchema
  .extend(labelableSchema.shape)
  .extend(internationalizableSchema.shape)
  .extend({
    type: z.literal("Group"),
  });

export const labelElementSchema = uISchemaElementSchema
  .extend(internationalizableSchema.shape)
  .extend({
    type: z.literal("Label"),
    text: z.string(),
  });

export const controlElementSchema = uISchemaElementSchema
  .extend(scopedSchema.shape)
  .extend(labelableSchema.shape)
  .extend(internationalizableSchema.shape)
  .extend({
    type: z.literal("Control"),
  });

export const categorySchema = layoutSchema
  .extend(labeledSchema.shape)
  .extend(internationalizableSchema.shape)
  .extend({
    type: z.literal("Category"),
  });

export const categorizationSchema: z.ZodSchema<Categorization> = z.lazy(() =>
  uISchemaElementSchema
    .extend(labeledSchema.shape)
    .extend(internationalizableSchema.shape)
    .extend({
      type: z.literal("Categorization"),
      elements: z.array(z.union([categorySchema, categorizationSchema])),
    }),
);

export const documentSchema = z.object({
  id: z.string(),
  title: z.string(),
  privacy: z.union([z.literal("restricted"), z.literal("public")]),
  state: z.union([z.literal("draft"), z.literal("published")]),
  featuredImage: imageAssetSchema.optional(),
  data: jsonSchema7Schema.optional(),
  schema: jsonSchema7Schema.optional(),
  structure: uISchemaElementSchema,
});
