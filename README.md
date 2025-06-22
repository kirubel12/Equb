# Equb Management System API

A modern RESTful API for managing traditional Ethiopian/Eritrean community savings schemes (Equb). This system provides comprehensive functionality for creating, managing, and participating in Equb groups with secure authentication and automated payout scheduling.

## 🚀 Features

- **User Authentication & Authorization**: Secure JWT-based authentication system
- **Equb Creation & Management**: Create and configure Equb groups with customizable rules
- **Flexible Payout Schedules**: Support for weekly, bi-weekly, and monthly payouts
- **User Management**: Join Equb groups via secure invitation links
- **Financial Tracking**: Monitor contributions and payout amounts
- **Data Validation**: Comprehensive input validation and error handling
- **RESTful API Design**: Clean, intuitive endpoints following REST principles

## 🛠 Tech Stack

- **Runtime**: Node.js with ES6 modules
- **Framework**: Express.js 5.x
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs for password hashing
- **Development**: Nodemon for hot reloading

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

## ⚡ Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd equb
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/equb
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

### 4. Start the application

```bash
# Development mode with hot reloading
npm start

# The server will start on http://localhost:3000
```

## 📁 Project Structure

```
src/
├── config/
│   ├── db.js              # Database connection configuration
│   └── equbLink.js        # Equb invitation link utilities
├── controllers/
│   ├── equb.controller.js # Equb business logic
│   └── user.controller.js # User authentication & management
├── middleware/
│   └── auth.js            # JWT authentication middleware
├── models/
│   ├── equb.model.js      # Equb data model
│   └── user.model.js      # User data model
├── routes/
│   ├── equb.routes.js     # Equb API endpoints
│   └── user.routes.js     # User API endpoints
└── index.js               # Application entry point
```

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /register` - Create a new user account
- `POST /login` - Authenticate user and receive JWT token
- `POST /logout` - Invalidate user session
- `GET /profile` - Get current user profile (Protected)

### Equb Management Routes (`/api/equbs`)

- `GET /` - List all available Equb groups
- `POST /` - Create a new Equb group (Protected)
- `GET /:id` - Get specific Equb details
- `POST /:id/join` - Join an Equb group via invitation link (Protected)
- `GET /:id/members` - List Equb members (Protected)
- `PUT /:id` - Update Equb configuration (Protected, Owner only)
- `DELETE /:id` - Delete Equb group (Protected, Owner only)

## 💾 Data Models

### Equb Model

```javascript
{
  name: String,           // Equb group name
  rules: String,          // Group rules and regulations
  payout: String,         // 'weekly' | 'monthly' | 'bi-weekly'
  money: Number,          // Contribution amount per user (min: 100 ETB)
  max_users: Number,      // Maximum participants (2-50)
  payout_amount: Number,  // Total payout per cycle
  joined_users: [ObjectId], // Array of participant user IDs
  join_link: String,      // Unique invitation link
  createdAt: Date,
  updatedAt: Date
}
```

### User Model

```javascript
{
  username: String,       // Unique username
  email: String,         // User email address
  password: String,      // Hashed password
  firstName: String,     // User's first name
  lastName: String,      // User's last name
  phone: String,         // Contact phone number
  equbs: [ObjectId],     // Array of joined Equb group IDs
  createdAt: Date,
  updatedAt: Date
}
```

## 🔒 Authentication

This API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

Protected routes require a valid JWT token. Tokens expire based on the `JWT_EXPIRES_IN` environment variable.

## 🛡️ Security Features

- Password hashing using bcryptjs
- JWT token-based authentication
- Input validation and sanitization
- CORS protection
- Request rate limiting (recommended for production)
- Environment variable protection

## 🚀 Deployment

### Environment Variables for Production

```env
NODE_ENV=production
PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/equb
JWT_SECRET=your-production-jwt-secret
JWT_EXPIRES_IN=24h
```

### Docker Deployment (Optional)

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY src/ ./src/
EXPOSE 3000
CMD ["node", "src/index.js"]
```

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run tests with coverage
npm run test:coverage
```

## 📝 Development Guidelines

- Follow ES6+ JavaScript standards
- Use meaningful commit messages
- Implement proper error handling
- Add input validation for all endpoints
- Write comprehensive API documentation
- Follow RESTful API design principles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email your-email@example.com or create an issue in the repository.

---

**Built with ❤️ for the Ethiopian/Eritrean community**
