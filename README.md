# IVPT Portals

This is a monorepo that hosts all portals for IVPT.

## Development Environment

To ensure everyone has a similar development environment and to avoid issues, make sure to have the following tools in these versions:

| Tool   | Version |
| ------ | ------- |
| Git    | Latest  |
| Docker | v26.1.4 |
| NodeJS | v18     |

### Installing Node Js

We recommend using [volta.js](https://volta.sh/):

```bash
# install volta
curl https://get.volta.sh | bash

# install node v18
volta install node@18

# check node version
node --version
```

## Installation Guide

> With the tools properly installed, execute the commands below

### **1. Clone the repository**

```bash
git clone https://github.com/InstitutoVidaParaTodosOficial/portals.git
```

### **2. Enter the project directory**

```bash
cd portals
```

### **3. Start Strapi CMS**

```bash
docker compose up -d
```

### **4. Install the dependencies**

```bash
npm install
```

### **5. Run a portal**

Go to the specific portal's folder inside services folder and run

```bash
npm run dev # or npm start (check package.json for the available scripts)
```

## Before commiting

Make sure the code you are commiting follows code styling guidelines. You can check by running `npm run prettier:check` and to fix any issues `npm run prettier:fix`
