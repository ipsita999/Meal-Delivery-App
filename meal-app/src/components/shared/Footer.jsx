import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="left">
                <img  width="50px" height="50px" src="https://s3-alpha-sig.figma.com/img/fd6a/3660/f67d81782087880e05fb511ba3265d80?Expires=1577664000&Signature=XwUKsoF-u1pbnlLwD-2JGoQXu92L7q0vR5pZDnNq01aKg9x326UndJ6Ikt9rrFQTzP63bdtIbGvVu6nZ9YhzGYz~R5ItDuu2Mg7FQsWRBtgSu2KLxOzyDYXGXftYZLI-0B4iBhy5r5l2BHxbOSvSu0yx54TrWSz5E5A5-ZasEzeNgezo3BUJVu6iSJG0aFxghe35iSLJ4eRiN3YqjrbuAFBKhnJE-QP-shv5GzWZcVqxNCDuPEBs3hQLOs14~NXPsufxluvmNPjjHWmO5f1jQdhtSL-oYOqaHa2LgkqfItw34t8jdwfia4rgqOkU0iCRknFiR1EY45~B~zi07zIFJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""/>
                <p>NO PREP MEALS</p>
            </div>
            <div className="mid">
                <div className="media-icon">
                    <img src="src/assets/fb.png" alt=""/>
                    <img src="src/assets/twitter.png" alt=""/>
                    <img src="src/assets/insta.png" alt=""/>
                </div>
                <div className="copyright">Copyright © 2019 No Prep Meals ® </div>
            </div>
            <div className="right">
                <p>Contact</p>
                <p>support@noprepmeals.com</p>
                <p>+1(800)-457-8793</p>
            </div>
        </footer>
    )
}

export default Footer