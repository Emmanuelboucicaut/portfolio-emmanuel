import { Dots } from "./Dots";
import { Image } from "./Image";

export function ImageFront({ styleProps }) {
  return (
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
  );
}
