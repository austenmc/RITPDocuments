// Generated by ts-to-zod
// npx ts-to-zod node_modules/@jsonforms/core/src/models/jsonSchema7.ts <output_file>
import { z } from "zod";
import { JsonSchema7 } from "@jsonforms/core/src/models/jsonSchema7";

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
