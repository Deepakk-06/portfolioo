import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export function useProjects() {
  const projects = [
    {
      id: 1,
      title: "LiDAR-Powered Autonomous Mapping & Navigation",
      description: "Deployed 2D LiDAR-based SLAM pipeline using SLAM Toolbox inside a Gazebo-simulated multi-obstacle environment. Achieved real-time occupancy grid map generation with full robot trajectory visualization and loop-closure in RViz.",
      category: "ROBOTICS",
      tags: ["ROS 2", "Gazebo", "SLAM Toolbox", "Nav2", "AMCL"],
      githubUrl: null,
      videoUrl: "https://drive.google.com/file/d/1pskf5J4I6OG_EVLog-Po9VqRFDxYvnbR/view",
    },
    {
      id: 2,
      title: "Human-Robot Interaction System using micro-ROS",
      description: "Developed real-time gesture-based robot control system integrating micro-ROS with ROS 2 Jazzy for low-latency teleoperation. Implemented gesture recognition pipeline to map human hand motions into robot velocity commands via ROS 2 topics.",
      category: "ROBOTICS",
      tags: ["ROS 2", "ESP32", "micro-ROS", "Python"],
      githubUrl: null,
      videoUrl: "https://drive.google.com/file/d/1vyNcxMrZcYwuTVy3O-ixH8Pn5xwWKJGN/view",
    },
    {
      id: 3,
      title: "Soil Grain Detection & Mapping System",
      description: "Built custom YOLO-based object detection model for real-time soil type classification (Red, Black, Perlite, Mixed Soil). Collected, annotated, and trained dataset using transfer learning techniques achieving 92% accuracy.",
      category: "AI/CV",
      tags: ["Python", "YOLO", "OpenCV", "Folium", "Google Colab"],
      githubUrl: null,
      videoUrl: "https://www.youtube.com/watch?v=Gqag98Drhi4",
    },
    {
      id: 4,
      title: "PID Line-Following Robot",
      description: "Designed and fabricated custom robot chassis using CAD software with optimized sensor placement for line detection. Implemented PID control algorithm in C for precise line tracking.",
      category: "EMBEDDED",
      tags: ["Arduino", "C", "PID Control", "CAD Design"],
      githubUrl: null,
      videoUrl: null,
    },
    {
      id: 5,
      title: "TeleOperated Mobile Manipulation Platform",
      description: "Developed integrated mobile platform with 4-DOF robotic arm for autonomous pick-and-place task execution. Implemented inverse and forward kinematics algorithms for precise end-effector positioning.",
      category: "ROBOTICS",
      tags: ["ESP32", "Kinematics", "Arduino IDE", "Wireless Control"],
      githubUrl: null,
      videoUrl: null,
    },
  ];

  return { data: projects, isLoading: false, error: null };
}

export function useSkills() {
  const skills = [
    {
      id: 1,
      category: "Programming Languages",
      items: ["Python", "C", "Arduino C"],
    },
    {
      id: 2,
      category: "Robotics Frameworks",
      items: ["ROS 2 (Jazzy)", "micro-ROS", "Navigation2 (Nav2)", "SLAM Toolbox", "AMCL Localization"],
    },
    {
      id: 3,
      category: "Core Concepts",
      items: ["Nodes", "Topics", "Services", "Actions", "TF Transforms", "URDF", "Launch Files", "Parameters", "Behavior Trees"],
    },
    {
      id: 4,
      category: "Computer Vision & AI",
      items: ["YOLO (Object Detection)", "OpenCV", "Image Processing", "Model Training", "Transfer Learning"],
    },
    {
      id: 5,
      category: "Embedded Systems",
      items: ["ESP32", "Arduino Uno/Mega", "Raspberry Pi", "Real-Time Systems", "Sensor Fusion"],
    },
    {
      id: 6,
      category: "Hardware & Sensors",
      items: ["LiDAR", "IMU", "Odometry Encoders", "Load Cells", "IR Sensor Arrays", "Ultrasonic Sensors", "Motor Drivers"],
    },
    {
      id: 7,
      category: "Development Tools",
      items: ["RViz", "Gazebo", "Arduino IDE", "Linux (Ubuntu)", "Google Colab"],
    },
  ];

  return { data: skills, isLoading: false, error: null };
}

export function useContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: any) => {
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      return data;
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message.",
        variant: "destructive",
      });
    },
  });
}
