

import Image from "next/image"


function Footer(){
    return(
        <div>
            <div className="footer">
                <div className="footermain">
                    <div className="personal">
                    <div className="name"><h1>Amna</h1></div>
                    <div className="social"><p> Social Media</p></div>
                    <div className="icons">
                        <div><Image src="/Facebook.png" alt="" width={30} height={30}/></div>
                        <div><Image src="/Twitter.png" alt="" width={30} height={30}/></div>
                        <div><Image src="/Instagram.png" alt="" width={30} height={30}/></div>
                    </div>
                    </div>

                    <div className="shop">
                        <div className="shopname"><h3>SHOP</h3></div>
                        <div className="menu"><p>Products</p></div>
                        <div className="menu"><p>Reviews</p></div>
                        <div className="menu"><p>Pricing</p></div>
                        <div className="menu"><p>Release</p></div>
                    </div>

                    <div className="company">
                        <div className="shopname"><h3>COMPANY</h3></div>
                        <div className="menu"><p>About us</p></div>
                        <div className="menu"><p>Contact</p></div>
                        <div className="menu"><p>News</p></div>
                        <div className="menu"><p>Support</p></div>
                    </div>

                    <div className="update">
                        <div className="shopname"><h3> STAY UPTO DATE</h3></div>
                        <div className="inline mb-2 sm:flex">
                    <div className="mt-6"><input type="email" id="email" name="email" placeholder="Enter your Email" required/></div>
                    <div className="mt-6"><input type="submit" value="SUBMIT " id="submit"/></div>
                    </div>
                    </div>
                    
                </div>
                <div className="flex text-sm sm:flex gap-4 bttom mt-32 ml-48">
                    <div className="line"></div>
                    <div className="footerend"><p>Terms</p></div>
                    <div className="footerend"><p>Privacy</p></div>
                    <div className="footerend"><p>Cookies</p></div>
                </div>

                
            </div>

        </div>
    )
}

export default Footer