'use client'

import { useState } from 'react'
import { FiFileText } from 'react-icons/fi'
import styles from '@/styles/ui/FloatingResumePill.module.css'

export default function FloatingResumePill() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="https://maazresume.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.pill} ${isHovered ? styles.expanded : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className={styles.icon}>
        <FiFileText size={24} />
      </div>
      <span className={styles.text}>SEE RESUME</span>
    </a>
  )
}
