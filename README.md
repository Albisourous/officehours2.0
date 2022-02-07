# OfficeHours 2.0

As the COVID-19 pandemic forces us to continually adapt to new circumstances, we wanted to help improve the effectiveness of online resources and communication. Our team initially took inspiration from the UTCS TA website for the help hours queue-- while this website achieves its goal, we believe that more functionality could be added to make the help process more efficient & effective.

## Purpose

Provides simplified queuing features to join/leave the queue.

Provides students the option to "tag" their problems (e.g. "1-on-1, bug fixes") so that TAs can potentially simultaneously help students that may have similar issues.

Provides students entertainment through tic tac toe. Some of our queues in the past have reached forty people in length and lasted four or five hours, so we figured it might be useful to keep students entertained while they wait.

## Process

To take in student names and tags for the queue, we utilized a React.JS front-end feeding into Node.JS & firebase for the back-end. All of our UI elements were built with a mix of React & CSS, and all immediate processing was handled via JS. The domain name was registered via Domain.com and our website is being hosted on GCP; this ties in nicely to our firebase storage system, which we use to store the members in the queue.

## Perseverance

While we were able to place user data into a database for the queue without too much trouble, we ran into difficulty trying to retrieve that data and display a sorted queue on the website. This was additionally challenging due to the tags associated with each person in the queue. We also had difficulty connecting a game we had written in JavaScript to a React.JS component, and eventually we refactored part of our game to run in React itself. As far as technology goes, we had some difficulty near the start with version control & general collaboration; we ended up using VSC Live Share to collaborate on this project.

While our additional functionalities weren't fully completed, we were able to figure out how to use Firebase to process data and how to construct a user-friendly website in React.JS. Only two of our four members had any experience with React before this project, and now all of us have been exposed to it. We also weren't familiar with GCP, so overall this project served as a great learning experience when it comes to new frameworks and technologies. And on top of all of this, most of us hadn't met before this weekend, so this project also served as a wonderful networking & social activity for the four of us.

## Prospect

In the future, we hope to improve the display of our queue system and add additional (multiplayer) games for students to play in queue, like a competitive typing speed game and a multiplayer snake game. Especially given the increase in online schooling over recent years, we think it could be prudent to continue developing the application outside of this hackathon as it could have a direct impact on students' learning.
 
## Demo
[![Demo video](https://img.youtube.com/vi/wyVgygkb3Zw/0.jpg)](https://www.youtube.com/watch?v=wyVgygkb3Zw "Office Hours - Help Queue Demo")

## Devpost 

https://devpost.com/software/officehours-2-0

## Contributing

Please contact me on LinkedIn to collaborate: https://www.linkedin.com/in/albin-shrestha/
