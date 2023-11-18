import { Button } from "./Button";
import { Dots } from "./Dots";
import { Image } from "./Image";
import { TextFront } from "./TextFront";

export function Header() {
  const styleProps = "enable-background: new 0 0 191.6 1215.4";
  const classNameButtonActive =
    "btn btn-danger btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder";

  const classNameButtonUnActive =
    "btn btn-outline-danger btn-lg px-5 py-3 fs-6 fw-bolder";

  return (
    <header class="py-5">
      <div class="container px-5 pb-5">
        <div class="row gx-5 align-items-center">
          <div class="col-xxl-5">
            <div class="text-center text-xxl-start">
              <TextFront />
              <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                <Button
                  text="Resume"
                  href="resume.html"
                  className={classNameButtonActive}
                />
                <Button
                  text="Projects"
                  href="projects.html"
                  className={classNameButtonUnActive}
                />
              </div>
            </div>
          </div>
          <div class="col-xxl-7">
            <div class="d-flex justify-content-center mt-5 mt-xxl-0">
              <div class="profile bg-gradient-primary-to-secondary">
                <Image />
                <Dots className="dots-1" styleProps={{ styleProps }} />
                <Dots className="dots-2" styleProps={{ styleProps }} />
                <Dots className="dots-3" styleProps={{ styleProps }} />
                <Dots className="dots-4" styleProps={{ styleProps }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
