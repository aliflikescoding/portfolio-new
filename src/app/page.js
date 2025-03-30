import Typewriter from "./components/Typewriter";
import FramerMotionWrapper from "./components/FramerMotionWrapper";
import { AnimatePresence } from "framer-motion";
import CustomButton from "./components/CustomButton";
import { homeButtons } from "./data/data-home";

export default function Home() {
  return (
    <AnimatePresence>
      <div className="h-screen flex flex-col items-center justify-center">
        <FramerMotionWrapper duration={1.5}>
          <div className="flex flex-col items-center text-center gap-2">
            <h1 className="font-semibold text-6xl sm:text-8xl custom-shadow">
              <Typewriter text="Hi !" speed={100} />
            </h1>
            <p className="font-light text-2xl sm:text-4xl custom-shadow">
              I'm Alif, what are you looking for?
            </p>
            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              {homeButtons.map((button, index) => (
                <CustomButton
                  key={index}
                  text={button.en}
                  type="link"
                  link={button.route}
                />
              ))}
            </div>
          </div>
        </FramerMotionWrapper>
      </div>
    </AnimatePresence>
  );
}
