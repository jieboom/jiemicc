// createBem 函数分两次调用 第一次确定前缀  第二次确定具体名称
/**
 * @param {string} name bem前缀
 * @param {string} block 功能模块
 * @param {Array} mod 修饰符
 * case
 * 默认前缀为 jiemicc
 * bem('text') === jiemicc__text
 * bem(['red']) === jiemicc--red
 * bem('text',['red]) jiemicc__text--red
 * bem('text',['red','green']) === jiemicc__text--red  jiemicc__text--green
 */
const blockLink = '__';
const modifyLink = '--';
const joinBlock = (name, block) => (block ? name + blockLink + block : name);

const createBemNamePrefix = name => (block, modify) => {
  const className = '';
};
