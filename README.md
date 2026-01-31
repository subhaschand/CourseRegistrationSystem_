# 📚 Course Registration System

A full-stack web application for managing course registrations, allowing students to browse available courses and enroll in them.

---

## 🚀 Technology Stack

| Layer | Technology |
|-------|------------|
| 🔙 **Backend** | Spring Boot 4.0.2 (Java 21) |
| 🎨 **Frontend** | React + Vite |
| 🗄️ **Database** | MySQL |
| 🔗 **ORM** | Spring Data JPA |
| 📦 **Build Tools** | Maven (Backend), npm (Frontend) |

---

## ✨ Features

- 📖 **View Available Courses** - Browse all courses with details like course ID, name, trainer, and duration
- 📝 **Student Registration** - Enroll in courses by providing name, email, and selecting a course
- 👥 **View Enrolled Students** - See a list of all students registered for courses

---

## 🗂️ Project Structure

```
CourseRegistration/
├── 📁 BackEnd/
│   ├── 📄 pom.xml
│   └── 📁 src/main/java/com/example/CourseRegistration/
│       ├── 🎮 controller/
│       ├── 📊 model/
│       ├── 🗃️ repository/
│       └── ⚙️ service/
└── 📁 FrontEnd/
    └── 📁 Fronted_Course_Registration/
        └── 📁 src/
            ├── 🌐 api/
            └── 📄 pages/
```

---

## 📊 Data Models

### 📘 Course
| Field | Type | Description |
|-------|------|-------------|
| `courseId` | String | Unique course identifier |
| `courseName` | String | Name of the course |
| `trainer` | String | Instructor name |
| `durationInWeeks` | int | Course duration |

### 📗 CourseRegistry
| Field | Type | Description |
|-------|------|-------------|
| `id` | int | Auto-generated ID |
| `name` | String | Student name |
| `emailId` | String | Student email |
| `courseName` | String | Enrolled course name |

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| 🟢 GET | `/courses` | Get all available courses |
| 🟢 GET | `/courses/enrolled` | Get all enrolled students |
| 🟡 POST | `/courses/register` | Register a student for a course |

---

## 📱 Frontend Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | 🏠 Home | Landing page |
| `/courses` | 📚 Available Courses | Browse all courses |
| `/enrolled` | 👥 Enrolled Students | View registrations |
| `/register` | ✍️ Register | Enroll in a course |

---

## 🛠️ Installation & Setup

### Prerequisites
- ☕ Java 21
- 📦 Node.js & npm
- 🐬 MySQL

### Backend Setup
```bash
cd BackEnd
./mvnw spring-boot:run
```

### Frontend Setup
```bash
cd FrontEnd/Fronted_Course_Registration
npm install
npm run dev
```

---

## ⚙️ Configuration

Update `application.properties` with your MySQL credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password
```

---

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔃 Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📞 Contact

For questions or feedback, feel free to reach out!

---

⭐ **If you found this project helpful, please give it a star!** ⭐
