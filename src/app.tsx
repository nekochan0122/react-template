import { Counter } from '~/components/counter'

export function App() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl font-bold text-red-400 underline'>
        Hello world!
      </h1>
      <Counter />
    </div>
  )
}
