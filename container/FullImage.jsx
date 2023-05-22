import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";

const FullImage = ({ setPressId, pressId }) => {
  const photos = useSelector((state) => state.photos.photos);

  const styles = StyleSheet.create({
    fullImage: {
      position: "absolute",
      zIndex: 2,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    innerImage: { width: "100%", height: "100%" },
  });
  return (
    <TouchableOpacity onPress={() => setPressId("")} style={styles.fullImage}>
      {photos.map((photo) =>
        pressId === photo.id ? (
          <Image
            key={photo.id}
            style={styles.innerImage}
            source={{ uri: photo.urls.full }}
          />
        ) : undefined
      )}
    </TouchableOpacity>
  );
};
export default FullImage;
