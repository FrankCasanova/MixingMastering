import {useState} from "react";
//import icons
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
//import assets
import logo from "../../assets/logo.png";
// import css
import "./navbar.css";
//import motion
import { delay, motion } from "framer-motion";
//import variants
import {fadeIn} from "../../variants.js"




const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);


    
    return (
        <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <motion.div variants={fadeIn('right')}
        initial="hidden"
        whileInView={"show1"}
        viewport={{once: true, amount: 0.2}}

         className="gpt3__navbar-links_logo">
          <img src={logo} />
        </motion.div>
        <motion.div
        variants={fadeIn('left')}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount: 0.2}} 
        className="gpt3__navbar-links_container">
          <p  className="item"><a href="#home">Home</a></p>
          <p  className="item"><a href="#wgpt3">What is Mixing and Mastering IA</a></p>
          <p  className="item"><a href="#possibility">Open AI</a></p>
          <p  className="item"><a href="#features">Our Services</a></p>
          <p  className="item"><a href="#blog">Blog</a></p>
        </motion.div>
      </div>
            {/* <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div> */}
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }   
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wgpt3">What is Mixing/Mastering IA</a></p>
                            <p><a href="#possibility">Open AI</a></p>
                            <p><a href="#features">Our Services</a></p>
                            <p><a href="#blog">Blog</a></p>
                        </div>
                        {/* <div className="gpt3__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div> */}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar 