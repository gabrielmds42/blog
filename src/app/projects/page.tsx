import { GitBranch } from "lucide-react";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  githubUrl: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "pipeline_api",
    description:
      "Pipeline de engenharia de dados que coleta preços do Bitcoin via API, transforma com Pandas e carrega em PostgreSQL. Também possui dashboard interativo com Streamlit. Documentação completa no GitHub. Ideal pra entender o ciclo ETL de ponta a ponta com Python.",
    githubUrl: "https://github.com/gabrielmds42/pipeline_api",
    technologies: (
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-yellow-300 px-2.5 py-0.5 text-sm text-black dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Python
        </span>
        {/* <span className="rounded-full bg-sky-300 px-2.5 py-0.5 text-sm text-black dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Power BI
        </span> */}
        <span className="rounded-full bg-indigo-400 px-2.5 py-0.5 text-sm text-white dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          PostgreSQL
        </span>
        <span className="rounded-full bg-gray-600 px-2.5 py-0.5 text-sm text-white dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Pandas
        </span>
      </div>
    ),
  },
];

function ProjectCard({
  name,
  description,
  githubUrl,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl font-semibold">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <div className="flex w-full justify-center border-t border-zinc-400 dark:border-zinc-500">
        <a
          href={githubUrl}
          target="_blank"
          className="flex w-full items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          <GitBranch strokeWidth={1.5} className="size-4" /> Ver código no GitHub
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projetos
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.githubUrl} {...project} />
        ))}
      </div>
    </>
  );
}
