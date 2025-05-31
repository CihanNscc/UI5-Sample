# SAP UI5 Project

## 📋 Overview

This is a small exercise project to get familiar with SAP UI5 development. It's a sample walkthrough application that demonstrates core UI5 concepts and best practices.

## 🎯 Purpose

This project serves as a learning exercise to:

- Understand SAP UI5 framework fundamentals
- Practice MVC (Model-View-Controller) architecture
- Explore UI5 routing and navigation
- Work with data binding and models
- Implement responsive design principles

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Routing**: Multi-page navigation with overview and detail views
- **Data Binding**: JSON model implementation with invoice data
- **Internationalization**: i18n support for multi-language capabilities
- **Modern UI**: Uses SAP Fiori design guidelines with Horizon, Fiori 3, and Fiori 3 Dark themes

## 🛠 Tech Stack

- **Framework**: SAP UI5 (minimum version 1.60)
- **Libraries**: sap.m, sap.ui.core
- **Configuration**: UI5 YAML specification 4.0
- **Data**: JSON models

## 📁 Project Structure

```
sap-ui5-project/
├── webapp/
│   ├── controller/        # Application controllers
│   ├── view/             # XML views
│   ├── model/            # Data models
│   ├── css/              # Custom styles
│   ├── i18n/             # Internationalization files
│   ├── localService/     # Mock data services
│   ├── test/             # Unit and integration tests
│   ├── Component.js      # Application component
│   ├── manifest.json     # App descriptor
│   ├── index.html        # Entry point
│   └── Invoices.json     # Sample data
├── ui5.yaml              # UI5 tooling configuration
├── package.json          # Node.js dependencies
└── README.md            # This file
```

## 🔧 Prerequisites

- Node.js (Latest LTS version recommended)
- UI5 CLI (for development and build tasks)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd sap-ui5-project
   ```

2. **Install UI5 CLI globally** (if not already installed)

   ```bash
   npm install -g @ui5/cli
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

## 🚀 Running the Application

1. **Start the development server**

   ```bash
   ui5 serve
   ```

2. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

## 🎨 Available Themes

The application supports multiple SAP themes:

- SAP Horizon (default)
- SAP Fiori 3
- SAP Fiori 3 Dark

## 📚 Learning Resources

- [SAP UI5 Documentation](https://ui5.sap.com/)
- [SAP UI5 Walkthrough Tutorial](https://ui5.sap.com/topic/3da5f4be63264db99f2e5b04c5e853db)
- [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design/)

## 📝 Notes

This is a learning project created to explore SAP UI5 capabilities. It follows the official SAP UI5 walkthrough tutorial structure and includes common patterns used in enterprise UI5 applications.

## 🤝 Contributing

As this is a personal learning project, contributions are welcome for educational purposes. Feel free to:

- Suggest improvements
- Add new features for learning
- Fix bugs or issues
- Enhance documentation

## 📄 License

ISC License - see package.json for details

---

_Happy learning with SAP UI5! 🎉_
