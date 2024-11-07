'use client' ;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'boxicons/css/boxicons.min.css';
import { useState } from 'react';


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      
   {/* Header */}
<header className="fixed top-0 left-0 w-full px-4 py-4 md:px-[7%] md:py-6 bg-[var(--bg-color)] flex flex-col md:flex-row justify-between items-center z-50 mb-0">
  <a href="#" className="text-[1.2rem] md:text-[1.5rem] text-[var(--text-color)] font-semibold cursor-default hover:text-[var(--main-color)]">
    Muniza <span className="text-[var(--main-color)]">Nabeel</span>
  </a>

  <div className="md:hidden">
    <i
      className="bx bx-menu text-[2rem] text-[var(--text-color)] cursor-pointer"
      id="menu-icon"
      onClick={() => setMenuOpen(!menuOpen)} 
    ></i>
  </div>

  {/* Navigation Links */}
  <nav className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 ${menuOpen ? 'block' : 'hidden'} md:block`}>
    <a href="#home" className="text-[1.1rem] text-[var(--text-color)] transition duration-300 hover:text-[var(--main-color)] active:text-[var(--main-color)]"> Home </a>
    <a href="#about" className="text-[1.1rem] text-[var(--text-color)] transition duration-300 hover:text-[var(--main-color)] active:text-[var(--main-color)]"> About </a>
    <a href="#services" className="text-[1.1rem] text-[var(--text-color)] transition duration-300 hover:text-[var(--main-color)] active:text-[var(--main-color)]"> Skills </a>
    <a href="#portfolio" className="text-[1.1rem] text-[var(--text-color)] transition duration-300 hover:text-[var(--main-color)] active:text-[var(--main-color)]"> Projects </a>
    <a href="#contact" className="text-[1.1rem] text-[var(--text-color)] transition duration-300 hover:text-[var(--main-color)] active:text-[var(--main-color)]"> Contact </a>
  </nav>
</header>

<section className="home flex flex-col md:flex-row justify-center items-center mt-0 px-6 sm:px-4 md:px-8 lg:ml-20" id="home">
  <div className="home-content space-y-3 text-center md:text-left">
    <h3 className="text-[1.5rem] md:text-[1.7rem] font-bold">Hello, It&apos;s Me</h3>
    <h1 className="text-[2.2rem] md:text-[2.6rem] font-bold leading-tight">Muniza Nabeel</h1>
    <h3 className="text-[1.5rem] md:text-[1.8rem] font-bold mb-4">
      And I&apos;m a <span className="text-[var(--main-color)]">Web Developer</span>
    </h3>

    <p className="text-[0.9rem] md:text-[1rem]">
      I&apos;m a passionate web developer with expertise in HTML, CSS, and TypeScript. Currently, I&apos;m diving into
      the world of Next.js, expanding my skills to build more dynamic and efficient web applications.
    </p>
  
    <div className="social-media flex justify-center md:justify-start space-x-4 mt-6 md:mt-20">
      <Link
        href="https://www.facebook.com/profile.php?id=61555562894584"
        target="_blank"
        className="flex justify-center items-center w-8 h-8 md:w-9 md:h-9 border-2 border-[var(--main-color)] rounded-full text-lg md:text-xl text-[var(--main-color)] transition duration-500 ease hover:bg-[var(--main-color)] hover:text-[var(--second-bg-color)] hover:shadow-[0_0_1rem_var(--main-color)]"
      >
        <i className="bx bxl-facebook"></i>
      </Link>
      <Link
        href="https://mail.google.com/mail"
        target="_blank"
        className="flex justify-center items-center w-8 h-8 md:w-9 md:h-9 border-2 border-[var(--main-color)] rounded-full text-lg md:text-xl text-[var(--main-color)] transition duration-500 ease hover:bg-[var(--main-color)] hover:text-[var(--second-bg-color)] hover:shadow-[0_0_1rem_var(--main-color)]"
      >
        <i className="bx bxl-gmail"></i>
      </Link>
      <Link
        href="https://github.com/Muniza-NAbeel"
        target="_blank"
        className="flex justify-center items-center w-8 h-8 md:w-9 md:h-9 border-2 border-[var(--main-color)] rounded-full text-lg md:text-xl text-[var(--main-color)] transition duration-500 ease hover:bg-[var(--main-color)] hover:text-[var(--second-bg-color)] hover:shadow-[0_0_1rem_var(--main-color)]"
      >
        <i className="bx bxl-github"></i>
      </Link>
      <Link
        href="https://www.linkedin.com/in/muniza-malik-59826930a/"
        target="_blank"
        className="flex justify-center items-center w-8 h-8 md:w-9 md:h-9 border-2 border-[var(--main-color)] rounded-full text-lg md:text-xl text-[var(--main-color)] transition duration-500 ease hover:bg-[var(--main-color)] hover:text-[var(--second-bg-color)] hover:shadow-[0_0_1rem_var(--main-color)]"
      >
        <i className="bx bxl-linkedin"></i>
      </Link>
    </div>

    <Link
      href="https://static-resume-red.vercel.app/"
      target="_main"
      className="inline-block px-4 py-2 bg-[var(--main-color)] rounded-full shadow-[0_0_1rem_var(--main-color)] text-[1rem] text-[var(--second-bg-color)] tracking-[0.1rem] font-semibold transition duration-500 ease hover:shadow-none active:shadow-[0_5px_#fcb1a9] active:translate-y-[6px] sm:px-3 sm:py-1.5 sm:text-[0.9rem] md:px-4 md:py-2 md:text-[1rem] lg:px-5 lg:py-2.5 lg:text-[1.1rem]"
    >
      View Resume
    </Link>
  </div>

  <div className="home-img mt-10 md:mt-0 md:ml-10 animate-float">
    <Image src="/about.png" alt="profile" width={1200} height={700} />
  </div>
</section>


{/* About Section */}

<section className="flex flex-col md:flex-row justify-center items-center gap-2 bg-[var(--second-bg-color)]" id="about">
  <div className="home-img relative w-full md:w-[220vw] h-[40vh] md:h-[60vh]">
    <Image 
      src="/home.png" 
      alt="image" 
      fill
      className="object-cover"
    />
  </div>

  <div className="about-content text-center md:text-left px-4 md:px-8 py-4 md:ml-24">
    <h2 className="text-3xl sm:text-4xl mt-2 mb-2 font-semibold">
      About <span className="text-[var(--main-color)]">Me!</span>
    </h2>
    <h3 className="text-lg sm:text-xl font-semibold">Frontend Developer!</h3>
    <p className="my-4 text-sm sm:text-base">
      With a strong foundation in frontend development, I am currently expanding my skill set to become a full stack developer. My journey began with creating dynamic and user-friendly interfaces using technologies like HTML, CSS, and TypeScript. Recently, I&apos;ve been focusing on mastering Next.js to enhance my understanding of server-side rendering and building scalable web applications.
    </p>
    <a href="#" className="inline-block px-6 py-2 mt-2 bg-[var(--main-color)] rounded-full shadow-[0_0_1rem_var(--main-color)] text-[1rem] text-[var(--second-bg-color)] tracking-[0.1rem] font-semibold transition duration-500 ease hover:shadow-none active:shadow-[0_5px_#fcb1a9] active:translate-y-[6px]">
      Back
    </a>
  </div>
</section>


{/* Skills Section */}
<section className="services py-20" id="services">
  <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-center">
    My <span className="text-[var(--main-color)]">Skills</span>
  </h2>
  <div className="services-container flex flex-col sm:flex-row justify-center items-center sm:gap-8 gap-4">
    
  <div className="services-box flex-1 bg-[var(--second-bg-color)] p-1 sm:p-4 rounded-2xl text-center border-2 border-[var(--bg-color)] transition duration-500 ease-in-out transform hover:border-[var(--main-color)] hover:scale-105 w-full sm:w-[300px] h-auto">

   <i className="bx bxs-paint text-4xl text-[var(--main-color)] m-0"></i>
   
   <h3 className="text-lg sm:text-xl font-bold">Graphic Design</h3>
   
   <p className="text-[0.75rem] sm:text-base lg:text-base xl:text-xs m-2">
      As a passionate graphic designer, I thrive on turning creative concepts into visually striking designs. With a keen eye for detail and a strong understanding of color theory, typography, and composition, I aim to deliver visually compelling work that aligns with the client&apos;s vision while adding a unique creative touch.
   </p>

   <a href="#" className="inline-block px-4 py-2 mt-2 bg-[var(--main-color)] rounded-full shadow-[0_0_1rem_var(--main-color)] text-[0.8rem] sm:text-[1rem] text-[var(--second-bg-color)] tracking-[0.1rem] font-semibold transition duration-500 ease-in-out hover:shadow-none active:shadow-[0_5px_#fcb1a9] active:translate-y-[6px]">Read More</a>
</div>


    <div className="services-box flex-1 bg-[var(--second-bg-color)] p-2 sm:p-6 rounded-2xl text-center border-2 border-[var(--bg-color)] transition duration-500 ease-in-out transform hover:border-[var(--main-color)] hover:scale-105 w-full sm:w-[300px] min-h-[250px]">
      <i className="bx bx-code-alt text-4xl text-[var(--main-color)] m-2"></i>
      <h3 className="text-lg sm:text-xl font-bold">Web Development</h3>
      <p className="text-[0.75rem] sm:text-base lg:text-base xl:text-xs m-0">
        As a dedicated web developer, I am committed to building responsive and user-friendly websites that enhance the online experience. With expertise in HTML, CSS, and JavaScript, I focus on creating seamless interfaces and ensuring optimal performance across all devices.
      </p>
      <a 
        href="#" 
        className="inline-block px-4 py-2 mt-4 bg-[var(--main-color)] rounded-full shadow-[0_0_1rem_var(--main-color)] text-[0.8rem] sm:text-[1rem] text-[var(--second-bg-color)] tracking-[0.1rem] font-semibold transition duration-500 ease-in-out hover:shadow-none active:shadow-[0_5px_#fcb1a9] active:translate-y-[6px]"
      >
        Read More
      </a>
    </div>

    <div className="services-box flex-1 bg-[var(--second-bg-color)] p-2 sm:p-6 rounded-2xl text-center border-2 border-[var(--bg-color)] transition duration-500 ease-in-out transform hover:border-[var(--main-color)] hover:scale-105 w-full sm:w-[300px] min-h-[250px]">
      <i className="bx bx-bar-chart-alt text-4xl text-[var(--main-color)] m-1"></i>
      <h3 className="text-lg sm:text-xl font-bold">Digital Marketing</h3>
      <p className="text-[0.75rem] sm:text-base lg:text-base xl:text-xs m-0">
        Digital marketing is a vital strategy for businesses, It allows brands to connect with their audience in real-time, analyze campaign performance, and drive conversions. With consumers increasingly turning to digital platforms, effective digital marketing is essential for maintaining competitiveness and building customer loyalty.
      </p>    
      <a 
        href="#" 
        className="inline-block px-4 py-2 mt-1 bg-[var(--main-color)] rounded-full shadow-[0_0_1rem_var(--main-color)] text-[0.8rem] sm:text-[1rem] text-[var(--second-bg-color)] tracking-[0.1rem] font-semibold transition duration-500 ease-in-out hover:shadow-none active:shadow-[0_5px_#fcb1a9] active:translate-y-[6px]"
      >
        Read More
      </a>
    </div>

  </div>
</section>

{/* Portfolio Section */}
<section className="portfolio bg-[var(--second-bg-color)] pt-20" id="portfolio">
   <h2 className="text-[var(--text-color)] text-4xl font-semibold flex justify-center mt-4 mb-8 space-y-0">
    Latest <span className="ml-2 text-[var(--main-color)]">Project</span>
   </h2>

   <div className="portfolio-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-center p-4 sm:p-0">
      
      {/* Box 1 */}
      <div className="portfolio-box relative rounded-2xl shadow-lg overflow-hidden flex">
         <Image src="/6.jpeg" alt="Description" width={300} height={200} className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110" />
         <div className="portfolio-layer absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[var(--main-color)] to-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col text-center px-8 sm:px-12 transition-transform duration-500 ease-in-out transform translate-y-full hover:translate-y-0">
            <h4 className="text-lg sm:text-xl font-semibold">Object oriented program</h4>
            <p className="text-sm sm:text-base my-1 sm:mb-3">Using TypeScript, Node.js, and Inquirer. TypeScript provides strong typing, which helps catch errors early and improve code clarity...</p>
            <a href="https://github.com/Muniza-NAbeel/Object-Oriented-program" target="_blank" className="inline-flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-[var(--text-color)] rounded-full shadow-lg transition-all">
               <i className='bx bx-link-external text-[var(--second-bg-color)] text-xl sm:text-2xl'></i>
            </a>
         </div>
      </div>

      {/* Box 2 */}
      <div className="portfolio-box relative rounded-2xl shadow-lg overflow-hidden flex">
         <Image src="/number.avif" alt="Description" width={300} height={200} className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110" />
         <div className="portfolio-layer absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[var(--main-color)] to-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col text-center px-8 sm:px-12 transition-transform duration-500 ease-in-out transform translate-y-full hover:translate-y-0">
            <h4 className="text-lg sm:text-xl font-semibold">Advance Todo-list</h4>
            <p className="text-sm sm:text-base my-1 sm:mb-3">A CLI-based advanced to-do list is a comprehensive application that allows users to manage tasks effectively through a command-line interface. Built using Node.js and Inquirer.</p>
            <a href="https://github.com/Muniza-NAbeel/Advance-todo-list" target="_blank" className="inline-flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-[var(--text-color)] rounded-full shadow-lg transition-all">
               <i className='bx bx-link-external text-[var(--second-bg-color)] text-xl sm:text-2xl'></i>
            </a>
         </div>
      </div>

      {/* Box 3 */}
      <div className="portfolio-box relative rounded-2xl shadow-lg overflow-hidden flex">
         <Image src="/3.jpeg" alt="Description" width={300} height={180} className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110" />
         <div className="portfolio-layer absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[var(--main-color)] to-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col text-center px-8 sm:px-12 transition-transform duration-500 ease-in-out transform translate-y-full hover:translate-y-0">
            <h4 className="text-lg sm:text-xl font-semibold">Adventure Game</h4>
            <p className="text-sm sm:text-base my-1 sm:mb-3">A CLI-based adventure game is an interactive storytelling experience where players navigate through a fictional world using text commands. Built with Node.js.</p>
            <a href="https://github.com/Muniza-NAbeel/Adventure-Game" target="_blank" className="inline-flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-[var(--text-color)] rounded-full shadow-lg transition-all">
               <i className='bx bx-link-external text-[var(--second-bg-color)] text-xl sm:text-2xl'></i>
            </a>
         </div>
      </div>

      {/* Box 4 */}
      <div className="portfolio-box relative rounded-2xl shadow-lg overflow-hidden flex">
         <Image src="/1.jpg" alt="Description" width={300} height={200} className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110" />
         <div className="portfolio-layer absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[var(--main-color)] to-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col text-center px-8 sm:px-12 transition-transform duration-500 ease-in-out transform translate-y-full hover:translate-y-0">
            <h4 className="text-lg sm:text-xl font-semibold mb-0">Word Counter</h4>
            <p className="text-sm sm:text-base my-0 sm:mb-3">A CLI-based word counter is a straightforward application that counts the number of words in a given text input from the user. Built using Node.js, the program prompts the user to enter a sentence or paragraph and then processes the input to determine the total word count.</p>
            <a href="https://github.com/Muniza-NAbeel/Word-Counter" target="_blank" className="inline-flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-[var(--text-color)] rounded-full shadow-lg transition-all">
               <i className='bx bx-link-external text-[var(--second-bg-color)] text-xl sm:text-2xl'></i>
            </a>
         </div>
      </div>

      {/* Box 5 */}
      <div className="portfolio-box relative rounded-2xl shadow-lg overflow-hidden flex">
         <Image src="/2.png" alt="Description" width={300} height={200} className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110" />
         <div className="portfolio-layer absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[var(--main-color)] to-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col text-center px-8 sm:px-12 transition-transform duration-500 ease-in-out transform translate-y-full hover:translate-y-0">
            <h4 className="text-lg sm:text-xl font-semibold">Currency Convertor</h4>
            <p className="text-sm sm:text-base my-1 sm:mb-3">A CLI-based currency converter is a practical application that allows users to convert amounts between different currencies through a command-line interface. </p>
            <a href="https://github.com/Muniza-NAbeel/Currency-Converter" target="_blank" className="inline-flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-[var(--text-color)] rounded-full shadow-lg transition-all">
               <i className='bx bx-link-external text-[var(--second-bg-color)] text-xl sm:text-2xl'></i>
            </a>
         </div>
      </div>

      {/* Box 6 */}
      <div className="portfolio-box relative rounded-2xl shadow-lg overflow-hidden flex">
         <Image src="/6.jpeg" alt="Description" width={300} height={200} className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110" />
         <div className="portfolio-layer absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[var(--main-color)] to-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col text-center px-8 sm:px-12 transition-transform duration-500 ease-in-out transform translate-y-full hover:translate-y-0">
            <h4 className="text-lg sm:text-xl font-semibold">Number Guessing Game</h4>
            <p className="text-sm sm:text-base my-1 sm:mb-3">A CLI-based number guessing game is a simple yet engaging application where players try to guess a randomly generated number within a specified range. Using Node.js and Inquirer,This project not only offers a fun experience but also serves as a practical introduction to handling user input and implementing game logic</p>
            <a href="https://github.com/Muniza-NAbeel/Cli-number-guessing-game" target="_blank" className="inline-flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-[var(--text-color)] rounded-full shadow-lg transition-all">
               <i className='bx bx-link-external text-[var(--second-bg-color)] text-xl sm:text-2xl'></i>
            </a>
         </div>
      </div>
   </div>
</section>

{/* Contact Section */}
<section className="contact pt-20 " id="contact">
<h2 className="text-[var(--text-color)] text-4xl font-semibold flex justify-center mt-4 mb-8 space-y-0 sm:text-2xl md:text-4xl">
  Contact <span className="ml-2 text-[var(--main-color)]">Me!</span>
</h2>


  <form
    action="mailto:your-email@example.com"
    method="POST"
    encType="text/plain"
    className="max-w-fit mx-auto text-center mb-20"
  >
    <div className="input-box flex justify-between flex-wrap">
      <input
        type="text"
        placeholder="Full Name"
        required
        className="w-[49%] p-4 text-lg text-[var(--text-color)] bg-[var(--second-bg-color)] rounded-lg mb-3"
      />
      <input
        type="email"
        placeholder="Email"
        required
        className="w-[49%] p-4 text-lg text-[var(--text-color)] bg-[var(--second-bg-color)] rounded-lg mb-3"
      />
    </div>

    <div className="input-box flex justify-between flex-wrap">
      <input
        type="number"
        placeholder="Phone Number"
        required
        className="w-[49%] p-4 text-lg text-[var(--text-color)] bg-[var(--second-bg-color)] rounded-lg mb-3"
      />
      <input
        type="text"
        placeholder="Email Subject"
        required
        className="w-[49%] p-4 text-lg text-[var(--text-color)] bg-[var(--second-bg-color)] rounded-lg mb-3"
      />
    </div>

    <textarea
      cols={30}
      rows={5}
      placeholder="Your Message Here"
      required
      className="w-full p-4 text-lg text-[var(--text-color)] bg-[var(--second-bg-color)] rounded-lg mb-3 resize-none"
    ></textarea>

    <input
      type="submit"
      value="Send Message"
      className="inline-block px-4 py-2 bg-[var(--main-color)] rounded-full shadow-[0_0_1rem_var(--main-color)] text-[1rem] text-[var(--second-bg-color)] tracking-[0.1rem] font-semibold transition duration-500 ease hover:shadow-none active:shadow-[0_5px_#fcb1a9] active:translate-y-[6px]"
    />
  </form>
</section>

      {/* Footer Section */}
      <footer className="footer flex flex-col flex-wrap items-center justify-center p-4 bg-[var(--second-bg-color)] text-center">
  <div className="footer-text">
  <p className="text-sm md:text-base text-[1rem] mt-2 text-center">
  <i className="bx bx-copyright"></i> 2024 Made With 
  <i className="bx bx-heart mx-1"></i> by Muniza Nabeel | All rights reserved.
</p>

  </div>
  <div className="footer-icontop flex items-center justify-center mt-2 mb-0">
    <a href="#home" className="inline-flex items-center justify-center p-0 bg-[var(--main-color)] rounded-lg transition duration-500 ease-in-out hover:shadow-[0_0_1rem_var(--main-color)]">
      <i className="bx bx-up-arrow-alt text-[2.4rem] text-[var(--second-bg-color)]"></i>
    </a>
  </div>
</footer>

    </main>
  );
};

export default Home;