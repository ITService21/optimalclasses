import React from 'react';

export default function Loader({ loading }) {
    return (
        <div>
            {loading && <div className='w-[100vw] h-[100vh] sticky bg-transparent flex flex-col justify-center items-center'>      <div
                className="inline-block h-8 w-8 md:h-16 md:w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>

            </div>  
            {/* <div>Please Wait...</div>  */}
            </div>}
        </div>
    );
}