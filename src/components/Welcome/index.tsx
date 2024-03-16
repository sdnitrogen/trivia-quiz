import style from "./style.module.css"

type Props = {}

const Welcome = (props: Props) => {
  return (
    <section
      className={`${style.container} flex flex-col gap-12 w-[max-content] ml-auto`}>
      <h1 className={`${style.h1} flex flex-col items-start text-foreground`}>
        <span className="text-6xl font-light">Welcome to the</span>
        <span className={`${style.span_bold} text-6xl font-semibold`}>
          Trivia Quiz!
        </span>
      </h1>
      <p className={`${style.p} text-xl italic text-muted-foreground`}>
        Configure quiz settings to get started.
      </p>
    </section>
  )
}

export default Welcome
