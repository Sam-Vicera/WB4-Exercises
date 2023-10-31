

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
    ];

    for(i = 0; i < students.length; i++){
        let studentName = students[i]
        let score = 0;
        for(j = 0; j < students.scores; j++){
           score += students.scores[j]
           
        }
        let studentAverage = score/(4);
        console.log(`Student: ${studentName} Average Test Scores: ${studentAverage} `)
    }