const router = require("express").Router();
const SubscriberClass = require("../../controllers/subscriber/controller");

const Subscriber = new SubscriberClass();

router.get("/mq-subscriber", Subscriber.findMany);
router.post("/mq-subscriber", Subscriber.createOne);
router.delete("/mq-subscriber/:id", Subscriber.deleteOne);

module.exports = router;