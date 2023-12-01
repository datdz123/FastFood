import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
    name:'name',
    type:'string',
    title:' Category Name',
    validation: Rule => Rule.required()
    },

    {
      name:'description',
      type:'string',
      title:' Category Description',
      validation: Rule => Rule.required()
    },

      {
        name:'image',
        type:'image',
        title:' image of the category',
        validation: Rule => Rule.required()
      },
  ],
})
