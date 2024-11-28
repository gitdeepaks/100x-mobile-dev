import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

function DisplayInset() {
  const insets = useSafeAreaInsets();
  return (
    <Text>
      Insets: {insets.bottom} - {insets.top}
    </Text>
  );
}

export default function App() {
  function onContactMe() {
    Linking.openURL("mailto:mail@mail.com");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Image
              source={{
                uri: "https://www.shutterstock.com/image-vector/full-stack-developer-programmer-who-260nw-2273927175.jpg",
              }}
              style={{ width: "100%", aspectRatio: 16 / 9 }}
            />
            <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/123456789?v=4",
              }}
              style={{
                width: 150,
                height: 150,
                borderRadius: 150,
                borderWidth: 5,
                borderColor: "#223242",
                marginTop: -75,
              }}
            />
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              Deepak Sankhyan
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginBottom: 10,
              }}
            >
              Full Stack Developer
            </Text>
            <View style={{ flexDirection: "row", gap: 15, marginVertical: 10 }}>
              <FontAwesome6 name="github" size={25} color="#252525" />
              <FontAwesome6 name="x-twitter" size={24} color="#252525" />
              <FontAwesome6 name="instagram" size={24} color="#252525" />
              <FontAwesome6 name="linkedin" size={24} color="#252525" />
              <FontAwesome6 name="facebook" size={24} color="#252525" />
              <FontAwesome6 name="youtube" size={24} color="#252525" />
              <FontAwesome6 name="whatsapp" size={24} color="#252525" />
              <FontAwesome6 name="telegram" size={24} color="#252525" />
              <FontAwesome6 name="at" size={24} color="#252525" />
            </View>
            <Button title="Contact Me" onPress={onContactMe} />

            <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
              I am an experienced React Native Fullstack Mobile Developer with a
              deep understanding of both front-end and back-end technologies.
              Over the years, I have honed my skills in building scalable,
              high-performance mobile applications using React Native,
              JavaScript, and TypeScript, with a focus on delivering seamless
              cross-platform experiences for iOS and Android. I am proficient in
              leveraging modern development tools and libraries, such as Redux,
              Axios, and Firebase, to create efficient and maintainable code. On
              the server-side, I have extensive experience working with Node.js,
              Express, and integrating APIs, databases, and cloud services to
              provide robust back-end functionality. I am also well-versed in
              RESTful API design, real-time communication with WebSockets, and
              cloud-based deployment using services like AWS and Google Cloud.
              Collaboration is key in my approach to development, and I thrive
              in agile environments where continuous learning and iteration are
              encouraged. I prioritize clean code, testing, and documentation,
              ensuring a smooth handoff between teams and stakeholders. With a
              passion for crafting user-friendly, performant apps, I am
              committed to staying up-to-date with the latest industry trends
              and best practices. Above all, I aim to deliver innovative,
              feature-rich mobile applications that drive user engagement and
              meet business goals efficiently.
            </Text>
            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
