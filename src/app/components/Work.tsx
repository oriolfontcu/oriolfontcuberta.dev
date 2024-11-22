import { DATA } from '@/data/resume';
import { CardProject } from './CardProject';
import { ArrowUpRight } from 'lucide-react';

export function Work() {
  return (
    <div className="w-9/12 sm:w-6/12">
    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 px-4 justify-center place-items'>    
      {DATA.projects.map((project) => (
        <CardProject 
            className='flex flex-col space-y-1.5 p-6'
            key={project.title}
            project={project}
        />
      ))}
    </div>
    <a href={DATA.contact.social.GitHub.url} className='group mt-10 flex justify-center text-primary/60 items-center text-xl decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline hover:text-primary'>More Projects <ArrowUpRight size={20} className="opacity-50 duration-200 ml-2 group-hover:translate-x-[1.5px] group-hover:opacity-100" /></a>
  </div>
  );
}
