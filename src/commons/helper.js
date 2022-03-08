// 货币转换 这种单一功能微型组件直接导出
  export const formatprice = cents => {
    return (cents / 100).toLocaleString('zh', {
      style: 'currency', // 类型通用货币
      currency: 'CNY' // 人民币
    })
  }



