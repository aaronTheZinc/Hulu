import requests from "../../utils/request";
import { request } from "../../Schema/types";

export default function nav() {
  return (
    <nav>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap"> 
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            className="cursor-pointer transition duration-100
             transform hover:scale-125 hover:text-white 
             "
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}
