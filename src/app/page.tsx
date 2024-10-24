import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="main w-full h-screen text-center">
  <div className="flex flex-col lg:flex-row justify-center items-center">
    <div className=" shortscreen lg:hidden "><h1> Discover Fashion</h1></div>
    <button className="explore mr-32 mt-4 lg:hidden">Explore Now</button>
    <div className="hidden lg:block">
      <Image 
        className="mx-auto lg:mx-48 pt-14" 
        src="/discover.png" 
        alt="text" 
        width={649} 
        height={200}
      />
      <Image 
        className="mx-auto lg:mx-48 pt-10" 
        src="/text.png" 
        alt="text" 
        width={565} 
        height={565}
      />
      <button className="explore mr-32 mt-4 lg:mt-4">Explore Now</button>
    </div>
    <div>
      <Image 
        className="mx-auto lg:mx-96 mt-20" 
        src="/Mask group.png" 
        alt="text" 
        width={570} 
        height={200}
      />
    </div>
  </div>
</div>

     
    {/* page2 */}
    <div className="text-center text-4xl mr-36   lg:text-6xl mt-10 font-serif text-green-950">Best Selling</div>
<h5 className="hidden lg:block text-center text-2xl text-green-950">Get in on the trend with our curated selection of best-selling styles</h5>

<div className="grid grid-cols- mr-40 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-10">
  <div className="flex flex-col items-center">
    <Image className="img1" src="/img1.png" alt="img1" width={430} height={566} />
    <div className="text-center mt-4 text-lg font-extrabold">Regular Fit Long Sleeve Top</div>
    <div className="text-slate-500"> 
      $38.99 | 5.0 
      <span className="text-2xl text-yellow-500">&#9733;</span>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <Image className="img2" src="/img2.png" alt="img2" width={430} height={566} />
    <div className="text-center mt-4 text-lg font-extrabold">Black Crop Tailored Jacket</div>
    <div className="text-slate-500"> 
      $62.99 | 4.9 
      <span className="text-2xl text-yellow-500">&#9733;</span>
    </div>
  </div>

  <div className="flex flex-col items-center ">
    <Image className="img3" src="/img3.png" alt="img3" width={430} height={566} />
    <div className="text-center mt-4 text-lg font-extrabold">White Short Sleeve Shirt</div>
    <div className="text-slate-500"> 
      $35.99 | 4.0 
      <span className="text-2xl text-yellow-500">&#9733;</span>
    </div>
  </div>
</div>

<div className="mt-16 flex justify-center items-center mr-36">
  <button>
    <Image src="/Frame 2.png" alt="btn" width={224} height={65} />
  </button>
</div>


    {/* page3 */}

    
    <div className="ml-20 sm:text-center text-4xl lg:text-6xl mt-24 lg:mt-48 font-serif text-green-950">Our Products</div>

<div className="mt-12 lg:mt-24 flex justify-center items-center">
  <ul className="inline mr-28 text-center sm:flex flex-wrap justify-center gap-6 lg:gap-48 text-lg lg:text-xl text-green-950">
    <li>SALE</li>
    <li>HOT</li>
    <li>NEW ARRIVALS</li>
    <li>ACCESSORIES</li>
  </ul>
</div>

