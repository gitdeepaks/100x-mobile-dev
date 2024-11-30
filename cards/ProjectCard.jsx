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

const ProjectCard = ({ name, image }) => {
  return (
    <View>
      <Image
        source={image}
        style={{ height: 150, aspectRatio: 16 / 9, borderRadius: 10 }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: "dimgray",
          marginTop: 10,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default ProjectCard;
