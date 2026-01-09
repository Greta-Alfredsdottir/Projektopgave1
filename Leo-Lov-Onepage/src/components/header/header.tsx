import style from "./header.module.scss";

export function Header() {
  return (
    <header className={style.minHeader}>
      <img src="./image/headerimage.jpg" alt="" />
      <div className={style.minTopright}>
        {" "}
        <span>LEO</span>-LOV
      </div>
    </header>
  );
}
