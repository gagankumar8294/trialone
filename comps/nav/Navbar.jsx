import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Nav.module.css"

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Blog", href: "/blog" },
  { text: "Videos", href: "/videos" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const handleNavClick = () => {
    setNavActive(!navActive);
  };

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <Image className={styles.nav_logo} src="/black_logo.png" alt="codeaspirant-logo" width={80} height={80}/>
        </Link>
        <div
          onClick={handleNavClick}
          className={`nav__menu-bar ${navActive ? "rotated" : ""}`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <Link
                href={menu.href}
                className={`nav__item ${activeIdx === idx ? "active" : ""} ${
                  menu.text === "Home"
                    ? `${styles.nav_item} ${styles.nav_item_home} ${styles.nav_links}`
                    : menu.text === "About"
                    ? `${styles.nav_item} ${styles.nav_item_about} ${styles.nav_links}`
                    : menu.text === "Blog"
                    ? `${styles.nav_item} ${styles.nav_item_about} ${styles.nav_links}`
                    : menu.text === "Videos"
                    ? `${styles.nav_item} ${styles.nav_item_contact} ${styles.nav_links}`
                    : ""
                }`}
              >
                {menu.text}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// import Link from "next/link";
// import React, { useState } from "react";

// const MENU_LIST = [
//   { text: "Home", href: "/" },
//   { text: "About Us", href: "/about" },
//   { text: "Contact", href: "/contact" },
//   { text: "support", href: "/support" },
// ];

// const Navbar = () => {
//   const [navActive, setNavActive] = useState(null);
//   const [activeIdx, setActiveIdx] = useState(-1);

//   const handleNavClick = () => {
//     setNavActive(!navActive);
//   };

//   return (
//     <header>
//       <nav className={`nav`}>
//         <Link href={"/"}>
//           <h1 className="logo">CodeWithMarish</h1>
//         </Link>
//         <div
//           onClick={handleNavClick}
//           className={`nav__menu-bar ${navActive ? "rotated" : ""}`}
//         >
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         <div className={`${navActive ? "active" : ""} nav__menu-list`}>
//           {MENU_LIST.map((menu, idx) => (
//             <div
//               onClick={() => {
//                 setActiveIdx(idx);
//                 setNavActive(false);
//               }}
//               key={menu.text}
//             >
//               <Link href={menu.href}
//                 className={`nav__item ${activeIdx === idx ? "active" : ""}`}>
//                   {menu.text} 
              
//               </Link>
//             </div>
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// import Link from "next/link";

// import React, { useState } from "react";

// import NavItem from "./NavItem";

// const MENU_LIST = [
//   { text: "Home", href: "/" },
//   { text: "About Us", href: "/about" },
//   { text: "Contact", href: "/contact" },
// ];
// const Navbar = () => {
//   const [navActive, setNavActive] = useState(null);
//   const [activeIdx, setActiveIdx] = useState(-1);


  
//   return (
//     <header>
//       <nav className={`nav`}>
//         <Link href={"/"}>
//             <h1 className="logo">CodeWithMarish</h1>
//         </Link>
//         <div
//           onClick={() => setNavActive(!navActive)}
//           className={`nav__menu-bar`}
//         >
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         <div className={`${navActive ? "active" : ""} nav__menu-list`}>
//           {MENU_LIST.map((menu, idx) => (
//             <div
//               onClick={() => {
//                 setActiveIdx(idx);
//                 setNavActive(false);
//               }}
//               key={menu.text}
//             >
//               <NavItem active={activeIdx === idx} {...menu} />
//             </div>
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;