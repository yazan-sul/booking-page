

Department of Computer Science

COMP4200-Introduction to Graduation Project
 
Project Proposal 2025/2026 


	




Title of Project: Dental Clinic Management Web Application with Online Self-Booking System


	





Group Members with IDs:

Mouath Masalmah – 1220179
Yazan Sulaiman – 1221961
Abdullah Khamayseh – 1200605


Group ID: 23





Supervisor:	Dr. Faisal Shehadeh



Section – B

	Title of Project:		Dental Clinic Management Web Application with Online Self-Booking System 

	Project No:	

	Supervisor:	Faisal

Key Areas: 		Online Booking, Clinic Management, Patient Profile, Healthcare Systems, Multi-Branch Clinics, Electronic Medical Records, Laboratory Management, Web Technologies.


Section – C

Student Signature:___________________________ Date Submitted:

First Supervisor Name: 	___________________________

First Supervisor Signature:____________________

Date Approved: ____ / ____ / _____

Abstract

This project proposes a comprehensive web-based system for managing dental clinics operating across multiple branches. The proposed solution integrates an online self-booking platform, centralized patient medical records, laboratory management, and administrative tools into one unified system.
Patients can book appointments online, view available time slots in real time, select preferred dentists, make prepayments when required, and access their treatment history from any device. Dentists can access and update medical records across branches to maintain continuity of care. Staff members can manage appointments, coordinate schedules, and update laboratory cases and treatment statuses. Administrators benefit from analytics dashboards, financial reports, and full control over user roles and permissions.
The system improves efficiency by eliminating phone-based scheduling, reducing administrative overhead, and minimizing errors caused by fragmented paper-based records. Patient guidance. With secure authentication and role-based access control, the platform ensures privacy and compliance with healthcare data protection principles. Overall, this project aims to modernize dental clinic operations and deliver a seamless experience for both patients and clinical staff.


















Table Of Contents

Abstract	3
Table Of Contents	4
1. General overview	5
2. Motivation and problem statement	5
3. Aims & Objectives	5
Aim	5
Objectives	6
4. Literature Review / Background	6
5. Methodology	6
5.1. Requirements Analysis	6
5.2. System Design	6
5.3. Implementation	7
5.4. Testing	7
5.5. Deployment	7
6. Ethical Considerations	7
7. Software Tools	8
8. Work Plan	8
First Semester	8
Second Semester	8
9. References and Bibliography	8
Bibliography	8








General overview

Modern dental clinics require efficient digital infrastructure to manage patient records, appointments, laboratory management, and administrative tasks. Many clinics—especially multi-branch networks—still rely heavily on phone calls, paper files, and isolated systems. These outdated methods lead to scheduling conflicts, lost records, miscommunication, and delays in providing care [2], [3].
The proposed system provides a centralized web platform that streamlines operations across branches. It offers patients self-service features such as online appointment booking, treatment history access, and notifications. Dentists can view full patient files regardless of branch location, update treatment plans, and follow laboratory case progress. Staff members can manage calendars, doctor availability, and lab management, while administrators can oversee financial reports.
By introducing a robust, secure, and user-friendly web application, the system enhances service quality, reduces administrative burden, and supports scalability for multi-branch dental practices [2], [4].

Motivation and problem statement
Dental clinics using traditional methods face several challenges:
Phone-dependent scheduling results in missed calls, double bookings, and long waiting times.
Paper records and isolated systems prevent clinics from accessing patient information across branches.
Laboratory processes are manual, making it difficult to track case status, costs, and expected delivery dates.
Inconsistent communication between patients, dentists, and staff reduces efficiency and harms patient experience.
Patients increasingly expect convenient digital services, especially the ability to book appointments anytime, review medical history, and receive reminders. Clinics also require tools that ensure data accuracy, treatment continuity, and operational transparency.
The problem this project addresses is the absence of a unified, digital, multi-branch clinic management system that supports self-booking, centralized records, laboratory tracking, and automated administrative workflows [2], [3], [6].

Aims & Objectives
Aim
To design and develop a web-based management system that enables online appointment booking, centralized patient data access, and efficient coordination among patients, dentists, staff, laboratories, and administrators [2], [3].
Objectives
Provide patients with online self-booking, rescheduling, and cancellation features [3].
Display real-time appointment availability for each dentist and branch.
Centralize patient medical records and synchronize data across all branches [2].
Enable dentists to update treatment plans, access patient history, and track lab cases [6].
Digitize laboratory case management, including status tracking and payment logs [4].
Implement secure role-based access control for all user types.
Generate financial reports for administrators.
Improve overall clinic efficiency through digital coordination [2], [3].

Literature Review / Background


A review of the relevant literature highlights the rapid digital transformation occurring in dental healthcare:
Responsive web-based dental applications improve patient engagement, streamline scheduling, and support remote monitoring.
Educational and anxiety-reducing applications using 3D models or guided instructions improve patient comfort and understanding during treatment.
Digital systems reduce the workload on administrative staff and improve the accuracy of patient records.
Electronic platforms enhance communication between clinics and patients, supporting continuity of care.
These studies collectively support the importance of implementing unified digital solutions to optimize operations in multi-branch dental practices.


