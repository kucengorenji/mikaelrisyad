import React from 'react';

const PageContainer: React.FC = ({ children }) => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            {children}
        </div>
    )
}

export default PageContainer;
