# loan-application

## Application overview

**1. Frontend**

The frontend of the loan application system is responsible for creating an intuitive and responsive user interface that allows users to submit their loan applications effortlessly. It collects essential user and business data, including:

**User Information:**

- User Name
- Email Address
  
  **Business Information:**
- Business name
- Year established
- Profi/Loss summary
- Accounting provider details
- Loan Amount

**2. Backend**

The backend serves as the core of the loan application system, managing data processing, storage, and interactions with external services. Key functionalities include:

**Data Storage:**

The system stores user and business loan application data in a MongoDB database. Each user can submit multiple applications, each associated with a unique business name.

**Balance Sheet Generation:**

After a user submits a loan application, the system initiates a request to simulate a balance sheet generation process. This process resembles an external third-party backend interaction and results in randomly generated balance sheet data for the business.

**Integration with External Providers:**

Decision Engine: Once the balance sheet is generated, the user can review it and click the "Apply" button. At this point, the application simulates the redirection to the decision engine, which evaluates the loan application based on various criteria and provides an outcome.

### Workflow

- **User Registration**: Users enter their name and email address to create an account in the loan application system.

- **Loan Application Submission**: Users can submit multiple loan applications, each associated with a unique business name. The application form collects essential loan-related information.

- **Data Storage**: Application data, including user details and loan information, is securely stored in the MongoDB database.

- **Balance Sheet Generation**: Upon submission, the system simulates a request to external accounting software providers to generate a balance sheet for the specified business. This step involves the generation of randomly generated financial data.

- **Review and Apply**: Users review the generated balance sheet and other application details. If satisfied, they click the "Apply" button.

- **Decision Making**: The loan application is redirected to the decision engine (simulated), which evaluates the application based on predefined criteria and generates an application outcome.

## Before You Begin

Before you can use this project, please ensure that you have the following software and tools installed on your system:

- Node.js - [Download and install Node.js](https://nodejs.org/en/download) and the node package manager (included with node.js).

## How to run the project

**1. Clone the repository**

Clone the github repository with the following git command.

```bash
 git clone https://github.com/ni30kp/B-loan-app
```

**2.Install `node_modules`**

This project has two directories `frontend` and `backend`. Open these two directories in seperate terminal and run the following npm command. This will install all the required `node_modules` listed on the `package.json` file that is required to run the project.

```bash
cd backend
```

```bash
npm install 
```

```bash
cd frontend
```

```bash
npm install 
```

**3.Connect with mongoDB**

The `env` and `.env.local` files are intentionally included.
You could connect your own mongo shell/atlas by adding the connection string in the `env` file that is inside the `./backend` 


**4.Starting the application**

To run the application,

- Try running the following commands in two separate terminals using the following commands within the terminal. 

```bash
**"frontend": "cd frontend && npm run dev"**
**"backend": "cd backend && npm run dev"**
```

**5.Open in browser**

You will find the frontend runing on port 3000 and backend on port 5001.


## Tech stack and major dependancies

| <div align ="center">Name </div>                         | <div align = "center">Description</div>                                      |
| -------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **[NextJs]**                         | Front End JavaScript Library                                                 |
| **[ExpressJs]**                  | Back End Web Application Framework                                           |
| **[Tailwind CSS]**             | A utility-first CSS framework                                                |
| **[DaisyUI]**                      | TailwindCSS component library                                                |
| **[Axios]**           | Promise based HTTP client for the browser and NodeJs                         |
| **[HelmetJs]**              | Helmet helps you secure your Express.js apps by setting various HTTP headers |
| **[MongoDb]** | NoSQL cloud database                                                         |




