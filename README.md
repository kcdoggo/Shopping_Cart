
## How to Use

1. **Clone the repository**:  
   ```
   git clone <repository_url>
   ```

2. **Testing with Jest**:  
   If you want to test the project with Jest, open the terminal and run the following command:  
   ```
   npm test
   ```

3. **Testing with Postman**:  
   - Send a POST request to `http://localhost:3000/process`
   - Use the following test code:
     ```
     [
       {"code":"A","quantity":3},
       {"code":"B","quantity":3},
       {"code":"C","quantity":1},
       {"code":"D","quantity":2}
     ]
     ```

4. **Documentation with JSDoc**:  
   - Generate documentation using JSDoc by running:
     ```
     npm run doc
     ```
   - Open `docs/index.html` using "Open with Live Server" 
