import React from 'react';
import { StyleSheet } from 'react-native';
import { Document } from '../model';
import { JsonForms } from '@jsonforms/react';
import { RNCells, RNRenderers } from "../renderers";

export interface DocumentRendererProps {
  document: Document;
}

export const DocumentRenderer: React.FC<DocumentRendererProps> = ({ document }) => {
  return (
      <JsonForms
        data={document.data ?? {}}
        uischema={document.structure}
        schema={document.schema ?? {}}
        renderers={RNRenderers}
        cells={RNCells}
      />
  );
};

const styles = StyleSheet.create({
});