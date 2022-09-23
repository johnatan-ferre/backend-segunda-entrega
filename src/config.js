export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {//Datos propios, recordatorio.
        "type": "service_account",
        "project_id": "coderhouse32065ap",
        "private_key_id": "3e920819e2a02a10e87ab003e62d0a890c47b064",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDvMeNmPSN5mqGF\nZpE6Ciw2qApSFmEs6DQs4YVpRBhVoF7L4X7WFqIzyC+oKUwXvNjR7r78XWoGGxJE\nz01gKCbEHCbwNS7ud4TtwShnwHXJ59qTKHBQge6CPqj8WGge9czrDt1ER6i9Ctg/\neCrqAOxp8D8rBJKW45JkHbttz4jQ5FneuHZDG/RoOeT38vBmLg7hiTzdDOtXy4be\nxGY/GyHbsoiDpmsRvkZ2k1hstDP+naljMlBCSLRx+RU/3zkkMYhLz/6gu3ixcQdn\ne9D5oxwe5Y6lMfhcR2fe+LE0Q77DeohbT2yu+cbLFdoCv084B4N+WC6YwBoDoUv1\nI+rhvB3PAgMBAAECggEAFLG2QNQtS4oLS2VSTzkuFhR3wB5bje0RBokEZ9USXeYg\nDXeW56LRqbU6GkxoXu1hvNfxAhh64chZzkY5JYaTxAfDfqi7RLpmb8N0YXWPO0ap\n7G1lOjHjlrUhHaPwbi1J61Q/5HZmrORRTTxySgiGa6vzax9cJ13M/ohr/NYluhy8\nsC4AN+/vFLrLCNh8Gcp6CG1tLxT0LYEd05zOHNKL+ovsSIi2rj22Jjuoihx6449S\nXD+fdpqXLt229MlZSSW3IF2WL3z6uHxQ7FcOWIn36Mws795IiYdaUzh+Dk4UzPKz\nuEpdNEDLl/+2SoMBhZTFk2DeYGsSSbE4oNs35YgnkQKBgQD4cvGtA7JCdu3PYhUB\n+HTNMq5qJrS1iuRIzxhPdyfnTTWVKuiQSy/p60Bv2RObTEp755JndvYu0r4wyJX8\nMvMnMVbgdEgj2/2iTB3oc/e1gz2zwvpA+fAIWGHA0ql5nLW3McSEiNrB5iRLAQE6\nHwdr6p58ajJf3HKGo8rptGTGOwKBgQD2dvFMowG2ye6ieC4TKw5q0aUFnlGPt+Uy\nG9WMjIDIXkW9asGuwamGLMnjh8CEd7X4Ipb7kPx50Tcyu7g2mVY0wzYXLAlmd2be\ntg0mNxgxHa8ALO5Ixn0gBOHUiGzjwwKNTWNJvDMSlYLWg6AZ8oT2Eaxu2bJbZOEw\nUc5cQXnJfQKBgQC8zzWlA3McGZ+eg+5tIfE55DMyTpn0gUn9nwzdjzNPD5kR9Jrq\n1YjjHzpIBdNlqPPN9+2GHZz3doa9MiLxl5K8DT31s8kDH3NAPNJZzo/IbKWekCV4\n7bihzvDzBeVvm01pnDO5ePuucYTRT0Esd1o/g/zPljEUMscCVUWml8Yh8wKBgQDq\nVxN9o6vYic3NSum8Lf8qT6VRX0P7m4VgDJkSZvF4EjLLNDtuFxNB0Uowff3ttgke\nIn1eOm/kv6l1Iom32DngNxAyHhveAn+cGIsOH+pvoOKpDw+NwLRuAlZbB1BJizzc\n740NKdWBwQjDQCm1IiOL+Cf0yibMwXFfyRimHVdX3QKBgQDyZMGv1SRg91Y8VFtO\nAX3vTX5wgSQkMgxUVOohMUPYDyik5y9pDgAWJNt30eLrk3Ks1rnPO5BcvRas/bHQ\nTLUBzcCsvCxNz010dGcy9PsemyNaTB349HEoBRgJizKtw9w+VPw4C6mAeZYt4qMr\nOBJoEpORW/Gldkvit8/gqagy+Q==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-l1isi@coderhouse32065ap.iam.gserviceaccount.com",
        "client_id": "104793468910223005696",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-l1isi%40coderhouse32065ap.iam.gserviceaccount.com"
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'coderhouse',
            password: 'coderhouse',
            database: 'coderhouse'
        }
    }
}
