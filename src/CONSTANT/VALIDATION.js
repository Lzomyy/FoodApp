export const validations = {
  email: {
    required: "email is required",
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "enter a valid email",
    },
  },

  userName: {
    required: "User name is required",
    pattern: {
      value: /^[a-zA-Z\d]+\d+$/,
      message:
        "The userName must contain characters and end with numbers without spaces",
    },
  },

  password: {
    required: "password is required",
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      message: "password must include at least one lowercase & uppercase letter, one digit, one special character, and be at least 6 characters long"
    }
  }
};
