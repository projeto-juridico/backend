import express from 'express';
import { ConsulService } from './consulService';

const app = express();
const PORT = process.env.PORT || 7578;

app.get('/', (req, res) => {
  res.send('Hello, this is a service registered with Consul!');
});

// Start the server and register with Consul
app.listen(PORT, () => {
  console.log(`Service is running on port ${PORT}`);

  // Register the service with Consul
  const consulService = new ConsulService();
  consulService.registerService('example-service', 'localhost', PORT);
});
