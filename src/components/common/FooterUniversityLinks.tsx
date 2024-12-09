import { getAllUniversities } from "@/services/getAllUniversities";
import { University } from "@/types/university";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

const FooterUniversityLinks = async () => {
  const universities = await getAllUniversities({ limit: 8 });

  return (
    <ul className="flex flex-col justify-between gap-4">
      {universities.results.map((university: University) => (
        <li className="flex items-center" key={university.id}>
          <IoMdArrowDropright className="text-2xl" />
          <Link
            className="duration-200 hover:text-primary"
            href={`/universities/${university.slug}`}
          >
            {university.name}
          </Link>
        </li>
      ))}
      <li className="flex items-center">
        <IoMdArrowDropright className="text-2xl" />
        <Link className="duration-200 hover:text-primary" href="/universities">
          View All Universities
        </Link>
      </li>
    </ul>
  );
};

export default FooterUniversityLinks;
