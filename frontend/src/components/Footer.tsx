const Footer = () => {
  return (
    <footer className="bg-[#333] text-white py-5 border-t border-[#e0e0e0] font-poppins font-extralight">
      <div className="flex justify-between items-center mx-auto max-w-6xl px-4">
        <p>Copyright &copy; Neom Sindalah. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="footer-link hover:underline">
            Terms of Use
          </a>
          <a href="#" className="footer-link hover:underline">
            Privacy
          </a>
          <a href="#" className="footer-link hover:underline">
            Cookie
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