<div className="grid grid-cols-1 mr-36 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 m-6 lg:m-10">
  <div className="flex flex-col items-center">
    <Image src="/img4.png" alt="img" width={318} height={378} />
    <div className="text-center mt-4 lg:mt-20 text-lg font-extrabold">Spread Collar Shirt</div>
    <div className="text-slate-500 text-center">$48.99 | 5.0 <span className="text-2xl text-yellow-500">&#9733;</span></div>
  </div>

  <div className="flex flex-col items-center">
    <Image src="/img7.png" alt="img" width={318} height={378} />
    <div className="text-center mt-4 lg:mt-20 text-lg font-extrabold">Gray Solid Podded Shirt</div>
    <div className="text-slate-500 text-center">$32.99 | 4.7 <span className="text-2xl text-yellow-500">&#9733;</span></div>
  </div>

  <div className="flex flex-col items-center">
    <Image src="/img6.png" alt="img" width={318} height={378} />
    <div className="text-center mt-4 lg:mt-20 text-lg font-extrabold">White Shine on Me Blouse</div>
    <div className="text-slate-500 text-center">$42.99 | 4.8 <span className="text-2xl text-yellow-500">&#9733;</span></div>
  </div>

  <div className="flex flex-col items-center">
    <Image src="/img7.png" alt="img" width={318} height={378} />
    <div className="text-center mt-4 lg:mt-20 text-lg font-extrabold">Gray Solid Podded Shirt</div>
    <div className="text-slate-500 text-center">$32.99 | 4.7 <span className="text-2xl text-yellow-500">&#9733;</span></div>
  </div>

  <div className="flex flex-col items-center mt-6 lg:mt-12">
    <Image src="/img8.png" alt="img" width={318} height={378} />
    <div className="text-center mt-4 lg:mt-20 text-lg font-extrabold">Printed Loose T-Shirt</div>
    <div className="text-slate-500 text-center">$39.99 | 5.0 <span className="text-2xl text-yellow-500">&#9733;</span></div>
  </div>

  <div className="flex flex-col items-center mt-6 lg:mt-12">
    <Image src="/img9.png" alt="img" width={318} height={378} />
    <div className="text-center mt-4 lg:mt-20 text-lg font-extrabold">Summer Wind Crop Shirt</div>
    <div className="text-slate-500 text-center">$39.95 | 4.7 <span className="text-2xl text-yellow-500">&#9733;</span></div>
  </div>

  <div className="flex flex-col items-center mt-6 lg:mt-12">
    <Image src="/img10.png" alt="img" width={318} height={378} />
    <div className="text-center mt-4 lg:mt-20 text-lg font-extrabold">Tailored Jacket</div>
    <div className="text-slate-500 text-center">$46.00 | 4.9 <span className="text-2xl text-yellow-500">&#9733;</span></div>
  </div>

  <div className="flex flex-col items-center mt-6 lg:mt-12">
    <Image src="/img11.png" alt="img" width={318} height={378} />
    <div className="text-center mt-4 lg:mt-20 text-lg font-extrabold">Solid Round Neck T-Shirt</div>
    <div className="text-slate-500 text-center">$36.00 | 5.0 <span className="text-2xl text-yellow-500">&#9733;</span></div>
  </div>
</div>


    {/* // page4 */}
    <div className="bg-green-200 w-full lg:w-8/12 h-auto lg:h-4/6 lg:ml-80 p-6 lg:p-0">
  <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
  
    <div className="mr-20 sm:flex justify-center lg:justify-start">
      <Image src="/img12.png" alt="img12" width={482} height={596} />
    </div>

    
    <div className="mr-24 sm:flex flex-col items-center lg:items-start text-center lg:text-left">
      <div className="text-4xl lg:text-6xl mt-10 lg:mt-48 font-serif text-green-950">Exclusive Offer</div>

      <div className="mr-10 sm:text-lg lg:text-2xl text-green-950 mt-4 lg:mt-6">
        <p>Unlock the ultimate style upgrade with our exclusive offer.</p>
        <p> Enjoy savings of up to 40% off on our latest new Arrivals.</p>
      </div>

     
      <div className=" flex gap-4 lg:gap-6 mt-6">
        <span className="ml-6 bg-white sm:bg-white p-4 lg:p-8">
          <p className="text-2xl lg:text-4xl text-center text-green-950 font-bold">06</p>
          <p className="text-base lg:text-xl text-center text-green-950">Days</p>
        </span>
        <span className="ml-6 bg-white sm:bg-white p-4 lg:p-8">
          <p className="text-2xl lg:text-4xl text-center text-green-950 font-bold">18</p>
          <p className="text-base lg:text-xl text-center text-green-950">Hours</p>
        </span>
        <span className="ml-6 bg-white sm:bg-white p-4 lg:p-8">
          <p className="text-2xl lg:text-4xl text-center text-green-950 font-bold">48</p>
          <p className="text-base lg:text-xl text-center text-green-950">Min</p>
        </span>
      </div>

      
      <div className="mt-8 lg:mt-10 lg:ml-10 mb-10">
        <button className="bg-green-950 text-white py-3 px-6 text-lg rounded-lg">
          BUY NOW
        </button>
      </div>
    </div>
  </div>
</div>

     {/* page5 */}
     <div className="mr-28 text-center text-2xl sm:text-6xl mt-24 lg:mt-48 font-serif text-green-950">
  Designer Clothes For You
