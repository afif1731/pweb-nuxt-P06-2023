import payload from 'payload';
/** @type {import('payload/types').CollectionConfig} */

const Media = {
    slug: 'media',
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true
    },
    upload: {
        staticURL: '/media',
        staticDir: '../../vite-project/public/media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 200,
                height: 200,
                position: 'centre'
            },
            {
                name: 'konten',
                width: undefined,
                height: 500,
                position: 'centre'
            }
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*']
    }
}

export default Media