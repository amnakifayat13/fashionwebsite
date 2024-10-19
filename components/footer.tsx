

import Image from "next/image"


function Footer(){
    return(
        <div>
            <div className="footer">
                <div className="flex ml-32">
                    <div className=" mt-20 ml-48">
                        <h1 className=" color text-6xl font-extrabold ">Amna</h1>
                        <h3 className="color text-2xl font-bold mt-10">Social Media</h3>
                        <div className="flex gap-6 mt-6">
                            <div><Image src="/Facebook.png" alt="" width={40} height={40}/></div>
                            <div><Image src="/Twitter.png" alt="" width={40} height={40}/></div>
                            <div><Image src="/Instagram.png" alt="" width={40} height={40}/></div>
                        </div>
                        </div>
               
                
                    <div className="color mt-20 ml-48">
                    <div className="text-2xl font-semibold"><h3>SHOP</h3></div>
                    <div className="text-xl mt-6"><h2>Products</h2></div>
                    <div className="text-xl mt-6"><h2>Overview</h2></div>
                    <div className="text-xl mt-6"><h2>Pricing</h2></div>
                    <div className="text-xl mt-6"><h2>Release</h2></div>
                </div>
                <div className="color mt-20 ml-48">
                <div className="text-2xl font-semibold"><h3>COMPANY</h3></div>
                    <div className="text-xl mt-6"><h2>About Us</h2></div>
                    <div className="text-xl mt-6"><h2>Contact</h2></div>
                    <div className="text-xl mt-6"><h2>News</h2></div>
                    <div className="text-xl mt-6"><h2>Support</h2></div> 
                </div>
                <div className="color mt-20 ml-48">
                    <div className="text-2xl font-semibold"><h3>STAY UP TO DATE</h3></div>
                    <div className="flex">
                    <div className="mt-6"><input type="email" id="email" name="email" placeholder="Enter your Email" required/></div>
                    <div className="mt-6"><input type="submit" value="SUBMIT " id="submit"/></div>
                    </div>
                </div>
              
                </div>
                <div className="flex gap-4 bttom mt-32 ml-48">
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