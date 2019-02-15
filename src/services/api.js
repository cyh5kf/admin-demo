export default {
  queryReportdirs: '/rest/reportdirs.do', // 获取主题报告文件夹目录
  loginUser: '/rest/login.do',  // 登录
  loginOut: '/rest/logout.do', // 退出
  querySubsetbydir: '/rest/subsetbydir.do', // 获取报表目录子集数据接口 




  queryRouteList: '/routes',

  queryUserInfo: '/user',
  login: 'POST /user/login',
  logoutUser: '/user/logout',
  queryUser: '/user/:id',
  queryUserList: '/users',
  updateUser: 'Patch /user/:id',
  createUser: 'POST /user',
  removeUser: 'DELETE /user/:id',
  removeUserList: 'POST /users/delete',

  queryPostList: '/posts',

  queryDashboard: '/dashboard',
}
