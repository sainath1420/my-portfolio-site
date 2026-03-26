import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-subtitle">Background</p>
          <h2 className="section-heading mt-2">Education & Awards</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-xl p-6"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <GraduationCap size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-bold font-heading text-foreground">Bachelor of Technology</h3>
            <p className="text-sm text-primary font-medium">DMS SVH College of Engineering</p>
            <p className="text-sm text-muted-foreground">Machilipatnam • Jun 2019 – Apr 2022</p>
            <p className="text-sm text-muted-foreground mt-2">CGPA: 7.58 / 10</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background border border-border rounded-xl p-6"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Award size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-bold font-heading text-foreground">Extra Miler Award</h3>
            <p className="text-sm text-primary font-medium">Smart IMS</p>
            <p className="text-sm text-muted-foreground mt-2">
              Recognized for exceptional dedication and outstanding contributions to projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
