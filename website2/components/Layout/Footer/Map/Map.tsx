import { Wrapper } from "@googlemaps/react-wrapper";
import styles from "./Map.module.scss";
const Map = () => {
	return (
		//     <Wrapper apiKey={"AIzaSyAT_o6PERfZ3nHsXOX_LwMhdazR5s-QJGs"}>
		//     <MyMapComponent />
		//   </Wrapper>
		<div className={styles.wrapper}>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9804.27375852743!2d16.881892!3d52.096686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705abcc5a5c7605%3A0xcfaadbf09f94aecf!2sRadWEB!5e0!3m2!1spl!2spl!4v1674916451396!5m2!1spl!2spl"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
};
export default Map;
