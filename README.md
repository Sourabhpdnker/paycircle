# 💸 PayCircle – Smart Expense Splitting Made Simple

PayCircle is a modern **expense tracking and group settlement web application** inspired by Splitwise, designed to make **shared expenses transparent, fair, and effortless**.
It helps individuals and groups track expenses, split bills accurately, and settle balances without confusion.

---

## 🚀 Problem Statement

Managing shared expenses among friends, roommates, or groups often leads to:

* Confusion over who paid how much
* Manual calculations and mistakes
* Delayed or forgotten settlements
* Lack of transparency and trust

**PayCircle solves this problem** by providing a centralized, real-time platform to track expenses, calculate balances automatically, and simplify settlements.

---

## 💡 Solution Overview

PayCircle allows users to:

* Create groups and add members
* Add expenses with flexible split logic
* Automatically calculate who owes whom
* Track settlements clearly and transparently
* Access everything securely with authentication

All data updates happen in **real-time**, ensuring accuracy and consistency across users.

---

## ✨ Key Features

* 🔐 **Secure Authentication** using Clerk
* 👥 **Group-based expense management**
* ➗ **Automatic expense splitting**
* 📊 **Real-time balance calculations**
* 🔄 **Live updates with Convex**
* 📅 **Date-based expense tracking**
* 📱 **Responsive & modern UI**
* ⚡ **Fast and scalable architecture**

---

## 🛠️ Tech Stack

### Frontend

* **Next.js (App Router)** – Modern React framework for scalability
* **React 19** – Component-based UI
* **Tailwind CSS** – Clean and responsive design
* **ShadCN/UI** – Accessible and reusable UI components

### Backend & Database

* **Convex** – Serverless backend with real-time database
* **Convex Functions** – Queries, mutations, and schema validation

### Authentication

* **Clerk** – Secure user authentication and session management
* **JWT-based auth** integrated with Convex

### Other Tools & Services

* **Resend** – Email notifications (optional)
* **Vercel** – Hosting and CI/CD
* **Git & GitHub** – Version control and collaboration

---

## 🧠 How the System Works

1. **User Authentication**

   * Users sign up or log in using Clerk
   * Secure JWTs are issued and validated

2. **Group Creation**

   * Users create expense groups (e.g., trips, roommates)
   * Members are added to groups

3. **Expense Tracking**

   * Expenses are added with payer, amount, and participants
   * Expenses are stored and synced in real time

4. **Balance Calculation**

   * The system calculates net balances automatically
   * Shows who owes whom and how much

5. **Settlements**

   * Users can record settlements
   * Balances update instantly for all group members

---

## 🧩 Why This Project Matters

* Demonstrates **full-stack development skills**
* Uses **modern industry-grade technologies**
* Implements **real-world business logic**
* Follows **scalable and maintainable architecture**
* Ideal example of **SaaS-style application design**

This project showcases strong understanding of:

* Web architecture
* Authentication flows
* Real-time systems
* Clean UI/UX
* Production-ready deployments

---

## 📦 Installation & Setup (Development)

```bash
# Clone the repository
git clone https://github.com/your-username/paycircle.git

# Install dependencies
npm install

# Start Convex dev server
npx convex dev

# Run the application
npm run dev
```

---

## 🌍 Deployment

* Frontend hosted on **Vercel**
* Backend deployed on **Convex production**
* Environment variables securely managed via Vercel & Convex dashboards

---

## 📌 Future Enhancements

* Multi-currency support
* Expense analytics & charts
* Reminders and notifications
* Export expense reports
* Mobile-first optimizations

---

## 👨‍💻 Author

**Sourabh Pedanekar**
Final Year Engineering Student | Full-Stack Developer
Passionate about building scalable, real-world applications.

---

⭐ If you like this project, feel free to star the repository!
