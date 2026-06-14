//object look like in automation as below
//Used in Automation

const env = {
  url: "https://www.google.com",
  timeout: 5000,
  retries: 3,
  browser: "chrome",
  browserVersion: "120",
  browserName: "chrome",
  browserVersion: "120",
};

const expected_response = {
  statusCode: 200,
  body: {
    message: "Success",
  },
};

const config = {
  baseUrl: "https://www.google.com",
  apibaseurl: "https://api.google.com",
  testUser: {
    username: "testuser",
    password: "testpassword",
  },
  logLevel: "info",
  retryCount: pasrseInt(process.env.RETRY_COUNT || "3", 10),
};
