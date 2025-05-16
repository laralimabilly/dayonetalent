import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

export default function Footer() {
    return (
      <>
        <footer className="bg-dark py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
              <img src="img/DayOne_Logo_Light.png" alt="Logo Day One" className="max-w-36" />
                <p className="text-secondary-dark/60 mt-8 text-sm">Global Talent Network</p>
              </div>
              
              <div className="flex flex-wrap gap-6 justify-center">
                <NavLinks classList='nav-link' />
              </div>
            </div>
            
            <div className="border-t border-secondary/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-secondary-dark/60 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
              
              <div className="flex space-x-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
  