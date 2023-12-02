import payload from 'payload';
/** @type {import('payload/types').CollectionConfig} */

const Blogs = {
    slug: 'blog',
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true
    },
    fields: [
        {
            name: 'judulblog',
            type: 'text',
            maxLength: 100,
            required: true
        },
        {
            name: 'blogimg',
            type: 'upload',
            relationTo: 'media',
            required: true
        },
        {
            name: 'thistp',
            type: 'relationship',
            relationTo: 'toppick',
            required: true
        },
        {
            name: 'kontenblog',
            type: 'richText',
            required: true
        },
        {
            name: 'uploader',
            type: 'relationship',
            relationTo: 'bloger',
            required: true
        }
    ]
}

export default Blogs