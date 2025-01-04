"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRouter = void 0;
const express_1 = require("express");
const event_controller_1 = require("../controllers/event.controller");
const __1 = require("..");
class EventRouter {
    constructor() {
        this.eventController = new event_controller_1.EventController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.eventController.getEvent);
        this.router.post("/", __1.upload.single("event_thumbnail"), this.eventController.createEvent);
        this.router.get("/:id", this.eventController.getEventbyID);
    }
    getRouter() {
        return this.router;
    }
}
exports.EventRouter = EventRouter;
