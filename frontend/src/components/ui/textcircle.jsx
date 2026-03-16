import { motion } from "framer-motion";

const RotatingCompanyCircle = () => {
  const text = " CREAVELABS • DIGITAL AGENCY • ";

  return (
    <motion.div
      className="fixed bottom-10 right-10 z-50 w-32 h-32"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 12,
        ease: "linear",
      }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="
              M 100,100
              m -75,0
              a 75,75 0 1,1 150,0
              a 75,75 0 1,1 -150,0
            "
          />
        </defs>

        <text
          fill="white"
          fontSize="14"
          fontWeight="600"
          letterSpacing="3"
        >
          <textPath href="#circlePath">
            {text.repeat(3)}
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
};

export default RotatingCompanyCircle;