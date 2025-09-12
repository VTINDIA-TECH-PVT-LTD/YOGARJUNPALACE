# Use official Node.js 22 image
FROM node:22

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files into container
COPY . .

# # Expose the port your app runs on (change if different)
EXPOSE 5173

# Start the app
# CMD ["npm", "run", "dev"]
CMD ["npx", "vite", "--host", "0.0.0.0"]


