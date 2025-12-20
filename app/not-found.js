import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center text-center space-y-4">
      <p className="font-bold text-4xl">Not Found</p>
      <p className="font-semibold text-xl">Halaman tidak ditemukan</p>
      <Link href="/" >
        <button className='bg-sky-200 text-gray-600 px-4 py-2 rounded-lg'>Return HOME?</button> 
      </Link>
    </div>
  )
}