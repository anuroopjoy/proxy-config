module.exports = [
  {
    context: ["/users", "/profile"],
    target: "http://localhost:3001",
    secure: false,
    logLevel: "debug",
    bypass: function (req, res, proxyOptions) {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    },
  },
];
