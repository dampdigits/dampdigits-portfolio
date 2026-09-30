import { motion } from "framer-motion"

export function HeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md md:max-w-lg" aria-hidden>
      <motion.svg
        viewBox="0 0 420 420"
        className="h-full w-full"
        initial="hidden"
        animate="visible"
      >
        <defs>
          <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a2236" />
            <stop offset="100%" stopColor="#0a0f1c" />
          </linearGradient>
        </defs>

        {/* Soft backdrop plane */}
        <motion.rect
          x="48"
          y="64"
          width="300"
          height="280"
          rx="4"
          fill="url(#panel)"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        />

        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.line
            key={`h-${i}`}
            x1="68"
            x2="328"
            y1={100 + i * 48}
            y2={100 + i * 48}
            stroke="#2a3348"
            strokeWidth="1"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 0.35 + i * 0.05, duration: 0.4 },
              },
            }}
          />
        ))}

        {/* Floating 2D blocks */}
        <motion.rect
          x="88"
          y="120"
          width="72"
          height="40"
          rx="2"
          fill="#00b4a6"
          variants={{
            hidden: { opacity: 0, x: -16 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 0.45, duration: 0.5 },
            },
          }}
        />
        <motion.rect
          x="176"
          y="120"
          width="112"
          height="40"
          rx="2"
          fill="#2a3348"
          stroke="#00b4a6"
          strokeWidth="1.5"
          variants={{
            hidden: { opacity: 0, x: 16 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 0.55, duration: 0.5 },
            },
          }}
        />
        <motion.rect
          x="88"
          y="184"
          width="200"
          height="12"
          rx="2"
          fill="#3d4a63"
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: { delay: 0.65, duration: 0.55 },
            },
          }}
          style={{ transformOrigin: "88px 190px" }}
        />
        <motion.rect
          x="88"
          y="208"
          width="148"
          height="12"
          rx="2"
          fill="#3d4a63"
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: { delay: 0.75, duration: 0.55 },
            },
          }}
          style={{ transformOrigin: "88px 214px" }}
        />
        <motion.rect
          x="88"
          y="248"
          width="56"
          height="56"
          rx="2"
          fill="#e8a54b"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.85, duration: 0.5 },
            },
          }}
        />
        <motion.rect
          x="160"
          y="248"
          width="56"
          height="56"
          rx="2"
          fill="#00b4a6"
          opacity="0.55"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 0.55,
              y: 0,
              transition: { delay: 0.95, duration: 0.5 },
            },
          }}
        />
        <motion.rect
          x="232"
          y="248"
          width="56"
          height="56"
          rx="2"
          fill="#2a3348"
          stroke="#d4dae6"
          strokeWidth="1"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 1.05, duration: 0.5 },
            },
          }}
        />

        {/* Accent frame */}
        <motion.rect
          x="320"
          y="88"
          width="52"
          height="220"
          rx="2"
          fill="none"
          stroke="#00b4a6"
          strokeWidth="2"
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 0.5, duration: 0.6 },
            },
          }}
        />
        <motion.circle
          cx="346"
          cy="140"
          r="10"
          fill="#00b4a6"
          variants={{
            hidden: { scale: 0 },
            visible: {
              scale: 1,
              transition: { delay: 1.1, type: "spring", stiffness: 260, damping: 18 },
            },
          }}
        />
        <motion.rect
          x="332"
          y="170"
          width="28"
          height="8"
          rx="1"
          fill="#e8a54b"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 1.2 } },
          }}
        />
        <motion.rect
          x="332"
          y="190"
          width="20"
          height="8"
          rx="1"
          fill="#5a6578"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 1.3 } },
          }}
        />
      </motion.svg>

      {/* Subtle floating motion on outer wrapper */}
      <motion.div
        className="pointer-events-none absolute -top-3 -right-2 h-16 w-16 border border-accent/40 bg-accent-soft/40"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-6 -left-3 h-10 w-10 bg-warm/80"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
    </div>
  )
}
