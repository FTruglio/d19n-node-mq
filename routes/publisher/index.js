const router = require("express").Router();
const PublisherClass = require("../../controllers/publisher/controller");

const Publisher = new PublisherClass();

router.get("/mq-publisher", Publisher.findMany);
router.get("/mq-publisher/:id", Publisher.findOne);
router.post("/mq-publisher", Publisher.createOne);
router.delete("/mq-publisher/:id", Publisher.deleteOne);

module.exports = router;
