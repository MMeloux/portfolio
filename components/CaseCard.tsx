import Link from "next/link";

type CaseCardProps = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  slug: string;
  colorClass?: string;
};

export default function CaseCard({
  number,
  title,
  description,
  tags,
  slug,
  colorClass = "bg-gray-100",
}: CaseCardProps) {
  return (
    <article
      className={`${colorClass} rounded-lg p-12 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12`}
    >
      <div>
        <p className="text-caption tracking-caption uppercase text-gray-600">
          Case / {number}
        </p>

        <h3 className="mt-4 text-h1 leading-tight font-semibold text-ink">
          {title}
        </h3>

        <p className="mt-6 text-body-lg leading-body-lg text-gray-900 max-w-prose">
          {description}
        </p>

        <ul className="mt-6 flex flex-wrap items-center">
          {tags.map((tag, i) => (
            <li
              key={tag}
              className="flex items-center text-caption tracking-caption uppercase text-gray-600"
            >
              <span>{tag}</span>
              {i < tags.length - 1 && (
                <span aria-hidden="true" className="mx-3">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>

        <Link
          href={`/cases/${slug}`}
          className="mt-8 inline-block text-body text-ink hover:underline"
        >
          Ver case<span className="ml-1">→</span>
        </Link>
      </div>

      <div className="aspect-[4/3] rounded-md bg-white flex items-center justify-center">
        <span className="text-caption tracking-caption uppercase text-gray-400">
          Mockup {title}
        </span>
      </div>
    </article>
  );
}
