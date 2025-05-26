"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { styles } from "../styles"
import { textVariant } from "../utils/motion"

const Carousel = ({ items = [], renderItem, title, subtitle, description, itemsPerPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [actualItemsPerPage, setActualItemsPerPage] = useState(itemsPerPage)
  const [totalPages, setTotalPages] = useState(1)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right
  const carouselRef = useRef(null)

  // Handle responsive itemsPerPage
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = window.innerWidth < 768 ? 1 : typeof itemsPerPage === "number" ? itemsPerPage : 3
      setActualItemsPerPage(newItemsPerPage)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [itemsPerPage])

  // Update total pages when items or actualItemsPerPage changes
  useEffect(() => {
    if (!items || items.length === 0) {
      setTotalPages(1)
      return
    }

    const pages = Math.ceil(items.length / actualItemsPerPage)
    setTotalPages(pages)

    // Reset current page if it's out of bounds
    if (currentPage >= pages) {
      setCurrentPage(0)
    }
  }, [items, actualItemsPerPage, currentPage])

  const handlePrevious = () => {
    setDirection(-1) // Moving left
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1) // Moving right
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const handleDotClick = (index) => {
    setDirection(index > currentPage ? 1 : -1)
    setCurrentPage(index)
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      handleNext()
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      handlePrevious()
    }
  }

  // Calculate visible items directly in render
  const startIndex = currentPage * actualItemsPerPage
  const visibleItems = items.slice(startIndex, Math.min(startIndex + actualItemsPerPage, items.length))

  // Animation variants for the carousel container
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{subtitle}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{title}</h2>
      </motion.div>

      {description && (
        <div className="w-full flex justify-center mt-3 mb-10">
          <motion.p
            variants={textVariant(0.2)}
            className="text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
          >
            {description}
          </motion.p>
        </div>
      )}

      <div
        ref={carouselRef}
        className="relative w-full mt-10 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel-container relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full flex flex-wrap justify-center gap-7"
            >
              {visibleItems.length > 0 ? (
                visibleItems.map((item, index) => (
                  <div key={`item-${startIndex + index}`} className="carousel-item">
                    {renderItem(item, startIndex + index)}
                  </div>
                ))
              ) : (
                <div className="text-center text-secondary">No items to display</div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Only show navigation if there are multiple pages */}
        {totalPages > 1 && (
          <>
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-3 rounded-r-lg z-10"
              aria-label="Previous item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-3 rounded-l-lg z-10"
              aria-label="Next item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full ${currentPage === index ? "bg-[#915EFF]" : "bg-secondary"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Carousel
