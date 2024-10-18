import Image from "next/image";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">Amna</div>
      <div className="right-side">
        <div>
          <ul className="routing">
            <li>HOME</li>
            <li>SHOP</li>
            <li>FEATURES</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="login">
          <Image src="/vector.png" alt="icon" width={30} height={30} />
          <button className="login-btn">LOGIN</button>
        </div>
      </div>
    </div>
  );
}
