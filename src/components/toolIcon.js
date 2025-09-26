import { BiLogoVisualStudio } from "react-icons/bi";
import { FaCog, FaJava } from "react-icons/fa";
import { IoIosWifi } from "react-icons/io";
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiCanva, SiCplusplus, SiCss3, SiFigma, SiGimp, SiHtml5, SiJavascript, SiKotlin, SiNextdotjs, SiNodedotjs, SiReact, SiSpring, SiVite } from "react-icons/si";

export default function ToolIcon({ toolName, iconUrl }) {
    if (!toolName) return null;

    const renderIcon = () => {
        switch (toolName.toLowerCase()) {
            case "after effects":
                return <SiAdobeaftereffects size={24} color="#447EF2" />;
            case "c++":
                return <SiCplusplus size={24} color="#447EF2" />;
            case "css":
                return <SiCss3 size={24} color="#447EF2" />;
            case "canva":
                return <SiCanva size={24} color="#447EF2" />;
            case "figma":
                return <SiFigma size={24} color="#447EF2" />;
            case "gimp":
                return <SiGimp size={24} color="#447EF2" />;
            case "html":
                return <SiHtml5 size={24} color="#447EF2" />;
            case "illustrator":
                return <SiAdobeillustrator size={24} color="#447EF2" />;
            case "iot":
                return <IoIosWifi size={24} color="#447EF2" />;
            case "java":
                return <FaJava size={24} color="#447EF2" />;
            case "js":
            case "javascript":
                return <SiJavascript size={24} color="#447EF2" />;
            case "kotlin":
                return <SiKotlin size={24} color="#447EF2" />;
            case "node js":
            case "nodejs":
                return <SiNodedotjs size={24} color="#447EF2" />;
            case "photoshop":
                return <SiAdobephotoshop size={24} color="#447EF2" />;
            case "premier":
            case "premiere":
                return <SiAdobepremierepro size={24} color="#447EF2" />;
            case "react native":
                return <SiReact size={24} color="#447EF2" />;
            case "react next":
            case "nextjs":
                return <SiNextdotjs size={24} color="#447EF2" />;
            case "react vite":
            case "vite":
                return <SiVite size={24} color="#447EF2" />;
            case "spring boot":
                return <SiSpring size={24} color="#447EF2" />;
            case "visual studio":
            case "visual studio code":
                return <BiLogoVisualStudio size={24} color="#447EF2" />;
            default:
                return iconUrl ? <FaCog size={24} color="#447EF2" /> : null;
        }
    };

    return (
        <div title={toolName}>
            {renderIcon()}
        </div>
    )
}