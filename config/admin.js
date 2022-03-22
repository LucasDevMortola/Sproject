module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0b77fe2220d80d08eafb034d8dc091d7'),
  },
});
