import { AboutMe } from "./AboutMe";
import { NetWorkMedia } from "./NetWorkMedia";

export function Section() {
  return (
    <section className="bg-light py-5">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xxl-8">
            <div className="text-center my-5">
              <AboutMe />
              <NetWorkMedia />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
