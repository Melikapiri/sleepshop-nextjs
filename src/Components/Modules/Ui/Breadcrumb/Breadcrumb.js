import Link from "next/link";

export default function Breadcrumb({ items }) {
    return (
        <nav aria-label="breadcrumb" className="text-gray-600 text-sm my-4 sm:my-8">
            <ol className="flex space-x-2">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={index} className="flex items-center">
                            {item.href && !isLast ? (
                                <Link href={item.href}>
                                    {item.name}
                                </Link>
                            ) : (
                                <span className={isLast ? "font-semibold" : ""}>{item.name}</span>
                            )}

                            {!isLast && <span className="mx-2 text-gray-400">/</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
