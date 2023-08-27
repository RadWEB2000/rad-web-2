import styles from "@default/components/Layout/Newsletter/Newsletter.module.scss";

export default function Newsletter() {
	return (
		<div className={styles.wrapper}>
			<section className={styles.content}>
				<h2>Zapisz się na newsletter</h2>
				<p>
					Cumque aspernatur expedita deleniti libero repudiandae officia qui
					molestias repellendus. Voluptatem sapiente eius fuga voluptatem modi
					numquam vel velit. Odit impedit facilis. Doloribus iste accusantium.
					Id vitae optio dignissimos minima ut. Error amet eum quo corrupti
					commodi.
				</p>
			</section>
			<div className={styles.form}>
				<form action="" onSubmit={(e) => e.preventDefault()}>
					<div className={styles.field}>
						<label htmlFor="newsletter">Adres e-mail</label>
						<input type="email" name="newsletter" id="newsletter" />
					</div>
					<button>zapisz się</button>
				</form>
			</div>
		</div>
	);
}
