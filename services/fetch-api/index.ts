'use server'

const base = 'https://api.themoviedb.org/3'

export const fetchApi = async <T>(url: string, query?: string): Promise<T> => {
  console.log(`${base}/${url}${query ? `?${query}` : ''}`)
  const data = await fetch(`${base}/${url}${query ? `?${query}` : ''}`, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_KEY}`,
    },
  })

  return await data.json()
}
