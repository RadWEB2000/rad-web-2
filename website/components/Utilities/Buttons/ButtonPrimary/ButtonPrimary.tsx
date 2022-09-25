import Link from "next/link";
import { IntButtonPrimary } from "./interface";
import { Wrapper } from "./style";
import { ReactElement } from "react";
import { TbDownload } from "react-icons/tb";
export const ButtonPrimary = ({
  download = false,
  handle,
  path,
  title,
}: IntButtonPrimary): ReactElement => {
  return (
    <>
      {path && (
        <Wrapper whileTap={{ scale: 0.9 }}>
          {download ? (
            <Link href={path}>
              <a>
                <p>{title}</p>
              </a>
            </Link>
          ) : (
            <Link href={path}>
              <a>
                <p>{title}</p>
              </a>
            </Link>
          )}
        </Wrapper>
      )}
      {handle && (
        <Wrapper onClick={handle} whileTap={{ scale: 0.9 }}>
          <p>{title}</p>
        </Wrapper>
      )}
    </>
  );
};
