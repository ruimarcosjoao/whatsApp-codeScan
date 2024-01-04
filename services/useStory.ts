import {create} from 'zustand'

type StoryProps = {
    count: number;
    increment: () => void;
    decrement: () => void;
}
const useStory = create<StoryProps>((set) => ({
    count: 0,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1})),
}))

export default useStory