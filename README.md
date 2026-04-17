# 📌 Full Stack Experiment 8

## 👤 Student Details
- **Name:** Divyam Arora  
- **UID:** 23BAI70414  

---

## 📖 Objective
- Build a frontend UI that consumes JWT APIs  
- Implement session-based authentication (token stored per session)  
- Restrict access to pages based on login state  
- Show screenshots of tested endpoints from frontend  

---

## 🚀 Features Implemented

### 🔐 1. Login Page
- User enters **Username & Password**
- API Call: `POST /login`
- On successful authentication:
  - JWT token is stored in `sessionStorage`
  - User is redirected to the dashboard  

---

### 🛡️ 2. Protected Dashboard
- Accessible only if the user is logged in  
- Validates JWT token before granting access  
- Unauthorized users are redirected to login page  

---

### 🔄 3. Session-Based Authentication
- JWT token stored in `sessionStorage`  
- Token persists only for the session duration  
- Automatically cleared when session ends  

---

### 🚫 4. Route Protection
- Pages are restricted based on authentication state  
- Prevents unauthorized access to protected routes  

---

## 🔗 API Integration
- Frontend communicates with backend using JWT-secured endpoints  
- Authorization header used for protected requests  

---


## 🛠️ Tech Stack
- **Frontend:** HTML / CSS / JavaScript (or React if used)  
- **Backend APIs:** JWT-based authentication system  
- **Storage:** sessionStorage  

---

## ✅ Outcome
- Successfully implemented secure login system  
- Demonstrated session-based authentication  
- Integrated frontend with JWT-protected backend APIs  
