import { ModalType } from '@/types'
import { create } from 'zustand'

interface ModalStore {
    type: ModalType | null
    isOpen: boolean
    onOpen: (type: ModalType) => void
    onClose: () => void
}

export const useModal = create<ModalStore>((set) => ({
    isOpen: false,
    type: null,
    onOpen: (type) => set({ isOpen: true, type }),
    onClose: () => set({ isOpen: false, type: null })
}))
