import { router, pathMatchRegexp } from 'utils'
import api from 'api'

const { loginUser } = api

export default {
  namespace: 'login',

  state: {},

  effects: {
    *login({ payload }, { put, call, select }) {
      const data = yield call(loginUser, payload)
      const { locationQuery } = yield select(_ => _.app)
      if (data.success) {
        const user_token = data.user_token;
        window.localStorage.setItem('user_token', user_token);
        const { from } = locationQuery
        yield put({ type: 'app/query' })
        if (!pathMatchRegexp('/login', from)) {
          if (from === '/') router.push('/user')
          else router.push(from)
        } else {
          router.push('/user')
        }
      } else {
        throw data
      }
    },
  },
}
