import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      {/* Begin of Nav bar */}
      <nav className="w-full pt-3 mb-10 flex justify-between items-center flex-row">
        <img src={logo} alt="synth_logo" className="w-32 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/psonH");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      {/* End of Nav bar */}

      {/* Begin of Hero section */}
      <h1 className="head_text">
        Synthesize Stories with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Discover clarity effortlessly with SynthScribe — an advanced AI
        Summarizer. Simplify complex content swiftly and enhance your
        understanding seamlessly. Precision summaries for effortless
        comprehension.
      </h2>
    </header>
  );
};

export default Hero;
