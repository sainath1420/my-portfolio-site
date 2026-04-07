import { motion } from "framer-motion";
import devWorkspace from "@/assets/dev-workspace.png";

const DevIllustration = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <motion.img
        src={devWorkspace}
        alt="Developer working at desk with code on screen"
        loading="lazy"
        width={800}
        height={700}
        className="w-full h-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
};

export default DevIllustration;
