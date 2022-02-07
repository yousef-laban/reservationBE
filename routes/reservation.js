const router = require("express").Router();

const {
  reservationCreate,
  fetchResevations,
  reservationAccept,
  reservationReject,
} = require("../controllers/reservationControllers");

router.get("/reservations", fetchResevations);
router.post("/reservation", reservationCreate);
router.post("/reservation/accept", reservationAccept);
router.post("/reservation/reject", reservationReject);

module.exports = router;