Methodology
The project will follow a structured Software Development Life Cycle (SDLC) using the technologies PostgreSQL and Next.js.


Requirements Analysis


Analyze the needs of patients, dentists, staff, administrators, and laboratory management.
Document functional and non-functional requirements, ensuring scalability and security.


System Design
Create use case diagrams, sequence diagrams, and process flows.
Design a relational database schema optimized for PostgreSQL.
Develop UI wireframes for all system roles (patient, dentist, and admin).
Implementation
Backend (API routes):
Build RESTful APIs using Next.js routes for authentication, booking, records, lab management, and notifications.
Use JSON Web Tokens (JWT) for secure authentication.
Implement server-side validation and role-based access control.


Frontend (Next.js/React):
Build responsive, modular UI components for all user interfaces.
Use Next Route for navigation and React Fetch for API communication.
Implement real-time updates for schedule status where applicable.


Database (PostgreSQL):
Implement relational models for patients, appointments, branches, doctors, lab cases, payments, and permissions.
Use proper indexing and constraints to ensure consistency.
Integrate Prisma or SQL as the query builder.
Testing
Unit Testing: Using Jest or similar tools for backend and frontend.
Integration Testing: Ensuring API endpoints function correctly with PostgreSQL.
User Acceptance Testing: Testing the booking flow, clinical workflows, and lab management.
Performance Testing: Ensuring stability for multiple branches and users.
Deployment
Host the backend on a cloud service (AWS).
Deploy the React frontend using tools like AWS.
Deploy PostgreSQL on a cloud database platform (AWS RDS).
Secure the application with SSL, backups, and monitoring services.
Ethical Considerations


All data will be securely stored in PostgreSQL with encrypted connections (SSL).
Role-based access in the backend ensures only authorized users access patient medical records.
The frontend in React avoids exposing sensitive logic, and all operations route through the secure API layer.



Software Tools


Next.js (App Router)—for building the frontend interface and backend API routes.
PostgreSQL for database storage
PgAdmin or similar for database administration
Figma/Canva for UI/UX design
Git & GitHub for version control
Jira / Notion / Trello – for project and task management, sprint planning, and team collaboration.	
Postman/Thunder Client for API testing
Cloud hosting (AWS or similar)



Work Plan
First Semester


Stage
Description
Expected Due Date
1
Requirements gathering, analysis, and literature review
Week 3
2
System design (ERD, use cases, UI wireframes)
Week 10
3
Frontend initial development
Week 12
4
Draft report submission
End of semester

Second Semester


Stage
Description
Expected Due Date
1
Full system development
Week 5
2
Integration of modules (booking, records, labs)
Week 8
3
System testing and evaluation
Week 11
4
Deployment and refinement
Week 13
5
Final presentation and final report
End of semester







