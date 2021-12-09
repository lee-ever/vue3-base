module.exports = {
  // 当前目录为根目录 eslint规则限制到该目录下
  root: true,
  // 表示启用eslint检测环境
  env: {
    // node环境下
    node: true
  },
  // eslint基础配置需要继承配置
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  // 解析器
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 需要启用的规则以及各自的错误级别
  // off 关闭规则
  // warn 1 警告
  // error 2 错误级别
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off'
  }
}
