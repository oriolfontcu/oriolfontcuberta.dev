import { DATA } from '@/data/resume';
import { CardProject } from './CardProject';

export function Work() {
  return (
    <>
    {DATA.projects.map((project) => (
      <CardProject 
          key={project.title}
          project={project}
      />
    ))}
  </>
  );
}
