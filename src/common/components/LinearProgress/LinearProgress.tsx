import s from "./LinearProgress.module.css"

export const LinearProgress = () => {
    return (
        <div className={s.root}>
          <div className={`${s.bar} ${s.indeterminate1}`}></div>
          <div className={`${s.bar} ${s.indeterminate2}`}></div>
        </div>
    )
}