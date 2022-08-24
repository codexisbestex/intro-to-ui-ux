export default function Therapists() {
  return (
    <section className="section therapist-section">
      <div className="container has-text-centered">
        <h1 class="title">
          Professional, licensed, and vetted therapists who you can trust
        </h1>
        <div className="columns">
          <div className="column is-narrow-desktop therapist-row">
            <figure className="image is-128x128">
              <img
                class="is-rounded"
                src="../src/assets/therapist-images/avatar-1.jpg"
              />
            </figure>
            <figure className="image is-128x128">
              <img
                class="is-rounded"
                src="../src/assets/therapist-images/avatar-2.jpg"
              />
            </figure>
            <figure className="image is-128x128">
              <img
                class="is-rounded"
                src="../src/assets/therapist-images/avatar-3.jpg"
              />
            </figure>
            <figure className="image is-128x128">
              <img
                class="is-rounded"
                src="../src/assets/therapist-images/avatar-4.jpg"
              />
            </figure>
            <figure className="image is-128x128">
              <img
                class="is-rounded"
                src="../src/assets/therapist-images/avatar-5.jpg"
              />
            </figure>
            <figure className="image is-128x128">
              <img
                class="is-rounded"
                src="../src/assets/therapist-images/avatar-6.jpg"
              />
            </figure>
            <figure className="image is-128x128">
              <img
                class="is-rounded"
                src="../src/assets/therapist-images/avatar-7.jpg"
              />
            </figure>
          </div>
        </div>
        <p>
          Tap into the world's largest network of licensed, accredited, and
          experienced therapists who can help you with a range of issues
          including depression, anxiety, relationships, trauma, grief, and more.
          With our therapists, you get the same professionalism and quality you
          would expect from an in-office therapist, but with the ability to
          communicate when and how you want.
        </p>
        <button className="button is-success is-outlined ">
          Get matched to a therapist
        </button>
      </div>
    </section>
  );
}
