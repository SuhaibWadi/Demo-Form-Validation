import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const JordanValidNumber = /^(\\+962|0)(7[789]|79|78|77|76|75)[0-9]{7}$/;

const validation = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, "Password must have a lowercase ")
    .matches(/\w*[A-Z]\w*/, "Password must have an uppercase")
    .matches(/\d/, "Password must have a number")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  phoneNumber: Yup.string()
    .matches(JordanValidNumber, "Enter a Valid Jordanian Number")
    .required("Phone number is required"),
});

const App = () => {
  const [showInfoOnScreen, setShowInfoOnScreen] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.FormContainer}>
          <Text style={styles.headTitle}>Demo Sign Up Form</Text>
          <Formik
            initialValues={{ email: "", password: "", phoneNumber: "" }}
            validationSchema={validation}
            onSubmit={(values) => {
              setShowInfoOnScreen(true);
              console.log("Form values ==>>", values);
            }}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                <Text style={styles.TextLabel}>Email Adress</Text>
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
                <Text style={styles.TextLabel}>Phone Number</Text>
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
                <Text style={styles.TextLabel}>Password</Text>
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

                {/* this step is extra just to show on Screen the Email & Phone Number & Passowrd */}
                {showInfoOnScreen && [
                  <Text>
                    Email =={" "}
                    <Text style={styles.informationOutOnScreen}>
                      {values.email}
                    </Text>
                  </Text>,
                  <Text>
                    Phone Number =={" "}
                    <Text style={styles.informationOutOnScreen}>
                      {values.phoneNumber}
                    </Text>
                  </Text>,
                  <Text>
                    Password =={" "}
                    <Text style={styles.informationOutOnScreen}>
                      {values.password}
                    </Text>
                  </Text>,
                ]}
              </>
            )}
          </Formik>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    
  },
  FormContainer: {
    flex: 1,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    marginHorizontal: 10,
    marginLeft: 20,
    textAlign: "center",
  },
  TextInput: {
    maxWidth: 300,
    maxLength:300,
    margin: 10,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
    padding: 12,
    textAlign: "center",
  },
  headTitle: {
    fontSize: 20,
    padding: 12,
    margin: 20,
  },
  TextLabel: {
    marginTop: 10,
  },
  informationOutOnScreen: {
    color: "red",
  },
});

export default App;
