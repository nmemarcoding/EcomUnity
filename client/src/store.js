import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import localforage from 'localforage'

let store = (set) => ({
  userInf: {},
  addUserInfo: (userInfo) => set({ userInf: userInfo }),
})

store = devtools(store)
store = persist(store, { name:'userInfo'})

const useStore = create(store)

export default useStore
