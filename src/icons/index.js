//导入所有的svg图标
//完成所有SvgIcon的全局注册

const svgRequire = import.meta.globEager('./svg/*.svg')

console.log(svgRequire)

