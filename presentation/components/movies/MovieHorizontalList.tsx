import { Movie } from "@/infraestructure/interfaces/movie-interface";
import React, { useEffect, useRef } from "react";
import {
  FlatList,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

type Props = {
  movies: Movie[];
  title?: string;
  classname?: string;
  loadNextPage?: VoidFunction;
};
const MovieHorizontalList = ({
  movies,
  title = "Default Title",
  classname,
  loadNextPage,
}: Props) => {
  const isLoading = useRef(false);
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEndReached) return;
    isLoading.current = true;
    loadNextPage && loadNextPage();
  };
  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);
  return (
    <View className={classname}>
      <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>
      <FlatList
        data={movies}
        horizontal
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
