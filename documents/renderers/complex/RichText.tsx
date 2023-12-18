import {
  RankedTester,
  rankWith,
  RendererProps,
  uiTypeIs,
} from "@jsonforms/core";
import { withJsonFormsLayoutProps } from "@jsonforms/react";
import React, { FunctionComponent } from "react";
import { RichTextElement } from '../../model/document.zod';
import Markdown from 'react-native-markdown-display';

/**
* Default tester for a label.
* @type {RankedTester}
*/
export const richTextRendererTester: RankedTester = rankWith(1, uiTypeIs("RichText"));

/**
* Default renderer for a markdown richtext view.
*/
export const RichTextRenderer: FunctionComponent<RendererProps> = ({
  uischema,
}) => {
  const richTextElement: RichTextElement = uischema as RichTextElement;

  return (<Markdown>
    {richTextElement.content}
  </Markdown>
  );
};

export default withJsonFormsLayoutProps(RichTextRenderer);
