import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedMovies, upcomingMovies } =
    useMovies();

  const safeArea = useSafeAreaInsets();
  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex h-full w-full justify-center items-center ">
        <ActivityIndicator color={"purple"} size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-4">Movies App</Text>
        {/*Carrousel images */}
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />
        {/* Popular */}
        <MovieHorizontalList
          classname="mb-5"
          movies={popularQuery.data ?? []}
          title="Popular"
        />
        {/* Popular */}
        <MovieHorizontalList
          classname="mb-5"
          movies={topRatedMovies.data?.pages.flat() ?? []}
          loadNextPage={topRatedMovies.fetchNextPage}
          title="Top Rated"
        />
        {/* Popular */}
        <MovieHorizontalList
          classname="mb-5"
          movies={upcomingMovies.data ?? []}
          title="Coming soon to theaters"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
