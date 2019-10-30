export default {
  object: 'product',
  version: '1.0.0.',
  inputs: [
    'name',
    'summary',
    'content',
    'images',
    'category',
    'tags',
  ],
  fields: [
    {
      object: 'container',
      properties: {
        as: 'div',
        sx:{
          display: 'flex',
          flex: 3,
          py: 3,
          pr: 3,
          flexDirection: 'column'
        }
      },
      fields: [
        {
          object: 'field',
          input: 'input',
          type: 'text',
          name: 'image',
          label: 'Image',
          placeholder: 'url',
        },
        {
          object: 'field',
          input: 'input',
          type: 'text',
          name: 'imageCover',
          label: 'Image Cover',
          placeholder: 'url',
        },
        {
          object: 'field',
          input: 'textarea',
          name: 'summary',
          label: 'Summary',
          sx: {
            minHeight: 120,
          },
          placeholder: 'Summary.',
        },
        {
          object: 'field',
          input: 'textarea',
          name: 'content',
          label: 'Description',
          placeholder: 'Description.',
          sx: {
            minHeight: 250,
          }
        },
      ]
    },
    {
      object: 'container',
      properties: {
        as: 'div',
        sx:{
          bg: 'smoke',
          display: 'flex',
          flex: 1,
          p: 3,
          flexDirection: 'column'
        }
      },
      fields: [
        {
          object: 'field',
          input: 'input',
          type: 'text',
          name: 'name',
          label: 'Name',
          placeholder: 'Name',
        },
        {
          object: 'field',
          input: 'input',
          type: 'text',
          name: 'tagline',
          label: 'Tagline',
          placeholder: 'Tagline',
        },
        {
          object: 'field',
          input: 'input',
          type: 'text',
          name: 'price',
          label: 'Price',
          placeholder: 'Price',
        },
        {
          object: 'field',
          input: 'input',
          type: 'text',
          name: 'priceDiscount',
          label: 'Price Discount',
          placeholder: 'Price Discount',
        },
        {
          object: 'field',
          input: 'input',
          type: 'text',
          name: 'category',
          label: 'Category',
          placeholder: 'ethereum',
        },
        {
          object: 'field',
          input: 'input',
          type: 'text',
          name: 'tags',
          label: 'Tags',
          placeholder: 'important, easy',
        },
      ]
    }
    
    
  ],
  styled: {
     /**
     * Horizontal
     * 1 Row
     * Row: url, category, tags
     */
    horizontal: [
      {
        flex: 5
      },
      {
        flex: 2,
        mx: 2
      },
      {
        flex: 2,
        mx: 2
      },
    ],
    /**
     * Stacked
     * 1 Column
     * Column: url, category, tags
     */
    vertical: [
      {
        flex: 1,
        width: 1,
      },
      {
        flex: 1,
        width: 1,
      },
      {
        flex: 1,
        width: 1
      },
      {
        flex: 1,
        width: 1,
      },
      {
        flex: 1,
        width: 1,
      },
      {
        flex: 1,
        width: 1,
      },
      {
        flex: 1,
        width: 1,
      },
      {
        flex: 1,
        width: 1,
      },
      {
        flex: 1,
        width: 1,
      },
    ],

    /**
     * Stacked
     * 1 Column and 2 Rows
     * Row: url
     * Row: category, tags
     */
    stacked: [
      {
        width: 1,
      },
      {
        pr: 1,
        width: .5,
      },
      {
        pl: 1,
        width: .5
      },
    ]
  }
}