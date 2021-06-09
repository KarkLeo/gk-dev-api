module.exports = {
  upload: {
    provider: 'google-cloud-storage',
    providerOptions: {
      bucketName: 'gk-dev-images',
      publicFiles: true,
      uniform: false,
      serviceAccount: {
        "type": "service_account",
        "project_id": "golden-key-dev",
        "private_key_id": "5f8d731826e40f5152be3fcb15975261738a13c9",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfZil/h/m2RSjA\nEhtEE+R2wqxASDPOqmYDxUYL3Yu70MgOYdfi/i1RuKyidQNcOQmqq9MwMsxxeqUf\n/DIsWnb8/ZeAauj8bDdo8IYEorTzhdMr+/QsW4trys3OQqia7d4cHNULVgM26Q/m\n+GQToleeMFLm6T8RIT/AKIT8jLVQ+VQqHhqGYNG2Haid13fO3mIt/MTxtZC6iqq3\nBalUIHcfwcWgH3ojREdw8mmS6I/DcTjqlea36ie5VNcr3kLymlkxLsnaiJXThz+D\nx4w66jptE+RUAOFz5NpzVPw7ZVAB9WJBD7fQFGByYv/ZtbqxnmTLyEUKtPAtIaga\nZ/7dib1pAgMBAAECggEAJchzFLo3/Db3elOwZ9opQOdTKieTNC0a4lDsEhrxKNNL\n4HDb2f/y4RibvyRqZ/1TJ8Pz2sxnvoxaQLMod2/4HW7E7xkoYdEK71J4CfhBWSoD\nDL17utn2OdZII1iUm6i/ib1h2H6KY4UqEk8Vdbv49dOxiu+F1fsiH9va7fwybF9V\ngMGM4UhfiN5QRR4eoEf/M4UfU6Y3Ymt/flyj0Ssnta6l0ijpSMiwnSTH3ONSJ5DW\nfkrnW+Aa2kZgxaSu76WD0ViyiorO/58fKKQ+V4lcEG0wFsELB6+9MjP/3YR9MnPe\n0RlIVRhSNn7QV/giGTS5neD/OqAzitBfrdV3PGp42wKBgQDPvmz/ezry/zVXDdF1\n+QUfJrc2WYS5QWSBdb6relhqxUTIBHI0NWvrIh7Py7/SkBTsnplOG/URqmx9e7Fu\nQKMdnlRfQ215NX7oaogxyu1Ckv7mhtIclrJzI5B/azF1yYvXUtXA95rUu+ZPXeFC\njAG7nnjowN2Ng8tcT6ZVapZ50wKBgQDEbOTZT02BjVtopsRVIeIBJK6kB5/FxaYL\nCLN/YeCfAbt21YhJNIz4AiyU1NNoZBlAG63MEebA5xTLbdJER8PGtkA0GvGoNSfH\nRRe4cJpSDkB0qRUQisl24JxEsTcg2BBmopWIjxS+f04hHbdZWXeq2y7Lmuen9RHd\nghRpjUoKUwKBgASRWlIvwncPV3vniOCALjWmI0clpr5wCqayERQyJ3mJht6jAmPV\nfN75rBXDlB8sHdmqDxLhmHzf82y66IbVEwEWtyI1GFYe8ABqPz5hCOB63PHyqvIH\n+jp/4LB8ieTeHp4IazzH9PaSfxjlpotRCsS2UlBD1VtEN5d7BNxB8LcTAoGBAKwP\nt2ekUABsEuZZLyJjy9W0jEajZxGXURvZQ2MSGfEvU0eFRRzbK6EURnkY9Rc8l+HQ\nXS2lgLz5rv2D9exZ8OTgQN1jvMvbxDyKCX1HJec7FLscYZdb+55monyJwADFQ5ik\nUtiMfV9hpM7deP6LoIfJ9/PifYpi4oNmrvrHCVSBAoGBALqQVEAAZjLcPhEqtw4H\nXEwAMxpg440HEOCAaHPsL6Nf462lOt923ibh2Fi8/pGhvdoMpqAbVtk/Sj99QVqr\nFJFBum+3OYBrV52Ju1r2+MJIy//pd91gTIZXnJjv+ZFMNiTmNyV+rhbVajnM/UE5\nZZ0k8O1+QxvNmzLMOxTA1pFQ\n-----END PRIVATE KEY-----\n",
        "client_email": "gk-developer@golden-key-dev.iam.gserviceaccount.com",
        "client_id": "114691141605666999580",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/gk-developer%40golden-key-dev.iam.gserviceaccount.com"
      },
      baseUrl: 'https://storage.googleapis.com/gk-dev-images',
      basePath: '',
    },
  },
}