</div>

<div className="hidden sm:block text-center text-lg lg:text-2xl mt-8 lg:mt-16 font-serif text-green-950">
  <p>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
</div>

<div className="mr-32  sm:grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 px-4 lg:px-36 mt-12 lg:mt-24">
 
  <div className="flex flex-col items-center">
    <Image className="img13" src="/img13.png" alt="img13" width={430} height={566}/>
    <div className="text-xl lg:text-2xl text-green-950 font-bold mt-6 lg:mt-10">Accessories</div>
    <div className="mb-6 text-center sm:text-center lg:text-center text-base lg:text-xl text-green-950 mt-4 lg:mt-6 ">
      <p>Complete your ensemble<br/> with designer accessories <br/>such as handbags, scarves, belts,<br/> and hats.</p>
    </div>
  </div>


  <div className="flex flex-col items-center">
    <Image src="/img14.png" alt="img14" width={430} height={566}/>
    <div className="text-xl lg:text-2xl text-green-950 font-bold mt-6 lg:mt-10">Dresses</div>
    <div className="mb-6 text-center sm:text-center lg:text-center text-base lg:text-xl text-green-950 mt-4 lg:mt-6">
      <p>Explore a stunning range<br/> of designer dresses,including<br/> evening gowns and chic day<br/> dresses.</p>
    </div>
  </div>

 
  <div className="flex flex-col items-center">
    <Image src="/img15.png" alt="img15" width={430} height={566}/>
    <div className="text-xl lg:text-2xl text-green-950 font-bold mt-6 lg:mt-10">Outerwear</div>
    <div className="mb-6 text-center sm:text-center lg:text-center text-base lg:text-xl text-green-950 mt-4 lg:mt-6">
      <p>Browse luxurious designer<br/> coats, jackets, and blazers<br/> to stay stylish and warm during<br/> colder seasons.</p>
    </div>
  </div>
</div>

    {/* page6 */}
    <div className="ml-12 sm:text-center text-4xl lg:text-6xl mt-24 lg:mt-48 font-serif text-green-950">
  Feedback Corner
</div>

<div className="mr-32 sm:grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mt-16 lg:mt-32 px-8 lg:ml-32">

  <div className="mb-10 bg-gray-100 sm:bg-gray-100 p-6 w-full lg:w-96 h-auto lg:h-72 mx-auto lg:ml-6">
    <div className="text-3xl lg:text-4xl text-green-950">
      <p>&#34;</p>
    </div>
    <div className="text-xl lg:text-2xl text-green-950 mt-4 lg:mt-6">
      <p>Emily Wilson</p>
    </div>
    <div className="text-sm lg:text-base text-green-950 mt-4 lg:mt-6">
      <p>
        The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I am beyond satisfied.
      </p>
    </div>
  </div>

  
  <div className="mb-10 bg-green-200 sm:bg-green-200 p-6 w-full lg:w-96 h-auto lg:h-72 mx-auto">
    <div className="text-3xl lg:text-4xl text-green-950">
      <p>&#34;</p>
    </div>
    <div className="text-xl lg:text-2xl text-green-950 mt-4 lg:mt-6">
      <p>Sarah Thomas</p>
    </div>
    <div className="text-sm lg:text-base text-green-950 mt-4 lg:mt-6">
      <p>
        I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended.
      </p>
    </div>
  </div>


  <div className="mb-10 bg-gray-100 sm:bg-gray-100 p-6 w-full lg:w-96 h-auto lg:h-72 mx-auto">
    <div className="text-3xl lg:text-4xl text-green-950">
      <p>&#34;</p>
    </div>
    <div className="text-xl lg:text-2xl text-green-950 mt-4 lg:mt-6">
      <p>Olivia Martinez</p>
    </div>
    <div className="text-sm lg:text-base text-green-950 mt-4 lg:mt-6">
      <p>
        I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied.
      </p>
    </div>
  </div>
</div>

<div className="mr-40 mx-auto flex sm:flex justify-center mt-16 lg:mt-32">
  <Image src="/leftarrow.png" alt="left arrow" width={300} height={300} className="w-24 lg:w-48" />
  <Image src="/rightarrow.png" alt="right arrow" width={300} height={300} className="w-24 lg:w-48" />
</div>

  

    </div>
    
  );
}
