import Banner from "../../Component/Banner/Banner";
import "./About.css";
const About = () => {
  return (
    <>
      <Banner title="About" smtitle="about" />

      <section className="about">
        <div className="container">
          <div className="row-about">
            <div className="col-lg-12 col-md-12">
              <div className="side-about">
                <h3>Eagle </h3>
                <p className="text-one">
                  Was formed in October 2019 as a result of the merger between 3
                  independent and successful marketing and technology companies,
                  EmailMonks, WebbyMonks and Octos.
                </p>
                <p className="text-tow">
                  The drastic shift in recent years proved the outsourcing
                  industry is far more than just a cost-cutting executional
                  service provider.
                </p>
                <p className="text-three">
                  Our relationship with our clients claimed the expectations
                  have evolved. Uplers aims at adding value to the clients, not
                  just through expertise, but through innovation, processes &
                  people. Individually growing in the niche market empowered
                  each brand to flourish, now is the time to deliver
                  best-of-breed services to our clients under one umbrella.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
