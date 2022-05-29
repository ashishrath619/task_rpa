import * as Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

const RegistrationSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .regex(/^[A-Za-z]+$/i)
    // .pattern(RegExp("/^[A-Za-z]+$/i"))
    .required()

    .error((errors) => {
      errors.forEach((err) => {
        console.log("error", errors);

        if (err.code === "string.empty") {
          err.message = "Username  is required field";
        } else if (err.code === "string.pattern.base") {
          err.message = "Please Enter a valid  Username";
        }
      });
      return errors;
    }),
  email: Joi.string()
    .min(3)
    .max(30)
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "in"] },
    })
    .error((errors) => {
      errors.forEach((err) => {
        if (err.code === "string.empty") {
          err.message = "Email is required field";
        } else if (err.code === "string.email") {
          err.message = "Please Enter a valid Email";
        }
      });
      return errors;
    }),

  address2: Joi.string()
    // .regex(/^[A-Za-z]+$/i)
    // .pattern(RegExp("/^[A-Za-z]+$/i"))
    .required()

    .error((errors) => {
      errors.forEach((err) => {
        console.log("error", errors);

        if (err.code === "string.empty") {
          err.message = "Address  is required field";
        } else if (err.code === "string.pattern.base") {
          err.message = "Please Enter a valid  Address";
        }
      });
      return errors;
    }),
});

export const RegistrationResolver = joiResolver(RegistrationSchema);
