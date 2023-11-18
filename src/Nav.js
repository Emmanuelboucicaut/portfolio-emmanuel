import { LabelName } from "./LabelName";
import { MainMenu } from "./MainMenu";

export function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div class="container px-5">
        <LabelName />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <MainMenu />
        </div>
      </div>
    </nav>
  );
}
