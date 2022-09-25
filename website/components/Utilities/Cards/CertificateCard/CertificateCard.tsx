import { IntCertificateCard } from "./interface";
import { Wrapper } from "./style";
import Link from "next/link";
export const CertificateCard = ({
  content,
  path,
  title,
}: IntCertificateCard) => {
  return (
    <Wrapper
      whileHover={{
        scale:1.03
      }}
    >
      <div>
        <h3>
          <Link href={path}>
            <a download>{title}</a>
          </Link>
        </h3>
      </div>
      <section>
        <p
          className="content"
          dangerouslySetInnerHTML={{ __html: content.substring(0, 350) }}
        />
      </section>
    </Wrapper>
  );
};
