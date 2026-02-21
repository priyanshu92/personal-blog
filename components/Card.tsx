import Image from './Image'
import Link from './Link'
import type { ReactNode } from 'react'

const markdownLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g

const renderDescription = (description: string) => {
  const matches = Array.from(description.matchAll(markdownLinkPattern))

  if (matches.length === 0) {
    return description
  }

  const renderedParts: ReactNode[] = []
  let lastIndex = 0

  matches.forEach((match, index) => {
    const [fullMatch, text, href] = match
    const matchStart = match.index ?? 0

    if (matchStart > lastIndex) {
      renderedParts.push(description.slice(lastIndex, matchStart))
    }

    renderedParts.push(
      <Link
        key={`${href}-${index}`}
        href={href}
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        {text}
      </Link>
    )

    lastIndex = matchStart + fullMatch.length
  })

  if (lastIndex < description.length) {
    renderedParts.push(description.slice(lastIndex))
  }

  return renderedParts
}

const Card = ({ title, description, imgSrc, href, techStack }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${imgSrc && 'h-full'} overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-contain object-center p-4 md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-contain object-center p-4 md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
          {renderDescription(description)}
        </p>
        {techStack && techStack.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {techStack.map((tech: string) => (
              <span
                key={tech}
                className="bg-primary-600 inline-block rounded px-2 py-1 text-xs font-semibold text-white dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {href && (
          <Link
            href={href}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
