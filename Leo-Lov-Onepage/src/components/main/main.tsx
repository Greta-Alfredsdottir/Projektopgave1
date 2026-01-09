import style from "./main.module.scss";

export function Main() {
  return (
    <main className={style.minMain}>
      <section>
        <img src="./image/moneyman.jpg" alt="" />
        <figcaption>
          <h2>INTET PROBLEM</h2>
          <p>
            Leo-lov har altid været det bedste advokatfirma i verden. Der er
            simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer
            så længe du har penge. Hvis du mod alt forventning skulle oplevel at
            støde på et retsligt problem som leo-lov ikke kan løse får du
            halvdelen af beløbet igen. Det er sådan vi har skabt en forretning
            der ikke kan andet end at vokse!
          </p>
        </figcaption>
      </section>
      <section>
        <figcaption>
          <h2>EVIG GARANTI</h2>
          <p>
            Leo-lov har altid været det bedste advokatfirma i verden. Der er
            simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer
            så længe du har penge. Hvis du mod alt forventning skulle oplevel at
            støde på et retsligt problem som leo-lov ikke kan løse får du
            halvdelen af beløbet igen. Det er sådan vi har skabt en forretning
            der ikke kan andet end at vokse!
          </p>
        </figcaption>
        <img src="./image/walkingman.jpg" alt="" />
      </section>
      <div>
        <h1>Mød Holdet</h1>
        <div className={style.MødHoldet}>
          <figure>
            <img src="./image/staff/Ellipse 1.png" alt="" />
            <h2>John Harbinger</h2>
            <p>
              ”Jeg er den mest successfulde advokat i firmaet. I hvert fald mere
              end Peter.”
            </p>
          </figure>
          <figure>
            <img src="./image/staff/Ellipse 2.png" alt="" />
            <h2>Peter Parker</h2>
            <p>
              “Jeg holder af kaffe og så er jeg helt enormt succesfuld. Meget
              mere end John”
            </p>
          </figure>
          <figure>
            <img src="./image/staff/Ellipse 3.png" alt="" />
            <h2>Elise Li</h2>
            <p>
              “Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg
              altid sagt.”
            </p>
          </figure>
          <figure>
            <img src="./image/staff/Ellipse 4.png" alt="" />
            <h2>Morten Nate</h2>
            <p>
              “Jeg er født på landet. På landet er der ingen ret og lov. Det er
              det vilde vest derude.”
            </p>
          </figure>
        </div>
      </div>
    </main>
  );
}
