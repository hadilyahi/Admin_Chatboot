"use client";

import StyledBtn from '../Components/UI/StyledBtn'
import { useRouter } from 'next/navigation';

const ErrorPage = () => {
    const router = useRouter();

    const handleRetry = () => {
        router.refresh();
    }

    return (
        <main className='flex-1 min-h-screen flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-5 mb-80'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold mb-5'>Something Went Wrong</h2>
                    <p className='text-sm'>something went wrong try again later</p>
                </div>

                <StyledBtn onClick={handleRetry} className={'gap-2 bg-blue text-white px-4 py-1 rounded-lg text-sm hover:bg-sky-700 duration-300 hover:shadow-xl'}>
                    Try Again
                </StyledBtn>
            </div>
        </main>
    )
}

export default ErrorPage