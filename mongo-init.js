
// Create database
db = db.getSiblingDB('rksy-db');

// Validation Schema for 'users' collection
db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      titleusername: 'System user',
      required: ['username', 'email', 'phone'],
      properties: {
        username: {
          bsonType: 'string',
          description: 'User Name',
          minlenght: 4
        },
        email: {
          bsonType: 'string',
          description: 'Email address'
        },
        phone: {
          bsonType: 'string',
          description: 'Phone number',
          minlenght: 9
        },
      }
    }
  }
});

db.users.createIndex({ username: 1 }, { unique:  true });

// Validation Schema for 'booking' collection
db.createCollection('booking', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      titleusername: 'System dates',
      required: ['date'],
      properties: {
        date: {
          bsonType: 'string',
          description: 'User name'
        },
      }
    }
  }
});
db.booking.createIndex({ date: 1 }, { unique:  true });

// Validation Schema for 'service' collection
db.createCollection('service', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      titleusername: 'System service',
      required: ["name"],
      properties: {
        name: {
          bsonType: 'string',
          description: 'Service name'
        },
      }
    }
  }
});
db.booking.createIndex({ name: 1 }, { unique:  true });

db.booking.insertMany([
  {
    date: "2023-09-07T08:00:00Z",
    username: "jhoe_doe",
    start: "2023-09-07T10:30:00Z",
    end: "2023-09-07T11:00:00Z",
    service_name: "cut_hair"
  }
])

db.service.insertMany([
  {
    name: "Cut hair",
    service_name: "cut_hair",
    duration: "30",
  }
])

db.users.insertMany([
  {
    password: '$2a$12$npf89psKjdvqWscAMu89Tu6Ax3JruSFWZQrbVhSQXNAfxs9JE8SDe',
    name: 'Jhoe Doe',
    username: 'jhoe_doe',
    phone: '+34657849213',
    email: 'test@email.com',
    last_visit: '2023-09-07T08:07:12Z',
  }
]);