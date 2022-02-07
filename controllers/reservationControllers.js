const Resevation = require("../models/Resevation");

exports.fetchResevations = async (req, res, next) => {
  try {
    let allResevations = await Resevation.find(
      {},
      { createdAt: 0, updatedAt: 0, __v: 0 }
    );
    res.json(allResevations);
  } catch (error) {
    next(error);
  }
};

exports.reservationCreate = async (req, res, next) => {
  try {
    const newReservation = await Resevation.create(req.body);

    res.status(201).json(newReservation);
  } catch (error) {
    next(error);
  }
};

exports.reservationAccept = async (req, res, next) => {
  try {
    let reservation = await Resevation.findByIdAndUpdate(
      req.body.reservationId,
      { Status: "accepted" },
      { new: true }
    );

    res.status(201).json(reservation);
  } catch (error) {
    next(error);
  }
};

exports.reservationReject = async (req, res, next) => {
  try {
    let reservation = await Resevation.findByIdAndUpdate(
      req.body.reservationId,
      { Status: "rejected" },
      { new: true }
    );

    res.status(201).json(reservation);
  } catch (error) {
    next(error);
  }
};
