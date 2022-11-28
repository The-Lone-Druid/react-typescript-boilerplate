import React from "react";
import { motion } from "framer-motion";

type Props = {};

const animations = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 }
};

const Page: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <motion.div
      variants={animations}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    >
      {props.children}
    </motion.div>
  );
};

export default Page;
