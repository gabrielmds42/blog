import {
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Download, Send } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

// Ícones customizados (se quiser usar depois)
const XLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" className="ml-1">
    <g>
      <path
        className="fill-zinc-950 dark:fill-zinc-200"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      ></path>
    </g>
  </svg>
);

interface LinkType {
  name: string;
  description?: string;
  url: string;
  icon?: ReactNode;
}

const externalLinks: LinkType[] = [
  {
    name: "LinkedIn",
    description: "me acompanhe por lá",
    url: "https://br.linkedin.com/in/gabriel-magalh%C3%A3es-de-souza",
    icon: <SiLinkedin className="fill-[#0077B5] dark:fill-zinc-200" />,
  },
  {
    name: "GitHub",
    description: "dá uma olhada no que ando criando",
    url: "https://github.com/gabrielmds42",
    icon: <SiGithub />,
  },
];

const ExternalLink = (link: LinkType) => {
  return (
    <a
      key={link.url}
      href={link.url}
      target="_blank"
      className="group flex items-center justify-between p-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
    >
      <span className="flex items-center gap-4">
        {link.icon} {link.name}
        <span className="-translate-x-4 text-zinc-500 opacity-0 transition-all max-sm:hidden sm:group-hover:translate-x-0 sm:group-hover:opacity-100 dark:text-zinc-400">
          {link.description}
        </span>
      </span>
      <ArrowUpRight
        strokeWidth={1.5}
        className="size-5 shrink-0 text-zinc-800 transition-all sm:group-hover:rotate-45 dark:text-zinc-200"
      />
    </a>
  );
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm">
        Sou Gabriel Magalhães, analista de dados com um pé na engenharia de Dados. 
        Gosto de automatizar tudo que posso, criar visualizações
        que contam histórias e usar Python como canivete suíço. Também estudo sistemas
        distribuídos e bancos de dados.
      </p>

      <div className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        {externalLinks.map((link) => (
          <ExternalLink key={link.url} {...link} />
        ))}
      </div>

      <div className="flex justify-center gap-6 max-sm:flex-col-reverse sm:justify-between">
        <div className="flex flex-col justify-center gap-4 max-sm:items-center">
          <div className="group -m-8 flex select-all items-center gap-3 p-8 transition-all">
            contato.magalhaesgabriel@gmail.com
            <div className="inline-flex items-center gap-3">
              <a
                href="mailto:contato.magalhaesgabriel@gmail.com"
                className="text-zinc-800 dark:text-zinc-200"
              >
                <Send strokeWidth={1.5} className="size-4" />
              </a>
            </div>
          </div>
          <span className="-mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-sm text-green-600 ring-1 ring-green-500 dark:bg-transparent dark:text-emerald-500 dark:ring-emerald-500">
            <div className="size-2 animate-pulse rounded-full bg-green-500 dark:bg-emerald-500" />
            Online
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="/gabriel-magalhaes-cv.pdf"
            download="Gabriel-Magalhaes-CV.pdf"
            className="flex flex-row items-center justify-center gap-3 rounded bg-sky-300 p-4 text-sky-800 ring-1 ring-sky-500 transition-all sm:hover:bg-sky-400 dark:bg-inherit dark:text-sky-500 dark:ring-sky-500 sm:dark:hover:bg-zinc-800"
          >
            <span className="text-nowrap">Baixar meu currículo</span>
            <Download strokeWidth={1.5} className="size-5 max-sm:hidden" />
          </a>
        </div>
      </div>
    </div>
  );
}
