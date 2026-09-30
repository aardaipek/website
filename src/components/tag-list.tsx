export function TagList({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="text-xs text-stone-400 dark:text-stone-500 border border-stone-200 dark:border-stone-800 rounded-full px-2.5 py-0.5"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
