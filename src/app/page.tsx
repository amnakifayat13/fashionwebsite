import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* page1 */}
    <div className=" main w-full  h-screen text-center" >
    <div className="flex ">
      <div><Image className="mx-48 pt-14 "src="/discover.png" alt="text" width={649} height={200}/>
      <Image className=" mx-48 pt-10"src="/text.png" alt="text" width={565} height={565}/>
     <button className="explore">Explore Now</button>
     
      </div>
      <div><Image className="mx-96 pt-14" src="/Mask group.png" alt="text" width={570} height={200}/></div>
    </div>
    </div>
    {/* page2 */}
    <div className="text-center text-6xl mt-10 font-serif text-green-950">Best Selling</div>
    <h5 className="text-center mt-3 text-2xl text-green-950"> Get in on the trend with our curated selection of best-selling styles</h5>
    <div className="grid grid-cols-3 m-10 ml-48 " >
      <div><Image className="img1"src="/img1.png" alt="img1" width={430} height={566}/></div>
      <div><Image className="img2" src="/img2.png" alt="img1" width={430} height={566}/></div>
      <div><Image  className="img3" src="/img3.png" alt="img1" width={430} height={566}/></div>
      <div className="text-center mr-32 mt-20 text-lg font-extrabold">Regular Fit Long Sleeve Top
         <div className="text-slate-500"> $38.99   |     5.0<span className="text-2xl text-yellow-500">&#9733;</span></div> </div>
      <div className="text-center mr-32 mt-20 text-lg font-extrabold">Black Crop Tailored Jacket 
        <div className="text-slate-500"> $62.99   |     4.9 <span className="text-2xl text-yellow-500">&#9733;</span></div></div>
        <div className="text-center mr-32 mt-20 text-lg font-extrabold">White Short Sleeve Shirt 
        <div className="text-slate-500"> $35.99   |     4.0 <span className="text-2xl text-yellow-500">&#9733;</span></div></div>
    </div>
    <div className="mt-24 flex justify-center items-center">
    <button ><Image src="/Frame 2.png" alt="btn" width={224} height={65}/></button>
    </div>


    {/* page3 */}

    
    <div className="text-center text-6xl mt-48 font-serif text-green-950">Our Products</div>
    <div className="mt-24 flex justify-center items-center" >
      <ul className="flex gap-48 text-xl text-green-950">
        <li>SALE</li>
        <li>HOT</li>
        <li>NEW ARRIVALS</li>
        <li>ACCESSORIES</li>

      </ul>
    </div>
    <div className="grid grid-cols-4 m-10 ml-48 " >
      <div><Image src="/img4.png" alt="img" width={318} height={378}/></div>
      <div><Image className="img5" src="/img7.png" alt="img" width={318} height={378}/></div>
      <div><Image src="/img6.png" alt="img" width={318} height={378}/></div>
      <div><Image src="/img7.png" alt="img" width={318} height={378}/></div>
      <div className="text-center mr-32 mt-20 text-lg font-extrabold">Spread Collar Shirt
      <div className="text-slate-500"> $48.99   |     5.0 <span className="text-2xl text-yellow-500">&#9733;</span></div></div>
      <div className="text-center mr-32 mt-20 text-lg font-extrabold">Gray Solid Podded Shirt 
      <div className="text-slate-500"> $32.99   |     4.7 <span className="text-2xl text-yellow-500">&#9733;</span></div></div>
      <div className="text-center mr-32 mt-20 text-lg font-extrabold">White Shine on me blouse 
      <div className="text-slate-500"> $42.99   |     4.8 <span className="text-2xl text-yellow-500">&#9733;</span></div></div>
      <div className="text-center mr-32 mt-20 text-lg font-extrabold">Gray solid podded shirt 
      <div className="text-slate-500"> $32.99   |     4.7 <span className="text-2xl text-yellow-500">&#9733;</span></div></div>
      <div className="mt-12"><Image src="/img8.png" alt="img" width={318} height={378}/></div>
      <div className="mt-12"><Image src="/img9.png" alt="img" width={318} height={378}/></div>
      <div className="mt-12"><Image src="/img10.png" alt="img" width={318} height={378}/></div>
      <div className="mt-12"><Image className="img8" src="/img11.png" alt="img" width={318} height={378}/></div>
      <div className="text-center mr-32 mt-20 text-lg font-extrabold">Printed Loose T-Shirt 
      <div className="text-slate-500"> $39.99   |     5.0 <span className="text-2xl text-yellow-500">&#9733;</span></div></div>
      <div className="text-center mr-32 mt-20 text-lg font-extrabold">Summer Wind Crop Shirt 
      <div className="text-slate-500"> $39.95   |     4.7 <span className="text-2xl text-yellow-500">&#9733;</span></div></div>
      <div className="text-center mr-32 mt-20 text-lg font-extrabold">Tailored Jacket 
      <div className="text-slate-500"> $46.00   |     4.9 <span className="text-2xl text-yellow-500">&#9733;</span></div></div>
      <div className="text-center mr-32 mt-20 text-lg font-extrabold"> Solid Round Neck T-Shirt 
      <div className="text-slate-500"> $36.00  |     5.0 <span className="text-2xl text-yellow-500">&#9733;</span></div></div>
      
    </div>

    {/* // page4 */}
    <div className="bg-green-200 w-8/12 h-4/6 ml-80" >
    <div className="flex gap-20">
      <div><Image src="/img12.png" alt="img12" width={482} height={596}/></div>
      <div className="">
      <div className="text-center text-6xl mt-48 font-serif text-green-950">Exclusive Offer</div>
      <div className="text-2xl  text-green-950 "><p>Unlock the ultimate style upgrade with our exclusive<br/> offer Enjoy savings of up to 40% off on our latest new Arrivals</p></div>
      <div className="flex gap-6 mt-6">
        <span className="bg-white p-8">
          <p className="text-4xl text-center text-green-950 font-bold">06</p>
          <p className="text-xl text-center text-green-950">Days</p>
        </span>
        <span className="bg-white p-8">
          <p className="text-4xl text-center text-green-950 font-bold">18</p>
          <p className="text-xl text-center text-green-950">Hours</p>
        </span>
        <span className="bg-white p-8">
          <p className="text-4xl text-center text-green-950 font-bold">48</p>
          <p className="text-xl text-center text-green-950">Min</p>
        </span>
      </div>
      <div className="buy-btn"><button className=" text-center">BUY NOW</button></div>
      </div>

    </div>
     </div>
     {/* page5 */}
     <div className="text-center text-6xl mt-48 font-serif text-green-950">Designer Clothes For You</div>
     <div className="text-center text-2xl mt-16 font-serif text-green-950"><p>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p></div>
    <div className="grid grid-cols-3 ml-36 mt-24">
      <div><Image className="img13" src="/img13.png" alt="img13" width={430} height={566}/></div>
      <div><Image src="/img14.png" alt="img14" width={430} height={566}/></div>
      <div><Image src="/img15.png" alt="img15" width={430} height={566}/></div>
      <div className=" text-2xl text-green-950 font-bold ml-32 mt-10"><p>Accessories</p></div>
      <div className="text-2xl text-green-950 font-bold ml-32 mt-10"><p>Dresses</p></div>
      <div className="text-2xl text-green-950 font-bold ml-32 mt-10"><p>Outerwear</p></div>
      <div className="ml-20 text-xl text-green-950 "><p>complete your ensemble with<br/>deigner accessories such as<br/>handbags,scarves,belts and hats</p></div>
      <div className="ml-20 text-xl text-green-950"><p>Explore a stunning range of designer<br/>dresses, including evening gowns<br/>and chic day dresses</p></div>
      <div className="ml-20 text-xl text-green-950"><p>Browse luxurious designer's coats,<br/>jackets, and blazers to stay stylish<br/>warm during colder seasons</p></div>
    </div>
    {/* page6 */}
    <div className="text-center text-6xl mt-48 font-serif text-green-950">Feedback Corner</div>
    <div className="grid grid-cols-3 ml-32 mt-32">
      <div className="bg-gray-100 w-96 h-72 ml-6" >
        <div className="text-4xl text-green-950 mt-6 ml-4 "><p>"</p></div>
        <div className="text-2xl text-green-950 mt-6 ml-4"><p>Emily Wilson</p></div>
        <div className=" text-green-950 mt-6 ml-4"><p>
        The customer experience was exceptional from<br/>start to finish. The website is user-friendly,the<br/>
        checkout process was smooth,and the clothes <br/>I orderd fit perfectly. I am beyond satisfied.
        </p>
        </div>
      </div>
      <div className="bg-green-200 w-96 h-72">
        <div className="text-4xl text-green-950 mt-6 ml-4"><p>"</p></div>
        <div className="text-2xl text-green-950 mt-6 ml-4"><p>Sarah Thomas</p></div>
        <div className=" text-green-950 mt-6 ml-4"><p>I absolutely love the quality and style of the <br/>clothing I purchased from this website.Customer<br/>
        service was outstanding, and I receieved my order<br/>
        quickly. Highly recommended.
        </p>
        </div>
      </div>
      <div className="bg-gray-100 w-96 h-72">
        <div className="text-4xl text-green-950 mt-6 ml-4 " ><p>"</p></div>
        <div className="text-2xl text-green-950 mt-6 ml-4"><p>Olivia Martinez</p></div>
        <div className=" text-green-950 mt-6 ml-4"><p>I had a great experience shoping on this<br/> 
        website. The clothes I bought are fashionable<br/> and comfortable. Highly satisfied.
        </p>
        </div>
      </div>
      

    </div>
    <div className="flex justify-center mt-32">
        <Image src="/leftarrow.png" alt="" width={150} height={150}/>
        <Image src="/rightarrow.png" alt="" width={150} height={150}/>
      </div>
   


    </div>
    
  );
}
