import { Course } from "@/generated";
import React, { useState } from "react";
import { View, Image, Text, ActivityIndicator } from "react-native";
import { styles } from "@/styles/teacher-style";

const Certifications = ({ course }: { course: Course | null }) => {
  const [loading, setLoading] = useState<{ [key: number]: boolean }>({});

  const handleImageLoadStart = (id: number) => {
    setLoading((prevLoading) => ({ ...prevLoading, [id]: true }));
  };

  const handleImageLoadEnd = (id: number) => {
    setLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
  };

  return (
    <View style={styles.certificationsContainer}>
      {course?.tutorId?.tutorProfile?.resume?.certificationUrls ? (
        <>
          {course?.tutorId?.tutorProfile?.resume?.certificationUrls?.map((file, id) => (
            <View key={id} style={styles.imageWrapper}>
              {loading[id] && <ActivityIndicator size="small" color="#0000ff" style={styles.loadingIndicator} />}
              <Image
                source={{ uri: file as string }}
                style={styles.certificationImage}
                onLoadStart={() => handleImageLoadStart(id)}
                onLoadEnd={() => handleImageLoadEnd(id)}
              />
            </View>
          ))}
        </>
      ) : (
        <Text>Одоогоор гэрчилгээ байхгүй байна.</Text>
      )}
    </View>
  );
};

export default Certifications;
