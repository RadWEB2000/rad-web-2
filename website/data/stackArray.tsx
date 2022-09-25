import { ReactElement } from "react";
import {
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiGatsby,
  SiGraphql,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiJquery,
  SiNextdotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiRuby,
  SiSass,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
interface iStackArray {
  icon: ReactElement;
  name: string;
  value: string;
}
export const stackArray: iStackArray[] = [
  {
    icon: <SiHtml5 />,
    name: "HTML",
    value: "html",
  },
  {
    icon: <SiCss3 />,
    name: "CSS",
    value: "css",
  },
  {
    icon: <SiTailwindcss />,
    name: "TailwdCSS",
    value: "tailwind",
  },
  {
    icon: <SiBootstrap />,
    name: "Bootstrap",
    value: "Bootstrap",
  },
  {
    icon: <SiSass />,
    name: "Sass / Scss",
    value: "sass",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    value: "javascript",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    value: "typescript",
  },
  {
    icon: <SiJquery />,
    name: "jQuery",
    value: "jquery",
  },
  {
    icon: <SiAngular />,
    name: "Angular",
    value: "angular",
  },
  {
    icon: <SiReact />,
    name: "React",
    value: "react",
  },
  {
    icon: <SiGatsby />,
    name: "GatsbyJS",
    value: "gatsby",
  },
  {
    icon: <SiNextdotjs />,
    name: "NextJS",
    value: "next",
  },
  {
    icon: <SiSvelte />,
    name: "Svelte",
    value: "svelte",
  },
  {
    icon: <SiGraphql />,
    name: "GraphQl",
    value: "graphql",
  },
  {
    icon: <SiVuedotjs />,
    name: "Vue",
    value: "vue",
  },
  {
    icon: <SiPhp />,
    name: "PHP",
    value: "php",
  },
  {
    icon: <SiPython />,
    name: "Python",
    value: "python",
  },
  {
    icon: <SiRuby />,
    name: "Ruby",
    value: "ruby",
  },
  {
    icon: <SiJava />,
    name: "Java",
    value: "java",
  },
];
