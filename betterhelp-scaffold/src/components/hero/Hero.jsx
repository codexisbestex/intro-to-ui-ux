export default function Hero() {
  return (
    <section className="hero is-link is-fullheight">
      <div className="hero-head">Hero Head</div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">You deserve to be happy TEST TEST.</p>
          <p className="subtitle">What type of therapy are you looking for?</p>

          <div className="columns is-centered">
            <div className="column is-2">
              <button className="button is-primary is-fullwidth hero_therapy-type">
                {" "}
                Individual <br />
                (for myself)
              </button>
            </div>
            <div className="column is-2">
              <button className="button is-primary is-fullwidth">
                {" "}
                Couples <br />
                (for me and my partner)
              </button>
            </div>
            <div className="column is-2">
              <button className="button is-primary is-fullwidth">
                {" "}
                Teen <br />
                (for my child)
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-foot">Hero Foot</div>
    </section>
  );
}
