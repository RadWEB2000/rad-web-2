import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { CiMail, CiPhone } from "react-icons/ci";
import { IntPersonCardContactPage } from "./interface";
const PersonCardContactPage = ({
	email,
	fullname,
	image,
	job,
	path,
	phone,
}: IntPersonCardContactPage): ReactElement => {
	return (
		<li>
			<figure>
				<Image
					alt={`${fullname.firstname} ${fullname.lastname} - ${job}`}
					fill
					src={image}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					title={`${fullname.firstname} ${fullname.lastname} - ${job}`}
					quality={90}
				/>
			</figure>
			<figcaption>
				<section>
					<h2>
						<Link
							href={path}
						>{`${fullname.firstname} ${fullname.lastname}`}</Link>
					</h2>
					<h3>{job}</h3>
				</section>
				<div>
					<Link href={`mailto:${email.adress}`}>
						<span>
							<i>
								<span>
									<CiMail />
								</span>
							</i>
							{email.name}
						</span>
					</Link>
					<Link href={`mailto:${phone.adress}`}>
						<span>
							<i>
								<span>
									<CiPhone />
								</span>
							</i>
							{phone.name}
						</span>
					</Link>
				</div>
			</figcaption>
		</li>
	);
};
export default PersonCardContactPage;
