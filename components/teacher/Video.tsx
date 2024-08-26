import React, { useState, useRef } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { Video } from "expo-av";
import { styles } from "@/styles/teacher-style";

type Props = {
  teacherVideo: string | null;
};

const VideoComponent = ({ teacherVideo }: Props) => {
  const [status, setStatus] = useState({});
  const [loading, setLoading] = useState(true);
  const video = useRef(null);

  const handleLoad = () => {
    setLoading(false);
  };
  return (
    <View style={styles.vidContainer}>
      {teacherVideo ? (
        <View style={styles.videoContainer}>
          {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />}
          <Video
            ref={video}
            style={styles.video}
            source={{ uri: teacherVideo }}
            useNativeControls
            isLooping
            onPlaybackStatusUpdate={(status) => {
              setStatus(status);
              if (status.isLoaded) {
                handleLoad();
              } else if (status.error) {
                console.error("Playback error: ", status.error);
              }
            }}
          />
        </View>
      ) : (
        <View style={styles.noVideoContainer}>
          <Text>Видео байхгүй.</Text>
        </View>
      )}
    </View>
  );
};

export default VideoComponent;
