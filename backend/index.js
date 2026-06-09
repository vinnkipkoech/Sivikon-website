import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 10000;
const allowedOrigins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean);

const corsOptions = allowedOrigins.length > 0 ? { origin: allowedOrigins } : { origin: true };

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Sivikon backend is running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', (req, res) => {
  const {
    companyName,
    contactPerson,
    businessEmail,
    phoneNumber,
    serviceTrack,
    projectScope,
    budget,
  } = req.body;

  if (!companyName || !contactPerson || !businessEmail || !projectScope) {
    return res.status(400).json({
      error: 'companyName, contactPerson, businessEmail, and projectScope are required.',
    });
  }

  console.log('Received contact request:', {
    companyName,
    contactPerson,
    businessEmail,
    phoneNumber,
    serviceTrack,
    budget,
    projectScope,
  });

  return res.status(201).json({
    success: true,
    message: 'Contact request received. We will get back to you shortly.',
  });
});

app.listen(port, () => {
  console.log(`Sivikon backend listening on port ${port}`);
});
