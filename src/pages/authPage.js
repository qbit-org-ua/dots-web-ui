import {
  colorScheme,
  appButtons,
  appFields,
  nunitoFont,
} from "../styles/app-theme";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Layout from "../components/Layout";
import CustomInputComponent from "../components/CustomInputComponent";

const validationSchema = Yup.object({
  login: Yup.string().required("Required"),
  password: Yup.string().min(6, "Too short password").required("Required"),
});
const authPage = () => {
  return (
    <>
      <Layout>
        <div className="auth-container">
          <h3 className="auth-form-title">Представьтесь</h3>
          <Formik
            initialValues={{ login: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validateOnChange={false}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form className="auth-form">
                <label className="auth-form-label" htmlFor="auth-login">
                  Логин
                </label>
                <div className="auth-field-wrapper">
                  <Field
                    id="auth-login"
                    name="login"
                    component={CustomInputComponent}
                    className="auth-form-input"
                  ></Field>
                </div>

                <label className="auth-form-label" htmlFor="auth-password">
                  Пароль
                </label>
                <div className="auth-field-wrapper">
                  <Field
                    id="auth-password"
                    name="password"
                    type="password"
                    className="auth-form-password"
                  />
                  {errors.password && touched.password && (
                    <div className="input-error">{errors.password}</div>
                  )}
                </div>
                <button className="auth-form-submit" type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Layout>
      <style global jsx>{`
        .auth-container {
          margin: 0 0 0 40px;
          padding: 30px 40px;
          max-width: 700px;
          background: ${colorScheme.blockColor};
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
        }
        .auth-form {
        }
        .auth-form-title {
          padding-bottom: 30px;
          font-size: ${nunitoFont.sizes.titleL};
          color: white;
          text-align: left;
        }
        .auth-form-label {
          color: white;
          font-size: ${nunitoFont.sizes.titleM};
        }
        .auth-field-wrapper {
          height: 80px;
        }
        .auth-form-input {
          margin: 10px 0;
          ${appFields.inputField}
        }
        .auth-form-input:focus {
          ${appFields.inputFieldFocus}
        }
        .auth-form-password {
          margin: 10px 0;
          ${appFields.inputField}
        }
        .auth-form-password {
          ${appFields.inputFieldFocus}
        }
        .auth-form-submit {
          ${appButtons.submit};
        }
        .auth-form-submit:focus {
          ${appButtons.submitFocus}
        }
        .auth-form-submit:hover {
          ${appButtons.submitHover}
        }
        .auth-form-submit:active {
          box-shadow: none;
        }
        .input-error {
          color: ${colorScheme.error};
        }
      `}</style>
    </>
  );
};

export default authPage;
