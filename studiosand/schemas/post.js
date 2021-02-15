export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: "date",
			type: "datetime",
    },
    {
      name: "description",
			type: "text",
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: "link",
			type: "url",
    },
  ],
}
