// import { StatusBar } from "expo-status-bar";
import React from "react";

import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableHighlight,
	TouchableNativeFeedback,
	SafeAreaView,
	Button,
	Alert,
	Platform,
	StatusBar,
	Dimensions,
} from "react-native";

export default function App() {
	console.log(Dimensions.get("screen"));
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.home}></View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#333",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		alignItems: "center",
		// justifyContent: "center",
	},
	home: {
		backgroundColor: "#F779",
		width: "100%",
		height: "30%",
	},
	text: {
		color: "white",
		fontSize: 28,
	},
	image: {
		width: 200,
		height: 300,
	},
});

// {/* <Text onPress={handlePress} style={styles.text}>
// 	Hello World
// </Text>
// <TouchableWithoutFeedback>
// 	<Image
// 		style={styles.image}
// 		fadeDuration={1000}
// 		source={{
// 			uri: "https://picsum.photos/200/300",
// 		}}
// 	/>
// </TouchableWithoutFeedback>
// <TouchableNativeFeedback
// 	onPress={() =>
// 		Alert.prompt("title", "only for android", (text) => console.log(text))
// 	}
// >
// 	<View style={{ height: 70, width: 200, backgroundColor: "orange" }} />
// </TouchableNativeFeedback>
// {/* <StatusBar style="auto" /> */}
// <Button
// 	color="purple"
// 	title="Click Me"
// 	onPress={() => console.log("button pressed")}
// />
