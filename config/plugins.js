module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    actionOptions: {
      upload: {
        folder: 'gk-strapi-test'
      },
      delete: {},
    },
    breakpoints: {
      large: 2000,
      medium: 1000,
      small: 600,
    }
  },
})
