import {
  FacebookLogoIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex w-full bg-gradient-to-r from-gray-700 to-black border-t-3 border-blue-500 justify-center">
        <div className="flex-col text-center mt-4 mb-4">
          <h2 className="text-white">Extreme Games | Copyright: {data}</h2>
          <p className="text-white">Acesse nossas redes socias</p>
          <div className="flex flex-row justify-center space-x-2 mt-3 text-blue-500">
            <a href="https://github.com/diego1999dd" target="_blank">
              <GithubLogoIcon size={40} className="hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/diego-rodrigues-do-nascimento/"
              target="_blank"
            >
              <LinkedinLogoIcon size={40} className="hover:text-white" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FacebookLogoIcon size={40} className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
