module.exports = {
  // 因爲一個資料夾放一個主題，所以設定爲相對路徑
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    host: '192.168.56.10',
    port: 8080,
    hot: true
  }
}
