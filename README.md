
![bikelogo](https://github.com/user-attachments/assets/26eae542-2545-49dc-9d4c-2239a816e109)

---

# 🚀 GO-FUTURISTIC-ROBOTICS-VEHICLES — FULL STACK APPLICATION

## 🧠 GO - The Future of Autonomous Mobility

A revolutionary full-stack web application showcasing **Bujji**, a futuristic AI-powered autonomous robotics vehicle. Experience cutting-edge technology through an immersive, interactive showcase with **real-time customer feedback integration**.



## 🔄 How Data Flows

```
User Journey:
┌─────────────────────┐
│  User visits HTML   │
│  (bikeprint1.html)  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Fills feedback form │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────────────┐
│ JavaScript sends POST to    │
│ http://localhost:3000/      │
│ feedback (with form data)   │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│ Node.js server receives     │
│ Validates & saves to MySQL  │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│ Admin visits                │
│ view-feedbacks.html         │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│ Page fetches GET /feedbacks │
│ Displays all feedback in    │
│ table format                │
└─────────────────────────────┘
```

---



---

## 🔧 What It Does

```
├── Connects to MySQL database
├── Receives feedback from the contact form
├── Stores feedback in database
└── Retrieves all submitted feedbacks
```

### 📡 Backend Routes

* `POST /feedback` — Saves user feedback to the database
* `GET /feedbacks` — Returns all stored feedback
* Runs on **port 3000**

---

## 🌐 Frontend Pages

### **1. bikeprint1.html** — Main Homepage

The **primary product showcase page**:

```
Page Structure:
├── Header/Navigation
│   ├── Logo
│   ├── Product dropdown menu
│   ├── Gallery link
│   ├── Contact link
│   └── Login/Signup buttons
│
├── Hero Section (Video background)
│   ├── Parallax effect with video
│   └── "LET'S RIDE THE FUTURE" headline
│
├── Product Specs (6 spec boxes)
│   ├── Color: Orange
│   ├── Weight: 6 tonnes
│   ├── Power: 94KW
│   ├── Torque: 9800NM
│   ├── Battery: 47KWH
│   └── Tire dimensions
│
├── Product Details Sections (2 sections)
│   ├── Left: Text + Right: Image
│   └── Right: Image + Left: Text
│
├── Gallery Section
│   └── 5 product images
│
├── Contact & Feedback Section
│   ├── Contact card (name, phone, email, address)
│   └── Feedback form (connects to backend)
│
└── Footer
```

---

### **2. page2.html** — Detail/Secondary Page

An **alternate version** of the homepage with slight variations:

* Unique **parallax backgrounds**
* Different **gallery images**
* Same **feedback form** and **contact info**
* Added **"Explore More"** navigation options

---

### **3. view-feedbacks.html** — Admin Dashboard

A minimal admin interface to **view submitted feedback**.

```
What it displays:
├── Table with columns:
│   ├── Name
│   ├── Email
│   ├── Message
│   └── Date/Time submitted
│
└── Fetches data from backend GET /feedbacks
```

---


---

## 🎨 Key Features

### Visual Effects

* **Parallax scrolling** — Background moves slower than foreground
* **Scroll animations** — Product sections fade in on scroll
* **Video backgrounds** — Hero sections have video elements
* **Glassmorphism UI** — Frosted glass visual design on spec boxes

### Interactive Elements

* Dropdown product menu
* Smooth scroll navigation
* Button hover animations
* Form validation and POST submission

---

## 🗃️ Database Integration

* Stores feedback into MySQL table `feedbacks`
* Records include:

  * Name
  * Email
  * Message
  * Timestamp
* Admin can fetch and view feedback through a dashboard

---

## 🛠️ Tech Stack

### Frontend

```
├── HTML5
├── CSS3 (Flexbox, Animations, Parallax)
├── JavaScript (DOM manipulation, fetch API)
└── Google Fonts (Orbitron, Poppins)
```

### Backend

```
├── Node.js
├── Express.js
├── body-parser
├── CORS
└── mysql2
```

### Database

```
└── MySQL (Database: bikeApp)
```

---

## ✅ Summary

This project is a full-stack interactive web platform showcasing a futuristic robotics vehicles. It combines **modern UI effects**, **backend APIs**, and **database storage** to simulate a real-world tech product demo — complete with feedback capture and admin review.

---

Let me know if you'd like this converted to Markdown-ready file or want badges, deployment links, or images added.
