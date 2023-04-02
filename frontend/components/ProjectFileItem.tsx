import Image from 'next/image';
import { ProjectFile } from '../types/ProjectFileModel';

interface ProjectFileItemProps {
  projectFile: ProjectFile;
}

const ProjectFileItem = ({ projectFile }: ProjectFileItemProps) => {
  const { id, name, program, genre } = projectFile;
  return (
    <div className="overflow-hidden border border-gray-300 rounded-lg shadow-md">
      <div className="flex items-center justify-center w-full h-48 overflow-hidden">
        <Image
          className="w-full h-48"
          src="/images/Artwork1.jpg"
          alt={name}
          width={1920} // Choose a width large enough to cover most screen sizes
          height={768} // Height should maintain the desired aspect ratio (in this case, 16:9)
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold">{name}</h2>
        <p className="mb-1 text-gray-600">{program}</p>
        <p className="text-gray-600">{genre}</p>
      </div>
    </div>
  );
};

export default ProjectFileItem;
