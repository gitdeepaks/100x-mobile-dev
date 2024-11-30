import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
  ActivityIndicator,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import ProjectCard from "./cards/ProjectCard";

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
  const name = "Deepak Sankhyan";

  function getOccupation() {
    return "Full Stack Developer";
  }

  const renderIcons = () => {
    return (
      <View style={{ flexDirection: "row", gap: 15, marginVertical: 10 }}>
        {links.github && (
          <FontAwesome6 name="github" size={25} color="#252525" />
        )}
        {links.x && <FontAwesome6 name="x-twitter" size={24} color="#252525" />}
        <FontAwesome6 name="instagram" size={24} color="#252525" />
        <FontAwesome6 name="linkedin" size={24} color="#252525" />
        <FontAwesome6 name="facebook" size={24} color="#252525" />
        <FontAwesome6 name="youtube" size={24} color="#252525" />
        <FontAwesome6 name="whatsapp" size={24} color="#252525" />
        <FontAwesome6 name="telegram" size={24} color="#252525" />
        {links.email && <FontAwesome6 name="at" size={24} color="#252525" />}
      </View>
    );
  };

  // const isLoading = true;
  // const isError = true;

  //   const likes = 10;

  //   // if (isLoading)
  //   //   return (
  //   //     <ActivityIndicator size="large" color="#252525" style={{ flex: 1 }} />
  //   //   );

  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <Text>Post has {likes || "no"} likes</Text>
  //     </View>
  //   );
  // }

  const links = {
    github: "gitdeepaks",
    email: "sankhyan.deepak1@gmail.com",
    x: "sankhyandeepak92",
  };
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
              {name}
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginBottom: 10,
              }}
            >
              {getOccupation()}
            </Text>

            {renderIcons()}

            <Button title="Contact Me" onPress={onContactMe} />

            <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
              I am an experienced React Native Fullstack Mobile Developer with a
              deep understanding of both front-end and back-end technologies.
              Over the years, I have honed my skills in building scalable,
              high-performance mobile applications using React Native.
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginTop: 20,
                fontSize: 18,
                marginBottom: 10,
              }}
            >
              Projects
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, padding: 10 }}
            >
              <ProjectCard
                name="Apple Cards"
                image={require("./assets/adaptive-icon.png")}
              />
              <ProjectCard
                name="Expo Card"
                image={require("./assets/favicon.png")}
              />
              <ProjectCard
                name="Expo Dlappy"
                image={require("./assets/icon.png")}
              />
              <ProjectCard
                name="Expo Adaptive"
                image={require("./assets/splash-icon.png")}
              />
            </ScrollView>

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
