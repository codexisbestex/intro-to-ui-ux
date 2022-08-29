export default function GiftMembership() {
  return (
    <section className="section membership-row">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns">
              <div className="column">
                <h2 className="title has-text-black">
                  Give the gift of a BetterHelp membership
                </h2>
                <p className="has-text-black">
                  Therapy is one of the most meaningful gifts you can give to
                  your friends and loved ones.
                </p>
                <button className="button is-danger mt-5">
                  Gift a membership
                </button>
              </div>
              <div className="column">
                <figure className="image">
                  <img src="../src/assets/gift-giving.jpg"></img>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
