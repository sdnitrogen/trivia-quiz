import Welcome from "../Welcome"
import style from "./style.module.css"

type Props = {}

const LandingHero = (props: Props) => {
  return (
    <div className={`${style.container} grid grid-cols-2 gap-28 w-full`}>
      <Welcome />
      <div
        className={`${style.wrapper_configurator} w-full flex flex-col gap-6 justify-self-end`}></div>
    </div>
  )
}

export default LandingHero
