# 🎬 Movie App

A modern, responsive movie discovery application that allows users to browse, search, and explore movies with detailed information and beautiful UI.

## 🚀 Live Demo

**[View Live App](https://movie-app-omega-jade.vercel.app/)**

## ✨ Features

- 🎭 **Featured Movies**: Discover trending and popular movies
- 🔍 **Search Functionality**: Find movies by title, genre, or keywords
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX**: Clean and intuitive interface
- 📊 **Movie Details**: View comprehensive information including ratings, cast, and synopsis
- ⚡ **Fast Loading**: Optimized performance with smooth user experience
- 🌐 **Real-time Data**: Fetches latest movie information from external APIs

## 🛠️ Technologies Used

- **Frontend Framework**: React.js
- **Styling**: CSS3 / Styled Components
- **API Integration**: Movie Database API (TMDB/OMDb)
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14.0.0 or higher)
- npm or yarn package manager
- Git

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdelrahman309/movie-app.git
   cd movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your API keys:
   ```env
   REACT_APP_API_KEY=your_movie_api_key_here
   REACT_APP_BASE_URL=https://api.themoviedb.org/3
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the app

## 🏗️ Project Structure

```
movie-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── MovieCard/
│   │   ├── SearchBar/
│   │   └── FeaturedMovie/
│   ├── pages/
│   │   ├── Home/
│   │   ├── MovieDetails/
│   │   └── Search/
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎯 Usage

1. **Browse Featured Movies**: The home page displays trending and popular movies
2. **Search Movies**: Use the search bar to find specific movies
3. **View Details**: Click on any movie card to see detailed information
4. **Responsive Navigation**: Seamlessly browse across different screen sizes

## 🌟 Key Components

### Featured Movie Section
- Displays hero movie with backdrop image
- Shows movie title, overview, and rating
- Dynamic content loading

### Movie Cards
- Grid layout of movie posters
- Hover effects and smooth transitions
- Rating display and release year

### Search Functionality
- Real-time search results
- Debounced input for better performance
- Filter and sort options

## 📱 Responsive Design

The app is fully responsive and works seamlessly across:
- 📱 Mobile devices (320px and up)
- 📟 Tablets (768px and up)
- 💻 Desktop computers (1024px and up)
- 🖥️ Large screens (1200px and up)

## 🚀 Deployment

This app is automatically deployed to Vercel. Any push to the main branch triggers a new deployment.

To deploy manually:
```bash
npm run build
# Deploy the build folder to your preferred hosting service
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 API Reference

This app uses The Movie Database (TMDb) API for fetching movie data:
- Base URL: `https://api.themoviedb.org/3`
- Authentication: API Key required
- Rate Limiting: Respect API rate limits

## 🐛 Known Issues

- Loading states may briefly show on slow connections
- Some movie images may not load if not available in the API

## 🔮 Future Enhancements

- [ ] User authentication and favorites
- [ ] Movie watchlist functionality
- [ ] Advanced filtering options
- [ ] Movie recommendations
- [ ] Dark/Light theme toggle
- [ ] Offline support with PWA

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨‍💻 Author

**Abdelrahman**
- GitHub: [@abdelrahman309](https://github.com/abdelrahman309)
- LinkedIn: [Connect with me](https://linkedin.com/in/abdelrahman309)

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie data API
- [Vercel](https://vercel.com/) for hosting and deployment
- React community for excellent documentation and resources

## 📞 Support

If you have any questions or need help with setup, please open an issue in this repository or contact me directly.

---

⭐ Star this repository if you find it helpful!
