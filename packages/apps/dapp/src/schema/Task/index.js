export default {
  object: 'task',
  version: '1.0.0.',
  inputs: [
    'name',
    'status',
    'due_date',
    'project',
    'summary',
    'content',
    'images',
    'files',
    'assignees',
    'category',
    'tags',
  ],
  fields: [
    {
      object: 'field',
      input: 'input',
      type: 'text',
      name: 'name',
      label: 'Name',
      placeholder: 'Task Name',
    },
    {
      object: 'field',
      input: 'input',
      type: 'checkbox',
      name: 'status',
      label: 'Complete Status',
      placeholder: 'Status',
      properties: {
        hidden: true
      }
    },
    {
      object: 'field',
      input: 'input',
      type: 'text',
      name: 'project',
      label: 'Project Reference',
      placeholder: 'Project Name or Address (0x...)',
    },
    {
      object: 'field',
      input: 'input',
      type: 'date',
      name: 'due_date',
      label: 'Due',
      placeholder: 'Due Date',
    },
    {
      object: 'field',
      input: 'textarea',
      name: 'summary',
      label: 'Summary',
      placeholder: 'Task summary.',
    },
    {
      object: 'field',
      input: 'textarea',
      name: 'content',
      label: 'Description',
      placeholder: 'Task description.',
      properties: {
        minHeight: 250,
      }
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
    {
      object: 'field',
      input: 'input',
      type: 'text',
      name: 'assignees',
      label: 'Assigned',
      placeholder: '0x...',
    },
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
        my: 2,
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