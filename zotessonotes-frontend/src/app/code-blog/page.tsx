import Link from "next/link";

export default function CodeBlogPage() {
  return (
    <div className="flex justify-center items-center" style={{marginTop: "2rem"}}>
      <ul className="list-disc">
        <li>
          <Link className="text-blue-500 hover:text-blue-800" href="/code-blog/ynamar-engine-28-03-2025">Ynamar Engine Desenvolvimento #1 - Começo</Link>
        </li>
      </ul>
    </div>
  );
}
