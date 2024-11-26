"use client";

import Link from 'next/link'
import StyledMenuBtn from './StyledBtn';
import { useState } from 'react';
import StyledModal from './StyledModal';
import { BsThreeDotsVertical } from 'react-icons/bs';
import StyledBtn from './StyledBtn';

const TableRow = ({ cutomer }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div key={cutomer.id} className='flex items-start justify-between border border-zinc-200 p-3'>
            <div className="w-5 aspect-square flex items-center">
                <input type="checkbox" name="selectAll" id="selectAll" />
            </div>

            <div className="w-5 aspect-square flex items-center">
                {cutomer.id}
            </div>

            <Link href={`/workflows/${cutomer.id}`} className="flex-[0.2] hover:underline">
                {cutomer.name}
            </Link>

            <div className="flex-[0.3]">
                {cutomer.description}
            </div>

            <div className="flex-[0.2] flex justify-end">
                <span className={`px-2 py-1 text-white rounded-full ${cutomer.status === "Paid" && "bg-green"} ${cutomer.status === "Unpaid" && "bg-red"} ${cutomer.status === "Open" && "bg-yellow"} ${cutomer.status === "Inactive" && "bg-gray"} ${cutomer.status === "Due" && "bg-red-800"}`}>
                    {cutomer.status}
                </span>
            </div>

            <div className="flex-[0.2] flex justify-end">
                {cutomer.rate}
            </div>

            <div className="flex-[0.2] flex justify-end">
                {cutomer.balance}
            </div>

            <div className="flex-[0.2] flex justify-center">
                {cutomer.deposit}
            </div>

            <StyledBtn onClick={toggleMenu} className={`rounded-full flex-[0.05] aspect-square justify-center`}>
                <BsThreeDotsVertical />
            </StyledBtn>

            <StyledModal isOpen={isMenuOpen} onClose={toggleMenu} className='relative'>
                <StyledBtn onClick={toggleMenu} className={'absolute top-[-5px] right-[-5px] bg-red-500 text-white rounded-full w-5 aspect-square flex items-center justify-center'}>X</StyledBtn>

                <div className='flex flex-col gap-2'>
                    <StyledBtn className='bg-green text-white px-4 py-1 rounded-lg'>Edit</StyledBtn>
                    <StyledBtn className='bg-red-500 text-white px-4 py-1 rounded-lg'>delete</StyledBtn>
                </div>
            </StyledModal>
        </div>
    )
}

export default TableRow