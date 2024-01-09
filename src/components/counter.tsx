import { useState } from 'react'

import { cx } from '~/lib/util'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className='select-none [&>button]:rounded [&>button]:border [&>button]:p-2.5'>
      <button onClick={() => setCount(c => c + 1)}>
        ➕
      </button>

      <span className={cx('mx-2 text-xl font-bold', {
        'text-gray-500': count === 0,
        'text-red-500': count < 0,
        'text-green-500': count > 0,
      })}
      >
        {count}
      </span>

      <button onClick={() => setCount(c => c - 1)}>
        ➖
      </button>
    </div>
  )
}
