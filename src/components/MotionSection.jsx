import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function MotionSection({ as = 'section', className = '', children, ...props }) {
  const Component = motion[as] || motion.section;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
      {...props}
    >
      {children}
    </Component>
  );
}
