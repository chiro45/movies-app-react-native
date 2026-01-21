import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
type Props = {
  poster: string;
  originalTitle: string;
  title: string;
};

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  return (
    <>
      {/* gradiente */}
      <LinearGradient
        style={{
          height: screenHeight * 0.4,
          zIndex: 1,
          position: "absolute",
          width: "100%",
        }}
        colors={["rgba(0,0,0,0.3)", "transparent"]}
        start={[0, 0]}
      />
      {/* boton de regreso */}
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          elevation: 9,
          top: 35,
          left: 10,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="arrow-back"
            size={30}
            color={"white"}
            className="shadow"
          />
        </Pressable>
      </View>
      <View
        style={{ height: screenHeight * 0.7 }}
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            resizeMode="cover"
            className="flex-1"
            source={{ uri: poster }}
          />
        </View>
        <View className="px-5 mt-5">
          <Text className="font-normal">{originalTitle}</Text>
          <Text className="font-semibold text-2xl">{title}</Text>
        </View>
      </View>
    </>
  );
};

export default MovieHeader;
