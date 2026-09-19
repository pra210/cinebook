🎬 CineBook — Movie Booking Website

CineBook is a modern, responsive movie ticket booking website designed to provide a simple and smooth movie-booking experience.

Users can explore movies, view movie details, select a date and theatre, choose seats, complete a payment flow, and view their digital ticket.

✨ Features

 🎥 Movie Discovery
- Browse available movies
- View movie posters and details
- Search movies
- Filter movies by language
- Trending movies section
- Recently added movies
- Now showing movies

🎟️ Movie Booking
- Select a movie
- Choose a preferred date
- Select a theatre
- Select a show time
- Choose available seats
- View selected seats and total price
- Continue through the booking process

💳 Payment
- Multiple payment method interface
- Payment information form
- Booking total displayed clearly
- Payment confirmation flow

🎫 Digital Ticket
- Booking confirmation
- Booking ID generation
- Movie information
- Theatre information
- Show date and time
- Selected seats
- Total amount
- Digital ticket view
- Print ticket option

👤 User Features
- Login page
- Signup page
- Profile page
- Booking history
- View previous tickets
- Logout functionality

🌐 Navigation
- Home
- Movies
- Trending
- Recently Added
- Languages
- Profile
- Logout

📱 Responsive Design
CineBook is designed to work across:
- Desktop
- Laptop
- Tablet
- Mobile devices

🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Browser Storage
- LocalStorage

### Development Tools
- Visual Studio Code
- Git
- GitHub
- Live Server

📂 Project Structure

cinebook/
│
├── assests/
│   ├── icons/
│   ├── images/
│   │   ├── actors/
│   │   ├── backgrounds/
│   │   ├── banners/
│   │   └── movies/
│   └── logos/
│
├── css/
│   ├── booking.css
│   ├── confirmation.css
│   ├── details.css
│   ├── login.css
│   ├── movies.css
│   ├── payment.css
│   ├── profile.css
│   ├── seats.css
│   ├── style.css
│   ├── ticket.css
│   └── welcome.css
│
├── data/
│   └── movies.js
│
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── booking.js
│   ├── confirmation.js
│   ├── details.js
│   ├── movies.js
│   ├── payment.js
│   ├── profile.js
│   ├── seats.js
│   ├── ticket.js
│   └── welcome.js
│
├── index.html
├── welcome.html
├── login.html
├── signup.html
├── movies.html
├── movie-details.html
├── booking.html
├── seats.html
├── payment.html
├── confirmation.html
├── ticket.html
└── profile.html

🔄 Booking Flow
Welcome
   ↓
Login / Signup
   ↓
Home
   ↓
Browse Movies
   ↓
Movie Details
   ↓
Select Date & Theatre
   ↓
Select Show Time
   ↓
Select Seats
   ↓
Payment
   ↓
Booking Confirmation
   ↓
Digital Ticket

🎨 UI/UX Design

CineBook uses a clean and professional movie-booking interface with:
- Light commercial design
- CineBook red accent color
- Clean typography
- Responsive layouts
- Movie-focused cards
- Clear booking steps
- Practical seat-selection interface
- Simple navigation
- Professional ticket layout
- Consistent design across pages

📄 Main Pages

🏠 Welcome Page
Introduces CineBook and explains the main features of the platform.

🔐 Login & Signup
Allows users to sign in or create an account before continuing to the movie-booking experience.

🎬 Home Page
Provides access to:
- Trending Movies
- Now Showing
- Recently Added Movies
- Movie languages
- Movie discovery
- CineBook experience information
  
🎞️ Movies Page
Allows users to browse the available movie collection, search for movies, and filter movies by language.

🎥 Movie Details
Displays detailed information about the selected movie before starting the booking process.

📅 Booking Page
Allows users to select:
- Date
- Theatre
- Show time
  
💺 Seat Selection
Provides an interactive cinema seating layout where users can select available seats and view the total price.

💳 Payment Page
Displays booking details and provides the payment interface.

✅ Confirmation Page
Displays the booking confirmation and important booking information.

🎫 Ticket Page

Displays the digital movie ticket containing:
- Movie
- Theatre
- Date
- Show time
- Seats
- Booking ID
- Total amount
  
👤 Profile Page
Allows users to view their profile information and booking history.


💾 Data Storage

CineBook currently uses browser LocalStorage for frontend application data such as:
- Login state
- Current user
- Selected movie
- Selected date
- Selected theatre
- Selected show time
- Selected seats
- Ticket price
- Total price
- Payment status
- Payment method
- Booking history
- Selected ticket
No external database is required for the current frontend implementation.

🚀 How to Run the Project

1. Clone the Repository
git clone YOUR_GITHUB_REPOSITORY_URL

2. Open the Project
cd cinebook

3. Open in Visual Studio Code
Open the project folder in Visual Studio Code.

4. Run Using Live Server
Install the Live Server extension in VS Code if you do not already have it.
Then:
1. Open welcome.html
2. Right-click the file
3. Select Open with Live Server
The CineBook website will open in your browser.

🔐 Authentication

-CineBook currently uses frontend-based authentication for demonstration purposes.
-Login state and user information are stored using browser LocalStorage.
-This implementation is intended for learning and project demonstration and is not a production authentication system.

🎟️ Booking System

The booking system follows a step-by-step process:
1. Select a movie
2. Select a date
3. Select a theatre
4. Select a show time
5. Select available seats
6. Review the booking
7. Complete the simulated payment
8. Generate booking confirmation
9. View the digital ticket
    
📱 Responsive Design
The interface includes responsive layouts for different screen sizes.

The design adapts:
- Navigation
- Movie cards
- Booking controls
- Seat selection
- Forms
- Ticket layout
- Profile sections
for smaller screens and mobile devices.

🔮 Future Improvements

Possible future improvements include:
- Backend integration
- MySQL or MongoDB database
- Secure user authentication
- Real payment gateway integration
- Real-time seat availability
- Real theatre management
- Admin dashboard
- Email ticket delivery
- Movie API integration
- Cloud deployment
- Online booking synchronization
- Real-time booking history
  
⚠️ Disclaimer
-CineBook is a frontend movie-booking project created for educational and demonstration purposes.
-The current authentication, booking, and payment systems are implemented on the frontend using browser LocalStorage.
-The payment interface does not process real payments, and the booking system does not create real-world movie reservations.

👨‍💻 Developer
Praveen K
Computer Science Engineering Student

⭐ Project
If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

🎬 CineBook
Your Movie. Your Seat. Your Experience.
