export const schema = {
  project_id: '',
  version: 0,
  tables: {
    emojis: {
      type: 'collection',
      fields: {
        value: {
          type: 'string',
        },
      },
    },
  },
}
