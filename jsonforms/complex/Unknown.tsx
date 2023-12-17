import {
  RankedTester,
  rankWith,
  RendererProps,
} from "@jsonforms/core";
import { withJsonFormsLayoutProps } from "@jsonforms/react";
import React, { FunctionComponent } from "react";
import { Text } from "react-native";

/**
* Default tester for a label.
* @type {RankedTester}
*/
export const unknownRendererTester: RankedTester = rankWith(0, (uischema: any) => true);

/**
* Default renderer for a markdown richtext view.
*/
export const UnknownRenderer: FunctionComponent<RendererProps> = ({
  uischema,
}) => {
  return (<Text>
    Unknown document element: {JSON.stringify(uischema)}
  </Text>
  );
};

export default withJsonFormsLayoutProps(UnknownRenderer);
