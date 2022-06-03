import { useEffect, useRef, useState } from "react";

export default function useIsMobile(size: number) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    const changeSize = () => setWindowWidth(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener('resize', changeSize)
        
        return () => window.removeEventListener('resize', changeSize)
    })

    return windowWidth <= size
}