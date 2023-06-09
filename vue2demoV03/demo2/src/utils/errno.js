const msg = {
    '-1': '认证失败',
    '2': '路由错误',
    '3': '数据库操作失败',
    '4': 'session失败',
    '5': 'socket失败',
    '6': '目标不存在',
    '7': '目标已存在',
    '8': '目标没有操作权限',
    '9': '参数不正确',
    '10': '应急网元不存在',
    '11': '验证码失败',
    '12': '登录失败次数过多,请稍后重试',
    '13': '数据库初始化失败',
    '14': '数据库升级失败',
    '15': '图片获取向量失败',
    '16': '数据库不存在',
    '17': '数据库表不存在',
    '18': '数据库访问失败',
    '19': '数据库连接超时',
    '20': '数据库端口错误',
    '90': 'token不存在',
    '91': 'token无效',
    '101': '用户不存在或密码不正确',
    '102': '用户不存在或密码不正确',
    '103': '没有权限',
    '104': '已经在线',
    '105': '已经在线',
    '106': '删除操作失败',
    '107': '设置操作失败',
    '108': '添加操作失败',
    '201': '拨号呼叫失败',
    '1001': '设置值不在取值范围',
    '1002': '操作不支持',
    '1003': '参数错误',
    '1004': '报文格式错误',
    '1005': '资源错误',
    '1006': '操作失败',
    '1007': '操作没有权限',
    '1008': '通道不在线',
    '1009': '功能失效'
};
  
export function checkMsg (code) {
    return msg[code]
        ? msg[code]
        : '未知错误';
}