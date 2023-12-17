export const FormExample = {
  id: "basic-screen",
  type: "form",
  title: "Some Form for You",
  owner: {},
  privacy: "public",
  state: "published",
  contributors: [],
  featuredImage: null,
  data: {
    q1: 1,
    q2: 2,
    q3: "This is a\nfreeform answer\non multiple lines",
    date: "2023-12-12",
  },
  schema: {
    type: "object",
    properties: {
      date: {
        type: "string",
        format: "date",
      },
      q1: {
        type: "number",
      },
      q2: {
        type: "integer",
        minimum: 1,
        maximum: 5,
      },
      q3: {
        type: "string",
      },
    },
  },
  structure: {
    type: "Categorization",
    options: {
      variant: "stepper",
      showNavButtons: true,
    },
    elements: [
      {
        type: "Category",
        label: "categoryLabelKey",
        elements: [
          {
            type: "RichText",
            content: "# Here's Our Form!\nHey it's a form, enjoy it!",
          },
                    {
                        type: "Control",
                        label: "Today's date",
                        scope: "#/properties/date",
                      },
       ],
      },
      {
        type: "Category",
        label: "nextCategory",
        elements: [
        ],
      },
    ],
  },
};
