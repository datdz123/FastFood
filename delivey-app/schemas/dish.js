import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    {
    name:'name',
    type:'string',
    title:' Dish Name',
    validation: Rule => Rule.required()
    },

    {
      name:'description',
      type:'string',
      title:' Dish Description',
      validation: Rule => Rule.required()
    },

      {
        name:'image',
        type:'image',
        title:' image of the category',
        validation: Rule => Rule.required()
      },
      {
        name:'price',
        type:'number',
        title:' Price of the dish in USD',
        validation: Rule => Rule.required()
      },
  ],
})
