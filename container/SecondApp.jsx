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

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const photos = useSelector((state) => state.photos.photos);

  const [pressId, setPressId] = useState("");

  const handleImagePress = (identifier) => {
    setPressId(identifier);
  };
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
      margin: 10,
      display: "flex",
      flexDirection: "row",
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
    textContainer: {
      flex: 1,
    },
    text: {
      paddingTop: 10,
      paddingLeft: 10,
      width: "100%",
      color: "black",
    },
  });

  return (
    <View>
      <ScrollView>
        {photos.map((photo) => (
          <View style={styles.cart} key={photo.id}>
            <TouchableOpacity onPress={() => handleImagePress(photo.id)}>
              <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: photo.urls.full }}
              />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Author:</Text>

              <Text style={styles.text}>{photo.user.name}</Text>

              <Text style={styles.text}>Description:</Text>

              <Text style={styles.text}>
                {photo.alt_description.charAt(0).toUpperCase() +
                  photo.alt_description.slice(1)}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {pressId !== "" && (
        <FullImage setPressId={setPressId} pressId={pressId} />
      )}
    </View>
  );
};
export default SecondApp;
