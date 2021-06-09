module.exports = ({ env }) => ({
  upload: {
    provider: 'google-cloud-storage',
    providerOptions: {
      bucketName: env('GCLOUD_BUCKET_NAME'),
      publicFiles: true,
      uniform: false,
      serviceAccount: env('GCLOUD_SERVICE_ACCOUNT'),
      baseUrl: `https://storage.googleapis.com/${env('GCLOUD_BUCKET_NAME')}`,
      basePath: '',
    },
  },
})
