// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://YuvalKrin:Y1u2v3al@zersheva-unr9s.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dgmvbx86i/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
