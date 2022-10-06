import { atom, selector } from 'recoil'
import axios from 'axios'

export const counterState = atom({
  key: 'counterState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const userSetter = selector({
  key: 'userSetter',
  get: async () => {
    let user = null

    try {
      let { data } = await axios.get('https://jsonplaceholder.typicode.com/users/2')
      user = { user: data }
    } catch (e) {
      user = { user: e.message }
    }
    return user
  }
})