'use client'

import { useEffect, useState } from 'react'

/**
 * Reading progress indicator component.
 * Shows a progress bar at the top of the viewport that fills as the user scrolls down the page.
 */
export default function ReadingProgress() {
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const calculateReadingProgress = () => {
      // Get the total height of the document
      const totalHeight =
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        ) - window.innerHeight

      // Get current scroll position
      const windowScrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

      // Calculate percentage of page scrolled
      if (totalHeight > 0) {
        setReadingProgress((windowScrollTop / totalHeight) * 100)
      }
    }

    // Initial calculation
    calculateReadingProgress()

    // Add scroll event listener
    window.addEventListener('scroll', calculateReadingProgress)
    // Add resize event listener to recalculate on window size change
    window.addEventListener('resize', calculateReadingProgress)

    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', calculateReadingProgress)
      window.removeEventListener('resize', calculateReadingProgress)
    }
  }, [])
  // Using style because Tailwind doesn't support dynamic width values with arbitrary values
  return (
    <div className="fixed top-0 right-0 left-0 z-[100] h-1 bg-gray-200 dark:bg-gray-700">
      <div
        className="bg-primary-500 h-1 transition-all duration-300 ease-out"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-label="Reading progress"
      />
    </div>
  )
}