SYSTEM REQUIREMENTS
1. Functional Requirements (FR)
FR1.0 Patient Registration
FR1.1: The system shall allow users to create an account using their full name, phone number, date of birth, gender, and password.
FR1.2: The system shall validate all input fields (format, completeness).
FR1.3: The system shall ensure the uniqueness of phone number.
FR1.4: The system shall store passwords using secure hashing.
FR1.5: The system should notify the user upon successful registration.
FR1.6: The system could allow optional fields (email, residential address, and emergency contact).
FR2.0 User Authentication
FR2.1: The system shall allow users to log in using a phone number.
FR2.2: The system shall encrypt credentials during communication.
FR2.3: The system could support multi-factor authentication (MFA).
FR3.0 Linking Existing Medical Records
FR3.1: The system shall match existing medical records using phone number.
FR3.2: The system could notify users after linking is completed.
FR4.0 Online Appointment Booking
FR4.1: The system shall display real-time available appointment slots.
FR4.2: The system shall allow selecting doctor, branch, and service type.
FR4.3: The system shall restrict booking more than one month in advance.
FR4.4: The system shall require prepayment for first-time patients.
FR4.5: The system shall send booking confirmation through SMS.
FR4.6: The system could recommend the nearest branches with availability.
FR5.0 Rescheduling Appointments
FR5.1: The system shall allow rescheduling if more than 24 hours remain.
FR5.2: The system shall show available alternative slots.
FR5.3: The system shall notify the doctor and staff of any changes.
FR5.4: The system could allow multiple reschedules depending on rules.
FR5.5: The system shall allow the clinic members to reschedule appointments according to the application’s defined rules.
FR6.0 Appointment Cancellation
FR6.1: The system shall allow cancellation in accordance with application policy.
FR6.2: The system shall automatically process the refund upon cancellation without requiring staff intervention.
FR6.3: The system shall notify doctors of cancellations.
FR7.0 Access to Medical Records
FR7.1: The system shall provide read-only access to patient treatment history.
FR7.2: The system shall list completed, ongoing, and planned treatments.
FR7.3: The system shall hide internal clinical notes not intended for patients.
FR7.4: The system should allow secure medical record download.
FR8.0 Parent Access to Child Records
FR8.1: The system shall allow linking child profiles to parent accounts.
FR8.2: The system shall display child records separately.
FR8.3: The system should enable easy selecting between profiles.
FR9.0 Patient Notifications
FR9.1: The system shall send appointment reminders via SMS.
FR9.2: The system should notify patients about treatment updates.
FR9.3: The system could allow managing notification preferences.
FR10.0 Dentist Access to Patient Records
FR10.1: The system shall display complete medical history, diagnoses, and treatments.
FR10.2: The system shall hide confidential financial and operational notes from users with access privileges.
FR10.3: The system shall allow dentists to filter the patient’s medication history by (branch, dentist, service, etc …).
FR10.4: The system shall allow dentists to update treatment plans and records.
FR11.0 Treatment Plan Management
FR11.1: The system shall allow dentists to create, edit, and update treatment plans.
FR11.2: The system shall notify patients of treatment plan updates.
FR11.3: The system could support attaching images, X-rays, and documents.
FR12.0 Dentist Notifications
FR12.1: The system shall notify dentists when appointments are booked, canceled, or rescheduled.
FR12.2: The system could generate daily or weekly schedule summaries.
FR13.0 Staff Appointment Management
FR13.1: The system shall allow staff to book appointments for patients without deposits.
FR13.2: The system shall allow rescheduling and cancellation in compliance with rules.
FR13.3: The system should allow identity verification via phone number.
FR14.0 Managing Doctor Availability
FR14.1: The system shall allow staff to set working hours.
FR14.2: The system shall prevent double-booking.
FR14.3: The system could visually highlight scheduling conflicts.
FR15.0 Laboratory Management
FR15.1: The system shall allow adding and editing external laboratories.
FR15.2: The system shall provide a dedicated page for each lab.
FR15.3: The system shall allow adding lab work entries (treatment, date, cost, patient).
FR15.4: The system shall track lab case status.
FR15.5: The system could notify clinic members when updating lab results.
FR15.6: The system could generate lab summary reports.
FR16.0 User and Permission Management (Admin)
FR16.1: The system shall allow creating and modifying user accounts.
FR16.2: The system shall enforce role-based access control (RBAC).
FR16.3: The system could block unauthorized access attempts.
FR16.4: The system could provide predefined permission templates.

FR17.0 Branch Management (Admin)
FR17.1: The system shall allow adding, editing, and disabling branches.
FR17.2: The system shall synchronize branch data in real-time.
FR17.3: The system could generate branch performance dashboards.
FR18.0 Financial & Analytical Reporting
FR18.1: The system shall generate reports for revenues, expenses, and lab costs.
FR18.2: The system could support data export to PDF.
FR19.0 System-Wide Requirements
FR19.1: The system shall synchronize actions in real-time across branches.
FR19.2: The system shall provide a responsive interface across devices.
FR19.3: The system shall log all user actions for auditing.

FR20.0 Progressive Web App Features
FR20.1: The patient mobile web interface shall be installable as a Progressive Web App on user devices.
FR20.2: The system shall implement service workers for offline functionality.
FR20.3: The system shall cache critical patient data for offline viewing (appointment history, upcoming appointments).
FR20.4: The system shall display appropriate offline status messages when the network is unavailable.
FR20.5: The system shall synchronize data automatically when connection is restored.
FR20.6: The PWA should provide native-like navigation (app icon, splash screen, standalone display mode).
FR20.7: The system could support biometric authentication (fingerprint/face ID) for quick login on PWA.

2. Non-Functional Requirements (NFR)
NFR1.0 Performance
NFR1.1: The system shall respond to user actions within 2 seconds under normal load.
NFR1.2: The system shall handle 200+ concurrent users.
NFR1.3: Appointment search results should load within 1–2 seconds
NFR2.0 Security
NFR2.1: The system shall hash passwords using secure algorithms (e.g., Argon2id).
NFR2.2: The system shall use HTTPS/TLS for all client–server communication.
NFR2.3: The system shall enforce role-based access control (RBAC).
NFR2.4: Unauthorized access attempts shall be logged.
NFR2.5: Sensitive medical data shall be encrypted at rest.
NFR3.0 Reliability
NFR3.1: The system shall ensure data integrity during synchronization.
NFR3.2: The system should automatically recover after temporary failures.


NFR4.0 Availability
NFR4.1: The system shall achieve at least 99% uptime.
NFR4.2: The system could support redundancy for critical modules.
NFR5.0 Usability
NFR5.1: The interface shall support both Arabic and English.
NFR5.2: The system shall be accessible across mobile, tablet, and desktop.
NFR5.3: The user interface should be intuitive and easy to navigate.
NFR6.0 Maintainability
NFR6.1: The system shall use modular, layered architecture.
NFR6.2: Code components should support easy updates and debugging.
NFR7.0 Scalability
NFR7.1: The system shall support adding new branches without downtime.
NFR7.2: The system should scale horizontally to handle increased load.
NFR8.0 Compliance
NFR8.1: The system shall comply with medical privacy regulations.
NFR8.2: The system should maintain audit logs for at least 12 months.
