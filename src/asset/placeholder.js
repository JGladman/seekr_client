const jobPlaceholderContainers = [];
let id;

for (let i = 0; i < 100; i++){
    id = "jobPlaceholder" + String(i)
    jobPlaceholderContainers.push({
        "_id": id,
        "companyName": "Company Name",
        "jobTitle": "Job Title",
        "category": "Category",
        "applicationStep": 4,
        "priority": -1,
        "notes": "Consectetur laborum aliqua esse duis non labore mollit nostrud voluptate voluptate. Ullamco est tempor reprehenderit do nisi magna irure esse excepteur cillum. Commodo voluptate non ad eu nulla et occaecat aute anim veniam et consectetur reprehenderit consectetur.",
        "dateApplied": "MM DD YY",
        "interviewDate": "MM DD YY"
    })
}

module.exports = jobPlaceholderContainers;
