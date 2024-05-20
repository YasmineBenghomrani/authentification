import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  accessToken: null,
  setUser: set(({ user }) => user),
  setAccessToken: set(({ accessToken }) => accessToken),
}));

export default useStore;
