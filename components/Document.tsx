import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Document as DocumentT, UISchemaElement as UISchemaElementT, LayoutSchema as LayoutSchemaT, RichTextElement, Categorization, Category } from '../model/document.zod';
import { JsonForms } from '@jsonforms/react';
import { RNCells, RNRenderers } from "../jsonforms";

interface DocumentProps {
  document: DocumentT;
  renderers: Record<string, (element: UISchemaElementT) => React.ReactElement>;
}

const Document: React.FC<DocumentProps> = ({ document, renderers }) => {
  return (
      <JsonForms
        data={
          {
            "name": "John Doe",
          }
        }
        uischema={{
          "type": "VerticalLayout",
          "elements": [{
            type: "RichText",
            content: "test"
        },
          ]
        }}
        schema={{
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "minLength": 3,
              "description": "Please enter your name"
            },
          }
        }}
        renderers={RNRenderers}
        cells={RNCells}
        onChange={({ data }) => console.log(data)}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    margin: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
});

export default Document;
