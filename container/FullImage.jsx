import { TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";

const FullImage = ({ setPressId, pressId }) => {
  const photos = useSelector((state) => state.photos.photos);
  return (
    <TouchableOpacity
      onPress={() => setPressId("")}
      style={{
        position: "absolute",
        zIndex: 2,
        top: 0,
        left: 0,
        width: "100%",
        height: 720,
      }}
    >
      {photos.map((photo) =>
        pressId === photo.id ? (
          <Image
            key={photo.id}
            style={{ width: "100%", height: "100%" }}
            source={{ uri: photo.urls.raw }}
          />
        ) : undefined
      )}
    </TouchableOpacity>
  );
};
export default FullImage;
