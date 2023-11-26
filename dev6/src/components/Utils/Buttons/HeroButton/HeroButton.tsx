import Link from "next/link";

type tHeroButton = {
  label: string;
  uri: string;
};

export default function HeroButton(props: tHeroButton) {
  return <Link href={props.uri}>{props.label}</Link>;
}
