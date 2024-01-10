const path = require('path');

module.exports = function override(config, env) {
  // SASS 설정 추가
  const oneOfRule = config.module.rules.find(rule => rule.oneOf);
  
  if (oneOfRule) {
    oneOfRule.oneOf.unshift({
      test: /\.(scss|sass)$/,
      use: [
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        {
          loader: require.resolve('sass-loader'),
          options: {
            additionalData: `@import "@/scss/common.scss"; $imagePath: '${process.env.REACT_APP_IMAGE_PATH}';`,
          },
        },
      ],
    });
  }

  // 경로 설정 추가
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src'),
  };

  return config;
};