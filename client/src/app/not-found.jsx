import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
    return (
        <main className='flex-1'>
            <div className='flex flex-col items-start gap-5 p-20'>
                <div>
                    <h1 className='text-3xl font-bold'>404 - Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                </div>

                <Link href="/" className='bg-blue text-white px-4 py-2 rounded shadow-md'>Go Home</Link>
            </div>
        </main>
    )
}

export default NotFoundPage