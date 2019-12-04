export default {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hamburger Menu</title>
  <link rel="stylesheet" href="../../../static/css/HamburgerMenu.css">
</head>
<body>
   <div class="menu-wrap">
     <input type="checkbox" class="toggler">
     <div class="hamburger"><div></div></div>
     <div class="menu">
       <div>
         <div>
           <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Services</a></li>
             <li><a href="#">Contact</a></li>
           </ul>
         </div>
       </div>
     </div>
   </div>
   <header class="showcase">
     <div class="container showcase-inner">
       <h1>Welcome</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores perspiciatis nesciunt debitis voluptates in amet eius facere aut sequi soluta adipisci magni mollitia magnam unde officiis alias, minus ipsam maiores.</p>
       <a href="#" class="btn">dssdsd</a>
     </div>
   </header>
</body>
</html>`,
css: `:root {
  --primary-color: rgba(12,110,139,0.75);
  --overlay-color: rgba(24, 39,51,0.85);
  --menu-speed: 0.75s;
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.4;
}
.container {
  max-height: 960px;
  margin: auto;
  overflow: hidden;
  padding: 0 3rem;
}

.showcase {
  background-color: var(--primary-color);
  color: #fff;
  height: 100vh;
  position: relative;
}

.showcase .showcase-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.showcase h1 {
  font-size: 4rem;
}

.showcase p {
  font-size: 1.3rem;
}

.btn {
  display: inline-block;
  border: none;
  background-color: var(--primary-color);
  color: #fff;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  transition: opacity 0.5s;
}
.btn:hover{
  opacity: 0.7;
}

.menu-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.menu-wrap .toggler {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
}

.menu-wrap .hamburger {
  position:  absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 1rem;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;

}


.menu-wrap .hamburger > div{
  position: relative;
  width: 100%;
  height: 2px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
}

.menu-wrap .hamburger > div::before,
.menu-wrap .hamburger > div::after {
  content: '';
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 2px;
  background: inherit;
}


.menu-wrap .hamburger > div::after {
   top: 10px;
}

/* Toggler animate*/
.menu-wrap .toggler:checked + .hamburger > div{
  transform: rotate(135deg);
}

.menu-wrap .toggler:checked + .hamburger > div::before,
.menu-wrap .toggler:checked + .hamburger > div::after
{
  top: 0;
  transform: rotate(90deg);
}

.menu-wrap .toggler:checked:hover + .hamburger > div{
  transform: rotate(225deg);
}

.menu-wrap .menu{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-wrap .toggler:checked ~ .menu {
  visibility: visible;
}
.menu-wrap .toggler:checked ~ .menu > div {
  transform: scale(1);
  transition-duration: var(--menu-speed);
}
.menu-wrap .toggler:checked ~ .menu > div > div{
  opacity: 1;
  transition: opacity 0.4s ease;
}
.menu-wrap .menu > div {
  background: var(--overlay-color);
  border-radius: 50%;
  width: 200vw;
  height: 200vw;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;
  transform: scale(0);
}

.menu-wrap .menu > div > div {
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: opacity 0.4 ease;
}

.menu-wrap .menu > div > div>ul>li{
  list-style: none;
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem;
}


.menu-wrap .menu > div >div> ul>li>a{
  color: inherit;
  text-decoration: none;
  transition: color 0.4s ease;
}




`
}

