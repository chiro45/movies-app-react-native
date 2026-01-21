import { Cast } from "@/infraestructure/interfaces/cast-interface";
import { FlatList, Text, View } from "react-native";
import { ActorCard } from "./ActorCard";
type Props = {
  cast: Cast[];
};

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5 mb-52">
      <Text className="font-bold text-2xl px-5">Cast</Text>
      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};

export default MovieCast;
