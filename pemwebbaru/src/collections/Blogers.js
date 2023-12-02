import payload from 'payload';
import { isPayloadAdmin } from '../access/isPayloadAdmin';
/** @type {import('payload/types').CollectionConfig} */

const Blogers = {
    slug: 'bloger',
    auth: true,
    admin: {
        useAsTitle: 'username',
    },
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true
    },
    fields: [
        {
            name: 'username',
            type: 'text',
            required: true
        },
        {
            name: 'userrole',
            type: 'select',
            saveToJWT: true,
            hasMany: false,
            defaultValue: 'Reader',
            access: {
                create: isPayloadAdmin,
                update: isPayloadAdmin
            },
            options: [
                {
                    label: 'Reader',
                    value: 'reader'
                },
                {
                    label: 'Admin',
                    value: 'admin'
                },
                {
                    label: 'Editor',
                    value: 'editor'
                }
            ],

        }
    ]
}

export default Blogers