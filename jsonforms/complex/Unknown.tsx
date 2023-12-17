import {
  isControl,
  RankedTester,
  rankWith,
  RendererProps,
  and
} from "@jsonforms/core";
import { withJsonFormsLayoutProps } from "@jsonforms/react";
import React, { FunctionComponent } from "react";
import { Text } from "react-native";

/**
* Default tester for a label.
* @type {RankedTester}
*/
export const unknownRendererTester: RankedTester = rankWith(100, and(isControl));

/**
* Default renderer for a markdown richtext view.
*/
export const UnknownRenderer: FunctionComponent<RendererProps> = ({
  uischema,
}) => {
  return (<Text>
    {uischema.type}
  </Text>
  );
};

export default withJsonFormsLayoutProps(UnknownRenderer);
