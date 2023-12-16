import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Document as DocumentT, UISchemaElement as UISchemaElementT, LayoutSchema as LayoutSchemaT, RichTextElement, Categorization, Category } from '../model/document.zod';
import Markdown from 'react-native-markdown-display';

interface DocumentProps {
  document: DocumentT;
  renderers: Record<string, (element: UISchemaElementT) => React.ReactElement>;
}

const Document: React.FC<DocumentProps> = ({ document, renderers }) => {
  var elements: React.ReactElement[];

  const [categoryIndex, setCategoryIndex] = useState(0);

  const verticalLayout = (elements: UISchemaElementT[]): React.ReactElement[] => {
    return elements.map((e: UISchemaElementT, index) => {
      switch(e.type) {
        case 'richtext':
          return (<Markdown>
            {(e as RichTextElement).content}
          </Markdown>);
        default:
          return <View key={index}><Text>{e.type}</Text></View>;
      }
    });
  }

  switch (document.structure.type) {
    case 'VerticalLayout':
      const layout = document.structure as LayoutSchemaT;
      elements = verticalLayout(layout.elements);
      break;
    case 'Categorization':
      const categorization = document.structure as Categorization;
      const es = categorization.elements as Category[];
      elements = verticalLayout(es[categoryIndex].elements);
      if (categoryIndex != 0) {
        elements.push(<Button onPress={() => setCategoryIndex(categoryIndex - 1)} title={'Previous'}/>);
      } 
      if (categoryIndex < es.length - 1) {
        elements.push(<Button onPress={() => setCategoryIndex(categoryIndex + 1)} title={'Next'}/>);
      }
      break;
    default:
      elements = [];
      console.error(`Unsupported uischema type: ${document.structure.type}`)
  }

  return (
    <View style={styles.container}>
      {elements}
    </View>
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
