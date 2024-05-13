const info = {
    name: 'John Doe',
    email: 'johndoe@fakemail.com',
    phone: '(01) 23456-7890',
    location: 'Antarctica'
}

const sections = [
    {
        id: 0,
        title: 'Education',
        dataIds: [0]
    },
    {
        id: 1,
        title: 'Professional experience',
        dataIds: [1, 2]
    }
];

const data = [
    {
        id: 0,
        title: 'University of Whatever',
        startDate: 'Apr. 2020',
        endDate: 'Apr. 2024',
        role: 'PHD in Mathematics',
        info: 'Learned a lot of equations!',
        location: 'London'
    },
    {
        id: 1,
        title: 'John Accounting',
        startDate: 'May 2020',
        endDate: 'Current',
        role: 'Master Accountant',
        info: 'I account for everything, nothing gets past',
        location: 'New York City'
    },
    {
        id: 2,
        title: 'Joe Meals',
        startDate: 'Jan. 2003',
        endDate: 'Dec. 2009',
        role: 'Master Chef',
        info: "Cooked lots of spaghetti.",
        location: 'Tokyo' 
    }
]

export { info, sections, data };