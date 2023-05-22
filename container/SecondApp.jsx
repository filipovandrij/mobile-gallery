import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../store/photoSlice";
import { useEffect } from "react";

const SecondApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const photos = useSelector((state) => state.photos.photos);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    author: {
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      {photos.map((photo) => (
        <View key={photo.id}>
          <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: photo.urls.raw }}
          ></Image>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
};
export default SecondApp;
