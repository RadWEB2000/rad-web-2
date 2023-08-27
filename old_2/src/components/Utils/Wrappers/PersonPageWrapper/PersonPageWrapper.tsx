import Link from "next/link";
import styles from "./PersonPageWrapper.module.scss";
import { GrDownload } from "react-icons/gr";
import { motion } from "framer-motion";
interface iPersonPageWrapper {
	address: string;
	children: JSX.Element | JSX.Element[];
	email: {
		name: string;
		value: string;
		url: string;
	};
	location?: string;
	phone: {
		name: string;
		value: string;
		url: string;
	};
}
export const PersonPageWrapper = ({
	address,
	children,
	email,
	location,
	phone,
}: iPersonPageWrapper) => {
	return (
		<div className={styles.wrapper}>
			<aside>
				<div className={styles.cv}>
					<Link href="#" legacyBehavior>
						<motion.a
							whileTap={{
								scaleX: 0.98,
							}}
						>
							<span>Curriculum Vitae</span>
							<i>
								<GrDownload />
							</i>
						</motion.a>
					</Link>
				</div>
				<div className={styles.details}>
					<address className={styles.address}>
						<p
							className={styles.location}
							dangerouslySetInnerHTML={{ __html: address }}
						/>
						<li className={styles.contact}>
							<Link href={phone.url}>{phone.value}</Link>
							<Link href={email.url}>{email.value}</Link>
						</li>
					</address>
					{location && (
						<div className={styles.map}>
							<iframe
								src={location}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						</div>
					)}
				</div>
			</aside>
			<main>{children}</main>
		</div>
	);
};
