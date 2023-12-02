import payload from 'payload';
/** @type {import('payload/types').CollectionConfig} */

const Toppick = {
    slug: 'toppick',
    admin: {
        useAsTitle: 'tpname',
      },
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true
    },
    fields: [
        {
            name: 'tpname',
            type: 'text',
            maxLength: 20,
            required: true
        },
        {
            name: 'tpslug',
            type: 'text',
            maxLength: 20,
            required: true
        }
    ]
}

export default Toppick