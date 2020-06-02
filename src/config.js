export default {
  STRIPE_KEY: "pk_test_gZcKOH5tyH42c8Kru0RUjGa600NUcLpQRH",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-cloud-project"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://0rljnetrvb.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_QVtRxq4jt",
    APP_CLIENT_ID: "5bk0ln4escnbfp6dr4hiaopo7a",
    IDENTITY_POOL_ID: "us-east-1:b233b55a-d103-4010-b9b0-49c7a79aa8a7"
  }
};
