/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx8ba08503924035c0',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '285b0267d3b2c2626e377f5601504dfe',

  PROVINCE: '浙江',
  CITY: '宁波',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小夏同学',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'og-xy6X7oeyVaHjlF3v8SZbt2vac',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'TZL-1JbchX4L4QNa7iWDLPdlo0zEgxe1q3QLZ57vsw4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-16',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小夏同学', year: '2003', date: '08-20',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小夏同学', year: '2003', date: '09-16',
        },
        {
          type: '节日', name: '元旦', year: '2024', date: '01-01',
        },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'wxid_1iolkde43bgj22',
    }
  ],

}

module.exports = USER_CONFIG

