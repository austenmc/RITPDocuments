/*
  The MIT License
  
  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/

/**
 * Interface for describing an UI schema element that is referencing
 * a subschema. The value of the scope may be a JSON Pointer.
 */
export interface Scopable {
  /**
   * The scope that determines to which part this element should be bound to.
   */
  scope?: string;
}

/**
 * Interface for describing an UI schema element that is referencing
 * a subschema. The value of the scope must be a JSON Pointer.
 */
export interface Scoped extends Scopable {
  /**
   * The scope that determines to which part this element should be bound to.
   */
  scope: string;
}

/**
 * Interface for describing an UI schema element that may be labeled.
 */
export interface Labelable {
  /**
   * Label for UI schema element.
   */
  label?: string;
}

/**
 * Interface for describing an UI schema element that is labeled.
 */
export interface Labeled extends Labelable {
  label: string;
}

/*
 * Interface for describing an UI schema element that can provide an internationalization base key.
 * If defined, this key is suffixed to derive applicable message keys for the UI schema element.
 * For example, such suffixes are `.label` or `.description` to derive the corresponding message keys for a control element.
 */
export interface Internationalizable {
  i18n?: string;
}

/**
 * A rule that may be attached to any UI schema element.
 */
export interface Rule {
  /**
   * The effect of the rule
   */
  effect: RuleEffect;

  /**
   * The condition of the rule that must evaluate to true in order
   * to trigger the effect.
   */
  condition: Condition;
}

/**
 * The different rule effects.
 */
export enum RuleEffect {
  /**
   * Effect that hides the associated element.
   */
  HIDE = "HIDE",
  /**
   * Effect that shows the associated element.
   */
  SHOW = "SHOW",
  /**
   * Effect that enables the associated element.
   */
  ENABLE = "ENABLE",
  /**
   * Effect that disables the associated element.
   */
  DISABLE = "DISABLE",
}

/**
 * Represents a condition to be evaluated.
 */
export interface Condition {
  /**
   * The type of condition.
   */
  readonly type?: string;
}

/**
 * A leaf condition.
 */
export interface LeafCondition extends Condition, Scoped {
  type: "LEAF";

  /**
   * The expected value when evaluating the condition
   */
  expectedValue: any;
}

/**
 * A composable condition.
 */
export interface ComposableCondition extends Condition {
  conditions: Condition[];
}

/**
 * An or condition.
 */
export interface OrCondition extends ComposableCondition {
  type: "OR";
}

/**
 * An and condition.
 */
export interface AndCondition extends ComposableCondition {
  type: "AND";
}

/**
 * Common base interface for any UI schema element.
 */
export interface UISchemaElement {
  /**
   * The type of this UI schema element.
   */
  type: string;

  /**
   * An optional rule.
   */
  rule?: Rule;

  /**
   * Any additional options.
   */
  options?: { [key: string]: any };
}

/**
 * Represents a layout element which can order its children
 * in a specific way.
 */
export interface Layout extends UISchemaElement {
  /**
   * The child elements of this layout.
   */
  elements: UISchemaElement[];
}

/**
 * A layout which orders its child elements vertically (i.e. from top to bottom).
 */
export interface VerticalLayout extends Layout {
  type: "VerticalLayout";
}

/**
 * A layout which orders its children horizontally (i.e. from left to right).
 */
export interface HorizontalLayout extends Layout {
  type: "HorizontalLayout";
}

/**
 * A group resembles a vertical layout, but additionally might have a label.
 * This layout is useful when grouping different elements by a certain criteria.
 */
export interface GroupLayout extends Layout, Labelable, Internationalizable {
  type: "Group";
}

/**
 * Represents an object that can be used to configure a label.
 */
export interface LabelDescription {
  /**
   * An optional text to be displayed.
   */
  text?: string;
  /**
   * Optional property that determines whether to show this label.
   */
  show?: boolean;
}

/**
 * A label element.
 */
export interface LabelElement extends UISchemaElement, Internationalizable {
  type: "Label";
  /**
   * The text of label.
   */
  text: string;
}

/**
 * A control element. The scope property of the control determines
 * to which part of the schema the control should be bound.
 */
export interface ControlElement
  extends UISchemaElement,
    Scoped,
    Labelable,
    Internationalizable {
  type: "Control";
}

/**
 * The category layout.
 */
export interface Category extends Layout, Labeled, Internationalizable {
  type: "Category";
}

/**
 * The categorization element, which may have children elements.
 * A child element may either be itself a Categorization or a Category, hence
 * the categorization element can be used to represent recursive structures like trees.
 */
export interface Categorization
  extends UISchemaElement,
    Labeled,
    Internationalizable {
  type: "Categorization";
  /**
   * The child elements of this categorization which are either of type
   * {@link Category} or {@link Categorization}.
   */
  elements: (Category | Categorization)[];
}
export interface JsonSchema7 {
    $ref?: string;
    /**
     * This is important because it tells refs where
     * the root of the document is located
     */
    $id?: string;
    /**
     * It is recommended that the meta-schema is
     * included in the root of any JSON Schema
     */
    $schema?: string;
    /**
     * Title of the schema
     */
    title?: string;
    /**
     * Schema description
     */
    description?: string;
    /**
     * Default json for the object represented by
     * this schema
     */
    default?: any;
    /**
     * The value must be a multiple of the number
     * (e.g. 10 is a multiple of 5)
     */
    multipleOf?: number;
    maximum?: number;
    /**
     * If true maximum must be > value, >= otherwise
     */
    exclusiveMaximum?: number;
    minimum?: number;
    /**
     * If true minimum must be < value, <= otherwise
     */
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number;
    /**
     * This is a regex string that the value must
     * conform to
     */
    pattern?: string;
    additionalItems?: boolean | JsonSchema7;
    items?: JsonSchema7 | JsonSchema7[];
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    additionalProperties?: boolean | JsonSchema7;
    /**
     * Holds simple JSON Schema definitions for
     * referencing from elsewhere.
     */
    definitions?: {
        [key: string]: JsonSchema7;
    };
    /**
     * The keys that can exist on the object with the
     * json schema that should validate their value
     */
    properties?: {
        [property: string]: JsonSchema7;
    };
    /**
     * The key of this object is a regex for which
     * properties the schema applies to
     */
    patternProperties?: {
        [pattern: string]: JsonSchema7;
    };
    /**
     * If the key is present as a property then the
     * string of properties must also be present.
     * If the value is a JSON Schema then it must
     * also be valid for the object if the key is
     * present.
     */
    dependencies?: {
        [key: string]: JsonSchema7 | string[];
    };
    /**
     * Enumerates the values that this schema can be
     * e.g.
     * {"type": "string",
     *  "enum": ["red", "green", "blue"]}
     */
    enum?: any[];
    /**
     * The basic type of this schema, can be one of
     * [string, number, object, array, boolean, null]
     * or an array of the acceptable types
     */
    type?: string | string[];
    allOf?: JsonSchema7[];
    anyOf?: JsonSchema7[];
    oneOf?: JsonSchema7[];
    /**
     * The entity being validated must not match this schema
     */
    not?: JsonSchema7;
    format?: string;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: any[];
    contains?: JsonSchema7;
    propertyNames?: JsonSchema7;
    const?: any;
    if?: JsonSchema7;
    then?: JsonSchema7;
    else?: JsonSchema7;
    errorMessage?: any;
}
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