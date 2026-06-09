'use client'

import { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp, FaEnvelope, FaFacebook } from 'react-icons/fa'
import { gsap } from '@/lib/gsap'
import profile from '@/data/profile.json'
import styles from '@/styles/sections/Footer.module.css'

const SOCIAL_ICONS = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  WhatsApp: FaWhatsapp,
  Email: FaEnvelope,
  Facebook: FaFacebook,
}

export default function Footer() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const socialRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const scroller = document.querySelector('main')
    if (!scroller) return

    let isActive = false

    function resetAnim() {
      gsap.killTweensOf(contentRef.current)
      gsap.killTweensOf(socialRef.current)
      gsap.set(contentRef.current, { opacity: 0, y: 40 })
      gsap.set(socialRef.current, { opacity: 0, y: 20 })
    }

    function playAnim() {
      resetAnim()
      gsap.to(contentRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      const socialLinks = socialRef.current?.querySelectorAll('a') ?? []
      gsap.to(socialLinks, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08, delay: 0.3 })
    }

    function onScroll() {
      const inRange = Math.abs(scroller.scrollTop - section.offsetTop) < window.innerHeight * 0.5
      if (inRange && !isActive) { isActive = true; playAnim() }
      if (!inRange && isActive) { isActive = false; resetAnim() }
    }

    scroller.addEventListener('scroll', onScroll, { passive: true })
    return () => scroller.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Background gradient */}
      <div className={styles.bgGradient} />

      {/* Content */}
      <div className={styles.content}>
        <div ref={contentRef} className={styles.contentInner}>
          <p className={styles.cta}>Ready to bring your ideas to life?</p>
          <h2 className={styles.heading}>Let's Connect</h2>
          <p className={styles.description}>
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a href={`mailto:${profile.email}`} className={styles.emailCta}>
            Get in touch
          </a>
        </div>

        {/* Social Links */}
        <div ref={socialRef} className={styles.socials}>
          {profile.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.label]
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social.label}
              >
                {Icon && <Icon size={24} />}
                <span className={styles.label}>{social.label}</span>
              </a>
            )
          })}
        </div>

        {/* Bottom info */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 {profile.name.full}. All rights reserved.
          </p>
          <p className={styles.credit}>
            Designed & Developed with Precision.
          </p>
        </div>
      </div>
    </section>
  )
}
