import style from './card.module.scss'

export function Card({cardOverskrift, cardText}){
    return <section className={style.minCard}>
    <section>
        <h2>{cardOverskrift}</h2>
        <p>{cardText}</p>
    </section>
    </section>

}