import React from 'react';
import { PropsWithChildren } from 'react';

interface BodyProps {
}

export default function Body({children} : PropsWithChildren<BodyProps>) {
    return (
        <div className="border-4 border-gray-300 bg-gray-100 p-2 h-5/6 text-gray-900">
            {children}
        </div>
    );
}