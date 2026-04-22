import { motion } from "framer-motion";
function AnimatedBackground(){
    return (
        <motion.div
            className="fixed inset-0 -z-10"
            animate={{
                background: ["linear-gradient(135deg, #0f172a, #1e293b)","linear-gradient(135deg, #1e293b, #111827)","linear-gradient(135deg, #020617, #0f172a)"]
            }}
            transition={{
                duration:8,
                repeat:Infinity,
                ease:"easeInOut"
            }}
        />
    )
}

export default AnimatedBackground;