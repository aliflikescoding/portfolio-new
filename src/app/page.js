import Typewriter from "./components/Typewriter";
import FramerMotionWrapper from "./components/FramerMotionWrapper";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <div className="h-screen flex flex-col items-center justify-center">
        <FramerMotionWrapper duration={1.5}>
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-8xl custom-shadow">
              <Typewriter text="Hi !" speed={100} />
            </h1>
            <p className="font-light text-4xl custom-shadow">
              I'm Alif, what are you looking for?
            </p>
          </div>
        </FramerMotionWrapper>
      </div>
    </AnimatePresence>
  );
}
