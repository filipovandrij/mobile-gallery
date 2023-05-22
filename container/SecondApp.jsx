import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../store/photoSlice";
import { useEffect, useState } from "react";
import FullImage from "./FullImage";

const SecondApp = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const photos = useSelector((state) => state.photos.photos);

  const styles = StyleSheet.create({
    image: {
      width: "auto",
      height: "auto",
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
    cart: {
      borderStyle: "solid",
      borderColor: "black",
      borderWidth: 1,
      display: "flex",
      margin: 10,
      gap: 10,
      alignItems: "center",
      justifyContent: "space-between",
    },
    fullScreenImage: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
    },
    fullScreenImageText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
  });

  const [pressId, setPressId] = useState("");

  const handleImagePress = (identifier) => {
    setPressId(identifier);
  };

  return (
    <View>
      <ScrollView>
        {photos.map((photo) => (
          <TouchableOpacity
            onPress={() => handleImagePress(photo.id)}
            style={styles.cart}
            key={photo.id}
          >
            <Text>Author: {photo.user.name}</Text>
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: photo.urls.raw }}
            />
            <Text>Description:</Text>

            <Text>
              {photo.alt_description.charAt(0).toUpperCase() +
                photo.alt_description.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {pressId !== "" && (
        <FullImage setPressId={setPressId} pressId={pressId} />
      )}
    </View>
  );
};
export default SecondApp;
