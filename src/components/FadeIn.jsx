import { motion } from "framer-motion";

function FadeIn({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 80,
                filter: "blur(10px)",
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

export default FadeIn;