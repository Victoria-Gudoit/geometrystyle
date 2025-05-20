import React, { useEffect, useState } from 'react';
import "./backToTopButton.css"

export const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 300) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)

            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return <div>
      
        {backToTopButton && <a onClick={scrollUp} href="#top" id={"back-to-top"} className="back-to-top" title="Back to top">▲</a> }
    </div>;
}

