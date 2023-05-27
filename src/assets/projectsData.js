import p1 from './p1.png'
import p2 from './p2.png'
import p3 from './p3.png'
import p4 from './p4.png'
import p5 from './p5.png'

export const projectsData = [
  {
    projectName: 'Pet Care Booking',
    projectDescription:
      'An easy-to-use website for scheduling and viewing animal medical appointments. The owner name, pet name, appointment date, appointment time, and appointment notes are all requested by the appointment booking tool. Moreover, the facility to filter the appointment data by Pet name, Owner name, and Date in ascending or descending order is provided.',
    imageUrl: p1,
    projectUrl: 'https://dhruval-p.github.io/bookAppointment/'
  },
  {
    projectName: 'Fraud Detection using Graph Databases and Machine Learning',
    projectDescription:
      'This project aimed to detect fraudulent transactions in the BankSim dataset by making use of Graph databases and Machine Learning (ML). This was a group project and it was a requirement for one of my master\'s degree courses. ML algorithms including Random Forest, KNN, and XGBoost were employed. The graph database was created and queried using a tool called Neo4j.',
    imageUrl: p2,
    projectUrl: 'https://github.com/niravdedhiya/Fraud-Detection-BankSim'
  },
  {
    projectName: 'Face Recognition as a Service',
    projectDescription:
      'An application created using AWS Services (EC2, S3, and SQS) to perform real-time facial recognition. Deep Learning techniques were used to train the model for performing facial recognition. Please get in touch with me if you have any questions about this project or wish to see its source code.',
    imageUrl: p3,
    projectUrl: ''
  },
  {
    projectName: 'Portfolio Website',
    projectDescription:
      "An interactive portfolio website that provides information about my Projects, Skills, and Publications. Tools like React, Javascript, HTML, and CSS were used to build this website.",
    imageUrl: p4,
    projectUrl: 'https://dhruval-p.github.io/portfolio/'
  },
  {
    projectName: 'YouTube Sentiment Analysis',
    projectDescription:
      'A project that analyzes YouTube comments data using Natural Language Processing (NLP) and data visualization methods. Raw data was preprocessed before applying NLP techniques to segment the comments into different categories.',
    imageUrl: p5,
    projectUrl: 'https://github.com/dhruval-p/Sentiment-Analysis-on-YouTube-Comments'
  }
]
