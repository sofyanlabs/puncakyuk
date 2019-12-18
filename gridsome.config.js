// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Puncakyuk',
  siteDescription: 'Sewa villa di puncak bogor murah dan mudah, kami memiliki pilihan villa di puncak terlengkap! bisa banyak orang, ada kolam renang dengan harga sesuai budget', 
  plugins: [
    {
    use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: 'tailwind.config.js',
      }
    },
    {
      use: 'gridsome-plugin-svg',
    }
  ]
}
