import moment from "moment/moment";

export const cardsData = [
  {
    title: "Revenue",
    change: 24,
    amount: 42056,
  },
  {
    title: "Orders",
    change: -14,
    amount: 52125.03,
  },
  {
    title: "Expenses",
    change: 18,
    amount: 1216.5,
  },
  {
    title: "Profit",
    change: 12,
    amount: 10125.0,
  },
];

export const ordersData = [
  {
    name: "Skatebnoard",
    type: "Illustration",
    items: 58,
    change: 290,
  },
  {
    name: "Language courses",
    type: "Illustration",
    items: 12,
    change: 72
  },
  {
    name: "Office Collaboration",
    type: "Illustration",
    items: 7,
    change: 70
  },
  {
    name: "Robot",
    type: "Illustration",
    items: 21,
    change: 15
  }
]


//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};


//* calendar Events
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Lunch Pary',
    start: todayStr + 'T09:00:00',

  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Head Meetup",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Payment Shedules",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}


// * tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Database Setup",
          description: "Firebase Integration"
        },
        {
          id: 2,
          title: "Data Flow",
          description: "Setup Diagram with other developers"
        },
      ]
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Real-time Analytics",
          description: "Integrate Realtime DB to show live user activities on the dashboard.",
        }
      ]
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Full Calendar Extension",
          description: "Make new events and store in global states"
        },
        {
          id: 11,
          title: "Notification System",
          description: "Build a notification component for real-time updates"
        }
      ]
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Data Table Page",
          description: "Implement Pagination and Sorting Functionality"
        },
        {
          id: 13,
          title: "Modular structre",
          description: "Write css in form of modules to reduce the naming conflicts"
        }
      ]
    }
  ]
}


// * user table data
export const userData = [
  {
    name: {
      firstName: 'Aaryan',
      lastName: 'Pinto',
    },
    address: 'Hadapsar',
    city: 'Pune',
    state: 'Maharashtra',
  },
  {
    name: {
      firstName: 'Priya',
      lastName: 'Verma',
    },
    address: '102 Nehru Nagar',
    city: 'Delhi',
    state: 'Delhi',
  },
  {
    name: {
      firstName: 'Rajesh',
      lastName: 'Singh',
    },
    address: '45 Sarojini Street',
    city: 'Jaipur',
    state: 'Rajasthan',
  },
  {
    name: {
      firstName: 'Sneha',
      lastName: 'Patel',
    },
    address: '22 MG Road',
    city: 'Ahmedabad',
    state: 'Gujarat',
  },
  {
    name: {
      firstName: 'Arjun',
      lastName: 'Reddy',
    },
    address: '789 LB Nagar',
    city: 'Hyderabad',
    state: 'Telangana',
  },
  {
    name: {
      firstName: 'Meera',
      lastName: 'Iyer',
    },
    address: '67 Brigade Road',
    city: 'Bangalore',
    state: 'Karnataka',
  },
  {
    name: {
      firstName: 'Vikram',
      lastName: 'Desai',
    },
    address: '908 Park Street',
    city: 'Pune',
    state: 'Maharashtra',
  },
  {
    name: {
      firstName: 'Kavita',
      lastName: 'Nair',
    },
    address: '34 Queen’s Road',
    city: 'Chennai',
    state: 'Tamil Nadu',
  },
  {
    name: {
      firstName: 'Anil',
      lastName: 'Yadav',
    },
    address: '126 Ashok Vihar',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
  }
];
