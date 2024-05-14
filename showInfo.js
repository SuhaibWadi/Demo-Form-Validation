import { Text, View, StyleSheet } from "react-native";

export default function ShowInfo({ values }) {
  return (
    <>
      <View>
        <Text>
          Email =={" "}
          <Text style={styles.informationOutOnScreen}>{values.email}</Text>
        </Text>
        <Text>
          Phone Number =={" "}
          <Text style={styles.informationOutOnScreen}>
            {values.phoneNumber}
          </Text>
        </Text>
        <Text>
          Password =={" "}
          <Text style={styles.informationOutOnScreen}>{values.password}</Text>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  informationOutOnScreen: {
    color: "red",
  },
});
