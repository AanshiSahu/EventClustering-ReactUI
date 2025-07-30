# 📊 EventClustering-ReactUI

This project demonstrates a custom **K-Means clustering implementation** on event location data and features a **React-based frontend** for visualizing the results. It combines data processing in Python with a dynamic UI built in React.js.

## 📁 Project Structure

EventClustering-ReactUI/
├── frontend/ # React frontend application
│ ├── public/
│ └── src/
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── index.css
│ ├── package.json
│ └── .gitignore
│
├── notebooks/ # Python notebooks for clustering
│ ├── cluster.ipynb
│ └── cleaned_cluster.ipynb
│
├── data/ # Output datasets
│ ├── clustered_output.csv
│ └── cleaned_clustered_output.csv
│
└── README.md

## 🧪 Clustering Logic (Python)

- Implemented **K-Means clustering from scratch**
- Used **latitude** and **longitude** to group spatially close events
- Applied **Elbow Method** to determine the optimal number of clusters
- Assigned cluster labels to each event in the dataset

## 🧹 Cleaned Files and Their Purpose

To prepare the data and code for integration with the React frontend and ensure clarity for reviewers:

- **`cleaned_cluster.ipynb`**:  
  Cleaned to remove redundant code, debug outputs, and unnecessary iterations — making it more concise and easier to follow.
  | `notebooks/cleaned_cluster.ipynb` | Final cleaned version of the clustering logic |

- **`cleaned_clustered_output.csv`**:  
  Cleaned to include only relevant columns such as `Latitude`, `Longitude`, `Event Count`, `Event Duration`, and `Cluster` — improving frontend parsing and readability.
  | `data/cleaned_clustered_output.csv` | Cleaned dataset for frontend display |

## 🌐 React Frontend

- Built using [Create React App](https://github.com/facebook/create-react-app)
- Parses cleaned CSV using `PapaParse`
- Displays clustered events in an interactive table
- Easy to extend with charts, maps, or filters

## 🚀 Getting Started

### Prerequisites:
- Node.js and npm installed

### Setup Instructions:
-cd frontend
-npm install       # Install dependencies
-npm start         # Run frontend on http://localhost:3000

📦 Scripts (from frontend directory)
Command	Purpose
-npm start   	Runs the app in development mode
-npm run build   	Builds the app for production
-npm test   	Runs tests (optional)

📁 Output Files

File	Description
clustered_output.csv -	Raw output with full clustering results
cleaned_clustered_output.csv -	Final version used in frontend (cleaned columns)

💡 Future Improvements

Allow dynamic CSV uploads
Display Elbow graph in frontend

🙋‍♀️ Author
Aanshi Sahu
aanshisahu08@gmailcom

📃 License
This project is intended for submission and evaluation purposes. No license has been applied.
