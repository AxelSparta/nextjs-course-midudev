'use client'

import { useDebouncedCallback } from 'use-debounce'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

export default function Search ({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams() // nos permite acceder a los parametros de la url {page: '1', query: 'hello'}
  const pathName = usePathname() // nos permite acceder a la ruta actual example '/dashboard/invoices'
  const { replace } = useRouter()
  const handleChange = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams) // este objeto nos permite manipular los parametros de la url más facilmente
    params.set('page', '1')
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathName}?${params.toString()}`)
  }, 500)
  return (
    <div className='relative flex flex-1 flex-shrink-0'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        onChange={e => handleChange(e.target.value)}
        className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
    </div>
  )
}
