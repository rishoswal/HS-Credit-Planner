// JavaScript source code

let course_collection =
    [
        {
            "school_id": "LWSD",
            "class9":
            {
                "english":
                    [
                        { "name": "English 9", "course_id": "" },
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
                        { "name": "English 9", "course_id": "" },
                        { "name": "English 9 Honors", "course_id": "" }
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
                        { "name": "English 9", "course_id": "" },
                        { "name": "English 9 Honors", "course_id": "" }
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
            "school_id": "Eastlake",
            "class9":
            {
                "english":
                    [
                        { "name": "English 9", "course_id": "" },
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
            // alert("Found a match! - " + school.school_id);
        }

    });

    return match;
}




