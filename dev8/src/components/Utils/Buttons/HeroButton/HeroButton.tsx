import Link from 'next/link';
import { GrFormNextLink } from 'react-icons/gr';

export type tHeroButton = {
  label: string;
  uri: string;
};

export default function HeroButton(props: tHeroButton) {
  return (
    <li title={props.label}>
      <Link href={props.uri}>
        <span>{props.label}</span>
        <i>
          <GrFormNextLink />
        </i>
      </Link>
    </li>
  );
}
