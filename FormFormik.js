import { Text, TextInput, StyleSheet, Button } from "react-native";
export default function FomikForm({
  errors,
  handleChange,
  values,
  handleSubmit,
  touched,
}) {
  return (
    <>
      <Text style={styles.headTitle}>Demo Sign Up Form</Text>

      <Text style={styles.TextInputLabel}>Email Address</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Email Address"
        onChangeText={handleChange("email")}
        value={values.email}
        maxLength={25}
      />
      {touched.email && errors.email && (
        <Text style={styles.error}>{errors.email}</Text>
      )}

      <Text style={styles.TextInputLabel}>Phone Number</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Jordanian Phone Number"
        keyboardType="phone-pad"
        onChangeText={handleChange("phoneNumber")}
        value={values.phoneNumber}
        maxLength={10}
      />
      {touched.phoneNumber && errors.phoneNumber && (
        <Text style={styles.error}>{errors.phoneNumber}</Text>
      )}

      <Text style={styles.TextInputLabel}>Password</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        secureTextEntry
        onChangeText={handleChange("password")}
        value={values.password}
        maxLength={20}
      />
      {touched.password && errors.password && (
        <Text style={styles.error}>{errors.password}</Text>
      )}

      <Button title="Sign Up" onPress={handleSubmit} />
    </>
  );
}

const styles = StyleSheet.create({
  TextInputLabel: {
    marginTop: 10,
  },
  TextInput: {
    maxWidth: 300,
    maxLength: 300,
    margin: 10,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
    padding: 12,
    textAlign: "center",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    marginHorizontal: 10,
    marginLeft: 20,
    textAlign: "center",
  },
  headTitle: {
    fontSize: 20,
    padding: 12,
    margin: 20,
  },
});
