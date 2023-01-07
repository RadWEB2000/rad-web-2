import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IntInformations } from "./interface";
const Informations = ({
	address,
	content,
	email,
	nip,
	phone,
	regon,
}: IntInformations) => {
	return (
		<section>
			<h2>RadWEB</h2>
			<p>{content}</p>

			<address>
				<p dangerouslySetInnerHTML={{ __html: address }} />
				{nip && (
					<p>
						<b>NIP:</b>
						{` ${nip}`}
					</p>
				)}
				{regon && (
					<p>
						<b>REGON:</b>
						{` ${regon}`}
					</p>
				)}
				<ul>
					<li>
						<Link href={email.address}>
							<i>
								<span>
									<HiOutlineMail />
								</span>
							</i>
							<p>{email.name}</p>
						</Link>
					</li>
					<li>
						<Link href={phone.address}>
							<i>
								<span>
									<FaPhoneAlt />
								</span>
							</i>
							<p>{phone.name}</p>
						</Link>
					</li>
				</ul>
			</address>
		</section>
	);
};
export default Informations;
