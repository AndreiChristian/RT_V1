import { TEMPLATE_CONTENT } from '@/models/template'
import { create } from 'zustand'


interface EditingActions {
  setTitle: (value: string) => void
  setSubtitle: (value: string) => void
  setAboutMe: (value: string) => void
}

export const useEditingStore = create<TEMPLATE_CONTENT & EditingActions>()((set) => ({
  title: "Dummy Title",
  subtitle: "Dummy Subtitle",
  aboutMe: "Dummy About Me",
  setTitle: (value) => set(() => ({ title: value })),
  setSubtitle: (value) => set(() => ({ subtitle: value })),
  setAboutMe: (value) => set(() => ({ aboutMe: value })),
}))
