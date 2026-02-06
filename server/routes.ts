import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Projects
  app.get(api.projects.list.path, async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  // Skills
  app.get(api.skills.list.path, async (_req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  // Contact
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      await storage.createMessage(input);
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: "Invalid input",
          field: err.errors[0].path.join('.')
        });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    console.log("Seeding database...");

    const skillsData = [
      { category: "Programming Languages", items: ["Python", "C", "Arduino C"] },
      { category: "Robotics Frameworks", items: ["ROS 2 (Jazzy)", "micro-ROS", "Navigation2 (Nav2)", "SLAM Toolbox", "AMCL"] },
      { category: "Core Concepts", items: ["Nodes", "Topics", "Services", "Actions", "TF Transforms", "URDF"] },
      { category: "Computer Vision & AI", items: ["YOLO", "OpenCV", "Image Processing", "Model Training"] },
      { category: "Embedded Systems", items: ["ESP32", "Arduino Uno/Mega", "Raspberry Pi", "Sensors (LiDAR, IMU)"] },
      { category: "Tools", items: ["RViz", "Gazebo", "Git/GitHub", "Linux (Ubuntu)", "CAD"] }
    ];

    for (const skill of skillsData) {
      await storage.createSkill(skill);
    }

    const projectsData = [
      {
        title: "LiDAR-Powered Autonomous Mapping & Navigation",
        description: "Deployed 2D LiDAR-based SLAM pipeline using SLAM Toolbox inside a Gazebo-simulated multi-obstacle environment. Achieved real-time occupancy grid map generation with full robot trajectory visualization.",
        technologies: ["ROS 2", "Gazebo", "SLAM Toolbox", "Nav2", "AMCL"],
        category: "Robotics",
        link: "#",
      },
      {
        title: "Human-Robot Interaction System using micro-ROS",
        description: "Developed real-time gesture-based robot control system integrating micro-ROS with ROS 2 Jazzy. Implemented gesture recognition pipeline to map human hand motions into robot velocity commands.",
        technologies: ["ROS 2", "ESP32", "micro-ROS", "Python"],
        category: "Robotics",
        link: "#",
      },
      {
        title: "Soil Grain Detection & Mapping System",
        description: "Built custom YOLO-based object detection model for real-time soil type classification (Red, Black, Perlite, Mixed). Collected and trained dataset achieving 92% accuracy.",
        technologies: ["Python", "YOLO", "OpenCV", "Folium", "Google Colab"],
        category: "AI/CV",
        link: "#",
      },
      {
        title: "PID Line-Following Robot",
        description: "Designed and fabricated custom robot chassis. Implemented PID control algorithm in C for precise line tracking with real-time tuning of Kp, Ki, and Kd parameters.",
        technologies: ["Arduino", "C", "PID Control", "CAD"],
        category: "Embedded",
        link: "#",
      },
      {
        title: "TeleOperated Mobile Manipulation Platform",
        description: "Developed integrated mobile platform with 4-DOF robotic arm for autonomous pick-and-place. Implemented inverse and forward kinematics algorithms.",
        technologies: ["ESP32", "Kinematics", "Arduino IDE", "Wireless Control"],
        category: "Robotics",
        link: "#",
      }
    ];

    for (const project of projectsData) {
      await storage.createProject(project);
    }
    
    console.log("Database seeded successfully.");
  }
}
