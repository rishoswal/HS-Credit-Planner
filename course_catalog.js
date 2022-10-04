

let course_collection =
    [
        {
            "school_id": "redmond",
            "class9":
            {
                "english":
                    [
                        { "name": "English 9 Redmond", "course_id": "" },
                        { "name": "English 9 Honors", "course_id": "" }
                    ],
                "social_studies":
                    [
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                    ]
            },
            "class10":
            {
                "english":
                    [
                        { "name": "English 10", "course_id": "" },
                        { "name": "English 10 Honors", "course_id": "" }
                    ],
                "social_studies":
                    [
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                    ]
            },
            "class11":
            {
                "english":
                    [
                        { "name": "English 11", "course_id": "" },
                        { "name": "English 11 Honors", "course_id": "" }
                    ],
                "social_studies":
                    [
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                    ]
            },
            "class12":
            {
                "english":
                    [
                        { "name": "English 12", "course_id": "" },
                        { "name": "English 12 Honors", "course_id": "" }
                    ],
                "social_studies":
                    [
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                    ]
            }
        },

        {
            "school_id": "eastlake",
            "class9":
            {
                "english":
                    [
                        { "name": "English 9 Eastlake", "course_id": "" },
                        { "name": "English 9 Honors", "course_id": "" }
                    ],
                "social_studies":
                    [
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                    ]
            },
        }
    ];

function GetCatalog(schoolId)
{
    var match = null;

    course_collection.forEach(school => {

        if (school.school_id === schoolId)
        {
            match = school;
        }

    });

    return match;
}




