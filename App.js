import React, { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";
import { useFormik } from "formik";
import { Validation } from "./Validation";
import ShowInfo from "./showInfo";
import FomikForm from "./FormFormik";

const App = () => {
  const [showInfoOnScreen, setShowInfoOnScreen] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "", phoneNumber: "" },
    validationSchema: Validation,
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
