import express from "express";

const ideas: {
  nick: string;
  name: string;
  description: string;
}[] = [
  {
    nick: "john_doe",
    name: "Smart Home Automation",
    description:
      "A system that learns from user habits and automatically adjusts home settings",
  },
  {
    nick: "tech_guru",
    name: "Virtual Study Groups",
    description:
      "Platform connecting students worldwide for collaborative learning sessions",
  },
  {
    nick: "innovator",
    name: "Eco-Friendly Delivery",
    description:
      "Zero-emission last-mile delivery service using electric vehicles and bikes",
  },
];

const PORT = 3000;

const app = express();

app.get("/ping", (req, res) => {
  res.send("Hello World");
});

app.get("/ideas", (req, res) => {
  res.json(ideas);
});

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
});
