const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const bookRouter = require("./routes/books.routes");
const branchRouter = require("./routes/branches.routes");
const checkoutRouter = require("./routes/checkouts.routes");
const transferRouter = require("./routes/transfer.routes");

const app = express();

//middleware
app.use(cors({origin: ["*", "http://localhost:3000"]}));
app.options("*", cors());
//  Logging Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/books/", bookRouter);
app.use("/api/branches/", branchRouter);
app.use("/api/checkouts/", checkoutRouter);
app.use("/api/transfer/", transferRouter);

const PORT = 8000;
app.listen(PORT, () => {
    return console.log(`server is listening on ${PORT}`);
})