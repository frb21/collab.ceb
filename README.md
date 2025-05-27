# COLLAB.CEB

## Introduction/Rationale
In Cebu City, Non-Governmental Organizations (NGOs) play a significant role in addressing various social, environmental, and humanitarian issues. However, there is a lack of a centralized platform that facilitates collaboration and communication between these organizations and their volunteers. Many NGOs struggle with finding volunteers, organizing events, and sharing important updates with the community. Additionally, there is no single space for these organizations to connect and collaborate on projects, share resources, or discuss common goals.
collab.ceb aims to bridge this gap by providing a simplified social media platform tailored specifically for NGOs in Cebu City. The platform will allow NGOs to create profiles, post updates, share events, and recruit volunteers, all while fostering collaboration between organizations. Volunteers can easily browse through available opportunities and sign up to contribute to causes they care about.
This platform will enhance the visibility and impact of local NGOs by streamlining communication and empowering both NGOs and volunteers to work more efficiently toward positive change in Cebu City.

## Detailed Description
collab.ceb will be a user-friendly social media platform designed to meet the specific needs of NGOs and volunteers in Cebu City. The key features of the platform will include
1. **NGO Profiles:** NGOs will be able to create a detailed profile showcasing their mission, goals, and upcoming events. They will also be able to post updates, share news, and engage with their community.
2. **User Profiles:** Users can register as either volunteers or NGO representatives. They will have a personal profile where they can update their information, track volunteer work, and interact with posts and events.
3. **News Feed:** A timeline where users can view the latest posts from NGOs, including updates, announcements, and event invitations.
4. **Event Management:** NGOs will be able to create, manage, and promote events that require volunteer assistance. Volunteers can RSVP to events and track upcoming opportunities to participate.
5. **Volunteer Application System:** Volunteers can apply to events and roles within NGOs, and NGOs can approve or reject applications based on their needs.
6. **Interaction and Engagement:** The platform will allow users to like, comment, and share posts, fostering community interaction and engagement. This will encourage NGOs to actively communicate with their followers and keep them informed.
7. **Search Functionality:** Users can search for specific NGOs, events, or volunteer opportunities based on categories like cause, location, or keyword.

## Implementation
### Tech Stack
- **Frontend:** React, Next.js, Typescript
- **Backend/API:** Next.js API Routes, Prisma
- **Database:** Postgresql
- **Authentication:** NextAuth.js

## Database Design
- **Users** table for user profiles (including both volunteers and NGO representatives)
- **NGOs** table for NGO profiles
- **Posts** table to store posts made by NGOs  
- **Events** table to manage event data
- **Comments** and **Volunteer Applications** tables for user interactions with posts and events

## Features Development
- **User Registration/Login:** Implement user authentication where users can register and log in based on their role (volunteer or NGO representative).
- **CRUD Operations:** Allow users to create, read, update, and delete posts, events, and volunteer applications.
- **Event RSVP:** Enable volunteers to sign up for events, with a count of RSVPs visible to NGO organizers.
- **Real-time Updates:** Implement real-time notifications for new posts, comments, and event changes using WebSockets.

## How To Use:
1. **Create an Account:**
   - Users will be prompted to register with basic details such as name, email, and role (Volunteer or NGO Representative).
2. **NGO Profile Setup:**
   - NGO representatives can create their profiles by adding their organization’s information, mission, and contact details.
3. **Post Updates and Events:**
   - NGO representatives can post news updates or create events that require volunteers. They can include dates, locations, and descriptions for events, allowing volunteers to sign up.
4. **Browse News Feed:**
   - Volunteers can scroll through the news feed to see updates, upcoming events, and posts from various NGOs. They can interact with posts by liking and commenting.
5. **Volunteer For Events:**
   - Volunteers can sign up for events they are interested in by clicking on the "RSVP" button. NGOs can approve or decline volunteer applications based on availability and requirements.
6. **Notifications:**
   - Users will receive notifications for new posts, event updates, and applications that need approval.
7. **Search Functionality**
   - Use the search bar to find specific NGOs, events, or opportunities based on categories, keywords, or locations.

## Tables/Relations
### Users
#### Attributes:
- user_id (PK)
- name
- email
- password_hash
- role
- profile_picture
- bio
- created_at
### NGOs
#### Attributes:
- ngo_id (PK)
- user_id (FK to Users)
- name
- mission
- contact_email
- address
- website
- profile_picture
- created_at
### Posts
#### Attributes:
- post_id (PK)
- ngo_id (FK to NGOs)
- title
- content
- created_at
- updated_at
### Events
#### Attributes:
- event_id (PK)
- ngo_id (FK to NGOs)
- title
- description
- location
- event_date
- volunteer_limit
- created_at
- updated_at
### Volunteer_Applications
#### Attributes:
- application_id (PK)
- user_id (FK to Users)
- event_id (FK to Events)
- status
- applied_at
### Comments
#### Attributes:
- comment_id (PK)
- post_id (FK to Posts)
- user_id (FK to Users)
- content
- created_at
### Likes (optional)

## Project Setup
### Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (version 19 or higher recommended)
- [Git]

### Setup
### 1. Clone the Repository
```bash
git clone https://github.com/frb21/collab.ceb.git
cd collab.ceb
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```




