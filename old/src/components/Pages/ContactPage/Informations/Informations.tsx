import Link from "next/link";
import styles from "./Informations.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IntInformations } from "./interface";
import { motion } from "framer-motion";
const Informations = ({
	address,
	content,
	email,
	nip,
	phone,
	regon,
}: IntInformations) => {
	return (
		<section className={styles.wrapper}>
			<h2>RadWEB</h2>
			<p dangerouslySetInnerHTML={{ __html: content }} />
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
					<Link href={`mailto:${email.address}`} legacyBehavior>
						<motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.93 }}>
							<i>
								<span>
									<HiOutlineMail />
								</span>
							</i>
							<p>{email.name}</p>
						</motion.a>
					</Link>
					<Link href={`tel:${phone.address}`} legacyBehavior>
						<motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.93 }}>
							<i>
								<span>
									<FaPhoneAlt />
								</span>
							</i>
							<p>{phone.name}</p>
						</motion.a>
					</Link>
				</ul>
			</address>
		</section>
	);
};
export default Informations;
