import React from 'react'

const Widget = () => {
  return (
    <section className='w-full h-full space-y-5'>
        <h1 className='text-3xl text-start font-bold'>Widget</h1>

        {/* content */}
            <div className='w-full h-full grid grid-cols-2 gap-5'>
                <Image 
                    src={""}
                    alt="class"
                    width={500}
                    height={500}
                />
            </div>

    </section>
  )
}

export default Widget