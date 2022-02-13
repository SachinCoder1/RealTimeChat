module.exports = {
  content: [
    './src/components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'back-image': "url('../../public/images/TopBgImage.jpg')",
        'back-image-url': "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')"      }
    },
    boxShadow: {
      '3xl': '0 35px 60px 5px rgba(0, 0, 0, 0.3)',
    }
  },
  plugins: [],
}
