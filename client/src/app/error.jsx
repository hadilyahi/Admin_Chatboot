"use client";

import StyledBtn from '../Components/UI/StyledBtn'
import { useRouter } from 'next/navigation';

const ErrorPage = () => {
    const router = useRouter();

    const handleRetry = () => {
        router.refresh();
    }

    return (
        <main className='flex-1'>
            <div>
                <div>
                    <h2>Something Went Wrong</h2>
                    <p>something went wrong try again later</p>
                </div>

                <StyledBtn onClick={handleRetry}>
                    Try Again
                </StyledBtn>
            </div>
        </main>
    )
}

export default ErrorPage