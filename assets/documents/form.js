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
            type: "richtext",
            content: "# Here's Our Form!\nHey it's a form, enjoy it!",
          },
          {
            type: "carousel",
            options: {
              size: "large",
            },
            content: [
              {
                type: "video",
                url: "...",
              },
            ],
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
          {
            type: "Control",
            label: "Put in a number",
            scope: "#/properties/q1",
          },
          {
            type: "Control",
            label: "Rate something",
            scope: "#/properties/q2",
            options: {
              star: true,
            },
          },
          {
            type: "Control",
            label: "Why did you rate it less than 3 stars?",
            scope: "#/properties/q3",
            options: {
              multi: true,
            },
            rule: {
              effect: "SHOW",
              condition: {
                scope: "#/properties/q2",
                schema: {
                  exclusiveMaximum: 3,
                },
              },
            },
          },
        ],
      },
    ],
  },
};
