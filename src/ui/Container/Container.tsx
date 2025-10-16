"use client";

import React from "react"
import { containerVariants } from "./styles/variants"


export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const Container: React.FC<ContainerProps> = ({children, size = 'md', className, ...props}) => {
    return (
        <div 
            className={containerVariants({ 
                size, 
                className
            })}
            {...props}
        >
            {children}
        </div>
    )
}
    
