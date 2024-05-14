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
import { useFormik } from "formik";
import * as Yup from "yup";
import ShowInfo from "./showInfo";
import FomikForm from "./FormFormik";
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

  const formik = useFormik({
    initialValues: { email: "", password: "", phoneNumber: "" },
    validationSchema: validation,
    onSubmit: (values) => {
      setShowInfoOnScreen(true);
      console.log("Form values ==>>", values);
    },
  });

  const { errors, handleChange, values, handleSubmit, touched } = formik;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.FormContainer}>
          <FomikForm
            errors={errors}
            handleChange={handleChange}
            values={values}
            handleSubmit={handleSubmit}
            touched={touched}
          />
          {showInfoOnScreen && <ShowInfo values={values} />}
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
});

export default App;
