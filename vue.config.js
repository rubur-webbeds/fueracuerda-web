module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fueracuerda-web/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
