import { NextPage } from 'next';
import ProjectFileItem from '../../components/ProjectFileItem';
// import ProjectFilesGrid from '../../components/ProjectFilesGrid';
import { BACKEND_API } from '../../config/index';

interface ProjectFile {
  id: number;
  name: string;
  program: string;
  genre: string;
}

interface ProjectFileProps {
  project_files: ProjectFile[];
}

const ProjectFilesPage: NextPage<ProjectFileProps> = ({ project_files }) => {
  // return (
  //   <div>
  //     <h1>Project Files</h1>
  //     {project_files.map((project_file) => (
  //       // <div key={project_file.id}>{project_file}</div>
  //       <ProjectFileItem key={project_file.id} projectFile={project_file} />
  //     ))}
  //   </div>
  // );
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          {/* <div className="mt-9"> */}
          <h1 className="text-center text-2xl mb-6">Project Files</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {project_files.map((project_file) => (
              <ProjectFileItem
                key={project_file.id}
                projectFile={project_file}
              />
            ))}
            {/* </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

// getStaticProps runs at build time only
export async function getStaticProps() {
  const res = await fetch(`${BACKEND_API}/project_files`);
  const project_files = await res.json();

  return {
    props: { project_files },
    revalidate: 60, // Regenerates the page every 60 seconds, TODO: Adjust interval
  };
}

export default ProjectFilesPage;
