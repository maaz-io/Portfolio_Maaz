'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import Navbar                from '@/components/ui/Navbar'
import FloatingResumePill   from '@/components/ui/FloatingResumePill'
import VideoIntro            from '@/components/sections/VideoIntro'
import HeroSection           from '@/components/sections/HeroSection'
import AboutSection          from '@/components/sections/AboutSection'
import ProjectsSection       from '@/components/sections/ProjectsSection'
import WorkExperienceSection from '@/components/sections/WorkExperienceSection'
import PublicationsFooterSection from '@/components/sections/PublicationsFooterSection'
import ScreenLoader from '@/components/sections/ScreenLoader'
import profile               from '@/data/profile.json'

// Snap: 0=video 1=hero 2=about 3..4=projects 5=work-exp 6=publications
const PROJECT_SLIDES = profile.projects.length
const TOTAL          = 7 + PROJECT_SLIDES  // 9

export default function Home() {
  const mainRef        = useRef(null)
  const idxRef         = useRef(0)
  const busyRef        = useRef(false)
  const tweenRef       = useRef(null)
  const loopOverlayRef = useRef(null)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const el = mainRef.current
    if (!el) return

    // Fade to black → instant scrollTop jump → fade in
    // Used whenever we loop footer → first section
    function fadeLoop(targetScrollTop, targetIdx) {
      busyRef.current = true
      tweenRef.current?.kill()
      gsap.to(loopOverlayRef.current, {
        opacity: 1,
        duration: 0.55,
        ease: 'power2.in',
        onComplete: () => {
          el.scrollTop    = targetScrollTop
          idxRef.current  = targetIdx
          gsap.to(loopOverlayRef.current, {
            opacity: 0,
            duration: 0.7,
            ease: 'power2.out',
            delay: 0.05,
            onComplete: () => {
              setTimeout(() => { busyRef.current = false }, 300)
            },
          })
        },
      })
    }

    function goTo(idx) {
      // Clamp to valid range - don't wrap around
      if (idx >= TOTAL) idx = TOTAL - 1
      if (idx < 0)      idx = 0

      if (idx === idxRef.current || busyRef.current) return

      idxRef.current = idx
      busyRef.current = true
      tweenRef.current?.kill()
      tweenRef.current = gsap.to(el, {
        scrollTop: idx * window.innerHeight,
        duration: 1.0,
        ease: 'power3.inOut',
        onComplete: () => { setTimeout(() => { busyRef.current = false }, 600) },
      })
    }

    function onWheel(e) {
      e.preventDefault()
      if (busyRef.current) return
      goTo(idxRef.current + (e.deltaY > 0 ? 1 : -1))
    }

    let touchY = 0
    function onTouchStart(e) { touchY = e.touches[0].clientY }
    function onTouchEnd(e) {
      const dy = touchY - e.changedTouches[0].clientY
      if (Math.abs(dy) < 40 || busyRef.current) return
      goTo(idxRef.current + (dy > 0 ? 1 : -1))
    }

    function onScroll() {
      idxRef.current = Math.round(el.scrollTop / window.innerHeight)
    }

    // Footer video ends → disabled (no looping back to top)
    // function onFooterLoop() {
    //   if (busyRef.current) return
    //   fadeLoop(0, 0)
    // }

    const isMobile = window.matchMedia('(max-width: 767px)').matches

    el.addEventListener('wheel',  onWheel,  { passive: false })
    el.addEventListener('scroll', onScroll, { passive: true  })

    let mTouchY = 0
    function onMobileTouchStart(e) { mTouchY = e.touches[0].clientY }
    function onMobileTouchEnd(e) {
      const dy = mTouchY - e.changedTouches[0].clientY
      if (Math.abs(dy) < 40) return
      // Don't loop - just clamp to boundaries
      if (dy > 0) goTo(idxRef.current + 1)
      if (dy < 0) goTo(idxRef.current - 1)
    }

    if (!isMobile) {
      el.addEventListener('touchstart', onTouchStart, { passive: true })
      el.addEventListener('touchend',   onTouchEnd,   { passive: true })
    } else {
      el.addEventListener('touchstart', onMobileTouchStart, { passive: true })
      el.addEventListener('touchend',   onMobileTouchEnd,   { passive: true })
    }
    // Disabled: no more looping back to top
    // window.addEventListener('footer-loop-back', onFooterLoop)

    return () => {
      el.removeEventListener('wheel',  onWheel)
      el.removeEventListener('scroll', onScroll)
      if (!isMobile) {
        el.removeEventListener('touchstart', onTouchStart)
        el.removeEventListener('touchend',   onTouchEnd)
      } else {
        el.removeEventListener('touchstart', onMobileTouchStart)
        el.removeEventListener('touchend',   onMobileTouchEnd)
      }
      // window.removeEventListener('footer-loop-back', onFooterLoop)
      tweenRef.current?.kill()
    }
  }, [])

  return (
    <>
      {showLoader && (
        <ScreenLoader onDismiss={() => setShowLoader(false)} />
      )}

      {/* Full-screen fade overlay for seamless footer → top loop */}
      <div
        ref={loopOverlayRef}
        style={{
          position: 'fixed',
          inset: 0,
          background: '#000',
          zIndex: 9999,
          opacity: 0,
          pointerEvents: 'none',
        }}
      />

      <Navbar />
      <FloatingResumePill />
      <main ref={mainRef} style={{ height: '100vh', overflowY: 'scroll', overscrollBehavior: 'none' }}>
        <div>
          <VideoIntro />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <WorkExperienceSection />
          <PublicationsFooterSection />
        </div>
      </main>
    </>
  )
}
