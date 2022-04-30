const nodeEnv = process.env.NODE_ENV

module.exports = {
  nodeEnv,
  isDevelopment: nodeEnv === 'dev',
  isProduction:  nodeEnv === 'prod',
}
