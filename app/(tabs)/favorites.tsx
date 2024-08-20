import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon1 from "react-native-vector-icons/Fontisto";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { styles } from "@/styles/teacherSave-style";
import { Image } from "expo-image";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Favorites() {
  const subjectList = [
    {
      id: 1,
      attributes: {
        courses: "32",
        category: "Шинжлэх ухаан",
        subjects: "Физик",
        price: "350,000 MNT",
        tutorName: "Alex Carter",
        description:
          "Шинжлэх ухаан нь дэлхийн байгаль, амьд биетүүдийн бүтэц, үйл ажиллагаа, хөгжлийг судлахад чиглэсэн шинжлэх ухаан. Энэ курс нь физик, хими, биологи гэх мэт үндсэн шинжлэх ухааны салбаруудыг хамарсан бөгөөд судалгааны аргачлалуудыг гүнзгий суралцах боломжийг олгоно.",
        phoneNumber: "+976 1234 5678",
      },
    },
    {
      id: 2,
      attributes: {
        courses: "61",
        category: "Математик",
        subjects: "Алгебр",
        price: "400,000 MNT",
        tutorName: "Emily Davis",
        description:
          "Математик нь тоо, бүтэц, орон зай, өөрчлөлт зэрэг ойлголтуудыг судлах шинжлэх ухаан юм. Энэ курс нь алгебр, геометр, тоолол гэх мэт үндсэн сэдвүүдийг хамардаг бөгөөд математик зарчмуудыг өдөр тутмын амьдралд хэрхэн ашиглах талаар суралцах боломжийг олгоно.",
        phoneNumber: "+976 2345 6789",
      },
    },
    {
      id: 3,
      attributes: {
        courses: "25",
        category: "Нийгмийн ухаан",
        subjects: "Социологи",
        price: "300,000 MNT",
        tutorName: "Michael Smith",
        description:
          "Нийгмийн судлал нь нийгмийн бүтэц, харилцаа, институтуудыг судлахад чиглэсэн шинжлэх ухаан. Энэ курс нь социологи, эдийн засаг, улс төрийн шинжлэх ухааны үндсэн ойлголтуудыг танилцуулж, нийгмийн өөрчлөлтүүдийг хэрхэн ойлгох, дүн шинжилгээ хийх талаар сургалт явуулна.",
        phoneNumber: "+976 3456 7890",
      },
    },
    {
      id: 4,
      attributes: {
        courses: "17",
        category: "Урлаг",
        subjects: "Зураг",
        price: "250,000 MNT",
        tutorName: "Sophia Lee",
        description:
          "Урлаг нь хүний бүтээмж, сэтгэлгээ, мэдрэмжийг илэрхийлэх олон төрлийн арга хэрэгслийг ашигладаг. Энэ курс нь зураг зурах, уран зохиол бичих, хөгжим тоглох зэрэг урлагийн салбаруудыг гүнзгий судлах боломжийг олгодог бөгөөд таны урлагийн авьяасыг хөгжүүлэхэд тусална.",
        phoneNumber: "+976 4567 8901",
      },
    },
    {
      id: 5,
      attributes: {
        courses: "19",
        category: "Нийгмийн ухаан",
        subjects: "Дэлхийн түүх",
        price: "280,000 MNT",
        tutorName: "James Taylor",
        description:
          "Түүх нь өнгөрсөн үеийн үйл явдлууд, тэдгээрийн нийгмийн, улс төрийн, эдийн засгийн нөлөөллийг судлах шинжлэх ухаан. Энэ курс нь дэлхийн түүх, Монголын түүх, соёлын хөгжил зэрэг сэдвүүдийг хамарсан бөгөөд түүхийн сургалтыг гүнзгий судлах боломжийг олгоно.",
        phoneNumber: "+976 5678 9012",
      },
    },
    {
      id: 6,
      attributes: {
        courses: "12",
        category: "Урлаг",
        subjects: "Дуу хөгжим",
        price: "230,000 MNT",
        tutorName: "Olivia Brown",
        description:
          "Хөгжим нь хүний мэдрэмж, сэтгэл хөдлөл, сэтгэлийн чалсыг илэрхийлэх урлагийн төрөл юм. Энэ курс нь дуу хөгжим, хөгжмийн зэмсэг, хөгжмийн онол зэрэг сэдвүүдийг хамардаг бөгөөд хөгжмийн ур чадварыг хөгжүүлэхэд чиглэсэн сургалтыг санал болгодог.",
        phoneNumber: "+976 6789 0123",
      },
    },
    {
      id: 7,
      attributes: {
        courses: "53",
        category: "Хэл",
        subjects: "Англи хэл",
        price: "420,000 MNT",
        tutorName: "Liam Johnson",
        description:
          "Гадаад хэл нь олон улсын харилцаа, соёлын солилцоонд чухал үүрэг гүйцэтгэдэг. Энэ курс нь англи хэл, орос хэл, хятад хэл зэрэг гадаад хэлний үндсэн дүрмүүд, үгсийн сан, ярианы чадварыг хөгжүүлэхэд зориулагдсан.",
        phoneNumber: "+976 7890 1234",
      },
    },
    {
      id: 8,
      attributes: {
        courses: "20",
        category: "Технологи",
        subjects: "Програмчлал",
        price: "380,000 MNT",
        tutorName: "Emma Wilson",
        description:
          "Компьютерийн шинжлэх ухаан нь компьютерийн системүүд, програмчлал, мэдээллийн технологи зэрэг салбаруудыг судалдаг. Энэ курс нь програмчлалын үндэс, мэдээллийн технологи, сүлжээний зохион байгуулалт зэрэг сэдвүүдийг хамарсан бөгөөд орчин үеийн технологийг ашиглахад туслах сургалт болно.",
        phoneNumber: "+976 8901 2345",
      },
    },
  ];

  const [showView, setShowView] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expandedSubject, setExpandedSubject] = useState<number | null>(null);

  const handlePress = () => {
    setShowView(!showView);
  };

  const handleReadMore = (id: number) => {
    setExpandedSubject(expandedSubject === id ? null : id);
  };

  const filteredSubjects = subjectList.filter((subject) => {
    const matchesCategory = selectedCategory
      ? subject.attributes.category === selectedCategory
      : true;
    const matchesSearch =
      subject.attributes.tutorName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      subject.attributes.subjects
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      {/* Header */}
      <View style={styles.headerBox}>
        <Text style={styles.logo}>🌱</Text>
        <Text style={styles.name}>Seedling</Text>
        <View style={styles.iconsBox}>
          <TouchableOpacity onPress={handlePress}>
            <Icon1 name="search" style={styles.logo} />
          </TouchableOpacity>
        </View>
      </View>
      {showView && (
        <View style={styles.selectbox}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={styles.picker}
            itemStyle={{ fontSize: 12, fontWeight: "bold" }}
          >
            <Picker.Item label="All Categories" value="" />
            <Picker.Item label="Шинжлэх ухаан" value="Шинжлэх ухаан" />
            <Picker.Item label="Математик" value="Математик" />
            <Picker.Item label="Нийгмийн ухаан" value="Нийгмийн ухаан" />
            <Picker.Item label="Урлаг" value="Урлаг" />
            <Picker.Item label="Хэл" value="Хэл" />
            <Picker.Item label="Технологи" value="Технологи" />
          </Picker>
          <TextInput
            placeholder="Search by subject or tutor"
            placeholderTextColor={"white"}
            style={styles.input}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredSubjects.map((subject) => (
          <View
            key={subject.id}
            style={[
              styles.courseBox,
              expandedSubject === subject.id && styles.expandedCourseBox,
            ]}
          >
            <View style={styles.header}>
              <Text>{subject.attributes.category}</Text>
              <View style={styles.style}>
                <Text>{subject.attributes.phoneNumber}</Text>
                <AntDesign
                  // style={styles.icon}
                  color="black"
                  name="hearto"
                  size={20}
                />
              </View>
            </View>
            <View style={styles.infoBox}>
              <View style={styles.tutorInfoBox}>
                <Image
                  source={require("../../assets/images/user.jpg")}
                  style={styles.profilePic}
                />
                <View>
                  <Text style={styles.title}>
                    {subject.attributes.tutorName}
                  </Text>
                  <Text>Үнэ: {subject.attributes.price}</Text>
                </View>
                <TouchableOpacity style={styles.enroll}>
                  <Text>Бүртгүүлэх</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.gap}>
                <Text>Cэдэв: {subject.attributes.subjects}</Text>
              </View>
              <Text>
                {expandedSubject === subject.id
                  ? subject.attributes.description
                  : subject.attributes.description
                      .split(" ")
                      .slice(0, 8)
                      .join(" ") +
                    (subject.attributes.description.split(" ").length > 8
                      ? "..."
                      : "")}
              </Text>
              {subject.attributes.description.split(" ").length > 8 && (
                <TouchableOpacity onPress={() => handleReadMore(subject.id)}>
                  <Text>
                    {expandedSubject === subject.id ? "Read Less" : "Read More"}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
